// Çalışma planı, aralıklı tekrar (kutu yöntemi), ilerleme ve notlar.
// Bütün kayıt tarayıcının yerel deposunda tutulur; "Yedek al" ile dosyaya aktarılabilir.

// Konu sırası: önce iskelet, sonra sindirim ve solunum, sonra diğer sistemler.
// Her konu, yapı anahtarlarının listesidir.
export const KONULAR = [
  { id: 'kafatasi', ad: 'Kafatası kemikleri', anahtarlar: ['alin', 'cepere', 'sakak', 'artkafa', 'kama', 'kalbur', 'elmacik', 'burun-kemigi', 'ust-cene', 'alt-cene', 'damak', 'saban', 'gozyasi-kemigi', 'alt-konka', 'dil-kemigi'] },
  { id: 'omurga', ad: 'Omurga ve göğüs kafesi', anahtarlar: ['atlas', 'aksis', 'boyun-omuru', 'gogus-omuru', 'bel-omuru', 'sagri', 'disk', 'kaburga', 'kaburga-kikirdagi', 'manubrium', 'sternum-govdesi', 'kilic'] },
  { id: 'kol', ad: 'Omuz, kol ve el kemikleri', anahtarlar: ['kopucuk', 'kurek', 'pazu', 'doner', 'dirsek', 'el-kayiksi', 'ay', 'uckoseli', 'bezelye', 'buyuk-cokgen', 'kucuk-cokgen', 'basli', 'cengelli', 'el-tarak', 'el-falanks'] },
  { id: 'bacak', ad: 'Kalça, bacak ve ayak kemikleri', anahtarlar: ['kalca', 'uyluk', 'diz-kapagi', 'kaval', 'kamis', 'asik', 'topuk', 'ayak-kayik', 'kup', 'ic-civi', 'orta-civi', 'dis-civi', 'ayak-tarak', 'ayak-falanks', 'susam'] },
  { id: 'agiz', ad: 'Ağız ve dişler', anahtarlar: ['dil', 'kesici', 'kopek-disi', 'kucuk-azi', 'buyuk-azi', 'dis-eti', 'dilalti', 'cenealti'] },
  { id: 'sindirim-kanali', ad: 'Sindirim kanalı', anahtarlar: ['yemek-borusu', 'mide', 'onikiparmak', 'jejunum', 'ileum', 'ileocekal', 'apandis', 'cikan-kolon', 'enine-kolon', 'inen-kolon', 'rektum', 'tenya', 'mezenter', 'enine-mezokolon', 'apandis-askisi'] },
  { id: 'yardimci', ad: 'Karaciğer, safra yolları ve pankreas', anahtarlar: ['kuyruklu-lob', 'karaciger-kanali', 'ortak-karaciger-kanali', 'safra-agaci', 'kese-kanali', 'safra-kesesi', 'pankreas', 'pankreas-kanali'] },
  { id: 'solunum-yollari', ad: 'Burun, gırtlak ve soluk borusu', anahtarlar: ['bolme-kikirdak', 'yan-burun-kikirdak', 'kanat-kikirdak', 'girtlak-kapagi', 'kalkan-kikirdak', 'yuzuk-kikirdak', 'ibrik', 'boynuzsu', 'civi-kikirdak', 'soluk-borusu', 'diyafram'] },
  { id: 'bronslar', ad: 'Bronş ağacı', anahtarlar: ['ana-bronş', 'segment-bronsu', 'lingula-bronsu'] },
  { id: 'kalp', ad: 'Kalp ve büyük damarlar', anahtarlar: ['sag-kulakcik', 'sol-kulakcik', 'sag-karincik', 'sol-karincik', 'karincik-duvari', 'mitral', 'trikuspit', 'aort-kapagi', 'pulmoner-kapak', 'papiller', 'cikan-aorta', 'aort-yayi', 'gogus-aortasi', 'karin-aortasi', 'pulmoner-govde', 'pulmoner-arter', 'pulmoner-ven', 'ust-ana-toplardamar', 'alt-ana-toplardamar', 'tac-arter', 'koroner-sinus'] },
  { id: 'damarlar', ad: 'Vücudun ana damarları', anahtarlar: ['ortak-sah', 'ic-sah', 'kopucuk-alti-arter', 'kol-bas-arter', 'koltukalti-arter', 'kol-arter', 'doner-arter', 'dirsek-arter', 'omur-arter', 'colyak', 'ust-mezenter-arter', 'ortak-iliak-arter', 'uyluk-arter', 'diz-arkasi-arter', 'ic-sah-toplardamari', 'kopucuk-alti-ven', 'kol-bas-ven', 'dirsek-ortasi-ven', 'buyuk-safen', 'uyluk-ven', 'kapi-ven'] },
  { id: 'bosaltim', ad: 'Boşaltım sistemi', anahtarlar: ['bobrek', 'ureter', 'idrar-kesesi', 'uretra', 'bobrek-arter', 'bobrek-ven'] },
  { id: 'beyin-kabugu', ad: 'Beyin yarım küreleri: loblar ve kıvrımlar', anahtarlar: ['presantral', 'postsantral', 'ust-frontal', 'orta-frontal', 'alt-frontal', 'orbital-girus', 'ust-temporal', 'orta-temporal', 'alt-temporal', 'fusiform', 'parahipokampal', 'singulat', 'ust-parietal', 'supramarjinal', 'angular', 'oksipital-lob', 'insula', 'ak-madde'] },
  { id: 'derin-yapilar', ad: 'Derin yapılar, limbik sistem ve ventriküller', anahtarlar: ['nasirsi-cisim', 'ic-kapsul', 'kuyruklu-cekirdek', 'putamen', 'globus-pallidus', 'amigdala', 'hipokampus', 'forniks', 'forniks-komissuru', 'on-komissur', 'stria-terminalis', 'septum', 'beyin-karincigi', 'karinciklar-arasi-delik', 'koroid-pleksus', 'lamina-terminalis'] },
  { id: 'ara-beyin-sap', ad: 'Ara beyin, beyin sapı ve beyincik', anahtarlar: ['talamus', 'hipotalamus', 'yan-dizcik', 'ic-dizcik', 'habenula', 'stria-medullaris', 'arka-komissur', 'memecik-cisim', 'tuber-cinereum', 'orta-beyin', 'beyin-sapi-ayagi', 'ayaklar-arasi-cukur', 'ust-tumsek', 'alt-tumsek', 'ust-tumsek-kolu', 'alt-tumsek-kolu', 'su-yolu', 'pons', 'sogan', 'beyincik', 'beyincik-cadiri', 'omurilik-kanali'] },
  { id: 'gorme-yolu-orbita', ad: 'Görme yolu ve göz çukurunun sinirleri', anahtarlar: ['gorme-siniri', 'gorme-caprazi', 'gorme-yolu', 'okulomotor-ust', 'okulomotor-alt', 'troklear', 'oftalmik', 'frontal-sinir', 'supraorbital', 'supratroklear', 'lakrimal-sinir', 'nazosiliyer', 'infratroklear', 'on-etmoidal', 'arka-etmoidal', 'uzun-siliyer', 'kisa-siliyer', 'siliyer-gangliyon', 'siliyer-bag-dali'] },
  { id: 'duyu', ad: 'Göz ve kulak', anahtarlar: ['kornea', 'iris', 'mercek', 'ag-tabaka', 'sert-tabaka', 'damar-tabaka', 'camsi-cisim', 'gozyasi-bezi', 'kulak-kepcesi', 'ust-duz-goz', 'dis-duz-goz'] },
  { id: 'hormon', ad: 'Hormon bezleri ve bağışıklık organları', anahtarlar: ['hipofiz', 'epifiz', 'bobrekustu', 'timus', 'dalak'] },
  { id: 'kaslar', ad: 'Başlıca kaslar', anahtarlar: ['deltoid', 'buyuk-gogus', 'trapez', 'pazu-kasi', 'arka-kol-kasi', 'gkm', 'on-disli', 'dis-egik', 'dis-kaburgalar-arasi', 'buyuk-kalca', 'uyluk-duz', 'dis-genis', 'ic-genis', 'terzi', 'baldir', 'soleus', 'on-kaval-kasi', 'asil'] },
];

// Filtreyle belirlenen konular: model parçalarının İngilizce adına ve sistemine göre seçilir.
const F = (sistem, re, haric) => ({ sistem, re, haric });
const DAMAR = ['atardamar', 'toplardamar'], KAS = ['kas', 'bag'];
export const FILTRE_KONULAR = [
  { id: 'koroner', ad: 'Kalbin kendi damarları (koroner damarlar)', filtre: F(DAMAR, /coronary|cardiac vein|interventricular|conus|ventricular branch|marginal (branch|vein)|vein of ventricle|coronary sinus/) },
  { id: 'gogus-damar', ad: 'Göğüs ve gövde duvarı damarları', filtre: F(DAMAR, /intercostal|thoracic|azygos|bronchial|esophageal|oesophageal|musculophrenic|subcostal|costocervical|thyrocervical|brachiocephalic|subclavian|vena cava|aorta|phrenic|epigastric/) },
  { id: 'bas-boyun-damar', ad: 'Baş ve boyun damarları', filtre: F(DAMAR, /carotid|vertebral|jugular|thyroid|cervical|ophthalmic|facial|lingual/) },
  { id: 'ust-ekstremite-damar', ad: 'Üst ekstremite damarları', filtre: F(DAMAR, /brachi|axillary|radial|ulnar|palmar|finger|pollicis|indicis|cephalic|basilic|cubital|antebrachial|metacarpal|humeral|scapular|thoraco-?acromial|thoracodorsal|carpal|interosse|of hand/) },
  { id: 'karin-damar', ad: 'Karın ve leğen damarları', filtre: F(DAMAR, /mesenteric|celiac|gastr|splenic|hepatic|portal|pancrea|colic|ileal|ileocolic|cecal|appendicular|sigmoid|rectal|renal|suprarenal|lumbar|testicular|iliac|hepatovenous|iliolumbar|sacral|pudendal|caudate|ureteric|lobe branch|penis|abdominal aorta/) },
  { id: 'alt-ekstremite-damar', ad: 'Alt ekstremite damarları', filtre: F(DAMAR, /femoral|popliteal|tibial|fibular|plantar|pedis|genicular|saphenous|tarsal|arcuate|metatarsal|calcaneal|gluteal|obturator|perforating|of foot/) },
  { id: 'akciger-damar', ad: 'Akciğer damarları (segment damarları)', filtre: F(DAMAR, /segmental (artery|vein)|lingular|lobar|pulmonary|subsuperior|laterobasal|mediobasal|basal branch|(part|branch) of .*segmental/, /hepatic|renal|portal/) },
  { id: 'beyin-damar', ad: 'Beyin ve omurilik damarları', filtre: F(DAMAR, /cerebr|cerebell|basilar|communicating|choroid|callos|frontobasal|parietal artery|temporal|occipital artery|sulcus|thalamo|pontine|spinal artery|prefrontal|angular|splenial|vermian|precuneal|paracentral|intermediomedial|posteromedial/) },
  { id: 'kas-bas-boyun', ad: 'Baş, boyun, yutak ve gırtlak kasları', filtre: F(KAS, /hyoid|glossus|crico|aryt|vocal|palatini|uvul|scalen|longus colli|longus capitis|rectus capitis|obliquus capitis|digastric|splenius|platysma|sternocleido|pharyn|constrictor|epiglott|tendinous ring|raphe|conus elasticus|thyrohyoid|intermediate tendon/) },
  { id: 'kas-goz', ad: 'Göz kasları ve göz çukuru bağları', filtre: F(KAS, /rectus$|superior oblique|inferior oblique$|levator palpebrae|check ligament|trochlea/, /capitis|longus colli/) },
  { id: 'kas-sirt-gogus', ad: 'Sırt, göğüs ve karın duvarı kasları', filtre: F(KAS, /iliocostalis|longissimus|spinalis|rotator|interspinal|intertransvers|levatores costarum|serratus|rhomboid|trapezius|levator scapulae|intercostal|transversus thoracis|diaphragm|pector|subclavius|external oblique|linea alba/) },
  { id: 'kas-ust', ad: 'Üst ekstremite kasları', filtre: F(KAS, /pollicis|indicis|carpi|of hand|anconeus|coracobrachialis|brachi|pronator|supinator|palmaris|deltoid|teres|spinatus|subscapularis|extensor digiti minimi|extensor digitorum$|flexor digitorum (superficialis|profundus)|retinaculum|membrane of forearm/) },
  { id: 'kas-alt', ad: 'Alt ekstremite kasları', filtre: F(KAS, /hallucis|of foot|plantar|gluteus|gemellus|obturator|quadratus femoris|pectineus|adductor (longus|brevis|magnus|minimus)|gracilis|sartorius|vastus|rectus femoris|biceps femoris|semitendinosus|semimembranosus|gastrocnemius|soleus|popliteus|tibialis|fibularis|extensor digitorum longus|flexor digitorum (longus|brevis)|flexor accessorius|piriformis|tensor fasciae|iliacus|psoas|iliotibial|calcaneal tendon|membrane of leg/) },
  { id: 'kas-pelvis', ad: 'Leğen tabanı ve perine kasları', filtre: F(KAS, /coccyg|puborectalis|anal sphincter|perineal|levator ani/) },
  { id: 'ureme', ad: 'Üreme organları ve meme', filtre: F(['ureme'], /./) },
  { id: 'gebelik', ad: 'Plasenta ve göbek kordonu', filtre: F(['gebelik'], /./) },
  { id: 'bobrek-ic', ad: 'Böbreğin iç yapısı ve idrar kesesi', filtre: F(['bosaltim'], /calyx|pyramid|papilla|cortex|column|pelvis|hilum|capsule|trigone|orifice|fundus|neck/) },
  { id: 'akciger-segment', ad: 'Akciğer lobları, segmentleri ve bronşlar', filtre: F(['solunum'], /bronchopulmonary|lobar|hilus|carina|cartilage of|segmental bronchus|lingular bronchus|trachea cartilage|lobe of|pleura|pharynx|mucosa/) },
  { id: 'karin-organ-ayrinti', ad: 'Karaciğer, pankreas ve bağırsak ayrıntıları', filtre: F(['sindirim'], /liver|hepat|hepatovenous|segment\d?$|ligament|bile|porta|pancrea|duoden|ampulla|flexure|caecum|sigmoid|tonsil|valve|venosum|omentum|parotid|palate|mesocolon/) },
  { id: 'periferik-sinir', ad: 'Periferik sinirler ve sinir ağları', filtre: F(['sinir'], /nerve|plexus|ganglion|trunk|ramus|rami|cord|root|branch/, /spinal cord|oculomotor|ciliary|optic|nasociliary|frontal|ethmoidal|trochlear|orbital|lacrimal|ophthalmic/) },
  { id: 'hormon-ek', ad: 'Tiroid, paratiroid ve diğer bezler', filtre: F(['hormon'], /thyroid|hypophysis/) },
  { id: 'omurilik', ad: 'Omurilik segmentleri', filtre: F(['sinir'], /spinal cord/) },
  { id: 'beyin-cekirdek', ad: 'Talamus, hipotalamus ve bazal çekirdekler', filtre: F(['sinir', 'duyu'], /nucleus|nuclei|nuclear|thalam|hth|substantia|claustrum|accumbens|zona incerta|pallidus|caudate|putamen|amygdal|basal forebrain/) },
  { id: 'beyin-kivrim-ek', ad: 'Beyin kabuğu: bütün kıvrımlar ve alanlar', filtre: F(['sinir'], /gyrus|gyri|cortex|pole|operculum|lobule|planum|area|insula|olfactory/) },
  { id: 'beyincik-sap-ek', ad: 'Beyin sapı ve beyincik ayrıntıları', filtre: F(['sinir'], /cerebell|peduncle|tegmentum|olive|pyramidal|pretectal|vermis|hindbrain|aqueduct|ventricle|red nucleus/) },
  { id: 'lenf', ad: 'Lenf düğümü, dalak ve timüs', filtre: F(['lenf'], /./) },
  { id: 'diz', ad: 'Diz eklemi ve bağları', filtre: F(['iskelet', 'kas', 'bag'], /cruciate|collateral|condyle|patellar|knee|enthesis|intercondylar|bone tissue|perichondular|quadriceps/) },
  { id: 'goz-ayrinti', ad: 'Göz: bütün yapılar', filtre: F(['duyu'], /./, /nucle|hth|radiation|dura|pontine/) },
];

// Tıp fakültesi sınıfları ve ders kurulları (komiteler). Kaynak: 13 fakültenin 2025-2027 programlarından çıkarılan
// en yaygın düzen (ayrıntı: KAYNAKLAR.md). Anatomi 1. ve 2. sınıfta okutulur; 3. sınıfta çoğu fakültede yalnız klinik
// ve topografik anatomi tekrarı vardır, 4. sınıftan sonra ayrı anatomi dersi yoktur. Sıra fakülteye göre değişir.
const BOLGE = [
  { id: 't-gogus', ad: 'Göğüs (toraks)', konular: ['kalp', 'koroner', 'gogus-damar', 'solunum-yollari', 'bronslar', 'akciger-segment', 'akciger-damar'] },
  { id: 't-karin', ad: 'Karın ve pelvis', konular: ['sindirim-kanali', 'yardimci', 'karin-organ-ayrinti', 'karin-damar', 'bosaltim', 'bobrek-ic', 'ureme', 'gebelik', 'kas-pelvis', 'lenf'] },
  { id: 't-bas', ad: 'Baş-boyun ve sinir sistemi', konular: ['kafatasi', 'agiz', 'kas-bas-boyun', 'bas-boyun-damar', 'beyin-kabugu', 'derin-yapilar', 'ara-beyin-sap', 'beyin-damar', 'omurilik', 'duyu', 'goz-ayrinti'] },
  { id: 't-ekstremite', ad: 'Sırt ve ekstremiteler', konular: ['omurga', 'kol', 'bacak', 'diz', 'kas-sirt-gogus', 'kas-ust', 'kas-alt', 'periferik-sinir', 'ust-ekstremite-damar', 'alt-ekstremite-damar'] },
];
export const SINIFLAR = [
  { id: 'd1', ad: '1. sınıf (Dönem 1)', komiteler: [
    { id: 'hareket-1', ad: 'Hareket sistemi I: kemikler ve eklemler', konular: ['kafatasi', 'omurga', 'kol', 'bacak', 'diz'] },
    { id: 'hareket-2', ad: 'Hareket sistemi II: kaslar, sinir ağları, ekstremite damarları', konular: ['kaslar', 'kas-bas-boyun', 'kas-sirt-gogus', 'kas-ust', 'kas-alt', 'periferik-sinir', 'ust-ekstremite-damar', 'alt-ekstremite-damar'] },
  ] },
  { id: 'd2', ad: '2. sınıf (Dönem 2)', komiteler: [
    { id: 'dolasim-solunum', ad: 'Dolaşım ve solunum sistemleri', konular: ['kalp', 'koroner', 'damarlar', 'gogus-damar', 'bas-boyun-damar', 'karin-damar', 'solunum-yollari', 'bronslar', 'akciger-segment', 'akciger-damar'] },
    { id: 'sindirim', ad: 'Sindirim sistemi', konular: ['agiz', 'sindirim-kanali', 'yardimci', 'karin-organ-ayrinti'] },
    { id: 'urogenital-endokrin', ad: 'Ürogenital ve endokrin sistemler', konular: ['bosaltim', 'bobrek-ic', 'ureme', 'gebelik', 'kas-pelvis', 'hormon', 'hormon-ek', 'lenf'] },
    { id: 'sinir-duyu', ad: 'Sinir sistemi ve duyu organları', konular: ['beyin-kabugu', 'beyin-kivrim-ek', 'derin-yapilar', 'beyin-cekirdek', 'ara-beyin-sap', 'beyincik-sap-ek', 'omurilik', 'periferik-sinir', 'gorme-yolu-orbita', 'beyin-damar', 'duyu', 'goz-ayrinti', 'kas-goz'] },
  ] },
  { id: 'd3', ad: '3. sınıf (Dönem 3): klinik anatomi tekrarı', komiteler: BOLGE },
  { id: 'd4', ad: '4. sınıf ve sonrası: staj öncesi tekrar', komiteler: BOLGE.map(b => ({ ...b, id: b.id + '-4' })) },
];
export const sinif = () => kayit.sinif;
export const komite = () => kayit.komite;
export function sinifAyarla(s) { kayit = { ...kayit, sinif: s, komite: 'hepsi' }; kaydet(); }
export function komiteAyarla(k) { kayit = { ...kayit, komite: k }; kaydet(); }
export const cinsiyet = () => kayit.cinsiyet;
export function cinsiyetAyarla(c) { kayit = { ...kayit, cinsiyet: c }; kaydet(); }
export const dil = () => kayit.dil;
export function dilAyarla(d) { kayit = { ...kayit, dil: d }; kaydet(); }

// Aralıklı tekrar: FSRS-6 (Anki'nin de kullandığı açık algoritma). Her kart için kalıcılık (S: hatırlama olasılığının
// %90'a düşmesi için geçen gün) ve zorluk (D: 1-10) tutulur. Formüller ve varsayılan parametreler:
// https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm
const W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
const DK = 60 * 1000, GUN = 24 * 60 * DK, HEDEF = 0.9;
const FAKTOR = 0.9 ** (-1 / W[20]) - 1;
const sikistir = d => Math.min(10, Math.max(1, d));
const D0 = G => sikistir(W[4] - Math.exp(W[5] * (G - 1)) + 1);
export const hatirlama = (t, S) => (1 + (FAKTOR * t) / S) ** -W[20];
export const aralikGun = S => (S / FAKTOR) * (HEDEF ** (-1 / W[20]) - 1);
// Bir puandan (G: 1 unuttum, 2 zor, 3 iyi, 4 kolay) sonra yeni kalıcılık ve zorluk. t: son tekrardan beri geçen gün.
export function fsrs(k, G, t) {
  if (!k || !k.S) return { S: W[G - 1], D: D0(G) };
  const R = hatirlama(t, k.S), D = k.D;
  let S;
  if (t < 1) { let c = Math.exp(W[17] * (G - 3 + W[18])) * k.S ** -W[19]; if (G >= 2) c = Math.max(1, c); S = k.S * c; }
  else if (G === 1) S = Math.min(k.S, W[11] * D ** -W[12] * ((k.S + 1) ** W[13] - 1) * Math.exp(W[14] * (1 - R)));
  else S = k.S * (1 + Math.exp(W[8]) * (11 - D) * k.S ** -W[9] * (Math.exp(W[10] * (1 - R)) - 1) * (G === 2 ? W[15] : 1) * (G === 4 ? W[16] : 1));
  const D1 = D + (-W[6] * (G - 3) * (10 - D)) / 9;
  return { S: Math.max(0.01, S), D: sikistir(W[7] * D0(4) + (1 - W[7]) * D1) };
}
// Ekranda gösterilen basamak: kalıcılığa göre 0-5.
const basamak = S => (!S ? 0 : S < 1 ? 1 : S < 4 ? 2 : S < 15 ? 3 : S < 45 ? 4 : 5);
export const KUTU_ADI = ['Yeni', 'Yeni öğrenildi (1 günden kısa)', 'Kısa süreli (1–4 gün)', 'Yerleşiyor (4–15 gün)', 'Sağlam (15–45 gün)', 'Kalıcı (45 günden uzun)'];
const PUAN = { yanlis: 1, zor: 2, dogru: 3, kolay: 4 };

const ANAHTAR = 'anatomi-simulatoru';
let kayit = yukle();

function yukle() {
  try {
    const k = JSON.parse(localStorage.getItem(ANAHTAR) || '{}');
    return { kartlar: k.kartlar || {}, notlar: k.notlar || {}, gunler: k.gunler || {}, son: k.son || [], sinif: k.sinif || 'd2', komite: k.komite || 'hepsi', dil: k.dil || 'la', cinsiyet: k.cinsiyet || 'erkek', sinavTarihi: k.sinavTarihi || '' };
  } catch { return { kartlar: {}, notlar: {}, gunler: {}, son: [], sinif: 'd2', komite: 'hepsi', dil: 'la', cinsiyet: 'erkek' }; }
}
function kaydet() { try { localStorage.setItem(ANAHTAR, JSON.stringify(kayit)); } catch { /* depo kapalıysa kayıt yalnız bu oturumda kalır */ } }
const bugun = () => new Date().toLocaleDateString('sv-SE');


export const kart = id => kayit.kartlar[id] || { kutu: 0, sonraki: 0, dogru: 0, yanlis: 0 };

// Komite sınav tarihi verilmişse aralık sınavı aşmaz: sınava kalan sürenin yarısından uzun aralık verilmez,
// böylece her kart sınavdan önce en az bir kez daha gelir.
export const sinavTarihi = () => kayit.sinavTarihi || '';
export function sinavTarihiAyarla(t) { kayit = { ...kayit, sinavTarihi: t }; kaydet(); }
function sinavSiniri(gun, simdi) {
  if (!kayit.sinavTarihi) return gun;
  const kalan = (new Date(kayit.sinavTarihi + 'T09:00').getTime() - simdi) / GUN;
  return kalan > 0 ? Math.min(gun, Math.max(1, kalan / 2)) : gun;
}
// Bir puanın ardından kartın bir sonraki gelişine kaç gün kaldığını verir (düğme altında göstermek için).
export function sonrakiAralik(id, sonuc, simdi = Date.now()) {
  const k = kayit.kartlar[id], G = PUAN[sonuc];
  if (G === 1) return 1 / 1440;
  const y = fsrs(k, G, k?.son ? (simdi - k.son) / GUN : 0);
  return sinavSiniri(Math.max(1, Math.round(aralikGun(y.S))), simdi);
}
// Bir cevabı kaydeder. sonuc: 'yanlis' | 'zor' | 'dogru' | 'kolay'
export function cevapla(id, sonuc, simdi = Date.now()) {
  const k = kart(id), G = PUAN[sonuc];
  const y = fsrs(k, G, k.son ? (simdi - k.son) / GUN : 0);
  const gun = sonrakiAralik(id, sonuc, simdi);
  const yeni = { S: y.S, D: y.D, son: simdi, kutu: G === 1 ? 1 : basamak(y.S), sonraki: simdi + gun * GUN, dogru: k.dogru + (G === 1 ? 0 : 1), yanlis: k.yanlis + (G === 1 ? 1 : 0) };
  const g = bugun();
  kayit = { ...kayit, kartlar: { ...kayit.kartlar, [id]: yeni }, gunler: { ...kayit.gunler, [g]: (kayit.gunler[g] || 0) + 1 }, son: [{ id, sonuc, zaman: simdi }, ...kayit.son].slice(0, 200) };
  kaydet();
  return yeni;
}

// Tekrar sırası: önce vakti gelmiş kartlar (düşük kutu önce), sonra en çok 'yeniSiniri' kadar yeni kart.
export function tekrarListesi(anahtarlar, yeniSiniri = 10) {
  const simdi = Date.now(), vadeli = [], yeni = [];
  for (const a of anahtarlar) for (const tip of ['ad', 'bul']) {
    const id = `${tip}:${a}`, k = kayit.kartlar[id];
    if (!k) yeni.push(id); else if (k.sonraki <= simdi) vadeli.push([id, k]);
  }
  vadeli.sort((x, y) => x[1].kutu - y[1].kutu || x[1].sonraki - y[1].sonraki);
  return [...vadeli.map(v => v[0]), ...karistir(yeni).slice(0, yeniSiniri)];
}

// Sınav için soru seçimi: yanlış yapılan ve düşük kutudaki yapılar daha sık seçilir.
export function soruSec(anahtarlar, adet) {
  const havuz = anahtarlar.map(a => {
    const k1 = kart(`ad:${a}`), k2 = kart(`bul:${a}`);
    const kutu = Math.min(k1.kutu, k2.kutu), yanlis = k1.yanlis + k2.yanlis;
    return { a, agirlik: (6 - kutu) ** 2 + yanlis * 2 };
  });
  const secilen = [];
  while (secilen.length < Math.min(adet, havuz.length)) {
    const toplam = havuz.reduce((t, h) => t + h.agirlik, 0);
    let r = Math.random() * toplam;
    const i = havuz.findIndex(h => (r -= h.agirlik) <= 0);
    secilen.push(havuz.splice(i < 0 ? 0 : i, 1)[0].a);
  }
  return secilen;
}

// Bir yapının ustalık düzeyi: iki kartından düşük olanın kutusu.
export const ustalik = a => Math.min(kart(`ad:${a}`).kutu, kart(`bul:${a}`).kutu);
export const ogrenildi = a => ustalik(a) >= 3;

export function konuDurumu(anahtarlar) {
  const ogrenilen = anahtarlar.filter(ogrenildi).length;
  const baslanan = anahtarlar.filter(a => kayit.kartlar[`ad:${a}`] || kayit.kartlar[`bul:${a}`]).length;
  return { toplam: anahtarlar.length, ogrenilen, baslanan, durum: !baslanan ? 'Başlanmadı' : ogrenilen === anahtarlar.length ? 'Tamamlandı' : 'Çalışılıyor' };
}

export function genelIlerleme() {
  const kartlar = Object.values(kayit.kartlar);
  const dogru = kartlar.reduce((t, k) => t + k.dogru, 0), yanlis = kartlar.reduce((t, k) => t + k.yanlis, 0);
  let seri = 0; const d = new Date();
  if (!kayit.gunler[bugun()]) d.setDate(d.getDate() - 1);
  while (kayit.gunler[d.toLocaleDateString('sv-SE')]) { seri++; d.setDate(d.getDate() - 1); }
  const son7 = [...Array(7)].map((_, i) => { const g = new Date(); g.setDate(g.getDate() - (6 - i)); const s = g.toLocaleDateString('sv-SE'); return { gun: g.toLocaleDateString('tr-TR', { weekday: 'short' }), sayi: kayit.gunler[s] || 0 }; });
  const vadeli = kartlar.filter(k => k.sonraki <= Date.now()).length;
  return { dogru, yanlis, oran: dogru + yanlis ? Math.round((100 * dogru) / (dogru + yanlis)) : 0, seri, son7, vadeli, kartSayisi: kartlar.length };
}

export function enCokYanlis(adet = 8) {
  const y = {};
  for (const [id, k] of Object.entries(kayit.kartlar)) { const a = id.slice(id.indexOf(':') + 1); y[a] = (y[a] || 0) + k.yanlis; }
  return Object.entries(y).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]).slice(0, adet);
}

export const notAl = a => kayit.notlar[a] || '';
export function notYaz(a, metin) {
  const notlar = { ...kayit.notlar };
  if (metin.trim()) notlar[a] = metin; else delete notlar[a];
  kayit = { ...kayit, notlar }; kaydet();
}
export const tumNotlar = () => Object.entries(kayit.notlar);

export const yedekMetni = () => JSON.stringify(kayit, null, 1);
export function yedekYukle(metin) {
  const k = JSON.parse(metin);
  if (typeof k !== 'object' || !k.kartlar) throw new Error('Bu dosya simülatörün yedeği değil.');
  kayit = { kartlar: k.kartlar, notlar: k.notlar || {}, gunler: k.gunler || {}, son: k.son || [], sinif: k.sinif || 'd2', komite: k.komite || 'hepsi', dil: k.dil || 'la', cinsiyet: kayit.cinsiyet, sinavTarihi: k.sinavTarihi || '' };
  kaydet();
}

export function karistir(dizi) {
  const a = [...dizi];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
