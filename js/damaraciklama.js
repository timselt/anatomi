// Önemli damarların Türkçe adı ve açıklaması (damarkas.js tablosundaki genel açıklamanın yerine geçer).
// İçerik incelemesinin "açıklaması olmayan önemli damarlar" ve "Willis halkası, beyincik arterleri" maddeleri için yazıldı (22.11.2026).
// Ders kitabı bilgisidir (Gray's Anatomy, Terminologia Anatomica); kaynakla tek tek karşılaştırılmadı.
// Satır: İngilizce ad (sol/sağ olmadan): [Türkçe ad, açıklama]

const WILLIS = 'Beynin tabanındaki Willis halkasının (circulus arteriosus cerebri) parçasıdır. Halka önde iki a. cerebri anterior ve aradaki a. communicans anterior, yanlarda a. carotis interna ve a. communicans posterior, arkada iki a. cerebri posterior ile kurulur; bir arter tıkanırsa kan halka üzerinden öbür taraftan gelebilir.';

export const DAMAR_ACIKLAMA = {
  // Willis halkası ve beyin arterleri
  'anterior communicating artery': ['Ön bağlantı arteri (a. communicans anterior)', 'İki a. cerebri anterior\'u birbirine bağlar. ' + WILLIS + ' Beyin anevrizmalarının en sık görüldüğü yerdir.'],
  'posterior communicating artery': ['Arka bağlantı arteri (a. communicans posterior)', 'A. carotis interna ile a. cerebri posterior\'u birleştirir; ön (karotis) ve arka (vertebrobaziler) dolaşımı bağlar. ' + WILLIS + ' Bu arterin anevrizması n. oculomotorius\'a basarak göz kapağı düşüklüğü ve pupil genişlemesi yapabilir.'],
  'precommunicating part of posterior cerebral artery': ['Posterior serebral arterin bağlantı öncesi bölümü (P1)', 'A. basilaris\'in ucundan a. communicans posterior\'un katıldığı yere kadar olan bölümdür. ' + WILLIS],
  'postcommunicating part of posterior cerebral artery': ['Posterior serebral arterin bağlantı sonrası bölümü (P2)', 'A. communicans posterior\'dan sonra beyin sapını dolanır; oksipital lobu, görme kabuğunu (sulcus calcarinus çevresi) ve talamusu besler. Tıkanmasında karşı yarı görme alanı kaybı (homonim hemianopsi) olur.'],
  'superior cerebellar artery': ['Süperior serebellar arter (a. superior cerebelli)', 'A. basilaris\'in ucuna yakın çıkar; beyinciğin üst yüzünü ve beyin sapının üst bölümünü besler. N. oculomotorius bu arter ile a. cerebri posterior arasından geçer.'],
  'anterior inferior cerebellar artery': ['Anterior inferior serebellar arter (a. inferior anterior cerebelli)', 'A. basilaris\'in alt bölümünden çıkar; beyinciğin ön-alt yüzünü ve ponsun yan bölümünü besler, iç kulak arterini (a. labyrinthi) çoğunlukla bu arter verir. Tıkanmasında baş dönmesi, işitme kaybı ve yüz felci görülebilir.'],
  'posterior inferior cerebellar artery': ['Posterior inferior serebellar arter (a. inferior posterior cerebelli)', 'A. vertebralis\'in en büyük dalıdır; beyinciğin alt-arka yüzünü ve medulla oblongata\'nın yan bölümünü besler. Tıkanması lateral medüller (Wallenberg) sendromuna yol açar: aynı tarafta yüzde, karşı tarafta gövdede ağrı-ısı duyusu kaybı, yutma güçlüğü ve Horner bulguları.'],
  'anterior spinal artery': ['Anterior spinal arter (a. spinalis anterior)', 'İki a. vertebralis\'ten birer dalın birleşmesiyle oluşur; omuriliğin ön üçte ikisini besler. Tıkanmasında hareket ve ağrı-ısı duyusu kaybolur, arka kordon duyuları korunur.'],
  'ophthalmic artery': ['Oftalmik arter (a. ophthalmica)', 'A. carotis interna\'nın kafatası içindeki ilk dalıdır; canalis opticus\'tan n. opticus ile göz çukuruna girer. Göz yuvarlağını, retinayı (a. centralis retinae ile) ve göz çevresini besler.'],
  'anterior choroidal artery': ['Anterior koroid arter (a. choroidea anterior)', 'A. carotis interna\'dan çıkar; iç kapsülün arka bacağını, optik yolu ve yan ventrikülün koroid pleksusunu besler.'],
  // Boyun ve üst ekstremite
  'thyrocervical trunk': ['Tiroservikal gövde (truncus thyrocervicalis)', 'A. subclavia\'nın ilk bölümünden çıkan kısa gövdedir; a. thyroidea inferior, a. suprascapularis ve a. transversa cervicis dallarını verir.'],
  'inferior thyroid artery': ['İnferior tiroid arter (a. thyroidea inferior)', 'Tiroservikal gövdenin dalıdır; tiroit bezinin arka-alt bölümünü ve paratiroit bezlerini besler. N. laryngeus recurrens bu arterle yakın komşudur; tiroit ameliyatında sinir zedelenebilir.'],
  'suprascapular artery': ['Supraskapular arter (a. suprascapularis)', 'Tiroservikal gövdeden çıkar; lig. transversum scapulae\'nın üstünden geçerek supraspinatus ve infraspinatus kaslarını besler.'],
  'costocervical trunk': ['Kostoservikal gövde (truncus costocervicalis)', 'A. subclavia\'nın arkasından çıkar; a. cervicalis profunda ve a. intercostalis suprema (ilk iki interkostal aralık) dallarını verir.'],
  'internal thoracic artery': ['İnternal torasik arter (a. thoracica interna)', 'A. subclavia\'dan çıkar, sternumun 1 cm kadar yanında göğüs ön duvarının iç yüzünde iner; ön interkostal dalları verir ve a. musculophrenica ile a. epigastrica superior\'a ayrılır. Koroner baypas ameliyatında sık kullanılan arterdir.'],
  'posterior circumflex humeral artery': ['Posterior sirkumfleks humeral arter (a. circumflexa humeri posterior)', 'A. axillaris\'ten çıkar; n. axillaris ile birlikte dört kenarlı boşluktan (spatium quadrangulare) geçer ve humerusun cerrahi boynunu dolanır. Cerrahi boyun kırığında sinirle birlikte zedelenebilir.'],
  'anterior circumflex humeral artery': ['Anterior sirkumfleks humeral arter (a. circumflexa humeri anterior)', 'A. axillaris\'ten çıkar ve humerusun cerrahi boynunun önünü dolanır; arka sirkumfleks arterle birleşir.'],
  'subscapular artery': ['Subskapular arter (a. subscapularis)', 'A. axillaris\'in en büyük dalıdır; a. circumflexa scapulae ve a. thoracodorsalis dallarına ayrılır.'],
  'deep brachial artery': ['Derin brakiyal arter (a. profunda brachii)', 'A. brachialis\'in ilk büyük dalıdır; n. radialis ile birlikte humerusun arkasındaki sulcus nervi radialis\'te seyreder ve triseps kasını besler.'],
  'common interosseous artery': ['Ortak interosseöz arter (a. interossea communis)', 'A. ulnaris\'in kısa dalıdır; a. interossea anterior ve posterior\'a ayrılır, ön kolun derin kaslarını besler.'],
  'superficial palmar arterial arch': ['Yüzeyel palmar arter arkı (arcus palmaris superficialis)', 'Çoğunlukla a. ulnaris\'in devamıdır; avuç içinde derin arkın önünde uzanır ve ortak palmar parmak arterlerini verir.'],
  'deep palmar arch': ['Derin palmar ark (arcus palmaris profundus)', 'Çoğunlukla a. radialis\'in devamıdır; metakarp kemiklerinin tabanında uzanır ve palmar metakarp arterlerini verir.'],
  // Gövde
  'inferior epigastric artery': ['İnferior epigastrik arter (a. epigastrica inferior)', 'A. iliaca externa\'dan kasık bağının hemen üstünde çıkar ve rektus kasının arkasında yukarı çıkar. Kasık fıtıklarının ayrımında yol göstericidir: dolaylı (indirekt) fıtık bu arterin dışından, dolaysız (direkt) fıtık içinden çıkar.'],
  'superior epigastric artery': ['Süperior epigastrik arter (a. epigastrica superior)', 'A. thoracica interna\'nın uç dalıdır; rektus kılıfı içinde inerek a. epigastrica inferior ile birleşir. Aort darlığında yan dolaşım yolu olur.'],
  'posterior intercostal arteries': ['Posterior interkostal arterler (aa. intercostales posteriores)', 'Üçüncüden on birinciye kadar olanlar göğüs aortasından çıkar; kaburga aralıklarında kaburganın alt kenarındaki olukta ven-arter-sinir sırasıyla seyreder. Göğüs tüpü bu yüzden alttaki kaburganın üst kenarından takılır.'],
  'inferior phrenic artery': ['İnferior frenik arter (a. phrenica inferior)', 'Karın aortasının ilk dalıdır; diyaframın alt yüzünü besler ve böbreküstü bezine a. suprarenalis superior dallarını verir.'],
  'testicular artery': ['Testiküler arter (a. testicularis)', 'Karın aortasından böbrek arterlerinin altında çıkar; kasık kanalından funiculus spermaticus içinde testise iner.'],
  'superior rectal artery': ['Süperior rektal arter (a. rectalis superior)', 'A. mesenterica inferior\'un uç dalıdır; rektumun üst bölümünü besler.'],
  'ileocolic artery': ['İleokolik arter (a. ileocolica)', 'A. mesenterica superior\'un son dalıdır; ileumun son bölümünü, çekumu, apendiksi (a. appendicularis ile) ve çıkan kolonun başını besler.'],
  'appendicular artery': ['Apendiküler arter (a. appendicularis)', 'A. ileocolica\'dan çıkar ve apendiksin askısında (mesoappendix) seyreder; apendektomide bağlanan arterdir.'],
  // Alt ekstremite
  'lateral circumflex femoral artery': ['Lateral sirkumfleks femoral arter (a. circumflexa femoris lateralis)', 'A. profunda femoris\'ten çıkar; çıkan, enine ve inen dallarıyla uyluğun ön-yan kaslarını besler.'],
  // Venler
  'hemiazygos vein': ['Hemiazigos ven (v. hemiazygos)', 'Sol alt interkostal venlerin kanını toplar; omurganın sol yanında yukarı çıkar ve T8-T9 düzeyinde omurganın önünden geçerek v. azygos\'a açılır.'],
  'accessory hemiazygos vein': ['Aksesuar hemiazigos ven (v. hemiazygos accessoria)', 'Sol üst interkostal venlerin kanını toplar; v. azygos\'a ya da v. hemiazygos\'a açılır.'],
  'set of perforating veins': ['Perforan venler (vv. perforantes)', 'Bacakta yüzeyel venleri derin venlere bağlar; kapakçıkları kanın yalnız yüzeyelden derine akmasını sağlar. Kapakçık yetmezliğinde varis gelişir.'],
};
