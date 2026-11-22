// Terim sözlüğü: BodyParts3D'deki İngilizce yapı adlarını Türkçe ve Latince karşılıklarına çevirir.
// Satır biçimi: [ingilizce adlar ('|' ile ayrılmış), anahtar, Türkçe ad, Latince ad, düzey, görevi, hafıza ipucu]
// Düzey: 1 = ortaokul, 2 = lise, 3 = üniversite.
// Doğrulama durumu ayrı tutulur (dogrulama.js). Orada işareti olmayan terim ekranda "doğrulanmadı" diye görünür.

import { DAMAR_KAS } from './damarkas.js';
import * as KT from './kadinterim.js';
const KADIN = KT.KADIN || {};

const S = [];
const t = (...r) => S.push(r);

// ---------------- İSKELET: kafatası ----------------
t('frontal bone','alin','Alın kemiği','Os frontale',1,'Alnı ve göz çukurlarının tavanını oluşturur; beynin ön bölümünü korur.','Alın = frontal: "front" ön demektir.');
t('parietal bone','cepere','Yan kafa kemiği (çeper kemiği)','Os parietale',1,'Kafatasının tepe ve yan duvarlarını oluşturur; beyni korur.','İki tanedir: kafanın tepesinde sağda ve solda.');
t('temporal bone','sakak','Şakak kemiği','Os temporale',1,'Kafatasının yan alt kısmını oluşturur; içinde işitme ve denge organı bulunur. Alt çene burada eklem yapar.','Şakağına dokun: altında şakak kemiği var, kulak da onun içinde.');
t('occipital bone','artkafa','Art kafa kemiği','Os occipitale',1,'Kafatasının arka ve alt kısmını oluşturur. Büyük deliğinden omurilik geçer; ilk boyun omuruyla eklem yapar.','Oksiput = ensenin üstü.');
t('sphenoid bone','kama','Temel kemik (kama kemiği, sfenoid)','Os sphenoidale',2,'Kafatası tabanının ortasında, kelebek biçiminde bir kemiktir; başka birçok kafa kemiğini birbirine bağlar. Hipofiz bezi onun çukurunda oturur.','Kelebeğe benzer; kafatasının "kilit taşı".');
t('ethmoid','kalbur','Kalbur kemiği','Os ethmoidale',2,'Burun boşluğu ile göz çukurları arasındadır. Delikli plakasından koku sinirleri geçer.','Kalbur gibi delik delik: koku lifleri bu deliklerden geçer.');
t('zygomatic bone','elmacik','Elmacık kemiği','Os zygomaticum',1,'Yanağın çıkıntısını ve göz çukurunun dış-alt kenarını oluşturur.','Elmacık kemikleri = yanağın "elma"sı.');
t('nasal bone','burun-kemigi','Burun kemiği','Os nasale',1,'Burun sırtının üst kısmını oluşturur. Burnun alt kısmı kemik değil, kıkırdaktır.','');
t('maxilla','ust-cene','Üst çene kemiği','Maxilla',1,'Üst dişleri taşır; damağın ön kısmını, burun boşluğunun yan duvarını ve göz çukurunun tabanını oluşturur.','');
t('mandible','alt-cene','Alt çene kemiği','Mandibula',1,'Alt dişleri taşır. Kafatasının hareket edebilen tek kemiğidir; çiğneme ve konuşmayı sağlar.','Kafatasında oynayan tek kemik: alt çene.');
t('palatine bone','damak','Damak kemiği','Os palatinum',2,'Sert damağın arka kısmını ve burun boşluğunun bir bölümünü oluşturur.','');
t('vomer','saban','Saban kemiği','Vomer',2,'Burun bölmesinin arka-alt kısmını oluşturan ince kemiktir.','Biçimi saban demirine benzer.');
t('lacrimal bone','gozyasi-kemigi','Gözyaşı kemiği','Os lacrimale',3,'Göz çukurunun iç duvarındaki küçük, ince kemiktir; gözyaşı kanalının yolunu oluşturur.','Yüzün en küçük kemiklerinden biri.');
t('inferior nasal concha','alt-konka','Alt burun konkası','Concha nasalis inferior',2,'Burun boşluğunun yan duvarındaki kıvrık kemiktir; solunan havanın ısınıp nemlenmesine yardım eder.','');
t('hyoid bone','dil-kemigi','Dil kemiği','Os hyoideum',2,'Boyunda, çenenin altında U biçiminde bir kemiktir. Başka hiçbir kemikle eklem yapmaz; dil ve yutma kaslarına tutunma yeri sağlar.','Hiçbir kemiğe değmeyen tek kemik.');

// ---------------- İSKELET: omurga ----------------
t('atlas','atlas','1. boyun omuru (atlas)','Atlas (vertebra cervicalis I)',1,'Kafatasını taşır; art kafa kemiğiyle eklem yaparak başı "evet" der gibi öne-arkaya sallamayı sağlar.','Dünyayı omuzlarında taşıyan Atlas gibi başı taşır.');
t('axis','aksis','2. boyun omuru (aksis)','Axis (vertebra cervicalis II)',1,'Diş biçimli çıkıntısı etrafında atlas döner; başı "hayır" der gibi sağa-sola çevirmeyi sağlar.','Aks = mil: baş bu milin etrafında döner.');
t('#cervical vertebra','boyun-omuru','Boyun omuru','Vertebra cervicalis',1,'Boyundaki 7 omurdan biridir; başı taşır ve boyna hareket kabiliyeti verir. Yan çıkıntılarındaki deliklerden vertebral arter geçer.','Omur sayıları 7-12-5: kahvaltı 7\'de, öğle 12\'de, akşam 5\'te.');
t('#thoracic vertebra','gogus-omuru','Göğüs (sırt) omuru','Vertebra thoracica',1,'Göğüs bölümündeki 12 omurdan biridir; kaburgalarla eklem yapar.','12 göğüs omuru = 12 çift kaburga.');
t('#lumbar vertebra','bel-omuru','Bel omuru','Vertebra lumbalis',1,'Beldeki 5 omurdan biridir. En büyük omurlardır, çünkü gövdenin ağırlığını taşırlar.','Omur sayıları 7-12-5.');
t('sacrum','sagri','Sağrı kemiği','Os sacrum',1,'Beş omurun kaynaşmasıyla oluşur; omurgayı kalça kemiklerine bağlar.','5 omur kaynaşıp tek kemik olur.');
t('#intervertebral disk','disk','Omurlar arası disk','Discus intervertebralis',1,'İki omur arasındaki kıkırdak yastıktır; darbeleri emer ve omurganın bükülmesini sağlar.','Omurların arasındaki "amortisör".');

// ---------------- İSKELET: göğüs kafesi ----------------
t('#rib','kaburga','Kaburga','Costa',1,'Göğüs kafesini oluşturur; kalp ve akciğerleri korur, solunumda göğsün genişlemesine katılır.','12 çift: 7 gerçek + 3 yalancı + 2 serbest.');
t('#costal cartilage','kaburga-kikirdagi','Kaburga kıkırdağı','Cartilago costalis',2,'Kaburgayı göğüs kemiğine bağlayan kıkırdaktır; esnekliği sayesinde nefes alırken göğüs genişleyebilir.','');
t('manubrium','manubrium','Göğüs kemiği sapı','Manubrium sterni',2,'Göğüs kemiğinin en üst parçasıdır; köprücük kemikleri ve 1. kaburgalar buraya bağlanır.','Göğüs kemiği bir kılıca benzer: sap, gövde, uç.');
t('body of sternum','sternum-govdesi','Göğüs kemiği gövdesi','Corpus sterni',1,'Göğüs kemiğinin orta ve en uzun parçasıdır; kaburga kıkırdakları buna bağlanır.','');
t('xiphoid process','kilic','Hançersi çıkıntı (ksifoid çıkıntı)','Processus xiphoideus',2,'Göğüs kemiğinin en alttaki küçük ucudur; bazı karın kasları ve diyafram buraya tutunur.','Kılıcın sivri ucu.');

// ---------------- İSKELET: omuz ve kol ----------------
t('clavicle','kopucuk','Köprücük kemiği','Clavicula',1,'Kolu gövdeye bağlayan, S biçimli kemiktir; omzu yana doğru tutar.','Köprü gibi göğüs kemiğiyle omuz arasında uzanır.');
t('scapula','kurek','Kürek kemiği','Scapula',1,'Sırtın üst kısmındaki üçgen biçimli yassı kemiktir; omuz ekleminin yuvasını oluşturur ve birçok omuz kasına tutunma yeri sağlar.','Kürek gibi yassı ve geniş.');
t('humerus','pazu','Kol kemiği (pazı kemiği)','Humerus',1,'Üst kolun tek kemiğidir; omuzda kürek kemiğiyle, dirsekte önkol kemikleriyle eklem yapar.','');
t('radius','doner','Döner kemik','Radius',1,'Önkolun başparmak tarafındaki kemiğidir. Ulna etrafında dönerek avucu yukarı ve aşağı çevirmeyi sağlar.','Radius başparmak tarafında.');
t('ulna','dirsek','Dirsek kemiği','Ulna',1,'Önkolun serçe parmak tarafındaki kemiğidir; dirseğin sivri ucunu oluşturur.','Dirseğini masaya dayadığında yaslandığın kemik ulnadır.');
t('scaphoid','el-kayiksi','Sandal kemik (kayıksı kemik)','Os scaphoideum',3,'El bileğinin başparmak tarafındaki kemiğidir; düşerken en sık kırılan el bileği kemiğidir.','El bileği kemikleri (üst sıra, başparmaktan): sandal, ay, piramit, nohut. Alt sıra: büyük çokgen, küçük çokgen, başlı, çengelli.');
t('lunate','ay','Ay kemiği','Os lunatum',3,'El bileğinin ortasındaki hilal biçimli kemiktir.','Hilal (ay) biçimli.');
t('triquetral','uckoseli','Piramit kemik (üç köşeli kemik)','Os triquetrum',3,'El bileğinin serçe parmak tarafında, üst sıradaki kemiktir.','');
t('pisiform','bezelye','Nohut kemik (bezelye kemiği)','Os pisiforme',3,'Üç köşeli kemiğin önünde oturan küçük, bezelye biçimli kemiktir.','Pisum = bezelye.');
t('trapezium','buyuk-cokgen','Büyük çokgen kemik','Os trapezium',3,'Başparmakla eklem yapan el bileği kemiğidir; başparmağın geniş hareketini sağlar.','');
t('trapezoid','kucuk-cokgen','Küçük çokgen kemik','Os trapezoideum',3,'İşaret parmağının tarak kemiğiyle eklem yapan küçük el bileği kemiğidir.','');
t('capitate','basli','Başlı kemik','Os capitatum',3,'El bileği kemiklerinin en büyüğüdür; orta parmağın tarak kemiğiyle eklem yapar.','');
t('hamate','cengelli','Çengelli kemik','Os hamatum',3,'Avuç içine doğru uzanan çengel biçimli bir çıkıntısı olan el bileği kemiğidir.','Hamulus = küçük çengel.');
t('#metacarpal bone','el-tarak','El tarak kemiği','Os metacarpi',2,'Avuç içini oluşturan 5 uzun kemikten biridir; el bileği ile parmaklar arasındadır.','El sırtında parmaklara giden 5 çubuk.');
t('#phalanx-hand','el-falanks','El parmak kemiği (falanks)','Phalanx',2,'Parmakların kemikleridir. Başparmakta 2, diğer parmaklarda 3 falanks vardır.','Başparmak 2, diğerleri 3: elde toplam 14 falanks.');

// ---------------- İSKELET: kalça ve bacak ----------------
t('hip bone','kalca','Kalça kemiği','Os coxae',1,'Üç kemiğin (ilium, iskium, pubis) kaynaşmasıyla oluşur. Uyluk kemiğinin başı bunun yuvasına oturur; leğen kemiğini oluşturur.','3 kemik kaynaşır: ilium, iskium, pubis.');
t('femur','uyluk','Uyluk kemiği','Femur',1,'Vücudun en uzun ve en güçlü kemiğidir; kalça ile diz arasındadır.','Vücudun en uzun kemiği.');
t('patella','diz-kapagi','Diz kapağı kemiği','Patella',1,'Uyluğun ön kasının kirişi içinde gelişen kemiktir; dizi korur ve kasın kaldıraç gücünü artırır.','');
t('tibia','kaval','Kaval kemiği','Tibia',1,'Bacağın iç tarafındaki kalın kemiktir; vücut ağırlığını taşır. Ön kenarı deri altından hissedilir.','Kalın olan kaval (tibia) içte, ince olan kamış (fibula) dışta.');
t('fibula','kamis','Kamış kemiği','Fibula',1,'Bacağın dış tarafındaki ince kemiktir; ağırlık taşımaz, kaslara tutunma yeri sağlar ve ayak bileğinin dış kısmını oluşturur.','');
t('talus','asik','Aşık kemiği','Talus',2,'Bacak kemikleriyle ayak arasında, ayak bileği ekleminin kemiğidir; ağırlığı ayağa iletir.','');
t('calcaneus','topuk','Topuk kemiği','Calcaneus',1,'Ayağın en büyük kemiğidir; topuğu oluşturur. Aşil kirişi buna yapışır.','');
t('navicular bone of foot','ayak-kayik','Sandal kemik (ayak)','Os naviculare',3,'Ayağın iç kemerinde, aşık kemiği ile çivi kemikleri arasındadır.','');
t('cuboid bone','kup','Kübik kemik (küp kemiği)','Os cuboideum',3,'Ayağın dış kenarında, topuk kemiğinin önündeki küp biçimli kemiktir.','');
t('medial cuneiform bone','ic-civi','İç kamamsı kemik (iç çivi kemiği)','Os cuneiforme mediale',3,'Ayak başparmağının tarak kemiğiyle eklem yapan çivi kemiğidir.','Üç kamamsı kemik: iç, ara, dış. Latincedeki "cuneus" kama demektir.');
t('intermediate cuneiform bone','orta-civi','Ara kamamsı kemik (orta çivi kemiği)','Os cuneiforme intermedium',3,'Üç çivi kemiğinin en küçüğüdür; 2. ayak tarak kemiğiyle eklem yapar.','');
t('lateral cuneiform bone','dis-civi','Dış kamamsı kemik (dış çivi kemiği)','Os cuneiforme laterale',3,'3. ayak tarak kemiğiyle eklem yapan çivi kemiğidir.','');
t('#metatarsal bone','ayak-tarak','Ayak tarak kemiği','Os metatarsi',2,'Ayağın orta kısmını oluşturan 5 uzun kemikten biridir.','');
t('#phalanx-foot','ayak-falanks','Ayak parmak kemiği (falanks)','Phalanx',2,'Ayak parmaklarının kemikleridir. Başparmakta 2, diğer parmaklarda 3 falanks vardır.','');
t('sesamoid bone of foot','susam','Susamsı kemik (ayak)','Os sesamoideum',3,'Kiriş içinde gelişen küçük kemiktir; kirişi sürtünmeden korur.','Susam tanesi kadar küçük. Diz kapağı da en büyük susam kemiğidir.');

// ---------------- AĞIZ: dişler ----------------
t('#incisor','kesici','Kesici diş','Dens incisivus',1,'Besinleri ısırıp kesmeye yarar. Her yarım çenede 2 tane vardır (orta ve yan).','Kalıcı diş formülü (yarım çene): 2 kesici, 1 köpek, 2 küçük azı, 3 büyük azı = 8; toplam 32.');
t('#canine','kopek-disi','Köpek dişi','Dens caninus',1,'Sivri uçlu dişlerdir; besinleri yırtmaya yarar. Kökü dişlerin en uzunudur.','');
t('#premolar','kucuk-azi','Küçük azı dişi','Dens premolaris',1,'Besinleri ezip parçalamaya yarar. Süt dişlerinde bulunmaz.','');
t('#molar','buyuk-azi','Büyük azı dişi','Dens molaris',1,'Geniş yüzeyleriyle besinleri öğütür. 3. büyük azı "yirmi yaş dişi"dir.','');
t('gingiva of upper jaw|gingiva of lower jaw','dis-eti','Diş eti','Gingiva',1,'Dişlerin boynunu saran ve çene kemiğini örten mukozadır.','');

// ---------------- SİNDİRİM ----------------
t('tongue','dil','Dil','Lingua',1,'Kaslı bir organdır; çiğnemeye, yutmaya, konuşmaya ve tat almaya yardım eder.','');
t('sublingual gland','dilalti','Dil altı bezi','Glandula sublingualis',2,'Ağız tabanındaki tükürük bezidir; tükürük salgılar.','Üç çift büyük tükürük bezi: kulak altı, çene altı, dil altı.');
t('submandibular gland','cenealti','Çene altı bezi','Glandula submandibularis',2,'Alt çenenin altındaki tükürük bezidir; tükürüğün büyük kısmını salgılar.','');
t('esophagus','yemek-borusu','Yemek borusu','Oesophagus',1,'Yutaktan mideye uzanan kaslı borudur. Dalga biçimindeki kasılmalarla (peristaltizm) lokmayı mideye iletir.','Soluk borusunun arkasında durur.');
t('stomach','mide','Mide','Gaster',1,'Besinleri depolar; asit ve enzimlerle karıştırarak sindirir, sonra azar azar onikiparmak bağırsağına geçirir.','J harfine benzer; karnın sol üst kısmında.');
t('duodenum','onikiparmak','Onikiparmak bağırsağı','Duodenum',1,'İnce bağırsağın ilk bölümüdür. Safra ve pankreas salgısı buraya dökülür.','Adı uzunluğundan gelir: yaklaşık on iki parmak eni.');
t('proximal part of jejunum|middle part of jejunum|distal part of jejunum','jejunum','Boş bağırsak (jejunum)','Jejunum',2,'İnce bağırsağın orta bölümüdür; besinlerin büyük kısmı burada emilir.','Ölümden sonra boş bulunduğu için "boş bağırsak" denir.');
t('proximal part of ileum|middle part of ileum|distal part of ileum','ileum','Kıvrımlı bağırsak (ileum)','Ileum',2,'İnce bağırsağın son bölümüdür; B12 vitamini ve safra tuzları burada emilir.','');
t('ileocecal junction','ileocekal','İnce ve kalın bağırsak birleşimi','Junctio ileocaecalis',3,'İnce bağırsağın kalın bağırsağa açıldığı yerdir; buradaki kapak geri kaçışı önler.','');
t('appendix','apandis','Apandis (körbağırsak eki)','Appendix vermiformis',1,'Kör bağırsağa bağlı, solucan biçimli kısa bir uzantıdır; bağışıklıkta görevli lenf dokusu içerir.','Vermiformis = solucan biçimli.');
t('mesoappendix','apandis-askisi','Apandis askısı','Mesoappendix',3,'Apandisi asan ve damarlarını taşıyan zar katlantısıdır.','');
t('ascending colon','cikan-kolon','Yükselen kolon (çıkan kolon)','Colon ascendens',1,'Kalın bağırsağın karnın sağ tarafında yukarı çıkan bölümüdür; su emer.','Kalın bağırsak bir çerçeve çizer: çıkan, enine, inen kolon, sonra düz bağırsak.');
t('transverse colon','enine-kolon','Enine kolon','Colon transversum',1,'Kalın bağırsağın karnı sağdan sola enine geçen bölümüdür.','');
t('descending colon','inen-kolon','İnen kolon','Colon descendens',1,'Kalın bağırsağın karnın sol tarafında aşağı inen bölümüdür.','');
t('rectum','rektum','Düz bağırsak (rektum)','Rectum',1,'Kalın bağırsağın son bölümüdür; dışkıyı dışarı atılana kadar biriktirir.','');
t('taenia libera|taenia mesocolica|taenia omentalis','tenya','Kolon şeridi','Taeniae coli',3,'Kalın bağırsak duvarındaki üç boyuna kas şerididir; kolona keseli görünümünü verir.','Üç şerit: serbest, askı ve omentum şeridi.');
t('mesentery of small intestine','mezenter','İnce bağırsak askısı (mezenter)','Mesenterium',3,'İnce bağırsağı karın arka duvarına asan, damar ve sinirlerini taşıyan zar katlantısıdır.','');
t('transverse mesocolon','enine-mezokolon','Enine kolon askısı','Mesocolon transversum',3,'Enine kolonu karın arka duvarına bağlayan zar katlantısıdır.','');
t('caudate lobe of liver','kuyruklu-lob','Karaciğerin kuyruk lobu','Lobus caudatus hepatis',3,'Karaciğerin arka yüzündeki küçük lobudur. (Bu modelde karaciğerin yalnız bu lobu ve iç kanalları vardır.)','');
t('hepatic duct','karaciger-kanali','Karaciğer kanalı','Ductus hepaticus dexter / sinister',2,'Karaciğerde üretilen safrayı karaciğerden dışarı taşıyan kanaldır. Sağ ve sol kanal birleşerek ortak kanalı oluşturur.','');
t('common hepatic duct','ortak-karaciger-kanali','Ortak karaciğer kanalı','Ductus hepaticus communis',2,'Sağ ve sol karaciğer kanallarının birleşmesiyle oluşur; safra kesesi kanalıyla birleşip safrayı bağırsağa taşıyan kanalı oluşturur.','');
t('#biliary tree','safra-agaci','Karaciğer içi safra yolu','Ductus biliferi intrahepatici',3,'Karaciğer hücrelerinin ürettiği safrayı toplayıp karaciğer kanallarına ileten ince kanal ağıdır.','');
t('cystic duct','kese-kanali','Safra kesesi kanalı','Ductus cysticus',2,'Safra kesesini safra yollarına bağlar; safra bu kanaldan keseye girip çıkar.','');
t('gallbladder','safra-kesesi','Safra kesesi','Vesica biliaris',1,'Karaciğerin ürettiği safrayı depolar ve yoğunlaştırır; yağlı yemekten sonra safrayı bağırsağa boşaltır.','Safra yağları sindirmez, küçük damlacıklara ayırır.');
t('pancreas|parenchyma of pancreas','pankreas','Pankreas','Pancreas',1,'Hem sindirim enzimleri (bağırsağa) hem de insülin ve glukagon hormonları (kana) salgılayan bezdir.','Hem dış salgı hem iç salgı yapan "karma bez".');
t('pancreatic duct|pancreatic duct tree','pankreas-kanali','Pankreas kanalı','Ductus pancreaticus',2,'Pankreas enzimlerini onikiparmak bağırsağına taşıyan kanaldır.','');

// ---------------- SOLUNUM ----------------
t('trachea','soluk-borusu','Soluk borusu','Trachea',1,'Gırtlaktan bronşlara uzanan hava yoludur. C biçimli kıkırdak halkalar onu açık tutar.','C halkalarının açık yüzü arkadaki yemek borusuna bakar.');
t('main bronchus|main bronchus proper','ana-bronş','Ana bronş','Bronchus principalis',1,'Soluk borusunun ikiye ayrılmasıyla oluşan, havayı sağ ve sol akciğere taşıyan borudur.','Sağ ana bronş daha kısa, geniş ve dik; yutulan cisimler çoğunlukla sağa kaçar.');
t('#segmental bronchial tree','segment-bronsu','Segment bronşu ve dalları','Bronchus segmentalis',3,'Akciğerin bir bölümüne (segmentine) hava taşıyan bronş dalıdır. Her segmentin kendi bronşu ve damarı vardır.','Sağ akciğer 3 lob, sol akciğer 2 lob.');
t('#lingular bronchial tree','lingula-bronsu','Dilcik bronşu','Bronchus lingularis',3,'Sol akciğerin dilcik (lingula) bölümüne hava taşıyan bronş dalıdır.','');
t('epiglottis','girtlak-kapagi','Gırtlak kapağı (epiglot)','Epiglottis',1,'Yutkunurken gırtlağın girişini kapatarak besinlerin soluk borusuna kaçmasını önler.','Yutarken kapanan "kapı".');
t('thyroid cartilage','kalkan-kikirdak','Kalkan kıkırdak','Cartilago thyroidea',2,'Gırtlağın en büyük kıkırdağıdır; boyundaki "Âdem elması" çıkıntısını oluşturur ve ses tellerini korur.','');
t('cricoid cartilage','yuzuk-kikirdak','Yüzük kıkırdak','Cartilago cricoidea',2,'Gırtlağın tabanındaki, tam halka biçimindeki tek kıkırdaktır.','Önü dar, arkası geniş: mühürlü yüzüğe benzer.');
t('arytenoid cartilage','ibrik','İbrik kıkırdak','Cartilago arytenoidea',3,'Yüzük kıkırdağın üstündeki küçük kıkırdaktır; ses tellerinin gerilip açılıp kapanmasını sağlar.','');
t('corniculate cartilage','boynuzsu','Boynuzsu kıkırdak','Cartilago corniculata',3,'İbrik kıkırdağın tepesindeki küçük, boynuz biçimli kıkırdaktır.','');
t('cuneiform cartilage','civi-kikirdak','Kama biçimli kıkırdak','Cartilago cuneiformis',3,'Gırtlak girişini çevreleyen kıvrımın içindeki küçük kıkırdaktır.','');
t('major alar cartilage','kanat-kikirdak','Büyük burun kanadı kıkırdağı','Cartilago alaris major',3,'Burun deliklerinin çevresini ve burun ucunu biçimlendiren kıkırdaktır.','');
t('lateral nasal cartilage','yan-burun-kikirdak','Yan burun kıkırdağı','Processus lateralis cartilaginis septi nasi',3,'Burun kemiğinin altında burnun yan duvarını oluşturan kıkırdaktır.','');
t('septal nasal cartilage','bolme-kikirdak','Burun bölmesi kıkırdağı','Cartilago septi nasi',2,'Burun boşluğunu sağ ve sol olarak ikiye ayıran bölmenin ön kısmını oluşturur.','');
t('superior pharyngeal constrictor','ust-yutak-daraltici','Üst yutak daraltıcı kası','Musculus constrictor pharyngis superior',3,'Yutkunurken yutağı daraltarak lokmayı aşağı iter.','Üç daraltıcı kas: üst, orta, alt; huni gibi iç içe geçer.');
t('middle pharyngeal constrictor','orta-yutak-daraltici','Orta yutak daraltıcı kası','Musculus constrictor pharyngis medius',3,'Yutkunurken yutağı daraltarak lokmayı aşağı iter.','');
t('inferior pharyngeal constrictor','alt-yutak-daraltici','Alt yutak daraltıcı kası','Musculus constrictor pharyngis inferior',3,'Yutkunurken yutağı daraltarak lokmayı yemek borusuna iter.','');
t('palatopharyngeus','damak-yutak','Damak-yutak kası','Musculus palatopharyngeus',3,'Yutkunurken yutağı ve gırtlağı yukarı kaldırır.','');
t('salpingopharyngeus','tuba-yutak','Östaki borusu-yutak kası','Musculus salpingopharyngeus',3,'Yutkunurken yutağı kaldırır; östaki borusunun açılmasına yardım eder.','');
t('stylopharyngeus','stilo-yutak','Biz çıkıntısı-yutak kası','Musculus stylopharyngeus',3,'Yutkunurken ve konuşurken yutağı yukarı kaldırıp genişletir.','');

// ---------------- KASLAR (sık öğretilenler) ----------------
t('fibularis longus','uzun-kamis-kasi','Uzun kamış kası','Musculus fibularis longus',3,'Ayağı dışa çevirir ve ayak tabanını aşağı büker; ayak kemerini destekler.','');
t('fibularis brevis','kisa-kamis-kasi','Kısa kamış kası','Musculus fibularis brevis',3,'Ayağı dışa çevirir.','');
t('fibularis tertius','ucuncu-kamis-kasi','Üçüncü kamış kası','Musculus fibularis tertius',3,'Ayağı yukarı kaldırır ve dışa çevirir.','');
t('tibialis anterior','on-kaval-kasi','Ön kaval kası','Musculus tibialis anterior',2,'Ayağı yukarı kaldırır (ayak ucunu kendine çeker); yürürken parmakların yere takılmasını önler.','');
t('tibialis posterior','arka-kaval-kasi','Arka kaval kası','Musculus tibialis posterior',3,'Ayağı içe çevirir ve ayak kemerini destekler.','');
t('levator scapulae','kurek-kaldirici','Kürek kemiğini kaldıran kas','Musculus levator scapulae',3,'Kürek kemiğini yukarı kaldırır; omuz silkmeye yardım eder.','');
t('subscapularis','kurek-alti','Kürek altı kası','Musculus subscapularis',3,'Kolu içe döndürür; omuz eklemini sağlamlaştıran dört kastan biridir.','');
t('iliotibial tract','iliotibial','İliotibial bant','Tractus iliotibialis',3,'Uyluğun dış yüzünde kalçadan dize uzanan kalın bağ dokusu şerididir; dizi dışarıdan destekler.','');
t('diaphragm','diyafram','Diyafram','Diaphragma',1,'Göğüs ile karın boşluğunu ayıran kubbe biçimli kastır; solunumun en önemli kasıdır. Kasılınca kenar tutunmaları yerinde kalır, kubbeleri aşağı iner ve hava akciğerlere dolar.','Kasılınca düzleşir, göğüs büyür, nefes alınır.');
t('acromial part of deltoid|clavicular part of deltoid|spinal part of deltoid','deltoid','Deltoid kas','Musculus deltoideus',1,'Omzun yuvarlak görünümünü veren kastır; kolu yana kaldırır.','Ters üçgene (Yunan harfi delta) benzer.');
t('abdominal part of pectoralis major|clavicular part of pectoralis major|sternocostal part of pectoralis major','buyuk-gogus','Büyük göğüs kası','Musculus pectoralis major',1,'Kolu öne ve içe doğru çeker; kucaklama hareketini sağlar.','');
t('pectoralis minor','kucuk-gogus','Küçük göğüs kası','Musculus pectoralis minor',2,'Büyük göğüs kasının altındadır; kürek kemiğini öne ve aşağı çeker.','');
t('ascending part of trapezius|descending part of trapezius|transverse part of trapezius','trapez','Trapez kası','Musculus trapezius',1,'Ense ve sırtın üst kısmındaki geniş kastır; omuzları kaldırır ve kürek kemiklerini hareket ettirir.','');
t('long head of biceps brachii|short head of biceps brachii','pazu-kasi','Kolun iki başlı kası (pazı)','Musculus biceps brachii',1,'Dirseği büker ve avucu yukarı çevirir.','Bi = iki: iki başı vardır.');
t('lateral head of triceps brachii|long head of triceps brachii|medial head of triceps brachii','arka-kol-kasi','Kolun üç başlı kası','Musculus triceps brachii',1,'Kolun arkasındadır; dirseği açar (kolu düzleştirir). Pazu kasının karşıtıdır.','Tri = üç: üç başı vardır.');
t('brachialis','kol-kasi','Kol kası','Musculus brachialis',2,'Pazu kasının altında yer alır; dirseği büken asıl kastır.','');
t('brachioradialis','kol-doner-kasi','Kol-döner kemik kası','Musculus brachioradialis',3,'Önkolun dış tarafındadır; dirseği bükmeye yardım eder.','');
t('sternocleidomastoid','gkm','Göğüs-köprücük-meme kası','Musculus sternocleidomastoideus',2,'Boynun yanında çapraz uzanır; tek taraflı kasılınca başı karşı tarafa döndürür, iki yanı birlikte kasılınca başı öne büker.','Adı bağlandığı üç yeri söyler: göğüs kemiği, köprücük kemiği, meme çıkıntısı.');
t('gluteus maximus','buyuk-kalca','Büyük kalça kası','Musculus gluteus maximus',1,'Vücudun en büyük kasıdır; uyluğu arkaya açar, merdiven çıkarken ve ayağa kalkarken çalışır.','');
t('gluteus medius','orta-kalca','Orta kalça kası','Musculus gluteus medius',2,'Uyluğu yana açar; yürürken leğenin dengede kalmasını sağlar.','');
t('gluteus minimus','kucuk-kalca','Küçük kalça kası','Musculus gluteus minimus',3,'Uyluğu yana açar ve içe döndürür.','');
t('rectus femoris','uyluk-duz','Uyluğun düz kası','Musculus rectus femoris',2,'Dört başlı uyluk kasının bir parçasıdır; dizi açar ve kalçayı büker.','Uyluk önünde dört kas: düz kas ve üç geniş kas = dört başlı kas.');
t('vastus lateralis','dis-genis','Dış geniş kas','Musculus vastus lateralis',2,'Dört başlı uyluk kasının dış parçasıdır; dizi açar.','');
t('vastus medialis','ic-genis','İç geniş kas','Musculus vastus medialis',2,'Dört başlı uyluk kasının iç parçasıdır; dizi açar.','');
t('vastus intermedius','ara-genis','Ara geniş kas','Musculus vastus intermedius',3,'Dört başlı uyluk kasının derindeki parçasıdır; dizi açar.','');
t('sartorius','terzi','Terzi kası','Musculus sartorius',2,'Vücudun en uzun kasıdır; bağdaş kurma hareketini sağlar.','Eski terziler bağdaş kurarak dikiş dikermiş.');
t('gracilis','ince-kas','İnce kas','Musculus gracilis',3,'Uyluğun iç yüzündedir; uyluğu içe çeker ve dizi büker.','');
t('long head of biceps femoris|short head of biceps femoris','uyluk-iki-basli','Uyluğun iki başlı kası','Musculus biceps femoris',2,'Uyluğun arkasındadır; dizi büker ve kalçayı açar.','Uyluk arkası kasları: iki başlı, yarı kirişli, yarı zarlı.');
t('semitendinosus','yari-kirisli','Yarı kirişli kas','Musculus semitendinosus',3,'Uyluğun arkasındadır; dizi büker.','');
t('semimembranosus','yari-zarli','Yarı zarlı kas','Musculus semimembranosus',3,'Uyluğun arkasındadır; dizi büker.','');
t('lateral head of gastrocnemius|medial head of gastrocnemius','baldir','İkiz baldır kası','Musculus gastrocnemius',1,'Baldırın şişkin görünümünü verir; parmak ucunda yükselmeyi sağlar. Aşil kirişiyle topuğa yapışır.','');
t('soleus','soleus','Soleus kası (derin baldır kası)','Musculus soleus',2,'İkiz baldır kasının altındadır; ayakta dururken dengeyi korur.','');
t('adductor longus','uzun-yaklastirici','Uzun yaklaştırıcı kas','Musculus adductor longus',3,'Uyluğu içe (orta çizgiye) çeker.','');
t('adductor brevis','kisa-yaklastirici','Kısa yaklaştırıcı kas','Musculus adductor brevis',3,'Uyluğu içe çeker.','');
t('adductor magnus','buyuk-yaklastirici','Büyük yaklaştırıcı kas','Musculus adductor magnus',3,'Uyluğu içe çeken en büyük kastır.','');
t('serratus anterior','on-disli','Ön dişli kas','Musculus serratus anterior',2,'Kaburgalardan kürek kemiğine uzanır; kürek kemiğini öne çeker, yumruk atarken çalışır.','Testere dişi gibi kaburgalara tutunur.');
t('external oblique','dis-egik','Dış eğik karın kası','Musculus obliquus externus abdominis',2,'Karnın yan duvarındadır; gövdeyi büker ve döndürür, karın organlarını korur.','Lifleri ceplere giren eller gibi aşağı-içe uzanır.');
t('external intercostal muscle','dis-kaburgalar-arasi','Dış kaburgalar arası kas','Musculi intercostales externi',2,'Kaburgaları yukarı kaldırarak nefes almaya yardım eder.','Dış kaslar nefes alır, iç kaslar nefes verir.');
t('internal intercostal muscle','ic-kaburgalar-arasi','İç kaburgalar arası kas','Musculi intercostales interni',2,'Kaburgaları aşağı çekerek zorlu nefes vermeye yardım eder.','');
t('innermost intercostal muscle','en-ic-kaburgalar-arasi','En iç kaburgalar arası kas','Musculi intercostales intimi',3,'İç kaburgalar arası kasa yardım eder.','');
t('infraspinatus muscle','diken-alti','Diken altı kası','Musculus infraspinatus',3,'Kolu dışa döndürür; omuz eklemini sağlamlaştırır.','');
t('supraspinatus','diken-ustu','Diken üstü kası','Musculus supraspinatus',3,'Kolu yana kaldırmaya başlar; omuz eklemini sağlamlaştırır.','');
t('teres major','buyuk-yuvarlak','Büyük yuvarlak kas','Musculus teres major',3,'Kolu içe döndürür ve gövdeye yaklaştırır.','');
t('teres minor','kucuk-yuvarlak','Küçük yuvarlak kas','Musculus teres minor',3,'Kolu dışa döndürür.','');
t('rhomboid major','buyuk-eskenar','Büyük eşkenar dörtgen kas','Musculus rhomboideus major',3,'Kürek kemiğini omurgaya doğru çeker.','');
t('rhomboid minor','kucuk-eskenar','Küçük eşkenar dörtgen kas','Musculus rhomboideus minor',3,'Kürek kemiğini omurgaya doğru çeker.','');
t('platysma','platisma','Platisma (boyun deri kası)','Platysma',3,'Boyun derisinin altındaki ince kastır; boyun derisini gerer.','');
t('psoas major','buyuk-bel','Büyük bel kası','Musculus psoas major',2,'Bel omurlarından uyluğa uzanır; kalçayı büker (bacağı öne kaldırır).','');
t('iliacus','iliak','İliak kas','Musculus iliacus',3,'Kalça kemiğinin iç yüzünü doldurur; kalçayı büker.','');
t('piriformis','armut','Armut biçimli kas','Musculus piriformis',3,'Uyluğu dışa döndürür.','');
t('superior rectus','ust-duz-goz','Üst düz göz kası','Musculus rectus superior',3,'Göz küresini yukarı çevirir.','Gözü 6 kas hareket ettirir: 4 düz, 2 eğik.');
t('inferior rectus','alt-duz-goz','Alt düz göz kası','Musculus rectus inferior',3,'Göz küresini aşağı çevirir.','');
t('medial rectus','ic-duz-goz','İç düz göz kası','Musculus rectus medialis',3,'Göz küresini burna doğru çevirir.','');
t('lateral rectus','dis-duz-goz','Dış düz göz kası','Musculus rectus lateralis',3,'Göz küresini dışa çevirir.','');
t('superior oblique','ust-egik-goz','Üst eğik göz kası','Musculus obliquus superior',3,'Göz küresini aşağı ve dışa çevirir.','');
t('inferior oblique','alt-egik-goz','Alt eğik göz kası','Musculus obliquus inferior',3,'Göz küresini yukarı ve dışa çevirir.','');
t('flexor digitorum superficialis','yuzeysel-bukucu','Yüzeysel parmak bükücü kas','Musculus flexor digitorum superficialis',3,'Parmakların orta eklemlerini büker.','');
t('flexor digitorum profundus','derin-bukucu','Derin parmak bükücü kas','Musculus flexor digitorum profundus',3,'Parmakların uç eklemlerini büker.','');
t('extensor digitorum','parmak-acici','Parmak açıcı kas','Musculus extensor digitorum',3,'Parmakları düzleştirir (açar).','');
t('palmaris longus','uzun-avuc','Uzun avuç içi kası','Musculus palmaris longus',3,'El bileğini büker. Bazı insanlarda hiç bulunmaz.','');
t('humeral head of pronator teres|ulnar head of pronator teres','yuvarlak-ice-dondurucu','Yuvarlak içe döndürücü kas','Musculus pronator teres',3,'Avucu aşağı çevirir.','');
t('pronator quadratus','kare-ice-dondurucu','Kare içe döndürücü kas','Musculus pronator quadratus',3,'Avucu aşağı çevirir.','');
t('supinator','disa-dondurucu','Dışa döndürücü kas','Musculus supinator',3,'Avucu yukarı çevirir.','');
t('popliteus','diz-arkasi-kasi','Diz arkası kası','Musculus popliteus',3,'Kilitli dizi açarak bükülmeye başlatır.','');
t('tensor fasciae latae','fasya-geren','Geniş fasyayı geren kas','Musculus tensor fasciae latae',3,'Uyluğu büker ve yana açar; iliotibial bandı gerer.','');

// ---------------- KALP ----------------
t('wall of left atrium','sol-kulakcik','Sol atriyum duvarı','Atrium sinistrum',1,'Akciğerlerden gelen oksijenli kanı alır ve sol ventriküle geçirir.','Kalbin sol tarafı oksijenli, sağ tarafı oksijeni azalmış kan taşır.');
t('wall of right atrium','sag-kulakcik','Sağ atriyum duvarı','Atrium dextrum',1,'Vücuttan gelen oksijeni azalmış kanı alır ve sağ ventriküle geçirir.','');
t('cavity of left atrium','sol-kulakcik-boslugu','Sol atriyum boşluğu','Atrium sinistrum',2,'Pulmoner venlerden gelen oksijenli kanın dolduğu boşluktur.','');
t('cavity of right atrium','sag-kulakcik-boslugu','Sağ atriyum boşluğu','Atrium dextrum',2,'Ana venlerden gelen kanın dolduğu boşluktur.','');
t('cavity of left ventricle','sol-karincik','Sol ventrikül boşluğu','Ventriculus sinister',1,'Kanı aort yoluyla bütün vücuda pompalar. Duvarı kalbin en kalın bölümüdür.','');
t('cavity of right ventricle','sag-karincik','Sağ ventrikül boşluğu','Ventriculus dexter',1,'Kanı pulmoner arter yoluyla akciğerlere pompalar.','');
t('wall of ventricle','karincik-duvari','Ventrikül duvarı','Myocardium',2,'Ventriküllerin kaslı duvarıdır; kasılarak kanı arterlere pompalar.','');
t('anterior leaflet of mitral valve|posterior leaflet of mitral valve','mitral','Mitral kapak yaprağı','Cuspis valvae mitralis',2,'Sol atriyum ile sol ventrikül arasındaki iki yapraklı kapağın parçasıdır; kanın geri kaçmasını önler.','Mitral kapak iki yapraklıdır, piskopos başlığına (mitra) benzer.');
t('anterior leaflet of tricuspid valve|posterior leaflet of tricuspid valve|septal leaflet of tricuspid valve','trikuspit','Triküspit kapak yaprağı','Cuspis valvae tricuspidalis',2,'Sağ atriyum ile sağ ventrikül arasındaki üç yapraklı kapağın parçasıdır.','Tri = üç yaprak, sağ tarafta.');
t('anterior cusp of aortic valve|left posterior cusp of aortic valve|right posterior cusp of aortic valve|posterior cusp of aortic valve','aort-kapagi','Aort kapağı yarımay yaprağı','Valvula semilunaris valvae aortae',2,'Sol ventrikülden aorta çıkan kanın geri dönmesini önler.','');
t('left anterior cusp of pulmonary valve|right anterior cusp of pulmonary valve|anterior cusp of pulmonary valve|posterior cusp of pulmonary valve','pulmoner-kapak','Pulmoner kapak yaprağı','Valvula semilunaris valvae trunci pulmonalis',2,'Sağ ventrikülden pulmoner artere çıkan kanın geri dönmesini önler.','');
t('#papillary muscle','papiller','Papiller kas','Musculus papillaris',3,'Ventrikül duvarından çıkan kas çıkıntısıdır; kirişçikleriyle kapak yapraklarını tutar, ters dönmelerini önler.','');

// ---------------- DAMARLAR (sık öğretilenler) ----------------
t('ascending aorta','cikan-aorta','Çıkan aorta','Aorta ascendens',2,'Sol ventrikülden çıkan ana arterin ilk bölümüdür; kalbi besleyen taç arterleri buradan çıkar.','');
t('arch of aorta','aort-yayi','Aort yayı','Arcus aortae',1,'Aortun kalpten çıktıktan sonra yaptığı kıvrımdır; baş ve kollara giden arterler buradan çıkar.','');
t('descending aorta|descending thoracic aorta','gogus-aortasi','Göğüs aortası (inen aortun göğüs bölümü)','Aorta thoracica',2,'Aortun göğüs boşluğunda aşağı inen bölümüdür.','');
t('abdominal aorta','karin-aortasi','Karın aortası','Aorta abdominalis',2,'Aortun karın boşluğundaki bölümüdür; karın organlarına dallar verir.','');
t('pulmonary trunk','pulmoner-govde','Pulmoner gövde','Truncus pulmonalis',2,'Sağ ventrikülden çıkan ve oksijeni azalmış kanı akciğerlere taşıyan ana gövdedir.','Doğumdan sonra oksijeni azalmış kan taşıyan tek arterler pulmoner arterlerdir.');
t('pulmonary artery','pulmoner-arter','Pulmoner arter','Arteria pulmonalis',1,'Oksijeni az kanı kalpten akciğere taşır.','');
t('common carotid artery','ortak-sah','Ana karotis arter','Arteria carotis communis',1,'Boyundan başa kan taşıyan ana arterdir; nabız boyunda buradan alınır.','');
t('internal carotid artery','ic-sah','İç karotis arter','Arteria carotis interna',2,'Beyne ve göze kan taşır.','');
t('subclavian artery','kopucuk-alti-arter','Subklavyen arter','Arteria subclavia',2,'Kola giden kanı taşır.','');
t('brachiocephalic artery','kol-bas-arter','Brakiyosefalik gövde','Truncus brachiocephalicus',2,'Aort yayının ilk dalıdır; sağ kola ve başın sağ yarısına kan taşır.','');
t('axillary artery','koltukalti-arter','Aksiller arter','Arteria axillaris',2,'Koltuk altında kola kan taşıyan arterdir.','');
t('brachial artery','kol-arter','Brakiyal arter','Arteria brachialis',2,'Üst kolda uzanır; tansiyon ölçülürken bu arter dinlenir.','');
t('radial artery','doner-arter','Radiyal arter','Arteria radialis',1,'Önkolun başparmak tarafında uzanır; el bileğinden nabız buradan sayılır.','');
t('ulnar artery','dirsek-arter','Ulnar arter','Arteria ulnaris',2,'Önkolun serçe parmak tarafında uzanır.','');
t('vertebral artery','omur-arter','Vertebral arter','Arteria vertebralis',3,'Boyun omurlarının deliklerinden geçerek beynin arka kısmına kan taşır.','');
t('basilar artery','baziler','Baziler arter','Arteria basilaris',3,'İki vertebral arterin pons alt kenarında birleşmesiyle oluşur; pons arterlerini, beyinciğe a. inferior anterior cerebelli ve a. superior cerebelli dallarını verir ve iki a. cerebri posterior\'a ayrılarak Willis halkasının (circulus arteriosus cerebri) arka bölümünü kurar. Tıkanması beyin sapını etkileyen ağır bir inmeye yol açar.','');
t('celiac trunk|celiac artery','colyak','Çölyak gövde','Truncus coeliacus',3,'Karın aortasının ilk büyük dalıdır; mide, karaciğer ve dalağı besler.','');
t('superior mesenteric artery|trunk of superior mesenteric artery','ust-mezenter-arter','Süperior mezenterik arter','Arteria mesenterica superior',3,'İnce bağırsağı ve kalın bağırsağın ilk yarısını besler.','');
t('inferior mesenteric artery','alt-mezenter-arter','İnferior mezenterik arter','Arteria mesenterica inferior',3,'Kalın bağırsağın son kısmını besler.','');
t('renal artery|trunk of renal artery','bobrek-arter','Renal arter','Arteria renalis',1,'Süzülecek kanı böbreğe taşır.','');
t('splenic artery','dalak-arter','Splenik arter','Arteria splenica',3,'Dalağı ve pankreasın bir kısmını besler.','');
t('common iliac artery','ortak-iliak-arter','Ana iliak arter','Arteria iliaca communis',2,'Karın aortasının ikiye ayrılmasıyla oluşur; leğen ve bacağa kan taşır.','');
t('external iliac artery','dis-iliak-arter','Eksternal iliak arter','Arteria iliaca externa',3,'Bacağa giden kanı taşır; kasıkta femoral arter adını alır.','');
t('internal iliac artery','ic-iliak-arter','İnternal iliak arter','Arteria iliaca interna',3,'Leğen organlarını ve kalça kaslarını besler.','');
t('femoral artery','uyluk-arter','Femoral arter','Arteria femoralis',1,'Bacağın ana arter gövdesidir; kasıkta nabzı hissedilir. Uyluk kaslarını asıl olarak dalı a. profunda femoris besler.','');
t('popliteal artery','diz-arkasi-arter','Popliteal arter','Arteria poplitea',2,'Diz arkasından bacağa geçen arterdir.','');
t('anterior tibial artery','on-kaval-arter','Ön tibial arter','Arteria tibialis anterior',3,'Bacağın ön kaslarını besler.','');
t('posterior tibial artery','arka-kaval-arter','Arka tibial arter','Arteria tibialis posterior',3,'Baldır kaslarını ve ayak tabanını besler.','');
t('dorsalis pedis artery','ayak-sirti-arter','Dorsalis pedis arter','Arteria dorsalis pedis',3,'Ayağın üst yüzünde nabzı hissedilen arterdir.','');
t('trunk of coronary artery','tac-arter','Koroner arter','Arteria coronaria',1,'Kalp kasının kendisini besleyen arterdir; tıkanması kalp krizine yol açar.','');
t('common hepatic artery|hepatic artery proper|trunk of hepatic artery','karaciger-arter','Hepatik arter','Arteria hepatica',3,'Karaciğere oksijenli kan taşır.','');
t('anterior cerebral artery','on-beyin-arter','Ön serebral arter','Arteria cerebri anterior',3,'Beynin iç yüzünü besler.','');
t('middle cerebral artery','orta-beyin-arter','Orta serebral arter','Arteria cerebri media',3,'Beynin yan yüzünü besler; inmelerde en sık tıkanan arterdir.','');
t('superior vena cava','ust-ana-toplardamar','Vena cava superior','Vena cava superior',1,'Baş, boyun ve kollardan gelen kanı sağ atriyuma döker.','');
t('inferior vena cava','alt-ana-toplardamar','Vena cava inferior','Vena cava inferior',1,'Vücudun alt yarısından gelen kanı sağ atriyuma döker; vücudun en büyük venidir.','');
t('internal jugular vein','ic-sah-toplardamari','İç juguler ven','Vena jugularis interna',2,'Beyinden ve boyundan gelen kanı toplar.','');
t('subclavian vein','kopucuk-alti-ven','Subklavyen ven','Vena subclavia',2,'Koldan gelen kanı toplar.','');
t('brachiocephalic vein','kol-bas-ven','Brakiyosefalik ven','Vena brachiocephalica',2,'İnternal juguler ven ile subklavyen venin birleşmesiyle oluşur.','');
t('axillary vein','koltukalti-ven','Aksiller ven','Vena axillaris',3,'Kolun kanını toplar.','');
t('cephalic vein','sefalik','Sefalik ven','Vena cephalica',3,'Kolun dış tarafında deri altında uzanan vendir.','');
t('basilic vein','bazilik','Bazilik ven','Vena basilica',3,'Kolun iç tarafında deri altında uzanan vendir.','');
t('median cubital vein','dirsek-ortasi-ven','Median kubital ven','Vena mediana cubiti',2,'Dirsek iç yüzünde deri altındadır; kan tahlili için kan çoğunlukla buradan alınır.','');
t('great saphenous vein','buyuk-safen','Büyük safen ven','Vena saphena magna',2,'Vücudun en uzun venidir; ayaktan kasığa bacağın iç yüzünde deri altında uzanır.','');
t('small saphenous vein','kucuk-safen','Küçük safen ven','Vena saphena parva',3,'Baldırın arkasında deri altında uzanır.','');
t('femoral vein','uyluk-ven','Femoral ven','Vena femoralis',2,'Bacağın kanını toplar; kasıkta femoral arterin iç yanında yer alır.','');
t('deep femoral vein','derin-femoral-ven','Derin femoral ven','Vena profunda femoris',3,'Uyluğun derin bölümünün kanını toplar ve femoral vene açılır; a. profunda femoris ile birlikte seyreder.','');
t('popliteal vein','diz-arkasi-ven','Popliteal ven','Vena poplitea',3,'Bacağın alt kısmından gelen kanı toplar.','');
t('portal vein|hepatic portal vein|trunk of portal vein|pre-hepatic portal vein','kapi-ven','Portal ven','Vena portae hepatis',2,'Bağırsaklardan emilen besinleri taşıyan kanı karaciğere götürür.','Sindirim kanı önce karaciğerden geçer: "gümrük kapısı".');
t('hepatic vein|middle hepatic vein','karaciger-ven','Hepatik ven','Vena hepatica',3,'Karaciğerden çıkan kanı vena cava inferior\'a döker.','');
t('renal vein','bobrek-ven','Renal ven','Vena renalis',2,'Böbrekte süzülmüş, oksijeni azalmış kanı vena cava inferior\'a taşır.','');
t('splenic vein','dalak-ven','Splenik ven','Vena splenica',3,'Dalaktan gelen kanı portal vene taşır.','');
t('superior pulmonary vein|inferior pulmonary vein','pulmoner-ven','Pulmoner ven','Vena pulmonalis',1,'Akciğerden gelen oksijenli kanı sol atriyuma taşır.','Temiz kan taşıyan tek ven grubu.');
t('azygos vein','azigos','Azigos ven','Vena azygos',3,'Göğüs duvarının kanını toplayıp vena cava superior\'a döker.','');
t('coronary sinus','koroner-sinus','Koroner sinüs','Sinus coronarius',3,'Kalp kasının oksijeni azalmış kanını toplayıp sağ atriyuma döker.','');
t('great cardiac vein','buyuk-kalp-ven','Büyük kardiyak ven','Vena cardiaca magna',3,'Kalbin ön yüzünün kanını toplar.','');
t('common iliac vein','ortak-iliak-ven','Ana iliak ven','Vena iliaca communis',3,'Bacak ve leğenden gelen kanı toplar.','');

// ---------------- SİNİR SİSTEMİ ----------------
t('cerebellum','beyincik','Beyincik','Cerebellum',1,'Hareketleri uyumlu hale getirir, dengeyi ve vücut duruşunu sağlar.','Bisiklet sürerken dengeni beyincik korur.');
t('pons','pons','Köprü (pons)','Pons',2,'Beyin sapının orta bölümüdür; beyin ile beyincik arasında bilgi taşır, solunumun düzenlenmesine katılır.','');
t('medulla oblongata','sogan','Omurilik soğanı','Medulla oblongata',1,'Beyin sapının en alt bölümüdür; kalp atışı, solunum, yutkunma ve öksürme gibi yaşamsal refleksleri yönetir.','Yaşamsal merkez: kalp ve solunum burada.');
t('midbrain','orta-beyin','Orta beyin','Mesencephalon',2,'Beyin sapının üst bölümüdür; görme ve işitme reflekslerinde görev alır.','');
t('hypothalamus','hipotalamus','Hipotalamus','Hypothalamus',1,'Vücut sıcaklığını, açlığı, susuzluğu ve hipofiz bezini kontrol eder.','Vücudun termostatı.');
t('thalamus','talamus','Talamus','Thalamus',2,'Koku dışındaki bütün duyuları beyin kabuğuna ileten aktarma merkezidir.','Duyuların "santral telefonu".');
t('hippocampus','hipokampus','Hipokampus','Hippocampus',2,'Yeni anıların oluşmasında ve öğrenmede görev alır.','Denizatı (hippocampus) biçimli; ders çalışırken çok çalışır.');
t('corpus callosum','nasirsi-cisim','Nasırsı cisim','Corpus callosum',2,'Sağ ve sol beyin yarım kürelerini birbirine bağlayan kalın sinir lifi demetidir.','');
t('amygdala','amigdala','Amigdala','Corpus amygdaloideum',3,'Korku gibi duyguların işlenmesinde görev alır.','Badem biçimli.');
t('white matter of cerebral hemisphere','ak-madde','Beyin yarım küresinin ak maddesi','Substantia alba telencephali',2,'Beynin bölgelerini birbirine bağlayan sinir liflerinden oluşur.','');
t('precentral gyrus','presantral','Merkez önü kıvrımı (presantral girus)','Gyrus precentralis',3,'Birincil hareket merkezidir; istemli kas hareketlerini başlatır.','Önde hareket, arkada duyu.');
t('postcentral gyrus','postsantral','Merkez arkası kıvrımı (postsantral girus)','Gyrus postcentralis',3,'Birincil duyu merkezidir; dokunma, ağrı ve sıcaklık burada algılanır.','');
t('occipital lobe','oksipital-lob','Art kafa lobu','Lobus occipitalis',2,'Görme merkezinin bulunduğu beyin lobudur.','Gözler önde ama görme merkezi arkada.');
t('insula','insula','İnsula','Insula',3,'Yan yarığın derininde kalan beyin bölgesidir; tat alma ve iç organ duyularında görev alır.','');
t('optic nerve','gorme-siniri','Görme siniri','Nervus opticus',1,'Gözden aldığı görüntü bilgisini beyne taşır (2. kafa siniri).','');
t('optic chiasm','gorme-caprazi','Görme sinirleri çaprazı','Chiasma opticum',3,'İki görme sinirinin birleşip liflerinin bir kısmının karşı tarafa geçtiği yerdir.','');
t('optic tract','gorme-yolu','Görme yolu','Tractus opticus',3,'Görme çaprazından sonra görme bilgisini talamusa taşır.','');
t('trochlear nerve','troklear','Makara siniri','Nervus trochlearis',3,'Üst eğik göz kasını çalıştıran 4. kafa siniridir.','');
t('ophthalmic nerve','oftalmik','Göz siniri','Nervus ophthalmicus',3,'Göz çevresi ve alından duyu taşıyan sinirdir.','');
t('caudate nucleus','kuyruklu-cekirdek','Kuyruklu çekirdek','Nucleus caudatus',3,'Hareketin planlanmasında görev alan derin beyin çekirdeğidir.','');
t('putamen','putamen','Putamen','Putamen',3,'Hareketlerin düzenlenmesinde görev alan derin beyin çekirdeğidir.','');
t('third ventricle|fourth ventricle|lateral ventricle','beyin-karincigi','Beyin ventrikülü','Ventriculus cerebri',2,'Beyin içindeki, beyin-omurilik sıvısıyla dolu boşluklardır.','Kalp ventrikülüyle karıştırma: bunlar sıvı dolu boşluklar.');
t('cerebral aqueduct','su-yolu','Beyin su yolu','Aqueductus mesencephali',3,'3. ve 4. beyin ventriküllerini birleştiren ince kanaldır.','');
t('interventricular foramen','karinciklar-arasi-delik','Ventriküller arası delik','Foramen interventriculare',3,'Yan ventrikülleri 3. ventriküle bağlayan deliktir.','');
t('central canal of spinal cord','omurilik-kanali','Omuriliğin merkez kanalı','Canalis centralis',3,'Omuriliğin ortasından geçen, sıvı dolu ince kanaldır.','');

// ---------------- SİNİR SİSTEMİ: tıp düzeyi ayrıntılar ----------------
t('superior temporal gyrus|anterior part of superior temporal gyrus|posterior part of superior temporal gyrus','ust-temporal','Üst şakak kıvrımı','Gyrus temporalis superior',3,'Birincil işitme alanı bu kıvrımın üst yüzündedir (enine şakak kıvrımları). Baskın yarım kürede arka bölümü Wernicke alanıdır (dili anlama).','Wernicke = dili "anlama" merkezi, üst şakak kıvrımının arkasında.');
t('superior frontal gyrus','ust-frontal','Üst alın kıvrımı','Gyrus frontalis superior',3,'Alın lobunun en üst kıvrımıdır; iç yüzündeki bölümü ek motor alanı içerir (hareketin planlanması).','Frontal lobda üç yatay kıvrım: üst, orta, alt.');
t('middle frontal gyrus','orta-frontal','Orta alın kıvrımı','Gyrus frontalis medius',3,'Arka bölümünde frontal göz alanı vardır; gözlerin istemli olarak karşı tarafa çevrilmesini sağlar.','');
t('inferior frontal gyrus','alt-frontal','Alt alın kıvrımı','Gyrus frontalis inferior',3,'Baskın yarım kürede (çoğunlukla sol) Broca konuşma alanını içerir; hasarında akıcı olmayan konuşma bozukluğu görülür.','Broca = konuşmanın "üretim" merkezi, alt alın kıvrımında.');
t('orbital gyrus','orbital-girus','Göz çukuru kıvrımları','Gyri orbitales',3,'Alın lobunun göz çukurlarının üstüne oturan alt yüzüdür; karar verme ve davranışın düzenlenmesinde görev alır.','');
t('middle temporal gyrus','orta-temporal','Orta şakak kıvrımı','Gyrus temporalis medius',3,'Dilin anlamlandırılması ve hareketin görsel algılanmasında görev alır.','');
t('inferior temporal gyrus','alt-temporal','Alt şakak kıvrımı','Gyrus temporalis inferior',3,'Görülen nesnelerin tanınmasında görev alır (ventral görme yolu).','');
t('fusiform gyrus','fusiform','İğsi kıvrım','Gyrus fusiformis',3,'Şakak ve art kafa loblarının alt yüzündedir; yüzlerin ve kelimelerin tanınmasında görev alır.','');
t('parahippocampal gyrus','parahipokampal','Hipokampus yanı kıvrımı','Gyrus parahippocampalis',3,'Hipokampusun yanındaki kıvrımdır; bellek oluşumunda ve limbik sistemde görev alır.','');
t('cingulate gyrus','singulat','Kuşak kıvrımı','Gyrus cinguli',3,'Nasırsı cismin üstünü kuşak gibi saran kıvrımdır; limbik sistemin parçasıdır, duygu ve dikkatle ilgilidir.','Cingulum = kuşak.');
t('superior parietal lobule','ust-parietal','Üst yan kafa lobçuğu','Lobulus parietalis superior',3,'Vücudun uzaydaki yerinin algılanması ve görme-hareket uyumunda görev alır.','');
t('supramarginal gyrus','supramarjinal','Kenar üstü kıvrımı','Gyrus supramarginalis',3,'Yan yarığın arka ucunu çevreler; dil ve dokunma bilgisinin birleştirilmesinde görev alır.','');
t('angular gyrus','angular','Açısal kıvrım','Gyrus angularis',3,'Baskın yarım kürede okuma ve yazmada görev alır; hasarında okuma-yazma bozuklukları görülür.','');
t('internal capsule','ic-kapsul','İç kapsül','Capsula interna',3,'Talamus ve kuyruklu çekirdek ile mercek biçimli çekirdek arasındaki dar ak madde bölgesidir. Hareket ve duyu yolları buradan geçtiği için buradaki küçük bir kanama büyük felce yol açar.','Küçük alan, büyük felç.');
t('globus pallidus','globus-pallidus','Soluk küre','Globus pallidus',3,'Bazal çekirdeklerden biridir; hareketin başlatılması ve düzenlenmesinde görev alır.','Putamen + soluk küre = mercek biçimli çekirdek.');
t('fornix of forebrain','forniks','Forniks','Fornix',3,'Hipokampustan memecik cisimlere uzanan lif demetidir; bellek devresinin (Papez devresi) parçasıdır.','');
t('commissure of fornix of forebrain','forniks-komissuru','Forniks komissürü (hipokampus komissürü)','Commissura fornicis',3,'İki hipokampusu birbirine bağlayan liflerdir.','');
t('anterior commissure','on-komissur','Ön komissür','Commissura anterior',3,'İki şakak lobunu ve koku yollarını birbirine bağlayan lif demetidir; üçüncü ventrikülün ön duvarındadır.','');
t('posterior commissure','arka-komissur','Arka komissür','Commissura posterior',3,'Su yolunun girişinin üstündedir; ışık refleksinde iki tarafı birbirine bağlar (bir göze ışık tutulunca iki göz bebeği de daralır).','');
t('stria terminalis','stria-terminalis','Uç çizgisi','Stria terminalis',3,'Amigdaladan hipotalamusa uzanan lif demetidir; duygusal ve hormonal yanıtları bağlar.','');
t('septum of telencephalon','septum','Uç beyin bölmesi','Septum telencephali',3,'İki yan ventrikülün ön boynuzları arasındaki bölmedir (saydam bölme ve septum çekirdekleri); limbik sistemle ilişkilidir.','');
t('lamina terminalis','lamina-terminalis','Uç tabaka','Lamina terminalis',3,'Üçüncü ventrikülün ön duvarını oluşturan ince tabakadır.','');
t('choroid plexus of cerebral hemisphere','koroid-pleksus','Koroid ağı','Plexus choroideus',2,'Ventriküllerin içindeki damarlı yapıdır; beyin-omurilik sıvısını üretir.','');
t('lateral geniculate body','yan-dizcik','Yan dizcik cismi','Corpus geniculatum laterale',3,'Talamusun görme aktarım çekirdeğidir; görme yolundan gelen bilgiyi art kafa lobundaki görme kabuğuna iletir.','Lateral = Light (görme), Medial = Music (işitme).');
t('medial geniculate body','ic-dizcik','İç dizcik cismi','Corpus geniculatum mediale',3,'Talamusun işitme aktarım çekirdeğidir; işitme bilgisini şakak lobundaki işitme kabuğuna iletir.','');
t('habenula','habenula','Habenula','Habenula',3,'Epitalamusun parçasıdır; limbik sistemi beyin sapına bağlar, ödül ve motivasyonla ilgilidir.','');
t('stria medullaris of thalamus','stria-medullaris','Talamusun ilik çizgisi','Stria medullaris thalami',3,'Talamusun üst-iç kenarı boyunca habenulaya giden lif demetidir.','');
t('mammillary body','memecik-cisim','Memecik cisim','Corpus mammillare',3,'Hipotalamusun arka tabanındaki iki küçük çıkıntıdır; bellek devresinin (Papez devresi) parçasıdır.','');
t('tuber cinereum','tuber-cinereum','Kül rengi tümsek','Tuber cinereum',3,'Hipotalamusun tabanıdır; hipofiz sapı (infundibulum) buradan çıkar.','');
t('peduncle of midbrain','beyin-sapi-ayagi','Beyin ayağı','Pedunculus cerebri',3,'Orta beynin ön kısmıdır; beyin kabuğundan inen hareket yolları buradan geçer.','');
t('interpeduncular fossa','ayaklar-arasi-cukur','Ayaklar arası çukur','Fossa interpeduncularis',3,'İki beyin ayağı arasındaki çukurdur; göz hareket siniri (3. kafa siniri) buradan çıkar.','');
t('superior colliculus','ust-tumsek','Üst tümsek','Colliculus superior',3,'Orta beynin arka yüzündedir; görsel uyarana göre baş ve göz hareketlerini yöneten refleks merkezidir.','Üst tümsek görme, alt tümsek işitme: "Göz üstte, kulak altta".');
t('inferior colliculus','alt-tumsek','Alt tümsek','Colliculus inferior',3,'Orta beynin arka yüzündedir; işitme yolunun aktarım ve refleks merkezidir.','');
t('brachium of superior colliculus','ust-tumsek-kolu','Üst tümsek kolu','Brachium colliculi superioris',3,'Görme yolundan üst tümseğe lif taşır.','');
t('brachium of inferior colliculus','alt-tumsek-kolu','Alt tümsek kolu','Brachium colliculi inferioris',3,'Alt tümsekten iç dizcik cismine işitme lifleri taşır.','');
t('tentorium cerebelli','beyincik-cadiri','Beyincik çadırı','Tentorium cerebelli',3,'Sert zarın (dura mater) beyin yarım küreleri ile beyincik arasına gerilen çadır biçimli bölümüdür.','');
t('superior branch of oculomotor nerve','okulomotor-ust','Göz hareket sinirinin üst dalı','Ramus superior nervi oculomotorii',3,'Üst düz göz kasını ve üst göz kapağını kaldıran kası çalıştırır.','3. kafa siniri: 6 göz kasından 4\'ünü ve göz kapağını kaldıran kası çalıştırır.');
t('inferior branch of oculomotor nerve','okulomotor-alt','Göz hareket sinirinin alt dalı','Ramus inferior nervi oculomotorii',3,'İç düz, alt düz ve alt eğik göz kaslarını çalıştırır; siliyer gangliyona parasempatik lif verir.','');
t('frontal nerve','frontal-sinir','Alın siniri','Nervus frontalis',3,'Göz sinirinin (oftalmik sinir) en büyük dalıdır; alın ve üst göz kapağı derisinin duyusunu taşır.','Oftalmik sinirin 3 dalı: alın, gözyaşı, burun-siliyer siniri.');
t('supra-orbital nerve','supraorbital','Göz çukuru üstü siniri','Nervus supraorbitalis',3,'Alın siniri dalıdır; alın ve saçlı derinin ön kısmının duyusunu taşır.','');
t('supratrochlear nerve','supratroklear','Makara üstü siniri','Nervus supratrochlearis',3,'Alın siniri dalıdır; alnın iç kısmı ve üst göz kapağının iç kısmının duyusunu taşır.','');
t('lacrimal nerve','lakrimal-sinir','Gözyaşı siniri','Nervus lacrimalis',3,'Göz sinirinin dalıdır; gözyaşı bezi bölgesi ve üst göz kapağının dış kısmının duyusunu taşır; bezi uyaran parasempatik lifleri de bezde dağıtır.','');
t('nasociliary nerve','nazosiliyer','Burun-siliyer siniri','Nervus nasociliaris',3,'Göz sinirinin dalıdır; göz küresi, burun boşluğu ve burun derisinin duyusunu taşır.','');
t('infratrochlear nerve','infratroklear','Makara altı siniri','Nervus infratrochlearis',3,'Burun-siliyer sinirinin dalıdır; iç göz köşesi derisi ve gözyaşı kesesinin duyusunu taşır.','');
t('anterior ethmoidal nerve','on-etmoidal','Ön kalbur siniri','Nervus ethmoidalis anterior',3,'Burun-siliyer sinirinin dalıdır; ön kalbur hücreleri, burun boşluğunun ön kısmı ve burun sırtı derisinin duyusunu taşır.','');
t('posterior ethmoidal nerve','arka-etmoidal','Arka kalbur siniri','Nervus ethmoidalis posterior',3,'Burun-siliyer sinirinin dalıdır; arka kalbur hücreleri ve kama kemiği boşluğunun duyusunu taşır.','');
t('long ciliary nerve','uzun-siliyer','Uzun siliyer sinir','Nervi ciliares longi',3,'Kornea ve göz küresinin duyusunu taşır; göz bebeğini genişleten sempatik lifleri de taşır.','Kornea refleksinin duyu yolu.');
t('short ciliary nerve','kisa-siliyer','Kısa siliyer sinir','Nervi ciliares breves',3,'Siliyer gangliyondan göz küresine gider; göz bebeğini daraltan ve yakına uyumu sağlayan parasempatik lifleri taşır.','');
t('ciliary ganglion','siliyer-gangliyon','Siliyer gangliyon','Ganglion ciliare',3,'Göz çukurundaki parasempatik gangliyondur; göz bebeğini daraltan ve merceğin yakına uyumunu sağlayan lifler burada aktarılır.','');
t('communicating branch of nasociliary nerve with ciliary ganglion','siliyer-bag-dali','Siliyer gangliyona bağlantı dalı','Ramus communicans cum ganglio ciliari',3,'Burun-siliyer siniri ile siliyer gangliyon arasındaki bağlantı dalıdır (gangliyonun duyu kökü). Göz küresinden gelen duyu lifleri gangliyonda aktarılmadan bu daldan geçerek burun-siliyer sinirine ulaşır.','');

// ---------------- DUYU ORGANLARI ----------------
t('cornea','kornea','Saydam tabaka (kornea)','Cornea',1,'Gözün önündeki saydam tabakadır; ışığı kırarak göze sokar.','');
t('iris','iris','İris (renkli tabaka)','Iris',1,'Gözün rengini veren tabakadır; ortasındaki göz bebeğini büyütüp küçülterek göze giren ışığı ayarlar.','Fotoğraf makinesinin diyaframı gibi.');
t('lens','mercek','Göz merceği','Lens',1,'Kalınlığını değiştirerek görüntüyü ağ tabaka üzerine odaklar.','');
t('optic part of retina','ag-tabaka','Ağ tabaka (retina)','Retina',1,'Işığa duyarlı hücreleri (çubuk ve koni) içerir; görüntüyü sinir sinyaline çevirir.','Çubuk = karanlık, koni = renk.');
t('sclera','sert-tabaka','Sert tabaka (göz akı)','Sclera',1,'Göz küresini saran beyaz, sağlam dış tabakadır.','');
t('choroid','damar-tabaka','Damar tabaka','Choroidea',2,'Ağ tabakayı besleyen damarlı orta tabakadır.','Gözün üç tabakası: sert, damar, ağ.');
t('vitreous body','camsi-cisim','Camsı cisim','Corpus vitreum',2,'Göz küresinin içini dolduran saydam, jöle kıvamında maddedir; gözün biçimini korur.','');
t('anterior chamber of eyeball','on-kamara','Gözün ön odası','Camera anterior bulbi',3,'Kornea ile iris arasındaki, sıvıyla dolu boşluktur.','');
t('lacrimal gland','gozyasi-bezi','Gözyaşı bezi','Glandula lacrimalis',2,'Gözyaşı salgılar; gözü nemli tutar ve korur.','');
t('lacrimal sac','gozyasi-kesesi','Gözyaşı kesesi','Saccus lacrimalis',3,'Gözyaşını toplayıp burna ileten kanalın başlangıcıdır.','');
t('nasolacrimal duct','gozyasi-burun','Gözyaşı-burun kanalı','Ductus nasolacrimalis',3,'Gözyaşını burun boşluğuna akıtır. Ağlarken burnun akması bu yüzdendir.','');
t('corona ciliaris','siliyer-tac','Siliyer taç','Corona ciliaris',3,'Siliyer cismin ön kısmındaki kıvrımlı halkadır; göz sıvısını (humor aquosus) üreten siliyer çıkıntıları taşır.','');
t('suspensory ligament of lens','zonul','Mercek askı bağı (zonül lifleri)','Fibrae zonulares',3,'Merceği siliyer cisme asan liflerdir; siliyer kas kasılınca gevşer, mercek kalınlaşır ve göz yakına odaklanır.','Yakına bakış: kas kasılır, lifler gevşer, mercek şişer.');
t('lacrimal canaliculus','gozyasi-kanalcigi','Gözyaşı kanalcığı','Canaliculus lacrimalis',3,'İç göz köşesindeki küçük delikten gözyaşını toplayıp gözyaşı kesesine taşır.','');
t('lacrimal lake','gozyasi-golu','Gözyaşı gölü','Lacus lacrimalis',3,'İç göz köşesinde gözyaşının toplandığı küçük alandır.','');
t('tarsal plate of upper eyelid|tarsal plate of lower eyelid','tarsal-plak','Tarsal plak (göz kapağı iskeleti)','Tarsus superior / Tarsus inferior',3,'Göz kapağına biçim veren sıkı bağ dokusu plağıdır; içinde yağ salgılayan Meibom bezleri bulunur.','');
t('external ear','kulak-kepcesi','Kulak kepçesi','Auricula',1,'Ses dalgalarını toplayıp kulak yoluna yönlendirir.','');

// ---------------- BOŞALTIM, HORMON, LENF, ÜREME, DERİ ----------------
t('kidney','bobrek','Böbrek','Ren',1,'Kanı süzerek idrar oluşturur; vücudun su ve tuz dengesini korur.','Fasulye biçimli, belin iki yanında.');
t('ureter','ureter','Üreter (idrar borusu)','Ureter',1,'İdrarı böbrekten idrar kesesine taşır.','Üreter böbrekten keseye, üretra keseden dışarıya.');
t('urinary bladder','idrar-kesesi','İdrar kesesi','Vesica urinaria',1,'İdrarı dışarı atılana kadar depolar.','');
t('urethra','uretra','Üretra (idrar yolu)','Urethra',1,'İdrarı idrar kesesinden vücut dışına taşır.','');
t('adrenal gland','bobrekustu','Böbreküstü bezi','Glandula suprarenalis',1,'Böbreğin üstünde oturur; adrenalin ve kortizol gibi hormonlar salgılar.','Heyecanlanınca kalbin hızlanması: adrenalin.');
t('pituitary gland','hipofiz','Hipofiz bezi','Hypophysis',1,'Diğer hormon bezlerini yöneten "usta bez"dir; büyüme hormonu da buradan salgılanır.','');
t('pineal body','epifiz','Epifiz bezi','Glandula pinealis',2,'Uyku-uyanıklık düzenini ayarlayan melatonin hormonunu salgılar.','Karanlıkta melatonin artar, uyku gelir.');
t('left lobe of thymus|right lobe of thymus','timus','Timüs','Thymus',2,'Göğüs kemiğinin arkasındadır; bağışıklık hücrelerinden T lenfositlerin olgunlaştığı bezdir. Çocuklukta büyüktür.','T lenfositi: T = timüs.');
t('spleen','dalak','Dalak','Splen',1,'Kanı süzer, yaşlanmış alyuvarları yok eder ve bağışıklıkta görev alır.','Karnın sol üst kısmında, midenin arkasında.');
t('testis','testis','Testis (er bezi)','Testis',2,'Sperm ve testosteron hormonu üretir.','');
t('epididymis','epididim','Epididim','Epididymis',2,'Spermlerin olgunlaşıp depolandığı kıvrımlı kanaldır.','');
t('deferent duct','sperm-kanali','Sperm kanalı','Ductus deferens',2,'Spermleri epididimden üretraya taşır.','');
t('seminal vesicle','meni-kesesi','Meni kesesi','Vesicula seminalis',3,'Spermlere enerji veren şekerden zengin sıvı salgılar.','');
t('prostate','prostat','Prostat','Prostata',2,'İdrar kesesinin altında üretrayı çevreleyen bezdir; meninin bir kısmını salgılar.','');
t('skin','deri','Deri','Cutis',1,'Vücudu dış etkenlerden korur, vücut sıcaklığını düzenler ve dokunma duyusunu sağlar.','Vücudun en büyük organı.');
t('lip','dudak','Dudak','Labium oris',1,'Ağzı çevreler; konuşma ve beslenmeye yardım eder.','');
t('hair of head','sac','Saç','Capilli',1,'Başı güneşten ve soğuktan korur.','');
t('eyebrow','kas-kil','Kaş','Supercilium',1,'Alından akan teri ve suyu gözden uzaklaştırır.','');
t('calcaneal tendon','asil','Aşil kirişi','Tendo calcaneus',1,'Baldır kaslarını topuk kemiğine bağlayan, vücudun en kalın ve en güçlü kirişidir.','Akhilleus efsanesindeki "zayıf nokta".');
t('linea alba','ak-cizgi','Ak çizgi','Linea alba',3,'Karın ön duvarının orta çizgisinde uzanan bağ dokusu şerididir.','');
t('interosseous membrane of forearm|interosseous membrane of leg','kemikler-arasi-zar','Kemikler arası zar','Membrana interossea',3,'İki uzun kemik arasında gerili sağlam zardır; kemikleri birbirine bağlar ve kaslara tutunma yeri sağlar.','');
t('vocal ligament','ses-bagi','Ses bağı','Ligamentum vocale',2,'Ses tellerinin içindeki esnek bağdır; titreşerek ses oluşturur.','');

// ---------------- Arama tabloları ----------------
export const TERIM = {};   // anahtar → {tr, la, lv, fn, ip}
const EN = {};             // ingilizce ad → anahtar
for (const [en, k, tr, la, lv, fn, ip] of S) {
  TERIM[k] = { tr, la, lv, fn, ip };
  for (const e of en.split('|')) EN[e] = k;
}

for (const d of Object.values(DAMAR_KAS)) TERIM[d.anahtar] = { tr: d.tr, la: d.la, lv: 3, fn: d.fn, ip: '', otomatik: true };
for (const d of Object.values(KADIN)) TERIM[d.anahtar] = { tr: d.tr, la: d.la, lv: 3, fn: d.fn, ip: d.ip || '' };

const SIRA = { first:1, second:2, third:3, fourth:4, fifth:5, sixth:6, seventh:7, eighth:8, ninth:9, tenth:10, eleventh:11, twelfth:12 };
const ROMA = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
const OMUR = { cervical: ['boyun-omuru', 'C'], thoracic: ['gogus-omuru', 'T'], lumbar: ['bel-omuru', 'L'] };
const PARMAK_EL = { thumb: 'başparmak', 'index finger': 'işaret parmağı', 'middle finger': 'orta parmak', 'ring finger': 'yüzük parmağı', 'little finger': 'serçe parmak' };
const PARMAK_AYAK = { 'big toe': 'ayak başparmağı', 'second toe': '2. ayak parmağı', 'third toe': '3. ayak parmağı', 'fourth toe': '4. ayak parmağı', 'little toe': 'ayak serçe parmağı' };
const FALANKS = { proximal: ['ilk (proksimal) falanks', 'Phalanx proximalis'], middle: ['orta falanks', 'Phalanx media'], distal: ['uç (distal) falanks', 'Phalanx distalis'] };
const SEGMENT = { apical: 'tepe', posterior: 'arka', anterior: 'ön', superior: 'üst', lateral: 'yan', medial: 'iç', 'lateral basal': 'yan taban', 'medial basal': 'iç taban', 'anterior basal': 'ön taban', 'posterior basal': 'arka taban' };
const YON = { anterior: 'ön', posterior: 'arka', lateral: 'yan', medial: 'iç', superior: 'üst', inferior: 'alt' };
const BOLUM = { anterior: 'ön bölümü', posterior: 'arka bölümü', acromial: 'omuz ucu bölümü', clavicular: 'köprücük bölümü', spinal: 'diken bölümü', abdominal: 'karın bölümü', sternocostal: 'göğüs kemiği-kaburga bölümü', ascending: 'çıkan bölümü', descending: 'inen bölümü', transverse: 'enine bölümü' };
const BAS = { long: 'uzun baş', short: 'kısa baş', lateral: 'dış baş', medial: 'iç baş', humeral: 'kol kemiği başı', ulnar: 'dirsek kemiği başı' };
const kucuk = s => s.charAt(0).toLocaleLowerCase('tr') + s.slice(1);
const buyuk = s => s.charAt(0).toLocaleUpperCase('tr') + s.slice(1);
const kaburgaTuru = n => (n <= 7 ? 'gerçek kaburgadır (göğüs kemiğine doğrudan bağlanır)' : n <= 10 ? 'yalancı kaburgadır (göğüs kemiğine üstteki kıkırdak üzerinden bağlanır)' : 'yalancı kaburgadır; ön ucu serbest olduğu için yüzen kaburga (costa fluctuans) da denir');

// Bir yapının İngilizce adını çözümler. Sonuç: {anahtar, tr (tam Türkçe ad), la, ek (ek bilgi)} ya da null.
export function coz(adIng) {
  let n = adIng.trim().toLowerCase();
  if (EN[n]) { // adın içinde sol/sağ geçen tam eşleşmeler (ör. "wall of left atrium")
    const k = EN[n];
    const tr = k === 'timus' ? `Timüs – ${n.startsWith('left') ? 'sol' : 'sağ'} lob` : TERIM[k].tr;
    return { anahtar: k, tr, la: TERIM[k].la, ek: '' };
  }
  // Adında "left/right" geçen ama taraf değil yapının adı olan damarlar (ör. "left colic artery" = a. colica sinistra).
  const dTam = /\b(left|right)\b/.test(n) && DAMAR_KAS[n];
  if (dTam) return { anahtar: dTam.anahtar, tr: dTam.tr, la: dTam.la, ek: '' };
  let taraf = '';
  const tm = n.match(/\b(left|right)\b/);
  if (tm) { taraf = tm[1] === 'left' ? 'Sol' : 'Sağ'; n = n.replace(/\b(left|right)\b ?/g, '').replace(/\s+/g, ' ').trim(); }
  const tf = s => (taraf ? `${taraf} ${kucuk(s)}` : buyuk(s));
  const sonuc = (k, tr, la, ek = '') => ({ anahtar: k, tr, la: la ?? TERIM[k].la, ek });
  let m;

  if ((m = n.match(/^(\w+) (cervical|thoracic|lumbar) vertebra$/)) && SIRA[m[1]]) {
    const [k, h] = OMUR[m[2]]; const s = SIRA[m[1]];
    return sonuc(k, `${s}. ${kucuk(TERIM[k].tr)} (${h}${s})`, `${TERIM[k].la} ${ROMA[s - 1]}`);
  }
  if (n === 'intervertebral disk') return sonuc('disk', 'Omurlar arası disk');
  if ((m = n.match(/^intervertebral disk of (.+)$/))) {
    const ust = coz(m[1]);
    return sonuc('disk', `Omurlar arası disk – ${ust ? kucuk(ust.tr) : m[1]} altında`);
  }
  if ((m = n.match(/^(\w+) rib$/)) && SIRA[m[1]]) { const s = SIRA[m[1]]; return sonuc('kaburga', tf(`${s}. kaburga`), null, `${s}. kaburga bir ${kaburgaTuru(s)}.`); }
  if ((m = n.match(/^(\w+) costal cartilage$/)) && SIRA[m[1]]) return sonuc('kaburga-kikirdagi', tf(`${SIRA[m[1]]}. kaburga kıkırdağı`));
  if ((m = n.match(/^(\w+) metacarpal bone$/)) && SIRA[m[1]]) return sonuc('el-tarak', tf(`${SIRA[m[1]]}. el tarak kemiği`), null, SIRA[m[1]] === 1 ? 'Başparmağın tarak kemiğidir.' : '');
  if ((m = n.match(/^(\w+) metatarsal bone$/)) && SIRA[m[1]]) return sonuc('ayak-tarak', tf(`${SIRA[m[1]]}. ayak tarak kemiği`));
  if ((m = n.match(/^(proximal|middle|distal) phalanx of (.+)$/))) {
    const [seg, la] = FALANKS[m[1]];
    if (PARMAK_EL[m[2]]) return sonuc('el-falanks', tf(`${PARMAK_EL[m[2]]} – ${seg}`), la);
    if (PARMAK_AYAK[m[2]]) return sonuc('ayak-falanks', tf(`${PARMAK_AYAK[m[2]]} – ${seg}`), la);
  }
  if ((m = n.match(/^(upper|lower) (?:(central|lateral) )?(?:(first|second|third) )?secondary (incisor|canine|premolar|molar) tooth$/))) {
    const k = { incisor: 'kesici', canine: 'kopek-disi', premolar: 'kucuk-azi', molar: 'buyuk-azi' }[m[4]];
    const cene = m[1] === 'upper' ? 'üst' : 'alt';
    const on = m[2] ? (m[2] === 'central' ? 'orta ' : 'yan ') : m[3] ? `${SIRA[m[3]]}. ` : '';
    return sonuc(k, tf(`${cene} ${on}${kucuk(TERIM[k].tr)} (kalıcı)`));
  }
  if ((m = n.match(/^(apical|posterior|anterior|superior|lateral|medial|lateral basal|medial basal|anterior basal|posterior basal) segmental bronchial tree$/))) {
    return sonuc('segment-bronsu', tf(`${SEGMENT[m[1]]} segment bronşu`));
  }
  if ((m = n.match(/^(superior|inferior) lingular bronchial tree$/))) return sonuc('lingula-bronsu', `${m[1] === 'superior' ? 'Üst' : 'Alt'} dilcik bronşu`);
  if (/biliary tree$/.test(n) || n === 'duct of caudate lobe of liver') {
    const yari = adIng.toLowerCase().includes('right') ? 'sağ' : 'sol';
    const y = n.match(/^(anterior|posterior|lateral|medial)(?: (superior|inferior))?/);
    const dal = /caudate/.test(n) ? 'kuyruklu lob dalı' : y ? `${YON[y[1]]}${y[2] ? ' ' + YON[y[2]] : ''} dal` : 'dal';
    return sonuc('safra-agaci', `Karaciğer içi safra yolu – ${yari} taraf, ${dal}`);
  }
  if (/papillary muscle/.test(n)) return sonuc('papiller', tf('Meme (papiller) kası'));
  if (/ middle cerebral artery$/.test(n)) return sonuc('orta-beyin-arter', tf('Orta serebral arter – bir dalı'));

  if (EN[n]) {
    const k = EN[n]; let tr = TERIM[k].tr; const ilk = n.split(' ')[0];
    if (/ part of /.test(n) && BOLUM[ilk]) tr = `${tr} – ${BOLUM[ilk]}`;
    else if (/ head of /.test(n) && BAS[ilk]) tr = `${tr} – ${BAS[ilk]}`;
    else if (/^(proximal|middle|distal) part of/.test(n)) tr = `${tr} – ${{ proximal: 'başlangıç', middle: 'orta', distal: 'son' }[ilk]} bölümü`;
    else if (/pulmonary vein/.test(n)) tr = ilk === 'superior' ? 'Üst pulmoner ven' : 'Alt pulmoner ven';
    else if (/ventricle$/.test(n) && k === 'beyin-karincigi') tr = { third: '3. beyin ventrikülü', fourth: '4. beyin ventrikülü', lateral: 'Yan beyin ventrikülü' }[ilk];
    return sonuc(k, tf(tr));
  }
  const d = DAMAR_KAS[n];
  if (d) return { anahtar: d.anahtar, tr: d.turkceVar ? tf(d.tr) : (taraf ? `${d.la} (${kucuk(taraf)})` : d.la), la: d.la, ek: '' };
  const kd = KADIN[n.replace(/\s*\(\)\s*/g, ' ').replace(/\s+/g, ' ').trim()];
  if (kd) return { anahtar: kd.anahtar, tr: tf(kd.tr), la: kd.la, ek: '' };
  return null;
}
