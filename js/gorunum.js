// 3 boyutlu görüntüleyici: modeli yükler, döndürme/yakınlaştırma, kesit alma, seçme ve vurgulama.
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const VURGU = new T.Color('#16b8a6');   // seçili yapı
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
    const d1 = new T.DirectionalLight(0xfffaf4, 1.5); d1.position.set(-2, 4, 3); this.sahne.add(d1);
    const d2 = new T.DirectionalLight(0xe9f0ff, 1.0); d2.position.set(2, 2, -3); this.sahne.add(d2);
    this.kesit = new T.Plane(new T.Vector3(0, -1, 0), 2);
    this.kesitAcik = false;
    this.malzeme = {}; this.solukMalzeme = {};
    for (const [id, renk] of Object.entries(renkler)) {
      const saydam = id === 'deri';
      this.malzeme[id] = new T.MeshStandardMaterial({ color: renk, roughness: 0.55, metalness: 0.05, side: T.DoubleSide, transparent: saydam, opacity: saydam ? 0.25 : 1, depthWrite: !saydam });
      this.solukMalzeme[id] = new T.MeshStandardMaterial({ color: renk, roughness: 0.6, side: T.DoubleSide, transparent: true, opacity: 0.12, depthWrite: false });
    }
    this.vurguMalzeme = new T.MeshStandardMaterial({ color: VURGU, emissive: VURGU, emissiveIntensity: 0.35, roughness: 0.4, side: T.DoubleSide });
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
      m.material = soru ? this.soruMalzeme : secili ? this.vurguMalzeme : ((this.soluk && !this.soluk.has(i)) || this.saydamSistem.has(s)) ? this.solukMalzeme[s] : this.malzeme[s];
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
    this.kirli = true;
  }

  gorunus(yon, animasyon = true) {
    const h = { on: [0, 0.95, 3.4], arka: [0, 0.95, -3.4], sol: [3.4, 0.95, 0], sag: [-3.4, 0.95, 0], ust: [0, 4, 0.01] }[yon];
    this._git(new T.Vector3(...h), new T.Vector3(0, 0.9, 0), animasyon);
  }

  // ---- 3 boyutlu akış: bir yol boyunca akan parçacıklar (kan, lokma, hava...) ----
  // noktalar: yolun geçtiği noktalar; renk(t): yolun t (0-1) yerindeki renk; yayilim: sürünün yolda kapladığı oran (1 = kesintisiz akış).
  // yollar: bir ya da birkaç yol (her biri nokta dizisi; ör. sağ ve sol akciğere ayrılan iki kol). renk(t, k): k. yolun t yerindeki renk.
  akisKur(yollar, renk, { adet = 140, boyut = 0.0035, yayilim = 1 } = {}) {
    this.akisSil();
    const egriler = yollar.map(n => new T.CatmullRomCurve3(n, false, 'centripetal', 0.5));
    const ag = new T.InstancedMesh(new T.SphereGeometry(boyut, 12, 12), new T.MeshBasicMaterial({ toneMapped: false, depthTest: false, transparent: true, opacity: 0.95 }), adet);
    ag.renderOrder = 30; ag.frustumCulled = false; this.sahne.add(ag);
    const sapma = Array.from({ length: adet }, () => new T.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).multiplyScalar(boyut * 2.2));
    const cizgiler = egriler.map(e => { // yolun kendisi: ince çizgi
      const c = new T.Line(new T.BufferGeometry().setFromPoints(e.getSpacedPoints(400)), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthTest: false }));
      c.renderOrder = 29; this.sahne.add(c); return c;
    });
    for (const m of Object.values(this.solukMalzeme)) m.opacity = 0.2;
    this.akis = { egriler, ag, cizgiler, adet, renk, yayilim, sapma, faz: 0, takip: false };
  }
  // k. yolun n. noktasının yol uzunluğuna göre yeri (0-1).
  akisOran(k, n) {
    const e = this.akis.egriler[k], u = e.getLengths(600), son = e.points.length - 1;
    return u[Math.round((n / son) * 600)] / u[600];
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
    if (a.takip) { // kamera öndeki parçacığın peşinden gider
      const e = a.egriler[0], on = e.getPointAt(a.faz), ileri = e.getPointAt(Math.min(a.faz + 0.025, 1)), teget = e.getTangentAt(a.faz);
      const yer = on.clone().addScaledVector(teget, -0.11).add(new T.Vector3(0, 0.03, 0));
      this.kamera.position.lerp(yer, 0.08); this.kontrol.target.lerp(ileri, 0.12);
    }
    this.kirli = true; return a.faz;
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
  // Yapının içine girer: kamera yapının merkezine uçar (iç yüzeyler görünür).
  icineGir(i) {
    const c = this.merkez(i), yon = this.kamera.position.clone().sub(c).normalize();
    this._git(c.clone().addScaledVector(yon, 0.03), c, true);
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
    const orta = this._govdeKutusu().getCenter(new T.Vector3());
    this.meshler.forEach((m, i) => {
      if (!m) return;
      const b = this.atlas.parts[i].bounds;
      m.position.set(((b[0][0] + b[1][0]) / 2 - orta.x) * oran, ((b[0][1] + b[1][1]) / 2 - orta.y) * oran, ((b[0][2] + b[1][2]) / 2 - orta.z) * oran);
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
    const w = this.kap.clientWidth, h = this.kap.clientHeight, v = new T.Vector3();
    for (const e of this.etiketler) {
      const m = this.meshler[e.i];
      v.copy(this.merkez(e.i)).project(this.kamera);
      const gorunur = m && m.visible && v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
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
    const adaylar = this.meshler.filter(m => m && m.visible && !(m.material.transparent && m.material.opacity < 0.3));
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
    this.renderer.setSize(w, h, false); this.kamera.aspect = w / h; this.kamera.updateProjectionMatrix(); this.kirli = true;
  }

  _kare() {
    this._anim?.();
    if (this.canli) { this.canli(performance.now()); this.kirli = true; }
    if (this.kontrol.update()) this.kirli = true;
    if (!this.kirli) return;
    this.kirli = false;
    this.renderer.render(this.sahne, this.kamera);
    if (this.etiketler.length || this.olcumEtiketi) this._etiketleriYerlestir();
  }
}
