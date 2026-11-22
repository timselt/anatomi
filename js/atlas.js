// Atlas sahneleri: bir atlas sayfası gibi tek dokunuşla açılan hazır görünümler.
// Her sahnede gösterilecek yapılar, soluk arka plan, bakış yönü, etiketler ve kısa bir ders notu vardır.
// Yapılar modeldeki İngilizce adla seçilir (küçük harf, "left/right" sözcükleri silinmiş hâliyle).
// Alanlar:
//   goster: gösterilen yapılar (düzenli ifadeler); 'sistem:kalp' biçimi bütün bir sistemi alır
//   baglam: yerini anlamak için soluk gösterilen yapılar (aynı biçim)
//   etiket: adı yazılacak yapılar, önem sırasıyla
//   yan: 'sag' ya da 'sol' verilirse kol ve bacak gibi çift yapılardan yalnız o taraf gösterilir
//   baglamSoluk: arka plan yapıları soluk gösterilsin (beyin gibi asıl yapıları örten arka planlar için)
//   odak: kameranın sığdırılacağı yapılar (verilmezse gösterilenlerin hepsi; ör. sinirler ele kadar uzanırken yalnız pleksus)
//   baglamSistem: arka plan yalnız bu sistemlerden alınır (ör. ['iskelet']; "carpal" deseni el bileği bağlarını ve sinirlerini yakalamasın)
//   bakis: kameranın bakış yönü (yapıdan kameraya doğru birim yön: x sola, y yukarı, z öne)
// Notlar ders kitabı bilgisidir (Gray's Anatomy, Terminologia Anatomica); kaynakla tek tek karşılaştırılmadı.

const ON = [0, 0.1, 1], ARKA = [0, 0.1, -1], SAG = [-1, 0.1, 0.15], ALT = [0, -1, 0.2], SAG_ON = [-0.7, 0.15, 0.7];

export const ATLAS = [
  // ---- Baş ve boyun ----
  { id: 'boyun-arterleri', bolge: 'Baş ve boyun', ad: 'Boyun arterleri ve eksternal karotis dalları', yan: 'sag', bakis: SAG,
    goster: [/^(common|internal|external) carotid artery$/, /^(facial|maxillary|superficial temporal|occipital|ascending pharyngeal|lingual|superior thyroid) artery$/, /^vertebral artery$/, /^subclavian artery$/, /^thyrocervical trunk$/, /^inferior thyroid artery$/, /^brachiocephalic artery$/],
    baglam: [/mandible|hyoid|thyroid cartilage|cricoid|cervical vertebra|^axis$|^atlas$|clavicle|occipital bone|temporal bone/],
    etiket: [/^common carotid artery$/, /^internal carotid artery$/, /^external carotid artery$/, /^facial artery$/, /^superficial temporal artery$/, /^maxillary artery$/, /^occipital artery$/, /^vertebral artery$/, /^subclavian artery$/, /^thyrocervical trunk$/],
    not: 'Ana karotis arter, tiroit kıkırdağının üst kenarı hizasında internal ve eksternal karotise ayrılır. İnternal karotis boyunda dal vermez; eksternal karotisin dalları yüzü, dili, tiroidi ve saçlı deriyi besler. Vertebral arter subklavyen arterden çıkar ve boyun omurlarının deliklerinden yukarı çıkar.' },
  { id: 'willis', bolge: 'Baş ve boyun', ad: 'Willis halkası (alttan bakış)', bakis: ALT, baglamSoluk: true,
    goster: [/^internal carotid artery$/, /cerebral artery/, /communicating artery/, /^basilar artery$/, /^vertebral artery$/, /cerebellar artery$/],
    baglam: [/^brain|cerebral hemisphere|^pons$|medulla oblongata|cerebellum$|midbrain/],
    etiket: [/^anterior communicating artery$/, /^anterior cerebral artery$/, /^internal carotid artery$/, /^posterior communicating artery$/, /precommunicating part of posterior cerebral/, /^basilar artery$/, /^superior cerebellar artery$/, /^vertebral artery$/, /^posterior inferior cerebellar artery$/],
    not: 'Halka önde iki a. cerebri anterior ve aralarındaki a. communicans anterior, yanlarda a. carotis interna ve a. communicans posterior, arkada baziler arterin ayrıldığı iki a. cerebri posterior ile kurulur. Bir arter tıkanırsa kan halka üzerinden öbür taraftan gelebilir. Anevrizmaların çoğu halkanın ön bölümündedir.' },
  { id: 'kafa-ciftleri', bolge: 'Baş ve boyun', ad: 'Kafa çiftlerinin beyin sapından çıkışı', bakis: ALT, baglamSoluk: true,
    goster: [/nerve \((i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\)$/, /^(optic|trochlear) nerve$/, /^oculomotor nerve/, /root of trigeminal nerve$/],
    baglam: [/^pons$|medulla oblongata|midbrain|cerebellum$|^brain|cerebral hemisphere/],
    etiket: [/^olfactory nerve/, /^optic nerve$/, /^oculomotor nerve/, /^trochlear nerve$/, /^trigeminal nerve/, /^abducens nerve/, /^facial nerve/, /^vestibulocochlear nerve/, /^glossopharyngeal nerve/, /^vagus nerve/, /^accessory nerve/, /^hypoglossal nerve/],
    not: 'Sıra önden arkaya: I koku, II görme, III göz hareketi ve pupilla, IV üst eğik kas, V yüz duyusu ve çiğneme, VI dış düz kas, VII yüz kasları, VIII işitme ve denge, IX yutak ve dilin arka üçte biri, X boyun, göğüs ve karın iç organları, XI trapez ve sternokleidomastoid, XII dil kasları. III ve IV orta beyinden, V ponstan, VI–VIII pons-medulla sınırından, IX–XII medulla oblongata\'dan çıkar.' },

  // ---- Göğüs ----
  { id: 'kalp-on', bolge: 'Göğüs', ad: 'Kalbin ön yüzü ve koroner arterler', bakis: ON,
    goster: ['sistem:kalp', /coronary|cardiac vein|interventricular (branch|artery|vein)|conus (artery|branch)|marginal (branch|vein)|ventricular branch|coronary sinus|diagonal branch|circumflex branch/, /^(ascending aorta|pulmonary trunk|superior vena cava)$/],
    etiket: [/^trunk of right coronary artery$/, /^trunk of left coronary artery$/, /^trunk of anterior interventricular branch of left coronary artery$/, /^circumflex branch of left coronary artery$/, /^great cardiac vein$/, /^marginal branch of right coronary artery$/, /^ascending aorta$/, /^pulmonary trunk$/],
    not: 'Sağ koroner arter atrioventriküler olukta sağa döner, sağ ventrikülü ve çoğu insanda sinoatriyal ve atrioventriküler düğümü besler. Sol koroner arter kısa bir gövdeden sonra ön interventriküler (LAD) ve sirkumfleks dallarına ayrılır. LAD tıkanması kalbin ön duvarında infarktüse yol açar.' },
  { id: 'kalp-arka', bolge: 'Göğüs', ad: 'Kalbin arka yüzü ve sinus coronarius', bakis: ARKA,
    goster: ['sistem:kalp', /coronary|cardiac vein|interventricular (branch|artery|vein)|marginal (branch|vein)|ventricular branch|coronary sinus|vein of left ventricle|circumflex branch/, /pulmonary vein$/, /^inferior vena cava$/],
    etiket: [/^coronary sinus$/, /^posterior interventricular branch of right coronary artery$/, /^middle cardiac vein$/, /^circumflex branch of left coronary artery$/, /pulmonary vein$/, /^inferior vena cava$/],
    not: 'Kalbin venleri sinus coronarius\'ta toplanır ve sağ atriyuma açılır. Arka interventriküler dal çoğu insanda sağ koroner arterden çıkar (sağ dominant dolaşım). Dört pulmoner ven sol atriyuma açılır.' },
  { id: 'mediasten', bolge: 'Göğüs', ad: 'Mediastendeki büyük damarlar', bakis: ON,
    goster: ['sistem:kalp', /^(ascending aorta|arch of aorta|descending thoracic aorta|pulmonary trunk|pulmonary artery|brachiocephalic artery|common carotid artery|subclavian artery|superior vena cava|inferior vena cava|brachiocephalic vein|azygos vein)$/, /^(trachea|main bronchus|esophagus)$/],
    baglam: [/sternum|manubrium|^rib$|costal cartilage|thoracic vertebra/],
    etiket: [/^arch of aorta$/, /^brachiocephalic artery$/, /^common carotid artery$/, /^subclavian artery$/, /^superior vena cava$/, /^brachiocephalic vein$/, /^pulmonary trunk$/, /^trachea$/, /^esophagus$/],
    not: 'Aort yayından sırasıyla truncus brachiocephalicus, sol ana karotis arter ve sol subklavyen arter çıkar. Sağ ve sol brakiyosefalik ven birleşerek vena cava superior\'u oluşturur. Aort yayı sol ana bronşun üstünden geçer; trakea ve özofagus yayın arkasındadır.' },
  { id: 'akciger', bolge: 'Göğüs', ad: 'Akciğer lobları ve bronşlar', bakis: ON,
    goster: [/lobe of .*lung$/, /^(trachea|main bronchus|main bronchus proper)$/, /lobar bronchus$/],
    baglam: [/^rib$|sternum|manubrium|clavicle/],
    etiket: [/^superior lobe of right lung$/, /^middle lobe of right lung$/, /^inferior lobe of right lung$/, /^superior lobe of left lung$/, /^inferior lobe of left lung$/, /^trachea$/, /^main bronchus$/],
    not: 'Sağ akciğerin üç lobu (üst, orta, alt), sol akciğerin iki lobu (üst, alt) vardır; solun orta lob karşılığı lingula\'dır. Sağ ana bronş daha kısa, geniş ve dikeydir; yabancı cisim daha çok sağa kaçar.' },

  // ---- Karın ----
  { id: 'karin-organlari', bolge: 'Karın', ad: 'Karın organlarının yerleşimi', bakis: ON,
    goster: [/^(liver|stomach|spleen|pancreas|gallbladder|duodenum|jejunum|ileum|cecum|appendix|ascending colon|transverse colon|descending colon|sigmoid colon|rectum|kidney|hepatovenous segment.*)$/],
    baglam: [/^rib$|costal cartilage|lumbar vertebra|hip bone|sacrum|^sternum/],
    etiket: [/^liver$|hepatovenous segment/, /^stomach$/, /^spleen$/, /^gallbladder$/, /^transverse colon$/, /^ascending colon$/, /^descending colon$/, /^cecum$|^appendix$/, /^sigmoid colon$/],
    not: 'Karaciğer sağ üst kadranda, mide ve dalak sol üst kadrandadır. Kalın bağırsak ince bağırsakları çerçeve gibi çevreler: çekum ve apendiks sağ alt kadranda, sigmoid kolon sol alt kadrandadır.' },
  { id: 'truncus-coeliacus', bolge: 'Karın', ad: 'Truncus coeliacus ve dalları', bakis: ON,
    goster: [/^(celiac trunk|celiac artery|gastric artery|common hepatic artery|splenic artery|hepatic artery proper|trunk of gastroduodenal artery|gastroduodenal artery|gastro-epiploic artery|abdominal aorta)$/, /hepatic artery$/, /pancreaticoduodenal artery$/],
    baglam: [/^(stomach|spleen|pancreas|duodenum|gallbladder|liver)$|hepatovenous segment/],
    etiket: [/^celiac trunk$/, /^gastric artery$/, /^common hepatic artery$/, /^splenic artery$/, /^hepatic artery proper$/, /gastroduodenal artery$/, /^abdominal aorta$/],
    not: 'Truncus coeliacus T12 düzeyinde aortadan çıkar ve üç dala ayrılır: a. gastrica sinistra, a. hepatica communis ve a. splenica. Ön bağırsağın türevlerini besler: mide, duodenumun ilk yarısı, karaciğer, safra kesesi, pankreasın bir bölümü ve dalak.' },
  { id: 'mezenterik', bolge: 'Karın', ad: 'Mezenterik arterler ve kolonun beslenmesi', bakis: ON,
    goster: [/superior mesenteric artery$|inferior mesenteric artery$/, /colic artery$|ileocolic artery$|^ileal artery$|sigmoid arter|superior rectal artery$|^marginal (colic )?artery|^marginal artery of colon/, /^abdominal aorta$/],
    baglam: [/colon$|^cecum$|^appendix$|^rectum$|^jejunum$|^ileum$/],
    etiket: [/superior mesenteric artery$/, /inferior mesenteric artery$/, /^middle colic artery$/, /^right colic artery$/, /^ileocolic artery$/, /^left colic artery$/, /^sigmoid arter/, /^superior rectal artery$/],
    not: 'A. mesenterica superior L1 düzeyinde çıkar; ince bağırsağı ve kolonun transvers kolonun üçte ikisine kadar olan bölümünü besler (orta bağırsak). A. mesenterica inferior L3 düzeyinde çıkar; transvers kolonun son üçte birinden rektumun üst bölümüne kadar besler (son bağırsak). İkisi kolonun kenarındaki marjinal arterle birbirine bağlanır.' },
  { id: 'portal', bolge: 'Karın', ad: 'Portal ven sistemi', bakis: ON,
    goster: [/portal vein/, /^(splenic|superior mesenteric|inferior mesenteric|gastric) vein$/],
    baglam: [/^(liver|stomach|spleen|pancreas|duodenum)$|hepatovenous segment/],
    etiket: [/^(hepatic )?portal vein$/, /^splenic vein$/, /^superior mesenteric vein$/, /^inferior mesenteric vein$/, /^gastric vein$/],
    not: 'Portal ven pankreas boynunun arkasında süperior mezenterik ven ile splenik venin birleşmesiyle oluşur; inferior mezenterik ven çoğunlukla splenik vene açılır. Sindirim kanalından emilen besinleri karaciğere taşır. Sirozda basınç artınca özofagus, göbek çevresi ve rektumdaki bağlantılar genişler (varisler).' },
  { id: 'bobrek', bolge: 'Karın', ad: 'Böbrekler ve üriner yol', bakis: ON,
    goster: [/^(kidney|ureter|urinary bladder|adrenal gland)$/, /renal (artery|vein)$/, /^(abdominal aorta|inferior vena cava)$/],
    baglam: [/lumbar vertebra|hip bone|sacrum|^rib$/],
    etiket: [/^kidney$/, /^adrenal gland$/, /^ureter$/, /^urinary bladder$/, /renal artery$/, /renal vein$/, /^abdominal aorta$/, /^inferior vena cava$/],
    not: 'Böbrekler T12–L3 arasında periton arkasındadır; karaciğer yüzünden sağ böbrek biraz daha aşağıdadır. Sol renal ven aort ile a. mesenterica superior arasından geçer. Üreter pelvis girişinde iliak damarları çaprazlar; taşlar en çok üç darlıkta takılır: pelvis-üreter birleşimi, iliak damarların çaprazladığı yer ve mesane girişi.' },

  // ---- Üst ekstremite ----
  { id: 'brakiyal-pleksus', baglamSistem: ['iskelet'], bolge: 'Üst ekstremite', ad: 'Brakiyal pleksus', yan: 'sag', bakis: ON,
    goster: [/brachial plexus/, /^(musculocutaneous|axillary|radial|median|ulnar) nerve$/], odak: [/brachial plexus/, /^(clavicle|first rib)$/],
    baglam: [/clavicle|scapula|humerus|^rib$|cervical vertebra|first thoracic vertebra/],
    etiket: [/^roots of brachial plexus$/, /^superior trunk of brachial plexus$/, /^middle trunk of brachial plexus$/, /^inferior trunk of brachial plexus$/, /^posterior cord of brachial plexus$/, /^musculocutaneous nerve$/, /^axillary nerve$/, /^radial nerve$/, /^median nerve$/, /^ulnar nerve$/],
    not: 'C5–T1 ön dalları kökleri, köklerin birleşmesi üst, orta ve alt gövdeleri oluşturur; gövdeler ön ve arka bölümlere, bölümler lateral, medial ve posterior kordlara ayrılır. Uç dallar: n. musculocutaneus ve n. medianus (lateral kord), n. ulnaris (medial kord), n. axillaris ve n. radialis (posterior kord). Üst gövde hasarı Erb felcine, alt gövde hasarı Klumpke felcine yol açar.' },
  { id: 'kol-arterleri', baglamSistem: ['iskelet'], bolge: 'Üst ekstremite', ad: 'Kol arterleri', yan: 'sag', bakis: ON,
    goster: [/^(subclavian|axillary|brachial|deep brachial|radial|ulnar|common interosseous|anterior interosseous) artery$/, /palmar (arterial )?arch$/, /circumflex humeral artery$|^subscapular artery$|^thoraco-acromial|ulnar collateral artery$|^(radial|anterior ulnar|posterior ulnar) recurrent artery$/],
    baglam: [/clavicle|scapula|humerus|radius|ulna|carpal|metacarpal|phalan/],
    etiket: [/^subclavian artery$/, /^axillary artery$/, /^brachial artery$/, /^deep brachial artery$/, /^radial artery$/, /^ulnar artery$/, /^superficial palmar arterial arch$/, /^deep palmar arch$/],
    not: 'A. subclavia birinci kaburganın dış kenarında a. axillaris, teres major kasının alt kenarında a. brachialis adını alır. A. brachialis dirsek çukurunda radial ve ulnar arterlere ayrılır; tansiyon bu arterden ölçülür. Avuç içinde ulnar arter yüzeyel arkı, radial arter derin arkı oluşturur.' },
  { id: 'rotator-manset', baglamSistem: ['iskelet'], bolge: 'Üst ekstremite', ad: 'Rotator manşet kasları', yan: 'sag', bakis: [-0.5, 0.2, -0.85],
    goster: [/^(supraspinatus|infraspinatus|infraspinatus muscle|teres minor|subscapularis)$/],
    baglam: [/scapula|humerus|clavicle/],
    etiket: [/^supraspinatus$/, /^infraspinatus/, /^teres minor$/, /^subscapularis$/],
    not: 'Dört kas (SİTS: supraspinatus, infraspinatus, teres minor, subscapularis) humerus başını glenoid çukura bastırarak omuz eklemini sabitler. Supraspinatus kolu ilk 15 derece uzaklaştırır ve en sık yırtılan kastır. İnfraspinatus ve teres minor dışa, subscapularis içe döndürür.' },

  // ---- Alt ekstremite ----
  { id: 'femoral-ucgen', baglamSistem: ['iskelet'], bolge: 'Alt ekstremite', ad: 'Femoral üçgen', yan: 'sag', bakis: ON,
    goster: [/^(femoral artery|femoral vein|femoral nerve|deep femoral artery|great saphenous vein|inguinal ligament|sartorius|adductor longus)$/],
    baglam: [/hip bone|femur|pubic|sacrum/],
    etiket: [/^inguinal ligament$/, /^sartorius$/, /^adductor longus$/, /^femoral nerve$/, /^femoral artery$/, /^femoral vein$/, /^great saphenous vein$/],
    not: 'Üst sınır ligamentum inguinale, dış sınır m. sartorius, iç sınır m. adductor longus\'tur. Dıştan içe sıra: sinir, arter, ven (boş alan, lenf). Femoral nabız kasıkta burada alınır; kateterler bu arter ve venden girer.' },
  { id: 'diz-baglari', bolge: 'Alt ekstremite', ad: 'Diz ekleminin bağları ve menisküsler', yan: 'sag', bakis: SAG_ON, baglamSoluk: true,
    goster: [/cruciate ligament$/, /^(tibial|fibular) collateral ligament$|part of tibial collateral ligament$/, /^(medial|lateral) meniscus$/, /meniscotibial ligament|meniscopatellar|patellar ligament$|transverse ligament of knee/],
    baglam: [/^(femur|tibia|fibula|patella)$/],
    etiket: [/^anterior cruciate ligament$/, /^posterior cruciate ligament$/, /^superficial part of tibial collateral ligament$/, /^fibular collateral ligament$/, /^medial meniscus$/, /^lateral meniscus$/],
    not: 'Ön çapraz bağ tibianın öne kaymasını, arka çapraz bağ arkaya kaymasını önler. Tibial (iç) kollateral bağ medial menisküse yapışır; bu yüzden dışarıdan gelen darbede ikisi ve ön çapraz bağ birlikte yırtılabilir ("mutsuz üçlü"). Fibular kollateral bağ menisküse yapışmaz.' },
];
