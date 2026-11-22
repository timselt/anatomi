// Vücut sistemleri ve her model parçasının hangi sisteme ait olduğu.
// Kaynak modeldeki gruplamada birkaç yanlış yerleşim var (ör. bacak kasları iskelette, beyin karıncıkları kalpte);
// burada adlara bakılarak düzeltilir.

export const SISTEMLER = [
  { id: 'iskelet', ad: 'İskelet', renk: '#e6dcbc', ayrinti: true, aciklama: 'Kemikler vücudu taşır, organları korur ve kaslara tutunma yeri sağlar. Kemik iliğinde kan hücreleri üretilir.' },
  { id: 'kas', ad: 'Kaslar', renk: '#9c3f35', aciklama: 'İskelet kasları kemiklere kirişlerle tutunur; kasılarak eklemleri hareket ettirir, duruşu korur ve ısı üretir.' },
  { id: 'sinir', ad: 'Sinir sistemi', ayrinti: true, renk: '#e2bf5a', aciklama: 'Beyin, omurilik ve sinirler bilgiyi taşır ve işler; duyma, hareket, düşünme ve vücudun kendiliğinden çalışan işleri buradan yönetilir.' },
  { id: 'kalp', ad: 'Kalp', ayrinti: true, renk: '#c2665e', aciklama: 'Kalp dört odacıklı kaslı bir pompadır. Kapakları kanın tek yönde akmasını sağlar.' },
  { id: 'atardamar', ad: 'Atardamarlar', renk: '#cc4a3c', aciklama: 'Atardamarlar kanı kalpten dokulara taşır. Akciğer atardamarı dışındakiler oksijenli kan taşır.' },
  { id: 'toplardamar', ad: 'Toplardamarlar', renk: '#4f7ba3', aciklama: 'Toplardamarlar kanı dokulardan kalbe geri getirir. Akciğer toplardamarları dışındakiler oksijeni az kan taşır.' },
  { id: 'solunum', ad: 'Solunum', renk: '#c8919a', ayrinti: true, aciklama: 'Hava yolları havayı akciğerlere iletir; akciğerlerde oksijen kana geçer, karbondioksit dışarı atılır. (Bu modelde akciğer dokusu yok; bronş ağacı görünür.)' },
  { id: 'sindirim', ad: 'Sindirim', renk: '#c49668', ayrinti: true, aciklama: 'Sindirim kanalı besinleri parçalar, besin ve suyu emer, artıkları dışarı atar. Yardımcı organlar safra ve enzim salgılar.' },
  { id: 'bosaltim', ad: 'Boşaltım', ayrinti: true, renk: '#b77a5f', aciklama: 'Böbrekler kanı süzerek idrar oluşturur; idrar üreterlerle keseye gelir ve üretrayla dışarı atılır.' },
  { id: 'hormon', ad: 'Hormon bezleri', ayrinti: true, renk: '#c99ec6', aciklama: 'Hormon bezleri salgılarını doğrudan kana verir; büyüme, enerji kullanımı, stres ve üreme gibi işleri düzenler.' },
  { id: 'lenf', ad: 'Lenf ve bağışıklık', ayrinti: true, renk: '#86a37a', aciklama: 'Lenf organları vücudu mikroplara karşı korur ve dokular arasındaki fazla sıvıyı kana geri taşır.' },
  { id: 'ureme', ad: 'Üreme', renk: '#c3a196', aciklama: 'Üreme organları üreme hücrelerini ve cinsiyet hormonlarını üretir. Erkek modelinde testis, prostat ve kanallar; kadın modelinde rahim, yumurtalıklar, tüpler, vajina ve meme bulunur.' },
  { id: 'gebelik', ad: 'Gebelik (plasenta ve göbek kordonu)', renk: '#b98bb0', aciklama: 'Plasenta anne ile bebek arasında besin, oksijen ve atık alışverişini sağlar; göbek kordonu bebeği plasentaya bağlar. Yalnız kadın modelinde bulunur.' },
  { id: 'duyu', ad: 'Duyu organları', ayrinti: true, renk: '#9fc4cc', aciklama: 'Göz ve kulak gibi duyu organları ışık ve ses gibi uyarıları algılayıp sinir sistemine iletir.' },
  { id: 'bag', ad: 'Kıkırdak ve bağlar', renk: '#a9c5bb', aciklama: 'Kıkırdak, kiriş ve bağlar yapıları birbirine bağlar, eklemleri sağlamlaştırır ve yükü dağıtır.' },
  { id: 'deri', ad: 'Deri', renk: '#d2ab8a', aciklama: 'Deri vücudu dış etkenlerden korur, sıcaklığı düzenler ve dokunma duyusunu sağlar.' },
];

const KAYNAK = { skeletal: 'iskelet', muscular: 'kas', nervous: 'sinir', cardiac: 'kalp', arterial: 'atardamar', venous: 'toplardamar', respiratory: 'solunum', digestive: 'sindirim', urinary: 'bosaltim', endocrine: 'hormon', lymphatic: 'lenf', reproductive: 'ureme', pregnancy: 'gebelik', sensory: 'duyu', connective: 'bag', integumentary: 'deri' };

export function sistemBul(parca) {
  const n = parca.name.toLowerCase();
  const s = KAYNAK[parca.system] ?? 'bag';
  if (/^hepatovenous segment/.test(n)) return 'sindirim'; // karaciğer segmentleri (kaynak modelde toplardamar sanılmış)
  if (s === 'deri' && /areola|nipple|lactiferous|mammary|breast/.test(n)) return 'ureme';
  if (s === 'iskelet') {
    if (/tooth|gingiva/.test(n)) return 'sindirim';
    if (/arytenoid|corniculate|cuneiform cartilage|cricoid|thyroid cartilage|alar cartilage/.test(n)) return 'solunum';
    if (/fibularis|tibialis|levator scapulae|subscapularis/.test(n)) return 'kas';
    if (/iliotibial/.test(n)) return 'bag';
  }
  if (s === 'kalp' && /(lateral|third|fourth) ventricle|interventricular foramen/.test(n)) return 'sinir';
  if (s === 'solunum' && /pharyngeal constrictor|pharyngeus/.test(n)) return 'kas';
  if (s === 'solunum' && /nasal concha/.test(n)) return 'iskelet';
  if (s === 'duyu' && /lacrimal bone/.test(n)) return 'iskelet';
  if (s === 'duyu' && /flexor retinaculum|common tendinous ring/.test(n)) return 'bag';
  if (s === 'duyu' && /choroid plexus/.test(n)) return 'sinir';
  return s;
}

export const VARSAYILAN_ACIK = ['iskelet', 'sindirim', 'solunum', 'kalp', 'bosaltim'];
