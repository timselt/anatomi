// İskelet ve eklem ek katmanından (Z-Anatomy) eklenen yapıların Türkçe adı, Latince adı ve görevi.
// Latince adlar Terminologia Anatomica'ya göre yazıldı; kaynak sözlükteki hatalı adların önüne geçer
// (ör. kaynakta arka çapraz bağ "ligamentum decussatum", tarak-parmak eklemi kapsülleri "glenohumerae" yazılmış).
// Görev metinleri ders kitabı bilgisidir; telifli bir kaynaktan kopyalanmadı.
// Anahtar: yapının İngilizce adı, küçük harfle ve sol/sağ eki olmadan.

const DIZ_MENISKUS = 'Menisküsün ucunu (boynuzunu) tibianın kondiller arası alanına tutturur; menisküsün diz hareketinde yerinden kaymasını engeller.';
const DELTOID = 'İç yan bağın (ligamentum collaterale mediale, deltoid bağ) bir bölümüdür. Deltoid bağ medial malleolden yelpaze gibi açılır ve ayak bileğinin dışa doğru burkulmasını (eversiyon) engeller.';
const SUBTALAR = 'Talus ile kalkaneus arasındaki alt ayak bileği (subtalar) eklemini sağlamlaştırır; ayağın içe ve dışa dönme hareketleri bu eklemde olur.';
const TARSAL = 'Ayak bileği ile tarak kemikleri arasındaki küçük kemikleri (tarsal kemikler) birbirine bağlar; ayağın kemerlerini korur ve yük altında kemiklerin ayrılmasını engeller.';
const TMT = 'Tarsal kemikleri tarak (metatars) kemiklerine bağlar (Lisfranc eklemi). Bu eklemdeki bağ yaralanmaları ayağın orta bölümünün çökmesine yol açabilir.';
const METATARS = 'Tarak kemiklerinin tabanlarını birbirine bağlar; ön ayağın yük altında yayılmasını sınırlar.';
const MTP = 'Tarak kemiği başı ile parmağın ilk falanksı arasındaki tarak-parmak (metatarsofalangeal) eklemini sağlamlaştırır.';
const AYAK_IP = 'Ayak parmaklarının falankslar arası (interfalangeal) eklemlerini sağlamlaştırır.';
const KALCA_Y = 'İliofemoral bağ (Y bağı) vücudun en güçlü bağıdır: spina iliaca anterior inferior ile asetabulum kenarından femurun intertrokanterik çizgisine uzanır. Kalçanın arkaya aşırı açılmasını (hiperekstansiyon) engeller; ayakta dururken gövdenin arkaya devrilmesini kas gücü harcamadan önler.';
const SAKROILIAK = 'Sakrum ile ilium arasındaki sakroiliak eklemi bağlar. Gövdenin ağırlığı bu eklemden pelvise geçer; eklem çok az hareket eder.';
const OMUZ_GH = 'Omuz eklemi kapsülünün ön yüzündeki kalınlaşmalardan biridir (glenohumeral bağlar); humerus başının öne kaymasını sınırlar.';
const KORAKOKLAV = 'Korakoklaviküler bağın iki bölümünden biridir. Bu bağ klavikulayı skapulanın korakoid çıkıntısına bağlar ve kolun ağırlığıyla skapulanın aşağı düşmesini engeller. Akromiyoklaviküler çıkıkta yırtılırsa klavikula ucu deri altında yukarı kalkar.';
const STERNOKLAV = 'Klavikulanın iç ucunu sternumun manubriumuna bağlayan sternoklaviküler eklemi sağlamlaştırır. Bu eklem kolu gövdeye bağlayan tek gerçek eklemdir.';
const EL_BILEK = 'El bileği eklemlerini sağlamlaştıran bağlardan biridir; karpal kemiklerin birbirine ve ön kol kemiklerine göre yerinde kalmasını sağlar.';
const KARPOMETAKARP = 'Karpal kemikleri tarak (metakarp) kemiklerine bağlar. Başparmak dışındaki parmaklarda bu eklemler çok az hareket eder.';
const METAKARP = 'Tarak kemiklerinin tabanlarını birbirine bağlar.';
const MCP = 'Tarak kemiği başı ile parmağın ilk falanksı arasındaki tarak-parmak (metakarpofalangeal, MCP) eklemini sağlamlaştırır.';
const EL_IP = 'Parmakların falankslar arası (interfalangeal) eklemlerini sağlamlaştırır.';
const UST_TF = 'Fibula başı ile tibianın lateral kondili arasındaki üst tibiofibular eklemi sağlamlaştırır.';

const TABLO = {
  // Diz
  'anterior cruciate ligament': ['Ön çapraz bağ', 'Ligamentum cruciatum anterius', 'Tibianın kondiller arası alanının önünden femurun lateral kondilinin iç yüzüne uzanır. Tibianın femura göre öne kaymasını ve dizin aşırı içe dönmesini engeller. Sporda en sık yırtılan diz bağıdır; yırtığı ön çekmece testiyle aranır.'],
  'posterior cruciate ligament': ['Arka çapraz bağ', 'Ligamentum cruciatum posterius', 'Tibianın kondiller arası alanının arkasından femurun medial kondilinin iç yüzüne uzanır. Tibianın femura göre arkaya kaymasını engeller; ön çapraz bağdan daha kalındır. Yırtığı arka çekmece testiyle aranır.'],
  'medial meniscus': ['İç menisküs', 'Meniscus medialis', 'Tibianın medial kondili üzerinde duran C biçimli lifli kıkırdaktır. Femur ile tibia yüzeyleri arasındaki uyumu artırır, yükü dağıtır ve sarsıntıyı emer. Tibial yan bağa yapışık olduğu için dış menisküsten daha az hareketlidir ve daha sık yırtılır.'],
  'lateral meniscus': ['Dış menisküs', 'Meniscus lateralis', 'Tibianın lateral kondili üzerinde duran, neredeyse halka biçimli lifli kıkırdaktır. Eklem yüzeyleri arasındaki uyumu artırır ve yükü dağıtır. Yan bağa yapışmadığı için iç menisküsten daha hareketlidir.'],
  'transverse ligament of knee': ['Dizin enine bağı', 'Ligamentum transversum genus', 'İki menisküsün ön uçlarını önden birbirine bağlar.'],
  'anterior meniscotibial ligament (lateral meniscus)': ['Dış menisküsün ön tibia bağı', 'Ligamentum meniscotibiale anterius menisci lateralis', DIZ_MENISKUS],
  'anterior meniscotibial ligament (medial meniscus)': ['İç menisküsün ön tibia bağı', 'Ligamentum meniscotibiale anterius menisci medialis', DIZ_MENISKUS],
  'posterior meniscotibial ligament (lateral meniscus)': ['Dış menisküsün arka tibia bağı', 'Ligamentum meniscotibiale posterius menisci lateralis', DIZ_MENISKUS],
  'posterior meniscotibial ligament (medial meniscus)': ['İç menisküsün arka tibia bağı', 'Ligamentum meniscotibiale posterius menisci medialis', DIZ_MENISKUS],
  'meniscopatellar ligament': ['Menisküs-patella bağı', 'Ligamentum meniscopatellare', 'Menisküsün ön kenarını patellanın yan kenarına bağlayan, diz eklemi kapsülündeki kalınlaşmadır.'],
  'articular capsule of knee joint': ['Diz eklemi kapsülü', 'Capsula articularis genus', 'Diz eklemini saran zardır. Dıştaki lifli tabaka eklemi sağlamlaştırır; içteki sinovyal zar eklem sıvısını (synovia) salgılar.'],
  'superficial part of tibial collateral ligament': ['Tibial yan bağın yüzeyel bölümü', 'Pars superficialis ligamenti collateralis tibialis', 'Femurun medial epikondilinden tibianın üst iç yüzüne uzanan yassı bağdır. Dizin içe doğru açılmasını (valgus) engeller; diz dışından gelen darbelerde yırtılır.'],
  'deep part of tibial collateral ligament': ['Tibial yan bağın derin bölümü', 'Pars profunda ligamenti collateralis tibialis', 'Eklem kapsülüyle ve iç menisküsle kaynaşan kısa liflerdir; iç menisküsü yerinde tutar. Bu bağlantı yüzünden yan bağ, iç menisküs ve ön çapraz bağ aynı darbede birlikte yaralanabilir.'],
  'fibular collateral ligament': ['Fibular yan bağ', 'Ligamentum collaterale fibulare', 'Femurun lateral epikondilinden fibula başına uzanan yuvarlak bağdır. Dizin dışa doğru açılmasını (varus) engeller; eklem kapsülünden ve dış menisküsten ayrıdır.'],
  'oblique popliteal ligament': ['Eğik popliteal bağ', 'Ligamentum popliteum obliquum', 'M. semimembranosus kirişinin uzantısıdır; diz kapsülünün arka yüzünü güçlendirir ve dizin aşırı gerilmesini (hiperekstansiyon) sınırlar.'],
  'arcuate popliteal ligament': ['Kavisli popliteal bağ', 'Ligamentum popliteum arcuatum', 'Fibula başından kavis çizerek diz kapsülünün arka dış yüzüne yayılır; m. popliteus kirişinin üzerinden geçer.'],
  'popliteofibular ligament': ['Popliteus-fibula bağı', 'Ligamentum popliteofibulare', 'M. popliteus kirişini fibula başına bağlar; dizin arka dış köşesini sağlamlaştırır.'],
  'infrapatellar fat pad': ['Patella altı yağ yastığı (Hoffa yastığı)', 'Corpus adiposum infrapatellare', 'Patellar bağın arkasında, lifli kapsül ile sinovyal zar arasında kalan yağ dokusudur. Diz bükülüp açılırken eklemdeki boşlukları doldurur.'],
  // Üst ve alt tibiofibular eklemler, ayak bileği
  'anterior ligament of fibular head': ['Fibula başının ön bağı', 'Ligamentum capitis fibulae anterius', UST_TF],
  'posterior ligament of fibular head': ['Fibula başının arka bağı', 'Ligamentum capitis fibulae posterius', UST_TF],
  'articular capsule of superior tibiofibular joint': ['Üst tibiofibular eklem kapsülü', 'Capsula articularis articulationis tibiofibularis', UST_TF],
  'anterior tibiofibular ligament': ['Ön tibiofibular bağ', 'Ligamentum tibiofibulare anterius', 'Tibia ile fibulanın alt uçlarını önden bağlar ve talusu saran malleol çatalını bir arada tutar. Ayağın dışa dönerek burkulmasında yırtılabilir (yüksek ayak bileği burkulması).'],
  'posterior tibiofibular ligament': ['Arka tibiofibular bağ', 'Ligamentum tibiofibulare posterius', 'Tibia ile fibulanın alt uçlarını arkadan bağlar; malleol çatalını bir arada tutar.'],
  'transverse tibiofibular ligament': ['Enine tibiofibular bağ', 'Ligamentum tibiofibulare transversum', 'Arka tibiofibular bağın derin bölümüdür; ayak bileği eklem yuvasının arka kenarını derinleştirir ve talusun arkaya kaymasını sınırlar.'],
  'posterior tibiotalar ligament': ['Deltoid bağın arka tibia-talus bölümü', 'Pars tibiotalaris posterior ligamenti collateralis medialis', DELTOID + ' Bu bölüm medial malleolü talusun arka iç yüzüne bağlar ve deltoid bağın en güçlü bölümüdür.'],
  'tibiocalcaneal ligament': ['Deltoid bağın tibia-kalkaneus bölümü', 'Pars tibiocalcanea ligamenti collateralis medialis', DELTOID + ' Bu bölüm medial malleolden kalkaneusun sustentaculum tali çıkıntısına uzanır.'],
  'tibionavicular ligament': ['Deltoid bağın tibia-naviküler bölümü', 'Pars tibionavicularis ligamenti collateralis medialis', DELTOID + ' Bu bölüm medial malleolden naviküler kemiğe uzanır.'],
  // Ayak
  'anterior talocalcaneal ligament': ['Ön talus-kalkaneus bağı', 'Ligamentum talocalcaneum anterius', SUBTALAR],
  'lateral talocalcaneal ligament': ['Dış talus-kalkaneus bağı', 'Ligamentum talocalcaneum laterale', SUBTALAR],
  'medial talocalcaneal ligament': ['İç talus-kalkaneus bağı', 'Ligamentum talocalcaneum mediale', SUBTALAR],
  'posterior talocalcaneal ligament': ['Arka talus-kalkaneus bağı', 'Ligamentum talocalcaneum posterius', SUBTALAR],
  'talocalcaneal interosseous ligament': ['Talus-kalkaneus kemikler arası bağı', 'Ligamentum talocalcaneum interosseum', 'Talus ile kalkaneus arasındaki kanalda (sinus tarsi) uzanan güçlü bağdır; alt ayak bileği (subtalar) ekleminin ana bağıdır.'],
  'talonavicular ligament': ['Talus-naviküler bağ', 'Ligamentum talonaviculare', 'Talusun boynunu naviküler kemiğin üst yüzüne bağlar; talus başı ile naviküler kemik arasındaki eklemi üstten örter.'],
  'calcaneonavicular ligament': ['Çatallı bağın kalkaneus-naviküler kolu', 'Pars calcaneonavicularis ligamenti bifurcati', 'Çatallı bağın (ligamentum bifurcatum) iç koludur: kalkaneusun ön üst ucundan naviküler kemiğe uzanır. (Ayak tabanındaki kalkaneus-naviküler "yay" bağı bu modelde yok.)'],
  'calcaneocuboid ligament': ['Çatallı bağın kalkaneus-küboid kolu', 'Pars calcaneocuboidea ligamenti bifurcati', 'Çatallı bağın (ligamentum bifurcatum) dış koludur: kalkaneusun ön üst ucunu küboid kemiğe bağlar. Ayak bileği burkulmalarında yırtılabilir.'],
  'plantar calcaneocuboid ligament': ['Taban kalkaneus-küboid bağı (kısa taban bağı)', 'Ligamentum calcaneocuboideum plantare', 'Uzun taban bağının derininde kalkaneusun ön alt yüzünü küboid kemiğe bağlar; ayağın dış uzunlamasına kemerini destekler.'],
  'cuneocuboid interosseous ligament': ['Kuneiform-küboid kemikler arası bağı', 'Ligamentum cuneocuboideum interosseum', TARSAL],
  'plantar cuneocuboid ligament': ['Taban kuneiform-küboid bağı', 'Ligamentum cuneocuboideum plantare', TARSAL],
  'dorsal cuneonavicular ligaments': ['Sırt kuneiform-naviküler bağları', 'Ligamenta cuneonavicularia dorsalia', TARSAL],
  'plantar cuneonavicular ligaments': ['Taban kuneiform-naviküler bağları', 'Ligamenta cuneonavicularia plantaria', TARSAL],
  'dorsal intercuneiform ligaments': ['Sırt kuneiformlar arası bağları', 'Ligamenta intercuneiformia dorsalia', TARSAL],
  'plantar intercuneiform ligaments': ['Taban kuneiformlar arası bağları', 'Ligamenta intercuneiformia plantaria', TARSAL],
  'intercuneiform interosseous ligaments': ['Kuneiformlar arası kemikler arası bağları', 'Ligamenta intercuneiformia interossea', TARSAL],
  'dorsal tarsometatarsal ligaments': ['Sırt tarsometatarsal bağları', 'Ligamenta tarsometatarsalia dorsalia', TMT],
  'plantar tarsometatarsal ligaments': ['Taban tarsometatarsal bağları', 'Ligamenta tarsometatarsalia plantaria', TMT],
  'cuneometatarsal interosseous ligaments': ['Kuneiform-metatars kemikler arası bağları', 'Ligamenta cuneometatarsalia interossea', TMT + ' Bunların en güçlüsü medial kuneiformu ikinci tarak kemiğine bağlayan Lisfranc bağıdır.'],
  'dorsal metatarsal ligaments': ['Sırt metatars bağları', 'Ligamenta metatarsalia dorsalia', METATARS],
  'plantar metatarsal ligaments': ['Taban metatars bağları', 'Ligamenta metatarsalia plantaria', METATARS],
  'metatarsal interosseous ligaments': ['Metatarslar arası kemikler arası bağları', 'Ligamenta metatarsalia interossea', METATARS],
  'articular capsules of metatarsophalangeal joints': ['Ayak tarak-parmak eklemi kapsülleri', 'Capsulae articulares articulationum metatarsophalangealium', MTP],
  'collateral metatarsophalangeal ligaments': ['Ayak tarak-parmak eklemi yan bağları', 'Ligamenta collateralia articulationum metatarsophalangealium', MTP + ' Yan bağlar parmağın yana doğru sapmasını sınırlar.'],
  'plantar metatarsophalangeal ligaments': ['Ayak tarak-parmak eklemi taban bağları (taban plakaları)', 'Ligamenta plantaria articulationum metatarsophalangealium', MTP + ' Taban plakası eklemin taban yüzünü örter ve parmağın yukarı aşırı bükülmesini sınırlar.'],
  'deep transverse metatarsal ligament': ['Derin enine metatars bağı', 'Ligamentum metatarsale transversum profundum', 'Beş tarak kemiğinin başlarını taban tarafından birbirine bağlar; ön ayağın yük altında yayılmasını sınırlar.'],
  'intersesamoid ligament': ['Sesamoidler arası bağ', 'Ligamentum intersesamoideum', 'Başparmağın tarak-parmak eklemi altındaki iki sesamoid kemiği birbirine bağlar; m. flexor hallucis longus kirişi bu kemiklerin arasından geçer.'],
  'articular capsule of interphalangeal joint of great toe': ['Başparmak falankslar arası eklem kapsülü', 'Capsula articularis articulationis interphalangeae hallucis', AYAK_IP],
  'articular capsules of proximal interphalangeal joints of foot': ['Ayak parmaklarının yakın falankslar arası eklem kapsülleri', 'Capsulae articulares articulationum interphalangearum proximalium pedis', AYAK_IP],
  'articular capsules of distal interphalangeal joints of foot': ['Ayak parmaklarının uç falankslar arası eklem kapsülleri', 'Capsulae articulares articulationum interphalangearum distalium pedis', AYAK_IP],
  'collateral interphalangeal ligaments of foot': ['Ayak parmaklarının falankslar arası yan bağları', 'Ligamenta collateralia articulationum interphalangearum pedis', AYAK_IP],
  'plantar interphalangeal ligaments': ['Ayak parmaklarının falankslar arası taban bağları', 'Ligamenta plantaria articulationum interphalangearum pedis', AYAK_IP],
  // Kalça ve pelvis
  'acetabular labrum': ['Asetabulum dudağı (labrum acetabuli)', 'Labrum acetabuli', 'Asetabulum kenarına tutunan lifli kıkırdak halkadır; yuvayı derinleştirir ve femur başını sıkıca sarar. Kalça sıkışmasında (impingement) yırtılabilir.'],
  'transverse acetabular ligament': ['Asetabulumun enine bağı', 'Ligamentum transversum acetabuli', 'Asetabulum çentiğinin üzerinden geçerek labrumun halkasını tamamlar; altından femur başı bağının damarları eklem içine girer.'],
  'ligament of head of femur': ['Femur başı bağı', 'Ligamentum capitis femoris', 'Asetabulum çukurundan femur başındaki çukurcuğa (fovea capitis) uzanır. Eklemi sağlamlaştırmaktan çok, içinden geçen küçük arterle (r. acetabularis) çocuklukta femur başını besler.'],
  'articular capsule of hip joint': ['Kalça eklemi kapsülü', 'Capsula articularis coxae', 'Asetabulum kenarından femur boynuna uzanan kalın kapsüldür. Önde iliofemoral ve pubofemoral, arkada iskiofemoral bağlarla güçlenir; femur boynunun büyük bölümü kapsül içinde kalır.'],
  'descending part of iliofemoral ligament': ['İliofemoral bağın inen bölümü', 'Pars descendens ligamenti iliofemoralis', KALCA_Y],
  'transverse part of iliofemoral ligament': ['İliofemoral bağın enine bölümü', 'Pars transversa ligamenti iliofemoralis', KALCA_Y],
  'pubofemoral ligament': ['Pubis-femur bağı', 'Ligamentum pubofemorale', 'Pubisin üst kolundan kalça kapsülünün alt ön yüzüne uzanır; kalçanın aşırı dışa açılmasını (abduksiyon) sınırlar.'],
  'ischiofemoral ligament': ['İskiyum-femur bağı', 'Ligamentum ischiofemorale', 'Asetabulumun arka kenarından femur boynunun üst yüzüne sarmal biçimde uzanır; kalça kapsülünün arka yüzünü güçlendirir ve aşırı içe dönmeyi sınırlar.'],
  'frenula capsulae': ['Kalça kapsülünün femur boynu kıvrımları', 'Retinacula capsulae articularis coxae', 'Kapsülün femur boynu üzerine yansıyan sinovyal kıvrımlarıdır; femur başını besleyen damarları (retinaküler arterler) taşır. Femur boynu kırıklarında bu damarlar yırtılıp femur başı beslenemeyebilir.'],
  'pubic symphysis': ['Pubis simfizi', 'Symphysis pubica', 'İki pubis kemiğinin ön ortada lifli kıkırdak bir diskle birleştiği eklemdir. Çok az hareket eder; gebelikte hormon etkisiyle biraz gevşer.'],
  'interpubic disc': ['Pubisler arası disk', 'Discus interpubicus', 'Pubis simfizinde iki pubis kemiğinin eklem yüzeyleri arasındaki lifli kıkırdak disktir.'],
  'superior pubic ligament': ['Üst pubis bağı', 'Ligamentum pubicum superius', 'Pubis simfizinin üst kenarında iki pubis tüberkülü arasında uzanır.'],
  'inferior pubic ligament': ['Alt pubis bağı', 'Ligamentum pubicum inferius', 'Pubis simfizinin alt kenarını kavis çizerek örter; pubis kemerinin tepesini yuvarlar.'],
  'sacrospinous ligament': ['Sakrospinöz bağ', 'Ligamentum sacrospinale', 'Sakrum ve koksiksin yan kenarından spina ischiadica\'ya uzanır. Büyük siyatik çentiği büyük siyatik deliğe (foramen ischiadicum majus) çevirir; m. coccygeus bu bağın üzerinde uzanır.'],
  'sacrotuberous ligament': ['Sakrotüberöz bağ', 'Ligamentum sacrotuberale', 'Sakrum ve iliumun arka kenarından tuber ischiadicum\'a uzanan güçlü bağdır. Sakrospinöz bağla birlikte küçük siyatik deliği (foramen ischiadicum minus) sınırlar ve sakrumun öne dönmesini engeller.'],
  'iliolumbar ligament': ['İliolomber bağ', 'Ligamentum iliolumbale', 'Beşinci bel omurunun (L5) transvers çıkıntısını iliak kristaya bağlar; son bel omurunun sakrum üzerinde öne kaymasını sınırlar.'],
  'obturator membrane': ['Obturator zar', 'Membrana obturatoria', 'Kalça kemiğindeki obturator deliği kapatan zardır. Üst kenarındaki kanaldan (canalis obturatorius) obturator damarlar ve sinir geçer; iki yüzü obturator kaslara tutunma yeri sağlar.'],
  'anterior sacro-iliac ligament': ['Ön sakroiliak bağ', 'Ligamentum sacroiliacum anterius', SAKROILIAK],
  'interosseous sacro-iliac ligament': ['Kemikler arası sakroiliak bağ', 'Ligamentum sacroiliacum interosseum', SAKROILIAK + ' Kemikler arası bağ eklemin arkasındaki dar aralığı dolduran en güçlü bağdır.'],
  'posterior sacro-iliac ligament': ['Arka sakroiliak bağ', 'Ligamentum sacroiliacum posterius', SAKROILIAK],
  'sacrococcygeal symphysis': ['Sakrokoksigeal eklem', 'Articulatio sacrococcygea', 'Sakrumun ucu ile koksiks arasındaki, lifli kıkırdak diskle birleşen eklemdir; doğumda koksiksin biraz arkaya itilmesine izin verir.'],
  'intercornual ligament': ['Boynuzlar arası bağ', 'Ligamentum intercornuale', 'Sakrumun boynuzlarını (cornua sacralia) koksiksin boynuzlarına bağlar.'],
  // Omurga ve kaburgalar
  'anterior longitudinal ligament': ['Ön uzun bağ', 'Ligamentum longitudinale anterius', 'Omur gövdelerinin ve disklerin ön yüzü boyunca kafa tabanından sakruma uzanır; omurganın aşırı arkaya bükülmesini sınırlar.'],
  'posterior longitudinal ligament': ['Arka uzun bağ', 'Ligamentum longitudinale posterius', 'Omur gövdelerinin arka yüzü boyunca, omurilik kanalının ön duvarında uzanır; öne bükülmeyi sınırlar. Ortada güçlü, yanlarda zayıf olduğu için disk fıtıkları çoğunlukla yana ve arkaya (posterolateral) olur.'],
  'ligamenta flava': ['Sarı bağlar', 'Ligamenta flava', 'Komşu omurların laminalarını birbirine bağlayan, elastik liften zengin bağlardır. Omurilik kanalının arka duvarını oluşturur ve öne bükülen omurganın dikleşmesine yardım eder. Lomber ponksiyonda iğnenin geçtiği dirençli katmandır.'],
  'interspinous ligaments': ['Dikenler arası bağlar', 'Ligamenta interspinalia', 'Komşu omurların diken çıkıntılarını (processus spinosus) birbirine bağlar; omurganın öne bükülmesini sınırlar.'],
  'supraspinous ligament': ['Diken üstü bağ', 'Ligamentum supraspinale', 'Diken çıkıntılarının uçlarını birleştiren uzun bağdır; boyunda ense bağına devam eder.'],
  'nuchal ligament': ['Ense bağı', 'Ligamentum nuchae', 'Dış oksipital çıkıntıdan yedinci boyun omurunun diken çıkıntısına uzanan üçgen bağdır; başın dik durmasına yardım eder ve ense kaslarına tutunma yeri sağlar.'],
  'radiate ligament of head of rib': ['Kaburga başının ışınsal bağı', 'Ligamentum capitis costae radiatum', 'Kaburga başını iki komşu omur gövdesine ve aradaki diske yelpaze gibi bağlar.'],
  'intra-articular ligament of head of rib': ['Kaburga başının eklem içi bağı', 'Ligamentum capitis costae intraarticulare', 'Kaburga başının tepesini omurlar arası diske bağlar ve kaburga başı eklemini iki boşluğa ayırır.'],
  'costotransverse ligament': ['Kaburga-transvers çıkıntı bağı', 'Ligamentum costotransversarium', 'Kaburga boynunu omurun transvers çıkıntısına bağlar; kaburga-transvers çıkıntı eklemini sağlamlaştırır.'],
  'external intercostal membrane': ['Dış interkostal zar', 'Membrana intercostalis externa', 'Önde, kaburga kıkırdakları arasında, dış interkostal kasın bittiği yerden sternuma kadar kasın yerini alan zardır.'],
  'internal intercostal membrane': ['İç interkostal zar', 'Membrana intercostalis interna', 'Arkada, kaburga açısından omurgaya kadar iç interkostal kasın yerini alan zardır.'],
  // Omuz
  'glenoid labrum': ['Glenoid dudağı (labrum glenoidale)', 'Labrum glenoidale', 'Skapuladaki sığ glenoid çukurun kenarına tutunan lifli kıkırdak halkadır; yuvayı derinleştirir. Omuz çıkıklarında ön alt bölümü yırtılabilir (Bankart lezyonu).'],
  'articular capsule of glenohumeral joint': ['Omuz eklemi kapsülü', 'Capsula articularis articulationis glenohumeralis', 'Gevşek ve geniş olduğu için omuza vücuttaki en büyük hareket açıklığını verir. Alt bölümü kas ve bağla desteklenmediği için omuz çıkıkları çoğunlukla öne ve aşağı olur.'],
  'superior glenohumeral ligament': ['Üst glenohumeral bağ', 'Ligamentum glenohumerale superius', OMUZ_GH],
  'middle glenohumeral ligament': ['Orta glenohumeral bağ', 'Ligamentum glenohumerale medium', OMUZ_GH],
  'inferior glenohumeral ligament': ['Alt glenohumeral bağ', 'Ligamentum glenohumerale inferius', OMUZ_GH + ' Alt bağ, kol yukarı ve dışa kaldırılmışken omzun en önemli dengeleyicisidir.'],
  'coracohumeral ligament': ['Korakohumeral bağ', 'Ligamentum coracohumerale', 'Skapulanın korakoid çıkıntısından humerusun büyük ve küçük tüberküllerine uzanır; kapsülün üst kısmını güçlendirir ve humerus başının aşağı kaymasını engeller.'],
  'transverse humeral ligament': ['Humerusun enine bağı', 'Ligamentum transversum humeri', 'Humerustaki tüberküller arası oluğun üzerinden geçer; m. biceps brachii uzun başının kirişini olukta tutar.'],
  'acromioclavicular ligament': ['Akromiyoklaviküler bağ', 'Ligamentum acromioclaviculare', 'Skapulanın akromiyonunu klavikulanın dış ucuna üstten bağlar; akromiyoklaviküler eklemi sağlamlaştırır.'],
  'articular capsule of acromioclavicular joint': ['Akromiyoklaviküler eklem kapsülü', 'Capsula articularis articulationis acromioclavicularis', 'Akromiyon ile klavikulanın dış ucu arasındaki küçük eklemi sarar.'],
  'articular disc of acromioclavicular joint': ['Akromiyoklaviküler eklem diski', 'Discus articularis articulationis acromioclavicularis', 'Akromiyoklaviküler eklemin yüzeyleri arasındaki küçük lifli kıkırdak disktir; çoğu kişide eksik ya da delik olabilir.'],
  'conoid ligament': ['Konoid bağ', 'Ligamentum conoideum', KORAKOKLAV],
  'trapezoid ligament': ['Trapezoid bağ', 'Ligamentum trapezoideum', KORAKOKLAV],
  'anterior sternoclavicular ligament': ['Ön sternoklaviküler bağ', 'Ligamentum sternoclaviculare anterius', STERNOKLAV],
  'posterior sternoclavicular ligament': ['Arka sternoklaviküler bağ', 'Ligamentum sternoclaviculare posterius', STERNOKLAV],
  'articular capsule of sternoclavicular joint': ['Sternoklaviküler eklem kapsülü', 'Capsula articularis articulationis sternoclavicularis', STERNOKLAV],
  'articular disc of sternoclavicular joint': ['Sternoklaviküler eklem diski', 'Discus articularis articulationis sternoclavicularis', STERNOKLAV + ' Disk eklemi iki boşluğa ayırır, sarsıntıyı emer ve klavikulanın sternum üzerinden içe kaymasını engeller.'],
  'interclavicular ligament': ['Klavikulalar arası bağ', 'Ligamentum interclaviculare', 'İki klavikulanın iç uçlarını, sternumun üst kenarındaki çentiğin üzerinden birbirine bağlar.'],
  // Dirsek ve ön kol
  'articular capsule of elbow joint': ['Dirsek eklemi kapsülü', 'Capsula articularis cubiti', 'Humerus, ulna ve radius arasındaki üç eklemi tek kapsül içinde sarar; önde ve arkada ince, yanlarda yan bağlarla güçlüdür.'],
  'radial collateral ligament': ['Dirseğin radial yan bağı', 'Ligamentum collaterale radiale', 'Humerusun lateral epikondilinden radius başını saran halka bağa uzanır; dirseğin içe doğru açılmasını (varus) engeller.'],
  'ulnar collateral ligament': ['Dirseğin ulnar yan bağı', 'Ligamentum collaterale ulnare', 'Humerusun medial epikondilinden ulnanın koronoid çıkıntısına ve olekranona uzanır; dirseğin dışa doğru açılmasını (valgus) engeller. Atış sporlarında zorlanıp yırtılabilir.'],
  'annular ligament of radius': ['Radiusun halka bağı', 'Ligamentum anulare radii', 'Radius başını ulnadaki radial çentiğe karşı halka gibi sarar; ön kol içe ve dışa dönerken radius başı bu halkanın içinde döner. Küçük çocuklarda kol çekilince radius başı halkadan kayabilir (dadı dirseği).'],
  'articular disc of distal radio-ulnar joint': ['Alt radioulnar eklem diski (üçgen fibrokartilaj)', 'Discus articularis articulationis radioulnaris distalis', 'Ulna başını el bileği ekleminden ayıran üçgen biçimli lifli kıkırdaktır; radius ile ulnanın alt uçlarını birbirine bağlar. El bileğinin ulna tarafındaki ağrıların sık nedeni bu diskin yırtığıdır.'],
  'palmar radio-ulnar ligament': ['Avuç içi radioulnar bağı', 'Ligamentum radioulnare palmare', 'Radius ile ulnanın alt uçlarını avuç içi tarafından bağlar; alt radioulnar eklemi sağlamlaştırır.'],
  // El bileği ve el
  'articular capsule of radiocarpal joint': ['El bileği eklemi kapsülü', 'Capsula articularis articulationis radiocarpalis', 'Radius ve eklem diski ile ilk sıra karpal kemikler (skafoid, lunat, trikuetrum) arasındaki el bileği eklemini sarar.'],
  'dorsal radiocarpal ligament': ['Sırt radiokarpal bağı', 'Ligamentum radiocarpale dorsale', EL_BILEK],
  'radioscaphocapitate ligament': ['Radius-skafoid-kapitat bağı', 'Ligamentum radioscaphocapitatum', EL_BILEK + ' Avuç içi tarafındaki en güçlü bağlardan biridir; skafoidi askı gibi taşır.'],
  'ulnolunate ligament': ['Ulna-lunat bağı', 'Ligamentum ulnolunatum', EL_BILEK],
  'ulnotriquetral ligament': ['Ulna-trikuetrum bağı', 'Ligamentum ulnotriquetrum', EL_BILEK],
  'ulnocapitate ligament': ['Ulna-kapitat bağı', 'Ligamentum ulnocapitatum', EL_BILEK],
  'dorsal ulnocarpal ligament': ['Sırt ulnokarpal bağı', 'Ligamentum ulnocarpale dorsale', EL_BILEK],
  'radial collateral ligament of wrist joint': ['El bileğinin radial yan bağı', 'Ligamentum collaterale carpi radiale', 'Radiusun stiloid çıkıntısından skafoid kemiğe uzanır; el bileğinin ulna tarafına aşırı bükülmesini sınırlar.'],
  'ulnar collateral ligament of wrist joint': ['El bileğinin ulnar yan bağı', 'Ligamentum collaterale carpi ulnare', 'Ulnanın stiloid çıkıntısından trikuetrum ve pisiform kemiklere uzanır; el bileğinin başparmak tarafına aşırı bükülmesini sınırlar.'],
  'radiate carpal ligament': ['Işınsal karpal bağ', 'Ligamentum carpi radiatum', 'Kapitat kemiğin avuç içi yüzünden çevredeki karpal kemiklere ışın gibi yayılır.'],
  'dorsal intercarpal ligaments': ['Sırt karpallar arası bağları', 'Ligamenta intercarpalia dorsalia', EL_BILEK],
  'dorsal scaphotriquetral ligament': ['Sırt skafoid-trikuetrum bağı', 'Ligamentum scaphotriquetrum dorsale', EL_BILEK],
  'palmar scaphotriquetral ligament': ['Avuç içi skafoid-trikuetrum bağı', 'Ligamentum scaphotriquetrum palmare', EL_BILEK],
  'pisotriquetral ligament': ['Pisiform-trikuetrum bağı', 'Ligamentum pisotriquetrum', 'Pisiform kemiği trikuetruma bağlar; m. flexor carpi ulnaris kirişinin içindeki pisiformu yerinde tutar.'],
  'triquetrocapitate ligament': ['Trikuetrum-kapitat bağı', 'Ligamentum triquetrocapitatum', EL_BILEK],
  'scaphotrapeziotrapezoidal ligament': ['Skafoid-trapezyum-trapezoid bağı', 'Ligamentum scaphotrapeziotrapezoideum', EL_BILEK],
  'dorsal carpometacarpal ligaments': ['Sırt karpometakarpal bağları', 'Ligamenta carpometacarpalia dorsalia', KARPOMETAKARP],
  'palmar carpometacarpal ligaments': ['Avuç içi karpometakarpal bağları', 'Ligamenta carpometacarpalia palmaria', KARPOMETAKARP],
  'dorsal metacarpal ligaments': ['Sırt metakarp bağları', 'Ligamenta metacarpalia dorsalia', METAKARP],
  'palmar metacarpal ligaments': ['Avuç içi metakarp bağları', 'Ligamenta metacarpalia palmaria', METAKARP],
  'interosseous metacarpal ligaments': ['Metakarplar arası kemikler arası bağları', 'Ligamenta metacarpalia interossea', METAKARP],
  'articular capsules of metacarpophalangeal joints': ['El tarak-parmak eklemi kapsülleri', 'Capsulae articulares articulationum metacarpophalangealium', MCP],
  'collateral metacarpophalangeal ligaments': ['El tarak-parmak eklemi yan bağları', 'Ligamenta collateralia articulationum metacarpophalangealium', MCP + ' Yan bağlar parmak bükülüyken gerilir; bu yüzden el alçıya parmaklar bükülü konur.'],
  'deep transverse metacarpal ligament': ['Derin enine metakarp bağı', 'Ligamentum metacarpale transversum profundum', 'İkinci-beşinci tarak kemiklerinin başlarını avuç içi tarafından birbirine bağlar.'],
  'articular capsules of proximal interphalangeal joints': ['El parmaklarının yakın falankslar arası eklem kapsülleri', 'Capsulae articulares articulationum interphalangearum proximalium manus', EL_IP],
  'articular capsules of distal interphalangeal joints': ['El parmaklarının uç falankslar arası eklem kapsülleri', 'Capsulae articulares articulationum interphalangearum distalium manus', EL_IP],
  'collateral interphalangeal ligaments of hand': ['El parmaklarının falankslar arası yan bağları', 'Ligamenta collateralia articulationum interphalangearum manus', EL_IP + ' Yan bağlar parmağın yana bükülmesini engeller; parmak burkulmalarında en sık yaralanan yapılardır.'],
  'palmar interphalangeal ligaments': ['El parmaklarının falankslar arası avuç içi bağları (avuç içi plakaları)', 'Ligamenta palmaria articulationum interphalangearum manus', EL_IP + ' Avuç içi plakası eklemin ön yüzünü örter ve parmağın geriye aşırı bükülmesini engeller.'],
  // Çene eklemi
  'articular capsule of temporomandibular joint': ['Çene eklemi kapsülü', 'Capsula articularis articulationis temporomandibularis', 'Temporal kemik ile mandibula başı arasındaki çene eklemini sarar; içindeki diske de tutunur.'],
  'articular disc of temporomandibular joint': ['Çene eklemi diski', 'Discus articularis articulationis temporomandibularis', 'Mandibula başı ile temporal kemik arasındaki lifli kıkırdak disktir; eklemi üst ve alt iki bölüme ayırır. Ağız açılırken disk mandibula başıyla birlikte öne kayar; kaymanın bozulması çene ekleminde tık sesine ve ağrıya yol açar.'],
  'lateral temporomandibular ligament': ['Çene ekleminin dış bağı', 'Ligamentum laterale articulationis temporomandibularis', 'Kapsülün dış yüzündeki kalınlaşmadır; mandibula başının arkaya ve aşağı kaymasını sınırlar.'],
  'sphenomandibular ligament': ['Sfenoid-mandibula bağı', 'Ligamentum sphenomandibulare', 'Sfenoid kemiğin dikeninden mandibula deliğinin kenarındaki lingulaya uzanır. Alt çene sinir bloğunda iğne bu bağın yakınına yapılır.'],
  'stylomandibular ligament': ['Stiloid-mandibula bağı', 'Ligamentum stylomandibulare', 'Temporal kemiğin stiloid çıkıntısından mandibula açısına uzanır; parotis bezini m. pterygoideus medialis\'ten ayırır.'],
  // Kemikler, kıkırdaklar, sinüsler
  'malleus': ['Çekiç kemiği (malleus)', 'Malleus', 'Orta kulaktaki üç işitme kemikçiğinin en dıştakidir; sapı kulak zarına yapışıktır. Kulak zarının titreşimini örs kemiğine iletir.'],
  'incus': ['Örs kemiği (incus)', 'Incus', 'Üç işitme kemikçiğinin ortadakidir; titreşimi çekiç kemiğinden üzengi kemiğine iletir.'],
  'stapes': ['Üzengi kemiği (stapes)', 'Stapes', 'Vücudun en küçük kemiğidir. Tabanı iç kulağın oval penceresine oturur ve titreşimi iç kulak sıvısına aktarır. Tabanın kemikleşerek takılması (otoskleroz) işitme kaybı yapar.'],
  'coccyx': ['Koksiks', 'Os coccygis', 'Omurganın son parçasıdır; genellikle dört küçük omurun kaynaşmasıyla oluşur. Pelvis tabanı kaslarına (m. levator ani, m. coccygeus) ve m. gluteus maximus\'a tutunma yeri sağlar; otururken yükün bir bölümünü taşır.'],
  'costal cartilage of eighth rib': ['8. kaburga kıkırdağı', 'Cartilago costalis costae VIII', '8.–10. kaburgaların kıkırdakları sternuma ulaşmaz; her biri üstündeki kıkırdağa katılarak kaburga kemerini (arcus costalis) oluşturur. Bu yüzden bu kaburgalara yalancı kaburga (costae spuriae) denir.'],
  'costal cartilage of ninth rib': ['9. kaburga kıkırdağı', 'Cartilago costalis costae IX', '8.–10. kaburgaların kıkırdakları sternuma ulaşmaz; her biri üstündeki kıkırdağa katılarak kaburga kemerini (arcus costalis) oluşturur.'],
  'costal cartilage of tenth rib': ['10. kaburga kıkırdağı', 'Cartilago costalis costae X', '8.–10. kaburgaların kıkırdakları sternuma ulaşmaz; her biri üstündeki kıkırdağa katılarak kaburga kemerini (arcus costalis) oluşturur.'],
  'sinus of frontal bone': ['Frontal sinüs', 'Sinus frontalis', 'Frontal kemiğin iki tabakası arasındaki hava boşluğudur; burun boşluğunun orta yoluna (meatus nasi medius) açılır. Kafatasını hafifletir ve sese tını katar; sinüzitte ağrı alında hissedilir.'],
  'sinus of sphenoid bone': ['Sfenoid sinüs', 'Sinus sphenoidalis', 'Sfenoid kemiğin gövdesindeki hava boşluğudur; hemen üstünde hipofiz bezi bulunur. Hipofiz ameliyatlarında bu sinüsten geçilerek beze ulaşılır.'],
};

// ana.js'deki EK_TERIM biçimi: [Türkçe ad, görev].
export const EKLEM_TERIM = Object.fromEntries(Object.entries(TABLO).map(([k, [tr, , fn]]) => [k, [tr, fn]]));
export const eklemLa = k => TABLO[k]?.[1];
