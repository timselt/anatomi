// 3 boyutlu görüntüleyici: modeli yükler, döndürme/yakınlaştırma, kesit alma, seçme ve vurgulama.
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const VURGU = new T.Color('#16b8a6');   // seçili yapı
// Yumuşak doku yüzeyi: dünya konumuna bağlı çok ince bir pürüz (yaklaşık 1-2 mm) normali hafifçe bozar; yüzey plastik değil doku gibi görünür.
// Modellerde doku kaplaması (UV) olmadığı için desen koordinatı yerine konum kullanılır. Islak parlaklık (clearcoat) pürüzsüz kalır.
function dokuEkle(m) {
  m.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vDoku;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvDoku = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying vec3 vDoku;
float dokuH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float dokuG(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dokuH(i), dokuH(i + vec3(1,0,0)), f.x), mix(dokuH(i + vec3(0,1,0)), dokuH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(dokuH(i + vec3(0,0,1)), dokuH(i + vec3(1,0,1)), f.x), mix(dokuH(i + vec3(0,1,1)), dokuH(i + vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
{ vec3 q = vDoku * 650.0; vec3 b = vec3(dokuG(q), dokuG(q + 19.1), dokuG(q + 37.7)) - 0.5;
  normal = normalize(normal + 0.22 * b); }`);
  };
  m.customProgramCacheKey = () => 'doku1';
}

const SORU = new T.Color('#ff8a00');    // sınavda sorulan yapı

export class Goruntuleyici {
  constructor(kap, atlas, parcaSistem, renkler) {
    this.kap = kap; this.atlas = atlas; this.parcaSistem = parcaSistem;
    this.meshler = []; this.acikSistemler = new Set(); this.gizli = new Set();
    this.yalniz = null; this.soluk = null; this.secili = new Set(); this.soru = new Set();
    this.kirli = true; this.tikla = () => {}; this.uzerinde = () => {};
    this.saydamSistem = new Set(); this.patlama = 0; this.etiketler = []; this.olcumNoktalari = [];
    this.renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = T.SRGBColorSpace; this.renderer.toneMapping = T.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.05;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0); // zemin rengi sayfanın arka planından gelir
    this.renderer.localClippingEnabled = true;
    kap.appendChild(this.renderer.domElement);
    this.etiketKatmani = document.createElement('div'); this.etiketKatmani.className = 'etiket-katmani'; kap.appendChild(this.etiketKatmani);
    this.sahne = new T.Scene();
    this.kamera = new T.PerspectiveCamera(32, 1, 0.005, 50);
    this.kontrol = new OrbitControls(this.kamera, this.renderer.domElement);
    this.kontrol.enableDamping = true; this.kontrol.dampingFactor = 0.09;
    this.kontrol.zoomToCursor = true; this.kontrol.screenSpacePanning = true; this.kontrol.panSpeed = 1.1; this.kontrol.rotateSpeed = 0.9;
    this.kontrol.minDistance = 0.012; this.kontrol.maxDistance = 8;
    this.kontrol.addEventListener('change', () => { this.kirli = true; });
    // Yumuşak ortam ışığı (stüdyo aydınlatması): yüzeyler daha hacimli görünür.
    const pmrem = new T.PMREMGenerator(this.renderer), oda = new RoomEnvironment();
    this.sahne.environment = pmrem.fromScene(oda, 0.04).texture; oda.dispose(); pmrem.dispose();
    this.sahne.add(new T.HemisphereLight(0xffffff, 0xa7acb2, 0.55));
    const zemin = new T.Mesh(new T.CircleGeometry(0.62, 96), new T.MeshBasicMaterial({ color: 0xc9d1d9, transparent: true, opacity: 0.55 }));
    zemin.rotation.x = -Math.PI / 2; zemin.position.y = -0.012; this.sahne.add(zemin);
    const halka = new T.Mesh(new T.RingGeometry(0.62, 0.626, 128), new T.MeshBasicMaterial({ color: 0x8c969f, transparent: true, opacity: 0.6, side: T.DoubleSide }));
    halka.rotation.x = -Math.PI / 2; halka.position.y = -0.011; this.sahne.add(halka);
    // Ayak altında yumuşak gölge: model zemine basıyormuş gibi durur.
    const gt = document.createElement('canvas'); gt.width = gt.height = 128;
    const gc = gt.getContext('2d'), gr = gc.createRadialGradient(64, 64, 4, 64, 64, 64);
    gr.addColorStop(0, 'rgba(20,28,36,.55)'); gr.addColorStop(1, 'rgba(20,28,36,0)'); gc.fillStyle = gr; gc.fillRect(0, 0, 128, 128);
    const golge = new T.Mesh(new T.PlaneGeometry(0.7, 0.42), new T.MeshBasicMaterial({ map: new T.CanvasTexture(gt), transparent: true, depthWrite: false }));
    golge.rotation.x = -Math.PI / 2; golge.position.y = -0.009; this.sahne.add(golge);
    const d1 = new T.DirectionalLight(0xfffaf4, 1.5); d1.position.set(-2, 4, 3); this.sahne.add(d1);
    const d2 = new T.DirectionalLight(0xe9f0ff, 1.0); d2.position.set(2, 2, -3); this.sahne.add(d2);
    this.kesit = new T.Plane(new T.Vector3(0, -1, 0), 2);
    this.kesitAcik = false;
    this.malzeme = {}; this.solukMalzeme = {};
    for (const [id, renk] of Object.entries(renkler)) {
      const saydam = id === 'deri';
      // Yumuşak dokular hafif ıslak ve parlak, kemik mat görünür.
      const islak = ['kalp', 'sindirim', 'solunum', 'bosaltim', 'ureme', 'hormon', 'duyu', 'gebelik', 'lenf'].includes(id);
      // Islak dokularda kadifemsi kenar parlaklığı (sheen) ve ince yüzey pürüzü de vardır.
      this.malzeme[id] = new T.MeshPhysicalMaterial({ color: renk, roughness: id === 'iskelet' ? 0.75 : islak ? 0.45 : 0.6, metalness: 0.03, clearcoat: islak ? 0.35 : 0, clearcoatRoughness: 0.35, sheen: islak ? 0.35 : 0, sheenRoughness: 0.55, sheenColor: 0xfff0ea, envMapIntensity: 0.75, side: T.DoubleSide, transparent: saydam, opacity: saydam ? 0.25 : 1, depthWrite: !saydam });
      this.solukMalzeme[id] = new T.MeshStandardMaterial({ color: renk, roughness: 0.6, side: T.DoubleSide, transparent: true, opacity: 0.12, depthWrite: false });
    }
    for (const [id, m] of Object.entries(this.malzeme)) if (m.sheen) dokuEkle(m);
    // Seçili yapı kenar çizgisiyle değil, bütünüyle renklendirilir.
    this.vurguMalzeme = new T.MeshPhysicalMaterial({ color: VURGU, emissive: VURGU, emissiveIntensity: 0.22, roughness: 0.45, clearcoat: 0.3, clearcoatRoughness: 0.35, side: T.DoubleSide });
    this.soruMalzeme = new T.MeshStandardMaterial({ color: SORU, emissive: SORU, emissiveIntensity: 0.45, roughness: 0.4, side: T.DoubleSide });
    this.tumMalzemeler = [...Object.values(this.malzeme), ...Object.values(this.solukMalzeme), this.vurguMalzeme, this.soruMalzeme];
    this.gorunus('on', false);
    this._olaylar();
    new ResizeObserver(() => this._boyut()).observe(kap);
    this._boyut();
    const dongu = () => { requestAnimationFrame(dongu); this._kare(); };
    dongu();
  }

  async yukle(ilerleme) {
    const gruplar = this.atlas.chunks.map(() => []);
    this.atlas.parts.forEach((p, i) => gruplar[p.chunk].push(i));
    let biten = 0;
    const tek = async ci => {
      const c = this.atlas.chunks[ci];
      const yanit = await fetch('data' + c.gzip);
      if (!yanit.ok) throw new Error('Model dosyası yüklenemedi: ' + c.gzip);
      let tampon = await yanit.arrayBuffer();
      const imza = new Uint8Array(tampon, 0, 2);
      if (imza[0] === 0x1f && imza[1] === 0x8b) tampon = await new Response(new Blob([tampon]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
      if (tampon.byteLength !== c.bytes) throw new Error('Model dosyası eksik indi. Sayfayı yenileyin.');
      for (const i of gruplar[ci]) {
        const p = this.atlas.parts[i];
        const g = new T.BufferGeometry();
        g.setAttribute('position', new T.BufferAttribute(new Float32Array(tampon, p.positions, p.vertexCount * 3), 3));
        g.setAttribute('normal', new T.BufferAttribute(new Int16Array(tampon, p.normals, p.vertexCount * 3), 3, true));
        g.setIndex(new T.BufferAttribute(new Uint32Array(tampon, p.indices, p.indexCount), 1));
        g.computeBoundingSphere(); g.computeBoundingBox();
        const m = new T.Mesh(g, this.malzeme[this.parcaSistem[i]]);
        m.userData.i = i; m.matrixAutoUpdate = false;
        this.meshler[i] = m; this.sahne.add(m);
      }
      biten++; ilerleme?.(biten / this.atlas.chunks.length);
      this.guncelle();
    };
    let sira = 0;
    await Promise.all([0, 1, 2].map(async () => { while (sira < this.atlas.chunks.length) await tek(sira++); }));
  }

  // Sonradan yüklenen ek katmandan bir parça ekler; parçanın sıra numarasını döndürür.
  ekParca(geometry, sistem, bounds) {
    const i = this.atlas.parts.length;
    this.atlas.parts.push({ bounds }); this.parcaSistem.push(sistem); this._kutu = null;
    const m = new T.Mesh(geometry, this.malzeme[sistem]);
    m.userData.i = i; m.matrixAutoUpdate = false;
    this.meshler[i] = m; this.sahne.add(m);
    return i;
  }

  // Organın kendi rengini taşıyan malzeme kopyası (ör. karaciğer kızıl kahve, safra kesesi yeşil). Kopyalar saydamlık ve kesit ayarlarına da katılır.
  _renkli(soluk, s, renk) {
    const depo = soluk ? this.solukMalzeme : this.malzeme, k = s + '|' + renk;
    if (!depo[k]) {
      // Renk "#rrggbb|0.55" biçimindeyse ikinci kısım saydamlıktır (ör. arkasındaki bağırsakları gösteren yağlı omentum).
      const [hex, alfa] = renk.split('|'), m = depo[s].clone(); m.color.set(hex);
      if (alfa && !soluk) { m.transparent = true; m.opacity = Number(alfa); m.depthWrite = false; m.userData.secilebilir = true; } // tül gibi çizilse de tıklanabilir
      if (depo[s].onBeforeCompile) { m.onBeforeCompile = depo[s].onBeforeCompile; m.customProgramCacheKey = depo[s].customProgramCacheKey; }
      depo[k] = m; this.tumMalzemeler.push(m);
    }
    return depo[k];
  }
  // Görünürlük ve renkleri durum bilgisine göre yeniden kurar.
  guncelle() {
    this.meshler.forEach((m, i) => {
      if (!m) return;
      const s = this.parcaSistem[i];
      const soru = this.soru.has(i), secili = this.secili.has(i);
      let gorunur = this.acikSistemler.has(s) && !this.gizli.has(i);
      if (this.yalniz) gorunur = this.yalniz.has(i);
      if (soru) gorunur = true;
      m.visible = gorunur;
      const r = this.parcaRenk?.(i), soluk = (this.soluk && !this.soluk.has(i)) || this.saydamSistem.has(s);
      m.material = soru ? this.soruMalzeme : secili ? this.vurguMalzeme : r ? this._renkli(soluk, s, r) : soluk ? this.solukMalzeme[s] : this.malzeme[s];
      const kes = this.icAcik?.duzlem.get(i);
      if (kes) { // kesilen yapı kendi malzemesinin kesitli kopyasıyla çizilir
        const mz = this.icAcik.malzeme, anahtar = m.material.uuid + kes.constant;
        if (!mz.has(anahtar)) { const k = m.material.clone(); if (m.material.onBeforeCompile) { k.onBeforeCompile = m.material.onBeforeCompile; k.customProgramCacheKey = m.material.customProgramCacheKey; } k.clippingPlanes = [...(m.material.clippingPlanes ?? []), kes]; mz.set(anahtar, k); }
        m.material = mz.get(anahtar);
      }
      m.renderOrder = m.material.transparent ? 1 : 0;
    });
    this.kirli = true;
  }

  kesitAyarla(acik, eksen = 'y', oran = 0.5, ters = false) {
    this.kesitAcik = acik;
    const kutu = this._govdeKutusu();
    const normal = { y: new T.Vector3(0, -1, 0), z: new T.Vector3(0, 0, -1), x: new T.Vector3(-1, 0, 0) }[eksen];
    if (ters) normal.negate();
    const deger = kutu.min[eksen] + (kutu.max[eksen] - kutu.min[eksen]) * oran;
    this.kesit.normal.copy(normal);
    this.kesit.constant = ters ? -deger : deger;
    for (const mz of this.tumMalzemeler) { mz.clippingPlanes = acik ? [this.kesit] : []; mz.needsUpdate = true; }
    if (this.ao) { this.ao.normalMaterial.clippingPlanes = acik ? [this.kesit] : []; this.ao.normalMaterial.needsUpdate = true; }
    this.kirli = true;
  }

  gorunus(yon, animasyon = true) {
    const h = { on: [0, 0.95, 3.4], arka: [0, 0.95, -3.4], sol: [3.4, 0.95, 0], sag: [-3.4, 0.95, 0], ust: [0, 4, 0.01] }[yon];
    this._git(new T.Vector3(...h), new T.Vector3(0, 0.9, 0), animasyon);
  }

  // ---- 3 boyutlu akış: bir yol boyunca akan parçacıklar (kan, lokma, hava...) ----
  // noktalar: yolun geçtiği noktalar; renk(t): yolun t (0-1) yerindeki renk; yayilim: sürünün yolda kapladığı oran (1 = kesintisiz akış).
  // yollar: bir ya da birkaç yol (her biri nokta dizisi; ör. sağ ve sol akciğere ayrılan iki kol). renk(t, k): k. yolun t yerindeki renk.
  // uzunluk: sürünün yol üzerindeki boyu (metre; verilirse yayilim yerine geçer). icten: kamera takipte yolun içinde, sürünün hemen arkasında durur.
  // onden: takipte kamera vücudun önünde, dışarıda durur ve yalnız lokmayı ortalar. soluk: diğer yapıların saydamlığı. dagilim: parçacıkların yoldan sapması.
  akisKur(yollar, renk, { adet = 140, boyut = 0.0035, yayilim = 1, uzunluk = 0, icten = false, onden = false, soluk = 0.2, dagilim = 2.2 } = {}) {
    this.akisSil();
    const egriler = yollar.map(n => { const e = new T.CatmullRomCurve3(n, false, 'centripetal', 0.5); e.arcLengthDivisions = Math.max(200, n.length * 12); return e; });
    if (uzunluk) yayilim = uzunluk / egriler[0].getLength();
    const ag = new T.InstancedMesh(new T.SphereGeometry(boyut, 12, 12), new T.MeshBasicMaterial({ toneMapped: false, depthTest: false, transparent: true, opacity: 0.95 }), adet);
    ag.renderOrder = 30; ag.frustumCulled = false; this.sahne.add(ag);
    const sapma = Array.from({ length: adet }, () => new T.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).multiplyScalar(boyut * dagilim));
    const cizgiler = egriler.map(e => { // yolun kendisi: ince çizgi
      const c = new T.Line(new T.BufferGeometry().setFromPoints(e.getSpacedPoints(Math.max(400, e.points.length * 6))), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthTest: false }));
      c.renderOrder = 29; this.sahne.add(c); return c;
    });
    for (const m of Object.values(this.solukMalzeme)) m.opacity = soluk;
    this.akis = { egriler, ag, cizgiler, adet, renk, yayilim, sapma, icten, onden, faz: 0, sonFaz: 0, takip: false };
  }
  // k. yolun n. noktasının yol uzunluğuna göre yeri (0-1).
  akisOran(k, n) {
    const e = this.akis.egriler[k], u = e.getLengths(), b = u.length - 1, son = e.points.length - 1;
    return u[Math.round((Math.min(n, son) / son) * b)] / u[b];
  }
  // Akışı ilerletir; öndeki parçacığın yoldaki yerini (0-1) döndürür.
  akisAdim(ilerleme) {
    const a = this.akis; if (!a) return 0;
    a.faz = (((a.faz + ilerleme) % 1) + 1) % 1;
    const m = new T.Matrix4(), c = new T.Color(), p = new T.Vector3(), K = a.egriler.length;
    for (let i = 0; i < a.adet; i++) {
      let t = a.faz - (Math.floor(i / K) / (a.adet / K)) * a.yayilim; t = ((t % 1) + 1) % 1;
      a.egriler[i % K].getPointAt(t, p).add(a.sapma[i]);
      // Kamera yolculuğa katıldığında yakınındaki parçacıklar küçülür ki görüşü kapatmasın.
      const olcek = (a.yayilim < 1 && i < K ? 2.6 : 1) * (a.takip ? Math.min(1, Math.max(0, (p.distanceTo(this.kamera.position) - 0.03) / 0.1)) * 0.6 : 1);
      m.makeScale(olcek, olcek, olcek).setPosition(p); a.ag.setMatrixAt(i, m); a.ag.setColorAt(i, c.set(a.renk(t, i % K)));
    }
    a.ag.instanceMatrix.needsUpdate = true; if (a.ag.instanceColor) a.ag.instanceColor.needsUpdate = true;
    if (a.takip && a.icten) { // kamera borunun içinde, lokmanın hemen arkasında ilerler
      const e = a.egriler[0], boy = e.getLength();
      this.kamera.position.lerp(e.getPointAt(Math.max(a.faz - 0.05 / boy, 0)), 0.15); this.kontrol.target.lerp(e.getPointAt(Math.min(a.faz + 0.04 / boy, 1)), 0.2);
    } else if (a.takip && a.onden) { // kamera vücudun önünde, dışarıda; yalnız lokmayı ekranın ortasında tutar
      const on = a.egriler[0].getPointAt(a.faz), atladi = Math.abs(a.faz - a.sonFaz) > 0.02; // "Sonraki" ile atlanınca kamera geride kalmaz
      this.kamera.position.lerp(on.clone().add(new T.Vector3(0.04, 0.03, 0.36)), atladi ? 1 : 0.06); this.kontrol.target.lerp(on, atladi ? 1 : 0.1);
    } else if (a.takip) { // kamera öndeki parçacığın peşinden gider
      const e = a.egriler[0], on = e.getPointAt(a.faz), ileri = e.getPointAt(Math.min(a.faz + 0.025, 1)), teget = e.getTangentAt(a.faz);
      // Kamera lokmanın önünden ve hafif yanından, ~18 cm uzaktan bakar: organ duvarları saydam olduğu için lokma görünür, kamera organın içine girmez.
      const yer = on.clone().add(new T.Vector3(0.07, 0.04, 0.16));
      this.kamera.position.lerp(yer, 0.08); this.kontrol.target.lerp(ileri, 0.12);
    }
    a.sonFaz = a.faz; this.kirli = true; return a.faz;
  }
  // Boru biçimli bir organın gerçek orta hattı. Yüzey üzerinde bir uçtan ölçülen uzaklığa göre dilimlenir; bu yüzden kıvrımlı borularda da
  // (onikiparmak bağırsağı, kalın bağırsak) çizgi borunun içinden geçer. Sonuç: { noktalar, par (her köşenin boru boyunca yeri 0-1), boyu } ya da null.
  tupHat(i) {
    this._tup ??= new Map();
    if (!this._tup.has(i)) {
      const geo = this.meshler[i]?.geometry;
      if (!geo) return null; // parça henüz yüklenmediyse sonuç önbelleğe yazılmaz
      this._tup.set(i, geo?.index && geo.attributes.position.count >= 60 ? this._tupHesapla(geo.attributes.position.array, geo.index.array) : null);
    }
    return this._tup.get(i);
  }
  _tupHesapla(P, I) {
    // 1) Aynı yerdeki köşeleri birleştir (model köşeleri yüzey dikişlerinde bölünmüş olabilir).
    const n = P.length / 3, es = new Int32Array(n), harita = new Map(); let m = 0;
    for (let v = 0; v < n; v++) {
      const k = Math.round(P[v * 3] * 2e4) + '_' + Math.round(P[v * 3 + 1] * 2e4) + '_' + Math.round(P[v * 3 + 2] * 2e4);
      let w = harita.get(k); if (w === undefined) { w = m++; harita.set(k, w); } es[v] = w;
    }
    const X = new Float32Array(m * 3);
    for (let v = 0; v < n; v++) { X[es[v] * 3] = P[v * 3]; X[es[v] * 3 + 1] = P[v * 3 + 1]; X[es[v] * 3 + 2] = P[v * 3 + 2]; }
    // 2) Komşuluk listesi (üçgen kenarları)
    const bas = new Int32Array(m + 1);
    const kenar = f => { for (let t = 0; t + 2 < I.length; t += 3) for (let e = 0; e < 3; e++) { const a = es[I[t + e]], b = es[I[t + (e + 1) % 3]]; if (a !== b) { f(a, b); f(b, a); } } };
    kenar(a => { bas[a + 1]++; });
    for (let v = 0; v < m; v++) bas[v + 1] += bas[v];
    const komsu = new Int32Array(bas[m]), yer = bas.slice(0, m);
    kenar((a, b) => { komsu[yer[a]++] = b; });
    // 3) En büyük bağlı parça
    const parca = new Int32Array(m).fill(-1), yigin = new Int32Array(m); let enIyi = 0, enBoy = 0, sayi = 0;
    for (let s = 0; s < m; s++) {
      if (parca[s] >= 0) continue;
      let u = 0, boy = 0; yigin[u++] = s; parca[s] = sayi;
      while (u) { const v = yigin[--u]; boy++; for (let e = bas[v]; e < bas[v + 1]; e++) { const w = komsu[e]; if (parca[w] < 0) { parca[w] = sayi; yigin[u++] = w; } } }
      if (boy > enBoy) { enBoy = boy; enIyi = sayi; }
      sayi++;
    }
    // 4) Yüzey üzerinde en kısa yol uzaklıkları (Dijkstra, ikili yığınla)
    const uzaklik = kaynak => {
      // Uzaklıklar tam hassasiyetle tutulur (düşük hassasiyet yuvarlama farkıyla aynı köşeyi tekrar tekrar kuyruğa sokuyordu).
      const kap = bas[m] * 2 + 2, d = new Float64Array(m).fill(Infinity), hd = new Float64Array(kap), hn = new Int32Array(kap); let hb = 0, tur = 0;
      const it = (x, v) => { if (hb >= kap) return; let c = hb++; while (c > 0) { const p = (c - 1) >> 1; if (hd[p] <= x) break; hd[c] = hd[p]; hn[c] = hn[p]; c = p; } hd[c] = x; hn[c] = v; };
      const cek = () => {
        const v = hn[0], x = hd[--hb], w = hn[hb]; let c = 0;
        for (;;) { let k = c * 2 + 1; if (k >= hb) break; if (k + 1 < hb && hd[k + 1] < hd[k]) k++; if (hd[k] >= x) break; hd[c] = hd[k]; hn[c] = hn[k]; c = k; }
        hd[c] = x; hn[c] = w; return v;
      };
      d[kaynak] = 0; it(0, kaynak);
      while (hb) {
        if (++tur > kap * 2) return null; // güvenlik sınırı: hesap bitmezse bu organ boru sayılmaz
        const dv = hd[0], v = cek(); if (dv > d[v]) continue;
        for (let e = bas[v]; e < bas[v + 1]; e++) {
          const w = komsu[e], x = dv + Math.hypot(X[v * 3] - X[w * 3], X[v * 3 + 1] - X[w * 3 + 1], X[v * 3 + 2] - X[w * 3 + 2]);
          if (x < d[w]) { d[w] = x; it(x, w); }
        }
      }
      return d;
    };
    const enUzak = d => { let b = -1, x = -1; for (let v = 0; v < m; v++) if (parca[v] === enIyi && d[v] > x && d[v] < Infinity) { x = d[v]; b = v; } return b; };
    let ilk = 0; while (ilk < m && parca[ilk] !== enIyi) ilk++;
    const d0 = uzaklik(ilk); if (!d0) return null;
    const A = enUzak(d0), dA = A >= 0 ? uzaklik(A) : null; if (!dA) return null;
    const boyu = dA[enUzak(dA)];
    if (!(boyu > 0.04)) return null; // boru denecek kadar uzun değil
    // 5) Uzaklığa göre dilimle; her dilimin ağırlık merkezi orta hattın bir noktasıdır.
    const dilim = Math.min(90, Math.max(6, Math.round(boyu / 0.012))), top = new Float64Array(dilim * 4);
    for (let v = 0; v < m; v++) {
      if (parca[v] !== enIyi) continue;
      const b = Math.min(dilim - 1, Math.floor((dA[v] / boyu) * dilim)) * 4;
      top[b] += X[v * 3]; top[b + 1] += X[v * 3 + 1]; top[b + 2] += X[v * 3 + 2]; top[b + 3]++;
    }
    let noktalar = [];
    for (let b = 0; b < dilim; b++) if (top[b * 4 + 3]) noktalar.push(new T.Vector3(top[b * 4] / top[b * 4 + 3], top[b * 4 + 1] / top[b * 4 + 3], top[b * 4 + 2] / top[b * 4 + 3]));
    if (noktalar.length < 4) return null;
    for (let tur = 0; tur < 2; tur++) noktalar = noktalar.map((p, k) => (k && k < noktalar.length - 1 ? p.clone().multiplyScalar(2).add(noktalar[k - 1]).add(noktalar[k + 1]).multiplyScalar(0.25) : p));
    const par = new Float32Array(n);
    for (let v = 0; v < n; v++) par[v] = parca[es[v]] === enIyi ? dA[es[v]] / boyu : -1;
    return { noktalar, par, boyu };
  }
  // Kasılma dalgası (peristaltizm): borunun t (0-1) yerindeki lokmanın arkasını daraltır, bulunduğu yeri hafif genişletir.
  // yon: yolun boruyu hangi yönde geçtiği (+1 ya da -1). t null verilirse boru eski hâline döner.
  tupSik(i, t, yon = 1) {
    const d = this._tup?.get(i), p = this.meshler[i]?.geometry.attributes.position; if (!d || !p) return;
    d.ilk ??= p.array.slice();
    if (t === null) { if (d.bozuk) { p.array.set(d.ilk); p.needsUpdate = true; d.bozuk = false; d.sonT = null; this.meshler[i].frustumCulled = true; this.kirli = true; } return; }
    if (d.bozuk && d.sonT === t) return; // lokma durduysa (duraklatma) aynı hesap tekrarlanmaz
    d.sonT = t; this.meshler[i].frustumCulled = false; // şişen bölüm ekran kenarında kesilmesin
    const A = p.array, I = d.ilk, N = d.noktalar, son = N.length - 1;
    for (let v = 0, j = 0; v < d.par.length; v++, j += 3) {
      const u = d.par[v], f = (u - t) * yon;
      const k = u < 0 ? 1 : 1 - 0.38 * Math.exp(-(((f + 0.075) / 0.045) ** 2)) + 0.14 * Math.exp(-((f / 0.05) ** 2));
      if (Math.abs(k - 1) < 0.004) { A[j] = I[j]; A[j + 1] = I[j + 1]; A[j + 2] = I[j + 2]; continue; }
      const b = N[Math.round(u * son)];
      A[j] = b.x + (I[j] - b.x) * k; A[j + 1] = b.y + (I[j + 1] - b.y) * k; A[j + 2] = b.z + (I[j + 2] - b.z) * k;
    }
    p.needsUpdate = true; d.bozuk = true; this.kirli = true;
  }
  // Bir grup yapının orta hattı: boru biçimli yapılarda (damar, yemek borusu...) uzun eksen boyunca dilimlerin ağırlık merkezleri; değilse tek merkez.
  ortaHat(indeksler) {
    const kutu = new T.Box3(), v = new T.Vector3(), nokta = [];
    for (const i of indeksler) {
      const p = this.meshler[i]?.geometry.attributes.position; if (!p) continue;
      const adim = Math.max(1, Math.floor(p.count / 2500));
      for (let k = 0; k < p.count; k += adim) { v.fromBufferAttribute(p, k); kutu.expandByPoint(v); nokta.push(v.x, v.y, v.z); }
    }
    if (!nokta.length) return [];
    const b = kutu.getSize(new T.Vector3()), boy = [b.x, b.y, b.z], e = boy.indexOf(Math.max(...boy)), sirali = [...boy].sort((x, y) => y - x);
    if (sirali[0] < 0.04 || sirali[0] < sirali[1] * 1.8) return [kutu.getCenter(new T.Vector3())];
    const n = Math.min(9, Math.max(3, Math.round(sirali[0] / 0.03))), alt = kutu.min.getComponent(e), top = Array.from({ length: n }, () => [0, 0, 0, 0]);
    for (let k = 0; k < nokta.length; k += 3) {
      const d = top[Math.min(n - 1, Math.floor(((nokta[k + e] - alt) / sirali[0]) * n))];
      d[0] += nokta[k]; d[1] += nokta[k + 1]; d[2] += nokta[k + 2]; d[3]++;
    }
    return top.filter(d => d[3]).map(d => new T.Vector3(d[0] / d[3], d[1] / d[3], d[2] / d[3]));
  }
  akisSil() {
    const a = this.akis; if (!a) return;
    for (const n of [a.ag, ...a.cizgiler]) { this.sahne.remove(n); n.geometry.dispose(); n.material.dispose(); }
    for (const m of Object.values(this.solukMalzeme)) m.opacity = 0.12;
    this.akis = null; this.kirli = true;
  }
  // ---- Parçalama: bir grup yapıyı ortak merkezden dışa doğru yumuşakça ayırır (oran 0 = topla) ----
  parcala(indeksler, oran) {
    const orta = new T.Box3(); for (const i of indeksler) orta.expandByPoint(this.merkezHam(i));
    const c = orta.getCenter(new T.Vector3()), bas = performance.now();
    const hedef = indeksler.map(i => this.merkezHam(i).sub(c).multiplyScalar(oran)), ilk = indeksler.map(i => this.meshler[i].position.clone());
    const adim = () => {
      const k = Math.min((performance.now() - bas) / 650, 1), e = 1 - Math.pow(1 - k, 3);
      indeksler.forEach((i, n) => { const m = this.meshler[i]; m.position.lerpVectors(ilk[n], hedef[n], e); m.updateMatrix(); });
      this.kirli = true; if (k < 1) requestAnimationFrame(adim);
    };
    adim();
  }
  merkezHam(i) { const b = this.atlas.parts[i].bounds; return new T.Vector3((b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2, (b[0][2] + b[1][2]) / 2); }
  // İçini aç: verilen yapıların ön yarısını keser; duvar ve iç boşluk dışarıdan görünür. Boş dizi kapatır.
  // ortak: bütün parçalar aynı düzlemden kesilir (kalp gibi iç içe odacıklar); değilse her parça kendi ortasından kesilir (bağırsak gibi kıvrımlı borular).
  icAc(indeksler, ortak = true) {
    if (!indeksler.length) { this.icAcik = null; return this.guncelle(); }
    const kutu = new T.Box3(); for (const i of indeksler) { kutu.expandByPoint(new T.Vector3(...this.atlas.parts[i].bounds[0])); kutu.expandByPoint(new T.Vector3(...this.atlas.parts[i].bounds[1])); }
    const duzlem = z => new T.Plane(new T.Vector3(0, 0, -1), z), hepsi = duzlem(kutu.getCenter(new T.Vector3()).z);
    this.icAcik = { duzlem: new Map(indeksler.map(i => [i, ortak ? hepsi : duzlem(this.merkezHam(i).z)])), malzeme: new Map() };
    this.guncelle();
  }


  // Gezinme düğmeleri ve klavye için: görüntüyü kaydırır (ekranın oranı olarak).
  kaydir(dx, dy) {
    const uzaklik = this.kamera.position.distanceTo(this.kontrol.target), adim = uzaklik * 0.14;
    const sag = new T.Vector3().setFromMatrixColumn(this.kamera.matrix, 0), yukari = new T.Vector3().setFromMatrixColumn(this.kamera.matrix, 1);
    const k = sag.multiplyScalar(dx * adim).add(yukari.multiplyScalar(dy * adim));
    this._git(this.kamera.position.clone().add(k), this.kontrol.target.clone().add(k), true);
  }
  yakinlastir(oran) {
    const h = this.kontrol.target, yeni = h.clone().add(this.kamera.position.clone().sub(h).multiplyScalar(oran));
    if (yeni.distanceTo(h) > this.kontrol.minDistance && yeni.distanceTo(h) < this.kontrol.maxDistance) this._git(yeni, h.clone(), true);
  }

  // Canlandırmalar: bir parçaya dönüşüm uygular; matris verilmezse parça yerine döner.
  donusum(i, matris) {
    const m = this.meshler[i]; if (!m) return;
    if (matris) m.matrix.copy(matris); else m.updateMatrix();
    m.matrixWorldNeedsUpdate = true; this.kirli = true;
  }
  // Parçanın üst ya da alt ucundaki noktaların ortalaması (eklem merkezi için).
  ucNokta(i, uc) {
    const p = this.meshler[i].geometry.attributes.position, b = this.atlas.parts[i].bounds;
    const esik = uc === 'ust' ? b[1][1] - (b[1][1] - b[0][1]) * 0.07 : b[0][1] + (b[1][1] - b[0][1]) * 0.07;
    const t = new T.Vector3(); let n = 0;
    for (let k = 0; k < p.count; k++) { const y = p.getY(k); if (uc === 'ust' ? y >= esik : y <= esik) { t.x += p.getX(k); t.y += y; t.z += p.getZ(k); n++; } }
    return n ? t.divideScalar(n) : new T.Vector3((b[0][0] + b[1][0]) / 2, uc === 'ust' ? b[1][1] : b[0][1], (b[0][2] + b[1][2]) / 2);
  }
  // Parçanın merkezi (ayırarak gösterme kayması dahil).
  merkez(i) {
    const b = this.atlas.parts[i].bounds;
    const c = new T.Vector3((b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2, (b[0][2] + b[1][2]) / 2);
    return this.meshler[i] ? c.add(this.meshler[i].position) : c;
  }
  // Parçaları gövde merkezinden dışa doğru ayırır (0 = birleşik).
  patlat(oran) {
    this.patlama = oran;
    if (this.patlamaGrubu && this._grupSayisi !== this.atlas.parts.length) {
      const kutular = {}; this._grupSayisi = this.atlas.parts.length;
      this._grupAdi = this.atlas.parts.map((p, i) => { const ad = this.patlamaGrubu(i); const k = (kutular[ad] ??= new T.Box3()); k.expandByPoint(new T.Vector3(...p.bounds[0])); k.expandByPoint(new T.Vector3(...p.bounds[1])); return ad; });
      this._grupMerkez = Object.fromEntries(Object.entries(kutular).map(([ad, k]) => [ad, k.getCenter(new T.Vector3())]));
    }
    let orta = this._govdeKutusu().getCenter(new T.Vector3());
    if (this.patlamaParca) { // az yapı görünürken parçalar kendi ortak merkezlerinden, her yöne eşit açılır
      const k = new T.Box3(); this.meshler.forEach((m, i) => { if (m?.visible && !this.patlamaBlok?.has(this._grupAdi?.[i])) { k.expandByPoint(new T.Vector3(...this.atlas.parts[i].bounds[0])); k.expandByPoint(new T.Vector3(...this.atlas.parts[i].bounds[1])); } });
      if (!k.isEmpty()) orta = k.getCenter(new T.Vector3());
    }
    const [fx, fy, fz] = this.patlamaParca ? [1, 1, 1] : [1.5, 0.4, 1.5];
    // Aynı gruptaki parçalar (bir organın dilimleri, bir elin kemikleri) birlikte hareket eder; organlar bütün kalır.
    const grupla = this.patlamaGrubu && !this.patlamaParca; // az sayıda grup görünüyorsa (ör. yalnız kalp) parçalar tek tek ayrılır
    this.meshler.forEach((m, i) => {
      if (!m) return;
      const b = this.atlas.parts[i].bounds;
      // Tek tek ayırma kipinde damar ve sinir ağları yerinde durur; yalnız organ parçaları açılır.
      if (this.patlamaParca && this.patlamaBlok?.has(this._grupAdi?.[i])) { m.position.set(0, 0, 0); m.updateMatrix(); return; }
      const c = (grupla && this._grupMerkez?.[this._grupAdi[i]]) || new T.Vector3((b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2, (b[0][2] + b[1][2]) / 2);
      // Yana ve öne-arkaya çok, yukarı-aşağı az açılır: model çerçevede kalır.
      m.position.set((c.x - orta.x) * oran * fx, (c.y - orta.y) * oran * fy, (c.z - orta.z) * oran * fz);
      m.updateMatrix();
    });
    this.kirli = true;
  }
  // Modelin üstünde ad etiketleri: [{ i: parça numarası, metin }]
  etiketle(liste) {
    this.etiketler = liste.map(e => { const d = document.createElement('div'); d.className = 'yapi-etiketi'; d.textContent = e.metin; return { i: e.i, el: d }; });
    this.etiketKatmani.replaceChildren(...this.etiketler.map(e => e.el));
    this.kirli = true;
  }
  _etiketleriYerlestir() {
    const w = this.kap.clientWidth, h = this.kap.clientHeight, v = new T.Vector3(), dolu = [];
    for (const e of this.etiketler) {
      const m = this.meshler[e.i];
      v.copy(this.merkez(e.i)).project(this.kamera);
      let gorunur = m && m.visible && v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
      // Üst üste binen etiketlerden listede önce gelen kalır; yakınlaşınca diğerleri de açılır.
      if (gorunur) {
        e.gen ||= e.el.offsetWidth || 80;
        const x = ((v.x + 1) / 2) * w, y = ((1 - v.y) / 2) * h, k = [x - e.gen / 2 - 3, y - 13, x + e.gen / 2 + 3, y + 13];
        if (dolu.some(d => k[0] < d[2] && k[2] > d[0] && k[1] < d[3] && k[3] > d[1])) gorunur = false; else dolu.push(k);
      }
      e.el.hidden = !gorunur;
      if (gorunur) e.el.style.transform = `translate(-50%, -50%) translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px)`;
    }
    if (this.olcumEtiketi && this.olcumNoktalari.length === 2) {
      v.copy(this.olcumNoktalari[0]).add(this.olcumNoktalari[1]).multiplyScalar(0.5).project(this.kamera);
      this.olcumEtiketi.style.transform = `translate(-50%, -50%) translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px)`;
    }
  }
  // Ölçüm: iki nokta arasına çizgi çeker, uzunluğu santimetre olarak döndürür.
  olcumNoktasi(nokta) {
    if (this.olcumNoktalari.length >= 2) this.olcumTemizle();
    this.olcumNoktalari.push(nokta.clone());
    const top = new T.Mesh(new T.SphereGeometry(0.003, 12, 12), new T.MeshBasicMaterial({ color: 0x1d4ed8, depthTest: false }));
    top.position.copy(nokta); top.renderOrder = 20; this.sahne.add(top); (this._olcumNesneleri ??= []).push(top);
    let cm = null;
    if (this.olcumNoktalari.length === 2) {
      const cizgi = new T.Line(new T.BufferGeometry().setFromPoints(this.olcumNoktalari), new T.LineBasicMaterial({ color: 0x1d4ed8, depthTest: false }));
      cizgi.renderOrder = 20; this.sahne.add(cizgi); this._olcumNesneleri.push(cizgi);
      cm = this.olcumNoktalari[0].distanceTo(this.olcumNoktalari[1]) * 100;
      this.olcumEtiketi = document.createElement('div'); this.olcumEtiketi.className = 'yapi-etiketi olcum'; this.olcumEtiketi.textContent = `${cm.toFixed(1).replace('.', ',')} cm`;
      this.etiketKatmani.appendChild(this.olcumEtiketi);
    }
    this.kirli = true; return cm;
  }
  olcumTemizle() {
    for (const n of this._olcumNesneleri || []) { this.sahne.remove(n); n.geometry.dispose(); n.material.dispose(); }
    this._olcumNesneleri = []; this.olcumNoktalari = []; this.olcumEtiketi?.remove(); this.olcumEtiketi = null; this.kirli = true;
  }
  // Ekrandaki görüntüyü PNG olarak verir.
  goruntu() { this.renderer.render(this.sahne, this.kamera); return this.renderer.domElement.toDataURL('image/png'); }

  // Verilen parçaları ekrana sığdırır.
  odakla(indeksler) {
    const kutu = new T.Box3();
    for (const i of indeksler) { const p = this.atlas.parts[i], k = this.meshler[i]?.position ?? new T.Vector3(); kutu.expandByPoint(new T.Vector3(...p.bounds[0]).add(k)); kutu.expandByPoint(new T.Vector3(...p.bounds[1]).add(k)); }
    if (kutu.isEmpty()) return;
    const merkez = kutu.getCenter(new T.Vector3());
    const r = Math.max(kutu.getSize(new T.Vector3()).length() / 2, 0.06);
    const uzaklik = (r / Math.sin(T.MathUtils.degToRad(this.kamera.fov / 2))) * 1.8;
    const yon = this.kamera.position.clone().sub(this.kontrol.target).normalize();
    this._git(merkez.clone().add(yon.multiplyScalar(uzaklik)), merkez, true);
  }

  // Verilen yapıları, bakış yönünü bozmadan çerçeveyi dolduracak biçimde sığdırır.
  sigdir(indeksler) {
    const kutu = new T.Box3();
    for (const i of indeksler) { const p = this.atlas.parts[i], k = this.meshler[i]?.position ?? new T.Vector3(); kutu.expandByPoint(new T.Vector3(...p.bounds[0]).add(k)); kutu.expandByPoint(new T.Vector3(...p.bounds[1]).add(k)); }
    if (kutu.isEmpty()) return;
    const merkez = kutu.getCenter(new T.Vector3()), b = kutu.getSize(new T.Vector3()), yatay = Math.max(b.x, b.z);
    const uzaklik = (Math.max(b.y, yatay / this.kamera.aspect) / 2 / Math.tan(T.MathUtils.degToRad(this.kamera.fov / 2))) * 1.12 + yatay / 2;
    const yon = this.kamera.position.clone().sub(this.kontrol.target).normalize();
    this._git(merkez.clone().add(yon.multiplyScalar(uzaklik)), merkez, true);
  }

  _git(konum, hedef, animasyon) {
    if (!animasyon) { this.kamera.position.copy(konum); this.kontrol.target.copy(hedef); this.kontrol.update(); this.kirli = true; return; }
    const k0 = this.kamera.position.clone(), h0 = this.kontrol.target.clone(), bas = performance.now();
    this._anim = () => {
      const t = Math.min((performance.now() - bas) / 600, 1), e = 1 - Math.pow(1 - t, 3);
      this.kamera.position.lerpVectors(k0, konum, e); this.kontrol.target.lerpVectors(h0, hedef, e);
      if (t >= 1) this._anim = null;
      this.kirli = true;
    };
  }

  _govdeKutusu() {
    if (!this._kutu) { this._kutu = new T.Box3(); for (const p of this.atlas.parts) { this._kutu.expandByPoint(new T.Vector3(...p.bounds[0])); this._kutu.expandByPoint(new T.Vector3(...p.bounds[1])); } }
    return this._kutu;
  }

  // Ekran noktasındaki en öndeki parçayı bulur: { i, nokta } ya da null.
  isabet(x, y) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const fare = new T.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    const isin = new T.Raycaster(); isin.setFromCamera(fare, this.kamera);
    const adaylar = this.meshler.filter(m => m && m.visible && !(m.material.transparent && m.material.opacity < 0.3 && !m.material.userData.secilebilir));
    const sonuc = isin.intersectObjects(adaylar, false).filter(s => !this.kesitAcik || this.kesit.distanceToPoint(s.point) >= 0);
    return sonuc.length ? { i: sonuc[0].object.userData.i, nokta: sonuc[0].point } : null;
  }
  sec(x, y) { return this.isabet(x, y)?.i ?? -1; }

  _olaylar() {
    const el = this.renderer.domElement; let bas = null, son = 0;
    el.addEventListener('pointerdown', e => { bas = [e.clientX, e.clientY]; this.uzerinde(-1); });
    el.addEventListener('pointerup', e => {
      if (!bas) return; const d = Math.hypot(e.clientX - bas[0], e.clientY - bas[1]); bas = null;
      if (d < 6) { const h = this.isabet(e.clientX, e.clientY); this.tikla(h ? h.i : -1, h ? h.nokta : null); }
    });
    // Fare bir yapının üstünde durunca adını göstermek için (yalnız fare; sürüklerken çalışmaz).
    el.addEventListener('pointermove', e => {
      if (bas || e.pointerType !== 'mouse' || e.buttons) return;
      const simdi = performance.now(); if (simdi - son < 140) return; son = simdi;
      this.uzerinde(this.sec(e.clientX, e.clientY), e.clientX, e.clientY);
    });
    el.addEventListener('pointerleave', () => this.uzerinde(-1));
    // Çift tıklama: yapıya yakınlaş.
    el.addEventListener('dblclick', e => { const h = this.isabet(e.clientX, e.clientY); if (h) this.odakla([h.i]); });
  }

  _boyut() {
    const w = this.kap.clientWidth, h = this.kap.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false); this.birlestirici?.setSize(w, h); this.kamera.aspect = w / h;
    // Modelin üstünde yüzen panel varsa görüntü, panelin kapladığı alanın yarısı kadar sağa kayar: model açık alanın ortasında durur.
    if (this.yanBosluk) this.kamera.setViewOffset(w, h, -this.yanBosluk / 2, 0, w, h); else this.kamera.clearViewOffset();
    this.kamera.updateProjectionMatrix(); this.kirli = true;
  }

  // Yüksek görsel kaliteyi açar ya da kapatır (eski cihazlarda kapatılabilir).
  kaliteAyarla(acik) {
    if (acik && !this.birlestirici) {
      const w = this.kap.clientWidth || 2, h = this.kap.clientHeight || 2, o = this.renderer.getPixelRatio();
      this.birlestirici = new EffectComposer(this.renderer, new T.WebGLRenderTarget(w * o, h * o, { type: T.HalfFloatType, samples: 4 }));
      this.birlestirici.addPass(new RenderPass(this.sahne, this.kamera));
      const ao = this.ao = new GTAOPass(this.sahne, this.kamera, w, h);
      ao.updateGtaoMaterial({ radius: 0.035, distanceExponent: 1, thickness: 1, scale: 1.15, samples: 12, screenSpaceRadius: false }); ao.blendIntensity = 0.9;
      // Saydam yapılar ve parçacıklar gölge üretmesin.
      const gizle = ao.overrideVisibility.bind(ao), goster = ao.restoreVisibility.bind(ao); let saklanan = [];
      ao.overrideVisibility = () => { gizle(); saklanan = []; this.sahne.traverse(n => { if (n.isMesh && n.visible && n.material.transparent) { n.visible = false; saklanan.push(n); } }); };
      ao.restoreVisibility = () => { for (const n of saklanan) n.visible = true; goster(); };
      if (this.kesitAcik) ao.normalMaterial.clippingPlanes = [this.kesit];
      this.birlestirici.addPass(ao);
      // Tuval saydam olduğu için renkler saydamlıkla çarpılmış gelir; ton eşlemeden önce ayrılıp sonra yeniden çarpılır (yoksa yarı saydam yüzeyler parlar).
      const cikis = new OutputPass();
      cikis.material.fragmentShader = cikis.material.fragmentShader
        .replace('gl_FragColor = texture2D( tDiffuse, vUv );', 'gl_FragColor = texture2D( tDiffuse, vUv ); float alfa = gl_FragColor.a; if ( alfa > 0.001 ) gl_FragColor.rgb /= alfa;')
        .replace(/\}\s*$/, 'gl_FragColor.rgb *= alfa; gl_FragColor.a = alfa; }');
      this.birlestirici.addPass(cikis);
      this.birlestirici.setPixelRatio(o); this.birlestirici.setSize(w, h);
    }
    this.yuksekKalite = acik; this.guncelle();
  }

  _kare() {
    this._anim?.();
    if (this.canli) { this.canli(performance.now()); this.kirli = true; }
    if (this.kontrol.update()) this.kirli = true;
    if (!this.kirli) return;
    this.kirli = false;
    // Yüksek kalite: yüzeyler arası gölgelendirme ve seçim çerçevesi. Saydam akış canlandırmalarında kapalıdır.
    if (this.yuksekKalite && !this.akis && !this.icAcik) this.birlestirici.render(); else this.renderer.render(this.sahne, this.kamera);
    if (this.etiketler.length || this.olcumEtiketi) this._etiketleriYerlestir();
  }
}
