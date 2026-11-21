// Arayüz: sekmeler, arama, katmanlar, kesit, yapı ayrıntısı, sınav, tekrar kartları, plan, ilerleme, notlar.
import { Goruntuleyici } from './gorunum.js';
import { coz, TERIM } from './terimler.js';
import { SISTEMLER, sistemBul, VARSAYILAN_ACIK } from './sistemler.js';
import { DOGRULAMA } from './dogrulama.js';
import * as C from './calisma.js';
import { ekModelleriYukle } from './ekmodel.js';
import { KAS_BILGI } from './kasbilgi.js';

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s).toLocaleLowerCase('tr').replace(/[çğıöşüâî]/g, c => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i' }[c]));
const SISTEM = Object.fromEntries(SISTEMLER.map(s => [s.id, s]));

// ---------- Veri ----------
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
  .then(() => { $('#yukleniyor').hidden = true; if (!KADIN_MI) ekKatman(); })
  .catch(e => { $('#yukleniyor').innerHTML = `<p>Model yüklenemedi: ${esc(e.message)}</p><p class="kucuk">Simülatörü "Simulatoru-Ac.command" dosyasıyla açtığından emin ol.</p>`; });

// Erkek modelde eksik yapılar (sinirler, lenf, akciğer lobları, karaciğer...) ikinci açık modelden eklenir.
async function ekKatman() {
  const not = $('#ekDurum');
  try {
    if (not) not.textContent = 'Ek katman yükleniyor: sinirler, lenf düğümleri, akciğer ve karaciğer…';
    const ekler = await ekModelleriYukle(parcalar);
    for (const e of ekler) {
      const i = g.ekParca(e.geometry, e.sistem, e.bounds);
      TERIM[e.anahtar] ??= { tr: e.la, la: e.la, lv: 3, fn: e.fn, ip: '', ek: true };
      parcalar.push({ i, en: e.en, sistem: e.sistem, anahtar: e.anahtar, tr: e.tr, la: e.la, ek: '', bounds: e.bounds, kaynak: 'Z-Anatomy' });
      const y = (yapilar[e.anahtar] ??= { anahtar: e.anahtar, ...TERIM[e.anahtar], sistem: e.sistem, parcalar: [], enler: [] });
      y.parcalar.push(i); y.enler.push(e.enKucuk);
      aramaDizini.push({ i, metin: norm([e.tr, e.la, e.en].join(' | ')) });
    }
    g.guncelle(); ekYuklendi = ekler.length; yanCiz();
  } catch (h) { if (not) not.textContent = 'Ek katman yüklenemedi: ' + h.message; }
}
let ekYuklendi = 0;

let sekme = 'kesfet', aktifKonu = null, sinav = null, tekrar = null, seciliParca = -1;
const kesit = { acik: false, eksen: 'y', oran: 0.5, ters: false };

g.tikla = i => {
  if (sinav && !sinav.cevaplandi && sinav.sorular[sinav.sira].tip === 'bul') return sinavBulCevap(i);
  if (sinav || tekrar) return;
  if (i < 0) { secimiBirak(); return; }
  parcaSec(i, false);
};

// ---------- Sekmeler ----------
document.querySelectorAll('[data-sekme]').forEach(b => b.addEventListener('click', () => sekmeAc(b.dataset.sekme)));
function sekmeAc(ad) {
  if (sinav && ad !== 'sinav') sinavBitir(false);
  if (tekrar && ad !== 'tekrar') tekrarBitir();
  sekme = ad;
  document.querySelectorAll('[data-sekme]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.sekme === ad)));
  yanCiz();
}
function yanCiz() {
  ({ kesfet: kesfetCiz, sinav: sinavCiz, tekrar: tekrarCiz, plan: planCiz, ilerleme: ilerlemeCiz, notlar: notlarCiz })[sekme]();
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
$('#sinif').addEventListener('change', e => { C.sinifAyarla(e.target.value); komiteListesi(); aktifKonu = null; yanCiz(); });
$('#komite').addEventListener('change', e => { C.komiteAyarla(e.target.value); aktifKonu = null; yanCiz(); });
$('#dil').value = C.dil();
$('#dil').addEventListener('change', e => { C.dilAyarla(e.target.value); yanCiz(); if (seciliParca >= 0 && !$('#cekmece').hidden) cekmeceAc(seciliParca); });
$('#yardimDugme').addEventListener('click', () => $('#yardim').showModal());
document.querySelectorAll('[data-yon]').forEach(b => b.addEventListener('click', () => g.gorunus(b.dataset.yon)));

// ---------- Keşfet ----------
function kesfetCiz() {
  const sayi = {}; parcalar.forEach(p => { sayi[p.sistem] = (sayi[p.sistem] || 0) + 1; });
  const konuBandi = aktifKonu ? `<div class="ek">Yalnız <b>${esc(KONU[aktifKonu].ad)}</b> gösteriliyor. <button id="tumunuGoster" class="ikincil">Tümünü göster</button></div>` : '';
  $('#yan').innerHTML = `
    ${konuBandi}
    <h2>Yapı ara</h2>
    <input id="arama" class="arama" type="search" placeholder="Örn. uyluk, femur, mide, kaburga" autocomplete="off" aria-label="Yapı ara">
    <ul id="sonuclar" class="sonuclar"></ul>
    <p id="ekDurum" class="kucuk">${ekYuklendi ? `Ek katman yüklendi: ${ekYuklendi} yapı (sinirler, lenf düğümleri, akciğer lobları, karaciğer, tiroid).` : ''}</p>
    <div class="bolum"><h3>Sistemler</h3>
      <ul class="sistemler">${SISTEMLER.map(s => `<li><label><input type="checkbox" data-sistem="${s.id}" ${g.acikSistemler.has(s.id) ? 'checked' : ''}><span class="nokta" style="background:${s.renk}"></span>${esc(s.ad)}</label>${s.ayrinti ? '<span class="etiket" title="Bütün yapıların Türkçe ve Latince adı var">tam ayrıntı</span>' : ''}<span class="kucuk">${sayi[s.id] || 0}</span></li>`).join('')}</ul>
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
    </div>
    <p class="kucuk">${KADIN_MI ? 'Model: HuBMAP İnsan Referans Atlası (yetişkin kadın). Organlar ayrıntılı; iskelet ve kaslar kısmi (omurga, diz, birkaç kas). Tam iskelet ve kaslar için üstten Erkek modeline geç.' : 'Model: BodyParts3D (yetişkin erkek) ve Z-Anatomy ek katmanı (sinirler, lenf düğümleri, akciğer lobları, tiroid). Ek katman asıl modele yaklaşık 1 cm hassasiyetle oturur. Böbreğin iç yapısı ve kadın organları için üstten Kadın modeline geç.'}</p>`;
  $('#tumunuGoster')?.addEventListener('click', () => { aktifKonu = null; g.yalniz = null; g.guncelle(); g.gorunus('on'); kesfetCiz(); });
  $('#arama').addEventListener('input', e => aramaYap(e.target.value));
  document.querySelectorAll('[data-sistem]').forEach(k => k.addEventListener('change', () => {
    k.checked ? g.acikSistemler.add(k.dataset.sistem) : g.acikSistemler.delete(k.dataset.sistem); g.guncelle();
  }));
  $('#hepsiAc').onclick = () => { g.acikSistemler = new Set(SISTEMLER.map(s => s.id).filter(s => s !== 'deri')); g.guncelle(); kesfetCiz(); };
  $('#hepsiKapa').onclick = () => { g.acikSistemler = new Set(); g.guncelle(); kesfetCiz(); };
  $('#gizlileriGoster').onclick = () => { g.gizli = new Set(); g.guncelle(); kesfetCiz(); };
  const kesitUygula = () => { g.kesitAyarla(kesit.acik, kesit.eksen, kesit.oran, kesit.ters); };
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
  return `<table class="kas-tablo">${satir('Başlangıç (origo)', k.origo)}${satir('Sonlanma (insertio)', k.insertio)}${satir('Sinir', k.sinir)}${kisa ? '' : satir('Atardamar', k.damar)}${satir('Görev', k.gorev)}${kisa ? '' : satir('Klinik', k.klinik)}</table>
    ${kisa ? '' : `<p class="kucuk">${k.belirsiz ? '<span class="durum dogrulanmadi">Bu kasın bilgisi belirsiz; hocana sor.</span> ' : ''}Sinir kök değerleri kitaptan kitaba bir kök değişebilir; fakültendeki ders notunu esas al. ${k.kaynak ? `<a href="${esc(k.kaynak)}" target="_blank" rel="noopener">kaynak</a>` : ''}</p>`}`;
}

// ---------- Seçim ve ayrıntı penceresi ----------
function parcaSec(i, odakla) {
  const p = parcalar[i];
  if (!g.acikSistemler.has(p.sistem) && !g.yalniz) { g.acikSistemler.add(p.sistem); if (sekme === 'kesfet') kesfetCiz(); }
  g.gizli.delete(i);
  seciliParca = i; g.secili = new Set([i]); g.guncelle();
  if (odakla) g.odakla([i]);
  const et = $('#secimEtiketi'); et.hidden = false; et.textContent = p.tr || p.en;
  cekmeceAc(i);
}
function secimiBirak() { seciliParca = -1; g.secili = new Set(); g.guncelle(); $('#secimEtiketi').hidden = true; cekmeceKapat(); }

function dogrulamaRozeti(a) {
  const d = a && DOGRULAMA[a];
  if (d?.durum === 'dogrulandi') return `<span class="durum dogrulandi">Kaynakla kontrol edildi</span>${d.kaynak ? ` <a class="kucuk" href="${esc(d.kaynak)}" target="_blank" rel="noopener">kaynak</a>` : ''}`;
  if (a?.startsWith('z:')) return '<span class="durum dogrulanmadi" title="Bu ad Z-Anatomy projesinin terim tablosundan geliyor; burada ayrıca karşılaştırılmadı">Ad: Z-Anatomy terim tablosu (ayrıca kontrol edilmedi)</span>';
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
  $('#cekmeceIcerik').innerHTML += `
    <h3>Komşu yapılar</h3>
    <div class="komsular">${ks.length ? ks.map(q => `<button data-komsu="${q.i}">${esc(q.tr || q.en)}</button>`).join('') : '<span class="kucuk">Yakında başka yapı yok.</span>'}</div>
    <div class="dugme-satiri">
      <button id="yakinlas" class="ikincil">Yakınlaştır</button>
      <button id="yalnizBu" class="ikincil">${g.yalniz?.size === 1 && g.yalniz.has(i) ? 'Hepsini göster' : 'Yalnız bunu göster'}</button>
      <button id="gizle" class="ikincil">Bunu gizle</button>
    </div>
    ${p.anahtar ? `<h3>Benim notum</h3><textarea id="notAlani" class="not" placeholder="Bu yapıyla ilgili kendi notunu yaz. Kendiliğinden kaydedilir.">${esc(C.notAl(p.anahtar))}</textarea><p id="notDurum" class="kucuk"></p>` : ''}`;
  $('#cekmeceIcerik').querySelectorAll('[data-komsu]').forEach(b => b.addEventListener('click', () => parcaSec(Number(b.dataset.komsu), true)));
  $('#yakinlas').onclick = () => g.odakla([i]);
  $('#yalnizBu').onclick = () => { g.yalniz = g.yalniz?.size === 1 && g.yalniz.has(i) ? null : new Set([i]); aktifKonu = null; g.guncelle(); g.odakla(g.yalniz ? [i] : [i]); cekmeceAc(i); };
  $('#gizle').onclick = () => { g.gizli.add(i); secimiBirak(); if (sekme === 'kesfet') kesfetCiz(); };
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
  aktifKonu = id;
  const ps = k.liste.flatMap(a => yapilar[a].parcalar);
  g.yalniz = new Set(ps); g.secili = new Set(); g.guncelle(); g.odakla(ps);
}

// ---------- Sınav ----------
function sinavCiz(seciliKonu) {
  if (sinav) return sinavYanCiz();
  const ks = konular();
  $('#yan').innerHTML = `
    <h2>Sınav</h2>
    <p class="kucuk">İki tür soru var. <b>Bunu bul:</b> adı verilen yapıyı modelde tıklarsın. <b>Bunun adı ne?</b> Turuncu yapının adını seçersin. Yanlış yaptığın yapılar sonraki sınavlarda ve tekrar kartlarında daha sık gelir.</p>
    <label>Konu<select id="sinavKonu" class="tam">
      ${ks.map(k => `<option value="${k.id}" ${k.id === (seciliKonu || aktifKonu) ? 'selected' : ''}>${esc(k.ad)} (${k.liste.length} yapı)</option>`).join('')}
      <option value="hepsi">Bütün konular karışık</option></select></label>
    <div class="satir"><label>Soru sayısı <select id="sinavAdet"><option>5</option><option selected>10</option><option>20</option></select></label></div>
    <div class="satir"><label>Soru türü <select id="sinavTur"><option value="karisik">Karışık</option><option value="bul">Yalnız "Bunu bul"</option><option value="ad">Yalnız "Bunun adı ne?"</option></select></label></div>
    <button id="sinavBasla" style="width:100%">Sınavı başlat</button>`;
  $('#sinavBasla').onclick = () => {
    const kid = $('#sinavKonu').value;
    const liste = kid === 'hepsi' ? tumAnahtarlar() : ks.find(k => k.id === kid).liste;
    sinavBaslat(liste, Number($('#sinavAdet').value), $('#sinavTur').value, kid);
  };
}

function sinavBaslat(liste, adet, tur, konuId) {
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
  g.soru = new Set(); g.secili = new Set(); g.yalniz = null; aktifKonu = null; g.guncelle();
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
  if (tip === 'ad') { g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar); }
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
  if (tip === 'bul') { g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar); }
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
function tekrarBitir() { tekrar = null; $('#soruKarti').hidden = true; g.soru = new Set(); g.soluk = null; g.guncelle(); }

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
