// Ek katman: Z-Anatomy (CC BY-SA 4.0) modelinden erkek modelde eksik olan yapıları yükler:
// periferik sinirler ve beyin çekirdekleri, lenf düğümleri, akciğer lobları, karaciğer, tiroid vb.
// Z-Anatomy de BodyParts3D'den türediği için aynı bedene oturur; aradaki küçük kayma (yaklaşık 1 cm) OFSET ile giderilir.
import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const KLASOR = 'data/models/zanatomy/';
const DOSYALAR = ['visceral', 'lymphatic', 'nervous'];
const OFSET = new T.Vector3(0, 0.007, 0);
const ES_AD = { oesophagus: 'esophagus', 'vermiform appendix': 'appendix', 'suprarenal gland': 'adrenal gland', 'pineal gland': 'pineal body', 'ductus deferens': 'deferent duct', 'seminal gland': 'seminal vesicle', 'meso-appendix': 'mesoappendix' };

function sistemSec(dosya, n) {
  if (dosya === 'nervous') return 'sinir';
  if (dosya === 'lymphatic') return 'lenf';
  if (/lung|bronch|trachea|pleura|nasal|pharynx|epiglott/.test(n)) return 'solunum';
  if (/kidney|ureter|urethra|bladder|renal/.test(n)) return 'bosaltim';
  if (/thyroid|suprarenal|pineal|hypophysis/.test(n)) return 'hormon';
  if (/penis|testis|prostate|deferens|epididymis|seminal|ejaculatory/.test(n)) return 'ureme';
  return 'sindirim';
}

// Yapının türüne göre kısa Türkçe açıklama (ayrıntılı görev bilgisi henüz eklenmedi).
function gorev(n, sistem) {
  if (sistem === 'lenf') return 'Lenf düğümü (ya da düğüm grubu). Adının gösterdiği bölgeden gelen lenfi süzer; enfeksiyon ve tümör yayılımında büyüyebilir.';
  if (/segment of liver/.test(n)) return 'Karaciğerin Couinaud sınıflamasına göre bir segmentidir (parantez içindeki Roma rakamı segment numarasıdır). Her segmentin kendi kapı toplardamarı dalı, atardamarı ve safra kanalı vardır; cerrahide ayrı ayrı çıkarılabilir.';
  if (/lobe of (left|right) lung/.test(n)) return 'Akciğer lobudur. Sağ akciğerde üç (üst, orta, alt), sol akciğerde iki (üst, alt) lob bulunur.';
  if (/nucleus|nuclei/.test(n)) return 'Sinir hücresi gövdelerinin oluşturduğu çekirdektir (gri madde). Adındaki sinirin ya da yolun başlangıç ya da aktarma merkezidir.';
  if (/ganglion/.test(n)) return 'Gangliyon: merkezi sinir sisteminin dışındaki sinir hücresi gövdeleri topluluğudur.';
  if (/plexus/.test(n)) return 'Sinir ağıdır (pleksus): birkaç omurilik sinirinin ön dallarının birleşip yeniden dağılmasıyla oluşur.';
  if (/nerve|ramus|branch|trunk|cord|root/.test(n) && sistem === 'sinir') return 'Periferik sinir (ya da sinir dalı/kökü). Adının gösterdiği bölgeye ya da kasa hareket ve/veya duyu lifleri taşır.';
  if (/bronchus/.test(n)) return 'Bronş dalıdır; adındaki akciğer lobuna ya da segmentine hava taşır (parantez içindeki B numarası segment bronşunun numarasıdır).';
  if (/gyrus|lobule|sulcus|cortex/.test(n)) return 'Beyin ya da beyincik kabuğunun bir kıvrımı ya da lobçuğudur.';
  if (sistem === 'sinir') return 'Merkezi sinir sistemi yapısıdır.';
  if (sistem === 'hormon') return 'Hormon bezidir; salgısını doğrudan kana verir.';
  return 'Ek model katmanından gelen yapıdır; ayrıntılı açıklaması henüz eklenmedi.';
}

const iou = (a, b) => {
  let kes = 1, va = 1, vb = 1;
  for (let k = 0; k < 3; k++) {
    kes *= Math.max(0, Math.min(a[1][k], b[1][k]) - Math.max(a[0][k], b[0][k]));
    va *= a[1][k] - a[0][k]; vb *= b[1][k] - b[0][k];
  }
  return kes / (va + vb - kes || 1);
};

// mevcut: [{en, sistem, bounds}] (asıl modelin parçaları). Dönüş: eklenecek yapılar.
export async function ekModelleriYukle(mevcut, ilerleme) {
  const draco = new DRACOLoader(); draco.setDecoderPath('vendor/three/examples/jsm/libs/draco/');
  const yukleyici = new GLTFLoader(); yukleyici.setDRACOLoader(draco);
  const sozluk = await (await fetch(KLASOR + 'lexicon.json')).json();
  const mevcutAdlar = new Set(mevcut.map(p => p.en.toLowerCase().replace(/\b(left|right)\b ?/g, '').trim()));
  const sisteme = {};
  for (const p of mevcut) (sisteme[p.sistem] ??= []).push(p.bounds);
  const sonuc = [];
  for (const [di, dosya] of DOSYALAR.entries()) {
    const gltf = await yukleyici.loadAsync(KLASOR + dosya + '.glb');
    gltf.scene.updateMatrixWorld(true);
    const adlar = new Map(gltf.parser.json.nodes.filter(n => n.name).map(n => [T.PropertyBinding.sanitizeNodeName(n.name), n.name]));
    gltf.scene.traverse(m => {
      if (!m.isMesh) return;
      // Yükleyici adları sadeleştirir ("Olive.l" → "Olivel"); özgün adı dosyanın düğüm listesinden bul.
      const ozgun = ad => adlar.get(ad) ?? adlar.get(ad.replace(/_\d+$/, ''));
      const ham = (ozgun(m.name) ?? (m.parent && ozgun(m.parent.name)) ?? m.name).trim();
      const yan = /\.l$/.test(ham) ? 'sol' : /\.r$/.test(ham) ? 'sağ' : '';
      const taban = ham.replace(/\.[lr]$/, '').replace(/ \d+$/, '').trim();
      const parantezsiz = taban.replace(/^\((.*)\)$/, '$1');
      const kucuk = parantezsiz.toLowerCase().replace(/\b(left|right)\b ?/g, '').trim();
      if (mevcutAdlar.has(ES_AD[kucuk] || kucuk)) return; // asıl modelde zaten var
      if (/^liver$|segment of liver/.test(kucuk) && [...mevcutAdlar].some(a => a.startsWith('hepatovenous segment'))) return; // karaciğer segmentleri asıl modelde var
      const sistem = sistemSec(dosya, parantezsiz.toLowerCase());
      const g = m.geometry.clone(); g.applyMatrix4(m.matrixWorld); g.translate(OFSET.x, OFSET.y, OFSET.z);
      g.computeBoundingBox(); g.computeBoundingSphere();
      const bounds = [g.boundingBox.min.toArray(), g.boundingBox.max.toArray()];
      if ((sisteme[sistem] || []).some(b => iou(b, bounds) > 0.45)) { g.dispose(); return; } // aynı yapı başka adla var
      if (!g.attributes.normal) g.computeVertexNormals();
      // Kaynak sözlükte birkaç adda Fransızca aksan kalmış (ör. "latérales"); Latincede aksan olmaz.
      const la = (sozluk[taban]?.la || sozluk[parantezsiz]?.la || parantezsiz).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      sonuc.push({ en: yan ? `${taban} (${yan === 'sol' ? 'left' : 'right'})` : taban, anahtar: 'z:' + parantezsiz.toLowerCase(), enKucuk: parantezsiz.toLowerCase(), la, tr: yan ? `${la} (${yan})` : la, sistem, fn: gorev(parantezsiz.toLowerCase(), sistem), geometry: g, bounds });
    });
    ilerleme?.((di + 1) / DOSYALAR.length);
  }
  draco.dispose();
  return sonuc;
}
