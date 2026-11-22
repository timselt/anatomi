// Arterlerin dal ilişkisi: her arterin hangi arterden çıktığı.
// Adın içinde ana arter yazılıysa ("acromial branch of thoraco-acromial artery") kural ile bulunur;
// yazılı değilse aşağıdaki tablodan alınır. Tablo standart anatomi bilgisidir (Gray's Anatomy, Terminologia Anatomica);
// kaynakla tek tek karşılaştırılmadı. Anahtarlar modeldeki İngilizce ad (küçük harf, sol/sağ olmadan).
// Değer bir ad ya da sol ve sağ tarafta farklıysa { sol, sag } nesnesidir.

const UST = {
  // Aorta ve kalpten çıkanlar
  'arch of aorta': 'ascending aorta', 'aortic arch': 'ascending aorta',
  'descending aorta': 'arch of aorta', 'descending thoracic aorta': 'arch of aorta', 'thoracic aorta': 'arch of aorta',
  'abdominal aorta': 'descending thoracic aorta',
  'pulmonary artery': 'pulmonary trunk', 'upper lobar artery': 'pulmonary artery',
  'trunk of coronary artery': 'ascending aorta', 'coronary artery': 'ascending aorta',
  'conus artery': 'right coronary artery',
  // Aort yayı ve göğüs aortası
  'brachiocephalic artery': 'arch of aorta', 'brachiocephalic trunk': 'arch of aorta',
  'common carotid artery': { sol: 'arch of aorta', sag: 'brachiocephalic artery' },
  'subclavian artery': { sol: 'arch of aorta', sag: 'brachiocephalic artery' },
  'posterior intercostal arteries': 'descending thoracic aorta', 'subcostal artery': 'descending thoracic aorta',
  'bronchial artery': 'descending thoracic aorta', 'esophageal artery': 'descending thoracic aorta',
  'superior phrenic arteries': 'descending thoracic aorta',
  // Karın aortası
  'celiac trunk': 'abdominal aorta', 'celiac artery': 'abdominal aorta', 'coeliac trunk': 'abdominal aorta',
  'superior mesenteric artery': 'abdominal aorta', 'inferior mesenteric artery': 'abdominal aorta',
  'renal artery': 'abdominal aorta', 'middle suprarenal artery': 'abdominal aorta', 'inferior phrenic artery': 'abdominal aorta',
  'testicular artery': 'abdominal aorta', 'lumbar artery': 'abdominal aorta', 'lumbar arteries': 'abdominal aorta',
  'common iliac artery': 'abdominal aorta', 'median sacral artery': 'abdominal aorta',
  'inferior suprarenal artery': 'renal artery',
  // Truncus coeliacus
  'gastric artery': 'celiac trunk', 'common hepatic artery': 'celiac trunk', 'splenic artery': 'celiac trunk',
  'hepatic artery proper': 'common hepatic artery', 'proper hepatic artery': 'common hepatic artery',
  'gastroduodenal artery': 'common hepatic artery',
  'anterior superior pancreaticoduodenal artery': 'gastroduodenal artery', 'posterior superior pancreaticoduodenal artery': 'gastroduodenal artery',
  'gastro-epiploic artery': 'gastroduodenal artery',
  'right hepatic artery': 'hepatic artery proper', 'left hepatic artery': 'hepatic artery proper',
  'anterior inferior segmental hepatic artery': 'right hepatic artery', 'anterior superior segmental hepatic artery': 'right hepatic artery',
  'posterior inferior segmental hepatic artery': 'right hepatic artery', 'posterior superior segmental hepatic artery': 'right hepatic artery',
  'lateral inferior segmental hepatic artery': 'left hepatic artery', 'lateral superior segmental hepatic artery': 'left hepatic artery',
  'medial inferior segmental hepatic artery': 'left hepatic artery', 'medial superior segmental hepatic artery': 'left hepatic artery',
  'dorsal pancreatic artery': 'splenic artery', 'great pancreatic artery': 'splenic artery', 'caudal pancreatic artery': 'splenic artery',
  'inferior pancreatic artery': 'dorsal pancreatic artery',
  // Arteria mesenterica superior ve inferior
  'inferior pancreaticoduodenal artery': 'superior mesenteric artery',
  'anterior inferior pancreaticoduodenal artery': 'inferior pancreaticoduodenal artery', 'posterior inferior pancreaticoduodenal artery': 'inferior pancreaticoduodenal artery',
  'ileal artery': 'superior mesenteric artery', 'middle colic artery': 'superior mesenteric artery', 'colic artery': 'superior mesenteric artery',
  'ileocolic artery': 'superior mesenteric artery',
  'anterior cecal artery': 'ileocolic artery', 'posterior cecal artery': 'ileocolic artery', 'appendicular artery': 'ileocolic artery',
  'left colic artery': 'inferior mesenteric artery', 'sigmoid artery': 'inferior mesenteric artery', 'sigmoid arteries': 'inferior mesenteric artery',
  'superior rectal artery': 'inferior mesenteric artery', 'superior anorectal artery': 'inferior mesenteric artery',
  // Pelvis ve alt ekstremite
  'external iliac artery': 'common iliac artery', 'internal iliac artery': 'common iliac artery',
  'inferior epigastric artery': 'external iliac artery', 'femoral artery': 'external iliac artery',
  'superior gluteal artery': 'internal iliac artery', 'inferior gluteal artery': 'internal iliac artery', 'obturator artery': 'internal iliac artery',
  'internal pudendal artery': 'internal iliac artery', 'iliolumbar artery': 'internal iliac artery',
  'dorsal artery of penis': 'internal pudendal artery', 'deep artery of penis': 'internal pudendal artery',
  'superficial epigastric artery': 'femoral artery', 'deep femoral artery': 'femoral artery', 'descending genicular artery': 'femoral artery',
  'superficial external pudendal artery': 'femoral artery', 'deep external pudendal artery': 'femoral artery',
  'lateral circumflex femoral artery': 'deep femoral artery', 'medial circumflex femoral artery': 'deep femoral artery',
  'set of perforating arteries': 'deep femoral artery', 'perforating femoral arteries': 'deep femoral artery', 'distal perforating artery': 'deep femoral artery',
  'popliteal artery': 'femoral artery',
  'inferior lateral genicular artery': 'popliteal artery', 'inferior medial genicular artery': 'popliteal artery', 'middle genicular artery': 'popliteal artery',
  'lateral superior genicular artery': 'popliteal artery', 'medial superior genicular artery': 'popliteal artery',
  'superior lateral genicular artery': 'popliteal artery', 'superior medial genicular artery': 'popliteal artery',
  'anterior tibial artery': 'popliteal artery', 'posterior tibial artery': 'popliteal artery', 'fibular artery': 'posterior tibial artery',
  'anterior tibial recurrent artery': 'anterior tibial artery', 'dorsalis pedis artery': 'anterior tibial artery',
  'arcuate artery': 'dorsalis pedis artery', 'lateral tarsal artery': 'dorsalis pedis artery', 'deep plantar artery': 'dorsalis pedis artery',
  'dorsal metatarsal arteries': 'arcuate artery', 'dorsal digital artery of foot': 'dorsal metatarsal arteries', 'set of dorsal digital arteries': 'dorsal metatarsal arteries',
  'dorsal digital arteries of foot': 'dorsal metatarsal arteries',
  'medial plantar artery': 'posterior tibial artery', 'lateral plantar artery': 'posterior tibial artery',
  'superficial medial plantar artery': 'medial plantar artery', 'plantar arch': 'lateral plantar artery',
  'plantar metatarsal artery': 'plantar arch', 'plantar metatarsal arteries': 'plantar arch',
  'set of common plantar digital arteries': 'plantar metatarsal artery', 'common plantar digital arteries': 'plantar metatarsal artery',
  'set of plantar digital arteries proper': 'set of common plantar digital arteries', 'proper plantar digital arteries': 'set of common plantar digital arteries',
  // Baş, boyun ve beyin
  'internal carotid artery': 'common carotid artery', 'external carotid artery': 'common carotid artery',
  'facial artery': 'external carotid artery', 'maxillary artery': 'external carotid artery', 'occipital artery': 'external carotid artery',
  'superficial temporal artery': 'external carotid artery', 'ascending pharyngeal artery': 'external carotid artery',
  'transverse facial artery': 'superficial temporal artery',
  'submental artery': 'facial artery', 'superior labial artery': 'facial artery', 'inferior labial artery': 'facial artery', 'angular artery': 'facial artery',
  'middle meningeal artery': 'maxillary artery', 'inferior alveolar artery': 'maxillary artery', 'buccal artery': 'maxillary artery',
  'anterior deep temporal artery': 'maxillary artery', 'posterior deep temporal artery': 'maxillary artery', 'infra-orbital artery': 'maxillary artery',
  'posterior superior alveolar artery': 'maxillary artery', 'descending palatine artery': 'maxillary artery', 'artery of pterygoid canal': 'maxillary artery',
  'greater palatine artery': 'descending palatine artery',
  'ophthalmic artery': 'internal carotid artery', 'anterior cerebral artery': 'internal carotid artery', 'middle cerebral artery': 'internal carotid artery',
  'posterior communicating artery': 'internal carotid artery', 'anterior choroidal artery': 'internal carotid artery',
  'central retinal artery': 'ophthalmic artery', 'lacrimal artery': 'ophthalmic artery', 'supra-orbital artery': 'ophthalmic artery', 'supratrochlear artery': 'ophthalmic artery',
  'anterior ethmoidal artery': 'ophthalmic artery', 'posterior ethmoidal artery': 'ophthalmic artery',
  'long posterior ciliary arteries': 'ophthalmic artery', 'short posterior ciliary arteries': 'ophthalmic artery',
  'anterior communicating artery': 'anterior cerebral artery', 'callosomarginal artery': 'anterior cerebral artery', 'pericallosal artery': 'anterior cerebral artery',
  'medial frontobasal artery': 'anterior cerebral artery',
  'lateral frontobasal artery': 'middle cerebral artery', 'prefrontal artery': 'middle cerebral artery', 'artery of central sulcus': 'middle cerebral artery',
  'artery of precentral sulcus': 'middle cerebral artery', 'artery of postcentral sulcus': 'middle cerebral artery',
  'anterior parietal artery': 'middle cerebral artery', 'posterior parietal artery': 'middle cerebral artery',
  'anterior temporal artery': 'middle cerebral artery', 'polar temporal artery': 'middle cerebral artery',
  'vertebral artery': 'subclavian artery', 'basilar artery': 'vertebral artery',
  'posterior inferior cerebellar artery': 'vertebral artery', 'anterior spinal artery': 'vertebral artery',
  'posterior cerebral artery': 'basilar artery', 'superior cerebellar artery': 'basilar artery', 'anterior inferior cerebellar artery': 'basilar artery',
  'pontine artery': 'basilar artery',
  'lateral occipital artery': 'posterior cerebral artery', 'medial occipital artery': 'posterior cerebral artery', 'splenial artery': 'posterior cerebral artery',
  'thalamogeniculate artery': 'posterior cerebral artery', 'thalamoperforating artery': 'posterior cerebral artery',
  'posterior medial choroidal artery': 'posterior cerebral artery',
  // Arteria subclavia ve üst ekstremite
  'thyrocervical trunk': 'subclavian artery', 'costocervical trunk': 'subclavian artery', 'internal thoracic artery': 'subclavian artery',
  'dorsal scapular artery': 'subclavian artery', 'axillary artery': 'subclavian artery',
  'inferior thyroid artery': 'thyrocervical trunk', 'suprascapular artery': 'thyrocervical trunk', 'transverse cervical artery': 'thyrocervical trunk',
  'superficial cervical artery': 'transverse cervical artery',
  'deep cervical artery': 'costocervical trunk', 'superior intercostal artery': 'costocervical trunk', 'supreme intercostal artery': 'costocervical trunk',
  'first posterior intercostal artery': 'superior intercostal artery', 'second posterior intercostal artery': 'superior intercostal artery',
  'musculophrenic artery': 'internal thoracic artery', 'superior epigastric artery': 'internal thoracic artery',
  'thoraco-acromial artery': 'axillary artery', 'lateral thoracic artery': 'axillary artery', 'subscapular artery': 'axillary artery',
  'anterior circumflex humeral artery': 'axillary artery', 'posterior circumflex humeral artery': 'axillary artery', 'brachial artery': 'axillary artery',
  'circumflex scapular artery': 'subscapular artery', 'thoracodorsal artery': 'subscapular artery',
  'deep brachial artery': 'brachial artery', 'superior ulnar collateral artery': 'brachial artery', 'inferior ulnar collateral artery': 'brachial artery',
  'radial artery': 'brachial artery', 'ulnar artery': 'brachial artery',
  'middle collateral artery': 'deep brachial artery', 'radial collateral artery': 'deep brachial artery',
  'radial recurrent artery': 'radial artery', 'arteria princeps pollicis': 'radial artery', 'arteria radialis indicis': 'radial artery',
  'deep palmar arch': 'radial artery',
  'anterior ulnar recurrent artery': 'ulnar artery', 'posterior ulnar recurrent artery': 'ulnar artery', 'ulnar recurrent artery': 'ulnar artery',
  'common interosseous artery': 'ulnar artery', 'superficial palmar arterial arch': 'ulnar artery', 'superficial palmar arch': 'ulnar artery',
  'anterior interosseous artery': 'common interosseous artery', 'posterior interosseous artery': 'common interosseous artery',
  'recurrent interosseous artery': 'posterior interosseous artery',
  'first common palmar digital artery': 'superficial palmar arterial arch', 'second common palmar digital artery': 'superficial palmar arterial arch',
  'third common palmar digital artery': 'superficial palmar arterial arch', 'fourth common palmar digital artery': 'superficial palmar arterial arch',
  'common palmar digital arteries': 'superficial palmar arterial arch', 'palmar metacarpal artery': 'deep palmar arch', 'palmar metacarpal arteries': 'deep palmar arch',
  'set of dorsal metacarpal arteries': 'dorsal carpal arch', 'dorsal metacarpal arteries': 'dorsal carpal arch',
  // Akciğer segment arterleri
  'anterior basal segmental artery': 'pulmonary artery', 'lateral basal segmental artery': 'pulmonary artery', 'medial basal segmental artery': 'pulmonary artery',
  'posterior basal segmental artery': 'pulmonary artery', 'anterior segmental artery': 'pulmonary artery', 'apical segmental artery': 'pulmonary artery',
  'posterior segmental artery': 'pulmonary artery', 'superior segmental artery': 'pulmonary artery', 'lateral segmental artery': 'pulmonary artery',
  'medial segmental artery': 'pulmonary artery', 'superior lingular artery': 'pulmonary artery', 'inferior lingular artery': 'pulmonary artery',
};
// Adda geçen bazı ana arterlerin modeldeki asıl adı.
const ES = {
  'anterior interventricular artery': 'anterior interventricular branch of left coronary artery',
  'anterior descending branch of left coronary artery': 'anterior interventricular branch of left coronary artery',
  'right posterior interventricular artery': 'posterior interventricular branch of right coronary artery',
  'thoracic aorta': 'descending thoracic aorta',
};

const sade = s => s.toLowerCase().replace(/\s*\((left|right)\)$/, '').trim();
const yanSil = s => s.replace(/\b(left|right) /g, '').replace(/\s+/g, ' ').trim();
const yanBul = s => (/\bleft\b/.test(s) ? 'sol' : /\bright\b/.test(s) ? 'sag' : '');

// Bir arter adından çıktığı arterin adını verir (bulunamazsa null).
export function arterUstAdi(en) {
  const tam = sade(en), ad = tam.replace(/^(trunk|set) of /, '');
  const yan = yanBul(ad);
  if (/proper palmar digital arter/.test(ad)) return 'common palmar digital arteries';
  const kural = /\b(?:branch|branches|part|division|segment) of (.+?)(?: to .+)?$/.exec(ad);
  if (kural) return ES[kural[1]] ?? kural[1];
  const u = UST[yanSil(tam)] ?? UST[yanSil(ad)] ?? UST[ad];
  if (!u) return null;
  return typeof u === 'string' ? u : (u[yan] ?? u.sag);
}
// Adı modeldeki parçalara bağlar: aynı ad, "trunk of" ile başlayan ad ya da sol/sağ olmadan aynı ad (aynı tarafta).
export function arterBul(ad, parcalar, yan) {
  const a = sade(ad), adaylar = [a, 'trunk of ' + a];
  let bulunan = parcalar.filter(p => p.sistem === 'atardamar' && adaylar.includes(sade(p.en)));
  if (!bulunan.length) {
    const ys = yanSil(a), yadaylar = [ys, 'trunk of ' + ys];
    bulunan = parcalar.filter(p => p.sistem === 'atardamar' && yadaylar.includes(yanSil(sade(p.en))));
    const ayniYan = bulunan.filter(p => !yanBul(sade(p.en)) || yanBul(sade(p.en)) === yan || /\b(left|right)\b/.test(a));
    if (ayniYan.length) bulunan = ayniYan;
    if (yan) { const tam = bulunan.filter(p => yanBul(sade(p.en)) === yan); if (tam.length) bulunan = tam; }
  }
  return bulunan;
}
