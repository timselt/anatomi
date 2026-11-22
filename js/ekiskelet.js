// Ek katmanın iskelet ve eklem dosyaları (Z-Anatomy, CC BY-SA 4.0): asıl modelde bulunmayan kemikler (kulak kemikçikleri,
// kuyruk sokumu, 8.–10. kaburga kıkırdakları, sinüsler) ile eklem bağları, kapsüller, menisküsler ve diskler.
//
// Z-Anatomy'nin iskeleti asıl modelin (BodyParts3D) iskeletiyle tam aynı beden değil: kemikler bölgeye göre 1–2,5 cm kayık
// (ölçüm 22.11.2026: sol femur 15 mm, el parmakları 25 mm aşağıda; sakrum 14 mm önde). Diğer ek dosyalardaki tek ve sabit kaydırma
// bağları kemiklerin yanında havada bırakırdı. Bu yüzden önce her Z-Anatomy kemiği asıl modeldeki aynı kemiğe oturtulur
// (öteleme, en yakın nokta eşleştirmesiyle), sonra her bağ noktası en yakın kemik noktalarının kaymasının ağırlıklı ortalaması kadar
// taşınır. Böylece çapraz bağın femura tutunan ucu femurla, tibiaya tutunan ucu tibiayla birlikte yerine gelir.
import * as T from 'three';

// Z-Anatomy kemik adını asıl modeldeki adla eşleştirir ("Distal phalanx of third finger of hand.l" → "distal phalanx of left middle finger").
const EL = ['', 'thumb', 'index finger', 'middle finger', 'ring finger', 'little finger'];
const AYAK = ['', 'big toe', 'second toe', 'third toe', 'fourth toe', 'little toe'];
const SIRA = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
const SAYI = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const BOLGE = { c: 'cervical', t: 'thoracic', l: 'lumbar' };
export function asilAd(ham) {
  const yan = /\.l$/.test(ham) ? 'left' : /\.r$/.test(ham) ? 'right' : '';
  const n = ham.replace(/\.[lr]$/, '').trim().toLowerCase();
  let m;
  if ((m = /^(distal|middle|proximal) phalanx of (\w+) finger of (hand|foot)$/.exec(n))) return `${m[1]} phalanx of ${yan} ${(m[3] === 'hand' ? EL : AYAK)[SIRA[m[2]]]}`;
  if ((m = /^costal cartilage of (\w+) rib$/.exec(n))) return `${yan} ${m[1]} costal cartilage`;
  if ((m = /^vertebra ([ctl])(\d+)$/.exec(n))) return `${SAYI[+m[2]]} ${BOLGE[m[1]]} vertebra`;
  if (n === 'atlas (c1)') return 'atlas';
  if (n === 'axis (c2)') return 'axis';
  if (n === 'ethmoid bone') return 'ethmoid';
  if (n === 'manubrium of sternum') return 'manubrium';
  if (n === 'navicular bone') return `navicular bone of ${yan} foot`;
  if (n === 'sesamoid bones of foot') return `sesamoid bone of ${yan} foot`;
  if (n === 'inferior nasal concha bone') return `${yan} inferior nasal concha`;
  if (n === 'triquetrum bone') return `${yan} triquetral`;
  if (/^(capitate|hamate|lunate|pisiform|scaphoid|trapezium|trapezoid) bone$/.test(n)) return `${yan} ${n.replace(/ bone$/, '')}`;
  return (yan ? yan + ' ' : '') + n;
}

const IZGARA = 0.015; // alan noktalarının ızgara hücresi (1,5 cm)
// Izgara hücresinin sayı anahtarı (metin anahtardan birkaç kat hızlı); koordinatlar ±5 m içinde kalır.
const anahtar = (cx, cy, cz) => ((cx + 512) * 1024 + (cy + 512)) * 1024 + (cz + 512);
const hucre = (x, y, z) => anahtar(Math.floor(x / IZGARA), Math.floor(y / IZGARA), Math.floor(z / IZGARA));
const v = new T.Vector3();

// Asıl kemiğin noktalarından en yakın nokta araması için küçük ızgara.
function noktaIzgarasi(noktalar, h) {
  const iz = new Map();
  for (let k = 0; k < noktalar.length; k += 3) {
    const a = anahtar(Math.floor(noktalar[k] / h), Math.floor(noktalar[k + 1] / h), Math.floor(noktalar[k + 2] / h));
    let l = iz.get(a); if (!l) iz.set(a, l = []); l.push(noktalar[k], noktalar[k + 1], noktalar[k + 2]);
  }
  return (x, y, z) => {
    let en = Infinity, sx = 0, sy = 0, sz = 0;
    const cx = Math.floor(x / h), cy = Math.floor(y / h), cz = Math.floor(z / h);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) {
      const l = iz.get(anahtar(cx + a, cy + b, cz + c)); if (!l) continue;
      for (let q = 0; q < l.length; q += 3) { const d = (l[q] - x) ** 2 + (l[q + 1] - y) ** 2 + (l[q + 2] - z) ** 2; if (d < en) { en = d; sx = l[q]; sy = l[q + 1]; sz = l[q + 2]; } }
    }
    return en === Infinity ? null : [sx, sy, sz, Math.sqrt(en)];
  };
}

function ornekle(geometri, matris, en) {
  const pos = geometri.attributes.position, adim = Math.max(1, Math.floor(pos.count / en)), dizi = [];
  for (let k = 0; k < pos.count; k += adim) { v.fromBufferAttribute(pos, k).applyMatrix4(matris); dizi.push(v.x, v.y, v.z); }
  return dizi;
}
const kutu = d => { const a = [Infinity, Infinity, Infinity], b = [-Infinity, -Infinity, -Infinity]; for (let k = 0; k < d.length; k++) { a[k % 3] = Math.min(a[k % 3], d[k]); b[k % 3] = Math.max(b[k % 3], d[k]); } return [a, b]; };

// gltf: Z-Anatomy iskelet dosyası; adBul(mesh): parçanın özgün adı; mevcut: asıl modelin parçaları; meshAl(i): asıl modelin i. parçasının çizimi.
// Dönüş: kayma alanı (Z kemik noktaları, her noktanın kayması ve arama ızgarası). Asıl modelde karşılığı olmayan kemikler
// (kulak kemikçikleri, koksiks, 8.–10. kaburga kıkırdakları, sinüsler, dişler) alana katılmaz; komşu kemiklerle birlikte taşınır.
export function iskeletAlaniKur(gltf, adBul, mevcut, meshAl) {
  const asil = new Map();
  for (const p of mevcut) if (p.kaynak !== 'Z-Anatomy') { const k = p.en.toLowerCase(); asil.set(k, [...(asil.get(k) ?? []), p.i]); } // aynı adlı birkaç parça olabilir (ör. iki sesamoid)
  const kemikler = new Map(); // ham ad → Z noktaları
  gltf.scene.traverse(m => {
    if (!m.isMesh) return;
    const ham = adBul(m), l = kemikler.get(ham) ?? [];
    for (const x of ornekle(m.geometry, m.matrixWorld, 300)) l.push(x);
    kemikler.set(ham, l);
  });
  const nokta = [], kayma = [];
  for (const [ham, z] of kemikler) {
    const meshler = (asil.get(asilAd(ham)) ?? []).map(meshAl).filter(Boolean);
    if (!meshler.length) continue;
    const a = [];
    for (const m of meshler) { m.updateMatrixWorld(true); for (const x of ornekle(m.geometry, m.matrixWorld, 3000 / meshler.length)) a.push(x); }
    const yakin = noktaIzgarasi(a, 0.01);
    // Kemik kutu merkezinden kutu merkezine taşınır ve kutu boyu farkı kadar (eksen başına en çok %7) uzatılıp kısaltılır:
    // Z-Anatomy tibiası 22 mm, femuru 12 mm kısa; yalnız öteleme diz bağlarını uçlarda 1 cm kayık bırakıyordu.
    // Ardından en yakın nokta eşleştirmesiyle iki kez iyileştirilir; iyileştirme 6 mm ile sınırlı, çünkü uzun kemiklerde
    // sınırsız eşleştirme gövde boyunca kayıp kemiği ucundan kaçırıyordu (femurda 44 mm).
    const [za, zb] = kutu(z), [aa, ab] = kutu(a);
    const zm = za.map((x, j) => (x + zb[j]) / 2), am = aa.map((x, j) => (x + ab[j]) / 2);
    const s = za.map((x, j) => Math.max(0.93, Math.min(1.07, (ab[j] - aa[j]) / (zb[j] - x || 1))));
    const yeni = (k, t) => [am[0] + s[0] * (z[k] - zm[0]) + t[0], am[1] + s[1] * (z[k + 1] - zm[1]) + t[1], am[2] + s[2] * (z[k + 2] - zm[2]) + t[2]];
    let t = [0, 0, 0];
    for (let tur = 0; tur < 2; tur++) {
      const d = [0, 0, 0]; let n = 0;
      for (let k = 0; k < z.length; k += 3) { const p = yeni(k, t), y = yakin(...p); if (!y || y[3] > 0.01) continue; for (let j = 0; j < 3; j++) d[j] += y[j] - p[j]; n++; }
      if (n) t = t.map((x, j) => Math.max(-0.006, Math.min(0.006, x + d[j] / n)));
    }
    // Uzun kemikler (10 cm'den uzun) boyuna dört dilime bölünür ve her dilim ayrıca oturtulur (en çok 12 mm ek kayma):
    // iki modelde femur boynunun açısı farklı; tek parça oturtma kalça kapsülünü femur boynunun 1 cm içine bırakıyordu.
    // Dilim kaymaları dilim merkezleri arasında doğrusal geçişle birleştirilir; kemik içinde kopukluk olmaz.
    const eksen = [0, 1, 2].reduce((e, j) => (zb[j] - za[j] > zb[e] - za[e] ? j : e), 0), boy = zb[eksen] - za[eksen];
    const DILIM = boy > 0.1 ? 4 : 1, konum = k => Math.max(0, Math.min(DILIM - 1e-9, (z[k + eksen] - za[eksen]) / boy * DILIM));
    const dilimT = Array.from({ length: DILIM }, () => [...t]);
    if (DILIM > 1) for (let b = 0; b < DILIM; b++) {
      for (let tur = 0; tur < 3; tur++) {
        const d = [0, 0, 0]; let n = 0;
        for (let k = 0; k < z.length; k += 3) { if (Math.floor(konum(k)) !== b) continue; const p = yeni(k, dilimT[b]), y = yakin(...p); if (!y || y[3] > 0.015) continue; for (let j = 0; j < 3; j++) d[j] += y[j] - p[j]; n++; }
        if (n) dilimT[b] = dilimT[b].map((x, j) => t[j] + Math.max(-0.012, Math.min(0.012, x + d[j] / n - t[j])));
      }
    }
    const tAl = k => { if (DILIM === 1) return t; const c = Math.max(0, Math.min(DILIM - 1, konum(k) - 0.5)), b = Math.floor(c), f = c - b, b2 = Math.min(DILIM - 1, b + 1); return dilimT[b].map((x, j) => x * (1 - f) + dilimT[b2][j] * f); };
    // Her Z noktasının yerel kayması: kalan küçük farkı da (en çok 6 mm) kapatır.
    for (let k = 0; k < z.length; k += 3) {
      const p = yeni(k, tAl(k)), y = yakin(...p);
      const ek = y && y[3] < 0.006 ? [y[0] - p[0], y[1] - p[1], y[2] - p[2]] : [0, 0, 0];
      nokta.push(z[k], z[k + 1], z[k + 2]); kayma.push(p[0] + ek[0] - z[k], p[1] + ek[1] - z[k + 1], p[2] + ek[2] - z[k + 2]);
    }
  }
  const iz = new Map();
  for (let k = 0; k < nokta.length; k += 3) { const a = hucre(nokta[k], nokta[k + 1], nokta[k + 2]); let l = iz.get(a); if (!l) iz.set(a, l = []); l.push(k); }
  const ortalama = [0, 0, 0]; for (let k = 0; k < kayma.length; k += 3) for (let j = 0; j < 3; j++) ortalama[j] += kayma[k + j] / (kayma.length / 3);
  return { nokta, kayma, iz, ortalama };
}

// Geometriyi (dünya koordinatında) kayma alanına göre taşır: her nokta en yakın 8 kemik noktasının kaymasının
// uzaklığa göre ağırlıklı ortalaması kadar kayar. Yakın hücrelerde kemik noktası yoksa arama bir halka genişler (uzun bağların
// ortası, ör. sakrotüberöz bağ); orada da yoksa bütün kemiklerin ortalama kayması kullanılır.
const KOMSU = 8;
export function esnet(geometri, alan) {
  const pos = geometri.attributes.position, { nokta, kayma, iz, ortalama } = alan;
  const ud = new Float64Array(KOMSU), ui = new Int32Array(KOMSU);
  const ekle = (say, d, q) => { let j = say < KOMSU ? say : KOMSU - 1; if (say >= KOMSU && d >= ud[j]) return; while (j > 0 && ud[j - 1] > d) { ud[j] = ud[j - 1]; ui[j] = ui[j - 1]; j--; } ud[j] = d; ui[j] = q; };
  for (let k = 0; k < pos.count; k++) {
    const x = pos.getX(k), y = pos.getY(k), z = pos.getZ(k);
    const cx = Math.floor(x / IZGARA), cy = Math.floor(y / IZGARA), cz = Math.floor(z / IZGARA);
    let say = 0;
    for (let r = 1; r <= 2 && !say; r++) for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) for (let c = -r; c <= r; c++) {
      const l = iz.get(anahtar(cx + a, cy + b, cz + c)); if (!l) continue;
      for (const q of l) { ekle(say, (nokta[q] - x) ** 2 + (nokta[q + 1] - y) ** 2 + (nokta[q + 2] - z) ** 2, q); if (say < KOMSU) say++; }
    }
    let dx = ortalama[0], dy = ortalama[1], dz = ortalama[2];
    if (say) {
      let w = 0; dx = dy = dz = 0;
      for (let j = 0; j < say; j++) { const a = 1 / (ud[j] + 1e-6); w += a; dx += a * kayma[ui[j]]; dy += a * kayma[ui[j] + 1]; dz += a * kayma[ui[j] + 2]; }
      dx /= w; dy /= w; dz /= w;
    }
    pos.setXYZ(k, x + dx, y + dy, z + dz);
  }
  pos.needsUpdate = true;
}
