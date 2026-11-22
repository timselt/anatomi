// Canlandırmalar: fizyoloji akışları (adım adım yol), iki hareketli gösterim (kalp atımı, solunum) ve kas hareketleri.
// Yapılar anahtarla ya da düzenli ifadeyle (/.../) verilir; modelde olmayan yapı kendiliğinden atlanır.
// Kas hareketlerinde kemikler eklem çevresinde döndürülür; kaslar şekil değiştirmez, çalışan kaslar renkle gösterilir.

// ---- Adım adım akışlar ----
export const AKISLAR = [
  { id: 'dolasim', ad: 'Kanın yolu: küçük ve büyük dolaşım', sistemler: ['kalp', 'atardamar', 'toplardamar', 'solunum'], adimlar: [
    { y: ['ust-ana-toplardamar', 'alt-ana-toplardamar'], yol: ['ust-ana-toplardamar'], m: 'Vücuttan dönen oksijeni azalmış kan, vena cava superior ve vena cava inferior ile kalbe gelir.' },
    { y: ['sag-kulakcik', 'sag-kulakcik-boslugu'], yol: ['sag-kulakcik-boslugu'], m: 'Kan sağ atriyuma (atrium dextrum) dolar.' },
    { y: ['trikuspit'], m: 'Kan triküspit kapaktan (valva tricuspidalis) geçerek sağ ventriküle akar. Dolumun çoğu kendiliğinden olur; sağ atriyumun kasılması kalan kanı ventriküle iter.' },
    { y: ['sag-karincik'], m: 'Kan sağ ventriküle (ventriculus dexter) dolar. Ventrikül kasılınca triküspit kapak kapanır.' },
    { y: ['pulmoner-kapak', 'pulmoner-govde'], m: 'Kan pulmoner kapaktan geçerek pulmoner gövdeye (truncus pulmonalis) atılır.' },
    { y: ['pulmoner-arter'], m: 'Sağ ve sol pulmoner arterler oksijeni az kanı akciğerlere taşır. Doğumdan sonra oksijeni az kan taşıyan tek arterler bunlardır.' },
    { y: [/^z:.*lobe of .*lung/], m: 'Akciğerlerde, hava keseciklerini saran kılcal damarlarda kan karbondioksiti verir ve oksijen alır.' },
    { y: ['pulmoner-ven'], m: 'Oksijenlenmiş kan dört pulmoner venle (venae pulmonales) kalbe döner. Buraya kadar olan yol küçük dolaşımdır.' },
    { y: ['sol-kulakcik', 'sol-kulakcik-boslugu'], yol: ['sol-kulakcik-boslugu'], m: 'Kan sol atriyuma (atrium sinistrum) dolar.' },
    { y: ['mitral'], m: 'Kan mitral kapaktan (valva mitralis) geçerek sol ventriküle akar. Dolumun çoğu kendiliğinden olur; sol atriyumun kasılması kalan kanı ventriküle iter.' },
    { y: ['sol-karincik', 'karincik-duvari'], yol: ['sol-karincik'], m: 'Kan sol ventriküle (ventriculus sinister) dolar. Sol ventrikülün duvarı kalbin en kalın yeridir, çünkü kanı bütün vücuda pompalar.' },
    { y: ['aort-kapagi', 'cikan-aorta'], m: 'Sol ventrikül kasılır; kan aort kapağından çıkan aortaya (aorta ascendens) atılır. Kalbi besleyen koroner arterler buradan çıkar.' },
    { y: ['aort-yayi', 'gogus-aortasi', 'karin-aortasi'], m: 'Aort yayı baş ve kollara dallar verir; göğüs ve karın aortası gövde ve bacakları besler. Kan dokulara oksijen bırakır ve venlerle kalbe döner: büyük dolaşım tamamlanır.' },
  ] },
  { id: 'sindirim', ad: 'Lokmanın yolu: sindirim', sistemler: ['sindirim', 'solunum'], adimlar: [
    { y: ['dil', 'kesici', 'buyuk-azi'], yol: ['dil'], m: 'Ağızda dişler besini parçalar, dil karıştırır. Tükürükteki amilaz enzimi nişastanın sindirimini başlatır.' },
    { y: ['z:oropharynx', 'z:laryngopharynx', 'girtlak-kapagi'], yol: ['z:oropharynx', 'z:laryngopharynx'], m: 'Yutma sırasında lokma yutağa (pharynx) geçer. Gırtlak kapağı (epiglottis) soluk yolunun girişini örterek lokmanın soluk borusuna kaçmasını önler.' },
    { y: ['yemek-borusu'], m: 'Yemek borusu (oesophagus) dalga biçimindeki kasılmalarla (peristaltizm) lokmayı mideye iletir.' },
    { y: ['mide'], m: 'Mide (gaster) besini depolar, asit ve pepsin ile karıştırır. Proteinlerin sindirimi burada başlar.' },
    { y: ['onikiparmak', 'safra-kesesi', 'pankreas', /^dk:hepatovenous segment/], yol: ['onikiparmak'], m: 'Onikiparmak bağırsağına (duodenum) karaciğerin ürettiği safra ve pankreasın enzimleri dökülür. Safra yağları küçük damlacıklara ayırır; pankreas enzimleri karbonhidrat, protein ve yağları sindirir.' },
    { y: ['jejunum'], m: 'Boş bağırsakta (jejunum) sindirilmiş besinlerin büyük bölümü emilerek kana ve lenfe geçer.' },
    { y: ['ileum', 'ileocekal'], yol: ['ileum'], m: 'Kıvrımlı bağırsakta (ileum) B12 vitamini ve safra tuzları emilir. İçerik, ince ve kalın bağırsağın birleşim yerinden kalın bağırsağa geçer.' },
    { y: ['apandis', 'cikan-kolon', 'enine-kolon', 'inen-kolon', 'z:sigmoid colon'], yol: ['cikan-kolon', 'enine-kolon', 'inen-kolon', 'z:sigmoid colon'], m: 'Kalın bağırsakta (colon) su ve tuzlar emilir; içerik katılaşarak dışkıya dönüşür.' },
    { y: ['rektum'], m: 'Dışkı düz bağırsakta (rectum) birikir ve anüsten dışarı atılır.' },
  ] },
  { id: 'hava', ad: 'Havanın yolu: solunum yolları', sistemler: ['solunum', 'iskelet'], adimlar: [
    { y: ['z:mucosa of nasal cavity', 'bolme-kikirdak', 'alt-konka'], yol: ['z:mucosa of nasal cavity'], m: 'Hava burun boşluğuna (cavitas nasi) girer; burada ısınır, nemlenir ve tozdan temizlenir.' },
    { y: ['z:nasopharynx', 'z:oropharynx', 'z:laryngopharynx'], m: 'Hava yutaktan (pharynx) geçer. Yutak hem havanın hem besinin ortak yoludur.' },
    { y: ['girtlak-kapagi', 'kalkan-kikirdak', 'yuzuk-kikirdak', 'ibrik'], yol: ['kalkan-kikirdak'], m: 'Hava gırtlağa (larynx) girer. Ses telleri buradadır; nefes verirken titreşerek ses oluşturur.' },
    { y: ['soluk-borusu'], m: 'Soluk borusu (trachea) C biçimli kıkırdak halkalarla açık tutulur ve göğüste ikiye ayrılır.' },
    { y: ['ana-bronş'], m: 'Sağ ve sol ana bronş (bronchus principalis) havayı akciğerlere taşır. Sağ ana bronş daha geniş, kısa ve diktir.' },
    { y: ['segment-bronsu', 'lingula-bronsu', /^z:.*bronchus/], m: 'Bronşlar lob ve segment bronşlarına, sonra giderek incelen bronşçuklara ayrılır.' },
    { y: [/^z:.*lobe of .*lung/], m: 'Hava, akciğerlerdeki hava keseciklerine (alveoller) ulaşır. Oksijen kana geçer, karbondioksit havaya verilir.' },
  ] },
  { id: 'idrar', ad: 'İdrarın yolu: boşaltım', sistemler: ['bosaltim', 'atardamar', 'toplardamar'], adimlar: [
    { y: ['karin-aortasi', 'bobrek-arter'], yol: ['bobrek-arter'], m: 'Süzülecek kan, karın aortasından çıkan renal arterle (arteria renalis) böbreğe gelir.' },
    { y: ['bobrek'], m: 'Böbrekte (ren) kan süzülür. Gerekli maddeler ve suyun çoğu geri emilir; kalan sıvı idrardır.' },
    { y: ['bobrek-ven', 'alt-ana-toplardamar'], yol: ['bobrek'], m: 'Temizlenen kan renal venle (vena renalis) vena cava inferior\'a döner.' },
    { y: ['z:renal pelvis'], m: 'İdrar böbreğin içindeki kadehçiklerde toplanır ve böbrek leğenciğine (pelvis renalis) akar.' },
    { y: ['ureter'], m: 'Üreter, kasılma dalgalarıyla idrarı idrar kesesine taşır.' },
    { y: ['idrar-kesesi'], m: 'İdrar kesesi (vesica urinaria) idrarı biriktirir; dolunca işeme isteği oluşur.' },
    { y: ['uretra'], m: 'İdrar üretradan (urethra) vücut dışına atılır.' },
  ] },
  { id: 'gorme', ad: 'Görme yolu', sistemler: ['duyu', 'sinir'], adimlar: [
    { y: ['kornea', 'mercek'], yol: ['mercek'], m: 'Işık saydam tabakada (cornea) ve göz merceğinde (lens) kırılarak ağ tabakaya odaklanır. Kırılmanın yaklaşık üçte ikisi saydam tabakada olur; mercek ince ayarı yapar.' },
    { y: ['ag-tabaka'], m: 'Görüntü ağ tabakaya (retina) düşer. Çubuk ve koni hücreleri ışığı sinir sinyaline çevirir.' },
    { y: ['gorme-siniri', 'z:optic nerve (ii)'], m: 'Sinyal görme siniriyle (nervus opticus) gözden çıkar.' },
    { y: ['gorme-caprazi'], m: 'Görme sinirleri çaprazında (chiasma opticum) her retinanın burun tarafından gelen lifler karşı tarafa geçer.' },
    { y: ['gorme-yolu'], m: 'Görme yolu (tractus opticus), görme alanının karşı yarısına ait bilgiyi taşır.' },
    { y: ['yan-dizcik'], m: 'Lifler talamustaki yan dizcik cisminde (corpus geniculatum laterale) yeni sinir hücrelerine aktarılır.' },
    { y: ['oksipital-lob'], m: 'Bilgi, art kafa lobundaki (lobus occipitalis) birincil görme kabuğuna ulaşır ve görüntü algılanır.' },
  ] },
];

// ---- Hareketli gösterimler ----
export const KALP = {
  id: 'kalp-atimi', ad: 'Kalp atımı (kalp döngüsü)', sistemler: ['kalp'],
  kulakcik: ['sag-kulakcik', 'sol-kulakcik', 'sag-kulakcik-boslugu', 'sol-kulakcik-boslugu'],
  karincik: ['karincik-duvari', 'sag-karincik', 'sol-karincik', 'papiller'],
  evreler: [
    { ad: 'Atriyum kasılması', m: 'Atriyumlar (atria) kasılır ve kalan kanı ventriküllere iter. Triküspit ve mitral kapaklar açıktır; aort ve pulmoner arter kapakları kapalıdır.' },
    { ad: 'Ventrikül kasılması (sistol)', m: 'Ventriküller (ventriculi) kasılır. Basınç artınca triküspit ve mitral kapaklar kapanır: birinci kalp sesi duyulur. Aort ve pulmoner arter kapakları açılır, kan arterlere atılır.' },
    { ad: 'Gevşeme (diyastol)', m: 'Ventriküller gevşer. Aort ve pulmoner arter kapakları kapanır: ikinci kalp sesi duyulur. Triküspit ve mitral kapaklar açılır, ventriküller yeniden kanla dolar.' },
  ],
};
export const SOLUNUM = {
  id: 'solunum', ad: 'Solunum hareketi', sistemler: ['iskelet', 'solunum', 'kas'],
  evreler: [
    { ad: 'Nefes alma (inspirasyon)', m: 'Diyafram kasılır: kenar tutunmaları (kaburgalar, sternum, crus dextrum ve crus sinistrum) yerinde kalır, sağ ve sol kubbe aşağı iner ve düzleşir; dış kaburgalar arası kaslar kaburgaları yukarı ve dışa kaldırır. Göğüs boşluğu büyür, içindeki basınç düşer ve hava akciğerlere dolar.' },
    { ad: 'Nefes verme (ekspirasyon)', m: 'Diyafram gevşer, kubbeleri karın organlarının itmesiyle yeniden yukarı çıkar; kaburgalar aşağı iner. Göğüs boşluğu küçülür ve hava dışarı çıkar. Dinlenme halinde nefes verme edilgendir (kas gücü gerektirmez).' },
  ],
};

// ---- Kas hareketleri ----
// eklem: dönme merkezinin alındığı kemik ve ucu; eksen: 'x' (öne-arkaya bükme) ya da 'z' (yana açma); aci: derece (işaret yönü belirler).
// oynayan: eklemin uzağında kalıp birlikte dönen kemik grubu.
export const HAREKETLER = [
  { id: 'omuz-abduksiyon', ad: 'Omuz: kolu yana açma (abdüksiyon)', eklem: ['humerus', 'ust'], eksen: 'z', aci: -90, oynayan: 'kol', yapan: ['diken-ustu', 'deltoid'], karsit: ['buyuk-gogus', 'buyuk-yuvarlak'], not: 'İlk yaklaşık 15 dereceyi m. supraspinatus başlatır, sonra m. deltoideus devralır. Kolun 90 derecenin üstüne kalkması için kürek kemiğinin de dönmesi gerekir (m. trapezius ve m. serratus anterior). Kolu gövdeye yaklaştıran (karşıt) asıl kaslardan biri de m. latissimus dorsi olup bu modelde bulunmadığı için gösterilemiyor.' },
  { id: 'omuz-fleksiyon', ad: 'Omuz: kolu öne kaldırma (fleksiyon)', eklem: ['humerus', 'ust'], eksen: 'x', aci: -90, oynayan: 'kol', yapan: ['deltoid', 'buyuk-gogus', 'dk:coracobrachialis', 'pazu-kasi'], karsit: ['buyuk-yuvarlak', 'arka-kol-kasi'], not: 'M. deltoideus\'un ön (köprücük) bölümü ve m. pectoralis major\'un köprücük bölümü asıl bükücülerdir. M. deltoideus\'un arka bölümü ise tersini yapar: kolu arkaya çeker. M. latissimus dorsi de karşıt kastır, ancak bu modelde bulunmuyor.' },
  { id: 'dirsek-fleksiyon', ad: 'Dirsek: bükme (fleksiyon)', eklem: ['humerus', 'alt'], eksen: 'x', aci: -130, oynayan: 'onkol', yapan: ['kol-kasi', 'pazu-kasi', 'kol-doner-kasi'], karsit: ['arka-kol-kasi', 'dk:anconeus'], not: 'M. brachialis dirseğin asıl bükücüsüdür. M. biceps brachii aynı zamanda avucu yukarı çevirir (supinasyon).' },
  { id: 'dirsek-ekstansiyon', ad: 'Dirsek: açma (ekstansiyon)', eklem: ['humerus', 'alt'], eksen: 'x', aci: -130, ters: true, oynayan: 'onkol', yapan: ['arka-kol-kasi', 'dk:anconeus'], karsit: ['kol-kasi', 'pazu-kasi', 'kol-doner-kasi'], not: 'M. triceps brachii dirseği açan asıl kastır; siniri n. radialis\'tir.' },
  { id: 'bilek-fleksiyon', ad: 'El bileği: bükme (fleksiyon)', eklem: ['radius', 'alt'], eksen: 'x', aci: -60, oynayan: 'el', yapan: ['dk:flexor carpi radialis', 'dk:humeral head of flexor carpi ulnaris', 'uzun-avuc', 'dk:ulnar head of flexor carpi ulnaris'], karsit: ['dk:extensor carpi radialis longus', 'dk:extensor carpi ulnaris', 'dk:extensor carpi radialis brevis'], not: 'Bileği büken kaslar çoğunlukla humerusun iç epikondilinden başlar; siniri n. medianus\'tur (m. flexor carpi ulnaris: n. ulnaris).' },
  { id: 'bilek-ekstansiyon', ad: 'El bileği: geriye bükme (ekstansiyon)', eklem: ['radius', 'alt'], eksen: 'x', aci: 50, oynayan: 'el', yapan: ['dk:extensor carpi radialis longus', 'dk:extensor carpi radialis brevis', 'dk:extensor carpi ulnaris'], karsit: ['dk:flexor carpi radialis', 'uzun-avuc', 'dk:humeral head of flexor carpi ulnaris', 'dk:ulnar head of flexor carpi ulnaris'], not: 'Bileği açan kasların siniri n. radialis\'tir; felcinde "düşük el" oluşur.' },
  { id: 'kalca-fleksiyon', ad: 'Kalça: bacağı öne kaldırma (fleksiyon)', eklem: ['femur', 'ust'], eksen: 'x', aci: -80, oynayan: 'bacak', yapan: ['buyuk-bel', 'iliak', 'uyluk-duz', 'terzi'], karsit: ['buyuk-kalca', 'uyluk-iki-basli', 'yari-kirisli', 'yari-zarli'], not: 'M. iliopsoas (m. psoas major ve m. iliacus) kalçanın en güçlü bükücüsüdür.' },
  { id: 'kalca-abduksiyon', ad: 'Kalça: bacağı yana açma (abdüksiyon)', eklem: ['femur', 'ust'], eksen: 'z', aci: -40, oynayan: 'bacak', yapan: ['orta-kalca', 'kucuk-kalca', 'fasya-geren'], karsit: ['uzun-yaklastirici', 'kisa-yaklastirici', 'buyuk-yaklastirici', 'ince-kas'], not: 'M. gluteus medius ve minimus yürürken leğeni dengede tutar; siniri n. gluteus superior\'dur.' },
  { id: 'diz-fleksiyon', ad: 'Diz: bükme (fleksiyon)', eklem: ['femur', 'alt'], eksen: 'x', aci: 110, oynayan: 'baldir', yapan: ['uyluk-iki-basli', 'yari-kirisli', 'yari-zarli', 'baldir'], karsit: ['uyluk-duz', 'dis-genis', 'ic-genis', 'ara-genis'], not: 'Uyluk arkası kasları (hamstring) dizi büker; siniri n. ischiadicus\'tur.' },
  { id: 'diz-ekstansiyon', ad: 'Diz: açma (ekstansiyon)', eklem: ['femur', 'alt'], eksen: 'x', aci: 110, ters: true, oynayan: 'baldir', yapan: ['uyluk-duz', 'dis-genis', 'ic-genis', 'ara-genis'], karsit: ['uyluk-iki-basli', 'yari-kirisli', 'yari-zarli'], not: 'M. quadriceps femoris (dört başlı uyluk kası) dizi açar; siniri n. femoralis\'tir. Diz kapağı refleksi bu kası ve L2-L4 köklerini sınar.' },
  { id: 'ayak-dorsifleksiyon', ad: 'Ayak bileği: ayak ucunu yukarı kaldırma (dorsifleksiyon)', eklem: ['tibia', 'alt'], eksen: 'x', aci: -20, oynayan: 'ayak', yapan: ['on-kaval-kasi', 'dk:extensor digitorum longus', 'dk:extensor hallucis longus'], karsit: ['baldir', 'soleus'], not: 'Bacağın ön bölüm kaslarının siniri n. fibularis profundus\'tur; felcinde "düşük ayak" oluşur.' },
  { id: 'ayak-plantar', ad: 'Ayak bileği: parmak ucunda yükselme (plantar fleksiyon)', eklem: ['tibia', 'alt'], eksen: 'x', aci: 40, oynayan: 'ayak', yapan: ['baldir', 'soleus', 'arka-kaval-kasi'], karsit: ['on-kaval-kasi', 'dk:extensor digitorum longus', 'dk:extensor hallucis longus'], not: 'M. gastrocnemius ve m. soleus Aşil kirişiyle topuk kemiğine yapışır; siniri n. tibialis\'tir.' },
];

// Sağ taraftaki kemik grupları (modeldeki İngilizce adlara göre).
const EL = /right (scaphoid|lunate|triquetral|pisiform|trapezium|trapezoid|capitate|hamate)|right \w+ metacarpal|phalanx of right (thumb|\w+ finger)/;
const AYAK = /right (talus|calcaneus|cuboid)|right \w+ cuneiform|navicular bone of right foot|right \w+ metatarsal|phalanx of right \w+ toe|sesamoid bone of right foot/;
export const KEMIK_GRUBU = {
  el: EL,
  onkol: new RegExp(`right (radius|ulna)$|${EL.source}`),
  kol: new RegExp(`right (humerus|radius|ulna)$|${EL.source}`),
  ayak: AYAK,
  baldir: new RegExp(`right (tibia|fibula)$|${AYAK.source}`),
  bacak: new RegExp(`right (femur|patella|tibia|fibula)$|${AYAK.source}`),
};
