// Kafatası delikleri ve içlerinden geçen yapılar. Kafatası kemikleri modelde tek parça olduğu için delikler ayrı seçilemez;
// bilgi, deliğin bulunduğu kemiğin açıklamasının sonuna eklenir (ana.js bu dosyayı terimler.js'ten hemen sonra yükler).
// Ders kitabı bilgisidir (Terminologia Anatomica 2 adlarıyla).
import { TERIM } from './terimler.js';

export const FORAMENLER = {
  kalbur: 'Delikleri: lamina cribrosa\'nın delikleri, koku siniri (n. olfactorius, I) lifleri ile ön etmoidal sinir ve damarları geçirir.',
  kama: 'Delikleri: canalis opticus (görme siniri, II ve a. ophthalmica); fissura orbitalis superior (III, IV, VI. kafa çiftleri, oftalmik sinir V1 ve v. ophthalmica superior); foramen rotundum (maksiller sinir, V2); foramen ovale (mandibular sinir, V3 ve küçük petrozal sinir); foramen spinosum (a. meningea media); canalis pterygoideus (n. canalis pterygoidei).',
  sakak: 'Delikleri: meatus acusticus internus (fasiyal sinir VII, vestibulokoklear sinir VIII ve a. labyrinthi); canalis caroticus (a. carotis interna ve sempatik ağı); foramen stylomastoideum (fasiyal sinirin kafatasından çıkışı); foramen jugulare\'nin ön kenarı (art kafa kemiğiyle birlikte). Foramen lacerum, şakak kemiğinin ucu ile temel ve art kafa kemikleri arasındadır; yaşayan insanda kıkırdakla kapalıdır.',
  artkafa: 'Delikleri: foramen magnum (omurilik soğanı, aa. vertebrales, aksesuar sinirin omurilik kökü); canalis nervi hypoglossi (hipoglossal sinir, XII); foramen jugulare (glossofaringeal IX, vagus X, aksesuar XI sinirler, v. jugularis interna\'nın başlangıcı ve sinus petrosus inferior); canalis condylaris (bağlantı veni).',
  alin: 'Delikleri: göz çukuru kenarındaki incisura (ya da foramen) supraorbitalis\'ten supraorbital sinir ve damarlar alına çıkar.',
  'ust-cene': 'Delikleri: foramen infraorbitale (infraorbital sinir, maksiller sinirin uç dalı, ve damarları); canalis incisivus (n. nasopalatinus).',
  'alt-cene': 'Delikleri: foramen mandibulae (inferior alveoler sinir ve damarlar; alt çene anestezisinin yeri); foramen mentale (mental sinir ve damarlar, ikinci küçük azı dişinin altında).',
  damak: 'Delikleri: foramen palatinum majus (büyük palatin sinir ve damarlar, sert damağa); foramina palatina minora (küçük palatin sinirler, yumuşak damağa).',
};

for (const [anahtar, metin] of Object.entries(FORAMENLER)) {
  if (TERIM[anahtar] && !TERIM[anahtar].fn.includes('Delikleri:')) TERIM[anahtar] = { ...TERIM[anahtar], fn: `${TERIM[anahtar].fn} ${metin}` };
}
