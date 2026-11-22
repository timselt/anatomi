// Mikroskobik sahneler: organların içinde, gözle görülmeyen düzeyde ne olduğunu gösteren şematik çizimler.
// Çizimler öğretim amaçlı sadeleştirmedir; gerçek ölçekli değildir. ilgili: modelde gösterilecek yapının anahtarı.
const nokta = (renk, yol, sure, gecikme = 0, r = 4) => `<circle r="${r}" fill="${renk}"><animateMotion dur="${sure}s" begin="${gecikme}s" repeatCount="indefinite" path="${yol}"/></circle>`;
const yazi = (x, y, t, ek = '') => `<text x="${x}" y="${y}" font-size="13" fill="#1d2329" ${ek}>${t}</text>`;
const cizgi = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#5b6672" stroke-width="1"/>`;
const dizi = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');

export const MIKRO = [
  { id: 'alveol', ad: 'Hava keseciğinde gaz alışverişi', ilgili: 'z:superior lobe of right lung', svg: `
    <circle cx="240" cy="105" r="88" fill="#e6f3fb" stroke="#7fb2d6" stroke-width="5"/>
    <path d="M40 232 H440" stroke="#c0392b" stroke-width="44" stroke-linecap="round" opacity=".25"/>
    <path d="M40 232 H240" stroke="#4f7ba3" stroke-width="44" stroke-linecap="round" opacity=".35"/>
    ${dizi(4, i => nokta('#2e86de', `M${190 + i * 34} 110 V228`, 4, i * 0.9))}
    ${dizi(4, i => nokta('#7f8c8d', `M${175 + i * 34} 236 V118`, 4, 0.4 + i * 0.9))}
    ${dizi(3, i => nokta('#c0392b', 'M50 232 H430', 6, i * 2, 7))}
    ${yazi(205, 60, 'Hava keseciği')}${yazi(206, 78, '(alveol)')}${yazi(48, 282, 'Oksijeni az kan')}${yazi(330, 282, 'Oksijenli kan')}
    ${yazi(300, 150, 'O₂ kana geçer', 'fill="#2e86de"')}${yazi(60, 150, 'CO₂ havaya geçer', 'fill="#5b6672"')}${yazi(196, 208, 'Kılcal damar')}`,
    adimlar: ['Hava keseciğinin (alveol) duvarı ve onu saran kılcal damarın duvarı tek sıra yassı hücreden oluşur; ikisi birlikte çok ince bir zar yapar.', 'Oksijen (mavi), yoğun olduğu hava keseciğinden az olduğu kana doğru kendiliğinden geçer (difüzyon) ve alyuvarlardaki hemoglobine bağlanır.', 'Karbondioksit (gri) ters yönde, kandan hava keseciğine geçer ve nefes verirken dışarı atılır.', 'İki akciğerde yüz milyonlarca hava keseciği vardır; toplam yüzeyleri çok geniştir. Bu yüzden gaz alışverişi hızlıdır.'] },
  { id: 'nefron', ad: 'Nefron: böbreğin süzme birimi', ilgili: 'bobrek', svg: `
    <path id="tub" d="M110 80 C150 80 170 60 200 70 S230 110 215 130 V235 C215 262 255 262 255 235 V120 C255 95 300 90 320 105 S350 110 370 100 V270" fill="none" stroke="#e0b100" stroke-width="16" stroke-linecap="round" opacity=".55"/>
    <circle cx="90" cy="80" r="34" fill="#fdecea" stroke="#b77a5f" stroke-width="4"/><circle cx="90" cy="80" r="18" fill="#c0392b" opacity=".7"/>
    <path d="M20 60 H74 M74 100 H20" stroke="#c0392b" stroke-width="7" fill="none"/>
    ${dizi(3, i => nokta('#2e86de', 'M110 80 C150 80 170 60 200 70 S230 110 215 130 V235 C215 262 255 262 255 235 V120 C255 95 300 90 320 105 S350 110 370 100 V270', 9, i * 3, 5))}
    ${dizi(3, i => nokta('#157f3b', `M${150 + i * 22} ${72 - i * 2} v-44`, 3, i * 0.8))}
    ${yazi(52, 136, 'Glomerulus ve')}${yazi(52, 152, 'Bowman kapsülü')}${yazi(138, 22, 'Geri emilim', 'fill="#157f3b"')}${yazi(150, 104, 'Proksimal tübül')}${yazi(262, 250, 'Henle kulpu')}${yazi(292, 82, 'Distal tübül')}${yazi(380, 200, 'Toplama')}${yazi(380, 216, 'kanalı')}${yazi(380, 286, 'İdrar')}`,
    adimlar: ['Süzme: kan, glomerulus adı verilen kılcal damar yumağından geçerken su ve küçük moleküller basınçla Bowman kapsülüne süzülür. Kan hücreleri ve büyük proteinler süzülmez.', 'Geri emilim: süzüntünün büyük bölümü (su, glukoz, amino asitler, tuzlar) en çok proksimal tübülde kana geri alınır.', 'Henle kulpu böbreğin iç bölgesinde tuzdan zengin bir ortam oluşturur; bu, idrarın yoğunlaştırılabilmesini sağlar.', 'Distal tübül ve toplama kanalında su ve tuz dengesi hormonlarla (ADH, aldosteron) ince ayarlanır. Kalan sıvı idrardır. Her böbrekte yaklaşık bir milyon nefron vardır.'] },
  { id: 'sarkomer', ad: 'Sarkomer: kasın kasılması', ilgili: 'pazu-kasi', svg: `
    <g><animateTransform attributeName="transform" type="translate" values="0 0;38 0;0 0" dur="5s" repeatCount="indefinite"/>
      <line x1="70" y1="60" x2="70" y2="240" stroke="#1d2329" stroke-width="5"/>${dizi(5, i => `<line x1="70" y1="${80 + i * 35}" x2="215" y2="${80 + i * 35}" stroke="#2e86de" stroke-width="4"/>`)}</g>
    <g><animateTransform attributeName="transform" type="translate" values="0 0;-38 0;0 0" dur="5s" repeatCount="indefinite"/>
      <line x1="410" y1="60" x2="410" y2="240" stroke="#1d2329" stroke-width="5"/>${dizi(5, i => `<line x1="265" y1="${80 + i * 35}" x2="410" y2="${80 + i * 35}" stroke="#2e86de" stroke-width="4"/>`)}</g>
    ${dizi(4, i => `<rect x="150" y="${92 + i * 35}" width="180" height="11" rx="5" fill="#c0392b"/>`)}
    ${yazi(52, 50, 'Z çizgisi')}${yazi(392, 50, 'Z çizgisi')}${yazi(196, 50, 'Miyozin (kalın)', 'fill="#c0392b"')}${yazi(196, 270, 'Aktin (ince)', 'fill="#2e86de"')}`,
    adimlar: ['Sarkomer, iki Z çizgisi arasında kalan kasılma birimidir. İnce iplikler (aktin) Z çizgilerine tutunur; kalın iplikler (miyozin) ortadadır.', 'Sinir uyarısı gelince kas hücresinin içinde kalsiyum salınır. Kalsiyum, aktin üzerindeki bağlanma yerlerini açar.', 'Miyozin başları aktine tutunur ve ATP enerjisiyle çekerek ince iplikleri ortaya doğru kaydırır. Z çizgileri birbirine yaklaşır, sarkomer kısalır.', 'İpliklerin boyu değişmez; yalnız birbirinin üzerinde kayarlar (kayan iplikler modeli). Kalsiyum geri pompalanınca kas gevşer.'] },
  { id: 'sinaps', ad: 'Sinaps: sinir hücreleri arasında iletim', ilgili: 'hipokampus', svg: `
    <path d="M150 10 H330 V95 C330 135 150 135 150 95 Z" fill="#fff4d6" stroke="#e0b100" stroke-width="4"/>
    <path d="M110 190 C180 165 300 165 370 190 V290 H110 Z" fill="#e6f4f2" stroke="#0f766e" stroke-width="4"/>
    ${dizi(5, i => `<circle cx="${180 + i * 30}" cy="${60 + (i % 2) * 22}" r="11" fill="none" stroke="#b45309" stroke-width="3"/>`)}
    ${dizi(5, i => nokta('#b45309', `M${185 + i * 28} 118 V176`, 2.6, i * 0.5))}
    ${dizi(5, i => `<rect x="${178 + i * 28}" y="176" width="14" height="14" fill="#0f766e"/>`)}
    <path d="M240 0 V40" stroke="#c0392b" stroke-width="4" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" values="22;0" dur="1s" repeatCount="indefinite"/></path>
    ${yazi(340, 60, 'Akson ucu')}${yazi(340, 78, '(sinaps öncesi)')}${yazi(20, 150, 'Sinaps aralığı')}${cizgi(112, 146, 170, 150)}${yazi(380, 240, 'Sinaps sonrası')}${yazi(380, 258, 'hücre')}${yazi(20, 70, 'Kesecikler')}${cizgi(88, 66, 168, 62)}${yazi(20, 200, 'Reseptörler')}${cizgi(96, 196, 176, 184)}`,
    adimlar: ['Elektriksel uyarı (aksiyon potansiyeli) akson ucuna ulaşır.', 'Akson ucuna kalsiyum girer; içi sinir ileticisi (nörotransmitter) dolu kesecikler zarla birleşir ve içeriklerini sinaps aralığına boşaltır.', 'Sinir ileticisi aralığı geçip karşı hücrenin zarındaki reseptörlere bağlanır; karşı hücrede yeni bir elektriksel değişiklik başlar.', 'İletici madde enzimlerle parçalanır ya da geri alınır; böylece uyarı sona erer. İletim tek yönlüdür: sinaps öncesinden sinaps sonrasına.'] },
  { id: 'villus', ad: 'Bağırsak villusu: besinlerin emilimi', ilgili: 'jejunum', svg: `
    <path d="M150 290 V110 C150 30 330 30 330 110 V290" fill="#fdf1e3" stroke="#c49668" stroke-width="8"/>
    <path d="M200 290 V120 C200 85 235 85 235 120" fill="none" stroke="#4f7ba3" stroke-width="6"/><path d="M280 290 V120 C280 85 245 85 245 120" fill="none" stroke="#c0392b" stroke-width="6"/>
    <path d="M240 290 V140" stroke="#86a37a" stroke-width="10" stroke-linecap="round"/>
    ${dizi(3, i => nokta('#e67e22', `M80 ${90 + i * 50} H205 V290`, 5, i * 1.2))}${dizi(3, i => nokta('#f1c40f', `M400 ${100 + i * 50} H240 V290`, 5, 0.6 + i * 1.2))}
    ${yazi(10, 60, 'Glukoz ve amino asit', 'fill="#e67e22"')}${yazi(10, 78, 'kılcal damara')}${yazi(345, 60, 'Yağlar lenf', 'fill="#b7950b"')}${yazi(345, 78, 'damarına')}${yazi(192, 22, 'Emici hücreler')}${yazi(346, 250, 'Lenf damarı')}${cizgi(246, 240, 342, 246)}`,
    adimlar: ['İnce bağırsağın iç yüzü parmak biçimli çıkıntılarla (villus) kaplıdır; üzerlerindeki hücrelerin de çok ince uzantıları (mikrovillus) vardır. Böylece emilim yüzeyi çok büyür.', 'Glukoz ve amino asitler emici hücrelerden geçerek villusun içindeki kılcal damarlara girer ve portal venle karaciğere taşınır.', 'Yağların sindirim ürünleri hücre içinde yeniden yağa çevrilir, paketlenir (şilomikron) ve villusun ortasındaki lenf damarına verilir.', 'Lenf yoluyla taşınan yağlar göğüs kanalı üzerinden kana karışır; yani yağların çoğu önce karaciğere uğramadan genel dolaşıma girer. Kısa ve orta zincirli yağ asitleri ise glukoz gibi doğrudan kılcal damara geçip portal venle karaciğere gider.'] },
  { id: 'damar', ad: 'Damar duvarı: arter ve ven', ilgili: 'karin-aortasi', svg: `
    <circle cx="130" cy="150" r="100" fill="#f3d9c8"/><circle cx="130" cy="150" r="82" fill="#d98880"/><circle cx="130" cy="150" r="46" fill="#fbe9e7"/><circle cx="130" cy="150" r="40" fill="#fff"/>
    <ellipse cx="360" cy="150" rx="100" ry="84" fill="#dfe6ee"/><ellipse cx="360" cy="150" rx="86" ry="70" fill="#9db4cc"/><ellipse cx="360" cy="150" rx="74" ry="58" fill="#e8eef5"/><ellipse cx="360" cy="150" rx="69" ry="53" fill="#fff"/>
    ${yazi(92, 22, 'Arter', 'font-weight="700"')}${yazi(318, 22, 'Ven', 'font-weight="700"')}
    ${yazi(105, 155, 'boşluk')}${yazi(338, 155, 'boşluk')}${yazi(192, 266, 'İç')}${yazi(222, 266, 'Orta (kas)')}${yazi(300, 266, 'Dış tabaka')}${cizgi(160, 180, 200, 252)}${cizgi(175, 195, 250, 252)}${cizgi(194, 214, 312, 252)}`,
    adimlar: ['Damar duvarı üç tabakadan oluşur: iç tabaka (tunica intima), kas ve esnek liflerden oluşan orta tabaka (tunica media) ve dış bağ dokusu tabakası (tunica adventitia).', 'Arterde orta tabaka kalındır; damar yüksek basınca dayanır ve kesilse de boşluğu yuvarlak kalır. Nabız, bu esnek duvarın her kalp atımında genişlemesidir.', 'Venin duvarı incedir, boşluğu geniştir ve basınç düşüktür. Kol ve bacak venlerinde kanın geri kaçmasını önleyen kapakçıklar bulunur.', 'Kılcal damarların duvarı yalnız tek sıra hücreden oluşur; madde alışverişi burada gerçekleşir.'] },
];
