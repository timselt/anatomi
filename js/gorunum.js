// 3 boyutlu görüntüleyici: modeli yükler, döndürme/yakınlaştırma, kesit alma, seçme ve vurgulama.
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const VURGU = new T.Color('#16b8a6');   // seçili yapı
const SORU = new T.Color('#ff8a00');    // sınavda sorulan yapı

export class Goruntuleyici {
  constructor(kap, atlas, parcaSistem, renkler) {
    this.kap = kap; this.atlas = atlas; this.parcaSistem = parcaSistem;
    this.meshler = []; this.acikSistemler = new Set(); this.gizli = new Set();
    this.yalniz = null; this.soluk = null; this.secili = new Set(); this.soru = new Set();
    this.kirli = true; this.tikla = () => {};
    this.renderer = new T.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setClearColor('#eef1f4');
    this.renderer.localClippingEnabled = true;
    kap.appendChild(this.renderer.domElement);
    this.sahne = new T.Scene();
    this.kamera = new T.PerspectiveCamera(32, 1, 0.005, 50);
    this.kontrol = new OrbitControls(this.kamera, this.renderer.domElement);
    this.kontrol.enableDamping = true; this.kontrol.dampingFactor = 0.1;
    this.kontrol.minDistance = 0.05; this.kontrol.maxDistance = 8;
    this.kontrol.addEventListener('change', () => { this.kirli = true; });
    this.sahne.add(new T.HemisphereLight(0xffffff, 0x9aa3ad, 1.6));
    const d1 = new T.DirectionalLight(0xffffff, 1.8); d1.position.set(-2, 4, 3); this.sahne.add(d1);
    const d2 = new T.DirectionalLight(0xe8efff, 1.1); d2.position.set(2, 2, -3); this.sahne.add(d2);
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
      m.material = soru ? this.soruMalzeme : secili ? this.vurguMalzeme : (this.soluk && !this.soluk.has(i)) ? this.solukMalzeme[s] : this.malzeme[s];
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

  // Verilen parçaları ekrana sığdırır.
  odakla(indeksler) {
    const kutu = new T.Box3();
    for (const i of indeksler) { const p = this.atlas.parts[i]; kutu.expandByPoint(new T.Vector3(...p.bounds[0])); kutu.expandByPoint(new T.Vector3(...p.bounds[1])); }
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

  sec(x, y) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const fare = new T.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    const isin = new T.Raycaster(); isin.setFromCamera(fare, this.kamera);
    const adaylar = this.meshler.filter(m => m && m.visible && !(m.material.transparent && m.material.opacity < 0.3));
    const sonuc = isin.intersectObjects(adaylar, false).filter(s => !this.kesitAcik || this.kesit.distanceToPoint(s.point) >= 0);
    return sonuc.length ? sonuc[0].object.userData.i : -1;
  }

  _olaylar() {
    const el = this.renderer.domElement; let bas = null;
    el.addEventListener('pointerdown', e => { bas = [e.clientX, e.clientY]; });
    el.addEventListener('pointerup', e => {
      if (!bas) return; const d = Math.hypot(e.clientX - bas[0], e.clientY - bas[1]); bas = null;
      if (d < 6) this.tikla(this.sec(e.clientX, e.clientY));
    });
  }

  _boyut() {
    const w = this.kap.clientWidth, h = this.kap.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false); this.kamera.aspect = w / h; this.kamera.updateProjectionMatrix(); this.kirli = true;
  }

  _kare() {
    this._anim?.();
    if (this.kontrol.update()) this.kirli = true;
    if (!this.kirli) return;
    this.kirli = false;
    this.renderer.render(this.sahne, this.kamera);
  }
}
