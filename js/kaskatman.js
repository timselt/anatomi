// Kas katmanı: Z-Anatomy (CC BY-SA 4.0) muscular.glb dosyasından ana modelde (BodyParts3D) eksik olan kaslar,
// bursalar, tendon kılıfları, retinakulumlar ve aponörozlar. ekmodel.js bu dosyadaki kuralları yalnız 'muscular' için kullanır.

// Ana modelde zaten bulunan kaslar (ad ve yüzey karşılaştırmasıyla bulundu, 22.11.2026). Z-Anatomy adı ana modeldekinden farklı
// yazıldığı için ad eşleşmesi kaçırıyordu (ör. "tibialis anterior muscle" ~ "tibialis anterior", "humero-ulnar head of flexor
// digitorum superficialis" ~ "flexor digitorum superficialis"). Her parçanın yüzeyinin ana modeldeki kas yüzeylerine 3 mm'den
// yakın kısmı da ölçüldü; aynı kas için tipik değer %40–100.
const KOPYA = new Set(('abdominal part of pectoralis major muscle|acromial part of deltoid muscle|anconeus muscle|anterior belly of digastric muscle|ary-epiglottic part of oblique arytenoid muscle|ascending part of trapezius muscle|brachialis muscle|brachioradialis muscle|clavicular head of pectoralis major muscle|clavicular part of deltoid muscle|coccygeus muscle|coracobrachialis muscle|deep head of flexor pollicis brevis|deep head of pronator teres|descending part of trapezius muscle|dorsal interossei muscles of hand|dorsal parts of lateral intertransversarii lumborum muscles|external abdominal oblique muscle|external intercostal muscles|external part of thyro-arytenoid muscle|fibularis brevis muscle|fibularis longus muscle|fibularis tertius muscle|flexor digiti minimi of foot|flexor digiti minimi of hand|genioglossus muscle|geniohyoid muscle|gluteus maximus muscle|gluteus medius muscle|gluteus minimus muscle|gracilis muscle|humeral head of extensor carpi ulnaris|humero-ulnar head of flexor digitorum superficialis|hyoglossus muscle|iliacus muscle|iliococcygeus muscle|iliocostalis colli muscle|iliocostalis lumborum muscle|iliocostalis thoracis muscle|inferior gemellus muscle|inferior oblique muscle|inferior rectus muscle|inferior tarsus|innermost intercostal muscles|intermediate tendon of digastric muscle|internal intercostal muscles|interspinales colli muscles|interspinales lumborum muscles|interspinales thoracis muscles|lateral crico-arytenoid muscle|lateral rectus muscle|levatores breves costarum|levatores longi costarum|longissimus capitis muscle|longissimus colli muscle|longissimus thoracis muscle|longus capitis muscle|lumbrical muscles of foot|lumbrical muscles of hand|medial rectus muscle|mylohyoid muscle|oblique part of cricothyroid muscle|obliquus inferior capitis muscle|obliquus superior capitis muscle|omohyoid muscle|opponens digiti minimi muscle of foot|opponens digiti minimi muscle of hand|opponens pollicis muscle|palatopharyngeus muscle|palmar interossei muscles|palmaris longus muscle|pectineus muscle|pectoralis minor muscle|piriformis muscle|plantar interossei muscles|plantaris muscle|popliteus muscle|posterior belly of digastric muscle|posterior crico-arytenoid muscle|pubo-analis muscle|pubococcygeus muscle|quadratus femoris muscle|quadratus plantae muscle|radial head of flexor digitorum superficialis|rectus anterior capitis muscle|rectus femoris muscle|rectus lateralis capitis muscle|rectus posterior major capitis muscle|rectus posterior minor capitis muscle|rhomboid major muscle|rhomboid minor muscle|rotatores|sartorius muscle|scalenus anterior muscle|scalenus medius muscle|scalenus posterior muscle|scapular spinal part of deltoid muscle|semimembranosus muscle|semispinalis colli muscle|semispinalis thoracis muscle|semitendinosus muscle|serratus anterior muscle|serratus posterior inferior muscle|serratus posterior superior muscle|soleus muscle|spinalis capitis muscle|spinalis colli muscle|spinalis thoracis muscle|splenius capitis muscle|splenius colli muscle|sternocleidomastoid muscle|sternocostal head of pectoralis major muscle|sternohyoid muscle|sternothyroid muscle|straight part of cricothyroid muscle|stylohyoid muscle|stylopharyngeus muscle|subclavius muscle|subscapularis muscle|superficial head of pronator teres|superior gemellus muscle|superior oblique muscle|superior rectus muscle|superior tarsus|supraspinatus muscle|tendon of extensor digitorum longus|teres major muscle|teres minor muscle|thyro-epiglottic part of thyro-arytenoid muscle|thyrohyoid muscle|tibialis anterior muscle|tibialis posterior muscle|transverse arytenoid muscle|transverse part of trapezius muscle|transversus thoracis muscle|trochlea of superior oblique muscle|ulnar head of extensor carpi ulnaris|vastus intermedius muscle|vastus lateralis muscle|vastus medialis muscle|ventral parts of lateral intertransversarii lumborum muscles').split('|'));

// Eklenmeyenler: kasları tümüyle örten geniş fasya tabakaları ve kas araları bölmeleri. Bağ sistemi açılınca
// altlarındaki kasları göstermiyorlar; ayrı bir "fasya" görünümü kurulana kadar dışarıda kalır.
const HARIC = /\bfascia\b|intermuscular septum/;

// Ana modelde m. longus colli'nin yalnız sol bölümleri var; sağ taraf bu katmandan gelir.
export function kasKopyaMi(n, yan) {
  if (n === 'longus colli muscle') return yan !== 'sağ';
  return KOPYA.has(n) || HARIC.test(n);
}

export function kasSistem(n) {
  return /bursa|sheath|retinacul|aponeuros|ligament|iliopectineal arch/.test(n) ? 'bag' : 'kas';
}

// Kaynak sözlükte eksik ya da yanlış sırada yazılmış Latince adlar (Terminologia Anatomica biçiminde düzeltildi).
export const KAS_LA = {
  bucinator: 'Musculus buccinator',
  'levator nasolabialis': 'Musculus levator labii superioris alaeque nasi',
  'extensor digitorum brevis': 'Musculus extensor digitorum brevis',
  'frontalis muscle': 'Venter frontalis musculi occipitofrontalis',
  'occipitalis muscle': 'Venter occipitalis musculi occipitofrontalis',
  'deep part of masseter': 'Pars profunda musculi masseteris',
  'superficial part of masseter': 'Pars superficialis musculi masseteris',
  'epicranial aponeurosis': 'Aponeurosis epicranialis (galea aponeurotica)',
};

// Bursa, kılıf ve retinakulumlar için türüne göre kısa açıklama; kaslar için KAS_TERIM'deki görev kullanılır.
export function kasGorev(n) {
  if (/bursa/.test(n)) return 'Bursa: içinde az miktarda sinovyal sıvı bulunan, kasın, tendonun ya da derinin kemik üzerinde kaymasını kolaylaştıran kesedir. Zorlanma ya da darbeyle iltihaplanabilir (bursit).';
  if (/sheath/.test(n)) return 'Tendon kılıfı (vagina tendinis): tendonu saran, içi sinovyal sıvılı çift katlı kılıftır; tendonun retinakulum ve kemik altında sürtünmeden kaymasını sağlar. İltihabına tenosinovit denir.';
  if (/retinacul/.test(n)) return 'Retinakulum: eklem yakınında tendonları kemiğe doğru tutan kalınlaşmış fasya bandıdır; kas kasılırken tendonların yay gibi gerilip yerinden kalkmasını önler.';
  if (/transverse meta(carp|tars)al ligament/.test(n)) return 'Parmak köklerinde derinin altında enine uzanan lif demetleridir; palmar ya da plantar aponörozun parmaklara giden uzantılarını birbirine bağlar.';
  return '';
}

// Eklenen kasların Türkçe adı ve görevi (ders kitabı bilgisi). Anahtar: Z-Anatomy'deki İngilizce ad (küçük harf).
export const KAS_TERIM = {
  'frontalis muscle': ['Frontal kas (venter frontalis m. occipitofrontalis)', 'Alın derisinin altındaki yüz ifadesi kasıdır. Kaşları kaldırır ve alında enine çizgiler oluşturur; galea aponeurotica aracılığıyla oksipital kasla birlikte çalışır.'],
  'occipitalis muscle': ['Oksipital kas (venter occipitalis m. occipitofrontalis)', 'Kafatasının arkasındaki yüz ifadesi kasıdır; galea aponeurotica\'yı ve saçlı deriyi geriye çeker.'],
  'temporoparietalis muscle': ['Temporoparietal kas (m. temporoparietalis)', 'Kulak üstünde, frontal kas ile kulak kasları arasında ince bir kastır; galea aponeurotica\'yı gerer.'],
  'epicranial aponeurosis': ['Galea aponeurotica (aponeurosis epicranialis)', 'Saçlı derinin altında frontal ve oksipital kasları birbirine bağlayan sağlam tendon tabakasıdır. Altındaki gevşek bağ dokusu katmanında kanama ve enfeksiyon kolayca yayılır.'],
  'procerus muscle': ['Proserus kası (m. procerus)', 'Burun kökünde yer alır; kaşların iç uçlarını aşağı çeker ve burun kökünde enine kırışıklık oluşturur.'],
  'nasalis muscle': ['Nazal kas (m. nasalis)', 'Burun kanadının çevresindeki kastır; enine bölümü burun deliğini daraltır, kanat bölümü genişletir.'],
  'depressor septi nasi': ['Burun bölmesini indiren kas (m. depressor septi nasi)', 'Burun bölmesini ve burun ucunu aşağı çeker; burun deliğini genişletmeye yardım eder.'],
  'levator nasolabialis': ['Üst dudağı ve burun kanadını kaldıran kas (m. levator labii superioris alaeque nasi)', 'Üst dudağı kaldırır ve burun deliğini genişletir.'],
  'levator labii superioris': ['Üst dudağı kaldıran kas (m. levator labii superioris)', 'Üst dudağı kaldırır ve dışa çevirir; nazolabiyal oluğu derinleştirir.'],
  'zygomaticus major muscle': ['Büyük zigomatik kas (m. zygomaticus major)', 'Ağız köşesini yukarı ve dışa çeker; gülümsemenin ana kasıdır.'],
  'zygomaticus minor muscle': ['Küçük zigomatik kas (m. zygomaticus minor)', 'Üst dudağı yukarı ve dışa çeker.'],
  'levator anguli oris': ['Ağız köşesini kaldıran kas (m. levator anguli oris)', 'Ağız köşesini yukarı çeker; nazolabiyal oluğu belirginleştirir.'],
  'risorius muscle': ['Rizoryus kası (m. risorius)', 'Ağız köşesini yana çeker. Her insanda bulunmaz, kalınlığı kişiden kişiye değişir.'],
  'depressor anguli oris': ['Ağız köşesini indiren kas (m. depressor anguli oris)', 'Ağız köşesini aşağı ve yana çeker (üzgün yüz ifadesi).'],
  'depressor labii inferioris': ['Alt dudağı indiren kas (m. depressor labii inferioris)', 'Alt dudağı aşağı ve yana çeker.'],
  'mentalis muscle': ['Mental kas (m. mentalis)', 'Çene ucu derisini kaldırıp kırıştırır ve alt dudağı öne iter.'],
  'orbicularis oris muscle': ['Ağzın halka kası (m. orbicularis oris)', 'Dudakları çevreleyen halka kasıdır; ağzı kapatır, dudakları büzer ve öne uzatır. Konuşma ve emmede önemlidir.'],
  bucinator: ['Bukkinator kası (m. buccinator)', 'Yanağın kas temelidir. Çiğnemede besini dişlerin arasında tutar, üflemede yanağı gerer. Parotis kanalı bu kası deler.'],
  'orbital part of orbicularis oculi': ['Gözün halka kasının orbital bölümü (pars orbitalis m. orbicularis oculi)', 'Göz çevresindeki deriyi içe doğru çekerek gözü sıkıca kapatır (göz kırpıştırma).'],
  'palpebral part of orbicularis oculi': ['Gözün halka kasının palpebral bölümü (pars palpebralis m. orbicularis oculi)', 'Göz kapaklarının içindeki ince bölümdür; göz kapaklarını hafifçe kapatır (göz kırpma).'],
  'corrugator supercilii': ['Kaşları çatan kas (m. corrugator supercilii)', 'Kaşları içe ve aşağı çeker, kaşlar arasında dikey çizgiler oluşturur.'],
  'deep part of masseter': ['Masseter kasının derin bölümü (pars profunda m. masseteris)', 'Çeneyi kapatır (mandibulayı kaldırır); mandibulayı geriye çekmeye yardım eder.'],
  'superficial part of masseter': ['Masseter kasının yüzeyel bölümü (pars superficialis m. masseteris)', 'Çeneyi kapatır (mandibulayı kaldırır) ve öne itmeye yardım eder; dişler sıkılınca yanakta ele gelir.'],
  'temporalis muscle': ['Temporal kas (m. temporalis)', 'Çeneyi kapatır (mandibulayı kaldırır); arka lifleri mandibulayı geriye çeker.'],
  'superior head of lateral pterygoid muscle': ['Lateral pterigoid kasın üst başı (caput superius m. pterygoidei lateralis)', 'Çene kapanırken eklem diskini ve mandibula başını dengeler.'],
  'inferior head of lateral pterygoid muscle': ['Lateral pterigoid kasın alt başı (caput inferius m. pterygoidei lateralis)', 'Mandibulayı öne çeker ve ağzın açılmasını başlatır; tek taraflı kasılınca çeneyi karşı tarafa kaydırır.'],
  'medial pterygoid muscle': ['Medial pterigoid kas (m. pterygoideus medialis)', 'Çeneyi kapatır ve öne iter; iki taraf sırayla kasılınca öğütme hareketi olur.'],
  'latissimus dorsi muscle': ['Geniş sırt kası (m. latissimus dorsi)', 'Kola ekstansiyon, adduksiyon ve iç rotasyon yaptırır (ör. barfiks, kürek çekme).'],
  'rectus abdominis muscle': ['Rektus abdominis kası (m. rectus abdominis)', 'Gövdeye fleksiyon yaptırır, karın içi basıncını artırır; enine tendon kesişimleri kası bölümlere ayırır.'],
  'transversus abdominis muscle': ['Transversus abdominis kası (m. transversus abdominis)', 'Karın duvarının en derin yassı kasıdır; karın içi basıncını artırır ve bel omurgasını sabitler.'],
  'internal abdominal oblique muscle': ['İç oblik karın kası (m. obliquus internus abdominis)', 'Gövdeye fleksiyon yaptırır, gövdeyi aynı tarafa döndürür, karın içi basıncını artırır. Alt lifleri kremaster kasını oluşturur.'],
  'pyramidalis muscle': ['Piramidal kas (m. pyramidalis)', 'Linea alba\'yı gerer. Her insanda bulunmaz.'],
  'quadratus lumborum muscle': ['Kuadratus lumborum kası (m. quadratus lumborum)', 'Gövdeyi aynı tarafa eğer, 12. kaburgayı soluk vermede sabitler; iki taraflı kasılınca bel omurgasına ekstansiyon yaptırır.'],
  'multifidus colli muscle': ['Boyun multifidus kası (m. multifidus cervicis)', 'Omurgayı sabitler; omurgaya ekstansiyon yaptırır ve karşı tarafa döndürür.'],
  'multifidus thoracis muscle': ['Göğüs multifidus kası (m. multifidus thoracis)', 'Omurgayı sabitler; omurgaya ekstansiyon yaptırır ve karşı tarafa döndürür.'],
  'multifidus lumborum muscle': ['Bel multifidus kası (m. multifidus lumborum)', 'Bel omurgasını her segmentte sabitler; omurgaya ekstansiyon yaptırır. Bel ağrısında kas kütlesi azalabilir.'],
  'dorsal interossei muscles of foot': ['Ayağın dorsal interosseöz kasları (mm. interossei dorsales pedis)', 'Parmakları 2. parmağın ekseninden uzaklaştırır (abduksiyon); metatarsofalangeal eklemlere fleksiyon yaptırır.'],
  'extensor digitorum brevis': ['Kısa parmak ekstansör kası (m. extensor digitorum brevis)', 'Ayak sırtındaki tek kastır; 2–4. parmaklara ekstansiyon yaptırır.'],
  'longus colli muscle': ['Uzun boyun kası (m. longus colli)', 'Boyna fleksiyon yaptırır; tek taraflı kasılınca boynu aynı tarafa eğer ve döndürür.'],
  'inguinal ligament': ['Kasık bağı (lig. inguinale)', 'Spina iliaca anterior superior ile tuberculum pubicum arasında uzanır; dış oblik karın kasının aponörozunun alt kenarıdır. Kasık kanalının tabanını oluşturur.'],
  'iliopectineal arch': ['Arcus iliopectineus', 'Kasık bağının altındaki aralığı ikiye ayırır: dışta lacuna musculorum (m. iliopsoas ve n. femoralis), içte lacuna vasorum (femoral arter ve ven).'],
  'plantar aponeurosis': ['Plantar aponöroz (aponeurosis plantaris)', 'Topuktan parmak köklerine uzanan kalın bağ dokusu tabakasıdır; ayağın boyuna kavsini destekler. İltihabı topuk ağrısının sık nedenidir (plantar fasiit).'],
  'palmar aponeurosis': ['Palmar aponöroz (aponeurosis palmaris)', 'Avuç içinde derinin altındaki üçgen biçimli bağ dokusu tabakasıdır; altındaki tendon ve damarları korur. Kalınlaşıp büzüşmesi Dupuytren kontraktürüdür.'],
};

// Z-Anatomy kas dosyası bölge bölge ana modelden kaymış (baş ~1 cm önde, leğen ~2 cm aşağıda, el ~2 cm aşağıda).
// Her iki modelde de bulunan 252 kas çiftinde, Z-Anatomy yüzeyini ana modeldeki aynı kasa en iyi oturtan kaydırma ölçüldü
// (ortalama yüzey uzaklığı 5–20 mm'den 1–3 mm'ye indi). Satır: kas merkezi x, y, z ve kaydırma x, y, z (mm).
// Eklenen her köşe, yakındaki çiftlerin kaydırmalarının uzaklığa göre ağırlıklı ortalaması kadar taşınır.
const KAYMA = [[60,1441,-10,-2,1,-10],[-60,1441,-10,1,1,-10],[13,1446,27,-2,1,-8],[-13,1446,27,1,1,-8],[14,1425,22,-1,-2,-8],[-14,1425,22,0,-2,-7],[14,1492,20,-2,3,-8],[-14,1492,20,0,3,-8],[10,1482,3,-1,-3,-2],[-10,1482,3,0,-3,-2],[12,1471,12,-2,0,-8],[-12,1471,12,1,0,-8],[6,1478,-4,-1,-2,-1],[-6,1478,-4,0,-2,-1],[8,1476,11,-1,-3,-2],[-8,1476,11,0,-3,-2],[-1,1484,6,0,1,-10],[18,1517,-2,-2,-1,-9],[-18,1517,-2,1,-1,-9],[11,1488,2,-2,0,-9],[-11,1488,2,1,0,-10],[12,1524,12,-2,-1,-10],[-12,1524,12,0,-1,-10],[22,1528,11,0,2,-13],[-22,1528,11,0,-4,-10],[15,1555,16,1,-3,-9],[-15,1555,16,-2,-3,-10],[40,1466,26,-1,-2,-9],[-40,1466,26,1,-2,-9],[34,1462,-1,0,-3,-11],[-34,1462,-1,-1,-2,-11],[36,1472,-12,-1,-2,-9],[-36,1472,-12,0,-2,-9],[46,1455,-24,-3,-2,-4],[-46,1455,-24,2,-2,-4],[36,1479,15,0,-4,-8],[-36,1479,15,-1,-4,-8],[5,1513,43,-2,-3,-4],[-5,1513,43,1,-3,-4],[8,1511,50,-2,3,-8],[-8,1511,50,0,3,-8],[25,1531,17,-2,0,-8],[-25,1531,17,1,0,-8],[33,1589,64,-1,-1,-12],[-33,1589,64,0,-1,-12],[25,1590,55,-1,-1,-11],[-25,1590,55,0,-1,-11],[37,1601,56,-1,-1,-11],[-37,1601,56,0,-1,-11],[29,1610,65,-1,-1,-11],[-29,1610,65,0,-1,-11],[18,1600,59,-1,-1,-11],[-18,1600,59,0,-1,-11],[24,1609,59,-1,-1,-10],[-24,1609,59,0,-1,-10],[27,1609,58,-1,-1,-11],[-27,1609,58,0,-1,-11],[10,1512,7,-1,-2,-10],[-10,1512,7,-1,-1,-10],[5,1524,52,-2,-2,-9],[-5,1524,52,1,-2,-9],[10,1518,47,-2,-1,-7],[-10,1518,47,1,-1,-7],[56,1077,-75,-5,7,-12],[-56,1077,-75,4,8,-11],[70,1289,-82,0,-3,1],[-70,1289,-82,0,-3,1],[34,1495,-32,-1,-2,-2],[-34,1495,-32,1,-2,-2],[33,1201,-74,-1,2,-1],[5,1244,-87,0,1,0],[20,1478,-60,0,-3,-3],[-20,1478,-60,0,-3,-3],[15,1308,-87,0,1,2],[-15,1308,-87,0,0,2],[50,1461,-49,-4,-3,-1],[-50,1461,-49,4,-3,-2],[29,1369,-100,-1,-2,5],[-29,1369,-100,1,-1,5],[27,1422,-89,-1,-2,5],[-27,1422,-89,1,-2,5],[46,1116,-77,-3,9,-2],[-46,1116,-77,3,9,-2],[45,1417,-74,-1,-5,3],[-45,1417,-74,1,-5,3],[38,1320,-105,-2,2,4],[-38,1320,-105,2,1,4],[35,1485,-56,0,-1,-4],[-35,1485,-56,-1,-1,-4],[51,1420,-87,-1,3,2],[-51,1420,-87,1,3,2],[108,275,-30,-2,-1,4],[-108,275,-30,3,0,4],[91,235,-9,4,-2,4],[-91,235,-9,-4,-2,4],[104,664,23,1,2,-2],[-104,664,23,-1,2,-2],[104,601,13,-1,3,1],[-104,601,13,1,3,1],[125,614,4,0,1,-2],[-125,614,4,0,1,-2],[70,590,16,2,7,4],[-70,590,16,-2,7,3],[49,855,-20,0,20,-13],[-49,855,-20,0,20,-13],[70,894,-45,8,17,-11],[-70,894,-45,-8,17,-11],[91,822,-34,4,17,-15],[-91,822,-34,-4,18,-15],[87,913,11,6,21,-17],[-87,913,11,-6,20,-17],[46,995,-5,6,15,-11],[-46,995,-5,-6,15,-11],[105,142,-49,-8,-6,6],[-105,142,-49,8,-6,6],[112,223,-40,-5,-7,6],[-112,223,-40,5,-7,6],[71,757,10,2,6,-12],[-71,757,10,-2,6,-12],[57,715,21,3,5,-9],[-57,715,21,-3,4,-9],[64,669,-16,0,0,-1],[78,771,0,3,10,-14],[-64,669,-16,0,0,-2],[-78,771,0,-3,9,-14],[67,839,-11,-1,21,-14],[-67,839,-11,2,21,-14],[57,824,32,7,10,-18],[-57,824,32,-7,10,-18],[91,39,28,11,-9,4],[-91,39,28,-11,-9,3],[103,25,63,14,-10,4],[-103,25,63,-14,-10,4],[72,36,38,13,-8,6],[-72,36,38,-13,-8,6],[65,35,49,14,-7,5],[-65,35,49,-14,-7,5],[86,409,-49,-3,10,11],[-86,409,-49,3,9,11],[77,162,-25,-3,-5,9],[-77,162,-25,3,-4,9],[106,375,-74,-11,0,10],[-106,375,-74,11,0,10],[60,380,-64,-9,0,12],[-60,380,-64,9,0,12],[77,319,-62,-11,4,15],[-77,319,-62,11,3,15],[86,289,-58,-7,2,11],[-86,289,-58,7,1,11],[45,586,-43,-5,5,5],[-45,586,-43,5,5,5],[107,538,-36,-4,0,3],[-107,538,-36,4,1,3],[78,861,-68,-1,15,-8],[-78,861,-68,1,15,-7],[117,922,-31,3,19,-14],[-117,922,-31,-3,19,-14],[119,909,-14,1,17,-18],[-119,909,-14,-1,17,-18],[132,896,29,13,13,-17],[-132,896,29,-13,13,-17],[205,1235,-14,-5,2,2],[-205,1235,-14,5,2,2],[185,1256,-11,-4,2,2],[-185,1256,-11,4,2,2],[215,1167,-26,-6,4,3],[-215,1167,-26,6,4,3],[165,1325,-19,-4,1,2],[-165,1325,-19,4,1,2],[252,890,20,-7,13,4],[-252,890,20,7,12,4],[271,917,12,-7,13,3],[-271,917,12,7,13,3],[254,903,13,-4,15,3],[-254,903,13,4,15,2],[230,1000,8,-4,7,3],[-230,1000,8,4,7,3],[211,987,-7,-5,10,3],[-211,987,-7,5,10,3],[244,901,26,-6,17,1],[-244,901,26,6,17,1],[215,1006,-26,-5,6,5],[-215,1006,-26,5,6,5],[236,815,41,-8,19,1],[-236,815,41,8,19,1],[289,850,41,-5,17,3],[-289,850,41,5,17,3],[283,834,33,-3,17,4],[-283,834,33,3,17,4],[286,840,36,-2,26,4],[-286,840,36,2,26,4],[287,840,45,-6,19,2],[-287,840,45,6,19,1],[286,817,32,-9,19,1],[-286,817,32,9,19,1],[211,1233,-59,-7,3,3],[-211,1233,-59,7,3,3],[180,1246,-60,-4,3,4],[-180,1246,-60,4,3,4],[196,1180,-47,-5,5,3],[-196,1180,-47,5,5,3],[260,942,-11,-5,10,4],[-260,942,-11,5,10,4],[266,855,13,-5,13,4],[-266,855,13,6,13,4],[274,891,6,-6,14,3],[-274,891,6,6,14,3],[270,892,9,-7,15,3],[-270,892,9,7,15,3],[248,1058,-28,-6,4,3],[-248,1058,-28,6,4,3],[226,1079,-53,-6,6,4],[-226,1079,-53,6,6,4],[258,1056,-13,-7,5,3],[-258,1056,-13,7,5,3],[261,999,-25,-8,8,4],[-261,999,-25,8,8,4],[264,1029,-24,-7,6,4],[-264,1029,-24,7,6,4],[244,948,-15,-8,10,4],[-244,948,-15,8,10,4],[260,889,-1,-7,13,5],[-260,889,-1,7,12,5],[204,1371,-30,-7,3,2],[-204,1371,-30,7,3,2],[160,1384,-4,-5,2,3],[-160,1384,-4,5,2,3],[117,1366,-51,-3,2,7],[-117,1366,-51,4,2,6],[148,1406,-45,-5,2,6],[-148,1406,-45,5,2,6],[151,1354,-64,-2,2,5],[-151,1354,-64,2,2,6],[146,1308,-57,-9,7,-1],[-146,1308,-57,9,7,-1],[22,871,-68,-1,18,-15],[-22,871,-68,1,18,-15],[29,851,-44,2,20,-11],[-29,851,-44,-2,20,-11],[17,842,-34,1,21,-12],[-17,842,-34,-1,21,-13],[-5,1184,11,-1,5,-2],[113,1253,71,-5,1,-2],[-113,1253,71,4,2,-3],[110,1342,37,-4,0,-4],[-110,1342,37,3,0,-4],[115,1310,-33,-4,-4,1],[-115,1310,-33,4,-4,1],[61,1404,27,3,-1,-12],[-61,1404,27,-3,-1,-12],[34,1285,87,1,4,0],[-34,1285,87,0,4,0]].map(r => r.map(v => v / 1000));
const SIGMA2 = 2 * 0.03 ** 2; // 3 cm genişliğinde Gauss ağırlığı
const KESIM = 9 * 0.03 ** 2; // 9 cm'den uzak noktalar hesaba katılmaz

// geometry: dünya koordinatına getirilmiş BufferGeometry; köşeler yerinde kaydırılır.
export function kasYerlestir(geometry) {
  const p = geometry.attributes.position, a = p.array;
  for (let v = 0; v < a.length; v += 3) {
    let w = 0, tx = 0, ty = 0, tz = 0, enD = Infinity, en = null;
    for (const k of KAYMA) {
      const d = (a[v] - k[0]) ** 2 + (a[v + 1] - k[1]) ** 2 + (a[v + 2] - k[2]) ** 2;
      if (d < enD) { enD = d; en = k; }
      if (d > KESIM) continue;
      const g = Math.exp(-d / SIGMA2); w += g; tx += g * k[3]; ty += g * k[4]; tz += g * k[5];
    }
    if (w < 1e-4) { tx = en[3]; ty = en[4]; tz = en[5]; w = 1; } // uzak köşe: en yakın çiftin kaydırması
    a[v] += tx / w; a[v + 1] += ty / w; a[v + 2] += tz / w;
  }
  p.needsUpdate = true;
}
