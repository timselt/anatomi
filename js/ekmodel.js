// Ek katman: Z-Anatomy (CC BY-SA 4.0) modelinden erkek modelde eksik olan yapıları yükler:
// periferik sinirler ve beyin çekirdekleri, lenf düğümleri, akciğer lobları, karaciğer, tiroid vb.
// Z-Anatomy de BodyParts3D'den türediği için aynı bedene oturur; aradaki küçük kayma (yaklaşık 1 cm) OFSET ile giderilir.
import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { EK_DOGRULAMA } from './ekdogrulama.js';
import { kasKopyaMi, kasSistem, kasGorev, kasYerlestir, KAS_LA } from './kaskatman.js';
import { iskeletAlaniKur, esnet } from './ekiskelet.js';
import { eklemLa } from './eklemterim.js';
import { kaymaUygula } from './ekkayma.js';

const KLASOR = 'data/models/zanatomy/';
const DOSYALAR = ['visceral', 'lymphatic', 'nervous', 'cardiovascular', 'muscular', 'skeletal', 'joints'];
const OFSET = new T.Vector3(0, 0.007, 0);
// Bu dosyalarda sabit OFSET yerine bölgeye göre ölçülmüş düzeltme alanı kullanılır (ekkayma.js): ek katman başta
// yaklaşık 11 mm önde, bacakta 12 mm dışta ve arkada duruyordu; sinirler kafatasından ve kemiklerden taşıyordu.
const KAYMA_DOSYALARI = new Set(['nervous']); // damar katmanı burada değil: boyun damarlarında tek bir kayma yok, kafa içi arterler BAS_BOYUN ile düzeltilir
// Sinir katmanında asıl modelde başka adla bulunan göz yapıları; göz küresinin ön ve arka bölümü, tabakaları tek yüzeyde
// birleştiren örtülerdir (asıl modelin sklera, koroid ve retinasının üstüne biner).
const SINIR_KOPYA = /^(anterior|posterior) segment of eyeball$/;
// Sinir katmanındaki duyu organı parçaları (göz ve kulak) duyu sistemine gider; yalnız sinirleri ve çekirdekleri sinir sistemindedir.
const DUYU = /^(cornea|iris|lens|retina|sclera|vitreous body|zonular fibres|suspensory ligament of eyeball|anterior chamber of eyeball|(anterior|posterior) segment of eyeball|lacrimal (gland|sac|canaliculus)|ampulla of lacrimal canaliculus|nasolacrimal duct|cochlea|vestibule|tympanic membrane|auditory tube)$/;
// Baş ve boyunda Z-Anatomy ana modelden ~1,15 cm öndedir (dil, epiglot, hipofiz, göz ve beyin aynı adlı parçalarla ölçüldü, 22.11.2026);
// yutak bu yüzden gırtlağın üstüne biniyordu. Kayma göğüs girişine doğru azalır (soluk borusu y=1,42'de 0,6 cm, 1,38'de ~0).
// Bu katmanlarda her nokta yüksekliğine göre geri çekilir: 'ust' yüksekliğinin üstünde tam, alt–ust arasında doğrusal azalarak.
// Geçiş aralığı katmana göre ölçüldü: iç organ ve lenfte 1,38–1,48. Damarda kafa içi arterler 1,1 cm öndedir (düzeltilince ana modelde başka adla
// bulunan 6 beyin arteri dalının kopya olduğu ortaya çıkar: aralarındaki uzaklık 4–8 mm'den 1–1,7 mm'ye iner). Boyunda ise tek kayma yoktur:
// vertebral arter 1,2 cm önde, karotisler 0,5 cm arkada; Z'de eksternal karotis iç karotisin 3 mm önündedir (doğru ilişki). Bu yüzden damarda
// düzeltme kafatası tabanından başlar (1,54–1,58), boyun damarlarına dokunmaz. Sinir katmanı sinir-duyu oturumunun bölgesel
// düzeltme alanıyla (ekkayma.js) düzeltildiği için burada yok; ikisi birlikte uygulanırsa çift düzeltme olur.
const BAS_BOYUN = { dz: -0.0115, visceral: [1.38, 1.48], lymphatic: [1.38, 1.48], cardiovascular: [1.54, 1.58] };
// Leğende Z-Anatomy'nin organları ana modelden aşağıdadır: mesane 2,6 cm, tohum kesesi 3,1 cm, prostat 3,3 cm (z yönünde 0,1–0,8 cm önde).
// Bu organlar ana modelde olduğu için eklenmez; ama onlara bağlı eklenen parçalar aynı kaymayla, organın altında kalıyordu
// (ör. boşaltma kanalı prostatın içinden geçeceğine tamamen altında duruyordu). Bu parçalar bağlı oldukları organın ölçülen kayması kadar taşınır.
// Leğen duvarındaki düğüm ve damarlar bu kaymayı taşımadığı için listede yok.
const LEGEN_TASI = {
  'ejaculatory duct': [0, 0.032, -0.002], // prostat ve tohum kesesine göre
  'prevesical nodes': [0, 0.026, -0.008], 'postvesical nodes': [0, 0.026, -0.008], 'lateral vesical nodes': [0, 0.026, -0.008], // mesaneye göre
  'pararectal nodes': [0, 0.033, -0.004], // prostat düzeyine göre (Z-Anatomy'de rektum yok)
  // Penisin kendi damarları penis cisimleriyle birlikte kaymıştır (Z'de cisimler 3,3 cm, dorsal penis arteri 2,9 cm aşağıda).
  // Uyluktan gelen dış pudendal damarlar ve leğen duvarından gelen iç pudendal arter bir uçta kaymamış yapıya bağlandığı için taşınmaz.
  'deep artery of penis': [0, 0.033, -0.003], 'superficial dorsal veins of penis': [0, 0.033, -0.003],
};
// Z-Anatomy'nin "Mesocolon" parçası enine kolon askısının yalnız sol üçte ikisidir ve ana modeldeki enine kolon askısıyla (organduzelt.js ile
// leğene sarkan perdesi kaldırıldıktan sonra) ~9 mm arayla üst üste iki katman oluşturuyordu; eklenmez.
const PERITON_KOPYA = /^mesocolon$/;
// Z-Anatomy'nin segment bronşları ana modeldeki segment bronş ağaçlarından 5–17 mm uzakta ikinci bir ağaç çiziyordu (22.11.2026 ölçümü);
// ana modelin ağacı daha ayrıntılı olduğu için bunlar eklenmez. Lob bronşları ve ara bronş ana ağaca 2–3 mm uzakta ve ana modelde ayrı adla
// bulunmadığı için kalır.
const BRONS_KOPYA = /segmental bronchus of lung/; // ad buraya "left/right" sözcüğü silinmiş olarak gelir
function basBoyunDuzelt(g, [alt, ust]) {
  const p = g.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const o = Math.min(1, Math.max(0, (p.getY(k) - alt) / (ust - alt)));
    if (o > 0) p.setZ(k, p.getZ(k) + BAS_BOYUN.dz * o);
  }
}
// Kaynak sözlükte eksik yazılmış Latince adlar.
const LA_DUZELT = { 'external carotid artery': 'Arteria carotis externa', ...KAS_LA };
// Damar katmanında asıl modelde başka adla bulunan yapılar. Liste, her parçanın yüzeyinin asıl modeldeki damar ve kalp
// yüzeyiyle çakışma oranı ölçülerek ve adlar karşılaştırılarak hazırlandı (22.11.2026): kalp odacıkları ve kapakları,
// koroner arterler, akciğer segment damarları, orta ve arka serebral arter parçaları, el ve ayak arkları ile parmak damarları.
const DAMAR_KOPYA = new RegExp(['atrium', 'ventricle$', 'leaflet', 'papillary', 'valve', 'bifurcation of pulmonary trunk', '^coronary artery$',
  'circumflex artery of heart', 'septal branches of anterior interventricular', 'inferolateral branch of right coronary', '^marginal artery$',
  'middle cerebral artery \\(m', 'insular branches of middle cerebral', 'temporal branches of middle cerebral', '^posterior cerebral artery$',
  'anterior temporal branch$', 'temporo-occipital branch$', 'branch to angular gyrus', 'postcentral arterial branch',
  'segmental artery of lung', 'lobar artery of lung', 'lingular artery of lung', 'vein of lung', 'basal vein of lung', 'lingular vein of lung',
  'thoraco-acromial artery', '(anterior|posterior) branch of renal artery', 'supreme intercostal', 'superior (lateral|medial) genicular artery',
  'middle collateral artery', 'radial collateral artery', 'common palmar digital arteries', 'palmar metacarpal arteries', 'dorsal metacarpal arteries',
  'palmar carpal branch of radial', 'plantar metatarsal arteries', 'common plantar digital arteries', 'proper plantar digital arteries',
  'dorsal digital arteries of foot', 'calcaneal branches of posterior tibial', 'perforating femoral arteries', 'superior anorectal artery',
  '^ulnar recurrent artery$', 'superficial branch of transverse cervical', 'hepatic veins', 'internal thoracic veins', 'superior epigastric veins',
  'venous palmar arch', '^ileal branch of ileocolic artery$', 'intrarenal veins', '^radial veins$', '^ulnar veins$', '^brachial veins$', 'palmar digital veins', 'gastro-omental vein', '\\?'].join('|'));
// İskelet dosyasındaki kemiklerin neredeyse tamamı asıl modelde var: her parçanın yüzeyi, iskelet asıl modele oturtulduktan sonra
// asıl modelin yüzeyiyle karşılaştırıldı (22.11.2026). Kemiklerin yüzeyinin %75–100'ü asıl modeldeki aynı kemiğin 2 mm yakınında kaldı;
// yalnız aşağıdakiler asıl modelde yok: kulak kemikçikleri, koksiks, 8.–10. kaburga kıkırdakları, frontal ve sfenoid sinüs.
const ISKELET_EKLE = /^(malleus|incus|stapes|coccyx|costal cartilage of (eighth|ninth|tenth) rib|sinus of (frontal|sphenoid) bone)$/;
// Eklem dosyasında asıl modelde başka adla bulunanlar (aynı yöntemle): omurlar arası diskler (%53–100 çakışma), disklerin içindeki
// nucleus pulposus (asıl diskin yüzeyiyle iç içe girip titreşiyor), gırtlağın dörtgen zarı ve krikofaringeal bağ (asıl modelin tiroid-hiyoid
// zarı ve conus elasticus'uyla %60–73 çakışıyor). Üç kollu kıkırdak (cartilago triradiata) çocukta bulunur, erişkinde kemikleşmiştir; erişkin
// modele eklenmez.
const EKLEM_KOPYA = /^(intervertebral disc|nucleus pulposus|quadrangular membrane|cricopharyngeal ligament|triradiate cartilage)/;
const ES_AD = { retina: 'optic part of retina', 'zonular fibres': 'suspensory ligament of lens', 'aqueduct of midbrain': 'cerebral aqueduct', 'mamillary body': 'mammillary body', 'stria medullaris thalami': 'stria medullaris of thalamus', 'amygdaloid body': 'amygdala', 'central canal': 'central canal of spinal cord', "central canal'": 'central canal of spinal cord', 'lateral occipitotemporal gyrus': 'fusiform gyrus', 'aortic arch': 'arch of aorta', 'brachiocephalic trunk': 'brachiocephalic artery', 'coeliac trunk': 'celiac trunk', 'thoracic aorta': 'descending thoracic aorta', 'proper hepatic artery': 'hepatic artery proper', 'superficial palmar arch': 'superficial palmar arterial arch', oesophagus: 'esophagus', 'vermiform appendix': 'appendix', 'suprarenal gland': 'adrenal gland', 'pineal gland': 'pineal body', 'ductus deferens': 'deferent duct', 'seminal gland': 'seminal vesicle', 'meso-appendix': 'mesoappendix' };

function sistemSec(dosya, n) {
  if (dosya === 'joints') return 'bag';
  if (dosya === 'skeletal') return /malleus|incus|stapes/.test(n) ? 'duyu' : /sinus/.test(n) ? 'solunum' : 'iskelet';
  if (dosya === 'nervous') return DUYU.test(n) ? 'duyu' : 'sinir';
  if (dosya === 'lymphatic') return 'lenf';
  if (dosya === 'muscular') return kasSistem(n);
  if (dosya === 'cardiovascular') return /vein|venous|vena|sinus|plexus/.test(n) && !/arter/.test(n) ? 'toplardamar' : 'atardamar';
  if (/lung|bronch|trachea|pleura|nasal|pharynx|epiglott/.test(n)) return 'solunum';
  if (/kidney|ureter|urethra|bladder|renal/.test(n)) return 'bosaltim';
  if (/thyroid|suprarenal|pineal|hypophysis/.test(n)) return 'hormon';
  if (/penis|testis|prostate|deferens|epididymis|seminal|ejaculatory/.test(n)) return 'ureme';
  return 'sindirim';
}

// Yapının türüne göre kısa Türkçe açıklama (ayrıntılı görev bilgisi henüz eklenmedi).
function gorev(n, sistem) {
  if (sistem === 'lenf') return 'Lenf düğümü (ya da düğüm grubu). Adının gösterdiği bölgeden gelen lenfi süzer; enfeksiyon ve tümör yayılımında büyüyebilir.';
  if (/segment of liver/.test(n)) return 'Karaciğerin Couinaud sınıflamasına göre bir segmentidir (parantez içindeki Roma rakamı segment numarasıdır). Her segmentin kendi portal ven dalı, arteri ve safra kanalı vardır; cerrahide ayrı ayrı çıkarılabilir.';
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

// Kaynakta sol taraf parçalarının çoğu sağ tarafın aynalanmış kopyasıdır (ters ölçek; 22.11.2026 ölçümü: iskelette 575 parçanın 241'i,
// damarlarda 676 parçanın 256'sı). Aynalamada üçgenlerin köşe sırası ters döner; çift yüzlü malzemede ışık arka yüzden hesaplanır
// ve parça kararır. Köşe sırası geri çevrilir.
function aynaDuzelt(g) {
  if (g.index) { const a = g.index.array; for (let k = 0; k < a.length; k += 3) { const t = a[k + 1]; a[k + 1] = a[k + 2]; a[k + 2] = t; } g.index.needsUpdate = true; return; }
  for (const at of Object.values(g.attributes)) { const a = at.array, n = at.itemSize; for (let k = 0; k < at.count; k += 3) for (let j = 0; j < n; j++) { const t = a[(k + 1) * n + j]; a[(k + 1) * n + j] = a[(k + 2) * n + j]; a[(k + 2) * n + j] = t; } at.needsUpdate = true; }
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
// meshAl(i): asıl modelin i. parçasının çizimi; iskelet ve eklem dosyası bağları asıl kemiklere oturtmak için kullanır.
export async function ekModelleriYukle(mevcut, ilerleme, meshAl) {
  const draco = new DRACOLoader(); draco.setDecoderPath('vendor/three/examples/jsm/libs/draco/');
  const yukleyici = new GLTFLoader(); yukleyici.setDRACOLoader(draco);
  const sozluk = await (await fetch(KLASOR + 'lexicon.json')).json();
  const mevcutAdlar = new Set(mevcut.map(p => p.en.toLowerCase().replace(/\b(left|right)\b ?/g, '').trim()));
  const sisteme = {};
  for (const p of mevcut) (sisteme[p.sistem] ??= []).push(p.bounds);
  const sonuc = [];
  let alan = null; // iskeletin asıl modele oturtulmasından çıkan kayma alanı (ekiskelet.js)
  for (const [di, dosya] of DOSYALAR.entries()) {
    const iskeletDosyasi = dosya === 'skeletal' || dosya === 'joints';
    if (iskeletDosyasi && !meshAl) continue;
    const gltf = await yukleyici.loadAsync(KLASOR + dosya + '.glb');
    gltf.scene.updateMatrixWorld(true);
    const adlar = new Map(gltf.parser.json.nodes.filter(n => n.name).map(n => [T.PropertyBinding.sanitizeNodeName(n.name), n.name]));
    // Yükleyici adları sadeleştirir ("Olive.l" → "Olivel"); özgün adı dosyanın düğüm listesinden bul. Parçanın kendi adı bir düğüm
    // değilse (çok parçalı çizimin alt parçası, ör. "Calcaneusr_1") bir üstteki düğümün adı alınır. Sağ ve sol kemik aynı çizimi
    // paylaşınca alt parçanın adı hep sağ tarafı gösteriyordu; eski yol ("_1" ekini silip ada bakmak) sol kemiğe de "sağ" diyordu.
    const adBul = m => { for (let o = m; o; o = o.parent) if (adlar.has(o.name)) return adlar.get(o.name).trim(); return m.name.trim(); };
    if (dosya === 'skeletal') alan = iskeletAlaniKur(gltf, adBul, mevcut, meshAl);
    gltf.scene.traverse(m => {
      if (!m.isMesh) return;
      const ham = adBul(m);
      const yan = /\.l$/.test(ham) ? 'sol' : /\.r$/.test(ham) ? 'sağ' : '';
      const taban = ham.replace(/\.[lr]$/, '').replace(/ \d+$/, '').trim();
      const parantezsiz = taban.replace(/^\((.*)\)$/, '$1');
      const kucuk = parantezsiz.toLowerCase().replace(/\b(left|right)\b ?/g, '').replace(/ \((i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\)$/, '').trim(); // kafa çifti numarası adı eşleştirmede sayılmaz
      const yarimTamamla = dosya === 'nervous' && kucuk === 'tentorium cerebelli' && yan === 'sol'; // asıl modelde beyincik çadırının yalnız sağ yarısı var
      if (mevcutAdlar.has(ES_AD[kucuk] || kucuk) && !yarimTamamla) return; // asıl modelde zaten var
      if (dosya === 'visceral' && (BRONS_KOPYA.test(kucuk) || PERITON_KOPYA.test(kucuk))) return; // ana modelin segment bronş ağaçlarının ya da enine kolon askısının kopyası
      if (dosya === 'cardiovascular' && DAMAR_KOPYA.test(kucuk)) return; // asıl modelde başka adla var (yüzey çakışması ölçülerek bulundu)
      if (dosya === 'muscular' && kasKopyaMi(kucuk, yan)) return; // asıl modelde başka adla var ya da geniş fasya (kaskatman.js)
      if (dosya === 'skeletal' && !ISKELET_EKLE.test(kucuk)) return; // asıl modelde var (yüzey çakışması ölçülerek bulundu)
      if (dosya === 'joints' && EKLEM_KOPYA.test(kucuk)) return;
      if (dosya === 'nervous' && SINIR_KOPYA.test(kucuk)) return; // göz küresinin tabakalarını örten kopya yüzey
      if (/^liver$|segment of liver/.test(kucuk) && [...mevcutAdlar].some(a => a.startsWith('hepatovenous segment'))) return; // karaciğer segmentleri asıl modelde var
      const sistem = sistemSec(dosya, parantezsiz.toLowerCase());
      // Sol taraf parçaları kaynak dosyada sağın ayna görüntüsü olarak saklanıyor; aynalama üçgenlerin yönünü ters çevirince
      // yüzey içten aydınlatılıyor ve koyu görünüyordu. Üçgen sırası çevrilerek düzeltilir.
      const g = m.geometry.clone(); g.applyMatrix4(m.matrixWorld); if (m.matrixWorld.determinant() < 0) aynaDuzelt(g);
      if (iskeletDosyasi) esnet(g, alan); else if (KAYMA_DOSYALARI.has(dosya)) kaymaUygula(g); else g.translate(OFSET.x, OFSET.y, OFSET.z);
      if (BAS_BOYUN[dosya]) basBoyunDuzelt(g, BAS_BOYUN[dosya]);
      if (LEGEN_TASI[kucuk]) g.translate(...LEGEN_TASI[kucuk]);
      if (dosya === 'muscular') kasYerlestir(g); // kas dosyası bölge bölge kaymış; ana modelin kaslarına göre yerine oturtulur
      g.computeBoundingBox(); g.computeBoundingSphere();
      const bounds = [g.boundingBox.min.toArray(), g.boundingBox.max.toArray()];
      // Aynı yapı başka adla var. Kas dosyasında kopyalar yüzey ölçümüyle ayıklandı; kutu benzerliği orada iç içe yassı kasları
      // (ör. iç oblik ile dış oblik karın kası) kopya sanıyordu.
      // Sinir dosyasında oluk (sulcus) yüzeyi komşu kıvrımın kutusuna düşse de ayrı yapıdır. Yutak bölümleri gırtlağın arkasına sarılır;
      // kutusu gırtlak kıkırdağının kutusuyla çakışır ama kopyası değildir.
      // Damar dosyasında kutu benzerliği kafa içi arterlerin kopyalarını ayıklar; ama derin femoral arter femoral arterin kutusu içinde kaldığı için korunur.
      if (dosya !== 'muscular' && !(dosya === 'cardiovascular' && kucuk === 'deep femoral artery') && !(dosya === 'nervous' && /sulcus/.test(kucuk)) && !/^(naso|oro|laryngo)pharynx$/.test(kucuk) && (sisteme[sistem] || []).some(b => iou(b, bounds) > 0.45)) { g.dispose(); return; }
      if (!g.attributes.normal) g.computeVertexNormals();
      // Kaynak sözlükte birkaç adda Fransızca aksan kalmış (ör. "latérales"); Latincede aksan olmaz.
      // Terminologia Anatomica ile karşılaştırmada düzeltilen adlar kaynak sözlüğün önüne geçer (ekdogrulama.js).
      const la = eklemLa(parantezsiz.toLowerCase()) ?? LA_DUZELT[parantezsiz.toLowerCase()] ?? EK_DOGRULAMA[parantezsiz.toLowerCase()]?.la ?? (sozluk[taban]?.la || sozluk[parantezsiz]?.la || parantezsiz).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      sonuc.push({ en: yan ? `${taban} (${yan === 'sol' ? 'left' : 'right'})` : taban, anahtar: 'z:' + parantezsiz.toLowerCase(), enKucuk: parantezsiz.toLowerCase(), la, tr: yan ? `${la} (${yan})` : la, sistem, fn: (dosya === 'muscular' && kasGorev(parantezsiz.toLowerCase())) || gorev(parantezsiz.toLowerCase(), sistem), geometry: g, bounds });
    });
    ilerleme?.((di + 1) / DOSYALAR.length);
  }
  draco.dispose();
  return sonuc;
}
