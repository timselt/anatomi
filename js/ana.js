// Arayüz: sekmeler, arama, katmanlar, kesit, yapı ayrıntısı, sınav, tekrar kartları, plan, ilerleme, notlar.
import { Goruntuleyici } from './gorunum.js';
import { coz, TERIM } from './terimler.js';
import { SISTEMLER, sistemBul, VARSAYILAN_ACIK } from './sistemler.js';
import { DOGRULAMA } from './dogrulama.js';
import * as C from './calisma.js';
import { ekModelleriYukle } from './ekmodel.js';
import { KAS_BILGI } from './kasbilgi.js';
import { VAKALAR } from './vakalar.js';
import { AKISLAR, KALP, SOLUNUM, HAREKETLER, KEMIK_GRUBU } from './canli.js';
import * as T from 'three';
import { MIKRO } from './mikro.js';

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
  .then(() => { $('#yukleniyor').hidden = true; baglantiAc(); if (!KADIN_MI) ekKatman(); })
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
    g.guncelle(); if (g.patlama) g.patlat(g.patlama); ekYuklendi = ekler.length; yanCiz(); baglantiAc();
  } catch (h) { if (not) not.textContent = 'Ek katman yüklenemedi: ' + h.message; }
}
let ekYuklendi = 0;
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
  if (sinav && ad !== 'sinav') sinavBitir(false);
  if (ozel && ad !== 'sinav') ozelBitir(false);
  if (canli && ad !== 'canli') canliBitir(false);
  if (ad !== 'canli') document.querySelector('#mikroPano')?.remove();
  if (tekrar && ad !== 'tekrar') tekrarBitir();
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
    <p id="ekDurum" class="kucuk">${ekYuklendi ? `Ek katman yüklendi: ${ekYuklendi} yapı (sinirler, lenf düğümleri, akciğer lobları, karaciğer, tiroid).` : ''}</p>
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
    <p class="kucuk">${KADIN_MI ? 'Model: HuBMAP İnsan Referans Atlası (yetişkin kadın). Organlar ayrıntılı; iskelet ve kaslar kısmi (omurga, diz, birkaç kas). Tam iskelet ve kaslar için üstten Erkek modeline geç.' : 'Model: BodyParts3D (yetişkin erkek) ve Z-Anatomy ek katmanı (sinirler, lenf düğümleri, akciğer lobları, tiroid). Ek katman asıl modele yaklaşık 1 cm hassasiyetle oturur. Böbreğin iç yapısı ve kadın organları için üstten Kadın modeline geç.'}</p>`;
  $('#tumunuGoster')?.addEventListener('click', () => { aktifKonu = null; g.yalniz = null; g.guncelle(); g.gorunus('on'); etiketleriGuncelle(); kesfetCiz(); });
  $('#arama').addEventListener('input', e => aramaYap(e.target.value));
  document.querySelectorAll('[data-saydam]').forEach(b => b.addEventListener('click', () => { const id = b.dataset.saydam; g.saydamSistem.has(id) ? g.saydamSistem.delete(id) : g.saydamSistem.add(id); g.acikSistemler.add(id); g.guncelle(); kesfetCiz(); }));
  $('#patlat').oninput = e => g.patlat(Number(e.target.value));
  $('#odakModu').onchange = e => { odakModu = e.target.checked; g.soluk = odakModu && seciliParca >= 0 ? new Set(yapilar[parcalar[seciliParca].anahtar]?.parcalar ?? [seciliParca]) : null; g.guncelle(); };
  $('#etiketAcik').onchange = e => { etiketAcik = e.target.checked; etiketleriGuncelle(); };
  $('#olcumModu').onchange = e => { olcumModu = e.target.checked; if (!olcumModu) g.olcumTemizle(); $('#olcumDurum').textContent = olcumModu ? 'Modelde ilk noktayı tıkla.' : ''; };
  $('#goruntuKaydet').onclick = () => { const a = document.createElement('a'); a.href = g.goruntu(); a.download = `anatomi-${new Date().toLocaleDateString('sv-SE')}.png`; a.click(); };
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
  seciliParca = i; g.secili = new Set([i]); if (odakModu) g.soluk = new Set(yapilar[p.anahtar]?.parcalar ?? [i]); g.guncelle(); etiketleriGuncelle();
  if (odakla) g.odakla([i]);
  const et = $('#secimEtiketi'); et.hidden = false; et.textContent = p.tr || p.en;
  cekmeceAc(i);
}
function secimiBirak() { seciliParca = -1; g.secili = new Set(); if (odakModu) g.soluk = null; g.guncelle(); etiketleriGuncelle(); $('#secimEtiketi').hidden = true; cekmeceKapat(); }

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
      <button id="parcalaDugme" class="ikincil">${parcali ? 'Topla' : 'Parçalarına ayır'}</button>
      <button id="icineGir" class="ikincil">İçine gir</button>
    </div>
    ${p.anahtar ? `<div class="dugme-satiri"><button id="baglantiKopyala" class="ikincil">Bağlantıyı kopyala</button><a class="dugme ikincil" target="_blank" rel="noopener" href="https://claude.ai/new?q=${encodeURIComponent(`Tıp fakültesi öğrencisiyim. ${p.la || y.la} (${p.tr}) yapısını Türkçe anlat: yeri, komşulukları, damarı ve siniri, klinik önemi. Yapı adlarını Latince yaz. Sonunda beni sınamak için 3 kısa soru sor.`)}">Yapay zekâya sor</a></div><p id="baglantiDurum" class="kucuk"></p>` : ''}
    ${p.anahtar ? `<h3>Benim notum</h3><textarea id="notAlani" class="not" placeholder="Bu yapıyla ilgili kendi notunu yaz. Kendiliğinden kaydedilir.">${esc(C.notAl(p.anahtar))}</textarea><p id="notDurum" class="kucuk"></p>` : ''}`;
  $('#cekmeceIcerik').querySelectorAll('[data-komsu]').forEach(b => b.addEventListener('click', () => parcaSec(Number(b.dataset.komsu), true)));
  $('#yakinlas').onclick = () => g.odakla([i]);
  $('#icineGir').onclick = () => { cekmeceKapat(); g.icineGir(i); };
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
  g.soru = new Set(); g.secili = new Set(); g.yalniz = null; aktifKonu = null; g.guncelle();
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
  g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar);
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
    g.acikSistemler.add(y.sistem); g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar);
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
    document.querySelectorAll('[data-ist]').forEach(t => t.addEventListener('click', () => { const y = yapilar[ozel.ist[Number(t.dataset.ist)].a]; g.soru = new Set(y.parcalar); g.soluk = new Set(y.parcalar); g.guncelle(); g.odakla(y.parcalar); }));
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
  g.soru = new Set(); g.soluk = null; g.secili = new Set(); g.yalniz = null; aktifKonu = null; g.guncelle();
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
  const akisVar = a => a.adimlar.filter(ad => parcaListesi(ad.y).length).length >= 3;
  $('#yan').innerHTML = `<h2>Canlandırmalar</h2>
    <p class="kucuk">Vücudun nasıl çalıştığını adım adım izle. Her canlandırmada açıklama modelin altındaki kartta çıkar; duraklatıp modeli döndürebilirsin.</p>
    <h3>Hareketli gösterimler</h3>
    <button class="liste-dugme" data-canli="kalp" ${parcaListesi(KALP.karincik).length ? '' : 'disabled'}>${esc(KALP.ad)}<small>Kulakçık ve karıncıkların sırayla kasılması, kapaklar ve kalp sesleri</small></button>
    <button class="liste-dugme" data-canli="solunum" ${KADIN_MI ? 'disabled' : ''}>${esc(SOLUNUM.ad)}<small>Diyafram ve kaburgaların nefes alıp verirken hareketi${KADIN_MI ? ' (Erkek modelde)' : ''}</small></button>
    <h3>Adım adım yollar</h3>
    ${AKISLAR.map(a => `<button class="liste-dugme" data-akis="${a.id}" ${akisVar(a) ? '' : 'disabled'}>${esc(a.ad)}<small>${a.adimlar.length} adım</small></button>`).join('')}
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
  cekmeceKapat(); $('#secimEtiketi').hidden = true; g.etiketle([]); g.olcumTemizle(); ustuneGel.hidden = true;
  if (g.patlama) { g.patlat(0); }
  const oncekiSistemler = new Set(g.acikSistemler);
  g.acikSistemler = new Set(sistemler); // canlandırma boyunca yalnız ilgili sistemler görünür
  canli = { oncekiSistemler, tip, ad, oynuyor: true, dokunulan: new Set(), gizlenen: new Set(), bas: performance.now(), durakta: 0 };
}
function canliKart(icerik) {
  const k = $('#soruKarti');
  k.innerHTML = `<div class="ust-bilgi"><span>Canlandırma</span><span id="canliDurum"></span></div><p class="soru">${esc(canli.ad)}</p><div id="canliIcerik">${icerik}</div>
    <div class="dugme-satiri">${canli.tip === 'akis' ? '<button id="canliOnceki" class="ikincil">Önceki</button>' : ''}<button id="canliOynat">Duraklat</button>${canli.tip === 'akis' ? '<button id="canliSonraki" class="ikincil">Sonraki</button>' : ''}<button id="canliKapat" class="ikincil">Kapat</button></div>`;
  k.hidden = false;
  $('#canliOynat').onclick = () => { canli.oynuyor = !canli.oynuyor; if (canli.oynuyor) canli.bas += performance.now() - canli.durakta; else canli.durakta = performance.now(); $('#canliOynat').textContent = canli.oynuyor ? 'Duraklat' : 'Oynat'; };
  $('#canliKapat').onclick = () => canliBitir(true);
}
const canliZaman = t => (canli.oynuyor ? t : canli.durakta) - canli.bas;

const AKIS_AYAR = {
  dolasim: { renk: n => (n < 7 ? 0x3d7bfd : 0xff3b30), adet: 220, yayilim: 1, ad: 'kan hücreleri' },
  sindirim: { renk: () => 0xffa000, adet: 18, yayilim: 0.035, boyut: 0.006, ad: 'lokma' },
  hava: { renk: () => 0x40c4ff, adet: 120, yayilim: 0.5, ad: 'hava (oksijen)' },
  idrar: { renk: n => (n < 3 ? 0xff3b30 : 0xffd600), adet: 120, yayilim: 0.6, ad: 'süzüntü' },
  gorme: { renk: () => 0xfff176, adet: 40, yayilim: 0.12, boyut: 0.0028, ad: 'sinir uyarısı' },
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
      if (n === 0 && benim.length === 2 && !benim[0].yan && !benim[1].yan) benim = [benim[k]]; // ör. üst ve alt ana toplardamar: iki ayrı kol
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
function akisBaslat(a) {
  canliHazirla('akis', a.ad, a.sistemler);
  canli.adimlar = a.adimlar.map(ad => ({ m: ad.m, p: parcaListesi(ad.y), yol: parcaListesi(ad.yol ?? ad.y) })).filter(ad => ad.p.length && ad.yol.length);
  canli.sira = -1;
  const hepsi = canli.adimlar.flatMap(ad => ad.p), ayar = AKIS_AYAR[a.id], { yollar, adimBasi } = yolCikar(canli.adimlar);
  let adimT = [[], []];
  const adimBul = (t, k = 0) => { let n = 0; for (let i = 0; i < adimT[k].length; i++) if (t >= adimT[k][i] - 1e-6) n = i; return n; };
  g.yalniz = null; g.soluk = new Set(); g.soru = new Set(); g.secili = new Set(); g.guncelle(); g.gorunus('on', false); g.odakla(hepsi);
  g.akisKur(yollar, (t, k) => ayar.renk(adimBul(t, k)), ayar);
  adimT = adimBasi.map((b, k) => b.map(n => g.akisOran(k, n)));
  canliKart(''); canliYanCiz();
  $('#canliKapat').insertAdjacentHTML('beforebegin', '<button id="canliTakip" class="ikincil">Yolculuğa katıl</button>');
  $('#canliTakip').onclick = () => { g.akis.takip = !g.akis.takip; $('#canliTakip').textContent = g.akis.takip ? 'Dışarıdan izle' : 'Yolculuğa katıl'; if (!g.akis.takip) g.odakla(hepsi); };
  const goster = n => {
    canli.sira = n; const ad = canli.adimlar[n];
    $('#canliDurum').textContent = `Adım ${n + 1} / ${canli.adimlar.length}`;
    $('#canliIcerik').innerHTML = `<p>${esc(ad.m)}</p><p class="kucuk">Parlak noktalar: ${esc(ayar.ad)}. "Yolculuğa katıl" ile kamera onların peşinden gider.</p>`;
    canliYanCiz();
  };
  const git = d => { const n = (canli.sira + d + canli.adimlar.length) % canli.adimlar.length; g.akis.faz = adimT[0][n] + 0.002; goster(n); };
  $('#canliOnceki').onclick = () => git(-1); $('#canliSonraki').onclick = () => git(1);
  goster(0);
  let son = performance.now();
  g.canli = t => {
    const dt = Math.min(t - son, 100); son = t;
    const faz = g.akisAdim(canli.oynuyor ? dt / (canli.adimlar.length * 4200) : 0), n = adimBul(faz);
    if (n !== canli.sira) goster(n);
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
  // Şematik EKG: P dalgası kulakçık, QRS karıncık kasılmasından hemen önce gelir; T dalgası karıncıkların toparlanmasıdır.
  $('#canliIcerik').insertAdjacentHTML('afterend', `<svg class="ekg" viewBox="0 0 300 70" role="img" aria-label="Şematik EKG">
    <path d="M0 45 H12 Q21 31 30 45 H54 L58 50 L63 8 L68 60 L72 45 H128 Q148 22 168 45 H300" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <text x="16" y="66">P</text><text x="57" y="66">QRS</text><text x="143" y="66">T</text><line id="ekgImlec" x1="0" x2="0" y1="2" y2="56" stroke="var(--turuncu)" stroke-width="2"/></svg>
    <p class="kucuk">Şematik EKG, ağır çekim. Mavi noktalar oksijeni az, kırmızı noktalar oksijeni bol kan.</p>`);
  evreGoster(KALP.evreler, 0); canli.evre = -1;
  let son = performance.now();
  g.canli = t => {
    const p = (canliZaman(t) / 7000) % 1;
    const a = p < 0.22 ? 1 - 0.14 * Math.sin((Math.PI * p) / 0.22) : 1;
    const v = p >= 0.22 && p < 0.6 ? 1 - 0.19 * Math.sin((Math.PI * (p - 0.22)) / 0.38) : 1;
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
  evreGoster(SOLUNUM.evreler, 0);
  // Hava parçacıkları: nefes alırken burundan akciğere, verirken geri akar (verilen hava gri gösterilir).
  let veriyor = false, onceki = 0;
  if (yolAdim.length > 2) g.akisKur(yolCikar(yolAdim).yollar, () => (veriyor ? 0x8e9aa8 : 0x40c4ff), { adet: 120, yayilim: 0.45, boyut: 0.003 });
  $('#canliIcerik').insertAdjacentHTML('afterend', '<p class="kucuk">Mavi noktalar alınan, gri noktalar verilen havadır. Hareketler görülebilsin diye büyütülmüştür.</p>');
  g.canli = t => {
    const p = (canliZaman(t) / 8000) % 1;
    const k = yumusak(p < 0.45 ? p / 0.45 : 1 - (p - 0.45) / 0.55);
    veriyor = p >= 0.45; if (g.akis) g.akisAdim((k - onceki) * 0.5); onceki = k;
    const mk = olcekMatrisi(c, 1 + 0.08 * k, 1, 1 + 0.09 * k, 0.012 * k), ma = olcekMatrisi(c, 1 + 0.09 * k, 1 + 0.07 * k, 1 + 0.1 * k, -0.01 * k);
    const md = new T.Matrix4().makeTranslation(0, -0.03 * k, 0);
    kafes.forEach(i => g.donusum(i, mk)); akciger.forEach(i => g.donusum(i, ma)); diyafram.forEach(i => g.donusum(i, md));
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
  g.canli = t => {
    const p = (canliZaman(t) / 8000) % 1;
    let k = p < 0.3 ? 0 : p < 0.6 ? yumusak((p - 0.3) / 0.3) : p < 0.75 ? 1 : yumusak(1 - (p - 0.75) / 0.25);
    const kasGizli = false;
    if (canli.kasGizli !== kasGizli) { canli.kasGizli = kasGizli; kaslar.forEach(i => (kasGizli ? g.gizli.add(i) : g.gizli.delete(i))); kaslar.forEach(i => canli.gizlenen.add(i)); g.yalniz = new Set([...iskelet, ...(kasGizli ? [] : kaslar)]); g.soru = new Set(kasGizli ? [] : yapan); g.secili = new Set(kasGizli ? [] : karsit); g.guncelle(); $('#canliDurum').textContent = kasGizli ? 'Hareket' : 'Kaslar'; }
    if (h.ters) k = 1 - k;
    const m = new T.Matrix4().makeTranslation(merkez.x, merkez.y, merkez.z).multiply(new T.Matrix4().makeRotationAxis(eksen, T.MathUtils.degToRad(h.aci) * k)).multiply(new T.Matrix4().makeTranslation(-merkez.x, -merkez.y, -merkez.z));
    oynayan.forEach(i => g.donusum(i, m));
    if (k === sonK) return; sonK = k;
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
  if (canli) { canli.geri?.(); canli.dokunulan.forEach(i => g.donusum(i, null)); canli.gizlenen.forEach(i => g.gizli.delete(i)); g.acikSistemler = canli.oncekiSistemler; }
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
