// Arayüz: sekmeler, arama, katmanlar, kesit, yapı ayrıntısı, sınav, tekrar kartları, plan, ilerleme, notlar.
import { Goruntuleyici } from './gorunum.js';
import { coz, TERIM } from './terimler.js';
import './foramenler.js'; // kafatası deliklerini kemik açıklamalarına ekler
import { SISTEMLER, sistemBul, VARSAYILAN_ACIK } from './sistemler.js';
import { DOGRULAMA } from './dogrulama.js';
import * as C from './calisma.js';
import { ekModelleriYukle } from './ekmodel.js';
import { EKLEM_TERIM } from './eklemterim.js';
import { EK_DOGRULAMA } from './ekdogrulama.js';
import { sinirTerim } from './sinirbilgi.js';
import { KAS_BILGI } from './kasbilgi.js';
import { KAS_TERIM } from './kaskatman.js';
import { VAKALAR } from './vakalar.js';
import { AKISLAR, KALP, SOLUNUM, HAREKETLER, KEMIK_GRUBU } from './canli.js';
import { kalpModel, solunumModel, egriCiz, Ses } from './gosterge.js';
import * as T from 'three';
import { MIKRO } from './mikro.js';
import { arterUstAdi, arterBul } from './arterdal.js';
import { DAMAR_KAS } from './damarkas.js';
import { anaModelDuzelt } from './organduzelt.js';
import { ORGAN_TERIM } from './organterim.js';

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s).toLocaleLowerCase('tr').replace(/[çğıöşüâî]/g, c => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i' }[c]));
const SISTEM = Object.fromEntries(SISTEMLER.map(s => [s.id, s]));

// ---------- Veri ----------
// Paylaşılan bağlantı: ?model=kadin&yapi=<anahtar>
const BAGLANTI = new URLSearchParams(location.search);
if (['erkek', 'kadin'].includes(BAGLANTI.get('model')) && BAGLANTI.get('model') !== C.cinsiyet()) C.cinsiyetAyarla(BAGLANTI.get('model'));
const KADIN_MI = C.cinsiyet() === 'kadin';
const atlas = await (await fetch(KADIN_MI ? 'data/models/kadin/atlas-female.json' : 'data/models/atlas.json')).json();
const parcalar = atlas.parts.map((p, i) => {
  const c = coz(p.name);
  return { i, en: p.name, sistem: sistemBul(p), anahtar: c?.anahtar ?? null, tr: c?.tr ?? null, la: c?.la ?? null, ek: c?.ek ?? '', bounds: p.bounds };
});
const yapilar = {};
for (const p of parcalar) {
  if (!p.anahtar) continue;
  const y = (yapilar[p.anahtar] ??= { anahtar: p.anahtar, ...TERIM[p.anahtar], sistem: p.sistem, parcalar: [], enler: [] });
  y.parcalar.push(p.i); y.enler.push(p.en.toLowerCase().replace(/\b(left|right)\b ?/g, '').trim());
}
// Seçili dile göre yapının adı (tıp fakültesinde Latince esas).
const ad = a => (C.dil() === 'la' ? TERIM[a].la : TERIM[a].tr);
const ikinciAd = a => (TERIM[a].tr === TERIM[a].la ? 'Türkçe adı henüz eklenmedi' : C.dil() === 'la' ? TERIM[a].tr : TERIM[a].la);
const KONU = Object.fromEntries([...C.KONULAR, ...C.FILTRE_KONULAR].map(k => [k.id, k]));
const filtreUyar = (f, e) => f.re.test(e) && !(f.haric && f.haric.test(e));
const konuAnahtarlari = konu => (konu.filtre
  ? Object.values(yapilar).filter(y => konu.filtre.sistem.includes(y.sistem) && y.enler.some(e => filtreUyar(konu.filtre, e))).map(y => y.anahtar)
  : konu.anahtarlar.filter(a => yapilar[a]));
// Öğrencinin seçtiği sınıf ve komitenin konuları, komite sırasıyla.
const seciliSinif = () => C.SINIFLAR.find(x => x.id === C.sinif()) ?? C.SINIFLAR[0];
const seciliKomiteler = () => (C.komite() === 'hepsi' ? seciliSinif().komiteler : seciliSinif().komiteler.filter(k => k.id === C.komite()));
const konular = () => seciliKomiteler().flatMap(km => km.konular.map(id => ({ ...KONU[id], komite: km.ad, liste: konuAnahtarlari(KONU[id]) }))).filter(k => k.liste.length);
const tumAnahtarlar = () => [...new Set(konular().flatMap(k => k.liste))];

// ---------- Görüntüleyici ----------
const g = new Goruntuleyici($('#sahne'), atlas, parcalar.map(p => p.sistem), Object.fromEntries(SISTEMLER.map(s => [s.id, s.renk])));
g.acikSistemler = new Set(KADIN_MI ? [...VARSAYILAN_ACIK, 'ureme', 'sinir', 'deri'] : VARSAYILAN_ACIK);
g.yukle(o => { $('#yukCubuk').style.width = `${Math.round(o * 100)}%`; })
  .then(() => { $('#yukleniyor').hidden = true; if (!KADIN_MI) anaModelDuzelt(g, parcalar); baglantiAc(); if (!KADIN_MI) ekKatman(); else g.yavasDenetim = true; })
  .catch(e => { $('#yukleniyor').innerHTML = `<p>Model yüklenemedi: ${esc(e.message)}</p><p class="kucuk">Simülatörü "Simulatoru-Ac.command" dosyasıyla açtığından emin ol.</p>`; });

// Erkek modelde eksik yapılar (sinirler, lenf, akciğer lobları, karaciğer...) ikinci açık modelden eklenir.
async function ekKatman() {
  const not = $('#ekDurum');
  try {
    if (not) not.textContent = 'Ek katman yükleniyor: sinirler, lenf düğümleri, akciğer ve karaciğer…';
    const ekler = await ekModelleriYukle(parcalar, null, i => g.meshler[i]);
    for (const e of ekler) {
      // Ana modelde aynı adla zaten bulunan yapı (ör. 23 parçalı boş bağırsağın yerini tek parçayla kaplayan "Jejunum") eklenmez;
      // iki yüzey üst üste binince seçim boyaması şerit şerit görünüyor ve dokunuş yanlış parçayı seçiyordu.
      if (yapilar[e.enKucuk]?.parcalar.some(j => parcalar[j].kaynak !== 'Z-Anatomy')) { e.geometry.dispose(); continue; }
      if (/^(greater|lesser) omentum$|mesocolon|^mesentery/i.test(e.en)) e.sistem = 'periton'; // karın zarı katlantıları kendi sisteminde
      const ozel = EK_TERIM[e.enKucuk] ?? EKLEM_TERIM[e.enKucuk] ?? sinirTerim(e.enKucuk) ?? ORGAN_TERIM[e.enKucuk]; if (ozel) { const yan = /\((sol|sağ)\)$/.exec(e.tr)?.[0]; e.tr = ozel[0] + (yan ? ' ' + yan : ''); e.fn = ozel[1]; } // ek katmanın sık tıklanan yapıları için Türkçe ad ve görev
      const i = g.ekParca(e.geometry, e.sistem, e.bounds);
      if (EK_DOGRULAMA[e.enKucuk]) DOGRULAMA[e.anahtar] ??= EK_DOGRULAMA[e.enKucuk]; // ad kaynakla karşılaştırıldıysa kartta rozeti çıkar
      TERIM[e.anahtar] ??= { tr: ozel ? ozel[0] : e.la, la: e.la, lv: 3, fn: e.fn, ip: '', ek: true };
      parcalar.push({ i, en: e.en, sistem: e.sistem, anahtar: e.anahtar, tr: e.tr, la: e.la, ek: '', bounds: e.bounds, kaynak: 'Z-Anatomy' });
      const y = (yapilar[e.anahtar] ??= { anahtar: e.anahtar, ...TERIM[e.anahtar], sistem: e.sistem, parcalar: [], enler: [] });
      y.parcalar.push(i); y.enler.push(e.enKucuk);
      aramaDizini.push({ i, metin: norm([e.tr, e.la, e.en].join(' | ')) });
    }
    // Büyük omentum ince bağırsağın ve kalın bağırsağın önündeki örtüdür: taşan kıvrımların önüne itilir.
    for (const om of parcalar.filter(p => /^greater omentum$/i.test(p.en))) g.ortuOneAl(om.i, parcalar.filter(p => p.kaynak !== 'Z-Anatomy' && /jejun|ileum|colon|caecum|cecum|appendix/i.test(p.en)).map(p => p.i));
    g.guncelle(); if (g.patlama) g.patlat(g.patlama); ekYuklendi = ekler.length; yanCiz(); baglantiAc();
    g.yavasDenetim = true; // akıcılık denetimi yükleme bittikten sonra başlar
  } catch (h) { if (not) not.textContent = 'Ek katman yüklenemedi: ' + h.message; g.yavasDenetim = true; }
}
let ekYuklendi = 0;
// Ek katmanın türüne göre açıklama alamayan yapıları (Türkçe ad, görev). Ders kitabı bilgisidir; kaynakla ayrıca karşılaştırılmadı.
const EK_TERIM = {
  'greater omentum': ['Büyük omentum (büyük karın zarı örtüsü)', 'Midenin büyük eğriliğinden sarkıp enine kolonun önünden geçen, ince bağırsakların önünü önlük gibi örten periton katlantısıdır. İçinde yağ ve lenf düğümleri bulunur; iltihaplı bir organın çevresine yapışarak iltihabın yayılmasını sınırlayabilir.'],
  'lesser omentum': ['Küçük omentum', 'Karaciğer ile midenin küçük eğriliği ve onikiparmak bağırsağının ilk bölümü arasında uzanan periton katlantısıdır. Serbest kenarında portal ven (vena portae), hepatik arter ve ana safra kanalı (ductus choledochus) bulunur.'],
  'mesocolon': ['Mezokolon (kalın bağırsak askısı)', 'Kalın bağırsağın enine (colon transversum) ve sigmoid bölümlerini karın arka duvarına bağlayan periton katlantısıdır; bu bölümlerin damar, sinir ve lenf yollarını taşır. Çıkan ve inen kolonun askısı gelişim sırasında arka duvara yapışır; bu bölümler çoğunlukla periton arkasında kalır.'],
  'bile duct': ['Ana safra kanalı (ductus choledochus)', 'Ortak karaciğer kanalı ile safra kesesi kanalının birleşmesiyle oluşur. Safrayı pankreas başının arkasından geçirerek onikiparmak bağırsağının ikinci bölümüne, büyük duodenal papillaya taşır.'],
  'gingiva': ['Diş eti (gingiva)', 'Dişlerin boynunu ve çene kemiklerindeki diş yuvalarının kenarını örten mukozadır.'],
  'accessory parotid gland': ['Yardımcı parotis bezi', 'Parotis kanalı boyunca, çiğneme kası (m. masseter) üzerinde bulunabilen küçük ek tükürük bezi dokusudur; salgısını parotis kanalına verir.'],
  'parotid duct': ['Parotis kanalı (Stensen kanalı)', 'Çiğneme kasının (m. masseter) dış yüzünden öne doğru geçer, kasın ön kenarında içe dönerek yanak kasını (m. buccinator) deler ve üst ikinci büyük azı dişi hizasında ağız içine açılır; parotis bezinin tükürüğünü taşır.'],
  'parotid gland': ['Parotis bezi (kulak altı tükürük bezi)', 'En büyük tükürük bezidir; sulu (seröz) tükürük salgılar. İçinden yüz siniri (n. facialis) dallarına ayrılarak geçer; kabakulakta şişer.'],
  'submandibular duct': ['Çene altı bezi kanalı (Wharton kanalı)', 'Çene altı tükürük bezinin salgısını ağız tabanında, dilin altındaki çıkıntıya (caruncula sublingualis) taşır. Tükürük taşı en sık bu kanalda görülür.'],
  'soft palate': ['Yumuşak damak', 'Sert damağın arkasındaki kaslı bölümdür. Yutma sırasında yükselerek burun boşluğu ile yutak arasındaki geçişi kapatır.'],
  'uvula of palate': ['Küçük dil (uvula)', 'Yumuşak damağın ortasından aşağı sarkan kaslı çıkıntıdır.'],
  'accessory pancreatic duct': ['Yardımcı pankreas kanalı (Santorini kanalı)', 'Pankreas başının üst bölümünü boşaltır; onikiparmak bağırsağına küçük duodenal papilladan açılır.'],
  'nasopharynx': ['Yutağın burun bölümü (nazofarinks)', 'Burun boşluğunun arkasında, yumuşak damağın üstündedir; yalnız hava geçer. Östaki borusunun ağzı ve geniz eti (adenoid) burada bulunur.'],
  'oropharynx': ['Yutağın ağız bölümü (orofarinks)', 'Yumuşak damak ile gırtlak kapağı (epiglottis) arasındadır; hava ve besinin ortak yoludur. Damak bademcikleri bu bölümün yan duvarındadır.'],
  'laryngopharynx': ['Yutağın gırtlak bölümü (laringofarinks)', 'Gırtlak kapağının (epiglottis) üst kenarından yüzük kıkırdağın (cartilago cricoidea) alt kenarına kadar, gırtlağın arkasında uzanır; aşağıda yemek borusuyla devam eder. Yutma sırasında besin buradan yemek borusuna geçer.'],
  'ejaculatory duct': ['Boşaltma kanalı (ductus ejaculatorius)', 'Sperma kanalı (ductus deferens) ile tohum kesesinin kanalının birleşmesiyle oluşur; prostatın içinden geçerek üretranın prostat bölümüne açılır.'],
  'mucosa of nasal cavity': ['Burun boşluğu mukozası', 'Solunan havayı ısıtır, nemlendirir ve tozları tutar. Üst bölümünde koku almayı sağlayan koku epiteli bulunur.'],
  'pleura': ['Akciğer zarı (plevra)', 'Akciğeri saran iç yaprak (visseral plevra) ile göğüs duvarını örten dış yaprak (pariyetal plevra) arasında ince bir sıvı aralığı vardır. Bu sıvı, solunumda akciğerin göğüs duvarını izleyerek genişlemesini sağlar.'],
  'renal pelvis': ['Böbrek leğeni (pelvis renalis)', 'Büyük böbrek kadehlerinin (calices majores) birleşmesiyle oluşan huni biçimli boşluktur; idrarı üretere iletir.'],
  // Damar katmanından gelen başlıca yapılar (ders kitabı bilgisi; kaynakla tek tek karşılaştırılmadı).
  'external carotid artery': ['Eksternal karotis arter (a. carotis externa)', 'Ana karotis arterin tiroit kıkırdağın üst kenarı hizasındaki iki uç dalından biridir. Yüzü, boynu ve kafatası dışını besler; dalları: a. thyroidea superior, a. lingualis, a. facialis, a. pharyngea ascendens, a. occipitalis, a. auricularis posterior, a. maxillaris ve a. temporalis superficialis.'],
  'facial artery': ['Fasiyal arter (a. facialis)', 'Eksternal karotis arterden çıkar, mandibula kenarını masseter kasının önünde çaprazlar (nabız burada alınabilir) ve yüzde dudaklara ve burun kenarına kıvrımlı bir yolla uzanır; sonu a. angularis adını alır.'],
  'maxillary artery': ['Maksiller arter (a. maxillaris)', 'Eksternal karotis arterin iki uç dalından büyüğüdür; mandibula boynunun arkasından fossa infratemporalis ve fossa pterygopalatina\'ya geçer. Çiğneme kaslarını, dişleri, damağı, burun boşluğunu ve a. meningea media ile dura mater\'yı besler.'],
  'superficial temporal artery': ['Yüzeyel temporal arter (a. temporalis superficialis)', 'Eksternal karotis arterin iki uç dalından küçüğüdür; kulak önünden şakağa çıkar, nabzı kulak önünde alınabilir. Saçlı derinin yan bölümünü besler.'],
  'occipital artery': ['Oksipital arter (a. occipitalis)', 'Eksternal karotis arterin arka dalıdır; ense kaslarını ve saçlı derinin arka bölümünü besler.'],
  'ascending pharyngeal artery': ['Asendan faringeal arter (a. pharyngea ascendens)', 'Eksternal karotis arterin en küçük dalıdır; yutak duvarı boyunca yukarı çıkar, yutağı, damak bademciğini ve dura mater\'nın bir bölümünü besler.'],
  'middle meningeal artery': ['Orta meningeal arter (a. meningea media)', 'Maksiller arterden çıkar ve foramen spinosum\'dan kafatası içine girer; dura mater\'yı besler. Şakak kemiğinin kırığında yırtılınca epidural hematom gelişir.'],
  'deep femoral artery': ['Derin femoral arter (a. profunda femoris)', 'Femoral arterin uyluktaki en büyük dalıdır; a. circumflexa femoris medialis ve lateralis ile delici arterler (aa. perforantes) aracılığıyla uyluk kaslarını ve femur başını besler.'],
  'medial circumflex femoral artery': ['Medial sirkumfleks femoral arter (a. circumflexa femoris medialis)', 'Derin femoral arterden çıkar; femur boynunun arkasını dolanarak femur başının ana beslenmesini sağlar. Femur boynu kırığında zedelenirse femur başında avasküler nekroz gelişebilir.'],
  'fibular artery': ['Fibular arter (a. fibularis)', 'Posterior tibial arterin en büyük dalıdır; fibula boyunca iner, bacağın arka ve yan bölmesindeki kasları besler.'],
  'obturator artery': ['Obturator arter (a. obturatoria)', 'İnternal iliak arterin dalıdır; canalis obturatorius\'tan geçerek uyluğun iç yüzündeki adduktor kasları besler.'],
  'superior gluteal artery': ['Süperior gluteal arter (a. glutea superior)', 'İnternal iliak arterin en büyük dalıdır; foramen ischiadicum majus\'tan piriformis kasının üstünden çıkarak gluteus medius ve minimus kaslarını besler.'],
  'inferior gluteal artery': ['İnferior gluteal arter (a. glutea inferior)', 'İnternal iliak arterin dalıdır; piriformis kasının altından çıkarak gluteus maximus kasını besler.'],
  'internal pudendal artery': ['İnternal pudendal arter (a. pudenda interna)', 'İnternal iliak arterin dalıdır; perine kaslarını ve dış genital organları besler.'],
  'gastroduodenal artery': ['Gastroduodenal arter (a. gastroduodenalis)', 'Ana hepatik arterden çıkar ve onikiparmak bağırsağının birinci bölümünün arkasından iner; arka yüzdeki peptik ülser bu arteri aşındırıp ağır kanamaya yol açabilir.'],
  'external jugular vein': ['Eksternal juguler ven (v. jugularis externa)', 'Retromandibular venin arka bölümü ile arka kulak veninin birleşmesiyle oluşur; sternokleidomastoid kasın üzerinden çapraz iner ve subklavyen vene açılır. Boyunda deri altında görülebilir.'],
  'anterior jugular vein': ['Anterior juguler ven (v. jugularis anterior)', 'Çene altından boynun ön yüzünde orta hatta yakın iner; eksternal juguler ya da subklavyen vene açılır.'],
  'retromandibular vein': ['Retromandibular ven (v. retromandibularis)', 'Yüzeyel temporal ve maksiller venlerin birleşmesiyle parotis bezinin içinde oluşur.'],
  'facial vein': ['Fasiyal ven (v. facialis)', 'Yüzün kanını toplar; burun kökünde oftalmik venlerle bağlantılıdır. Bu yüzden yüzün "tehlikeli üçgeni"ndeki enfeksiyon sinus cavernosus\'a yayılabilir.'],
  'superior sagittal sinus': ['Süperior sagittal sinüs (sinus sagittalis superior)', 'Falx cerebri\'nin üst kenarında uzanan dural venöz sinüstür; beyin omurilik sıvısı araknoid granülasyonlarla buraya geri emilir.'],
  'transverse sinus': ['Transvers sinüs (sinus transversus)', 'Tentorium cerebelli kenarında yana uzanan dural venöz sinüstür; sinus sigmoideus ile devam eder.'],
  'sigmoid sinus': ['Sigmoid sinüs (sinus sigmoideus)', 'S biçiminde iner ve foramen jugulare\'de internal juguler vene dönüşür.'],
  'cavernous sinus': ['Kavernöz sinüs (sinus cavernosus)', 'Sella turcica\'nın iki yanındaki dural venöz sinüstür; içinden a. carotis interna ve n. abducens, yan duvarından n. oculomotorius, n. trochlearis, n. ophthalmicus ve n. maxillaris geçer.'],
  'straight sinus': ['Düz sinüs (sinus rectus)', 'Falx cerebri ile tentorium cerebelli\'nin birleşme yerinde uzanır; sinus sagittalis inferior ve v. cerebri magna\'nın kanını sinüslerin birleşme yerine taşır.'],
  'mesentery': ['Mezenter (ince bağırsak askısı)', 'Boş ve kıvrımlı bağırsağı (jejunum ve ileum) karın arka duvarına bağlayan yelpaze biçimli periton katlantısıdır; içinde üst bağırsak askısı damarlarının dalları, lenf düğümleri ve sinirler bulunur.'],
};
Object.assign(EK_TERIM, KAS_TERIM); // kas katmanından eklenen kaslar (kaskatman.js)
let baglantiAcildi = false;
function baglantiAc() {
  const a = BAGLANTI.get('yapi');
  if (baglantiAcildi || !a || !yapilar[a]) return;
  baglantiAcildi = true; parcaSec(yapilar[a].parcalar[0], true);
}
// Görünüm araçlarının durumu
let odakModu = false, etiketAcik = false, olcumModu = false, parcali = null;
function etiketleriGuncelle() {
  if (!etiketAcik || sinav || tekrar || ozel || canli) return g.etiketle([]);
  const yazi = i => (C.dil() === 'la' ? parcalar[i].la : parcalar[i].tr) || parcalar[i].tr || parcalar[i].en;
  let liste = [];
  if (aktifKonu) liste = konular().find(k => k.id === aktifKonu)?.liste.slice(0, 30).map(a => yapilar[a].parcalar[0]) ?? [];
  else if (seciliParca >= 0) liste = [seciliParca, ...komsular(seciliParca).map(q => q.i)];
  g.etiketle(liste.map(i => ({ i, metin: yazi(i) })));
}
const ustuneGel = document.createElement('div'); ustuneGel.className = 'ustune-gel'; ustuneGel.hidden = true; document.body.appendChild(ustuneGel);
g.uzerinde = (i, x, y) => {
  if (i < 0 || sinav || tekrar || ozel || canli) { ustuneGel.hidden = true; return; }
  ustuneGel.textContent = (C.dil() === 'la' ? parcalar[i].la : parcalar[i].tr) || parcalar[i].tr || parcalar[i].en;
  ustuneGel.style.left = `${x + 14}px`; ustuneGel.style.top = `${y + 14}px`; ustuneGel.hidden = false;
};

let sekme = 'kesfet', aktifKonu = null, sinav = null, tekrar = null, ozel = null, canli = null, seciliParca = -1;
const kesit = { acik: false, eksen: 'y', oran: 0.5, ters: false };

g.tikla = (i, nokta) => {
  if (olcumModu && !sinav && !tekrar && !ozel) { if (nokta) { const cm = g.olcumNoktasi(nokta); const d = $('#olcumDurum'); if (d) d.textContent = cm === null ? 'İkinci noktayı tıkla.' : `Mesafe: ${cm.toFixed(1).replace('.', ',')} cm. Yeni ölçüm için yeniden tıkla.`; } return; }
  if (sinav && !sinav.cevaplandi && sinav.sorular[sinav.sira].tip === 'bul') return sinavBulCevap(i);
  if (sinav || tekrar || ozel || canli) return;
  if (i < 0) { secimiBirak(); return; }
  parcaSec(i, false);
};

// ---------- Sekmeler ----------
document.querySelectorAll('[data-sekme]').forEach(b => b.addEventListener('click', () => sekmeAc(b.dataset.sekme)));
function sekmeAc(ad) {
  const degisti = ad !== sekme;
  if (sinav && ad !== 'sinav') sinavBitir(false);
  if (ozel && ad !== 'sinav') ozelBitir(false);
  if (canli && ad !== 'canli') canliBitir(false);
  if (ad !== 'canli') document.querySelector('#mikroPano')?.remove();
  if (tekrar && ad !== 'tekrar') tekrarBitir();
  if (degisti) sahneSifirla(); // sekme değişince önceki sekmeden kalan süzgeç, ayırma ve kesit taşınmaz
  sekme = ad;
  document.querySelectorAll('[data-sekme]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.sekme === ad)));
  yanCiz();
}
function yanCiz() {
  ({ kesfet: kesfetCiz, canli: canliCiz, sinav: sinavCiz, tekrar: tekrarCiz, plan: planCiz, ilerleme: ilerlemeCiz, notlar: notlarCiz })[sekme]();
  vadeliRozet();
}
function vadeliRozet() {
  const n = C.tekrarListesi(tumAnahtarlar(), 0).length, r = $('#vadeliRozet');
  r.hidden = !n; r.textContent = n;
}

// Düzey seçimi
// Sınıf ve komite seçimi: sınıf seçilince o sınıfın komiteleri listelenir.
function komiteListesi() {
  $('#komite').innerHTML = `<option value="hepsi">Bütün komiteler</option>${seciliSinif().komiteler.map(k => `<option value="${k.id}" ${k.id === C.komite() ? 'selected' : ''}>${esc(k.ad)}</option>`).join('')}`;
}
$('#cinsiyet').value = C.cinsiyet();
$('#cinsiyet').addEventListener('change', e => { C.cinsiyetAyarla(e.target.value); location.reload(); });
$('#sinif').innerHTML = C.SINIFLAR.map(s => `<option value="${s.id}" ${s.id === C.sinif() ? 'selected' : ''}>${esc(s.ad)}</option>`).join('');
komiteListesi();
$('#sinif').addEventListener('change', e => { C.sinifAyarla(e.target.value); komiteListesi(); komiteUygula(); yanCiz(); });
$('#komite').addEventListener('change', e => { C.komiteAyarla(e.target.value); komiteUygula(); yanCiz(); });
$('#dil').value = C.dil();
$('#dil').addEventListener('change', e => { C.dilAyarla(e.target.value); yanCiz(); if (seciliParca >= 0 && !$('#cekmece').hidden) cekmeceAc(seciliParca); });
$('#yardimDugme').addEventListener('click', () => $('#yardim').showModal());
document.querySelectorAll('[data-yon]').forEach(b => b.addEventListener('click', () => g.gorunus(b.dataset.yon)));

// Parçalanmış görünümde birlikte hareket edecek gruplar: organlar ve el, ayak, göğüs kafesi gibi bölgeler bütün kalır.
const ORGAN_GRUBU = [[/lung|bronch/, 'akciger'], [/hepat|liver|gallbladder/, 'karaciger'], [/colon|caecum|cecum|appendix|rectum|taenia/, 'kalin-bagirsak'], [/jejun|ileum|duoden/, 'ince-bagirsak'],
  [/kidney|renal|ureter/, 'bobrek'], [/ventric|atrium|atrial|valve|papillary|heart|coronary/, 'kalp'], [/stomach|gastric/, 'mide'], [/^(?!.*ligament).*((body|fundus|wall|cavity|cervix) of uterus|uterus$)/, 'rahim']];
const KEMIK_BOLGESI = [[/carpal|metacarpal|scaphoid|lunate|triquetr|pisiform|trapez|capitate|hamate|finger|thumb/, 'el'], [/tarsal|metatarsal|talus|calcaneus|cuboid|cuneiform|navicular|toe|foot/, 'ayak'],
  [/\brib\b|costal|sternum|manubrium|xiphoid/, 'gogus-kafesi'], [/vertebra|sacrum|coccyx|atlas|axis|intervertebral/, 'omurga']];
// Organların kendi doğal renkleri (ders atlası tonları). Sıra önemlidir: "hepatic flexure of colon" önce kalın bağırsak sayılır.
const ORGAN_RENK = [
  // Beyin: gri cevher pembemsi gri, ak cevher beyazımsı, beyincik biraz koyu; beyin ventrikülleri ve su kemeri beyin omurilik sıvısıdır (saydam).
  [/ventricle of brain|lateral ventricle|third ventricle|fourth ventricle|cerebral aqueduct|horn of lateral ventricle|interventricular foramen/i, '#bcdcea|0.35'],
  [/choroid plexus/i, '#b5535a'], [/white matter|corpus callosum|internal capsule|fornix/i, '#eee5da'], [/cerebell/i, '#cfa79c'],
  [/gyrus|cerebr|lobe of brain|(frontal|parietal|temporal|occipital|limbic) lobe|insula|hippocamp|amygdal|thalam|pons|medulla oblongata|midbrain|peduncle|caudate nucleus|(head|body|tail) of caudate|putamen|globus pallidus|claustrum|cuneus|uncus|mammillary|pineal|stria medullaris/i, '#d6b5aa'],
  [/spinal cord|conus medullaris/i, '#ebdfcf'],
  // Göz: göz akı beyaz, iris kahve, damar tabakası koyu, ağ tabaka turuncu-kırmızı; kornea, mercek ve saydam bölmeler cam gibi.
  [/sclera/i, '#f4f1ea'], [/cornea/i, '#f4fbfd|0.1'], [/suspensory ligament of (right |left )?lens|zonul/i, '#e9e2d4|0.35'], [/\blens\b/i, '#eef4f6|0.15'], [/iris/i, '#5e3f25||mat'], [/choroid(?! plexus)/i, '#4a2019||mat'], [/retina(?!culum)/i, '#b8613f||mat'],
  [/vitreous|anterior chamber|posterior chamber|(anterior|posterior) segment of eyeball/i, '#e3f0f4|0.04'], [/optic (nerve|chiasm|tract)/i, '#efe3c9'], [/tarsal plate|eyelid/i, '#e7d2c3'],
  // Kalp: kas duvarı koyu kırmızı-kahve, kapakçıklar beyazımsı lifli doku. Boşluk modelleri duvarın iç yüzüyle aynı yerde durduğu için duvarla aynı renktedir (farklı renk lekeli titreşme yapıyordu).
  [/cusp|leaflet|chordae|(?<!ileocecal )valve/i, '#efe4d8'], [/wall of (left |right )?(ventricle|atrium)|myocard|papillary|ventricle|atrium/i, '#b04d45'],
  // Karın zarı katlantıları (omentum, mezenter, mezokolon) kendi sistemindedir ("Karın zarı"); belirgin çizilir, sistem listesinden kapatılabilir.
  // Bağlar lifli beyazımsı dokudur; organın adını taşısalar da organ renginde değil. Geniş bağ ve periton cepleri organı örten ince tüllerdir.
  [/broad ligament|mesometrium|mesosalpinx|mesovarium|pouch/i, '#e8d6cc|0.3'], [/ligament/i, '#e8ddd0'],
  [/colon|caecum|cecum|appendix|rectum|taenia|anal canal/i, '#c4916a'], [/gallbladder|cystic duct|bile duct|hepatic duct/i, '#6f8a3c'],
  [/hepat|liver/i, '#8e4434'], [/pancrea/i, '#dcb36c'], [/stomach|gastric|pylor/i, '#d98a7c'], [/duoden|jejun|ileum|ileocecal|small intestine/i, '#e3a08a'],
  [/oesophag|esophag/i, '#cf8f80'], [/tongue/i, '#c46a6a'], [/tooth|teeth|incisor|canine|premolar|molar/i, '#efe8d8'], [/gingiva/i, '#d98f90'],
  [/spleen/i, '#7b3346'], [/kidney|renal (cortex|medulla|pyramid|column|papilla)/i, '#8f4a3e'],
  [/ureter|urinary bladder|urethra|renal pelvis|calyx/i, '#d7ab95'], [/thyroid gland|parathyroid/i, '#a9505c'], [/adrenal|suprarenal/i, '#d0a052'],
  [/parotid|submandibular gland|sublingual gland|salivary/i, '#d7b08a'],
  // Akciğer pembemsi gri, hava yolu kıkırdağı açık; timus pembemsi sarı.
  [/lobe of (left |right )?lung|\blung\b/i, '#d4a3a8'], [/trachea|bronch/i, '#e6cfc6'], [/thymus/i, '#e0c6b4'],
  // Üreme organları (erkek ve kadın modeli): her yapı kendi tonunda, birbirinden ayırt edilsin.
  [/testis/i, '#ece0da'], [/epididym/i, '#c99a8a'], [/deferent|ejaculatory|vas deferens/i, '#efe5d8'], [/seminal vesicle/i, '#d8b29a'], [/prostat/i, '#c58b78'],
  [/corpus cavernosum|corpus spongiosum|glans|penis/i, '#c98784'], [/ovary/i, '#e4cfc2'], [/uterine tube|fallopian/i, '#d79e94'], [/uter|cervix/i, '#c6847f'], [/vagina/i, '#d39892'], [/pharyn|larynx|epiglott/i, '#d79a92'],
];
const ORGAN_SISTEM = new Set(['sindirim', 'bosaltim', 'hormon', 'lenf', 'solunum', 'ureme', 'sinir', 'duyu', 'kalp']);
const organRengi = [];
g.parcaRenk = i => {
  if (organRengi[i] === undefined) { const p = parcalar[i]; organRengi[i] = (ORGAN_SISTEM.has(p.sistem) && ORGAN_RENK.find(([d]) => d.test(p.en))?.[1]) || null; }
  return organRengi[i];
};
g.patlamaBlok = new Set(['atardamar', 'toplardamar', 'sinir', 'lenf', 'deri']); // tek blok kalan ağ sistemleri
g.patlamaGrubu = i => {
  const p = parcalar[i], en = p.en.toLowerCase(), yan = /\bright\b/.test(en) ? 'R' : /\bleft\b/.test(en) ? 'L' : '';
  if (p.sistem === 'iskelet' || p.sistem === 'bag') {
    for (const [d, ad] of KEMIK_BOLGESI) if (d.test(en)) return ad + (ad === 'el' || ad === 'ayak' ? yan : '');
    if ((p.bounds[0][1] + p.bounds[1][1]) / 2 > 1.47) return 'kafatasi';
    return p.sistem === 'bag' ? 'bag' + yan : p.anahtar + yan;
  }
  if (['atardamar', 'toplardamar', 'sinir', 'lenf', 'deri'].includes(p.sistem)) return p.sistem; // damar ve sinir ağları tek blok
  // Kalp grubuna yalnız kalp sisteminin parçaları girer (beyin ventrikülleri, bağırsak kapağı gibi adı benzeyenler girmez).
  if (p.sistem !== 'kas') for (const [d, ad] of ORGAN_GRUBU) if (d.test(en) && !(ad === 'kalp' && p.sistem !== 'kalp')) return ad + (ad === 'akciger' || ad === 'bobrek' ? yan : '');
  return p.anahtar + yan;
};

// Parçalanmış görünümde her grubun üstüne adını yazar: grubun en büyük parçası etiketi taşır.
const GRUP_ADI = { akciger: ['Pulmo', 'Akciğer'], karaciger: ['Hepar', 'Karaciğer'], 'kalin-bagirsak': ['Intestinum crassum', 'Kalın bağırsak'], 'ince-bagirsak': ['Intestinum tenue', 'İnce bağırsak'],
  bobrek: ['Ren', 'Böbrek'], kalp: ['Cor', 'Kalp'], rahim: ['Uterus', 'Rahim'], mide: ['Gaster', 'Mide'], el: ['Ossa manus', 'El kemikleri'], ayak: ['Ossa pedis', 'Ayak kemikleri'], 'gogus-kafesi': ['Cavea thoracis', 'Göğüs kafesi'],
  omurga: ['Columna vertebralis', 'Omurga'], kafatasi: ['Cranium', 'Kafatası'], arter: ['Arteriae', 'Arterler'], ven: ['Venae', 'Venler'], sinir: ['Nervi', 'Sinirler'], bag: ['Ligamenta', 'Bağlar'] };
function parcaliEtiketle() {
  if (!mod.etiket || sinav || tekrar || ozel) return g.etiketle([]); // etiketler "Etiket" düğmesiyle açılır; sınav ve kartlarda cevabı göstermesin diye kapalı kalır
  const hacim = p => (p.bounds[1][0] - p.bounds[0][0]) * (p.bounds[1][1] - p.bounds[0][1]) * (p.bounds[1][2] - p.bounds[0][2]), gruplar = {};
  for (const p of parcalar) {
    if (!g.meshler[p.i]?.visible) continue;
    const ad = g.patlamaParca && !g.patlamaBlok.has(p.sistem) ? 'parca' + p.i : g.patlamaGrubu(p.i), h = hacim(p), gr = (gruplar[ad] ??= { i: p.i, h: 0, toplam: 0 });
    gr.toplam += h; if (h > gr.h) { gr.h = h; gr.i = p.i; }
  }
  const la = C.dil() === 'la';
  // Çok kalabalık olmasın: en büyük 45 grup etiketlenir (kaslar açıkken küçük kaslar etiketsiz kalır).
  g.etiketle(Object.entries(gruplar).sort((x, y) => y[1].toplam - x[1].toplam).slice(0, 45).map(([ad, gr]) => {
    const kok = ad.replace(/[RL]$/, ''), p = parcalar[gr.i];
    return { i: gr.i, metin: GRUP_ADI[kok]?.[la ? 0 : 1] ?? ((la ? p.la : p.tr) || p.tr || p.en) };
  }));
}

// Kipler arası geçişte sahneyi temiz hâle getirir: süzgeç, soluklaştırma, seçim, kesit açma, ayırma, cam görünüm, tur ve etiketler kapanır.
// Açık sistemler ile kullanıcının gizlediği yapılar korunur.
function sahneSifirla() {
  turBitir(); icKapat(); katmanSifirla(); g.solukParca.clear(); baglanmaKapat(); if (cizim.acik) $('#cizimBitti').click();
  if (parcali) { g.parcala(parcali, 0); parcali = null; }
  if (g.patlama) g.patlat(0);
  mod.parcali = false; if (mod.cam) camAyarla(false);
  aktifKonu = null; seciliParca = -1; g.yalniz = null; g.soluk = null; g.secili = new Set(); g.soru = new Set();
  g.etiketle([]); g.olcumTemizle(); ustuneGel.hidden = true; $('#secimEtiketi').hidden = true; cekmeceKapat(); modIsaretle(); g.guncelle();
}


// ---------- Katman soyma: en yüzeydeki katman önce kalkar ----------
// Kaslar deriye uzaklıklarına göre üç katmana ayrılır (1,2 cm ve 2,5 cm sınırları; yaklaşık). Deri modelde bulunduğu için ölçü her bölgede aynı kuraldır.
const KATMANLAR = [
  { ad: 'Deri', f: p => p.sistem === 'deri' },
  { ad: 'Yüzeyel kaslar', f: (p, d) => p.sistem === 'kas' && d < 0.012 },
  { ad: 'Orta kaslar', f: (p, d) => p.sistem === 'kas' && d >= 0.012 && d < 0.025 },
  { ad: 'Derin kaslar', f: (p, d) => p.sistem === 'kas' && d >= 0.025 },
  { ad: 'Damarlar, sinirler, bağlar ve karın zarı', f: p => ['atardamar', 'toplardamar', 'sinir', 'lenf', 'bag', 'periton'].includes(p.sistem) },
  { ad: 'Organlar', f: p => ['sindirim', 'solunum', 'kalp', 'bosaltim', 'ureme', 'hormon', 'duyu', 'gebelik'].includes(p.sistem) },
];
let kasDerinligi = null; const soyulan = []; // soyulan katmanların sırası ve parçaları
function katmanParcalari(n) {
  let derinlik = kasDerinligi;
  if (n >= 1 && n <= 3 && !derinlik) { derinlik = g.derinlikHesapla(parcalar.filter(p => p.sistem === 'kas').map(p => p.i), parcalar.filter(p => /^skin$/i.test(p.en)).map(p => p.i)); if (ekYuklendi) kasDerinligi = derinlik; } // yükleme bitmeden hesaplanan derinlik saklanmaz
  return parcalar.filter(p => g.meshler[p.i]?.visible && KATMANLAR[n].f(p, derinlik?.get(p.i) ?? 0)).map(p => p.i);
}
function katmanSoy() {
  for (let n = 0; n < KATMANLAR.length; n++) {
    if (soyulan.some(s => s.n === n)) continue;
    const is = katmanParcalari(n); if (!is.length) continue;
    is.forEach(i => g.katmanGizli.add(i)); soyulan.push({ n, is }); gizlemeSirasi.push({ tur: 'katman', n, ad: KATMANLAR[n].ad + ' (katman)' }); secimiBirak(); g.guncelle(); return;
  }
}
function katmanKoy() { const s = soyulan.pop(); if (!s) return; s.is.forEach(i => g.katmanGizli.delete(i)); g.guncelle(); }
function katmanSifirla() { soyulan.length = 0; g.katmanGizli.clear(); }
// Gizlenen yapılar ve kaldırılan katmanlar gizlenme sırasıyla tutulur; şeritten her biri tek tek geri getirilebilir.
const gizlemeSirasi = [];
function yapiGizle(i) {
  const is = yapiParcalari(i), p = parcalar[i];
  is.forEach(j => g.gizli.add(j)); gizlemeSirasi.push({ tur: 'yapi', is, ad: (C.dil() === 'la' ? p.la : p.tr) || p.tr || p.en });
}
function tekGeriGetir(k) {
  const e = gizlemeSirasi[k]; if (!e) return;
  if (e.tur === 'yapi') e.is.forEach(j => g.gizli.delete(j));
  else { const s = soyulan.findIndex(x => x.n === e.n); if (s >= 0) { soyulan[s].is.forEach(j => g.katmanGizli.delete(j)); soyulan.splice(s, 1); } }
  gizlemeSirasi.splice(k, 1); g.guncelle(); if (sekme === 'kesfet') kesfetCiz();
}

// ---------- Ekran üstü çizim ----------
const cizim = { acik: false, ciziyor: false };
function cizimAyarla(acik) {
  const c = $('#cizimKatmani'); cizim.acik = acik; mod.ciz = acik; modIsaretle();
  c.hidden = !acik; $('#cizimAraclari').hidden = !acik; g.kontrol.enabled = !acik;
  if (acik && mod.doner) donerAyarla(false); // dönen model kaydedilen resimde çizimle örtüşmez
  if (acik) { const o = Math.min(devicePixelRatio || 1, 2); c.width = c.clientWidth * o; c.height = c.clientHeight * o; const x = c.getContext('2d'); x.setTransform(o, 0, 0, o, 0, 0); x.lineCap = x.lineJoin = 'round'; x.lineWidth = 3; x.strokeStyle = '#f26b1d'; }
}
{ const c = $('#cizimKatmani'), x = () => c.getContext('2d'), yer = e => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  c.addEventListener('pointerdown', e => { if (cizim.ciziyor || !e.isPrimary) return; cizim.ciziyor = true; c.setPointerCapture(e.pointerId); x().beginPath(); x().moveTo(...yer(e)); });
  c.addEventListener('pointermove', e => { if (!cizim.ciziyor) return; x().lineTo(...yer(e)); x().stroke(); });
  for (const olay of ['pointerup', 'pointercancel']) addEventListener(olay, () => { cizim.ciziyor = false; });
  // Ekran döner ya da boyut değişirse tuval yeniden boyutlanır (çizim silinir); yoksa çizgiler esner.
  addEventListener('resize', () => { if (cizim.acik) cizimAyarla(true); });
  const temizle = () => { x().save(); x().setTransform(1, 0, 0, 1, 0, 0); x().clearRect(0, 0, c.width, c.height); x().restore(); };
  $('#cizimTemizle').onclick = temizle;
  $('#cizimBitti').onclick = () => { temizle(); cizimAyarla(false); };
  // Kaydet: modelin görüntüsü ile çizim tek bir PNG olarak birleştirilir.
  $('#cizimKaydet').onclick = () => {
    const resim = new Image(); resim.onload = () => {
      const b = document.createElement('canvas'); b.width = c.width; b.height = c.height; const k = b.getContext('2d');
      k.fillStyle = getComputedStyle(document.body).backgroundColor; k.fillRect(0, 0, b.width, b.height); k.drawImage(resim, 0, 0, b.width, b.height); k.drawImage(c, 0, 0);
      const a = document.createElement('a'); a.href = b.toDataURL('image/png'); a.download = `anatomi-cizim-${new Date().toLocaleDateString('sv-SE')}.png`; a.click();
    }; resim.src = g.goruntu();
  };
}

// ---------- Kas bağlanma yerleri (başlangıç ve sonlanma) ----------
// Kasın değdiği kemik yüzeyleri renklenir. Hangisinin başlangıç (origo), hangisinin sonlanma (insertio) olduğu, gövdenin merkezine
// yakınlığa göre tahmin edilir: başlangıç genellikle gövdeye yakın (proksimal) uçtadır. Bu yaklaşık bir kuraldır; kesin bilgi kas kartındaki yazıdadır.
let baglanma = null;
function baglanmaAc(i) {
  baglanmaKapat();
  const p = parcalar[i], kas = yapiParcalari(i), kk = new T.Box3();
  for (const j of kas) { kk.expandByPoint(new T.Vector3(...parcalar[j].bounds[0])); kk.expandByPoint(new T.Vector3(...parcalar[j].bounds[1])); }
  kk.expandByScalar(0.01);
  const kemikler = parcalar.filter(q => q.sistem === 'iskelet' && g.meshler[q.i] && kk.intersectsBox(new T.Box3(new T.Vector3(...q.bounds[0]), new T.Vector3(...q.bounds[1])))).map(q => q.i);
  const merkez = new T.Vector3(0, 1.15, 0);
  const sonuc = g.baglantiGoster(kas, kemikler, (k, hepsi) => {
    if (hepsi.length < 2) return 'baglanti';
    const sira = [...hepsi].sort((a, b) => a.merkez.distanceTo(merkez) - b.merkez.distanceTo(merkez));
    return sira.indexOf(k) < sira.length / 2 ? 'origo' : 'insertio';
  });
  const gorunen = [...new Set([...sonuc.map(s => s.i), ...kas])];
  kas.forEach(j => g.solukParca.add(j));
  seciliParca = -1; g.secili = new Set(); // seçili kas opak boyanırsa arkasındaki benekleri örter
  baglanma = { kas: p.anahtar, parcalar: kas, sonuc, oncekiYalniz: g.yalniz, iskeletKapaliydi: !g.acikSistemler.has('iskelet') };
  g.yalniz = new Set(gorunen); g.acikSistemler.add('iskelet'); g.guncelle(); g.odakla(gorunen);
  const ad = j => (C.dil() === 'la' ? parcalar[j].la : parcalar[j].tr) || parcalar[j].tr || parcalar[j].en, rol = { origo: 'Kırmızı: başlangıç', insertio: 'Mavi: sonlanma', baglanti: 'Mor: bağlanma' };
  $('#secimAd').textContent = sonuc.length ? sonuc.map(s => `${rol[s.rol]} (${ad(s.i)})`).join(' · ') : 'Bu kasın kemiğe değdiği yer modelde bulunamadı'; $('#sahneGizle').hidden = true; $('#secimEtiketi').hidden = false;
}
function baglanmaKapat(suzgecKoru = true) {
  if (!baglanma) return;
  g.baglantiSil(); baglanma.parcalar.forEach(j => g.solukParca.delete(j));
  if (suzgecKoru) g.yalniz = baglanma.oncekiYalniz;
  if (baglanma.iskeletKapaliydi) g.acikSistemler.delete('iskelet');
  baglanma = null; g.guncelle();
}

// Kesitin adı (anatomik düzlem) ve yeri santimetre olarak yazılır.
function kesitBilgiYaz(b) {
  const e = $('#kesitBilgi'); if (!e) return;
  if (!kesit.acik || !b) { e.textContent = ''; return; }
  const cm = v => (Math.abs(v) * 100).toFixed(1).replace('.', ',');
  e.textContent = kesit.eksen === 'y' ? `Aksiyel (yatay) düzlem · tepeden ${cm(b.max - b.deger)} cm, tabandan ${cm(b.deger - b.min)} cm`
    : kesit.eksen === 'z' ? `Koronal (frontal) düzlem · en önden ${cm(b.max - b.deger)} cm geride`
    : `Sagittal düzlem · orta hattın ${cm(b.deger)} cm ${b.deger >= 0 ? 'solunda' : 'sağında'}`;
}

// ---------- Görünüm kipleri: parçalanmış, cam, döner tabla, tur ----------
const mod = { parcali: false, etiket: false, cam: false, doner: false, tur: null, kalite: false, ciz: false };
// Yüksek kalite varsayılan olarak açıktır; kapatılırsa tercih bu cihazda hatırlanır.
// Cihaz Kalite kipinde akıcı çizemiyorsa Kalite kendiliğinden kapanır; tercih bu cihazda hatırlanır, düğmeyle yeniden açılabilir.
g.yavas = () => {
  kaliteAyarla(false);
  const not = $('#turYazi'); if (mod.tur) turBitir();
  not.textContent = 'Bu cihaz Kalite kipinde yavaş çizdiği için Kalite kapatıldı. İstersen üstteki "Kalite" düğmesiyle yeniden açabilirsin.'; not.hidden = false;
  setTimeout(() => { if (!mod.tur) not.hidden = true; }, 6000);
};
function kaliteAyarla(acik) { mod.kalite = acik; g.kaliteAyarla(acik); try { localStorage.setItem('anatomi-kalite', acik ? '1' : '0'); } catch {} modIsaretle(); }
const modDugme = ad => document.querySelector(`[data-mod=${ad}]`);
const modIsaretle = () => { for (const ad of ['parcali', 'etiket', 'cam', 'doner', 'tur', 'kalite', 'ciz']) modDugme(ad).setAttribute('aria-pressed', String(!!mod[ad])); };
function parcaliAyarla(acik) {
  if (acik) baglanmaKapat(); // benekler parçaların ilk yerine göre çizilir
  // Ayrıntı penceresinden açılmış yerel ayırma varsa önce o toplanır; ikisi aynı parçaları ayrı ayrı oynatmasın.
  if (acik && parcali) { g.parcala(parcali, 0); parcali = null; g.yalniz = null; g.guncelle(); }
  const gorunen = () => parcalar.filter(p => g.meshler[p.i]?.visible).map(p => p.i);
  // Az sayıda yapı görünüyorsa (ör. yalnız kalp) parçalar tek tek ayrılır; damar ağı gibi kalabalık sistemler açıkken gruplar korunur.
  { const gr = gorunen().filter(i => !g.patlamaBlok.has(parcalar[i].sistem)); g.patlamaParca = acik ? gr.length > 0 && gr.length <= 60 && new Set(gr.map(i => g.patlamaGrubu(i))).size < 3 : g.patlamaParca; }
  mod.parcali = acik; const ilk = g.patlama, son = acik ? (g.patlamaParca ? 2.4 : 0.8) : 0, bas = performance.now();
  const adim = () => { const k = Math.min((performance.now() - bas) / 700, 1); g.patlat(ilk + (son - ilk) * (1 - Math.pow(1 - k, 3))); const s = $('#patlat'); if (s) s.value = g.patlama; if (k < 1) requestAnimationFrame(adim); else if (acik) { g.sigdir(gorunen().filter(i => !g.patlamaParca || !g.patlamaBlok.has(parcalar[i].sistem))); parcaliEtiketle(); } else { g.gorunus('on'); etiketleriGuncelle(); } };
  adim(); modIsaretle();
}
function camAyarla(acik) {
  if (acik) { mod.camOnce = new Set(g.saydamSistem); g.saydamSistem = new Set(SISTEMLER.map(s => s.id).filter(s => s !== 'iskelet')); }
  else g.saydamSistem = mod.camOnce ?? new Set();
  mod.cam = acik; g.guncelle(); modIsaretle(); if (sekme === 'kesfet' && !canli) kesfetCiz();
}
function donerAyarla(acik) { mod.doner = acik; g.kontrol.autoRotate = acik; g.kontrol.autoRotateSpeed = 1.6; modIsaretle(); }
const TUR = [
  { s: ['iskelet'], m: 'İskelet: erişkinde 206 kemik bedeni taşır ve iç organları korur.' },
  { s: ['iskelet', 'kas'], m: 'Kaslar: 600\'den fazla iskelet kası, kemikleri eklemlerde hareket ettirir.' },
  { s: ['iskelet', 'kalp', 'atardamar', 'toplardamar'], m: 'Dolaşım: kalp kanı arterlerle dokulara pompalar; venler kanı kalbe geri getirir.' },
  { s: ['iskelet', 'sinir'], m: 'Sinir sistemi: beyin, omurilik ve sinirler bedeni yönetir ve duyuları taşır.' },
  { s: ['kalp', 'solunum', 'sindirim', 'bosaltim'], m: 'İç organlar: solunum, sindirim ve boşaltım sistemleri göğüs ve karın boşluğuna yerleşir.' },
];
function turBitir() {
  if (!mod.tur) return;
  clearInterval(mod.tur.sayac); g.acikSistemler = mod.tur.once; mod.tur = null; $('#turYazi').hidden = true; donerAyarla(false); g.guncelle(); g.gorunus('on');
  if (sekme === 'kesfet' && !canli) kesfetCiz();
}
function turBaslat() {
  if (canli || sinav || tekrar || ozel) return;
  mod.tur = { once: new Set(g.acikSistemler), n: -1 }; donerAyarla(true);
  const sonraki = () => { const t = mod.tur; t.n = (t.n + 1) % TUR.length; g.acikSistemler = new Set(TUR[t.n].s); g.guncelle(); $('#turYazi').textContent = TUR[t.n].m; $('#turYazi').hidden = false; };
  sonraki(); mod.tur.sayac = setInterval(sonraki, 6500); modIsaretle();
}
document.querySelectorAll('[data-mod]').forEach(b => b.addEventListener('click', () => {
  const ad = b.dataset.mod;
  if (ad === 'soy') katmanSoy();
  else if (ad === 'koy') katmanKoy();
  else if (ad === 'ciz') cizimAyarla(!mod.ciz);
  else if (ad === 'etiket') { mod.etiket = !mod.etiket; modIsaretle(); if (mod.parcali) parcaliEtiketle(); else etiketleriGuncelle(); }
  else if (ad === 'kalite') kaliteAyarla(!mod.kalite); else if (ad === 'parcali') parcaliAyarla(!mod.parcali); else if (ad === 'cam') camAyarla(!mod.cam); else if (ad === 'doner') donerAyarla(!mod.doner);
  else { mod.tur ? turBitir() : turBaslat(); modIsaretle(); }
}));
{ let kayit = null; try { kayit = localStorage.getItem('anatomi-kalite'); } catch {} kaliteAyarla(kayit !== '0'); }
// Modele dokunmak turu bitirir: denetim kullanıcıya geçer.
$('#sahne').addEventListener('pointerdown', e => { if (mod.tur && e.target.tagName === 'CANVAS') { turBitir(); modIsaretle(); } });
// Gezinme: düğmeler ve klavye (ok tuşları kaydırır, + ve − yakınlaştırır).
const GEZ = { yukari: () => g.kaydir(0, 1), asagi: () => g.kaydir(0, -1), sol: () => g.kaydir(-1, 0), sag: () => g.kaydir(1, 0), yakin: () => g.yakinlastir(0.75), uzak: () => g.yakinlastir(1.33), orta: () => g.gorunus('on') };
document.querySelectorAll('[data-gez]').forEach(b => b.addEventListener('click', () => GEZ[b.dataset.gez]()));
document.addEventListener('keydown', e => {
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || e.metaKey || e.ctrlKey) return;
  const t = { ArrowUp: 'yukari', ArrowDown: 'asagi', ArrowLeft: 'sol', ArrowRight: 'sag', '+': 'yakin', '=': 'yakin', '-': 'uzak' }[e.key];
  if (t) { e.preventDefault(); GEZ[t](); }
});
// Komite seçimi modeli de değiştirir: yalnız o komitenin sistemleri açılır ve model o bölgeye yaklaşır.
function komiteUygula() {
  if (sinav || tekrar || ozel || canli) return;
  aktifKonu = null; g.yalniz = null;
  if (C.komite() === 'hepsi') { g.acikSistemler = new Set(KADIN_MI ? [...VARSAYILAN_ACIK, 'ureme', 'sinir', 'deri'] : VARSAYILAN_ACIK); g.guncelle(); g.gorunus('on'); return; }
  const anahtarlar = tumAnahtarlar();
  // Komitede yalnız birkaç yapısı olan sistemler (ör. göz kasları yüzünden bütün kaslar) açılmaz.
  const say = {}; for (const a of anahtarlar) say[yapilar[a].sistem] = (say[yapilar[a].sistem] || 0) + 1;
  const ana = Object.keys(say).filter(x => say[x] >= anahtarlar.length * 0.08);
  if (ana.includes('sindirim')) ana.push('periton'); // sindirim çalışılırken karın zarı da görünür
  g.acikSistemler = new Set(ana); g.guncelle();
  g.odakla(anahtarlar.filter(a => ana.includes(yapilar[a].sistem)).flatMap(a => yapilar[a].parcalar));
}

// ---------- Keşfet ----------
function kesfetCiz() {
  const sayi = {}; parcalar.forEach(p => { sayi[p.sistem] = (sayi[p.sistem] || 0) + 1; });
  const konuBandi = aktifKonu ? `<div class="ek">Yalnız <b>${esc(KONU[aktifKonu].ad)}</b> gösteriliyor. <button id="tumunuGoster" class="ikincil">Tümünü göster</button></div>` : '';
  $('#yan').innerHTML = `
    ${konuBandi}
    <div class="komite-bandi"><b>${esc(seciliSinif().ad)}</b><br>${C.komite() === 'hepsi' ? 'Bütün komiteler. Üstteki "Komite" kutusundan birini seçersen model yalnız o komitenin sistemlerini gösterir.' : `Komite: <b>${esc(seciliKomiteler()[0]?.ad)}</b> · ${tumAnahtarlar().length} yapı. Model bu komitenin sistemlerini gösteriyor.`}</div>
    <h2>Yapı ara</h2>
    <input id="arama" class="arama" type="search" placeholder="Örn. uyluk, femur, mide, kaburga" autocomplete="off" aria-label="Yapı ara">
    <ul id="sonuclar" class="sonuclar"></ul>
    <p id="ekDurum" class="kucuk">${ekYuklendi ? `Ek katman yüklendi: ${ekYuklendi} yapı (sinirler, lenf düğümleri, akciğer lobları, karaciğer, tiroid, eklem bağları ve menisküsler).` : ''}</p>
    <div class="bolum"><h3>Sistemler</h3>
      <ul class="sistemler">${SISTEMLER.map(s => `<li><label><input type="checkbox" data-sistem="${s.id}" ${g.acikSistemler.has(s.id) ? 'checked' : ''}><span class="nokta" style="background:${s.renk}"></span>${esc(s.ad)}</label><button class="mini ${g.saydamSistem.has(s.id) ? 'acik' : ''}" data-saydam="${s.id}" title="Bu sistemi saydam yap: içindekiler görünür ve arkasındaki yapılara tıklanabilir" aria-pressed="${g.saydamSistem.has(s.id)}">saydam</button><span class="kucuk">${sayi[s.id] || 0}</span></li>`).join('')}</ul>
      <div class="satir"><button id="hepsiAc" class="ikincil">Hepsini aç</button><button id="hepsiKapa" class="ikincil">Hepsini kapat</button></div>
      <div class="satir"><button id="gizlileriGoster" class="ikincil" ${g.gizli.size ? '' : 'disabled'}>Gizlediklerimi geri getir (${g.gizli.size})</button></div>
    </div>
    <div class="bolum"><h3>Kesit al</h3>
      <label class="satir"><input id="kesitAcik" type="checkbox" ${kesit.acik ? 'checked' : ''}> Modeli bir düzlemle kes</label>
      <div class="satir"><select id="kesitEksen" aria-label="Kesit yönü">
        <option value="y" ${kesit.eksen === 'y' ? 'selected' : ''}>Yatay kesit (üst yarı kalkar)</option>
        <option value="z" ${kesit.eksen === 'z' ? 'selected' : ''}>Önden kesit (ön kısım kalkar)</option>
        <option value="x" ${kesit.eksen === 'x' ? 'selected' : ''}>Yandan kesit (bir yarı kalkar)</option></select></div>
      <div class="satir"><input id="kesitOran" type="range" min="0" max="1" step="0.005" value="${kesit.oran}" aria-label="Kesitin yeri"></div>
      <label class="satir"><input id="kesitTers" type="checkbox" ${kesit.ters ? 'checked' : ''}> Öbür tarafı göster</label>
      <p id="kesitBilgi" class="kucuk"></p>
    </div>
    <div class="bolum"><h3>Görünüm araçları</h3>
      <label>Parçaları ayır<input id="patlat" type="range" min="0" max="1.2" step="0.02" value="${g.patlama}" aria-label="Parçaları birbirinden ayır" style="width:100%"></label>
      <label class="satir"><input id="odakModu" type="checkbox" ${odakModu ? 'checked' : ''}> Odak: seçtiğim yapı dışındakileri soluklaştır</label>
      <label class="satir"><input id="etiketAcik" type="checkbox" ${etiketAcik ? 'checked' : ''}> Modelde ad etiketlerini göster</label>
      <p class="kucuk">Etiketler, incelediğin konunun yapılarında ya da seçtiğin yapı ile komşularında çıkar.</p>
      <label class="satir"><input id="olcumModu" type="checkbox" ${olcumModu ? 'checked' : ''}> Mesafe ölç (modelde iki noktaya tıkla)</label>
      <p id="olcumDurum" class="kucuk"></p>
      <div class="satir"><button id="goruntuKaydet" class="ikincil">Görüntüyü kaydet</button></div>
    </div>
    <p class="kucuk">${KADIN_MI ? 'Model: HuBMAP İnsan Referans Atlası (yetişkin kadın). Organlar ayrıntılı; iskelet ve kaslar kısmi (omurga, diz, birkaç kas). Tam iskelet ve kaslar için üstten Erkek modeline geç.' : 'Model: BodyParts3D (yetişkin erkek) ve Z-Anatomy ek katmanı (sinirler, lenf düğümleri, akciğer lobları, tiroid, eklem bağları, kulak kemikçikleri). Ek katman asıl modele yaklaşık 1 cm hassasiyetle oturur. Böbreğin iç yapısı ve kadın organları için üstten Kadın modeline geç.'}</p>`;
  $('#tumunuGoster')?.addEventListener('click', () => { baglanmaKapat(false); aktifKonu = null; g.yalniz = null; g.guncelle(); g.gorunus('on'); etiketleriGuncelle(); kesfetCiz(); });
  $('#arama').addEventListener('input', e => aramaYap(e.target.value));
  document.querySelectorAll('[data-saydam]').forEach(b => b.addEventListener('click', () => { const id = b.dataset.saydam; g.saydamSistem.has(id) ? g.saydamSistem.delete(id) : g.saydamSistem.add(id); g.acikSistemler.add(id); g.guncelle(); kesfetCiz(); }));
  $('#patlat').oninput = e => g.patlat(Number(e.target.value));
  $('#odakModu').onchange = e => { odakModu = e.target.checked; g.soluk = odakModu && seciliParca >= 0 ? new Set(yapilar[parcalar[seciliParca].anahtar]?.parcalar ?? [seciliParca]) : null; g.guncelle(); };
  $('#etiketAcik').onchange = e => { etiketAcik = e.target.checked; etiketleriGuncelle(); };
  $('#olcumModu').onchange = e => { olcumModu = e.target.checked; if (!olcumModu) g.olcumTemizle(); $('#olcumDurum').textContent = olcumModu ? 'Modelde ilk noktayı tıkla.' : ''; };
  $('#goruntuKaydet').onclick = () => { const a = document.createElement('a'); a.href = g.goruntu(); a.download = `anatomi-${new Date().toLocaleDateString('sv-SE')}.png`; a.click(); };
  document.querySelectorAll('[data-sistem]').forEach(k => k.addEventListener('change', () => {
    // Bir sistemi elle açıp kapatmak süzgeci kaldırır: işaretli sistem her zaman görünür.
    const suzgecVardi = !!g.yalniz; icKapat(); if (parcali) { g.parcala(parcali, 0); parcali = null; } g.yalniz = null; aktifKonu = null;
    k.checked ? g.acikSistemler.add(k.dataset.sistem) : g.acikSistemler.delete(k.dataset.sistem); g.guncelle();
    if (mod.parcali) parcaliAyarla(true);
    if (suzgecVardi) kesfetCiz();
  }));
  $('#hepsiAc').onclick = () => { baglanmaKapat(false); icKapat(); g.yalniz = null; aktifKonu = null; g.acikSistemler = new Set(SISTEMLER.map(s => s.id).filter(s => s !== 'deri')); g.guncelle(); kesfetCiz(); };
  $('#hepsiKapa').onclick = () => { baglanmaKapat(false); icKapat(); g.yalniz = null; aktifKonu = null; g.acikSistemler = new Set(); g.guncelle(); kesfetCiz(); };
  $('#gizlileriGoster').onclick = () => { g.gizli = new Set(); g.guncelle(); kesfetCiz(); };
  const kesitUygula = () => { kesitBilgiYaz(g.kesitAyarla(kesit.acik, kesit.eksen, kesit.oran, kesit.ters)); };
  if (kesit.acik) kesitUygula(); // panel yeniden çizilince düzlem bilgisi de yazılsın
  $('#kesitAcik').onchange = e => { kesit.acik = e.target.checked; kesitUygula(); };
  $('#kesitEksen').onchange = e => { kesit.eksen = e.target.value; kesit.acik = true; $('#kesitAcik').checked = true; kesitUygula(); };
  $('#kesitOran').oninput = e => { kesit.oran = Number(e.target.value); kesit.acik = true; $('#kesitAcik').checked = true; kesitUygula(); };
  $('#kesitTers').onchange = e => { kesit.ters = e.target.checked; kesitUygula(); };
}

const aramaDizini = parcalar.map(p => ({ i: p.i, metin: norm([p.tr, p.anahtar && TERIM[p.anahtar].tr, p.la, p.en].filter(Boolean).join(' | ')) }));
function aramaYap(q) {
  const n = norm(q.trim()), ul = $('#sonuclar');
  if (n.length < 2) { ul.innerHTML = ''; return; }
  const gorulen = new Set(), sonuc = [];
  for (const d of aramaDizini) {
    if (!d.metin.includes(n)) continue;
    const p = parcalar[d.i], ad = p.tr || p.en;
    if (gorulen.has(ad)) continue; gorulen.add(ad); sonuc.push(p);
    if (sonuc.length >= 40) break;
  }
  sonuc.sort((a, b) => (!!b.tr - !!a.tr) || (norm(a.tr || a.en).indexOf(n) - norm(b.tr || b.en).indexOf(n)));
  ul.innerHTML = sonuc.length ? sonuc.map(p => `<li><button data-parca="${p.i}">${esc(p.tr || p.en)}<small>${esc(SISTEM[p.sistem].ad)}${p.la ? ' · ' + esc(p.la) : p.tr ? '' : ' · Türkçe adı henüz eklenmedi'}</small></button></li>`).join('') : '<li class="kucuk">Sonuç yok. Başka bir yazım dene.</li>';
  ul.querySelectorAll('[data-parca]').forEach(b => b.addEventListener('click', () => parcaSec(Number(b.dataset.parca), true)));
}

// Kas kartı: başlangıç, sonlanma, sinir, damar, görev, klinik.
function kasKarti(a, kisa = false) {
  const k = KAS_BILGI[a]; if (!k) return '';
  const satir = (b, v) => (v ? `<tr><th>${b}</th><td>${esc(v)}</td></tr>` : '');
  return `<table class="kas-tablo">${satir('Başlangıç (origo)', k.origo)}${satir('Sonlanma (insertio)', k.insertio)}${satir('Sinir', k.sinir)}${kisa ? '' : satir('Arter', k.damar)}${satir('Görev', k.gorev)}${kisa ? '' : satir('Klinik', k.klinik)}</table>
    ${kisa ? '' : `<p class="kucuk">${k.belirsiz ? '<span class="durum dogrulanmadi">Bu kasın bilgisi belirsiz; hocana sor.</span> ' : ''}Sinir kök değerleri kitaptan kitaba bir kök değişebilir; fakültendeki ders notunu esas al. ${k.kaynak ? `<a href="${esc(k.kaynak)}" target="_blank" rel="noopener">kaynak</a>` : ''}</p>`}`;
}

// ---------- Seçim ve ayrıntı penceresi ----------
// Bir yapının modelde birden çok parçaya bölünmüş olması anatomik değildir (ör. boş bağırsak 23 parça). Dokunulan parçayla aynı yapının,
// aynı taraftaki bütün parçaları birlikte seçilir; sağ ve sol karşılığı olan yapılarda (ör. uyluk kemiği) yalnız dokunulan taraf seçilir.
// Karaciğer bölümleri (segment) gibi gerçekten ayrı adı olan yapılar ayrı kalır, çünkü her birinin kendi adı (anahtarı) vardır.
const parcaYani = i => (/\bright\b/i.test(parcalar[i].en) ? 'R' : /\bleft\b/i.test(parcalar[i].en) ? 'L' : '');
function yapiParcalari(i) {
  const a = parcalar[i]?.anahtar; if (!a || !yapilar[a]) return [i];
  const t = parcaYani(i); return yapilar[a].parcalar.filter(j => g.meshler[j] && parcaYani(j) === t);
}
function parcaSec(i, odakla) {
  const p = parcalar[i];
  if (!g.acikSistemler.has(p.sistem) && !g.yalniz) { g.acikSistemler.add(p.sistem); if (sekme === 'kesfet') kesfetCiz(); }
  seciliParca = i; const grup = yapiParcalari(i); grup.forEach(j => g.gizli.delete(j)); g.secili = new Set(grup); if (odakModu) g.soluk = new Set(yapilar[p.anahtar]?.parcalar ?? [i]); g.guncelle(); etiketleriGuncelle();
  if (odakla) g.odakla(grup);
  const et = $('#secimEtiketi'); et.hidden = false; $('#secimAd').textContent = p.tr || p.en; $('#sahneGizle').hidden = false;
  cekmeceAc(i);
}
// İçi boş organlar ve büyük damarlar: yalnız bunlarda "İçini aç" düğmesi çıkar.
const ICI_BOS = /stomach|ventricle|atrium|trachea|bronchus|urinary bladder|oesophagus|esophagus|duoden|jejun|ileum|colon|caecum|cecum|rectum|aorta|vena cava|pulmonary (trunk|artery|vein)|uterus|vagina|gallbladder|larynx|pharynx/i;
// Adında bu organlar geçen ama içi boş olmayan yapılar (bağ, iz, sinir, lenf düğümü, komşu damar).
const ICI_BOS_DEGIL = /ligament|impression|pancreaticoduodenal|lymph|nerve|plexus|muscle/i;
let icAcik = null;
function icKapat() { if (!icAcik) return; icAcik = null; g.yalniz = null; g.icAc([]); }
function secimiBirak() { seciliParca = -1; g.secili = new Set(); if (odakModu) g.soluk = null; g.guncelle(); etiketleriGuncelle(); $('#secimEtiketi').hidden = true; cekmeceKapat(); }

function dogrulamaRozeti(a) {
  const d = a && DOGRULAMA[a];
  if (d?.durum === 'dogrulandi') return `<span class="durum dogrulandi">Kaynakla kontrol edildi</span>${d.kaynak ? ` <a class="kucuk" href="${esc(d.kaynak)}" target="_blank" rel="noopener">kaynak</a>` : ''}`;
  if (a?.startsWith('z:') && !d) return '<span class="durum dogrulanmadi" title="Bu ad Z-Anatomy projesinin terim tablosundan geliyor; burada ayrıca karşılaştırılmadı">Ad: Z-Anatomy terim tablosu (ayrıca kontrol edilmedi)</span>';
  if (d?.durum === 'ta_disi') return `<span class="durum dogrulandi" title="Uluslararası terim listesinde (Terminologia Anatomica) ayrı bir adı yok; ad, yapıyı tanımlayan Latince bir ifadedir">Tanımlayıcı ad (resmî listede yok)</span>`;
  if (d?.durum === 'belirsiz') return '<span class="durum dogrulanmadi" title="Kaynaklar yetersiz ya da çelişkili">Belirsiz: hocana sor</span>';
  return '<span class="durum dogrulanmadi" title="Bu bilgi henüz bir kaynakla karşılaştırılmadı">Doğrulanmadı</span>';
}

// Bir parçanın yüzeyinden seyrek noktalar alır (komşuluk hesabı için).
const ornekCache = new Map();
function ornekNoktalar(i, adet = 300) {
  if (ornekCache.has(i)) return ornekCache.get(i);
  const p = g.meshler[i]?.geometry.attributes.position; if (!p) return [];
  const adim = Math.max(1, Math.floor(p.count / adet)), n = [];
  for (let k = 0; k < p.count; k += adim) n.push([p.getX(k), p.getY(k), p.getZ(k)]);
  ornekCache.set(i, n); return n;
}
function enYakin(i, j) {
  const A = ornekNoktalar(i), B = ornekNoktalar(j); let en = Infinity;
  for (const a of A) for (const b of B) { const d = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2; if (d < en) en = d; }
  return Math.sqrt(en);
}
// Komşular: yüzeyleri birbirine 1,5 cm'den yakın olan yapılar; yakın olan ve aynı sistemden olan önce.
function komsular(i) {
  const [a0, a1] = parcalar[i].bounds, pay = 0.015, aday = [];
  for (const q of parcalar) {
    if (q.i === i || q.sistem === 'deri') continue;
    const [b0, b1] = q.bounds;
    if (b0[0] > a1[0] + pay || b1[0] < a0[0] - pay || b0[1] > a1[1] + pay || b1[1] < a0[1] - pay || b0[2] > a1[2] + pay || b1[2] < a0[2] - pay) continue;
    const d = enYakin(i, q.i);
    if (d < pay) aday.push([q, d + (q.sistem === parcalar[i].sistem ? 0 : 0.004) + (q.tr ? 0 : 0.006)]);
  }
  aday.sort((x, y) => x[1] - y[1]);
  const gorulen = new Set([parcalar[i].tr || parcalar[i].en]), sonuc = [];
  for (const [q] of aday) { const ad = q.tr || q.en; if (gorulen.has(ad)) continue; gorulen.add(ad); sonuc.push(q); if (sonuc.length >= 8) break; }
  return sonuc;
}

let oncekiOdak = null;
// ---------- Arter dalları: her arterin çıktığı arter ve kendi dalları ----------
let arterUstleri = null; // parça -> çıktığı arterin parçaları (bir kez hesaplanır; ek katman yüklenince yenilenir)
function arterUstleriHesapla() {
  if (arterUstleri && arterUstleri.boy === parcalar.length) return arterUstleri.harita;
  const harita = new Map();
  for (const p of parcalar) {
    if (p.sistem !== 'atardamar') continue;
    const ad = arterUstAdi(p.en); if (!ad) continue;
    const yan = parcaYani(p.i) === 'L' ? 'sol' : parcaYani(p.i) === 'R' ? 'sag' : '';
    harita.set(p.i, { ad, parcalar: arterBul(ad, parcalar, yan).filter(q => q.anahtar !== p.anahtar).map(q => q.i) });
  }
  arterUstleri = { boy: parcalar.length, harita };
  return harita;
}
const arterAdi = j => (C.dil() === 'la' ? parcalar[j].la : parcalar[j].tr) || parcalar[j].tr || parcalar[j].en;
const yalinAd = en => { const d = DAMAR_KAS[en.toLowerCase().replace(/\b(left|right) /g, '')]; return d ? (C.dil() === 'la' ? d.la : d.tr) : en.charAt(0).toUpperCase() + en.slice(1); };
// Aortadan seçili artere kadar olan yol: [{ ad, i (modelde yoksa -1) }], en üstteki başta.
function arterYolu(i) {
  const harita = arterUstleriHesapla(), yol = [], gorulen = new Set([parcalar[i].anahtar]);
  let su = i, ad = null;
  for (let n = 0; n < 12; n++) {
    let ust = su >= 0 ? harita.get(su) : null;
    if (!ust && ad) { const sonraki = arterUstAdi(ad); if (!sonraki) break; const bul = arterBul(sonraki, parcalar, ''); ust = { ad: sonraki, parcalar: bul.map(q => q.i) }; }
    if (!ust) break;
    const j = ust.parcalar[0] ?? -1;
    if (j >= 0 && gorulen.has(parcalar[j].anahtar + parcaYani(j))) break;
    if (j >= 0) gorulen.add(parcalar[j].anahtar + parcaYani(j));
    yol.unshift({ ad: j >= 0 ? arterAdi(j) : yalinAd(ust.ad), i: j });
    su = j; ad = ust.ad;
  }
  return yol;
}
// Seçili arterden doğrudan çıkan dallar (aynı yapı tek düğme).
function arterDallari(i) {
  const harita = arterUstleriHesapla(), ben = new Set(yapiParcalari(i)), dallar = new Map();
  for (const [j, ust] of harita) if (ust.parcalar.some(k => ben.has(k))) { const anahtar = parcalar[j].anahtar + parcaYani(j); if (!dallar.has(anahtar)) dallar.set(anahtar, j); }
  const adla = new Map(); for (const j of dallar.values()) if (!adla.has(arterAdi(j))) adla.set(arterAdi(j), j); // aynı adı taşıyan iki parça tek düğme
  return [...adla.values()].sort((a, b) => arterAdi(a).localeCompare(arterAdi(b), 'tr'));
}
function cekmeceAc(i) {
  const p = parcalar[i], y = p.anahtar ? yapilar[p.anahtar] : null, s = SISTEM[p.sistem];
  oncekiOdak = oncekiOdak || document.activeElement;
  const latinBaslik = C.dil() === 'la' && (p.la || y?.la);
  $('#cekmeceBaslik').textContent = latinBaslik ? (p.la || y.la) : (p.tr || p.en);
  const ks = komsular(i);
  $('#cekmeceIcerik').innerHTML = y ? `
    <p class="latince">${latinBaslik ? `Türkçesi: ${esc(p.tr)}` : `Latincesi: ${esc(p.la || y.la)}`}</p>
    <p><span class="nokta" style="display:inline-block;vertical-align:middle;background:${s.renk}"></span> ${esc(s.ad)}</p>
    ${dogrulamaRozeti(p.anahtar)}
    ${KAS_BILGI[p.anahtar] ? `<h3>Kas bilgisi</h3>${kasKarti(p.anahtar)}` : `<h3>Görevi</h3><p>${esc(y.fn)}</p>`}
    ${p.ek ? `<p class="ek">${esc(p.ek)}</p>` : ''}
    ${y.ip ? `<div class="ipucu"><b>Hafıza ipucu:</b> ${esc(y.ip)}</div>` : ''}
    <p class="kucuk">İngilizce kaynak adı: ${esc(p.en)}</p>`
    : `<p><span class="durum dogrulanmadi">Türkçe adı henüz eklenmedi</span></p>
    <p><span class="nokta" style="display:inline-block;vertical-align:middle;background:${s.renk}"></span> ${esc(s.ad)}</p>
    <h3>Bu sistem ne işe yarar?</h3><p>${esc(s.aciklama)}</p>
    <p class="kucuk">Bu yapı modeldeki İngilizce adıyla gösteriliyor. Türkçe karşılığı ve görevi sonraki aşamada eklenecek.</p>`;
  if (p.sistem === 'atardamar') {
    const yol = arterYolu(i), dallar = arterDallari(i), dugme = (j, ad) => j >= 0 ? `<button data-komsu="${j}">${esc(ad)}</button>` : `<span class="yok" title="Bu arter modelde ayrı bir parça olarak yok">${esc(ad)}</span>`;
    $('#cekmeceIcerik').innerHTML += `
    <h3>Dal ilişkisi</h3>
    <p class="kucuk">Çıktığı yol (yukarıdan aşağı):</p>
    <div class="arter-yolu">${yol.length ? yol.map(x => dugme(x.i, x.ad)).join('<span class="ok">›</span>') + `<span class="ok">›</span><b>${esc(arterAdi(i))}</b>` : '<span class="kucuk">Doğrudan kalpten çıkar.</span>'}</div>
    <p class="kucuk">Bu arterden çıkan dallar (modelde olanlar):</p>
    <div class="komsular">${dallar.length ? dallar.map(j => dugme(j, arterAdi(j))).join('') : '<span class="kucuk">Modelde bu arterden çıkan dal yok.</span>'}</div>
    ${yol.some(x => x.i >= 0) || dallar.length ? '<div class="dugme-satiri"><button id="dalAgaci" class="ikincil">Dal ağacını göster</button></div>' : ''}
    <p class="kucuk">Gri yazılanlar modelde ayrı parça olarak bulunmuyor.</p>`;
  }
  $('#cekmeceIcerik').innerHTML += `
    <h3>Komşu yapılar</h3>
    <div class="komsular">${ks.length ? ks.map(q => `<button data-komsu="${q.i}">${esc(q.tr || q.en)}</button>`).join('') : '<span class="kucuk">Yakında başka yapı yok.</span>'}</div>
    <div class="dugme-satiri">
      <button id="yakinlas" class="ikincil">Yakınlaştır</button>
      <button id="yalnizBu" class="ikincil">${g.yalniz?.size === 1 && g.yalniz.has(i) ? 'Hepsini göster' : 'Yalnız bunu göster'}</button>
      <button id="gizle" class="ikincil">Bunu gizle</button>
      <button id="soluklastir" class="ikincil">${yapiParcalari(i).every(j => g.solukParca.has(j)) ? 'Soluklaştırmayı kaldır' : 'Soluklaştır'}</button>
      ${p.sistem === 'kas' && !KADIN_MI ? `<button id="baglantiDugme" class="ikincil">${baglanma?.kas === p.anahtar ? 'Bağlanma yerlerini kapat' : 'Bağlanma yerleri'}</button>` : ''}
      <button id="parcalaDugme" class="ikincil">${parcali ? 'Topla' : 'Parçalarına ayır'}</button>
      ${(ICI_BOS.test(p.en) && !ICI_BOS_DEGIL.test(p.en)) || p.sistem === 'kalp' ? `<button id="icAc" class="ikincil">${icAcik ? 'İçini kapat' : 'İçini aç'}</button>` : ''}
    </div>
    ${p.anahtar ? `<div class="dugme-satiri"><button id="baglantiKopyala" class="ikincil">Bağlantıyı kopyala</button><a class="dugme ikincil" target="_blank" rel="noopener" href="https://claude.ai/new?q=${encodeURIComponent(`Tıp fakültesi öğrencisiyim. ${p.la || y.la} (${p.tr}) yapısını Türkçe anlat: yeri, komşulukları, damarı ve siniri, klinik önemi. Yapı adlarını Latince yaz. Sonunda beni sınamak için 3 kısa soru sor.`)}">Yapay zekâya sor</a></div><p id="baglantiDurum" class="kucuk"></p>` : ''}
    ${p.anahtar ? `<h3>Benim notum</h3><textarea id="notAlani" class="not" placeholder="Bu yapıyla ilgili kendi notunu yaz. Kendiliğinden kaydedilir.">${esc(C.notAl(p.anahtar))}</textarea><p id="notDurum" class="kucuk"></p>` : ''}`;
  $('#cekmeceIcerik').querySelectorAll('[data-komsu]').forEach(b => b.addEventListener('click', () => parcaSec(Number(b.dataset.komsu), true)));
  $('#yakinlas').onclick = () => g.odakla(yapiParcalari(i));
  // Dal ağacı: seçili arter, aortaya kadar üstündeki arterler ve kendi dalları birlikte gösterilir.
  if ($('#dalAgaci')) $('#dalAgaci').onclick = () => {
    const ustler = arterYolu(i).filter(x => x.i >= 0).flatMap(x => yapiParcalari(x.i)), dallar = arterDallari(i).flatMap(j => yapiParcalari(j)), ben = yapiParcalari(i);
    g.acikSistemler.add('atardamar'); g.yalniz = new Set([...ustler, ...ben, ...dallar]); aktifKonu = null; g.secili = new Set(ben); g.guncelle(); g.odakla([...ben, ...dallar]);
    $('#secimAd').textContent = `${p.tr || p.en}: üstündeki arterler ve ${arterDallari(i).length} dalı gösteriliyor`; $('#secimEtiketi').hidden = false; $('#sahneGizle').hidden = true;
  };
  $('#soluklastir').onclick = () => { const grup = yapiParcalari(i), hepsi = grup.every(j => g.solukParca.has(j)); grup.forEach(j => (hepsi ? g.solukParca.delete(j) : g.solukParca.add(j))); g.guncelle(); cekmeceAc(i); };
  if ($('#baglantiDugme')) $('#baglantiDugme').onclick = () => { if (baglanma?.kas === p.anahtar) baglanmaKapat(); else { cekmeceKapat(); baglanmaAc(i); return; } cekmeceAc(i); };
  if ($('#icAc')) $('#icAc').onclick = () => {
    if (icAcik) { icKapat(); return cekmeceAc(i); }
    // Organ bütün olarak açılır (ör. kalbin bütün odacıkları); önünü kapatmasın diye diğer yapılar gizlenir.
    // Kalp, rahim ve bağırsaklar bütün organ olarak açılır; diğerlerinde (damar, safra kesesi...) yalnız seçilen yapı açılır.
    const butunAcilir = new Set(['kalp', 'rahim', 'kalin-bagirsak', 'ince-bagirsak']);
    const grup = g.patlamaGrubu(i), yan = e => /\bright\b/i.exec(e)?.[0] ?? /\bleft\b/i.exec(e)?.[0] ?? '';
    icAcik = parcalar.filter(q => g.meshler[q.i] && (butunAcilir.has(grup) ? g.patlamaGrubu(q.i) === grup : q.anahtar === p.anahtar && yan(q.en) === yan(p.en))).map(q => q.i);
    g.secili = new Set(); g.yalniz = new Set(icAcik); g.icAc(icAcik, grup === 'kalp' || grup === 'rahim'); g.gorunus('on', false); g.sigdir(icAcik); cekmeceKapat();
    $('#secimAd').textContent = `${$('#cekmeceBaslik').textContent}: ön yarısı kesildi. Kapatmak için yapıya dokun, "İçini kapat" de.`; $('#sahneGizle').hidden = true; $('#secimEtiketi').hidden = false;
  };
  $('#parcalaDugme').onclick = () => {
    if (parcali) { g.parcala(parcali, 0); parcali = null; g.yalniz = null; g.guncelle(); etiketleriGuncelle(); g.odakla([i]); return cekmeceAc(i); }
    // Seçilen yapının çevresindeki aynı sistemden yapılar birlikte ayrılır (ör. kalbin odacıkları, el bileği kemikleri).
    const c = g.merkezHam(i), b = parcalar[i].bounds, cap = Math.max(0.07, Math.hypot(b[1][0] - b[0][0], b[1][1] - b[0][1], b[1][2] - b[0][2]) * 0.9);
    parcali = parcalar.filter(q => q.sistem === p.sistem && g.meshler[q.i] && g.merkezHam(q.i).distanceTo(c) < cap).map(q => q.i).slice(0, 80);
    g.yalniz = new Set(parcali); g.guncelle(); g.parcala(parcali, 1.15);
    g.etiketle(parcali.slice(0, 28).map(n => ({ i: n, metin: (C.dil() === 'la' ? parcalar[n].la : parcalar[n].tr) || parcalar[n].tr || parcalar[n].en })));
    setTimeout(() => g.odakla(parcali), 700); cekmeceKapat(); // pencere modeli kapatmasın; toplamak için bir parçaya dokunup "Topla" denir
  };
  if ($('#baglantiKopyala')) $('#baglantiKopyala').onclick = async () => {
    const adres = `${location.origin}${location.pathname}?model=${C.cinsiyet()}&yapi=${encodeURIComponent(p.anahtar)}`;
    try { await navigator.clipboard.writeText(adres); $('#baglantiDurum').textContent = 'Bağlantı kopyalandı; arkadaşına gönderebilirsin.'; } catch { $('#baglantiDurum').textContent = adres; }
  };
  $('#yalnizBu').onclick = () => { baglanmaKapat(false); const grup = yapiParcalari(i); g.yalniz = g.yalniz?.size === grup.length && grup.every(j => g.yalniz.has(j)) ? null : new Set(grup); aktifKonu = null; g.guncelle(); g.odakla(grup); cekmeceAc(i); };
  $('#gizle').onclick = () => { yapiGizle(i); secimiBirak(); if (sekme === 'kesfet') kesfetCiz(); };
  const notAlani = $('#notAlani');
  if (notAlani) { let zaman; notAlani.addEventListener('input', () => { clearTimeout(zaman); zaman = setTimeout(() => { C.notYaz(p.anahtar, notAlani.value); $('#notDurum').textContent = 'Kaydedildi.'; if (sekme === 'notlar') notlarCiz(); }, 400); }); }
  $('#cekmece').hidden = false; document.body.classList.add('cekmece-acik');
  $('#cekmeceKapat').focus({ preventScroll: true });
}
function cekmeceKapat() {
  if ($('#cekmece').hidden) return;
  $('#cekmece').hidden = true; document.body.classList.remove('cekmece-acik');
  if (oncekiOdak && document.contains(oncekiOdak)) oncekiOdak.focus({ preventScroll: true });
  oncekiOdak = null;
}
$('#cekmeceKapat').addEventListener('click', () => { cekmeceKapat(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#cekmece').hidden) cekmeceKapat(); });

// ---------- Konu gösterimi ----------
function konuGoster(id) {
  const k = konular().find(x => x.id === id); if (!k) return;
  sahneSifirla(); aktifKonu = id;
  const ps = k.liste.flatMap(a => yapilar[a].parcalar);
  g.yalniz = new Set(ps); g.secili = new Set(); g.guncelle(); g.odakla(ps); etiketleriGuncelle();
}

// ---------- Sınav ----------
function sinavCiz(seciliKonu) {
  if (sinav) return sinavYanCiz();
  if (ozel) return ozelYanCiz();
  const ks = konular();
  const vakaSayisi = vakaListesi().length;
  $('#yan').innerHTML = `
    <h2>Sınav</h2>
    <p class="kucuk">İki tür soru var. <b>Bunu bul:</b> adı verilen yapıyı modelde tıklarsın. <b>Bunun adı ne?</b> Turuncu yapının adını seçersin. Yanlış yaptığın yapılar sonraki sınavlarda ve tekrar kartlarında daha sık gelir.</p>
    <label>Konu<select id="sinavKonu" class="tam">
      ${ks.map(k => `<option value="${k.id}" ${k.id === (seciliKonu || aktifKonu) ? 'selected' : ''}>${esc(k.ad)} (${k.liste.length} yapı)</option>`).join('')}
      <option value="hepsi">Bütün konular karışık</option></select></label>
    <div class="satir"><label>Soru sayısı <select id="sinavAdet"><option>5</option><option selected>10</option><option>20</option></select></label></div>
    <div class="satir"><label>Soru türü <select id="sinavTur"><option value="karisik">Karışık</option><option value="bul">Yalnız "Bunu bul"</option><option value="ad">Yalnız "Bunun adı ne?"</option></select></label></div>
    <button id="sinavBasla" style="width:100%">Sınavı başlat</button>
    <div class="bolum"><h3>Pratik sınav (istasyonlu)</h3>
      <p class="kucuk">Fakültedeki pratik sınav gibi: her istasyonda bir yapı turuncu gösterilir, süre dolmadan <b>Latince adını yazarsın</b>. Süre bitince kendiliğinden sonraki istasyona geçilir; doğru cevaplar ancak sınavın sonunda gösterilir. "M.", "A.", "V.", "N." gibi kısaltmalar kabul edilir.</p>
      <label>Konu<select id="pratikKonu" class="tam"><option value="hepsi">Seçili komitenin bütün konuları</option>${ks.map(k => `<option value="${k.id}">${esc(k.ad)}</option>`).join('')}</select></label>
      <div class="satir"><label>İstasyon <select id="pratikAdet"><option>10</option><option selected>20</option><option>30</option></select></label>
      <label>Süre <select id="pratikSure"><option value="30" selected>30 sn</option><option value="45">45 sn</option><option value="60">60 sn</option></select></label></div>
      <button id="pratikBasla" style="width:100%">Pratik sınavı başlat</button></div>
    <div class="bolum"><h3>Klinik vaka soruları</h3>
      <p class="kucuk">Kısa bir hasta öyküsü okursun ve hangi yapının etkilendiğini seçersin. Cevaptan sonra açıklama çıkar ve yapı modelde gösterilir. Seçili sınıf ve komite için <b>${vakaSayisi}</b> vaka var${KADIN_MI ? '' : ' (kadın organlarıyla ilgili vakalar Kadın modelinde çıkar)'}.</p>
      <div class="satir"><label>Vaka sayısı <select id="vakaAdet"><option>5</option><option selected>10</option><option value="999">Hepsi</option></select></label></div>
      <button id="vakaBasla" style="width:100%" ${vakaSayisi ? '' : 'disabled'}>Vakaları başlat</button></div>`;
  $('#pratikBasla').onclick = () => { const kid = $('#pratikKonu').value; pratikBaslat(kid === 'hepsi' ? tumAnahtarlar() : ks.find(k => k.id === kid).liste, Number($('#pratikAdet').value), Number($('#pratikSure').value)); };
  $('#vakaBasla').onclick = () => vakaBaslat(Number($('#vakaAdet').value));
  $('#sinavBasla').onclick = () => {
    const kid = $('#sinavKonu').value;
    const liste = kid === 'hepsi' ? tumAnahtarlar() : ks.find(k => k.id === kid).liste;
    sinavBaslat(liste, Number($('#sinavAdet').value), $('#sinavTur').value, kid);
  };
}

function sinavBaslat(liste, adet, tur, konuId) {
  sahneSifirla();
  g.etiketle([]); g.olcumTemizle(); ustuneGel.hidden = true;
  const secilen = C.soruSec(liste, adet);
  sinav = { liste, konuId, sorular: secilen.map(a => ({ a, tip: tur === 'karisik' ? (Math.random() < 0.5 ? 'bul' : 'ad') : tur })), sira: 0, dogru: 0, yanlislar: [], cevaplandi: false };
  cekmeceKapat(); $('#secimEtiketi').hidden = true;
  const ps = liste.flatMap(a => yapilar[a].parcalar);
  g.yalniz = new Set(ps); g.secili = new Set(); g.soru = new Set(); g.guncelle(); g.odakla(ps);
  sinavYanCiz(); soruGoster();
}

function sinavYanCiz() {
  $('#yan').innerHTML = `<h2>Sınav sürüyor</h2>
    <p>Soru ${Math.min(sinav.sira + 1, sinav.sorular.length)} / ${sinav.sorular.length} · Doğru: ${sinav.dogru}</p>
    <div class="ilerleme-cubugu"><div style="width:${(100 * sinav.sira) / sinav.sorular.length}%"></div></div>
    <p class="kucuk">Model yalnız bu sınavın yapılarını gösteriyor. Döndürüp yakınlaştırabilirsin.</p>
    <button id="sinavCik" class="ikincil" style="width:100%">Sınavı bırak</button>`;
  $('#sinavCik').onclick = () => sinavBitir(false);
}

function secenekUret(a, liste) {
  const dogru = ad(a);
  let havuz = [...new Set(liste.filter(x => x !== a).map(ad))];
  if (havuz.length < 3) havuz = [...new Set(Object.values(yapilar).filter(y => y.sistem === yapilar[a].sistem && y.anahtar !== a).map(y => ad(y.anahtar)))];
  return C.karistir([dogru, ...C.karistir(havuz.filter(h => h !== dogru)).slice(0, 3)]);
}

function soruGoster() {
  const k = $('#soruKarti');
  if (sinav.sira >= sinav.sorular.length) return sinavSonuc();
  const { a, tip } = sinav.sorular[sinav.sira];
  sinav.cevaplandi = false; g.secili = new Set();
  const ust = `<div class="ust-bilgi"><span>Soru ${sinav.sira + 1} / ${sinav.sorular.length}</span><span>${tip === 'bul' ? 'Bunu bul' : 'Bunun adı ne?'}</span></div>`;
  if (tip === 'ad') {
    g.soru = new Set(yapilar[a].parcalar); g.guncelle(); g.odakla(yapilar[a].parcalar);
    k.innerHTML = `${ust}<p class="soru">Turuncu renkli yapının adı ne?</p><div class="secenekler">${secenekUret(a, sinav.liste).map(s => `<button data-secenek="${esc(s)}">${esc(s)}</button>`).join('')}</div><div id="geri"></div>`;
    k.querySelectorAll('[data-secenek]').forEach(b => b.addEventListener('click', () => sinavAdCevap(b)));
  } else {
    g.soru = new Set(); g.guncelle();
    k.innerHTML = `${ust}<p class="soru">Modelde bul: <span style="color:var(--ana)">${esc(ad(a))}</span></p><p class="kucuk">Bulduğun yapının üstüne tıkla. Gerekirse modeli döndür.</p><div class="dugme-satiri"><button id="bilmiyorum" class="ikincil">Bilmiyorum, göster</button></div><div id="geri"></div>`;
    $('#bilmiyorum').onclick = () => sinavBulCevap(-2);
  }
  k.hidden = false;
}

function sinavAdCevap(b) {
  if (sinav.cevaplandi) return;
  const { a } = sinav.sorular[sinav.sira], dogru = b.dataset.secenek === ad(a);
  $('#soruKarti').querySelectorAll('[data-secenek]').forEach(x => { if (x.dataset.secenek === ad(a)) x.classList.add('dogru'); });
  if (!dogru) b.classList.add('yanlis');
  cevapSonu(dogru, dogru ? 'Doğru!' : `Doğrusu: ${ad(a)}`);
}

function sinavBulCevap(i) {
  const { a } = sinav.sorular[sinav.sira];
  if (i === -1) return; // boşluğa tıklandı
  const dogru = i >= 0 && parcalar[i].anahtar === a;
  g.secili = dogru ? new Set(yapilar[a].parcalar) : new Set();
  g.soru = dogru ? new Set() : new Set(yapilar[a].parcalar); g.guncelle();
  if (!dogru) g.odakla(yapilar[a].parcalar);
  const tiklanan = i >= 0 ? (parcalar[i].tr || parcalar[i].en) : '';
  cevapSonu(dogru, dogru ? 'Doğru! Buldun.' : i >= 0 ? `Tıkladığın yapı: ${tiklanan}. Doğru cevap turuncu renkte gösteriliyor.` : 'Doğru cevap turuncu renkte gösteriliyor.');
}

function cevapSonu(dogru, metin) {
  const { a, tip } = sinav.sorular[sinav.sira];
  sinav.cevaplandi = true;
  $('#bilmiyorum')?.parentElement.remove();
  C.cevapla(`${tip}:${a}`, dogru ? 'dogru' : 'yanlis');
  if (dogru) sinav.dogru++; else sinav.yanlislar.push(sinav.sorular[sinav.sira]);
  const y = yapilar[a];
  $('#geri').innerHTML = `<div class="geri-bildirim ${dogru ? 'dogru' : 'yanlis'}">${esc(metin)}</div>
    <p class="kucuk" style="margin:.4rem 0 0"><b>${esc(ad(a))}</b> (${esc(ikinciAd(a))}): ${esc(y.fn)}</p>
    ${y.ip ? `<p class="kucuk" style="margin:.2rem 0 0">İpucu: ${esc(y.ip)}</p>` : ''}
    <div class="dugme-satiri"><button id="sonraki">${sinav.sira + 1 < sinav.sorular.length ? 'Sonraki soru' : 'Sonucu gör'}</button></div>`;
  $('#sonraki').onclick = () => { sinav.sira++; sinavYanCiz(); soruGoster(); };
  $('#sonraki').focus();
  sinavYanCiz();
}

function sinavSonuc() {
  g.soru = new Set(); g.secili = new Set(); g.guncelle();
  const toplam = sinav.sorular.length, y = sinav.yanlislar;
  $('#soruKarti').innerHTML = `<p class="soru">Sınav bitti: ${sinav.dogru} / ${toplam} doğru</p>
    ${y.length ? `<p>Yanlış yaptıkların (tekrar kartlarında daha sık gelecek):</p><ul>${[...new Set(y.map(s => s.a))].map(a => `<li>${esc(ad(a))}</li>`).join('')}</ul>` : '<p>Hepsi doğru, harika!</p>'}
    <div class="dugme-satiri">${y.length ? '<button id="yanlislariTekrar">Yanlışları yeniden sor</button>' : ''}<button id="yeniSinav" class="ikincil">Yeni sınav</button><button id="sinavKapat" class="ikincil">Kapat</button></div>`;
  $('#yanlislariTekrar')?.addEventListener('click', () => { const s = sinav; sinav = { ...s, sorular: C.karistir(s.yanlislar), sira: 0, dogru: 0, yanlislar: [] }; sinavYanCiz(); soruGoster(); });
  $('#yeniSinav').onclick = () => { const kid = sinav.konuId; sinavBitir(false); sinavCiz(kid); };
  $('#sinavKapat').onclick = () => sinavBitir(true);
}

function sinavBitir(cizilsin = true) {
  sinav = null; $('#soruKarti').hidden = true;
  g.soru = new Set(); g.secili = new Set(); g.yalniz = null; aktifKonu = null; g.guncelle(); if (mod.parcali) parcaliEtiketle();
  if (cizilsin) yanCiz();
}

// ---------- Pratik sınav (istasyonlu, yazarak) ----------
const KISALTMA = [[/\bmm\./g, 'musculi '], [/\bm\./g, 'musculus '], [/\baa\./g, 'arteriae '], [/\ba\./g, 'arteria '], [/\bvv\./g, 'venae '], [/\bv\./g, 'vena '], [/\bnn\./g, 'nervi '], [/\bn\./g, 'nervus '], [/\bligg?\./g, 'ligamentum '], [/\bgl\./g, 'glandula '], [/\bproc\./g, 'processus '], [/\br\./g, 'ramus '], [/\btr\./g, 'truncus ']];
// Karşılaştırma için sadeleştirir: küçük harf, kısaltmaları açar, parantez içini ve sağ/sol sözcüklerini atar.
function sade(m, yonTut = false) {
  let x = norm(m);
  for (const [re, y] of KISALTMA) x = x.replace(re, y);
  x = x.replace(/\([^)]*\)/g, ' ');
  if (!yonTut) x = x.replace(/\b(dexter|dextra|dextrum|dextri|sinister|sinistra|sinistrum|sinistri|sol|sag|left|right)\b/g, ' ');
  return x.replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function uzaklik(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
// Yazılan cevabı değerlendirir: 'dogru' | 'yazim' (küçük yazım hatası) | 'yanlis' | 'bos'.
function cevapPuani(cevap, a) {
  // Adında yön geçen yapılarda (ör. Ventriculus sinister) yön de doğru yazılmalıdır.
  const yonlu = /\b(dext|sinist)/i.test(TERIM[a].la);
  const c = sade(cevap, yonlu); if (!c) return 'bos';
  const adaylar = [...new Set([TERIM[a].la, TERIM[a].tr, ...yapilar[a].parcalar.map(i => parcalar[i].la)].filter(Boolean).flatMap(x => x.split(' / ')).map(x => sade(x, yonlu)).filter(Boolean))];
  let en = 'yanlis';
  for (const d of adaylar) {
    const u = uzaklik(c, d);
    if (u <= Math.max(1, Math.round(d.length * 0.1))) return 'dogru';
    if (u <= Math.round(d.length * 0.25)) en = 'yazim';
  }
  return en;
}
function zil() { try { const ac = new (window.AudioContext || window.webkitAudioContext)(), o = ac.createOscillator(), k = ac.createGain(); o.frequency.value = 880; k.gain.value = 0.08; o.connect(k); k.connect(ac.destination); o.start(); o.stop(ac.currentTime + 0.18); } catch { /* ses yoksa sessiz geç */ } }

function pratikBaslat(liste, adet, sure) {
  sahneSifirla();
  g.etiketle([]); g.olcumTemizle(); ustuneGel.hidden = true;
  const havuz = liste.filter(a => yapilar[a] && !['ta_disi', 'belirsiz'].includes(DOGRULAMA[a]?.durum));
  const secilen = C.karistir(C.soruSec(havuz, adet));
  if (!secilen.length) return;
  ozel = { tip: 'pratik', ist: secilen.map(a => ({ a, cevap: '', ek: '' })), sira: 0, sure, kalan: sure, zaman: null, bitti: false, havuz };
  cekmeceKapat(); $('#secimEtiketi').hidden = true;
  g.yalniz = new Set(havuz.flatMap(a => yapilar[a].parcalar)); g.secili = new Set();
  ozelYanCiz(); istasyonGoster();
}
function istasyonGoster() {
  const k = $('#soruKarti'), s = ozel.ist[ozel.sira], y = yapilar[s.a];
  g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(tekTaraf(y.parcalar));
  ozel.kalan = ozel.sure;
  k.innerHTML = `<div class="ust-bilgi"><span>İstasyon ${ozel.sira + 1} / ${ozel.ist.length}</span><span id="pratikSaniye">${ozel.kalan} sn</span></div>
    <div class="ilerleme-cubugu"><div id="pratikCubuk" style="width:100%"></div></div>
    <p class="soru">Turuncu yapının Latince adını yaz</p>
    <input id="pratikCevap" class="arama" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Örn. M. biceps brachii" aria-label="Yapının Latince adı">
    ${KAS_BILGI[s.a] ? '<input id="pratikEk" class="arama" style="margin-top:6px" type="text" autocomplete="off" spellcheck="false" placeholder="Ek soru: bu kasın siniri? (isteğe bağlı)" aria-label="Ek soru: kasın siniri">' : ''}
    <div class="dugme-satiri"><button id="pratikSonraki">${ozel.sira + 1 < ozel.ist.length ? 'Sonraki istasyon (Enter)' : 'Sınavı bitir (Enter)'}</button></div>`;
  k.hidden = false;
  const ileri = () => { s.cevap = $('#pratikCevap').value; s.ek = $('#pratikEk')?.value || ''; clearInterval(ozel.zaman); ozel.sira++; ozel.sira < ozel.ist.length ? (ozelYanCiz(), istasyonGoster()) : pratikSonuc(); };
  $('#pratikSonraki').onclick = ileri;
  k.querySelectorAll('input').forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') ileri(); }));
  $('#pratikCevap').focus({ preventScroll: true });
  clearInterval(ozel.zaman);
  ozel.zaman = setInterval(() => {
    if (!ozel || ozel.tip !== 'pratik') return;
    ozel.kalan--;
    const sn = $('#pratikSaniye'), cb = $('#pratikCubuk');
    if (sn) sn.textContent = `${Math.max(0, ozel.kalan)} sn`;
    if (cb) { cb.style.width = `${(100 * Math.max(0, ozel.kalan)) / ozel.sure}%`; if (ozel.kalan <= 5) cb.style.background = 'var(--hata)'; }
    if (ozel.kalan <= 0) { zil(); ileri(); }
  }, 1000);
}
function pratikSonuc() {
  clearInterval(ozel.zaman); ozel.bitti = true;
  g.soru = new Set(); g.soluk = null; g.guncelle(); g.gorunus('on');
  let puan = 0;
  for (const s of ozel.ist) {
    s.sonuc = cevapPuani(s.cevap, s.a);
    if (s.sonuc === 'dogru') puan += 1; else if (s.sonuc === 'yazim') puan += 0.5;
    C.cevapla(`ad:${s.a}`, s.sonuc === 'dogru' ? 'dogru' : s.sonuc === 'yazim' ? 'zor' : 'yanlis');
  }
  ozel.puan = puan;
  $('#soruKarti').innerHTML = `<p class="soru">Pratik sınav bitti: ${puan} / ${ozel.ist.length} puan</p>
    <p class="kucuk">Tam doğru 1 puan, küçük yazım hatası yarım puan. Aşağıdaki listede bir satıra tıklarsan yapı modelde gösterilir.</p>
    <div class="dugme-satiri"><button id="pratikYeni" class="ikincil">Yeni sınav</button><button id="pratikKapat">Kapat</button></div>`;
  $('#pratikYeni').onclick = () => { ozelBitir(false); sinavCiz(); };
  $('#pratikKapat').onclick = () => ozelBitir(true);
  ozelYanCiz(); vadeliRozet();
}

// ---------- Klinik vaka soruları ----------
function vakaListesi() {
  const km = new Set(seciliKomiteler().map(k => k.id.replace(/-4$/, '')));
  return VAKALAR.filter(v => yapilar[v.dogru] && v.k.some(x => km.has(x)));
}
function vakaBaslat(adet) {
  sahneSifirla();
  g.etiketle([]); g.olcumTemizle(); ustuneGel.hidden = true;
  const hepsi = C.karistir(vakaListesi()).sort((a, b) => C.kart(`vaka:${a.id}`).kutu - C.kart(`vaka:${b.id}`).kutu);
  if (!hepsi.length) return;
  ozel = { tip: 'vaka', liste: hepsi.slice(0, adet), sira: 0, dogru: 0, yanlislar: [], cevaplandi: false };
  cekmeceKapat(); $('#secimEtiketi').hidden = true;
  ozelYanCiz(); vakaGoster();
}
function vakaGoster() {
  const k = $('#soruKarti');
  if (ozel.sira >= ozel.liste.length) {
    g.soru = new Set(); g.soluk = null; g.guncelle();
    k.innerHTML = `<p class="soru">Vakalar bitti: ${ozel.dogru} / ${ozel.liste.length} doğru</p>
      ${ozel.yanlislar.length ? `<p>Yanlış yaptıkların (sonraki sefer önce bunlar gelir):</p><ul>${ozel.yanlislar.map(v => `<li>${esc(ad(v.dogru))}</li>`).join('')}</ul>` : '<p>Hepsi doğru, harika!</p>'}
      <div class="dugme-satiri"><button id="vakaYeni" class="ikincil">Yeni vakalar</button><button id="vakaKapat">Kapat</button></div>`;
    $('#vakaYeni').onclick = () => { ozelBitir(false); sinavCiz(); };
    $('#vakaKapat').onclick = () => ozelBitir(true);
    return;
  }
  const v = ozel.liste[ozel.sira]; ozel.cevaplandi = false;
  g.soru = new Set(); g.soluk = null; g.yalniz = null; g.secili = new Set(); g.guncelle();
  let yanlis = v.celdirici.filter(a => yapilar[a]);
  if (yanlis.length < 3) yanlis = [...yanlis, ...C.karistir(Object.values(yapilar).filter(y => y.sistem === yapilar[v.dogru].sistem && y.anahtar !== v.dogru && !yanlis.includes(y.anahtar) && DOGRULAMA[y.anahtar]?.durum === 'dogrulandi').map(y => y.anahtar))].slice(0, 3);
  const secenek = C.karistir([v.dogru, ...yanlis]);
  k.innerHTML = `<div class="ust-bilgi"><span>Vaka ${ozel.sira + 1} / ${ozel.liste.length}</span><span>Klinik vaka</span></div>
    <p class="vaka-metin">${esc(v.metin)}</p><p class="soru">${esc(v.soru)}</p>
    <div class="secenekler">${secenek.map(a => `<button data-vaka="${esc(a)}">${esc(ad(a))}</button>`).join('')}</div><div id="geri"></div>`;
  k.querySelectorAll('[data-vaka]').forEach(b => b.addEventListener('click', () => {
    if (ozel.cevaplandi) return; ozel.cevaplandi = true;
    const dogru = b.dataset.vaka === v.dogru, y = yapilar[v.dogru];
    k.querySelectorAll('[data-vaka]').forEach(x => { if (x.dataset.vaka === v.dogru) x.classList.add('dogru'); });
    if (!dogru) { b.classList.add('yanlis'); ozel.yanlislar.push(v); } else ozel.dogru++;
    C.cevapla(`vaka:${v.id}`, dogru ? 'dogru' : 'yanlis');
    g.acikSistemler.add(y.sistem); g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(tekTaraf(y.parcalar));
    $('#geri').innerHTML = `<div class="geri-bildirim ${dogru ? 'dogru' : 'yanlis'}">${dogru ? 'Doğru!' : `Doğrusu: ${esc(ad(v.dogru))}`}</div>
      <p style="margin:.5rem 0 0">${esc(v.aciklama)}</p><p class="kucuk">Yapı modelde turuncu gösteriliyor.</p>
      <div class="dugme-satiri"><button id="vakaSonraki">${ozel.sira + 1 < ozel.liste.length ? 'Sonraki vaka' : 'Sonucu gör'}</button></div>`;
    $('#vakaSonraki').onclick = () => { ozel.sira++; ozelYanCiz(); vakaGoster(); };
    $('#vakaSonraki').focus({ preventScroll: true }); ozelYanCiz();
  }));
  k.hidden = false;
}

function ozelYanCiz() {
  if (ozel.tip === 'pratik' && ozel.bitti) {
    const etiket = { dogru: 'Doğru', yazim: 'Yazım hatası (yarım puan)', yanlis: 'Yanlış', bos: 'Boş' };
    $('#yan').innerHTML = `<h2>Pratik sınav sonucu: ${ozel.puan} / ${ozel.ist.length}</h2>
      <table class="sonuc-tablo"><thead><tr><th>No</th><th>Senin cevabın</th><th>Doğru cevap</th></tr></thead><tbody>
      ${ozel.ist.map((s, n) => `<tr class="s-${s.sonuc}" data-ist="${n}" tabindex="0"><td>${n + 1}</td><td>${esc(s.cevap || '(boş)')}<br><small>${etiket[s.sonuc]}</small>${s.ek ? `<br><small>Sinir cevabın: ${esc(s.ek)}</small>` : ''}</td><td><b>${esc(TERIM[s.a].la)}</b><br><small>${esc(TERIM[s.a].tr === TERIM[s.a].la ? '' : TERIM[s.a].tr)}</small>${KAS_BILGI[s.a] ? `<br><small>Sinir: ${esc(KAS_BILGI[s.a].sinir)}</small>` : ''}</td></tr>`).join('')}
      </tbody></table>`;
    document.querySelectorAll('[data-ist]').forEach(t => t.addEventListener('click', () => { const y = yapilar[ozel.ist[Number(t.dataset.ist)].a]; g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(tekTaraf(y.parcalar)); }));
    return;
  }
  const toplam = ozel.tip === 'pratik' ? ozel.ist.length : ozel.liste.length;
  $('#yan').innerHTML = `<h2>${ozel.tip === 'pratik' ? 'Pratik sınav sürüyor' : 'Klinik vakalar'}</h2>
    <p>${ozel.tip === 'pratik' ? 'İstasyon' : 'Vaka'} ${Math.min(ozel.sira + 1, toplam)} / ${toplam}${ozel.tip === 'vaka' ? ` · Doğru: ${ozel.dogru}` : ''}</p>
    <div class="ilerleme-cubugu"><div style="width:${(100 * ozel.sira) / toplam}%"></div></div>
    <p class="kucuk">${ozel.tip === 'pratik' ? 'Modeli döndürüp yakınlaştırabilirsin. Doğru cevaplar sınavın sonunda gösterilir.' : 'Önce öyküyü oku, sonra etkilenen yapıyı seç.'}</p>
    <button id="ozelCik" class="ikincil" style="width:100%">${ozel.tip === 'pratik' ? 'Sınavı bırak' : 'Vakaları bırak'}</button>`;
  $('#ozelCik').onclick = () => ozelBitir(true);
}
function ozelBitir(cizilsin = true) {
  if (ozel?.zaman) clearInterval(ozel.zaman);
  ozel = null; $('#soruKarti').hidden = true;
  g.soru = new Set(); g.soluk = null; g.secili = new Set(); g.yalniz = null; aktifKonu = null; g.guncelle(); if (mod.parcali) parcaliEtiketle();
  if (cizilsin) yanCiz();
}

// ---------- Canlandırmalar: fizyoloji akışları, kalp atımı, solunum, kas hareketleri ----------
const parcaListesi = ys => ys.flatMap(y => (y instanceof RegExp ? Object.values(yapilar).filter(v => y.test(v.anahtar)).flatMap(v => v.parcalar) : yapilar[y]?.parcalar ?? []));
const sagTaraf = is => { const s = is.filter(i => /right/i.test(parcalar[i].en)); return s.length ? s : is; };
const kutuMerkezi = is => { const k = new T.Box3(); for (const i of is) { k.expandByPoint(new T.Vector3(...parcalar[i].bounds[0])); k.expandByPoint(new T.Vector3(...parcalar[i].bounds[1])); } return k.getCenter(new T.Vector3()); };
const olcekMatrisi = (c, sx, sy, sz, dy = 0) => new T.Matrix4().makeTranslation(c.x, c.y + dy, c.z).multiply(new T.Matrix4().makeScale(sx, sy, sz)).multiply(new T.Matrix4().makeTranslation(-c.x, -c.y, -c.z));
const yumusak = k => k * k * (3 - 2 * k);

function canliCiz() {
  if (canli) return canliYanCiz();
  // Yolculuk yalnız bütün adımlarının yapıları modelde varsa açılır; eksikse yarım bir yol göstermek yanıltır.
  const akisVar = a => a.adimlar.every(ad => parcaListesi(ad.yol ?? ad.y).length);
  $('#yan').innerHTML = `<h2>Canlandırmalar</h2>
    <p class="kucuk">Vücudun nasıl çalıştığını adım adım izle. Her canlandırmada açıklama modelin altındaki kartta çıkar; duraklatıp modeli döndürebilirsin.</p>
    <h3>Hareketli gösterimler</h3>
    <button class="liste-dugme" data-canli="kalp" ${parcaListesi(KALP.karincik).length ? '' : 'disabled'}>${esc(KALP.ad)}<small>Atriyum ve ventriküllerin sırayla kasılması, kapaklar ve kalp sesleri</small></button>
    <button class="liste-dugme" data-canli="solunum" ${KADIN_MI ? 'disabled' : ''}>${esc(SOLUNUM.ad)}<small>Diyafram ve kaburgaların nefes alıp verirken hareketi${KADIN_MI ? ' (Erkek modelde)' : ''}</small></button>
    <h3>Adım adım yollar</h3>
    ${AKISLAR.map(a => `<button class="liste-dugme" data-akis="${a.id}" ${akisVar(a) ? '' : 'disabled'}>${esc(a.ad)}<small>${akisVar(a) ? `${a.adimlar.length} adım` : !KADIN_MI && !ekYuklendi ? 'Ek katman yükleniyor…' : 'Bu modelde bazı yapılar yok. Erkek modelde izle.'}</small></button>`).join('')}
    <h3>Mikroskobik sahneler</h3>
    <p class="kucuk">Organların içinde, gözle görülmeyen düzeyde ne olduğunu gösteren şematik çizimler.</p>
    ${MIKRO.map(m => `<button class="liste-dugme" data-mikro="${m.id}">${esc(m.ad)}</button>`).join('')}
    <h3>Kas hareketleri</h3>
    <p class="kucuk">Hareket iskelette gösterilir; hareketi yapan kaslar turuncu, karşıt kaslar yeşil renkle işaretlenir. Kaslar modelde şekil değiştirmez.${KADIN_MI ? ' Kas hareketleri için üstten Erkek modeline geç.' : ''}</p>
    ${HAREKETLER.map(h => `<button class="liste-dugme" data-hareket="${h.id}" ${KADIN_MI ? 'disabled' : ''}>${esc(h.ad)}</button>`).join('')}`;
  document.querySelectorAll('[data-mikro]').forEach(b => b.addEventListener('click', () => mikroAc(MIKRO.find(m => m.id === b.dataset.mikro))));
  document.querySelectorAll('[data-akis]').forEach(b => b.addEventListener('click', () => akisBaslat(AKISLAR.find(a => a.id === b.dataset.akis))));
  document.querySelectorAll('[data-hareket]').forEach(b => b.addEventListener('click', () => hareketBaslat(HAREKETLER.find(h => h.id === b.dataset.hareket))));
  document.querySelectorAll('[data-canli]').forEach(b => b.addEventListener('click', () => (b.dataset.canli === 'kalp' ? kalpBaslat() : solunumBaslat())));
}
// Mikroskobik sahne: modelin üstünde açılan şematik çizim.
function mikroAc(m) {
  document.querySelector('#mikroPano')?.remove();
  const p = document.createElement('div'); p.id = 'mikroPano'; p.className = 'mikro-pano';
  p.innerHTML = `<div class="mikro-ust"><h2>${esc(m.ad)}</h2><button id="mikroKapat" class="ikincil">Kapat</button></div>
    <svg viewBox="0 0 480 300" role="img" aria-label="${esc(m.ad)} şeması">${m.svg}</svg>
    <ol>${m.adimlar.map(a => `<li>${esc(a)}</li>`).join('')}</ol>
    <p class="kucuk">Şematik çizimdir; gerçek ölçekli değildir.</p>
    ${yapilar[m.ilgili] ? '<button id="mikroModel" class="ikincil">Bu yapıyı modelde göster</button>' : ''}`;
  $('#sahne').appendChild(p);
  $('#mikroKapat').onclick = () => p.remove();
  if ($('#mikroModel')) $('#mikroModel').onclick = () => { p.remove(); sekmeAc('kesfet'); parcaSec(yapilar[m.ilgili].parcalar[0], true); };
}
function canliHazirla(tip, ad, sistemler) {
  document.querySelector('#mikroPano')?.remove();
  sahneSifirla();
  const oncekiSistemler = new Set(g.acikSistemler);
  g.acikSistemler = new Set(sistemler); // canlandırma boyunca yalnız ilgili sistemler görünür
  canli = { oncekiSistemler, tip, ad, oynuyor: true, dokunulan: new Set(), gizlenen: new Set(), bas: performance.now(), durakta: 0, sure: 8000 };
  canli.sar = p => { canli.bas = (canli.oynuyor ? performance.now() : canli.durakta) - p * canli.sure; };
}
function canliKart(icerik) {
  const k = $('#soruKarti');
  k.innerHTML = `<div class="ust-bilgi"><span>Canlandırma</span><span id="canliDurum"></span></div><p class="soru">${esc(canli.ad)}</p><div id="canliIcerik">${icerik}</div><div id="canliGosterge"></div>
    <input type="range" id="canliCizgi" min="0" max="1000" value="0" aria-label="Zaman çizgisi: canlandırmayı ileri geri sar">
    <div class="dugme-satiri">${canli.tip === 'akis' ? '<button id="canliOnceki" class="ikincil">Önceki</button>' : ''}<button id="canliOynat">Duraklat</button>${canli.tip === 'akis' ? '<button id="canliSonraki" class="ikincil">Sonraki</button>' : ''}<button id="canliSes" class="ikincil" hidden>Ses: kapalı</button><button id="canliKapat" class="ikincil">Kapat</button></div>`;
  k.hidden = false;
  $('#canliCizgi').oninput = e => { canli.sonSarma = performance.now(); canli.sar(Number(e.target.value) / 1000); };
  $('#canliSes').onclick = () => { if (canli.ses) { canli.ses.kapat(); canli.ses = null; } else canli.ses = new Ses(); $('#canliSes').textContent = canli.ses ? 'Ses: açık' : 'Ses: kapalı'; };
  $('#canliOynat').onclick = () => { canli.oynuyor = !canli.oynuyor; if (canli.oynuyor) canli.bas += performance.now() - canli.durakta; else canli.durakta = performance.now(); $('#canliOynat').textContent = canli.oynuyor ? 'Duraklat' : 'Oynat'; };
  $('#canliKapat').onclick = () => canliBitir(true);
}
const canliZaman = t => (canli.oynuyor ? t : canli.durakta) - canli.bas;
// Zaman çizgisini o andaki yere getirir (kullanıcı sararken dokunmaz).
const zamanGoster = p => { const c = $('#canliCizgi'); if (c && performance.now() - (canli.sonSarma ?? 0) > 400) c.value = p * 1000; };
const gostergeKutu = (id, ad) => `<div><small>${ad}</small><b id="${id}">–</b></div>`;

const AKIS_AYAR = {
  dolasim: { renk: n => (n < 7 ? 0x3d7bfd : 0xff3b30), adet: 220, yayilim: 1, boyut: 0.003, dagilim: 1.6, soluk: 0.08, onden: true, ad: 'kan hücreleri', tup: true, tekYan: true, tupHaric: /lobe|lung|cusp|leaflet/i },
  sindirim: { renk: () => 0xff8a1f, adet: 7, uzunluk: 0.012, boyut: 0.0065, dagilim: 0.7, soluk: 0.07, onden: true, ad: 'lokma', tup: true, sikma: /./, tupHaric: /jejun|ileum/i },
  hava: { renk: () => 0x40c4ff, adet: 120, yayilim: 0.5, boyut: 0.0028, dagilim: 1.4, soluk: 0.08, onden: true, ad: 'hava (oksijen)', tup: true, tekYan: true, tupHaric: /nasal|concha|septum|thyroid cartilage|cricoid|arytenoid|epiglott|segment|lobar|lingul|lobe|lung/i },
  idrar: { renk: n => (n < 3 ? 0xff3b30 : 0xffd600), adet: 120, yayilim: 0.6, boyut: 0.003, dagilim: 1.2, soluk: 0.08, onden: true, ad: 'süzüntü', tup: true, tekYan: true, sikma: /ureter/i, tupHaric: /kidney|renal pelvis|bladder/i },
  // Görme yolu önden arkaya ilerlediği için sağdan izlenir. Yol sağ gözün şakak tarafından gelen, çaprazlaşmayan lifleri izler.
  gorme: { renk: () => 0xffd23a, adet: 40, uzunluk: 0.03, boyut: 0.0026, dagilim: 0.8, soluk: 0.08, onden: true, yon: 'sag', ofset: [-0.3, 0.05, 0.06], ad: 'sinir uyarısı', tup: true, tekYan: true,
    tupHaric: /cornea|lens|retina|chiasm|geniculate|occipital|lobe/i, not: 'Yol sağ gözün şakak tarafındaki ağ tabakadan gelen lifleri izler; bunlar çaprazda karşıya geçmez, aynı taraftaki görme yolu ve art kafa lobuna gider.' },
};
// Adımların yapılarından geçen yolları çıkarır: biri sağ, biri sol taraftaki yapılardan geçen iki kol (ortak yapılar ikisinde de var).
// Boru biçimli yapılarda yol, yapının orta hattını izler.
function yolCikar(adimlar) {
  const yollar = [[], []], adimBasi = [[], []];
  const orta = is => { const k = new T.Box3(); for (const i of is) { k.expandByPoint(new T.Vector3(...parcalar[i].bounds[0])); k.expandByPoint(new T.Vector3(...parcalar[i].bounds[1])); } return k.getCenter(new T.Vector3()); };
  adimlar.forEach((ad, n) => {
    const gruplar = {};
    for (const i of ad.yol) { const yan = /right/i.test(parcalar[i].en) ? 'R' : /left/i.test(parcalar[i].en) ? 'L' : ''; (gruplar[parcalar[i].anahtar + '|' + yan] ??= { yan, is: [] }).is.push(i); }
    const liste = Object.values(gruplar), sonraki = adimlar[n + 1] ? orta(adimlar[n + 1].yol) : null;
    yollar.forEach((yol, k) => {
      adimBasi[k].push(yol.length);
      let benim = liste.filter(gr => !gr.yan || gr.yan === (k ? 'L' : 'R'));
      if (!benim.length) benim = liste;
      if (n === 0 && benim.length === 2 && !benim[0].yan && !benim[1].yan) benim = [benim[k]]; // ör. vena cava superior ve inferior: iki ayrı kol
      benim = benim.map(gr => ({ hat: g.ortaHat(gr.is), c: orta(gr.is) })).filter(gr => gr.hat.length);
      let kalan = 4; // çok parçalı adımlarda (ör. segment bronşları) yol dolanmasın
      while (benim.length && kalan-- > 0) {
        const once = yol[yol.length - 1];
        if (once) benim.sort((x, y) => x.c.distanceTo(once) - y.c.distanceTo(once));
        const hat = benim.shift().hat, bas = hat[0], son = hat[hat.length - 1];
        if (once ? once.distanceTo(son) < once.distanceTo(bas) : sonraki && sonraki.distanceTo(bas) < sonraki.distanceTo(son)) hat.reverse();
        yol.push(...hat);
      }
    });
  });
  return { yollar, adimBasi };
}
// Boru biçimli organlarda yol, organın gerçek orta hattından geçer (lokma borunun içinde ilerler); boru sayılmayan yapılarda merkezden.
// borular: yolun hangi noktalarının hangi organa ait olduğu ve organın hangi yönde geçildiği (kasılma dalgası için).
// haric: boru sayılmayacak yapılar (ör. ince bağırsak; modelde boru değil, kıvrım yığını). Bunlarda lokma organın ortasında durur.
// Organlar canli.js'deki anatomik sırayla izlenir; yalnız her organın hangi ucundan girileceği seçilir.
// tekYan: sağ ve sol karşılığı olan yapılarda yalnız sağ taraf izlenir (yol ikiye bölünmesin).
// Başka bir yapının içinde kalan alt parçalar (ör. "inen aorta" içindeki "göğüs aortası", bir arterin "gövdesi") ikinci kez izlenmez; yoksa yol ileri geri gider.
// b kutusunun en az %70'i a kutusunun içinde kalıyorsa b, a'nın bir parçası sayılır (kenarlar birkaç milimetre taşabilir).
const kutuIcinde = (b, a, oran = 0.7) => {
  let ortak = 1, kendi = 1;
  for (let k = 0; k < 3; k++) { ortak *= Math.max(0, Math.min(b[1][k], a[1][k]) - Math.max(b[0][k], a[0][k])); kendi *= Math.max(b[1][k] - b[0][k], 1e-4); }
  return ortak / kendi >= oran;
};
// Yutak yolu: yutak parçaları ekmodel.js'de omurga ve gırtlağa göre yerine oturtulur (baş-boyun düzeltmesi), ama laringofarinks modelinin alt ucu
// biçim hatası yüzünden krikoid kıkırdağın ~5 mm önünde kalır; orta hattan geçen yol lokmayı gırtlağın içinden geçirirdi.
// Bu yüzden lokmanın yolu her yükseklikte dilin ve gırtlağın arka yüzü ile boyun omurlarının ön yüzü arasının ortasından çizilir:
// ağız yutağı (oropharynx), gırtlak yutağı (laryngopharynx, gırtlağın arkası), sonra yemek borusunun ağzı.
const OZEL_YOL = { yutak: yutakYolu };
function yutakYolu() {
  const onde = parcalar.filter(p => /^(tongue|epiglottis|thyroid cartilage|cricoid cartilage|(left|right) arytenoid cartilage)$/i.test(p.en) && g.meshler[p.i]);
  const arkada = parcalar.filter(p => /cervical vertebra|^axis$|intervertebral disk of (axis|.*cervical)/i.test(p.en) && g.meshler[p.i]);
  const yb = parcalar.find(p => /^esophagus$/i.test(p.en) && g.meshler[p.i]); if (!onde.length || !arkada.length || !yb) return [];
  const dilim = (ps, y, enArka) => { let z = enArka ? Infinity : -Infinity; for (const p of ps) { const a = g.meshler[p.i].geometry.attributes.position; for (let k = 0; k < a.count; k++) if (Math.abs(a.getX(k)) < 0.01 && Math.abs(a.getY(k) - y) < 0.004) z = enArka ? Math.min(z, a.getZ(k)) : Math.max(z, a.getZ(k)); } return z; };
  const a = g.meshler[yb.i].geometry.attributes.position; let ust = -Infinity; for (let k = 0; k < a.count; k++) ust = Math.max(ust, a.getY(k));
  const agiz = new T.Vector3(); let n = 0; for (let k = 0; k < a.count; k++) if (a.getY(k) > ust - 0.008) { agiz.add(new T.Vector3(a.getX(k), a.getY(k), a.getZ(k))); n++; } agiz.divideScalar(n || 1);
  const yol = [];
  for (let y = 1.535; y > agiz.y + 0.004; y -= 0.005) {
    const on = dilim(onde, y, true), ark = dilim(arkada, y, false);
    if (Number.isFinite(on) && Number.isFinite(ark) && on > ark) yol.push(new T.Vector3(agiz.x, y, (on + ark) / 2));
  }
  yol.push(agiz);
  return yol;
}
function tupYol(adimlar, haric, tekYan) {
  const yol = [], adimBasi = [], borular = [], izlenen = [];
  adimlar.forEach((ad, n) => {
    adimBasi.push(yol.length);
    if (ad.ozel && OZEL_YOL[ad.ozel]) { const nk = OZEL_YOL[ad.ozel](); if (nk.length) { yol.push(...nk); return; } } // elle kurulan yol (ör. yutak)
    // Boru sayılmayan parçalar (ör. ince bağırsağın onlarca parçası) tek bir durakta toplanır: hepsinin ortak merkezi.
    let tum = [...new Set(ad.yol)];
    if (tekYan && tum.some(i => /\bright\b/i.test(parcalar[i].en)) && tum.some(i => /\bleft\b/i.test(parcalar[i].en))) tum = tum.filter(i => !/\bleft\b/i.test(parcalar[i].en));
    const dis = tum.filter(i => haric?.test(parcalar[i].en)), kalan = [];
    // Boru parçalarını büyükten küçüğe sırayla denetle: önce izlenen bir yapının (bu ya da önceki adımda) içinde kalanı çıkar. Sıra yine anatomik sıradır.
    const hacim = i => parcalar[i].bounds[1].reduce((t, v, k) => t * (v - parcalar[i].bounds[0][k]), 1);
    const boru = tum.filter(i => !dis.includes(i)), tutulan = new Set();
    for (const i of [...boru].sort((x, y) => hacim(y) - hacim(x))) if (![...izlenen, ...[...tutulan].map(j => parcalar[j].bounds)].some(a => kutuIcinde(parcalar[i].bounds, a))) tutulan.add(i);
    if (!tutulan.size && !dis.length && boru.length) tutulan.add(boru.reduce((x, y) => (hacim(y) > hacim(x) ? y : x))); // hiçbir adım boş kalmasın
    tum = tum.filter(i => dis.includes(i) || tutulan.has(i));
    for (const i of tutulan) izlenen.push(parcalar[i].bounds);
    for (const i of tum) { if (!dis.includes(i)) kalan.push({ i, hat: g.tupHat(i) }); else if (i === dis[0]) kalan.push({ i, hat: null, merkez: kutuMerkezi(dis) }); }
    while (kalan.length) {
      const once = yol[yol.length - 1], s = kalan.shift();
      const sonraki = kalan.length ? g.merkezHam(kalan[0].i) : adimlar[n + 1]?.yol.length ? g.merkezHam(adimlar[n + 1].yol[0]) : null;
      const noktalar = s.hat ? s.hat.noktalar.map(v => v.clone()) : [s.merkez ?? g.merkezHam(s.i)];
      if (!noktalar.length) continue;
      const bas = noktalar[0], son = noktalar[noktalar.length - 1];
      const ters = noktalar.length > 1 && (once ? once.distanceTo(son) < once.distanceTo(bas) : !!sonraki && sonraki.distanceTo(bas) < sonraki.distanceTo(son));
      if (ters) noktalar.reverse();
      if (s.hat) borular.push({ i: s.i, n0: yol.length, n1: yol.length + noktalar.length - 1, ters });
      yol.push(...noktalar);
    }
  });
  return { yollar: [yol], adimBasi: [adimBasi], borular };
}
function akisBaslat(a) {
  canliHazirla('akis', a.ad, a.sistemler);
  canli.adimlar = a.adimlar.map(ad => ({ m: ad.m, p: parcaListesi(ad.y), yol: parcaListesi(ad.yol ?? ad.y), ozel: ad.ozel })).filter(ad => ad.p.length && ad.yol.length);
  canli.sira = -1;
  const hepsi = canli.adimlar.flatMap(ad => ad.p), ayar = AKIS_AYAR[a.id], { yollar, adimBasi, borular = [] } = ayar.tup ? tupYol(canli.adimlar, ayar.tupHaric, ayar.tekYan) : yolCikar(canli.adimlar);
  let adimT = [[], []];
  const adimBul = (t, k = 0) => { let n = 0; for (let i = 0; i < adimT[k].length; i++) if (t >= adimT[k][i] - 1e-6) n = i; return n; };
  g.yalniz = null; g.soluk = new Set(); g.soru = new Set(); g.secili = new Set(); g.guncelle(); g.gorunus(ayar.yon ?? 'on', false); g.odakla(hepsi);
  g.akisKur(yollar, (t, k) => ayar.renk(adimBul(t, k)), ayar);
  adimT = adimBasi.map((b, k) => b.map(n => g.akisOran(k, n)));
  for (const b of borular) { b.a0 = g.akisOran(0, b.n0); b.a1 = g.akisOran(0, b.n1); }
  canli.geri = () => borular.forEach(b => g.tupSik(b.i, null));
  canli.borular = borular; // ölçüm için (?debug=1)
  canliKart(''); canliYanCiz();
  $('#canliKapat').insertAdjacentHTML('beforebegin', '<button id="canliTakip" class="ikincil">Yolculuğa katıl</button>');
  $('#canliTakip').onclick = () => { g.akis.takip = !g.akis.takip; $('#canliTakip').textContent = g.akis.takip ? 'Dışarıdan izle' : 'Yolculuğa katıl'; if (!g.akis.takip) g.odakla(hepsi); };
  const goster = n => {
    canli.sira = n; const ad = canli.adimlar[n];
    $('#canliDurum').textContent = `Adım ${n + 1} / ${canli.adimlar.length}`;
    $('#canliIcerik').innerHTML = `<p>${esc(ad.m)}</p><p class="kucuk">Parlak noktalar: ${esc(ayar.ad)}. "Yolculuğa katıl" ile kamera ${ayar.icten ? 'organın içinden, lokmanın arkasından' : 'onların peşinden'} gider.</p>${ayar.not ? `<p class="kucuk">${esc(ayar.not)}</p>` : ''}`;
    // Borulu yolculukta o adımın organı belirginleşir, diğerleri saydam kalır; kamera dışarıdan izliyorsa o organa yaklaşır.
    if (ayar.tup) { g.soluk = new Set(ad.p); g.guncelle(); if (!g.akis.takip) g.odakla(ad.p); }
    canliYanCiz();
  };
  const git = d => { const n = (canli.sira + d + canli.adimlar.length) % canli.adimlar.length; g.akis.faz = adimT[0][n] + 0.002; goster(n); };
  $('#canliOnceki').onclick = () => git(-1); $('#canliSonraki').onclick = () => git(1);
  canli.sar = p => { g.akis.faz = Math.min(p, 0.999); };
  goster(0);
  let son = performance.now();
  g.canli = t => {
    const dt = Math.min(t - son, 100); son = t;
    // Borulu yolculukta her adım yaklaşık aynı süre sürer (uzun bağırsak adımı kısa yutak adımını ezmesin).
    const T0 = adimT[0], simdi = Math.max(canli.sira, 0), pay = ayar.tup ? ((T0[simdi + 1] ?? 1) - T0[simdi]) / 6500 : 1 / (canli.adimlar.length * 4200);
    const faz = g.akisAdim(canli.oynuyor ? dt * pay : 0), n = adimBul(faz);
    if (n !== canli.sira) goster(n);
    // Kasılma dalgası yalnız kendiliğinden kasılan borularda (yemek borusu, bağırsak, üreter) gösterilir; damar ve hava yolunda yoktur.
    for (const b of borular) { if (!ayar.sikma?.test(parcalar[b.i].en)) continue; const u = (faz - b.a0) / (b.a1 - b.a0); if (u > -0.2 && u < 1.2) g.tupSik(b.i, b.ters ? 1 - u : u, b.ters ? -1 : 1); else g.tupSik(b.i, null); }
    zamanGoster(faz);
  };
}

function evreGoster(evreler, n) {
  if (canli.evre === n) return; canli.evre = n;
  $('#canliDurum').textContent = evreler[n].ad;
  $('#canliIcerik').innerHTML = `<p><b>${esc(evreler[n].ad)}:</b> ${esc(evreler[n].m)}</p>`;
}
function kalpBaslat() {
  canliHazirla('kalp', KALP.ad, KALP.sistemler);
  const kul = parcaListesi(KALP.kulakcik), kar = parcaListesi(KALP.karincik);
  const damar = parcaListesi(['cikan-aorta', 'aort-yayi', 'pulmoner-govde', 'pulmoner-arter', 'ust-ana-toplardamar', 'alt-ana-toplardamar', 'pulmoner-ven', 'mitral', 'trikuspit', 'aort-kapagi', 'pulmoner-kapak']);
  const c = kutuMerkezi([...kul, ...kar]);
  // Kalp cam gibi saydamlaşır; içinden geçen kan görünür (mavi: sağ kalp, kırmızı: sol kalp).
  g.yalniz = new Set([...kul, ...kar, ...damar]); g.soluk = new Set(); g.secili = new Set(); g.soru = new Set(); g.guncelle(); g.gorunus('on', false); g.odakla([...kul, ...kar]);
  [...kul, ...kar].forEach(i => canli.dokunulan.add(i));
  const yolAdim = AKISLAR.find(a => a.id === 'dolasim').adimlar.map(ad => ({ yol: parcaListesi(ad.yol ?? ad.y) }));
  if (yolAdim.every(ad => ad.yol.length)) {
    const { yollar, adimBasi } = yolCikar(yolAdim), b = adimBasi[0];
    g.akisKur([yollar[0].slice(b[0], b[6]), yollar[0].slice(b[7], b[12] + 2)], (t, k) => (k ? 0xff3b30 : 0x3d7bfd), { adet: 160, boyut: 0.0026 });
  }
  canliKart(''); canliYanCiz();
  // Şematik EKG: P dalgası atriyum, QRS ventrikül kasılmasından hemen önce gelir; T dalgası ventriküllerin toparlanmasıdır.
  $('#canliIcerik').insertAdjacentHTML('afterend', `<svg class="ekg" viewBox="0 0 300 70" role="img" aria-label="Şematik EKG">
    <path d="M0 45 H12 Q21 31 30 45 H54 L58 50 L63 8 L68 60 L72 45 H128 Q148 22 168 45 H300" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <text x="16" y="66">P</text><text x="57" y="66">QRS</text><text x="143" y="66">T</text><line id="ekgImlec" x1="0" x2="0" y1="2" y2="56" stroke="var(--turuncu)" stroke-width="2"/></svg>
    <p class="kucuk">Şematik EKG, ağır çekim. Mavi noktalar oksijeni az, kırmızı noktalar oksijeni bol kan.</p>`);
  canli.sure = 7000; $('#canliSes').hidden = false;
  $('#canliGosterge').innerHTML = `<div class="gosterge">${gostergeKutu('gLvp', 'Sol ventrikül basıncı')}${gostergeKutu('gAop', 'Aort basıncı')}${gostergeKutu('gHacim', 'Sol ventrikül hacmi')}${gostergeKutu('gMitral', 'Mitral kapak')}${gostergeKutu('gAort', 'Aort kapağı')}</div>
    <canvas id="gEgri" class="egri" aria-label="Sol ventrikül (kırmızı) ve aort (koyu) basınç eğrisi"></canvas>
    <p class="kucuk">Kırmızı: sol ventrikül basıncı. Koyu: aort basıncı. Dinlenmedeki erişkin için tipik değerler; gerçekte bir atım yaklaşık 0,8 saniye sürer.</p>`;
  const seriler = [{ f: q => kalpModel(q).lvp, min: 0, max: 125, renk: '#d92d20' }, { f: q => kalpModel(q).aop, min: 0, max: 125, renk: '#1d2329' }];
  evreGoster(KALP.evreler, 0); canli.evre = -1;
  let son = performance.now(), oncekiP = 0;
  g.canli = t => {
    const p = (((canliZaman(t) / 7000) % 1) + 1) % 1;
    const a = p < 0.22 ? 1 - 0.14 * Math.sin((Math.PI * p) / 0.22) : 1;
    const kd = kalpModel(p), v = 1 - 0.19 * ((120 - kd.hacim) / 70); // ventrikül boyutu hacimle aynı kaynaktan
    $('#gLvp').textContent = `${Math.round(kd.lvp)} mmHg`; $('#gAop').textContent = `${Math.round(kd.aop)} mmHg`; $('#gHacim').textContent = `${Math.round(kd.hacim)} mL`;
    for (const [id, acik] of [['gMitral', kd.mitral], ['gAort', kd.aort]]) { const e = $('#' + id); e.textContent = acik ? 'Açık' : 'Kapalı'; e.className = acik ? 'acik' : 'kapali'; }
    egriCiz($('#gEgri'), seriler, p); zamanGoster(p);
    // Birinci kalp sesi mitral ve triküspit kapaklar kapanırken, ikincisi aort ve pulmoner arter kapakları kapanırken duyulur.
    if (canli.ses && canli.oynuyor) { if (oncekiP < 0.22 && p >= 0.22) canli.ses.vurus(70, 0.16, 0.9); if (oncekiP < 0.6 && p >= 0.6) canli.ses.vurus(105, 0.1, 0.7); }
    oncekiP = p;
    const dt = Math.min(t - son, 100); son = t; // kan, kasılma anında hızlanır
    if (g.akis) g.akisAdim(canli.oynuyor ? (dt / 9000) * (0.35 + 14 * (2 - a - v)) : 0);
    $('#ekgImlec')?.setAttribute('transform', `translate(${p * 300} 0)`);
    const ma = olcekMatrisi(c, a, a, a), mv = olcekMatrisi(c, v, v, v);
    kul.forEach(i => g.donusum(i, ma)); kar.forEach(i => g.donusum(i, mv));
    const n = p < 0.22 ? 0 : p < 0.6 ? 1 : 2;
    if (canli.evre !== n) { g.soru = new Set(n === 0 ? kul : n === 1 ? kar : []); g.guncelle(); }
    evreGoster(KALP.evreler, n);
  };
}
function solunumBaslat() {
  canliHazirla('solunum', SOLUNUM.ad, SOLUNUM.sistemler);
  const kafes = parcalar.filter(p => p.sistem === 'iskelet' && /\brib$|costal cartilage|sternum|manubrium|xiphoid/i.test(p.en)).map(p => p.i);
  const omur = parcalar.filter(p => /thoracic vertebra/i.test(p.en)).map(p => p.i);
  const akciger = parcaListesi([/^z:.*lobe of .*lung/]), diyafram = parcaListesi(['diyafram']);
  const c = kutuMerkezi(kafes);
  const yolAdim = AKISLAR.find(a => a.id === 'hava').adimlar.map(ad => ({ yol: parcaListesi(ad.yol ?? ad.y) })).filter(ad => ad.yol.length);
  const boru = parcaListesi(['soluk-borusu', 'ana-bronş']);
  g.yalniz = new Set([...kafes, ...omur, ...akciger, ...diyafram, ...boru]); g.soluk = null; g.secili = new Set(); g.soru = new Set(diyafram); g.guncelle(); g.gorunus('on', false); g.odakla(kafes);
  [...kafes, ...akciger, ...diyafram].forEach(i => canli.dokunulan.add(i));
  canliKart(''); canliYanCiz();
  // Her köşenin inme payı: en alttaki tutunma kenarında 0, kubbelerin tepesinde 1.
  const kubbe = diyafram.filter(i => g.meshler[i]).map(i => {
    const p = g.meshler[i].geometry.attributes.position, ilk = p.array.slice(), w = new Float32Array(p.count);
    let alt = Infinity, ust = -Infinity; for (let n = 0; n < p.count; n++) { alt = Math.min(alt, ilk[n * 3 + 1]); ust = Math.max(ust, ilk[n * 3 + 1]); }
    for (let n = 0; n < p.count; n++) w[n] = T.MathUtils.smoothstep(ilk[n * 3 + 1], alt + (ust - alt) * 0.35, ust);
    g.meshler[i].frustumCulled = false;
    return { p, ilk, w };
  });
  canli.geri = () => kubbe.forEach(q => { q.p.array.set(q.ilk); q.p.needsUpdate = true; });
  evreGoster(SOLUNUM.evreler, 0);
  // Hava parçacıkları: nefes alırken burundan akciğere, verirken geri akar (verilen hava gri gösterilir).
  let veriyor = false, onceki = 0;
  if (yolAdim.length > 2) g.akisKur(yolCikar(yolAdim).yollar, () => (veriyor ? 0x8e9aa8 : 0x40c4ff), { adet: 120, yayilim: 0.45, boyut: 0.003 });
  $('#canliSes').hidden = false;
  $('#canliGosterge').innerHTML = `<div class="gosterge">${gostergeKutu('gSoluk', 'Alınan hava')}${gostergeKutu('gAlveol', 'Alveol basıncı')}${gostergeKutu('gPlevra', 'Plevra basıncı')}</div>
    <canvas id="gEgri" class="egri" aria-label="Akciğere giren hava hacmi eğrisi"></canvas>
    <p class="kucuk">Eğri: bir solukta akciğere giren hava (0-500 mL). Basınçlar hava basıncına göredir. Mavi noktalar alınan, gri noktalar verilen havadır. Hareketler görülebilsin diye büyütülmüştür; dinlenmede dakikada 12-16 soluk alınır.</p>`;
  const kOran = q => yumusak(q < 0.45 ? q / 0.45 : 1 - (q - 0.45) / 0.55), seriler = [{ f: q => 500 * kOran(q), min: 0, max: 520, renk: '#1b1a17' }];
  g.canli = t => {
    const p = (((canliZaman(t) / 8000) % 1) + 1) % 1;
    const k = yumusak(p < 0.45 ? p / 0.45 : 1 - (p - 0.45) / 0.55);
    veriyor = p >= 0.45; if (g.akis) g.akisAdim((k - onceki) * 0.5);
    const sd = solunumModel(p, k);
    $('#gSoluk').textContent = `${Math.round(sd.hacim)} mL`; $('#gAlveol').textContent = `${sd.alveol.toFixed(1).replace('.', ',')} cmH₂O`; $('#gPlevra').textContent = `${sd.plevra.toFixed(1).replace('.', ',')} cmH₂O`;
    egriCiz($('#gEgri'), seriler, p); zamanGoster(p);
    canli.ses?.nefes(canli.oynuyor ? Math.min(1, Math.abs(k - onceki) * 60) : 0); onceki = k;
    const mk = olcekMatrisi(c, 1 + 0.08 * k, 1, 1 + 0.09 * k, 0.012 * k), ma = olcekMatrisi(c, 1 + 0.09 * k, 1 + 0.07 * k, 1 + 0.1 * k, -0.01 * k);
    kafes.forEach(i => g.donusum(i, mk)); akciger.forEach(i => g.donusum(i, ma));
    // Diyafram bütün olarak inmez: kenar tutunmaları (kaburgalar, sternum, crus dextrum ve sinistrumun omurga tutunması) yerinde kalır,
    // kasılan kas lifleri sağ ve sol kubbeyi aşağı çekip düzleştirir.
    kubbe.forEach(q => { for (let n = 0; n < q.w.length; n++) q.p.array[n * 3 + 1] = q.ilk[n * 3 + 1] - 0.03 * k * q.w[n]; q.p.needsUpdate = true; });
    evreGoster(SOLUNUM.evreler, p < 0.45 ? 0 : 1);
  };
}
function hareketBaslat(h) {
  canliHazirla('hareket', h.ad, ['iskelet', 'kas', 'bag']);
  const eklemKemigi = parcalar.find(p => p.sistem === 'iskelet' && p.en.toLowerCase() === `right ${h.eklem[0]}`);
  if (!eklemKemigi) { canli = null; return; }
  const merkez = g.ucNokta(eklemKemigi.i, h.eklem[1]);
  const oynayan = parcalar.filter(p => p.sistem === 'iskelet' && KEMIK_GRUBU[h.oynayan].test(p.en.toLowerCase())).map(p => p.i);
  const yapan = sagTaraf(parcaListesi(h.yapan)), karsit = sagTaraf(parcaListesi(h.karsit));
  const iskelet = parcalar.filter(p => p.sistem === 'iskelet').map(p => p.i);
  g.yalniz = new Set([...iskelet, ...yapan, ...karsit]); g.soluk = null; g.soru = new Set(yapan); g.secili = new Set(karsit); g.guncelle();
  g.gorunus(h.eksen === 'x' ? 'sag' : 'on', false); g.odakla([eklemKemigi.i, ...oynayan, ...yapan]);
  oynayan.forEach(i => canli.dokunulan.add(i));
  const satir = a => `<li>${esc(ad(a))}${KAS_BILGI[a]?.sinir ? ` <small>· ${esc(KAS_BILGI[a].sinir)}</small>` : ''}</li>`;
  canliKart(`<p><b style="color:var(--turuncu)">Hareketi yapan kaslar</b></p><ul class="kucuk-liste">${h.yapan.filter(a => yapilar[a]).map(satir).join('')}</ul>
    <p><b style="color:var(--ana)">Karşıt kaslar</b></p><ul class="kucuk-liste">${h.karsit.filter(a => yapilar[a]).map(satir).join('')}</ul>
    <p class="kucuk">${esc(h.not)}</p><p class="kucuk">Kasların kemikle birlikte uzayıp kısalması ve kasılan kasın kalınlaşması yaklaşık bir gösterimdir.</p>`);
  canliYanCiz();
  const eksen = h.eksen === 'x' ? new T.Vector3(1, 0, 0) : new T.Vector3(0, 0, 1), kaslar = [...yapan, ...karsit];
  const dk = new T.Box3(); oynayan.forEach(i => dk.expandByPoint(g.merkezHam(i)));
  const d = dk.getCenter(new T.Vector3()).sub(merkez).normalize(), yaricap = /bacak|baldir/.test(h.oynayan) ? [0.11, 0.17] : [0.07, 0.12], yapanKume = new Set(yapan);
  const kasVeri = kaslar.filter(i => g.meshler[i]).map(i => {
    const ag = g.meshler[i], p = ag.geometry.attributes.position, ilk = p.array.slice(), w = new Float32Array(p.count), v = new T.Vector3();
    for (let n = 0; n < p.count; n++) {
      v.set(ilk[n * 3], ilk[n * 3 + 1], ilk[n * 3 + 2]).sub(merkez); const s = v.dot(d), r = v.addScaledVector(d, -s).length();
      w[n] = T.MathUtils.smoothstep(s, -0.03, 0.03) * (1 - T.MathUtils.smoothstep(r, yaricap[0], yaricap[1]));
    }
    ag.frustumCulled = false;
    return { p, ilk, w, kc: g.merkezHam(i), sisme: yapanKume.has(i) ? 0.12 : -0.05 };
  });
  canli.geri = () => kasVeri.forEach(q => { q.p.array.set(q.ilk); q.p.needsUpdate = true; });
  let sonK = -1;
  $('#canliGosterge').innerHTML = `<div class="gosterge">${gostergeKutu('gAci', 'Eklem açısı')}</div>`;
  g.canli = t => {
    const p = (((canliZaman(t) / 8000) % 1) + 1) % 1; zamanGoster(p);
    let k = p < 0.3 ? 0 : p < 0.6 ? yumusak((p - 0.3) / 0.3) : p < 0.75 ? 1 : yumusak(1 - (p - 0.75) / 0.25);
    const kasGizli = false;
    if (canli.kasGizli !== kasGizli) { canli.kasGizli = kasGizli; kaslar.forEach(i => (kasGizli ? g.gizli.add(i) : g.gizli.delete(i))); kaslar.forEach(i => canli.gizlenen.add(i)); g.yalniz = new Set([...iskelet, ...(kasGizli ? [] : kaslar)]); g.soru = new Set(kasGizli ? [] : yapan); g.secili = new Set(kasGizli ? [] : karsit); g.guncelle(); $('#canliDurum').textContent = kasGizli ? 'Hareket' : 'Kaslar'; }
    if (h.ters) k = 1 - k;
    const m = new T.Matrix4().makeTranslation(merkez.x, merkez.y, merkez.z).multiply(new T.Matrix4().makeRotationAxis(eksen, T.MathUtils.degToRad(h.aci) * k)).multiply(new T.Matrix4().makeTranslation(-merkez.x, -merkez.y, -merkez.z));
    oynayan.forEach(i => g.donusum(i, m));
    if (k === sonK) return; sonK = k;
    $('#gAci').textContent = `${Math.round(Math.abs(h.aci) * k)}°`;
    // Kaslar: eklemin uzağındaki bölüm kemikle döner, eklem çevresinde yumuşak geçiş olur; kasılan kas kalınlaşır, karşıt kas incelir.
    const aci = T.MathUtils.degToRad(h.aci) * k;
    for (const q of kasVeri) {
      const dz = q.p.array, il = q.ilk, sis = 1 + q.sisme * (h.ters ? 1 - k : k);
      for (let n = 0, j = 0; n < q.w.length; n++, j += 3) {
        let x = il[j] - q.kc.x, y = il[j + 1] - q.kc.y, z = il[j + 2] - q.kc.z;
        const s = x * d.x + y * d.y + z * d.z;
        x = q.kc.x + d.x * s + (x - d.x * s) * sis - merkez.x; y = q.kc.y + d.y * s + (y - d.y * s) * sis - merkez.y; z = q.kc.z + d.z * s + (z - d.z * s) * sis - merkez.z;
        const a = aci * q.w[n], co = Math.cos(a), si = Math.sin(a);
        if (h.eksen === 'x') { dz[j] = x + merkez.x; dz[j + 1] = y * co - z * si + merkez.y; dz[j + 2] = y * si + z * co + merkez.z; }
        else { dz[j] = x * co - y * si + merkez.x; dz[j + 1] = x * si + y * co + merkez.y; dz[j + 2] = z + merkez.z; }
      }
      q.p.needsUpdate = true;
    }
  };
}
function canliYanCiz() {
  $('#yan').innerHTML = `<h2>${esc(canli.ad)}</h2>
    <p class="kucuk">${canli.tip === 'akis' ? 'Adımlar kendiliğinden ilerler; "Önceki" ve "Sonraki" ile kendin de gezebilirsin.' : 'Canlandırma sürekli döner. Duraklatıp modeli döndürebilir, yakınlaştırabilirsin.'}</p>
    ${canli.tip === 'akis' ? `<ol class="kucuk-liste">${canli.adimlar.map((x, n) => `<li ${n === canli.sira ? 'style="font-weight:600"' : ''}>${esc(x.m.split('.')[0])}.</li>`).join('')}</ol>` : ''}
    <button id="canliCik" class="ikincil" style="width:100%">Canlandırmayı kapat</button>`;
  $('#canliCik').onclick = () => canliBitir(true);
}
function canliBitir(cizilsin = true) {
  g.canli = null; g.akisSil();
  if (canli) { canli.geri?.(); canli.ses?.kapat(); canli.dokunulan.forEach(i => g.donusum(i, null)); canli.gizlenen.forEach(i => g.gizli.delete(i)); g.acikSistemler = canli.oncekiSistemler; }
  canli = null; $('#soruKarti').hidden = true;
  g.soru = new Set(); g.soluk = null; g.secili = new Set(); g.yalniz = null; g.guncelle(); g.gorunus('on');
  if (cizilsin) yanCiz();
}

// Kart kimliği "tür:anahtar" biçimindedir; anahtarın içinde de iki nokta olabilir.
const kartAyir = id => [id.slice(0, id.indexOf(':')), id.slice(id.indexOf(':') + 1)];

// ---------- Tekrar kartları ----------
function tekrarCiz() {
  if (tekrar) return tekrarYanCiz();
  const ks = konular(), hepsi = C.tekrarListesi(tumAnahtarlar(), 0).length;
  $('#yan').innerHTML = `<h2>Tekrar kartları</h2>
    <p class="kucuk">Cevabı düşün, "Cevabı göster"e bas ve dürüstçe puanla. Her düğmenin altında kartın yeniden ne zaman geleceği yazar. Zamanlamayı FSRS adlı yöntem yapar (Anki'nin de kullandığı yöntem): iyi bildiğin kart giderek seyrekleşir, unuttuğun kart birkaç dakika sonra yeniden gelir.</p>
    <label>Komite sınav tarihi (isteğe bağlı)<input id="sinavTarihi" type="date" class="arama" value="${esc(C.sinavTarihi())}"></label>
    <p class="kucuk">Tarih girersen aralıklar sınavı aşmaz; her kart sınavdan önce en az bir kez daha gelir.</p>
    <p>Bugün tekrar zamanı gelmiş kart: <b>${hepsi}</b></p>
    <label>Hangi konudan?<select id="tekrarKonu" class="tam"><option value="hepsi">Bütün konular</option>${ks.map(k => `<option value="${k.id}" ${k.id === aktifKonu ? 'selected' : ''}>${esc(k.ad)}</option>`).join('')}</select></label>
    <div class="satir"><label>Yeni kart sınırı <select id="yeniSinir"><option>5</option><option selected>10</option><option>20</option></select></label></div>
    <button id="tekrarBasla" style="width:100%">Kartlara başla</button>
    <h3>Kartların durumu</h3>${kutuDagilimi(tumAnahtarlar())}`;
  $('#sinavTarihi').onchange = e => C.sinavTarihiAyarla(e.target.value);
  $('#tekrarBasla').onclick = () => {
    const kid = $('#tekrarKonu').value, liste = kid === 'hepsi' ? tumAnahtarlar() : ks.find(k => k.id === kid).liste;
    const kartlar = C.tekrarListesi(liste, Number($('#yeniSinir').value));
    if (!kartlar.length) { $('#tekrarBasla').insertAdjacentHTML('afterend', '<p class="geri-bildirim dogru">Şu an tekrar edilecek kart yok. Yarın yeniden bak!</p>'); return; }
    sahneSifirla();
    tekrar = { kartlar, sira: 0, bilinen: 0, gosterildi: false, toplam: kartlar.length };
    cekmeceKapat(); $('#secimEtiketi').hidden = true; tekrarYanCiz(); kartGoster();
  };
}
function kutuDagilimi(liste) {
  const say = [0, 0, 0, 0, 0, 0];
  for (const a of liste) for (const t of ['ad', 'bul']) say[C.kart(`${t}:${a}`).kutu]++;
  return `<ul class="kucuk">${say.map((s, i) => `<li>${C.KUTU_ADI[i]}: ${s}</li>`).join('')}</ul>`;
}
function tekrarYanCiz() {
  $('#yan').innerHTML = `<h2>Kartlar</h2><p>Kart ${Math.min(tekrar.sira + 1, tekrar.kartlar.length)} / ${tekrar.kartlar.length}</p>
    <div class="ilerleme-cubugu"><div style="width:${(100 * tekrar.sira) / tekrar.kartlar.length}%"></div></div>
    <p class="kucuk">Bilemediğin kartlar listenin sonuna yeniden eklenir.</p><button id="tekrarCik" class="ikincil" style="width:100%">Kartları bırak</button>`;
  $('#tekrarCik').onclick = () => { tekrarBitir(); yanCiz(); };
}
// İki tarafta da bulunan yapılarda (ör. sağ ve sol el siniri) kamera tek tarafa yaklaşır; yoksa yapı ekranda nokta kadar kalır.
function tekTaraf(is) {
  const yan = i => /\bright\b/i.test(parcalar[i].en) ? 'R' : /\bleft\b/i.test(parcalar[i].en) ? 'L' : '';
  const ilk = is.map(yan).find(Boolean);
  return ilk && is.some(i => yan(i) && yan(i) !== ilk) ? is.filter(i => yan(i) === ilk) : is;
}
function kartGoster() {
  const k = $('#soruKarti');
  if (tekrar.sira >= tekrar.kartlar.length) {
    g.soru = new Set(); g.soluk = null; g.guncelle();
    k.innerHTML = `<p class="soru">Bugünlük bu kadar!</p><p>${tekrar.toplam} kartı çalıştın.</p><div class="dugme-satiri"><button id="tekrarKapat">Kapat</button></div>`;
    $('#tekrarKapat').onclick = () => { tekrarBitir(); yanCiz(); };
    return;
  }
  const [tip, a] = kartAyir(tekrar.kartlar[tekrar.sira]), y = yapilar[a];
  tekrar.gosterildi = false;
  g.acikSistemler.add(y.sistem); g.yalniz = null;
  if (tip === 'ad') { g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(tekTaraf(y.parcalar)); }
  else { g.soru = new Set(); g.soluk = null; g.guncelle(); g.gorunus('on'); }
  const kutu = C.kart(tekrar.kartlar[tekrar.sira]).kutu;
  k.innerHTML = `<div class="ust-bilgi"><span>Kart ${tekrar.sira + 1} / ${tekrar.kartlar.length}</span><span>${C.KUTU_ADI[kutu]}</span></div>
    <p class="soru">${tip === 'ad' ? (KAS_BILGI[a] ? 'Turuncu kasın adı ne? Başlangıcı, sonlanması ve siniri ne?' : 'Turuncu yapının adı ne? Görevi ne?') : `${esc(ad(a))} nerede bulunur? ${KAS_BILGI[a] ? 'Başlangıcı, sonlanması ve siniri ne?' : 'Görevi ne?'}`}</p>
    <div id="kartArka"></div><div class="dugme-satiri"><button id="cevapGoster">Cevabı göster</button></div>`;
  $('#cevapGoster').onclick = kartCevap; $('#cevapGoster').focus();
  k.hidden = false;
}
function kartCevap() {
  const id = tekrar.kartlar[tekrar.sira], [tip, a] = kartAyir(id), y = yapilar[a];
  if (tip === 'bul') { g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(tekTaraf(y.parcalar)); }
  $('#kartArka').innerHTML = `<p style="margin:0"><b>${esc(ad(a))}</b> <span class="latince">(${esc(ikinciAd(a))})</span></p>${KAS_BILGI[a] ? kasKarti(a, true) : `<p class="kucuk" style="margin:.2rem 0">${esc(y.fn)}</p>`}${y.ip ? `<div class="ipucu">${esc(y.ip)}</div>` : ''}${C.notAl(a) ? `<p class="kucuk">Notun: ${esc(C.notAl(a))}</p>` : ''}`;
  const sure = g => (g < 1 / 24 ? `${Math.max(1, Math.round(g * 1440))} dk` : g < 1 ? `${Math.round(g * 24)} saat` : g < 60 ? `${Math.round(g)} gün` : `${Math.round(g / 30)} ay`);
  const dugme = (sinif, not, yazi) => `<button class="${sinif}" data-not="${not}">${yazi}<br><small>${sure(C.sonrakiAralik(id, not))}</small></button>`;
  $('#cevapGoster').parentElement.innerHTML = dugme('kirmizi', 'yanlis', 'Unuttum') + dugme('sari', 'zor', 'Zor') + dugme('yesil', 'dogru', 'İyi') + dugme('', 'kolay', 'Kolay');
  document.querySelectorAll('[data-not]').forEach(b => b.addEventListener('click', () => {
    C.cevapla(id, b.dataset.not);
    if (b.dataset.not === 'yanlis') tekrar.kartlar.splice(Math.min(tekrar.sira + 4, tekrar.kartlar.length), 0, id);
    tekrar.sira++; tekrarYanCiz(); kartGoster();
  }));
}
function tekrarBitir() { tekrar = null; $('#soruKarti').hidden = true; g.soru = new Set(); g.soluk = null; g.yalniz = null; g.guncelle(); if (mod.parcali) parcaliEtiketle(); }

// ---------- Çalışma planı ----------
function planCiz() {
  const ks = konular();
  $('#yan').innerHTML = `<h2>Çalışma planı</h2>
    <p class="kucuk"><b>${esc(seciliSinif().ad)}</b> · ${C.komite() === 'hepsi' ? 'bütün komiteler' : esc(seciliKomiteler()[0]?.ad)}. Sınıfı ve komiteyi en üstteki kutulardan değiştirebilirsin. Konuları sırayla çalış: önce "İncele" ile yapıları modelde gör, sonra "Sınav ol". Bir yapıyı iki soru türünde de en az üç kez arka arkaya bildiğinde "öğrenildi" sayılır.</p>
    ${ks.map((k, n) => { const d = C.konuDurumu(k.liste); return `${n === 0 || ks[n - 1].komite !== k.komite ? `<h3>${esc(k.komite)}</h3>` : ''}<div class="konu ${k.id === aktifKonu ? 'aktif' : ''}">
      <div class="konu-ust"><b>${n + 1}. ${esc(k.ad)}</b><span class="durum-etiketi">${d.durum}</span></div>
      <div class="ilerleme-cubugu"><div style="width:${(100 * d.ogrenilen) / d.toplam}%"></div></div>
      <div class="kucuk">${d.ogrenilen} / ${d.toplam} yapı öğrenildi</div>
      <div class="dugme-satiri"><button class="ikincil" data-incele="${k.id}">İncele</button><button data-sinav="${k.id}">Sınav ol</button></div>
      ${k.id === aktifKonu ? `<ul class="sonuclar" style="max-height:none">${k.liste.map(a => `<li><button data-yapi="${a}">${esc(ad(a))}<small>${esc(ikinciAd(a))} · ${C.ogrenildi(a) ? 'öğrenildi' : C.KUTU_ADI[C.ustalik(a)]}</small></button></li>`).join('')}</ul>` : ''}
    </div>`; }).join('')}`;
  document.querySelectorAll('[data-incele]').forEach(b => b.addEventListener('click', () => { konuGoster(b.dataset.incele); planCiz(); }));
  document.querySelectorAll('[data-sinav]').forEach(b => b.addEventListener('click', () => { const k = ks.find(x => x.id === b.dataset.sinav); sekme = 'sinav'; document.querySelectorAll('[data-sekme]').forEach(x => x.setAttribute('aria-selected', String(x.dataset.sekme === 'sinav'))); sinavBaslat(k.liste, Math.min(10, k.liste.length * 2), 'karisik', k.id); }));
  document.querySelectorAll('[data-yapi]').forEach(b => b.addEventListener('click', () => { const y = yapilar[b.dataset.yapi]; g.secili = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar); cekmeceAc(y.parcalar[0]); }));
}

// ---------- İlerleme ----------
function ilerlemeCiz() {
  const o = C.genelIlerleme(), en = Math.max(1, ...o.son7.map(d => d.sayi)), ks = konular();
  $('#yan').innerHTML = `<h2>İlerlemem</h2>
    <div class="sayilar">
      <div class="sayi"><b>${o.seri}</b>gün üst üste çalıştın</div>
      <div class="sayi"><b>%${o.oran}</b>doğru cevap oranı</div>
      <div class="sayi"><b>${o.dogru + o.yanlis}</b>cevap verdin</div>
      <div class="sayi"><b>${ks.reduce((t, k) => t + C.konuDurumu(k.liste).ogrenilen, 0)}</b>yapı öğrendin</div>
    </div>
    <h3>Son 7 gün (cevap sayısı)</h3>
    <div class="gunler">${o.son7.map(d => `<div title="${d.sayi} cevap"><small>${d.sayi || ''}</small><span style="height:${(80 * d.sayi) / en}%"></span>${esc(d.gun)}</div>`).join('')}</div>
    <h3>Konulara göre</h3>
    ${ks.map(k => { const d = C.konuDurumu(k.liste); return `<div class="kucuk">${esc(k.ad)}: ${d.ogrenilen}/${d.toplam}</div><div class="ilerleme-cubugu"><div style="width:${(100 * d.ogrenilen) / d.toplam}%"></div></div>`; }).join('')}
    <h3>En çok zorlandıkların</h3>
    ${C.enCokYanlis().filter(([a]) => TERIM[a]).length ? C.enCokYanlis().filter(([a]) => TERIM[a]).map(([a, s]) => `<button class="liste-dugme" data-yapi="${a}">${esc(ad(a))}<small>${s} yanlış</small></button>`).join('') : '<p class="kucuk">Henüz yanlış yok.</p>'}
    <div class="bolum"><h3>Yedek</h3><p class="kucuk">İlerlemen bu bilgisayarın tarayıcısında saklanır. Başka bilgisayarda devam etmek ya da kaybetmemek için yedek al.</p>
    <div class="dugme-satiri"><button id="yedekAl" class="ikincil">Yedek al</button><label class="ikincil" style="flex:1"><input id="yedekYukle" type="file" accept=".json" hidden><span class="liste-dugme" style="border:1px solid var(--ana);border-radius:8px;text-align:center;color:var(--ana)">Yedeği yükle</span></label></div><p id="yedekDurum" class="kucuk"></p></div>`;
  document.querySelectorAll('[data-yapi]').forEach(b => b.addEventListener('click', () => { const y = yapilar[b.dataset.yapi]; if (!y) return; g.secili = new Set(y.parcalar); g.acikSistemler.add(y.sistem); g.guncelle(); g.odakla(y.parcalar); cekmeceAc(y.parcalar[0]); }));
  $('#yedekAl').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([C.yedekMetni()], { type: 'application/json' })); a.download = `anatomi-ilerleme-${new Date().toLocaleDateString('sv-SE')}.json`; a.click(); };
  $('#yedekYukle').onchange = async e => { try { C.yedekYukle(await e.target.files[0].text()); ilerlemeCiz(); $('#yedekDurum').textContent = 'Yedek yüklendi.'; } catch (h) { $('#yedekDurum').textContent = h.message; } };
}

// ---------- Notlar ----------
function notlarCiz() {
  const n = C.tumNotlar().filter(([a]) => yapilar[a]);
  $('#yan').innerHTML = `<h2>Notlarım</h2><p class="kucuk">Bir yapıya tıklayıp sağdaki "Benim notum" alanına yazdıkların burada toplanır.</p>
    ${n.length ? n.map(([a, m]) => `<button class="liste-dugme" data-yapi="${a}"><b>${esc(yapilar[a].tr)}</b><small>${esc(m.slice(0, 140))}</small></button>`).join('') : '<p>Henüz not yok.</p>'}`;
  document.querySelectorAll('[data-yapi]').forEach(b => b.addEventListener('click', () => { const y = yapilar[b.dataset.yapi]; g.secili = new Set(y.parcalar); g.acikSistemler.add(y.sistem); g.guncelle(); g.odakla(y.parcalar); cekmeceAc(y.parcalar[0]); }));
}

yanCiz();
window.__anatomi = { g, parcalar, yapilar, konular };

// ---------- Arayüz: çip grupları, durum şeridi, yüzen panel için görüntü kaydırma ----------
// Az seçenekli kutular (Model, Sınıf, Adlar) çip grubu olarak gösterilir; asıl seçim kutusu yerinde durur ve değişikliği o taşır.
for (const [id, kisalt] of [['cinsiyet', t => t], ['sinif', t => t.match(/^\d+\. sınıf/i)?.[0] ?? t], ['dil', t => t]]) {
  const kutu = $('#' + id), grup = document.createElement('span'); grup.className = 'cip-grup'; grup.setAttribute('role', 'group');
  for (const o of kutu.options) { const b = document.createElement('button'); b.type = 'button'; b.textContent = kisalt(o.textContent); b.dataset.deger = o.value; b.onclick = () => { kutu.value = o.value; kutu.dispatchEvent(new Event('change', { bubbles: true })); isaretle(); }; grup.appendChild(b); }
  const isaretle = () => { for (const b of grup.children) b.setAttribute('aria-pressed', String(b.dataset.deger === kutu.value)); };
  kutu.classList.add('cipli'); kutu.tabIndex = -1; kutu.after(grup); kutu.addEventListener('change', isaretle); isaretle();
}
// Durum şeridi: görünen yapı sayısı, açık sistem sayısı ve seçili yapı. Model her güncellendiğinde yenilenir.
function durumYaz() {
  const gorunen = g.meshler.reduce((n, m) => n + (m?.visible ? 1 : 0), 0), p = seciliParca >= 0 ? parcalar[seciliParca] : null;
  $('#durumSeridi').innerHTML = `<span>Model <b>${KADIN_MI ? 'Kadın' : 'Erkek'}</b></span><span>Görünen yapı <b>${gorunen}</b> / ${parcalar.length}</span><span>Açık sistem <b>${g.acikSistemler.size}</b></span><span>Seçili <b>${esc(p ? ((C.dil() === 'la' ? p.la : p.tr) || p.tr || p.en) : '—')}</b></span>`;
}
// Süzgeç bildirimi: modelin yalnız bir bölümü gösterilirken (sınav ve canlandırma dışında) bunu sahnede söyler.
function suzgecYaz() {
  const b = $('#suzgec'), acik = !!g.yalniz && !canli && !sinav && !tekrar && !ozel;
  b.hidden = !acik; if (acik) b.innerHTML = `Yalnız ${g.yalniz.size} yapı gösteriliyor<b>Tümünü göster</b>`;
}
$('#suzgec').onclick = () => { sahneSifirla(); g.gorunus('on'); yanCiz(); };
// Seçili yapıyı tek dokunuşla gizle: üstteki yapı (ör. büyük omentum) kalkar, altındakiler görünür ve seçilebilir olur.
$('#sahneGizle').onclick = () => { if (seciliParca < 0) return; yapiGizle(seciliParca); secimiBirak(); if (sekme === 'kesfet') kesfetCiz(); };
// Gizlenen yapı varsa sahnenin üstünde sayısı ve geri getirme düğmesi durur (canlandırmanın geçici gizlemeleri sayılmaz).
function gizliYaz() {
  const b = $('#gizliSerit'), acik = (g.gizli.size > 0 || soyulan.length > 0 || g.solukParca.size > 0) && !canli && !sinav && !tekrar && !ozel && !baglanma;
  b.hidden = !acik; if (!acik) return;
  const say = set => new Set([...set].map(i => (parcalar[i]?.anahtar ?? 'p' + i) + parcaYani(i))).size, metin = [];
  if (soyulan.length) metin.push(`Kaldırılan katman: ${KATMANLAR[soyulan[soyulan.length - 1].n].ad}`);
  if (g.gizli.size) metin.push(`${say(g.gizli)} yapı gizli`);
  if (g.solukParca.size) metin.push(`${say(g.solukParca)} yapı soluk`);
  // Başka yoldan geri gelmiş olanlar listeden düşer (ör. aramadan seçilen gizli yapı görünür olur).
  for (let k = gizlemeSirasi.length - 1; k >= 0; k--) { const e = gizlemeSirasi[k]; if (e.tur === 'yapi' ? !e.is.some(j => g.gizli.has(j)) : !soyulan.some(s => s.n === e.n)) gizlemeSirasi.splice(k, 1); }
  const liste = gizliListeAcik && gizlemeSirasi.length ? `<ol class="gizli-liste">${gizlemeSirasi.map((e, k) => `<li><span>${esc(e.ad)}</span><button type="button" data-geri="${k}">Geri getir</button></li>`).join('')}</ol>` : '';
  b.innerHTML = `<span>${metin.join(' · ')}</span>${gizlemeSirasi.length ? `<button type="button" data-geri="liste" aria-expanded="${gizliListeAcik}">${gizliListeAcik ? 'Listeyi kapat' : 'Tek tek'}</button>` : ''}<button type="button" data-geri="hepsi">Hepsini geri getir</button>${liste}`;
}
let gizliListeAcik = false;
$('#gizliSerit').onclick = e => {
  const d = e.target.closest('[data-geri]')?.dataset.geri; if (!d) return;
  if (d === 'liste') { gizliListeAcik = !gizliListeAcik; gizliYaz(); return; }
  if (d === 'hepsi') { g.gizli = new Set(); katmanSifirla(); gizlemeSirasi.length = 0; g.solukParca.clear(); gizliListeAcik = false; g.guncelle(); if (sekme === 'kesfet') kesfetCiz(); return; }
  tekGeriGetir(Number(d));
};
{ const asil = g.guncelle.bind(g); g.guncelle = () => { asil(); durumYaz(); suzgecYaz(); gizliYaz(); }; durumYaz(); suzgecYaz(); gizliYaz(); }
{ const genis = matchMedia('(min-width: 901px) and (orientation: landscape), (min-width: 1101px)');
  const ayarla = () => { g.yanBosluk = genis.matches ? document.querySelector('.yan').offsetWidth + 14 : 0; g._boyut(); };
  genis.addEventListener('change', ayarla); addEventListener('resize', ayarla); ayarla(); }

// Sahnedeki büyük durum yazısı: canlandırma kartındaki evre ya da adım bilgisini büyük harflerle yansıtır.
new MutationObserver(() => {
  const d = $('#canliDurum'), kutu = $('#buyukDurum'), acik = !!canli && !!d?.textContent;
  kutu.hidden = !acik; if (!acik) return;
  kutu.firstElementChild.textContent = canli.ad; kutu.lastElementChild.textContent = d.textContent;
}).observe($('#soruKarti'), { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['hidden'] });

// Geliştirme ölçümü: yalnız adres ?debug=1 ile açıldığında, denetim betikleri için görüntüleyiciye erişim verir.
if (BAGLANTI.get('debug') === '1') window.__anatomi = { g, parcalar, yapilar, get canli() { return canli; } };
