// Terimlerin kaynakla kontrol sonucu. Anahtar → { durum, kaynak, not }.
// durum: 'dogrulandi' (kaynakla karşılaştırıldı, gerekiyorsa düzeltildi) | 'ta_disi' (uluslararası terim listesinde yok; tanımlayıcı ad) | 'belirsiz' (hocaya sorulacak) | 'bulunamadi'.
export const DOGRULAMA = {
"alin": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB modülü ve Ankara Üniv. notu 'Os frontale (alın kemiği)'. Görev doğru."
},
"cepere": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/02.1.02.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Parietal_bone ; https://tvf.org.tr/storage/old/2019/11/anatomi-geniş-özet-3.pdf",
"not": "Türkçe ad kaynakta 'yan kafa kemiği (os parietale)' olarak geçiyor; 'çeper kemiği' eş adı için kaynak bulunamadı."
},
"sakak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Temporale (Şakak Kemiği)'. İç kulak ve çene eklemi bilgisi doğru."
},
"artkafa": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/02.1.04.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Occipital_bone ; https://tvf.org.tr/storage/old/2019/11/anatomi-geniş-özet-3.pdf",
"not": "Türkçe ad kaynakta 'art kafa kemiği (os occipitale)' olarak geçiyor."
},
"kama": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB modülü 'Os Sphenoidale (Temel Kemik)' diyor; 'kama kemiği' güvenilir kaynakta görülmedi. Latince ve görev (kafa tabanının ortası, hipofiz çukuru) doğru. İpucundaki kelebek benzetmesi kalabilir."
},
"kalbur": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kalbur kemiği')",
"not": "TDK ve MEB modülü ('Kalbur Kemik'). Delikli plaka ve koku lifleri bilgisi doğru."
},
"elmacik": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Zygomaticum (Elmacık Kemiği)'."
},
"burun-kemigi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Nasale (Burun Kemiği)'."
},
"ust-cene": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Maxillae (Üst Çene Kemiği)'."
},
"alt-cene": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Mandibulae (Alt Çene Kemiği)'. 'Hareket edebilen tek kafatası kemiği' bilgisi ders kitaplarındaki yaygın ifadedir (kulak kemikçikleri hariç tutularak)."
},
"damak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Palatinum (Damak Kemiği)'."
},
"saban": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'saban kemiği')",
"not": "TDK 'saban kemiği': burun boşluklarını ayıran çeperin arkasındaki ince kemik. (MEB modülü 'Sapan kemiği' yazıyor, TDK yazımı doğru.)"
},
"gozyasi-kemigi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Lacrimale (Göz Yaşı Kemiği)'."
},
"alt-konka": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB solunum modülü 'alt konka' diyor (iskelet modülünde 'Alt boynuzcuk kemiği'). Havayı ısıtma-nemlendirme görevi kaynakta var."
},
"dil-kemigi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Os Hyoideum (Dil Kemiği)', U biçimli, diğer kemiklere yalnız kas ve bağla tutunur."
},
"atlas": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: birinci boyun omuru atlas, oksipital kemikle eklem yapar."
},
"aksis": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: ikinci boyun omuru axis, dens çıkıntısı atlasla eklem yapar."
},
"boyun-omuru": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Vertebrae cervicales (boyun omurları) 7 omur'."
},
"gogus-omuru": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Vertebrae thoracicae (göğüs omurları) 12 omur'."
},
"bel-omuru": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Vertebrae lumbales (bel omurları) 5 omur'."
},
"sagri": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'sağrı kemiği')",
"not": "TDK: bel kemiği ile kuyruk sokumu arasındaki kemik. MEB modülü 5 omurun kaynaştığını doğruluyor (aynı modül sakruma yanlışlıkla 'kuyruk sokumu' diyor; bu dosyadaki ad doğru)."
},
"disk": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'discus intervertebralis (omurlar arası disk)'."
},
"kaburga": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kaburga')",
"not": "TDK ve MEB modülü. 7+3+2 dağılımı doğru."
},
"kaburga-kikirdagi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: kaburganın ön bölümü kıkırdak (Cartilago costalis)."
},
"manubrium": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Sternum Sapı (Manubrium Sterni)'; köprücük kemiği ve 1. kaburga eklemi doğru. TDK'ye göre göğüs kemiği = sternum."
},
"sternum-govdesi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB: 'Sternum Gövdesi (Corpus Sterni)', en uzun bölüm."
},
"kilic": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20I.pdf",
"not": "MEB modülü 'Ksifoid (Hançersi) Çıkıntı (Processus Xiphoideus)' diyor; 'kılıç çıkıntısı' kaynakta görülmedi. Latince ve görev doğru."
},
"kopucuk": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'köprücük kemiği')",
"not": "TDK ve MEB modülü 'Os Clavicula (Köprücük Kemiği)'."
},
"kurek": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kürek kemiği')",
"not": "TDK ve MEB modülü 'Os Scapulae (Kürek Kemiği)'."
},
"pazu": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB meslek modülü humerusa 'Kol Kemiği', MEB 6. sınıf fen kitabı 'Pazı kemiği' diyor. TDK'de 'pazu' yok, doğru yazım 'pazı'. Latince ve görev doğru."
},
"doner": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Os Radius (Döner Kemik)', önkolun dış tarafında ve hareketli olanı (Ankara notu)."
},
"dirsek": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Os Ulnae (Dirsek Kemiği)'; TDK: önkolun iç yandaki kemiği."
},
"el-kayiksi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'Os scaphoideum (sandal kemik)' diyor; 'kayıksı kemik' güvenilir kaynakta görülmedi. En sık kırılan el bileği kemiği bilgisi Ankara notunda doğrulandı. İpucundaki sıra adları da buna göre güncellenmeli."
},
"ay": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Os lunatum (ay kemik)'; Türkçe Vikipedi 'lunatum (ay kemiği)'. Hilal biçimi doğru."
},
"uckoseli": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'Os triquetrum (piramit kemik)' diyor; 'üç köşeli kemik' kaynakta görülmedi. Konum doğru."
},
"bezelye": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'Os pisiforme (nohut kemik)' diyor; adın anlamı 'bezelye biçimli' (BEUN ders notu) ama 'bezelye kemiği' adı güvenilir kaynakta görülmedi. Konum doğru; MEB'e göre en küçük el bileği kemiği."
},
"buyuk-cokgen": {
"durum": "dogrulandi",
"kaynak": "https://cdn2.beun.edu.tr/sbf//2017/03/17/ftr-208-kinezyoloji-ii---1.pdf",
"not": "Bülent Ecevit Üniv. notu 'Trapezium (büyük çokgen)'. MEB modülü 'yamuk kemik' diyor. Başparmak tarak kemiğiyle eklem doğru (Ankara notu)."
},
"kucuk-cokgen": {
"durum": "dogrulandi",
"kaynak": "https://cdn2.beun.edu.tr/sbf//2017/03/17/ftr-208-kinezyoloji-ii---1.pdf",
"not": "BEUN notu 'Trapezoid (küçük çokgen)'; MEB modülü 'yamuksu kemik'. 2. tarak kemiğiyle eklem doğru (Ankara notu)."
},
"basli": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Os capitatum (başlı kemik)', el bileği kemiklerinin en büyüğü. 3. tarak kemiğiyle eklem doğru (Ankara notu: 2-3-4)."
},
"cengelli": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'çengel kemik' yazıyor (küçük yazım farkı). Hamulus çıkıntısı doğru."
},
"el-tarak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Ossa Metacarpi (El Tarak Kemikleri)', 5 adet."
},
"el-falanks": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: başparmakta iki, diğerlerinde üç falanks."
},
"kalca": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kalça kemiği')",
"not": "TDK ve MEB modülü: ilium, iskium, pubis kaynaşır."
},
"uyluk": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'uyluk kemiği')",
"not": "TDK ve MEB modülü."
},
"diz-kapagi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Os Patella (Diz Kapağı Kemiği)', vücudun en büyük sesamoid kemiği; dört başlı kasın kirişi içinde (Ankara notu)."
},
"kaval": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kaval kemiği')",
"not": "TDK: baldırdaki iki kemikten kalını. MEB 'Os Tibia (Kaval Kemik)'."
},
"kamis": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kamış kemiği')",
"not": "TDK ve MEB 'Os Fibula (Kamış Kemik, Baldır Kemiği)'. MEB 6. sınıf kitabı bu kemiğe 'baldır kemiği' diyor; öğrenci okulda o adı görebilir."
},
"asik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'aşık kemiği')",
"not": "TDK: insanın ayak bileğindeki kemik. MEB 'Os talus (eklem kemiği, aşık kemiği)'."
},
"topuk": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'topuk kemiği')",
"not": "TDK ve MEB: tarsal kemiklerin en büyüğü."
},
"ayak-kayik": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'Os naviculare (sandal kemik)' diyor; 'kayık kemiği' kaynakta görülmedi. Konum doğru."
},
"kup": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'Os cuboideum (kübik kemik)' diyor; 'küp kemiği' kaynakta görülmedi."
},
"ic-civi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB modülü 'kamamsı kemik', iç olanı 'içyan kaması kemik' diyor (Latince cuneus = kama). 'Çivi kemiği' kaynakta görülmedi. İpucu da 'Üç kamamsı kemik: iç, ara, dış' olmalı."
},
"orta-civi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'os cuneiforme intermedium (ara kaması kemik)'. Görev cümlesi doğru."
},
"dis-civi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'os cuneiforme laterale (dışyan kaması kemik)'."
},
"ayak-tarak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB: 'Ossa Metatarsi (Ayak Tarak Kemikleri)', 5 adet."
},
"ayak-falanks": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "MEB ve Ankara notu: başparmakta iki, diğerlerinde üç."
},
"susam": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Hareket%20Sistemi%20Radyolojik%20Anatomisi%20Ii.pdf",
"not": "Ankara Üniv. notu 'os sesamoideum (susamsı kemikler)' diyor; 'susam kemiği' kaynakta görülmedi. Diz kapağının en büyük susamsı kemik olduğu MEB modülünde doğrulandı."
},
"kesici": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kesici diş')",
"not": "TDK: çenenin önündeki, yiyecekleri kesmeye yarayan dişler."
},
"kopek-disi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'köpek dişi')",
"not": "TDK: azı ile kesici dişler arasındaki sivri diş. Kökünün en uzun olması standart bilgi."
},
"kucuk-azi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.1.03.006%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Premolar ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Türkçe ad kaynakta 'küçük azı dişleri (dentes premolares)' olarak geçiyor."
},
"buyuk-azi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'azı dişi / yirmi yaş dişi')",
"not": "TDK 'azı dişi' ve 'yirmi yaş dişi' (yirmilik diş) maddeleri var."
},
"dis-eti": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'diş eti')",
"not": "TDK ve MEB sindirim modülü 'diş etleri (gingiva)'."
},
"dil": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Dil (Lingua/Glossa)'."
},
"dilalti": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.1.02.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Sublingual_gland",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"cenealti": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.1.02.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Submandibular_gland ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Kaynakta 'çene altı tükürük bezleri (glandula submandibularis)' olarak geçiyor."
},
"yemek-borusu": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'yemek borusu')",
"not": "TDK ve MEB modülü 'Yemek Borusu (Oesophagus)'."
},
"mide": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Mide (Gaster, Ventriculus)'."
},
"onikiparmak": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'onikiparmak bağırsağı')",
"not": "TDK: mideden sonra gelen ince bağırsağın ilk bölümü."
},
"jejunum": {
"durum": "dogrulandi",
"kaynak": "https://www.acibadem.com.tr/saglikli-yasam/ince-bagirsak-nedir-hastaliklari-nelerdir/",
"not": "Acıbadem: 'jejunum (boş bağırsak)'. Konum MEB sindirim modülüyle uyumlu."
},
"ileum": {
"durum": "dogrulandi",
"kaynak": "https://www.acibadem.com.tr/saglikli-yasam/ince-bagirsak-nedir-hastaliklari-nelerdir/",
"not": "Acıbadem 'ileum (kıvrımlı bağırsak)' yazıyor; 'kıvrım bağırsak' biçimi kaynakta görülmedi (küçük fark). Görev (B12 ve safra tuzu emilimi) doğru."
},
"ileocekal": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: terminal ileumun kalın bağırsağa açılan ağzında valva ileocaecalis kapağı var."
},
"apandis": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'apandis')",
"not": "TDK: kör bağırsağın ucundaki parmak gibi uzantı. MEB: solucan şeklinde lenfoid doku oluşumu."
},
"apandis-askisi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/10.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Mesentery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"cikan-kolon": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB modülü 'Colon ascendens (yükselen kolon)' diyor; 'çıkan kolon' kaynakta görülmedi (iki ad da kullanılır, küçük fark)."
},
"enine-kolon": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Colon transversum (enine kolon)'."
},
"inen-kolon": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Colon descendens (inen kolon)'."
},
"rektum": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Rectum (Düz Bağırsak)'."
},
"tenya": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Taenia_coli ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.7.03.013%20Entity%20TA98%20EN.htm",
"not": "Terminologia Anatomica'da terim çoğul: 'Taeniae coli' (üç şerit: Taenia mesocolica, omentalis, libera). Açıklama da üç şeridi anlatıyor; tekil 'Taenia coli' yerine çoğul yazılmalı. Açıklama doğru (haustra görünümü)."
},
"mezenter": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: jejunum ve ileum mesenterium ile karın arka duvarına asılmış; damar, sinir ve lenf düğümleri arasında."
},
"enine-mezokolon": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/10.1.02.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Mesentery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kuyruklu-lob": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Lobus caudatus (kuyruk lob)' (küçük fark)."
},
"karaciger-kanali": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Common_hepatic_duct ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.8.01.062%20Entity%20TA98%20EN.htm ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.8.01.065%20Entity%20TA98%20EN.htm",
"not": "Terminologia Anatomica'da tek başına 'Ductus hepaticus' yok; yalnız Ductus hepaticus communis, dexter ve sinister var. Açıklama sağ ve sol kanalı anlatıyor. Model parçası yalnız bir yansa o yanın adı (dexter ya da sinister) yazılmalı."
},
"ortak-karaciger-kanali": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.8.01.061%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Common_hepatic_duct",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"safra-agaci": {
"durum": "belirsiz",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.8.01.060%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Intrahepatic_bile_ducts",
"not": "'Ductus biliferi intrahepatici' baktığım hiçbir kaynakta (TA98, TA2, Wikipedia) bu yazımla geçmiyor. TA'da yalnız 'Ductus biliferi interlobulares' (lobüller arası safra kanalları) var; bu daha dar bir yapı. Açıklama doğru. Anatomi hocasına soru: Karaciğer içi safra yollarının tümü için hangi Latince ad kullanılmalı; 'Ductus biliferi interlobulares' mi, yoksa TA dışı betimleyici 'Ductus biliferi intrahepatici' kabul edilir mi?"
},
"kese-kanali": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.8.02.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cystic_duct",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"safra-kesesi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'safra kesesi')",
"not": "TDK ve MEB ('vesica biliaris'): safrayı depolar ve yoğunlaştırır."
},
"pankreas": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'pankreas')",
"not": "TDK: iç ve dış salgısı olan organ; MEB modülü wirsung kanalını anlatıyor."
},
"pankreas-kanali": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sindirim%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Ductus pancreaticus (wirsung kanalı)', koledokla birleşip duodenuma açılır."
},
"soluk-borusu": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'soluk borusu')",
"not": "TDK: gırtlakla bronşlar arasındaki boru. MEB modülü kıkırdak halkaları anlatıyor."
},
"ana-bronş": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: sağ ana bronş sol ana bronşa göre daha geniş, daha kısa ve daha dikey."
},
"segment-bronsu": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Bronchus ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-3.pdf",
"not": "TA2'de 'Bronchus segmentalis' (segmental bronchus) genel terim olarak var; TA98'de çoğul 'Bronchi lobares et segmentales' ve tek tek adlandırılmış segment bronşları var."
},
"lingula-bronsu": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Lung ; https://www.elsevier.com/resources/anatomy/respiratory-system/lower-respiratory-system/lingular-bronchus-of-left-lung/22818 ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/06.4.02.018%20Entity%20TA98%20EN.htm",
"not": "Terminologia Anatomica'da tek başına 'Bronchus lingularis' yok; yalnız 'Bronchus lingularis superior [B IV]' ve 'Bronchus lingularis inferior [B V]' var. Dilcik bölümünün ortak bronşu (lingular bronchus) klinik kaynaklarda bu adla geçiyor; parça ortak gövdeyse ad kabul edilebilir, tek segment bronşuysa superior/inferior eklenmeli."
},
"girtlak-kapagi": {
"durum": "dogrulandi",
"kaynak": "https://tr.wikipedia.org/wiki/G%C4%B1rtlak",
"not": "Türkçe Vikipedi: 'epiglot (gırtlak kapağı kıkırdağı)'. Görev doğru."
},
"kalkan-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Cartilago Thyroidea (Tiroid-Kalkan Kıkırdak)', gırtlağın en büyük kıkırdağı."
},
"yuzuk-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://tr.wikipedia.org/wiki/G%C4%B1rtlak",
"not": "Türkçe Vikipedi 'krikoit kıkırdak (yüzüksü kıkırdak)'; MEB 'halka kıkırdak', halka biçiminde, taşlı yüzüğe benzer."
},
"ibrik": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Cartilago Arytenoidea (Aritenoid - İbrik Kıkırdak)', halka kıkırdağın laminası üzerinde, ses teli yapılarına bağlı."
},
"boynuzsu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/06.2.05.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Corniculate_cartilages",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"civi-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/06.2.06.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cuneiform_cartilages",
"not": "Latince ve açıklama doğru. 'Cuneiformis' Latince cuneus = kama sözünden gelir (Wikipedia: cuneus 'wedge'); 'çivi' birebir karşılık değil. Türkçe ders kitabı yalnız Latince adı kullanıyor, Türkçe ad için kaynak bulunamadı; öneri anlam temelli."
},
"kanat-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'burun kanadı kıkırdakları (cartilago alaris major ve minor)'."
},
"yan-burun-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Lateral_nasal_cartilage ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/06.1.01.014%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-2.pdf",
"not": "TA98 ve TA2'de bu yapı ayrı bir kıkırdak olarak değil, burun bölmesi kıkırdağının yan çıkıntısı olarak adlandırılır: 'Processus lateralis (cartilaginis septi nasi)'. 'Cartilago nasi lateralis / lateralis nasi' eski addır (Gray's, Wikipedia); TA2'de yalnız ilgili eski terim olarak geçer. Açıklama doğru. Eski ad parantez içinde bırakılabilir."
},
"bolme-kikirdak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Solunum%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'burun bölmesi kıkırdağı (cartilago septi nasi)'."
},
"ust-yutak-daraltici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.3.01.103%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"orta-yutak-daraltici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.3.01.108%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-yutak-daraltici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.3.01.111%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"damak-yutak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.2.01.105%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"tuba-yutak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.3.01.115%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"stilo-yutak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/05.3.01.114%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"on-kaval-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.037%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body ; https://sozluk.gov.tr/",
"not": "TDK: 'kaval kemiği' = tibia. Ad bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"diyafram": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'diyafram')",
"not": "TDK: göğüs ve karın boşluklarını ayıran kas."
},
"deltoid": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-gogus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kucuk-gogus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.006%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"trapez": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.3.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"pazu-kasi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'pazı')",
"not": "TDK'de 'pazu' yok; 'pazı' = kolun omuz ile dirsek arasındaki şişkince kas kitlesi. Görev doğru."
},
"arka-kol-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.019%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kol-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.018%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Brachialis_muscle",
"not": "Dirseği büken asıl kas olduğu Wikipedia'da yazıyor."
},
"gkm": {
"durum": "dogrulandi",
"kaynak": "https://www.acibadem.com.tr/hayat/sternocleidomastoid-scm-kasi/",
"not": "Türkçe ad kaynakta görülmedi. Görev cümlesi eksik: tek taraflı kasılınca baş karşı tarafa döner; iki taraflı kasılınca baş öne bükülür."
},
"buyuk-kalca": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.006%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Gluteus_maximus",
"not": "'Vücudun en büyük kası' ifadesi Wikipedia ile uyumlu (single largest muscle in the human body)."
},
"orta-kalca": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.007%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"uyluk-duz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.018%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dis-genis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.021%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ic-genis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.023%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"terzi": {
"durum": "dogrulandi",
"kaynak": "https://akbis.gaziantep.edu.tr/yonetim/upload/files/207919-4902.pdf",
"not": "Gaziantep Üniv. notu 'sartorius (terzi) kası'; Ankara notu 'en uzun kas'."
},
"uyluk-iki-basli": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.032%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"baldir": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.044%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"soleus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.047%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Soleus_muscle",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"on-disli": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dis-egik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.5.01.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dis-kaburgalar-arasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince çoğul (Musculi intercostales ...; her yanda 11 kas). Türkçe ad tekil; 'kaslar' yazılabilir. Hata değil."
},
"ic-kaburgalar-arasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.013%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Internal_intercostal_muscles ; https://en.wikipedia.org/wiki/Internal_intercostal_muscles",
"not": "Latince çoğul (Musculi intercostales ...; her yanda 11 kas). Türkçe ad tekil; 'kaslar' yazılabilir. Hata değil."
},
"buyuk-bel": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.004%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"sol-kulakcik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kulakçık')",
"not": "TDK: sağdaki ana toplardamarlardan, soldaki akciğer toplardamarlarından kanı alıp karıncıklara veren boşluk."
},
"sag-kulakcik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kulakçık')",
"not": "TDK: sağdaki ana toplardamarlardan, soldaki akciğer toplardamarlarından kanı alıp karıncıklara veren boşluk."
},
"sol-kulakcik-boslugu": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kulakçık')",
"not": "TDK: sağdaki ana toplardamarlardan, soldaki akciğer toplardamarlarından kanı alıp karıncıklara veren boşluk."
},
"sag-kulakcik-boslugu": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kulakçık')",
"not": "TDK: sağdaki ana toplardamarlardan, soldaki akciğer toplardamarlarından kanı alıp karıncıklara veren boşluk."
},
"sol-karincik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'karıncık')",
"not": "TDK: biri akciğere, öbürü vücuda kan pompalayan iki boşluk."
},
"sag-karincik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'karıncık')",
"not": "TDK: biri akciğere, öbürü vücuda kan pompalayan iki boşluk."
},
"karincik-duvari": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Ventricle_%28heart%29 ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.1.06.001%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-3.pdf",
"not": "'Paries ventriculi' Terminologia Anatomica'da kalp için yok; eski adlandırmada 'paries anterior/posterior ventriculi' mide duvarı için kullanılır (TA2 bunu mide terimlerinin eski adı olarak listeler), bu yüzden yanıltıcı. Açıklamadaki 'kaslı duvar'ın TA karşılığı 'Myocardium'. Betimleyici ad korunacaksa 'Paries ventriculi cordis' yazılmalı (TA terimi değil)."
},
"mitral": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: sol atrioventriküler delikte iki kapakçıklı mitral kapak, kanın sol atriuma geri dönmesini önler."
},
"trikuspit": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: sağ atrioventriküler delikte üç kapakçık."
},
"aort-kapagi": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: valva aortae, aortaya atılan kanın sol ventriküle dönmesini önler; yarımay kapakçıkları."
},
"pulmoner-kapak": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: pulmoner delikte üç yarımay kapakçık, kanın sağ ventriküle dönmesini önler."
},
"cikan-aorta": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Aorta ascendens (çıkan aorta)', semilunar kapakların üstünden koroner arterler çıkar."
},
"aort-yayi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.04.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Aortic_arch",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"gogus-aortasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Thoracic_aorta",
"not": "Latince doğru (TA98: Pars thoracica aortae; Aorta thoracica). Türkçe parantez yanlış eşitleme yapıyor: inen aort (Aorta descendens) göğüs ve karın bölümlerinin ikisini kapsar; göğüs aortası onun yalnız göğüs bölümüdür."
},
"karin-aortasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Abdominal_aorta",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"pulmoner-govde": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Pulmonary_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"pulmoner-arter": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Pulmonary_artery ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.101%20Entity%20TA98%20EN.htm",
"not": "TA'da sağ ve sol ayrı adlandırılır: Arteria pulmonalis dextra / sinistra (çoğul: Arteriae pulmonales). Tekil genel ad uygun."
},
"ortak-sah": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'şah damarı')",
"not": "TDK: boynun iki yanında kanı başa taşıyan atardamar."
},
"ic-sah": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.06.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Internal_carotid_artery ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Türkçe ders kitabında 'şah damarı' a. carotis communis için kullanılıyor; 'iç şah atardamarı' bundan türetilmiş, birebir kaynağı bulunamadı."
},
"kopucuk-alti-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Subclavian_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kol-bas-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.04.004%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Brachiocephalic_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"koltukalti-arter": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'A.axillaris (koltuk altı atardamarı)'."
},
"kol-arter": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'A.brachialis (kol atardamarı)', tansiyon ölçümüyle ilişkili."
},
"doner-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.027%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Radial_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dirsek-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.041%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ulnar_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"bobrek-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.075%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Renal_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ortak-iliak-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.14.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Common_iliac_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"uyluk-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Femoral_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"diz-arkasi-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.033%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Popliteal_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"tac-arter": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'koroner')",
"not": "TDK: kalbi taç şeklinde kuşatıp besleyen (damarlar)."
},
"ust-ana-toplardamar": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'V.cava superior (üst ana toplardamar)'."
},
"alt-ana-toplardamar": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'V.cava inferior (alt ana toplardamar)', vücudun en geniş çaplı veni."
},
"ic-sah-toplardamari": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB modülü 'V. Jugularis interna (boyun iç toplardamarı)' diyor."
},
"kopucuk-alti-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.08.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Subclavian_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kol-bas-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.04.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Brachiocephalic_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dirsek-ortasi-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.08.019%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Median_cubital_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-safen": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'V.saphena magna (büyük safen veni)'."
},
"uyluk-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.11.023%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Femoral_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kapi-ven": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Dola%C5%9F%C4%B1m%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB dolaşım modülü 'V.portae hepatis (kapı toplardamarı)'; MEB 11. sınıf biyoloji emilen besinlerin kapı toplardamarıyla karaciğere taşındığını yazıyor."
},
"bobrek-ven": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Renal_vein ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.09.009%20Entity%20TA98%20EN.htm",
"not": "TA98 çoğul verir: Venae renales; TA2: Vena renalis dextra / sinistra. Tekil genel ad uygun."
},
"pulmoner-ven": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Pulmonary_vein ; https://tvf.org.tr/storage/old/2019/11/anatomi-geniş-özet-3.pdf",
"not": "Kaynakta 'akciğer toplardamarı (vena pulmonalis)' olarak geçiyor. Terminologia Anatomica'da çoğul ve yönlü adlar var: Venae pulmonales; Vena pulmonalis dextra/sinistra superior/inferior. Tekil genel ad uygun."
},
"beyincik": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'beyincik')",
"not": "TDK: hareket dengesi merkezi; MEB biyoloji: istemli kas hareketlerini ve dengeyi kontrol eder."
},
"pons": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sinir%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: 'Pons (Köprü)', bulbus ile orta beyin arasında, beyinciğin önünde."
},
"sogan": {
"durum": "dogrulandi",
"kaynak": "https://sivasgazianadolu.meb.k12.tr/meb_iys_dosyalar/58/01/974943/dosyalar/2021_02/21164611_biyoloji_111.pdf",
"not": "MEB 11. sınıf biyoloji: omurilik soğanı pons ile omurilik arasında; yutma, öksürme gibi reflekslerin merkezi."
},
"orta-beyin": {
"durum": "dogrulandi",
"kaynak": "https://sivasgazianadolu.meb.k12.tr/meb_iys_dosyalar/58/01/974943/dosyalar/2021_02/21164611_biyoloji_111.pdf",
"not": "MEB biyoloji: görme ve işitme reflekslerinin merkezi."
},
"hipotalamus": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sinir%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: açlık, susuzluk, vücut ısısı ve hipofiz kontrolü."
},
"talamus": {
"durum": "dogrulandi",
"kaynak": "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Sinir%20Sistemi%20Radyolojik%20Anatomisi.pdf",
"not": "MEB: koku hariç bütün duyu yolları talamustan geçer."
},
"hipokampus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.321%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Hippocampus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"nasirsi-cisim": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.241%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Corpus_callosum",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ak-madde": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/White_matter ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "'Substantia alba hemispherii' TA98'de de TA2'de de yok. TA2'deki karşılık 'Substantia alba telencephali' (white matter of telencephalon); TA98'de yalnız genel 'Substantia alba' var. Açıklama doğru."
},
"oksipital-lob": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.132%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Occipital_lobe",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"gorme-siniri": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.006%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Optic_nerve ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Kaynakta 'n. opticus: görme siniridir' olarak geçiyor."
},
"beyin-karincigi": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Ventricular_system",
"not": "Terminologia Anatomica'da karıncıkların ortak adı yok; yalnız Ventriculus lateralis, tertius ve quartus var. Wikipedia Latince ortak adı çoğul verir: 'ventriculi cerebri'. Açıklama çoğul olduğu için 'Ventriculi cerebri / Beyin karıncıkları' daha tutarlı olur; hata değil."
},
"kornea": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'saydam tabaka')",
"not": "TDK: gözün önündeki ışığı geçiren zar; kornea."
},
"iris": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'iris')",
"not": "TDK ve MEB biyoloji: göz bebeğini büyütüp küçülterek ışığı ayarlar."
},
"mercek": {
"durum": "dogrulandi",
"kaynak": "https://sivasgazianadolu.meb.k12.tr/meb_iys_dosyalar/58/01/974943/dosyalar/2021_02/21164611_biyoloji_111.pdf",
"not": "MEB biyoloji 'göz merceği'; görüntünün ağ tabakaya düşmesi."
},
"ag-tabaka": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'ağ tabaka')",
"not": "TDK: ışığa duyarlı ağımsı bölüm; retina."
},
"sert-tabaka": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'göz akı / sert tabaka')",
"not": "TDK: göz yuvarının dışını saran dayanıklı beyaz çeper."
},
"damar-tabaka": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'damar tabaka')",
"not": "TDK ve MEB biyoloji: sert tabaka ile ağ tabaka arasındaki katman."
},
"camsi-cisim": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.06.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Vitreous_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kulak-kepcesi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'kulak kepçesi')",
"not": "TDK: sesi toplayarak kulak yoluna gönderen bölüm."
},
"ureter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/08.2.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ureter ; https://sozluk.gov.tr/",
"not": "TDK: 'idrar borusu: sidiği böbreklerin her birinden sidik torbasına akıtan bir çift kanal'. Ad doğru."
},
"idrar-kesesi": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'idrar kesesi')",
"not": "TDK: idrar torbası."
},
"uretra": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'üretra')",
"not": "TDK: siyek."
},
"bobrekustu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/11.5.00.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Adrenal_gland ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Ders kitabı 'böbreküstü bezi' yazıyor; TDK sözlüğü ayrı yazıyor: 'böbrek üstü bezi'. İkisi de kullanımda."
},
"hipofiz": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'hipofiz')",
"not": "TDK ve MEB biyoloji."
},
"epifiz": {
"durum": "dogrulandi",
"kaynak": "https://sivasgazianadolu.meb.k12.tr/meb_iys_dosyalar/58/01/974943/dosyalar/2021_02/21164611_biyoloji_111.pdf",
"not": "MEB biyoloji: epitalamusta epifiz bezi."
},
"timus": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'timüs')",
"not": "TDK: göğüs kemiği arkasındaki iç salgı bezi."
},
"dalak": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'dalak')",
"not": "TDK: yıpranmış alyuvarları toplar."
},
"testis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.3.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Testicle ; https://sozluk.gov.tr/",
"not": "TDK'da 'er bezi' ve 'testis' maddeleri var."
},
"prostat": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'prostat')",
"not": "TDK: idrar torbasının altında, siyeğin başlangıcını çevreleyen ve meni yapımında görev alan bez."
},
"asil": {
"durum": "dogrulandi",
"kaynak": "https://sozluk.gov.tr/ (Güncel Türkçe Sözlük: 'aşil kirişi')",
"not": "TDK maddesi var; 'en kalın ve en güçlü kiriş' bilgisi kaynakta ayrıca görülmedi."
},
"dk:accessory subsuperior branch of posterior basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68734",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:acromial branch of thoraco-acromial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.006%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus acromialis\"; ana damarın adı açıklık için eklenmiş, çekimi doğru. [TA98 A12.2.09.006: ramus acromialis]"
},
"dk:anterior basal segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.116%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.116); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior branch of anterior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68682",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama. (TA bu segment atardamarı için yalnız Ramus ascendens ve Ramus descendens verir.)"
},
"dk:anterior branch of lateral segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68691",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:anterior cecal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.060%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.060); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior choroidal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.06.019%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.06.019); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior circumflex humeral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.016%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.016); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior communicating artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.029%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.029); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:anterior division of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.078%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus anterior\" (arteria renalis altında). [TA98 A12.2.12.078: ramus anterior]"
},
"dk:anterior inferior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.019%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.019); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior inferior pancreaticoduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.055%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus anterior\" (arteria pancreaticoduodenalis inferior altında). [TA98 A12.2.12.055: ramus anterior]"
},
"dk:anterior inferior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70443",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:anterior interosseous artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.048%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.048); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior parietal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.067%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.067); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior part of apical segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68664",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:anterior segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.104%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.104); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior spinal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.016%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.016); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior superior pancreaticoduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.025%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.025); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior superior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70442",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:anterior temporal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.052%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.052); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior temporal branch of lateral occipital artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.095%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Rami temporales anteriores); kayıt tek dal olduğu için tekil biçim doğru. [TA98 A12.2.07.095: rami temporales anteriores]"
},
"dk:anterior tibial recurrent artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.043%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.043); FMA kimliği de bu TA kaydına bağlı."
},
"dk:anterior ulnar recurrent artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.043%20Entity%20TA98%20EN.htm",
"not": "TA'da \"Arteria recurrens ulnaris anterior\" diye bir ad yok; TA tek bir Arteria recurrens ulnaris ve onun Ramus anterior dalını verir. Bizim yazdığımız eski (Gray's dönemi) biçim. [TA98 A12.2.09.043: ramus anterior]"
},
"dk:apical part of apical segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68661",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:apical part of posterior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68669",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:apical segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.103%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.103); FMA kimliği de bu TA kaydına bağlı."
},
"dk:appendicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.062%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.062); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:arcuate artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.051%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.051); FMA kimliği de bu TA kaydına bağlı."
},
"dk:arteria princeps pollicis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.036%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.036); FMA kimliği de bu TA kaydına bağlı."
},
"dk:arteria radialis indicis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.037%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.037); FMA kimliği de bu TA kaydına bağlı."
},
"dk:artery of central sulcus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.065%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.065); FMA kimliği de bu TA kaydına bağlı."
},
"dk:artery of postcentral sulcus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.066%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.066); FMA kimliği de bu TA kaydına bağlı."
},
"dk:artery of precentral sulcus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.064%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.064); FMA kimliği de bu TA kaydına bağlı."
},
"dk:ascending branch of colic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma14828",
"not": "TA'da yok (FMA'ya özgü dal). FMA'da hem sol hem sağ kolon atardamarının \"ascending branch\" dalı var (FMA 14828 ve 14813); anahtardan taraf çıkarıldığı için Latince adda \"sinistrae\" yalnız modelde sadece sol kolon atardamarının dalı varsa doğru. Sağınki de varsa taraf belirtmeyen \"Ramus ascendens arteriae colicae\" yazılmalı."
},
"dk:ascending branch of inferior branch of ileocolic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma14820",
"not": "TA ileokolik atardamar için yalnız Ramus colicus ve Ramus ilealis verir; \"alt dalın çıkan dalı\" FMA'ya özgü (FMA 14820). Latince ad kabul edilebilir bir tanımlama; anlamca TA'daki Ramus colicus'a karşılık gelir."
},
"dk:basal branch of anterior basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68722",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:branch of anterior choroidal artery to posterior limb of internal capsule": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.009%20Entity%20TA98%20EN.htm",
"not": "Bizim adda \"arka bacak\" (cruris posterioris) eksikti; yalnız \"iç kapsül dalları\" deniyordu ve çoğuldu. TA adı: Rami cruris posterioris capsulae internae; kayıt tek dal olduğu için tekil yazıldı. [TA98 A12.2.07.009: rami cruris posterioris capsulae internae]"
},
"dk:branch of middle cerebral artery to angular gyrus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.060%20Entity%20TA98%20EN.htm",
"not": "TA'da bu damar \"Arteria\" değil \"Ramus\" olarak geçer: Ramus gyri angularis (orta beyin atardamarının dalı). [TA98 A12.2.07.060: ramus gyri angularis]"
},
"dk:bronchial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.002%20Entity%20TA98%20EN.htm",
"not": "Bizim ad çoğuldu (Rami bronchiales aortae) ama kayıt ve Türkçe ad tekil. TA adı: Rami bronchiales (pars thoracica aortae altında); tekili Ramus bronchialis. Kitaplarda \"Arteria bronchialis\" da yaygın, ama TA98'de bu biçim yok. [TA98 A12.2.11.002: rami bronchiales]"
},
"dk:bronchial branch of arch of aorta": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma14177",
"not": "TA'da yok; FMA'ya özgü (FMA 14177). TA bronş dallarını yalnız göğüs aortu ve iç göğüs atardamarı altında verir. Latince ad doğru kurulmuş."
},
"dk:callosomarginal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.037%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.037); FMA kimliği de bu TA kaydına bağlı."
},
"dk:caudal pancreatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.046%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.046); FMA kimliği de bu TA kaydına bağlı."
},
"dk:caudate lobe branch of hepatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.032%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Arteria lobi caudati\" (karaciğer atardamarının hem sağ hem sol dalı altında; kodlar A12.2.12.032 ve .036). \"Ramus lobi caudati arteriae hepaticae\" TA biçimi değil. [TA98 A12.2.12.032: arteria lobi caudati]"
},
"dk:circumflex branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.206%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus circumflexus\" (arteria coronaria sinistra altında). Türkçe ad uygun. [TA98 A12.2.03.206: ramus circumflexus]"
},
"dk:circumflex scapular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.015%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.015); FMA kimliği de bu TA kaydına bağlı."
},
"dk:colic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.071%20Entity%20TA98%20EN.htm",
"not": "TA'da tarafsız \"Arteria colica\" yok; Arteria colica dextra (A12.2.12.065), sinistra (A12.2.12.071) ve media var. Anahtardan taraf çıkarıldığı için kök ad doğru; taraf (dextra/sinistra) eklenerek kullanılmalı. [TA98 A12.2.12.071: arteria colica sinistra]"
},
"dk:common interosseous artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.047%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.047); FMA kimliği de bu TA kaydına bağlı."
},
"dk:conus artery": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.103%20Entity%20TA98%20EN.htm",
"not": "FMA'daki \"Conus artery\" (FMA 15736) TA'da ayrı bir kayıt değil. TA'daki en yakın ad sağ koroner atardamarın \"Ramus coni arteriosi\" dalı (A12.2.03.103); bizim yazdığımız ad bu ve kabul edilebilir. [TA98 A12.2.03.103: ramus coni arteriosi]"
},
"dk:conus branch of anterior interventricular branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.203%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus coni arteriosi\" (sol koroner atardamarın Ramus interventricularis anterior dalı altında); ana dalın adı açıklık için eklenmiş. [TA98 A12.2.03.203: ramus coni arteriosi]"
},
"dk:costocervical trunk": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.059%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.059); FMA kimliği de bu TA kaydına bağlı."
},
"dk:deep brachial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.020%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.020); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:deep cervical artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.060%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.060); FMA kimliği de bu TA kaydına bağlı."
},
"dk:deep palmar arch": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.038%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.09.038: arcus palmaris profundus] Türkçe ad uygun."
},
"dk:deep plantar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.054%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.054); FMA kimliği de bu TA kaydına bağlı."
},
"dk:deltoid branch of thoraco-acromial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.009%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus deltoideus\"; ana damar adı eklenmiş. [TA98 A12.2.09.009: ramus deltoideus]"
},
"dk:descending branch of colic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma14829",
"not": "TA'da yok (FMA'ya özgü dal). FMA'da hem sol hem sağ kolon atardamarının \"descending branch\" dalı var (FMA 14829 ve 14814); \"sinistrae\" yalnız modelde sadece soldaki varsa doğru. Sağınki de varsa \"Ramus descendens arteriae colicae\" yazılmalı."
},
"dk:descending branch of lateral circumflex femoral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.029%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus descendens\". Ana damar adı basılı TA98'deki sırayla yazılmış (circumflexa femoris lateralis). [TA98 A12.2.16.029: ramus descendens]"
},
"dk:descending genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.017%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.017); FMA kimliği de bu TA kaydına bağlı."
},
"dk:distal perforating artery": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma69517",
"not": "FMA'daki \"Distal perforating artery\" (FMA 69517; dış kalça atardamarının dallarından biri olarak sınıflanmış, yani bacakta) TA'da yok ve hangi damar olduğu addan anlaşılmıyor. Hocaya soru: Bu modeldeki \"distal perforating artery\" ayakta taban tarak atardamarlarını sırt tarafına bağlayan uç delici dal mı (TA: Rami perforantes), yoksa uyluktaki delici atardamarların (Arteriae perforantes) en alttaki mi? Buna göre Latince ad \"Ramus perforans distalis\" ya da \"Arteria perforans\" (numarasıyla) olmalı. Şimdiki \"Arteria perforans distalis\" yalnız sözcük çevirisi."
},
"dk:dorsal artery of penis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.15.044M%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.15.044M: arteria dorsalis penis]"
},
"dk:dorsal carpal branch of radial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.032%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus carpalis dorsalis\" (arteria radialis altında). [TA98 A12.2.09.032: ramus carpalis dorsalis]"
},
"dk:dorsal carpal branch of ulnar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.053%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus carpalis dorsalis\" (arteria ulnaris altında). [TA98 A12.2.09.053: ramus carpalis dorsalis]"
},
"dk:dorsal digital artery of foot": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.053%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Arteriae digitales dorsales, ayak bölümünde); tekil biçim ve \"pedis\" eklemesi doğru. [TA98 A12.2.16.053: arteriae digitales dorsales]"
},
"dk:dorsal pancreatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.042%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.042); FMA kimliği de bu TA kaydına bağlı."
},
"dk:dorsal scapular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.058%20Entity%20TA98%20EN.htm",
"not": "TA'da hem ayrı kayıt (A12.2.08.058) hem de Arteria transversa colli'nin derin dalının (Ramus profundus) resmî eşanlamlısı. [TA98 A12.2.08.058: arteria dorsalis scapulae]"
},
"dk:esophageal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.003%20Entity%20TA98%20EN.htm",
"not": "Bizim ad çoğuldu (Rami oesophageales aortae) ama kayıt tek damar. TA adı: Rami oesophageales (pars thoracica aortae altında); tekili Ramus oesophagealis. [TA98 A12.2.11.003: rami oesophageales]"
},
"dk:first anterior ventricular branch of coronary artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma3815",
"not": "TA'da yok; FMA'ya özgü (FMA 3815). FMA'da bu ad yalnız sağ koroner atardamar için var, bu yüzden \"dextrae\" eklenmeli; yoksa hangi koroner olduğu belirsiz kalıyor."
},
"dk:first common palmar digital artery": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.057%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares communes); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.057: arteriae digitales palmares communes]"
},
"dk:first posterior intercostal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.062%20Entity%20TA98%20EN.htm",
"not": "TA sıra sayısını Roma rakamıyla değil sözcükle yazar: \"prima\". [TA98 A12.2.08.062: arteria intercostalis posterior prima]"
},
"dk:first posterior ventricular branch of coronary artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma3837",
"not": "TA'da yok; FMA'ya özgü (FMA 3837). FMA'da bu ad yalnız sağ koroner atardamar için var, bu yüzden \"dextrae\" eklenmeli."
},
"dk:fourth common palmar digital artery": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.057%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares communes); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.057: arteriae digitales palmares communes]"
},
"dk:gastric artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.013%20Entity%20TA98%20EN.htm",
"not": "TA'da tarafsız \"Arteria gastrica\" yok; Arteria gastrica sinistra (A12.2.12.013) ve dextra (A12.2.12.028) var. Taraf anahtardan çıkarıldığı için kök ad doğru; taraf eklenerek kullanılmalı. Türkçe ad uygun. [TA98 A12.2.12.013: arteria gastrica sinistra]"
},
"dk:gastro-epiploic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.022%20Entity%20TA98%20EN.htm",
"not": "TA adı Arteria gastroomentalis dextra (A12.2.12.022) / sinistra (A12.2.12.047); \"gastro-epiploic\" eski addır, Latince doğru güncel ada çevrilmiş. Taraf eklenerek kullanılmalı. [TA98 A12.2.12.022: arteria gastroomentalis dextra] Türkçe ad uygun."
},
"dk:great pancreatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.045%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.045); FMA kimliği de bu TA kaydına bağlı."
},
"dk:hypothalamic branch of posterior communicating artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.077%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus hypothalamicus\" (arteria communicans posterior altında). [TA98 A12.2.07.077: ramus hypothalamicus]"
},
"dk:ileal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.058%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae ileales); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. [TA98 A12.2.12.058: arteriae ileales]"
},
"dk:ileal branch of inferior branch of ileocolic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.063%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus ilealis\" (arteria ileocolica altında). [TA98 A12.2.12.063: ramus ilealis]"
},
"dk:ileocolic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.059%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.059); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior branch of medial segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68694",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:inferior epigastric artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.003%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.003); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior lateral genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.038%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.038); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior lingular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.212%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.212); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior medial genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.039%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.039); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior pancreatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.043%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.043); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior pancreaticoduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.054%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.054); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior phrenic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.002%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.002); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior segmental branch of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.082%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Arteria segmenti inferioris\" (böbrek atardamarı altında); \"renis\" açıklık için eklenmiş. [TA98 A12.2.12.082: arteria segmenti inferioris]"
},
"dk:inferior suprarenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.077%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.077); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior thyroid artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.043%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.043); FMA kimliği de bu TA kaydına bağlı."
},
"dk:inferior ulnar collateral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.026%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.026); FMA kimliği de bu TA kaydına bağlı."
},
"dk:intermediomedial branch of callosomarginal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.039%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus frontalis intermediomedialis\" (arteria callosomarginalis altında). [TA98 A12.2.07.039: ramus frontalis intermediomedialis]"
},
"dk:internal thoracic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.029%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.029); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:lateral basal segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.117%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.117); FMA kimliği de bu TA kaydına bağlı."
},
"dk:lateral branch of anterior basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68721",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:lateral branch of lateral basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68728",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:lateral branch of pontine artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.023%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Rami laterales, arteriae pontis altında); tekil biçim ve \"arteriarum pontis\" çekimi doğru. [TA98 A12.2.08.023: rami laterales]"
},
"dk:lateral branch of superior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.028%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus lateralis\" (arteria superior cerebelli altında). [TA98 A12.2.08.028: ramus lateralis]"
},
"dk:lateral branch of superior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68711",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:lateral circumflex femoral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.027%20Entity%20TA98%20EN.htm",
"not": "Basılı TA98'deki biçimle aynı (Arteria circumflexa femoris lateralis). FIPAT'ın çevrimiçi düzeltilmiş listesi sözcük sırasını \"Arteria circumflexa lateralis femoris\" yapmış; ikisi de geçerli, kitaplarda bizim yazdığımız biçim yaygın. [TA98 A12.2.16.027: arteria circumflexa lateralis femoris]"
},
"dk:lateral frontobasal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.062%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.062); FMA kimliği de bu TA kaydına bağlı."
},
"dk:lateral inferior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70453",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:lateral occipital artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.094%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.094); FMA kimliği de bu TA kaydına bağlı."
},
"dk:lateral plantar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.064%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.064); FMA kimliği de bu TA kaydına bağlı."
},
"dk:lateral proper palmar digital artery of little finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:lateral proper palmar digital artery of middle finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:lateral proper palmar digital artery of ring finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:lateral superior genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.034%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.16.034: arteria superior lateralis genus]"
},
"dk:lateral superior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70452",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:lateral tarsal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.049%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.049); FMA kimliği de bu TA kaydına bağlı."
},
"dk:lateral thoracic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.011%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.011); FMA kimliği de bu TA kaydına bağlı."
},
"dk:laterobasal branch of posterior basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68737",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:lobe branch of hepatic artery": {
"durum": "belirsiz",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.00.001%20Entity%20TA98%20EN.htm",
"not": "FMA'da bu ad \"Right lobe branch of right hepatic artery\" (FMA 71708) ve \"Left lobe branch of left hepatic artery\" (FMA 71710) olarak geçiyor; TA'da karşılığı yok. Bizim \"Ramus lobi arteriae hepaticae propriae\" adı eksik: hangi lobun dalı olduğu yazmıyor ve \"propriae\" FMA'daki ana damarla (sağ/sol karaciğer atardamarı) uyuşmuyor. Hocaya soru: Bu dal TA'daki Ramus dexter / Ramus sinister (arteria hepatica propria'nın sağ ve sol dalı, A12.2.12.030 ve .035) ile aynı damar mı, yoksa onların daha uçtaki lob dalı mı? Aynıysa ad \"Ramus dexter/sinister arteriae hepaticae propriae\", değilse \"Ramus lobi dextri/sinistri arteriae hepaticae\" olmalı."
},
"dk:lumbar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.004%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae lumbales); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. Türkçe ad zaten tekil. [TA98 A12.2.12.004: arteriae lumbales]"
},
"dk:marginal artery of colon": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.068%20Entity%20TA98%20EN.htm",
"not": "TA adı Arteria marginalis coli (eşanlamlıları: Arteria juxtacolica, Arcus marginalis coli). \"marginal colic artery\" kaydıyla aynı Latince adı taşıyor; FMA'da iki ayrı sınıf (14831 ve 14824) ama TA'da tek ad var. [TA98 A12.2.12.068: arteria marginalis coli]"
},
"dk:marginal branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.106%20Entity%20TA98%20EN.htm",
"not": "FMA'da bu ad yalnız sağ koroner atardamar için var (FMA 3818: Marginal branch of right coronary artery); TA karşılığı \"Ramus marginalis dexter\". Bizim \"Ramus marginalis arteriae coronariae\" hangi koroner olduğunu söylemiyor. Dikkat: uygulama ada ayrıca \"sağ\" ekliyorsa çift yazılmamalı. [TA98 A12.2.03.106: ramus marginalis dexter]"
},
"dk:marginal colic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.068%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.12.068: arteria marginalis coli]"
},
"dk:medial basal segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.118%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.118); FMA kimliği de bu TA kaydına bağlı."
},
"dk:medial branch of pontine artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.022%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Rami mediales, arteriae pontis altında); tekil biçim doğru. [TA98 A12.2.08.022: rami mediales]"
},
"dk:medial branch of superior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.026%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus medialis\" (arteria superior cerebelli altında). [TA98 A12.2.08.026: ramus medialis]"
},
"dk:medial branch of superior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68704",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:medial frontobasal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.035%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.035); FMA kimliği de bu TA kaydına bağlı."
},
"dk:medial inferior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70450",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:medial occipital artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.098%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.098); FMA kimliği de bu TA kaydına bağlı."
},
"dk:medial plantar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.061%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.061); FMA kimliği de bu TA kaydına bağlı."
},
"dk:medial proper palmar digital artery of index finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:medial proper palmar digital artery of middle finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:medial proper palmar digital artery of ring finger": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.058%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares propriae); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.058: arteriae digitales palmares propriae]"
},
"dk:medial superior genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.035%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.16.035: arteria superior medialis genus]"
},
"dk:medial superior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70449",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:mediobasal branch of posterior basal segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68740",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:middle colic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.067%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.067); FMA kimliği de bu TA kaydına bağlı."
},
"dk:middle collateral branch of deep brachial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.023%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.09.023: arteria collateralis media]"
},
"dk:middle genicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.036%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.036); FMA kimliği de bu TA kaydına bağlı."
},
"dk:middle suprarenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.074%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.074); FMA kimliği de bu TA kaydına bağlı."
},
"dk:middle temporal branch of lateral occipital artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.096%20Entity%20TA98%20EN.htm",
"not": "TA'nın tercih ettiği ad \"Rami temporales intermedii\"; \"Rami temporales medii\" resmî eşanlamlısı. Bizim ad eşanlamlının tekili; istenirse \"Ramus temporalis intermedius arteriae occipitalis lateralis\" yazılabilir. [TA98 A12.2.07.096: rami temporales intermedii]"
},
"dk:musculophrenic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.040%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.040); FMA kimliği de bu TA kaydına bağlı."
},
"dk:ophthalmic artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.06.016%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.06.016); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:palmar metacarpal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.039%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae metacarpales palmares); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. [TA98 A12.2.09.039: arteriae metacarpales palmares]"
},
"dk:paracentral branch of callosomarginal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.042%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Rami paracentrales, arteria callosomarginalis altında); tekil biçim doğru. [TA98 A12.2.07.042: rami paracentrales]"
},
"dk:pectoral branch of thoraco-acromial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.010%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Rami pectorales); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. [TA98 A12.2.09.010: rami pectorales]"
},
"dk:pericallosal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.043%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.043); FMA kimliği de bu TA kaydına bağlı."
},
"dk:plantar arch": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.065%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.16.065: arcus plantaris profundus] Türkçe ad uygun."
},
"dk:plantar metatarsal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.066%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae metatarsales plantares); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. [TA98 A12.2.16.066: arteriae metatarsales plantares]"
},
"dk:polar temporal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.051%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.051); FMA kimliği de bu TA kaydına bağlı."
},
"dk:postcommunicating part of posterior cerebral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.088%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Pars postcommunicalis\" (eşanlamlı: Segmentum P2); ana damar adı eklenmiş. [TA98 A12.2.07.088: pars postcommunicalis]"
},
"dk:posterior basal segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.119%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.119); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior branch of anterior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68678",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:posterior branch of lateral segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68690",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:posterior cecal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.061%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.061); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior circumflex humeral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.017%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.017); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior communicating artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.06.018%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.06.018); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:posterior division of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.083%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus posterior\" (arteria renalis altında). [TA98 A12.2.12.083: ramus posterior]"
},
"dk:posterior inferior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.012%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.012); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior inferior pancreaticoduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.056%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus posterior\" (arteria pancreaticoduodenalis inferior altında). [TA98 A12.2.12.056: ramus posterior]"
},
"dk:posterior inferior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70446",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:posterior intercostal arteries": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.007%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.11.007: arteriae intercostales posteriores] Türkçe ad uygun."
},
"dk:posterior interventricular branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.108%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus interventricularis posterior\" (arteria coronaria dextra altında). Türkçe ad uygun. [TA98 A12.2.03.108: ramus interventricularis posterior]"
},
"dk:posterior parietal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.068%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.068); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior part of posterior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68672",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:posterior segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.107%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.107); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior segmental branch of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.084%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Arteria segmenti posterioris\" (böbrek atardamarı altında); \"renis\" açıklık için eklenmiş. [TA98 A12.2.12.084: arteria segmenti posterioris]"
},
"dk:posterior superior pancreaticoduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.018%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.018); FMA kimliği de bu TA kaydına bağlı."
},
"dk:posterior superior segmental hepatic artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma70445",
"not": "Terminologia Anatomica karaciğer için yalnız Arteria segmenti anterioris/posterioris/medialis/lateralis verir; \"üst/alt\" ayrımı FMA'ya özgü. Latince ad doğru kurulmuş bir tanımlama."
},
"dk:posterior ulnar recurrent artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.044%20Entity%20TA98%20EN.htm",
"not": "TA'da \"Arteria recurrens ulnaris posterior\" yok; TA adı Arteria recurrens ulnaris'in Ramus posterior dalı. [TA98 A12.2.09.044: ramus posterior]"
},
"dk:posteromedial branch of callosomarginal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.040%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus frontalis posteromedialis\" (arteria callosomarginalis altında). [TA98 A12.2.07.040: ramus frontalis posteromedialis]"
},
"dk:posteromedial central branch of posterior cerebral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.084%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae centrales posteromediales); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. [TA98 A12.2.07.084: arteriae centrales posteromediales]"
},
"dk:precommunicating part of posterior cerebral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.083%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Pars precommunicalis\" (eşanlamlı: Segmentum P1); ana damar adı eklenmiş. [TA98 A12.2.07.083: pars precommunicalis]"
},
"dk:precuneal branch of pericallosal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.044%20Entity%20TA98%20EN.htm",
"not": "\"precuneus\" bir isimdir (beyin kıvrımının adı), sıfat olarak kullanılamaz. TA'daki sıfat \"precunealis\": Rami precuneales; tekili Ramus precunealis. [TA98 A12.2.07.044: rami precuneales]"
},
"dk:prefrontal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.063%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.063); FMA kimliği de bu TA kaydına bağlı."
},
"dk:radial collateral branch of deep brachial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.024%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.09.024: arteria collateralis radialis]"
},
"dk:radial recurrent artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.028%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.028); FMA kimliği de bu TA kaydına bağlı."
},
"dk:recurrent interosseous artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.052%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.052); FMA kimliği de bu TA kaydına bağlı."
},
"dk:second common palmar digital artery": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.057%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares communes); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.057: arteriae digitales palmares communes]"
},
"dk:second posterior intercostal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.063%20Entity%20TA98%20EN.htm",
"not": "TA sıra sayısını Roma rakamıyla değil sözcükle yazar: \"secunda\". [TA98 A12.2.08.063: arteria intercostalis posterior secunda]"
},
"dk:set of calcaneal branches of posterior tibial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.059%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Rami calcanei\" (arteria tibialis posterior altında). [TA98 A12.2.16.059: rami calcanei]"
},
"dk:set of common plantar digital arteries": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.068%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.068); FMA kimliği de bu TA kaydına bağlı."
},
"dk:set of dorsal digital arteries": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.035%20Entity%20TA98%20EN.htm",
"not": "TA'da aynı ad hem el (A12.2.09.035) hem ayak (A12.2.16.053) için var. [TA98 A12.2.09.035: arteriae digitales dorsales]"
},
"dk:set of dorsal metacarpal arteries": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.034%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.034); FMA kimliği de bu TA kaydına bağlı."
},
"dk:set of oesophageal branches of thoracic aorta": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.003%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Rami oesophageales\" (pars thoracica aortae altında). [TA98 A12.2.11.003: rami oesophageales]"
},
"dk:set of perforating arteries": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.031%20Entity%20TA98%20EN.htm",
"not": "TA'da Arteriae perforantes uyluğun derin atardamarının (arteria profunda femoris) dallarıdır. FMA'daki \"Set of perforating arteries\" (FMA 70815) hangi bölgeye ait olduğunu söylemiyor; uyluk için ad doğru. [TA98 A12.2.16.031: arteriae perforantes]"
},
"dk:set of plantar digital arteries proper": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.069%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.069); FMA kimliği de bu TA kaydına bağlı."
},
"dk:set of posterior temporal branches of lateral occipital artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.097%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Rami temporales posteriores\" (arteria occipitalis lateralis altında). [TA98 A12.2.07.097: rami temporales posteriores]"
},
"dk:sigmoid artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.072%20Entity%20TA98%20EN.htm",
"not": "TA bu adı çoğul verir (Arteriae sigmoideae); kayıt tek bir damarı gösterdiği için tekil biçim kullanılmalı. Türkçe ad da tekil yapıldı. [TA98 A12.2.12.072: arteriae sigmoideae]"
},
"dk:subcostal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.11.020%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.11.020); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:subscapular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.013%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.013); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:superficial cervical artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.054%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus superficialis\" (İngilizcesi: superficial cervical artery). Ana damar için TA'nın tercih ettiği ad \"Arteria transversa colli\"; \"transversa cervicis\" resmî eşanlamlısı. [TA98 A12.2.08.054: ramus superficialis]"
},
"dk:superficial epigastric artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.011%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.16.011); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superficial medial plantar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.063%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Ramus superficialis\" (arteria plantaris medialis altında). [TA98 A12.2.16.063: ramus superficialis]"
},
"dk:superficial palmar arterial arch": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.056%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.056); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:superior branch of medial segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68693",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:superior branch of superior segmental artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma68708",
"not": "Terminologia Anatomica'da karşılığı yok; FMA'ya özgü alt dal/bölüm. Latince ad dilbilgisi ve anlam olarak doğru bir tanımlama."
},
"dk:superior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.025%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.025); FMA kimliği de bu TA kaydına bağlı. Türkçe ad uygun."
},
"dk:superior epigastric artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.041%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.041); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior intercostal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.061%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.061); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior lingular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.213%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.213); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior rectal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.073%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.12.073); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior segmental artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.114%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.01.114); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior segmental branch of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.079%20Entity%20TA98%20EN.htm",
"not": "TA adı \"Arteria segmenti superioris\" (böbrek atardamarı altında); \"renis\" açıklık için eklenmiş. [TA98 A12.2.12.079: arteria segmenti superioris]"
},
"dk:superior ulnar collateral artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.025%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.025); FMA kimliği de bu TA kaydına bağlı."
},
"dk:superior vermian branch of medial branch of superior cerebellar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.027%20Entity%20TA98%20EN.htm",
"not": "TA'da bu damar \"Ramus\" değil \"Arteria\" olarak geçer: Arteria vermis superior (arteria superior cerebelli'nin Ramus medialis dalı altında). [TA98 A12.2.08.027: arteria vermis superior]"
},
"dk:suprascapular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.051%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.051); FMA kimliği de bu TA kaydına bağlı."
},
"dk:testicular artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.086M%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla aynı. [TA98 A12.2.12.086M: arteria testicularis] Türkçe ad uygun."
},
"dk:thalamogeniculate artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.090%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.07.090); FMA kimliği de bu TA kaydına bağlı."
},
"dk:thalamoperforating artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.086%20Entity%20TA98%20EN.htm",
"not": "\"thalamoperforans\" TA'da yok; TA adı iki sözcük: Arteria thalami perforans. [TA98 A12.2.07.086: arteria thalami perforans]"
},
"dk:third common palmar digital artery": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.057%20Entity%20TA98%20EN.htm",
"not": "TA yalnız topluca çoğul adı verir (Arteriae digitales palmares communes); tek tek numaralı/parmağa göre adlandırma FMA'ya özgü. Latince ad doğru kurulmuş. [TA98 A12.2.09.057: arteriae digitales palmares communes]"
},
"dk:thoracodorsal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.014%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.09.014); FMA kimliği de bu TA kaydına bağlı."
},
"dk:thyrocervical trunk": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.042%20Entity%20TA98%20EN.htm",
"not": "TA98 adıyla birebir aynı (A12.2.08.042); FMA kimliği de bu TA kaydına bağlı."
},
"dk:transverse cervical artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.053%20Entity%20TA98%20EN.htm",
"not": "TA'nın tercih ettiği ad \"Arteria transversa colli\"; bizim yazdığımız \"Arteria transversa cervicis\" TA'nın resmî eşanlamlısı. İkisi de geçerli. [TA98 A12.2.08.053: arteria transversa colli]"
},
"dk:trunk of anterior interventricular branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.03.202%20Entity%20TA98%20EN.htm",
"not": "FMA'daki \"trunk of\" (ana gövde) TA'da ayrı kayıt değil; TA adı \"Ramus interventricularis anterior\" (arteria coronaria sinistra altında). Türkçe ad uygun. [TA98 A12.2.03.202: ramus interventricularis anterior]"
},
"dk:trunk of gastroduodenal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.016%20Entity%20TA98%20EN.htm",
"not": "FMA'daki \"trunk of\" (ana gövde) TA'da ayrı kayıt değil; damarın TA adı kullanılmış. [TA98 A12.2.12.016: arteria gastroduodenalis]"
},
"dk:trunk of thoraco-acromial artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.09.005%20Entity%20TA98%20EN.htm",
"not": "FMA'daki \"trunk of\" (ana gövde) TA'da ayrı kayıt değil; damarın TA adı kullanılmış. [TA98 A12.2.09.005: arteria thoracoacromialis]"
},
"dk:upper lobar artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.01.102%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir (Arteriae lobares superiores; sağ A12.2.01.102, sol A12.2.01.203); tekil biçim doğru. [TA98 A12.2.01.102: arteriae lobares superiores]"
},
"dk:ureteric segment of renal artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.085%20Entity%20TA98%20EN.htm",
"not": "FMA adı tekil (\"ureteric segment\", FMA 70491) ama bizim ad çoğuldu. TA adı: Rami ureterici (arteria renalis altında); tekili Ramus uretericus. [TA98 A12.2.12.085: rami ureterici]"
},
"dk:diagonal branch of anterior descending branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4146",
"not": "TA2'de 'ramus diagonalis arteriae interventricularis anterioris'; TA98'de aynı damar 'Ramus lateralis' (A12.2.03.204) adıyla geçer. Bizim ad TA2'nin 'diagonalis' sıfatını TA98'in üst damar adıyla (ramus interventricularis anterior) birleştiriyor; diğer koroner kayıtlarla tutarlı ve doğru."
},
"dk:first anterior branch of anterior interventricular branch of coronary artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma3872",
"not": "TA'da tek tek numaralanmış dal yok; TA2'de yalnız topluca 'rami ventriculares anteriores arteriae interventricularis anterioris' var (TA2 kimliği 4145). FMA'da bu ad iki ayrı yapıyı kapsar: sağ karıncığa giden ('right anterior branch') ve sol karıncığa giden ('left anterior branch') dallar; anahtardan sağ/sol çıkarılınca bu ayrım kayboldu. Latince tanımlama dilbilgisi olarak doğru."
},
"dk:first septal branch of posterior interventricular artery": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4139",
"not": "TA'da numaralı septal dal yok; TA98'de topluca 'Rami interventriculares septales' (A12.2.03.109), TA2'de 'rami septales arteriae interventricularis inferioris'. Bizim ad TA98 teriminin tekili ve sıra numarasıyla kurulmuş, dilbilgisi doğru."
},
"dk:posterior medial choroidal artery": {
"durum": "dogrulandi",
"kaynak": "https://www.wikidata.org/wiki/Q66569240",
"not": "TA98 A12.2.07.091 'Rami choroidei posteriores mediales' ile aynı. TA2'de tekil ve 'chorioideus' yazımıyla: ramus chorioideus posterior medialis arteriae posterioris cerebri (TA2 kimliği 4569). TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:second anterior branch of anterior interventricular branch of coronary artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma3874",
"not": "TA'da tek tek numaralanmış dal yok; TA2'de yalnız topluca 'rami ventriculares anteriores arteriae interventricularis anterioris' var (TA2 kimliği 4145). FMA'da bu ad iki ayrı yapıyı kapsar: sağ karıncığa giden ('right anterior branch') ve sol karıncığa giden ('left anterior branch') dallar; anahtardan sağ/sol çıkarılınca bu ayrım kayboldu. Latince tanımlama dilbilgisi olarak doğru."
},
"dk:second septal branch of posterior interventricular artery": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4139",
"not": "TA'da numaralı septal dal yok; TA98'de topluca 'Rami interventriculares septales' (A12.2.03.109), TA2'de 'rami septales arteriae interventricularis inferioris'. Bizim ad TA98 teriminin tekili ve sıra numarasıyla kurulmuş, dilbilgisi doğru."
},
"dk:septal branch of anterior interventricular artery": {
"durum": "dogrulandi",
"kaynak": "https://www.wikidata.org/wiki/Q66569382",
"not": "TA98 A12.2.03.205 'Rami interventriculares septales' (ramus interventricularis anterior'un dalları) ile aynı. TA2'de: rami septales arteriae interventricularis anterioris (TA2 kimliği 4147). TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:splenial artery": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma50652",
"not": "FMA bu yapının TA karşılığını 'Ramus corporis callosi dorsalis (Arteria occipitalis medialis)' olarak veriyor (TA98 A12.2.07.099). Wikidata aynı terimi 'ramus dorsalis corporis callosi' sırasıyla yazıyor; ikisi de aynı terimdir. TA2 listesinde bu dal yer almıyor."
},
"dk:third anterior branch of anterior interventricular branch of coronary artery": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma3876",
"not": "TA'da tek tek numaralanmış dal yok; TA2'de yalnız topluca 'rami ventriculares anteriores arteriae interventricularis anterioris' var (TA2 kimliği 4145). FMA'da bu ad iki ayrı yapıyı kapsar: sağ karıncığa giden ('right anterior branch') ve sol karıncığa giden ('left anterior branch') dallar; anahtardan sağ/sol çıkarılınca bu ayrım kayboldu. Latince tanımlama dilbilgisi olarak doğru."
},
"dk:accessory hemiazygos vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4758",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena hemiazyga accessoria."
},
"dk:anterior basal segmental vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma13290",
"not": "TA98'de karşılığı var: 'Vena basalis anterior; Ramus basalis anterior' (FMA'nın verdiği Latince: 'Vena basalis anterior lobi inferioris pulmonis dextri'). 'segmentalis' sözcüğü TA'da yok. TA2 bu dalı ayrıca listelemiyor."
},
"dk:anterior cardiac vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4168",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae anteriores cordis. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:anterior circumflex humeral vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4976",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena circumflexa anterior humeri."
},
"dk:anterior inferior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15421",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of right portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sağ' vücut yanı değil, kapı toplardamarının sağ ana dalıdır (TA: ramus dexter venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:anterior inferior segmental tributary of middle hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15800",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment V hepatic vein', karaciğerin V. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). Ad TA dışı bir tanımlamadır."
},
"dk:anterior interventricular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4160",
"not": "TA2'deki asıl terimle aynı."
},
"dk:anterior part of apical segmental vein": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma68920",
"not": "Anatomi hocasına soru: Akciğer üst lob toplardamarlarının alt dalları (V1a/V1b, V3a/V3b) için Latince ad olarak TA98'deki 'Pars intrasegmentalis / Pars intersegmentalis' mi, yoksa İngilizce adın birebir karşılığı mı kullanılmalı? FMA bu yapıyı (V1b) TA98'deki 'Pars intersegmentalis (Vena apicalis)' ile eşliyor; TA2 bu alt bölümleri listeden çıkarmış. Birebir çeviri kullanılacaksa temel ad TA'ya göre düzeltilmeli: 'Pars anterior venae apicalis pulmonis'."
},
"dk:anterior part of lateral segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4113",
"not": "TA'da karşılığı yok (FMA: sağ akciğer orta lob lateral segment toplardamarının alt dalı, V4b / V4a). Temel ad TA'ya göre düzeltildi: lateral segment toplardamarı TA2'de 'vena lateralis pulmonis dextri' (TA98: 'Pars lateralis' venae lobi medii); 'vena segmentalis lateralis' biçimi TA'da yok. Ad TA dışı bir tanımlamadır."
},
"dk:anterior segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4110",
"not": "'Vena segmentalis ...' biçimi TA'da yok; TA akciğer toplardamarlarına 'segmentalis' demez (toplardamarlar segmentler arasında seyreder). TA98: 'Ramus anterior; Vena anterior' (v. pulmonalis superior'un dalı); TA2: vena anterior pulmonis dextri / sinistri. Önerilen ad TA2 teriminin yönsüz hâlidir."
},
"dk:anterior superior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15420",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of right portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sağ' vücut yanı değil, kapı toplardamarının sağ ana dalıdır (TA: ramus dexter venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:anterior superior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15798",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment VIII hepatic vein', karaciğerin VIII. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'right hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica dextra). Ad TA dışı bir tanımlamadır."
},
"dk:anterior tibial vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5075",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:apical part of apical segmental vein": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma68919",
"not": "Anatomi hocasına soru: Akciğer üst lob toplardamarlarının alt dalları (V1a/V1b, V3a/V3b) için Latince ad olarak TA98'deki 'Pars intrasegmentalis / Pars intersegmentalis' mi, yoksa İngilizce adın birebir karşılığı mı kullanılmalı? FMA bu yapıyı (V1a) genel kayıtta 'Pars intrasegmentalis (Vena apicalis)', sağ taraf kaydında ise 'Pars intersegmentalis' ile eşliyor; FMA kendi içinde tutarsız. Birebir çeviri kullanılacaksa: 'Pars apicalis venae apicalis pulmonis'."
},
"dk:apical segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4109",
"not": "'Vena segmentalis ...' biçimi TA'da yok; TA akciğer toplardamarlarına 'segmentalis' demez (toplardamarlar segmentler arasında seyreder). TA98: 'Ramus apicalis; Vena apicalis' (FMA da Latince karşılığı 'Vena apicalis' veriyor); TA2: vena apicalis pulmonis dextri. Sol akciğerde TA karşılığı 'vena apicoposterior pulmonis sinistri'dir. Önerilen ad TA2 teriminin yönsüz hâlidir."
},
"dk:ascending lumbar vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4757",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:caudate lobe branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5099",
"not": "TA98 ve TA2'de çoğul geçer: 'Rami lobi caudati' (venae portae hepatis). Tek bir dal gösterildiği için tekil yazım kabul edilebilir."
},
"dk:circumflex scapular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4973",
"not": "TA2'deki asıl terimle aynı."
},
"dk:colic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5121",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:common palmar digital vein": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4987",
"not": "TA'da 'ortak' avuç içi parmak toplardamarı yok; yalnız 'venae digitales palmares' var (TA98 A12.3.08.027). FMA'ya özgü ad; atardamar adındaki kalıba (arteriae digitales palmares communes) göre kurulmuş, dilbilgisi doğru. Çoğul yazılmış, anahtar tekil."
},
"dk:deep dorsal vein of penis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5044",
"not": "TA2'deki asıl terimle aynı."
},
"dk:deep palmar venous arch": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4989",
"not": "TA2'deki asıl terimle aynı."
},
"dk:dorsal metacarpal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4969",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae metacarpeae dorsales. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:dorsal venous arch of foot": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5088",
"not": "TA2'deki asıl terimle aynı."
},
"dk:dorsal venous network of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4967",
"not": "TA2'deki asıl terimle aynı."
},
"dk:external iliac vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5050",
"not": "TA2'deki asıl terimle aynı."
},
"dk:fibular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5078",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:gastric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5110",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:gastroepiploic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5116",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:genicular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5074",
"not": "TA98 (A12.3.11.030) ve TA2'de resmî ad 'Venae geniculares'. 'Venae genus' TA2'de yalnız eski/ilişkili ad olarak geçiyor."
},
"dk:hemiazygos vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4764",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena hemiazyga."
},
"dk:hepatovenous segment ii": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3068",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti II; FMA eş anlamlısı 'Couinaud hepatic segment II'). TA98'de 'Segmentum II', TA2'de 'segmentum posterius laterale sinistrum hepatis' (eş anlamlısı 'segmentum II hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment iii": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3069",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti III; FMA eş anlamlısı 'Couinaud hepatic segment III'). TA98'de 'Segmentum III', TA2'de 'segmentum anterius laterale sinistrum hepatis' (eş anlamlısı 'segmentum III hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment iv": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3071",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti IV; FMA eş anlamlısı 'Couinaud hepatic segment IV'). TA98'de 'Segmentum IV', TA2'de 'segmentum mediale sinistrum hepatis' (eş anlamlısı 'segmentum IV hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment v": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3076",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti V; FMA eş anlamlısı 'Couinaud hepatic segment V'). TA98'de 'Segmentum V', TA2'de 'segmentum anterius mediale dextrum hepatis' (eş anlamlısı 'segmentum V hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment vi": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3079",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti VI; FMA eş anlamlısı 'Couinaud hepatic segment VI'). TA98'de 'Segmentum VI', TA2'de 'segmentum anterius laterale dextrum hepatis' (eş anlamlısı 'segmentum VI hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment vii": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3080",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti VII; FMA eş anlamlısı 'Couinaud hepatic segment VII'). TA98'de 'Segmentum VII', TA2'de 'segmentum posterius laterale dextrum hepatis' (eş anlamlısı 'segmentum VII hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment viii": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3077",
"not": "Yanlış: 'hepatovenous segment' bir toplardamar değil, karaciğerin kendisinin bir bölümüdür (Couinaud segmenti VIII; FMA eş anlamlısı 'Couinaud hepatic segment VIII'). TA98'de 'Segmentum VIII', TA2'de 'segmentum posterius mediale dextrum hepatis' (eş anlamlısı 'segmentum VIII hepatis'). Latince ad da Türkçe ad da düzeltilmeli."
},
"dk:hepatovenous segment ix": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15747",
"not": "Yanlış: 'hepatovenous segment IX' bir toplardamar değil, karaciğerin bir bölümüdür (Couinaud'nun IX. segmenti; FMA eş anlamlısı 'Right paracaval segment of dorsal sector of liver', alt ana toplardamarın sağ yanındaki bölüm). TA98 ve TA2'de IX. segment yoktur (TA I-VIII sayar); önerilen ad TA dışı ama diğer segmentlerle aynı kalıpta."
},
"dk:ileal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5115",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:ileocolic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5119",
"not": "TA2'deki asıl terimle aynı."
},
"dk:iliolumbar vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5023",
"not": "TA2'deki asıl terimle aynı."
},
"dk:inferior epigastric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5051",
"not": "TA2'deki asıl terimle aynı."
},
"dk:inferior gluteal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5026",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:inferior lingular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4124",
"not": "TA2: vena lingularis inferior pulmonis sinistri (TA98'de 'Pars inferior' venae lingularis). Yönsüz yazım uygun."
},
"dk:inferior mesenteric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5127",
"not": "TA2'deki asıl terimle aynı."
},
"dk:inferior part of anterior segmental vein": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma8693",
"not": "Anatomi hocasına soru: Akciğer üst lob toplardamarlarının alt dalları (V1a/V1b, V3a/V3b) için Latince ad olarak TA98'deki 'Pars intrasegmentalis / Pars intersegmentalis' mi, yoksa İngilizce adın birebir karşılığı mı kullanılmalı? FMA bu yapıyı (V3b) TA98'deki 'Pars intersegmentalis (Vena anterior)' ile eşliyor. Birebir çeviri kullanılacaksa: 'Pars inferior venae anterioris pulmonis'."
},
"dk:inferior part of medial segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4114",
"not": "TA'da karşılığı yok (FMA: sağ akciğer orta lob medial segment toplardamarının alt dalı, V5b / V5a). Temel ad TA'ya göre düzeltildi: medial segment toplardamarı TA2'de 'vena medialis pulmonis dextri' (TA98: 'Pars medialis' venae lobi medii). Ad TA dışı bir tanımlamadır."
},
"dk:inferior phrenic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4992",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:internal iliac vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5024",
"not": "TA2'deki asıl terimle aynı."
},
"dk:internal pudendal vein": {
"durum": "dogrulandi",
"kaynak": "https://www.wikidata.org/wiki/Q4116893",
"not": "TA98'de tekil: 'Vena pudenda interna' (A12.3.10.019). TA2'de de tekil: vena pudendalis interna (TA2 kimliği 5032). Bizim yazım çoğuldu."
},
"dk:internal thoracic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4786",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:lateral basal segmental vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma13291",
"not": "TA98 ve TA2'de bu dal ayrı bir terim olarak yok (TA yalnız vena basalis superior, inferior, communis ve anterior'u sayar). FMA'nın akciğer segment toplardamarı (V7, V9, V10) adıdır. TA'daki 'Vena basalis anterior' örneğine uyması için 'segmentalis' sözcüğü çıkarıldı; ad TA dışı bir tanımlamadır."
},
"dk:lateral circumflex femoral vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5057",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae circumflexae laterales femoris. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:lateral inferior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15432",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of left portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sol' vücut yanı değil, kapı toplardamarının sol ana dalıdır (TA: ramus sinister venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:lateral inferior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15804",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment III hepatic vein', karaciğerin III. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'left hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica sinistra). Ad TA dışı bir tanımlamadır."
},
"dk:lateral sacral vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5028",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:lateral superior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15431",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of left portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sol' vücut yanı değil, kapı toplardamarının sol ana dalıdır (TA: ramus sinister venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:lateral superior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15803",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment II hepatic vein', karaciğerin II. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'left hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica sinistra). Ad TA dışı bir tanımlamadır."
},
"dk:lateral thoracic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4971",
"not": "TA2'deki asıl terimle aynı."
},
"dk:lumbar vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4993",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:marginal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4161",
"not": "TA98'de sağ ve sol ayrı: 'Vena marginalis dextra' ve 'Vena marginalis sinistra' (kalp toplardamarları); TA2'de 'vena marginalis dextra / sinistra cordis'. Anahtar yön içermediği için yönsüz biçim uygun."
},
"dk:medial basal segmental vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma13289",
"not": "TA98 ve TA2'de bu dal ayrı bir terim olarak yok (TA yalnız vena basalis superior, inferior, communis ve anterior'u sayar). FMA'nın akciğer segment toplardamarı (V7, V9, V10) adıdır. TA'daki 'Vena basalis anterior' örneğine uyması için 'segmentalis' sözcüğü çıkarıldı; ad TA dışı bir tanımlamadır."
},
"dk:medial brachial vein": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4982",
"not": "TA'da ayrı 'medial' kol toplardamarı yok; yalnız çoğul 'venae brachiales' var. FMA'ya özgü ad (kol atardamarına eşlik eden iki toplardamardan iç yandaki). Latince tanımlama dilbilgisi olarak doğru."
},
"dk:medial circumflex femoral vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5056",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae circumflexae mediales femoris. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:medial inferior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15429",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of left portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sol' vücut yanı değil, kapı toplardamarının sol ana dalıdır (TA: ramus sinister venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:medial inferior segmental tributary of middle hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15801",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment IVb hepatic vein', karaciğerin IVb. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). Ad TA dışı bir tanımlamadır."
},
"dk:medial superior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15428",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of left portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sol' vücut yanı değil, kapı toplardamarının sol ana dalıdır (TA: ramus sinister venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:medial superior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15802",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment IVa hepatic vein', karaciğerin IVa. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'left hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica sinistra). Ad TA dışı bir tanımlamadır."
},
"dk:median antebrachial vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4981",
"not": "TA2'deki asıl terimle aynı."
},
"dk:median sacral vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5022",
"not": "TA2'deki asıl terimle aynı."
},
"dk:middle cardiac vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4165",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena media cordis."
},
"dk:middle colic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5122",
"not": "TA2'deki asıl terimle aynı."
},
"dk:musculophrenic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4789",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:obturator vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5027",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:palmar metacarpal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4990",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae metacarpeae palmares. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:pancreaticoduodenal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5118",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:plantar metatarsal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5083",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: venae metatarseae plantares. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:plantar venous arch of foot": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5082",
"not": "TA2'deki asıl terimle aynı."
},
"dk:posterior basal segmental vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma13292",
"not": "TA98 ve TA2'de bu dal ayrı bir terim olarak yok (TA yalnız vena basalis superior, inferior, communis ve anterior'u sayar). FMA'nın akciğer segment toplardamarı (V7, V9, V10) adıdır. TA'daki 'Vena basalis anterior' örneğine uyması için 'segmentalis' sözcüğü çıkarıldı; ad TA dışı bir tanımlamadır."
},
"dk:posterior inferior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15424",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of right portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sağ' vücut yanı değil, kapı toplardamarının sağ ana dalıdır (TA: ramus dexter venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:posterior inferior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15797",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment VI hepatic vein', karaciğerin VI. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'right hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica dextra). Ad TA dışı bir tanımlamadır."
},
"dk:posterior part of lateral segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4113",
"not": "TA'da karşılığı yok (FMA: sağ akciğer orta lob lateral segment toplardamarının alt dalı, V4b / V4a). Temel ad TA'ya göre düzeltildi: lateral segment toplardamarı TA2'de 'vena lateralis pulmonis dextri' (TA98: 'Pars lateralis' venae lobi medii); 'vena segmentalis lateralis' biçimi TA'da yok. Ad TA dışı bir tanımlamadır."
},
"dk:posterior segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4111",
"not": "'Vena segmentalis ...' biçimi TA'da yok; TA akciğer toplardamarlarına 'segmentalis' demez (toplardamarlar segmentler arasında seyreder). TA98: 'Ramus posterior; Vena posterior'; TA2: vena posterior pulmonis dextri (TA'da yalnız sağ akciğerde). Önerilen ad TA2 teriminin yönsüz hâlidir."
},
"dk:posterior superior segmental branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15423",
"not": "TA'da bu segment dalı yok (TA yalnız ramus dexter / sinister ve onların anterior, posterior, laterales, mediales dallarını sayar); FMA'ya özgü ad. FMA'daki tam ad 'branch of right portal vein': anahtardan sağ/sol çıkarılınca hangi ana dala ait olduğu kayboldu. Buradaki 'sağ' vücut yanı değil, kapı toplardamarının sağ ana dalıdır (TA: ramus dexter venae portae hepatis); Latince ada eklendi. Ad TA dışı bir tanımlamadır."
},
"dk:posterior superior segmental tributary of hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15796",
"not": "TA'da karşılığı yok; FMA'ya özgü ad (eş anlamlısı: 'Segment VII hepatic vein', karaciğerin VII. segmentini boşaltan toplardamar). 'Tributaria' Latince anatomi terminolojisinde kullanılan bir ad değil; TA2 'kol, katılan damar' için 'affluens' kullanır (affluentes venae portae hepatis, TA2 kimliği 5106). FMA'daki tam ad 'right hepatic vein' içindir; anahtardan sağ/sol çıkarılınca hangi karaciğer toplardamarına döküldüğü kayboldu, Latince ada eklendi (TA: vena hepatica dextra). Ad TA dışı bir tanımlamadır."
},
"dk:posterior tibial vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5077",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:posterior vein of ventricle": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma4712",
"not": "TA98: 'Vena(e) ventriculi sinistri posterior(es)' ile aynı (FMA eş anlamlısı da aynı yazım). TA2'nin yeni terimi: vena inferior ventriculi sinistri (TA2 kimliği 4162)."
},
"dk:proper palmar digital vein of index finger": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4987",
"not": "TA'da parmaklara göre ayrılmış 'proper' avuç içi parmak toplardamarı yok; yalnız 'venae digitales palmares' var. FMA'ya özgü ad. Latince tanımlama dilbilgisi olarak doğru; parmak adları (indicis, digiti medii, digiti anularis, digiti minimi) TA'daki parmak adlarıyla uyumlu."
},
"dk:proper palmar digital vein of little finger": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4987",
"not": "TA'da parmaklara göre ayrılmış 'proper' avuç içi parmak toplardamarı yok; yalnız 'venae digitales palmares' var. FMA'ya özgü ad. Latince tanımlama dilbilgisi olarak doğru; parmak adları (indicis, digiti medii, digiti anularis, digiti minimi) TA'daki parmak adlarıyla uyumlu."
},
"dk:proper palmar digital vein of middle finger": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4987",
"not": "TA'da parmaklara göre ayrılmış 'proper' avuç içi parmak toplardamarı yok; yalnız 'venae digitales palmares' var. FMA'ya özgü ad. Latince tanımlama dilbilgisi olarak doğru; parmak adları (indicis, digiti medii, digiti anularis, digiti minimi) TA'daki parmak adlarıyla uyumlu."
},
"dk:proper palmar digital vein of ring finger": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4987",
"not": "TA'da parmaklara göre ayrılmış 'proper' avuç içi parmak toplardamarı yok; yalnız 'venae digitales palmares' var. FMA'ya özgü ad. Latince tanımlama dilbilgisi olarak doğru; parmak adları (indicis, digiti medii, digiti anularis, digiti minimi) TA'daki parmak adlarıyla uyumlu."
},
"dk:radial vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4988",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:set of anterior intercostal veins": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4790",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of dorsal digital veins": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5090",
"not": "FMA bu kaydın Latince karşılığını 'Venae digitales dorsales pedis' olarak veriyor (ayak parmaklarının sırt toplardamarları; TA98 A12.3.11.014). Bizim adda 'pedis' eksikti; elin karşılığı TA2'de ayrı terimdir (venae digitales dorsales manus). Modelde bu parçanın ayakta olduğu bir kez gözle doğrulanmalı."
},
"dk:set of perforating veins": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5071",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of plantar digital veins": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5084",
"not": "TA2'deki asıl terimle aynı."
},
"dk:sigmoid vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5129",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:small cardiac vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4166",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena parva cordis."
},
"dk:subcostal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4756",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:subscapular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4972",
"not": "TA2'deki asıl terimle aynı."
},
"dk:superficial dorsal vein of penis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5063",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:superficial epigastric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5067",
"not": "TA2'deki asıl terimle aynı."
},
"dk:superficial palmar venous arch": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4986",
"not": "TA2'deki asıl terimle aynı."
},
"dk:superior epigastric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4787",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:superior gluteal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5025",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:superior intercostal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4749",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:superior lingular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4123",
"not": "TA2: vena lingularis superior pulmonis sinistri (TA98'de 'Pars superior' venae lingularis). Yönsüz yazım uygun."
},
"dk:superior mesenteric vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5113",
"not": "TA2'deki asıl terimle aynı."
},
"dk:superior part of anterior segmental vein": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma8683",
"not": "Anatomi hocasına soru: Akciğer üst lob toplardamarlarının alt dalları (V1a/V1b, V3a/V3b) için Latince ad olarak TA98'deki 'Pars intrasegmentalis / Pars intersegmentalis' mi, yoksa İngilizce adın birebir karşılığı mı kullanılmalı? FMA bu yapıyı (V3a) TA98'deki 'Pars intrasegmentalis (Vena anterior)' ile eşliyor. Birebir çeviri kullanılacaksa: 'Pars superior venae anterioris pulmonis'."
},
"dk:superior part of medial segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4114",
"not": "TA'da karşılığı yok (FMA: sağ akciğer orta lob medial segment toplardamarının alt dalı, V5b / V5a). Temel ad TA'ya göre düzeltildi: medial segment toplardamarı TA2'de 'vena medialis pulmonis dextri' (TA98: 'Pars medialis' venae lobi medii). Ad TA dışı bir tanımlamadır."
},
"dk:superior phrenic vein": {
"durum": "dogrulandi",
"kaynak": "https://www.wikidata.org/wiki/Q7643666",
"not": "TA98 A12.3.07.010 'Venae phrenicae superiores' ile aynı. TA2'de sağ ve sol ayrı ve tekil: vena phrenica superior dextra / sinistra (TA2 kimlikleri 4755, 4769). TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:superior rectal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5130",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: vena anorectalis superior."
},
"dk:superior segmental vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4116",
"not": "'Vena segmentalis ...' biçimi TA'da yok; TA akciğer toplardamarlarına 'segmentalis' demez (toplardamarlar segmentler arasında seyreder). TA98: 'Ramus superior; Vena superior' (v. pulmonalis inferior'un dalı); TA2: vena superior pulmonis dextri / sinistri. Önerilen ad TA2 teriminin yönsüz hâlidir."
},
"dk:suprarenal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4998",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:suprascapular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4961",
"not": "TA2'deki asıl terimle aynı."
},
"dk:testicular vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=5015",
"not": "TA2'deki asıl terimle aynı. TA'da sağ ve sol ayrı terimdir (dextra/sinistra); anahtar yön içermediği için yönsüz biçim doğru."
},
"dk:thoracodorsal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4974",
"not": "TA2'deki asıl terimle aynı."
},
"dk:tributary of middle hepatic vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma15793",
"not": "TA'da karşılığı yok; FMA'nın genel sınıf adı (orta karaciğer toplardamarına katılan herhangi bir kol). 'Tributaria' yerine TA2'nin kullandığı 'affluens' önerilir. Ad TA dışı bir tanımlamadır."
},
"dk:tributary of plantar venous arch": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma44499",
"not": "TA'da karşılığı yok; FMA'nın genel sınıf adı (ayak tabanı toplardamar kemerine katılan herhangi bir kol). 'Tributaria' yerine TA2'nin kullandığı 'affluens' önerilir. Ad TA dışı bir tanımlamadır."
},
"dk:trunk of apical segmental vein": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma68879",
"not": "TA'da karşılığı yok (FMA'ya özgü 'gövde' bölümü). Temel ad TA'ya göre düzeltildi: 'vena segmentalis apicalis' yerine TA'daki 'vena apicalis'. Ad TA dışı bir tanımlamadır."
},
"dk:ulnar vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=4985",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:abductor digiti minimi of foot": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2679",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: abductor digiti minimi pedis."
},
"dk:abductor digiti minimi of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2529",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: abductor digiti minimi manus."
},
"dk:abductor hallucis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2672",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: abductor hallucis."
},
"dk:abductor pollicis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2521",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: abductor brevis pollicis."
},
"dk:abductor pollicis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2517",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: abductor longus pollicis."
},
"dk:adductor minimus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2632",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: adductor minimus."
},
"dk:anconeus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2510",
"not": "TA2'deki asıl terimle aynı."
},
"dk:aryepiglotticus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2204",
"not": "TA98 (A06.2.08.011) ve TA2'de bu yapı ayrı bir kas değil, eğik aritenoid kasın bir bölümüdür: 'Pars aryepiglottica musculi arytenoidei obliqui'. 'Musculus aryepiglotticus' eski adlandırmadır; ders kitaplarında hâlâ geçer, TA2 onu yalnız ilişkili ad olarak verir."
},
"dk:cervical rotator": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2289",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: rotatores colli. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:coccygeus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2412",
"not": "TA2'deki asıl terimle aynı."
},
"dk:coracobrachialis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2468",
"not": "TA2'deki asıl terimle aynı."
},
"dk:digastric": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2160",
"not": "TA2'deki asıl terimle aynı."
},
"dk:extensor carpi radialis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2499",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor radialis brevis carpi."
},
"dk:extensor carpi radialis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2497",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor radialis longus carpi."
},
"dk:extensor carpi ulnaris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2507",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor ulnaris carpi."
},
"dk:extensor digiti minimi": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2506",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor digiti minimi."
},
"dk:extensor digitorum longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2645",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor longus digitorum."
},
"dk:extensor hallucis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2670",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor brevis hallucis."
},
"dk:extensor hallucis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2650",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor longus hallucis."
},
"dk:extensor indicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2515",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor indicis."
},
"dk:extensor pollicis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2518",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor brevis pollicis."
},
"dk:extensor pollicis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2516",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: extensor longus pollicis."
},
"dk:external anal sphincter": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2426",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: sphincter externus ani."
},
"dk:first lumbrical of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2685",
"not": "TA'da ayak lumbrikal kasları tek tek yok; yalnız topluca 'musculi lumbricales pedis' var (TA2 eş anlamlısı: musculi lumbricales I-IV pedis). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:first plantar interosseous of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2687",
"not": "TA'da taban interosseöz kasları tek tek yok; yalnız topluca 'musculi interossei plantares' var (TA2 eş anlamlısı: musculi interossei plantares I-III). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:flexor accessorius": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2684",
"not": "TA2'deki asıl terimle aynı."
},
"dk:flexor carpi radialis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2481",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor radialis carpi."
},
"dk:flexor digiti minimi brevis of foot": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2682",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor digiti minimi pedis."
},
"dk:flexor digiti minimi brevis of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2530",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor digiti minimi manus."
},
"dk:flexor digitorum brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2683",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor brevis digitorum."
},
"dk:flexor digitorum longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2667",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor longus digitorum."
},
"dk:flexor hallucis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2668",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor longus hallucis."
},
"dk:flexor pollicis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2522",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor brevis pollicis."
},
"dk:flexor pollicis longus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2492",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: flexor longus pollicis."
},
"dk:fourth lumbrical of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2685",
"not": "TA'da ayak lumbrikal kasları tek tek yok; yalnız topluca 'musculi lumbricales pedis' var (TA2 eş anlamlısı: musculi lumbricales I-IV pedis). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:gemellus inferior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2607",
"not": "TA2'deki asıl terimle aynı."
},
"dk:gemellus superior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2606",
"not": "TA2'deki asıl terimle aynı."
},
"dk:genioglossus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2117",
"not": "TA2'deki asıl terimle aynı."
},
"dk:geniohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2166",
"not": "TA2'deki asıl terimle aynı."
},
"dk:humeral head of flexor carpi ulnaris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2484",
"not": "TA98'de kasın altında yalnız 'Caput humerale' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput humerale flexoris ulnaris carpi."
},
"dk:hyoglossus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2118",
"not": "TA2'deki asıl terimle aynı."
},
"dk:iliococcygeus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2404",
"not": "TA2'deki asıl terimle aynı."
},
"dk:iliocostalis cervicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2261",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus iliocostalis colli."
},
"dk:iliocostalis lumborum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2258",
"not": "TA2'deki asıl terimle aynı."
},
"dk:iliocostalis thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2260",
"not": "TA2'deki asıl terimle aynı."
},
"dk:inferior oblique part of longus colli": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2148",
"not": "TA98 ve TA2'de musculus longus colli'nin bölümleri yok. Üst eğik, alt eğik ve dikey bölüm ayrımı Gray's Anatomy gibi kitaplarda ve FMA'da geçer. Latince tanımlama dilbilgisi olarak doğru."
},
"dk:interspinalis thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2292",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:lateral crico-arytenoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2198",
"not": "TA98 (A06.2.08.004) 'Musculus cricoarytenoideus lateralis' ile aynı. TA2 görüntüleyicisinde bu terim 'cricoarytendoideus' diye yazım hatasıyla geçiyor; doğru yazım bizimki."
},
"dk:lateral head of flexor hallucis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2675",
"not": "TA98'de kasın altında yalnız 'Caput laterale' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput laterale flexoris brevis hallucis."
},
"dk:lateral lumbar intertransversarius": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2239",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:levator palpebrae superioris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2052",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: levator palpebrae superioris."
},
"dk:levator veli palatini": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2128",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: levator veli palatini."
},
"dk:longissimus capitis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2266",
"not": "TA2'deki asıl terimle aynı."
},
"dk:longissimus cervicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2265",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus longissimus colli."
},
"dk:longissimus thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2263",
"not": "TA2'deki asıl terimle aynı."
},
"dk:longus capitis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2149",
"not": "TA2'deki asıl terimle aynı."
},
"dk:lumbar rotator": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2285",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: rotatores lumborum. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:medial head of flexor hallucis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2674",
"not": "TA98'de kasın altında yalnız 'Caput mediale' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput mediale flexoris brevis hallucis."
},
"dk:medial lumbar intertransversarius": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2295",
"not": "TA2'deki asıl terimle aynı. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:mylohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2165",
"not": "TA2'deki asıl terimle aynı."
},
"dk:oblique arytenoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2203",
"not": "TA2'deki asıl terimle aynı."
},
"dk:oblique head of adductor hallucis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2677",
"not": "TA98'de kasın altında yalnız 'Caput obliquum' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput obliquum adductoris hallucis."
},
"dk:oblique head of adductor pollicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2527",
"not": "TA98'de kasın altında yalnız 'Caput obliquum' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput obliquum adductoris pollicis."
},
"dk:oblique part of cricothyroid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2195",
"not": "TA98 'Pars obliqua' / 'Pars recta' (musculus cricothyroideus) ile aynı. TA2 aynı terimi 'cricothyreoidei' yazımıyla verir."
},
"dk:obliquus capitis inferior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2252",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus obliquus inferior capitis."
},
"dk:obliquus capitis superior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2251",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus obliquus superior capitis."
},
"dk:obturator externus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2636",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: obturator externus."
},
"dk:obturator internus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2605",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: obturator internus."
},
"dk:omohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2169",
"not": "TA2'deki asıl terimle aynı."
},
"dk:opponens digiti minimi of foot": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2681",
"not": "TA2'deki asıl terimle aynı."
},
"dk:opponens digiti minimi of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2531",
"not": "TA2'deki asıl terimle aynı."
},
"dk:opponens pollicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2525",
"not": "TA2'deki asıl terimle aynı."
},
"dk:pectineus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2627",
"not": "TA2'deki asıl terimle aynı."
},
"dk:plantaris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2663",
"not": "TA2'deki asıl terimle aynı."
},
"dk:posterior crico-arytenoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2196",
"not": "TA2'deki asıl terimle aynı."
},
"dk:pubococcygeus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2405",
"not": "TA2'deki asıl terimle aynı."
},
"dk:puborectalis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2406",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus puboanalis."
},
"dk:quadratus femoris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2608",
"not": "TA2'deki asıl terimle aynı."
},
"dk:rectus capitis anterior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2150",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus rectus anterior capitis."
},
"dk:rectus capitis lateralis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2151",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus rectus lateralis capitis."
},
"dk:rectus capitis posterior major": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2249",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus rectus posterior major capitis."
},
"dk:rectus capitis posterior minor": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2250",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus rectus posterior minor capitis."
},
"dk:scalenus anterior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2152",
"not": "TA2'deki asıl terimle aynı. Türkçe not: 'merdiven kası' Latince kökten (scala) birebir çeviridir; hekimlikte 'skalen kas' daha yaygındır."
},
"dk:scalenus medius": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2153",
"not": "TA2'deki asıl terimle aynı. Türkçe not: hekimlikte 'orta skalen kas' daha yaygındır."
},
"dk:scalenus posterior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2154",
"not": "TA2'deki asıl terimle aynı. Türkçe not: hekimlikte 'arka skalen kas' daha yaygındır."
},
"dk:second lumbrical of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2685",
"not": "TA'da ayak lumbrikal kasları tek tek yok; yalnız topluca 'musculi lumbricales pedis' var (TA2 eş anlamlısı: musculi lumbricales I-IV pedis). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:second plantar interosseous of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2687",
"not": "TA'da taban interosseöz kasları tek tek yok; yalnız topluca 'musculi interossei plantares' var (TA2 eş anlamlısı: musculi interossei plantares I-III). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:semispinalis capitis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2283",
"not": "TA2'deki asıl terimle aynı."
},
"dk:semispinalis cervicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2282",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus semispinalis colli."
},
"dk:semispinalis thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2281",
"not": "TA2'deki asıl terimle aynı."
},
"dk:serratus posterior inferior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2235",
"not": "TA2'deki asıl terimle aynı."
},
"dk:serratus posterior superior": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2236",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of anterior cervical intertransversarii": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2237",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculi intertransversarii anteriores colli."
},
"dk:set of dorsal interossei of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2533",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of interspinales cervicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2293",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculi interspinales colli."
},
"dk:set of interspinales lumborum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2291",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of levatores costarum breves": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2310",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: levatores breves costarum."
},
"dk:set of levatores costarum longi": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2309",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: levatores longi costarum."
},
"dk:set of lumbricals of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2532",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of palmar interossei of hand": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2534",
"not": "TA2'deki asıl terimle aynı."
},
"dk:set of posterior cervical intertransversarii": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2238",
"not": "TA'da arka boyun intertransvers kasları tek başlık altında yok; iki ayrı terim var: 'Musculi intertransversarii posteriores laterales cervicis' ve '... posteriores mediales cervicis'. FMA bu kaydın Latince karşılığını 'posteriores laterales cervicis' olarak veriyor. Bizim ad ikisini kapsayan genel bir tanımlama; dilbilgisi doğru. Modeldeki parça yalnız dış yandaki demetse 'laterales' eklenmeli."
},
"dk:spinalis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2267",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculi spinales."
},
"dk:spinalis thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2268",
"not": "TA2'deki asıl terimle aynı."
},
"dk:splenius capitis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2273",
"not": "TA2'deki asıl terimle aynı."
},
"dk:splenius cervicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2274",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus splenius colli."
},
"dk:sternohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2168",
"not": "TA2'deki asıl terimle aynı."
},
"dk:sternothyroid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2173",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus sternothyreoideus."
},
"dk:straight part of cricothyroid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2194",
"not": "TA98 'Pars obliqua' / 'Pars recta' (musculus cricothyroideus) ile aynı. TA2 aynı terimi 'cricothyreoidei' yazımıyla verir."
},
"dk:stylohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2164",
"not": "TA2'deki asıl terimle aynı."
},
"dk:subclavius": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2306",
"not": "TA2'deki asıl terimle aynı."
},
"dk:superficial head of flexor pollicis brevis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2523",
"not": "TA98'de kasın altında yalnız 'Caput superficiale' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput superficiale flexoris brevis pollicis."
},
"dk:superficial perineal muscle": {
"durum": "belirsiz",
"kaynak": "http://purl.org/sig/ont/fma/fma19728",
"not": "Anatomi hocasına soru: Modelde 'superficial perineal muscle' adlı parça hangi kası gösteriyor: yalnız musculus transversus perinei superficialis'i mi, yoksa yüzeysel perine kaslarının tamamını mı? FMA'da bu ad tek bir kas değil, bir kas grubunun adıdır (eş anlamlıları 'Superficial muscle of perineum', 'Superficial urogenital muscle'; dış anüs büzücü kası da bu grubun altında sayılır). 'Superficial transverse perineal muscle' FMA'da ayrı bir kayıttır. Bizim Latince ad tek bir kasa işaret ediyor; grup kastediliyorsa önerilen ad 'Musculi perinei superficiales' (TA dışı; TA'da yalnız 'musculi perinei' ve 'spatium superficiale perinei' var)."
},
"dk:superior oblique part of longus colli": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2148",
"not": "TA98 ve TA2'de musculus longus colli'nin bölümleri yok. Üst eğik, alt eğik ve dikey bölüm ayrımı Gray's Anatomy gibi kitaplarda ve FMA'da geçer. Latince tanımlama dilbilgisi olarak doğru."
},
"dk:tensor veli palatini": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2129",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: tensor veli palatini."
},
"dk:third lumbrical of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2685",
"not": "TA'da ayak lumbrikal kasları tek tek yok; yalnız topluca 'musculi lumbricales pedis' var (TA2 eş anlamlısı: musculi lumbricales I-IV pedis). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:third plantar interosseous of foot": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2687",
"not": "TA'da taban interosseöz kasları tek tek yok; yalnız topluca 'musculi interossei plantares' var (TA2 eş anlamlısı: musculi interossei plantares I-III). Tekil ve numaralı ad dilbilgisi olarak doğru bir tanımlama."
},
"dk:thoracic rotator": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2286",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: rotatores thoracis. TA bu terimi çoğul verir; anahtar tekil olsa da çoğul yazım TA ile uyumlu."
},
"dk:thyro-arytenoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2199",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus thyreoarytenoideus."
},
"dk:thyrohyoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2174",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: musculus thyreohyoideus."
},
"dk:transverse arytenoid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2205",
"not": "TA2'deki asıl terimle aynı."
},
"dk:transverse head of adductor hallucis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2678",
"not": "TA98'de kasın altında yalnız 'Caput transversum' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput transversum adductoris hallucis."
},
"dk:transverse head of adductor pollicis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2528",
"not": "TA98'de kasın altında yalnız 'Caput transversum' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput transversum adductoris pollicis."
},
"dk:transversus thoracis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2315",
"not": "TA2'deki asıl terimle aynı."
},
"dk:ulnar head of flexor carpi ulnaris": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2485",
"not": "TA98'de kasın altında yalnız 'Caput ulnare' olarak geçer; bizim ad buna kasın adını TA98 sözcük sırasıyla ve doğru çekimle ekliyor. TA2'deki yazım: caput ulnare flexoris ulnaris carpi."
},
"dk:uvular muscle": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2130",
"not": "TA2'deki asıl terimle aynı."
},
"dk:vertical intermediate part of longus colli": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2148",
"not": "TA98 ve TA2'de musculus longus colli'nin bölümleri yok. FMA'daki 'vertical intermediate part' için 'Pars recta' Almanca anatomi kitaplarında kullanılan karşılıktır; dilbilgisi doğru. Birebir çeviri istenirse 'Pars verticalis (intermedia)' de yazılabilir."
},
"dk:vocalis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2202",
"not": "TA2'deki asıl terimle aynı."
},
"dk:check ligament of lateral rectus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2046",
"not": "TA2'deki asıl terimle aynı."
},
"dk:check ligament of medial rectus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2046",
"not": "TA'da yalnız dış yan kasın bağı var: 'Lacertus musculi recti lateralis' (TA98 A15.2.07.014). İç yan kas için TA terimi yok. 'Ligamentum retentionis' TA'da kullanılan bir ad değil; dış yandaki kayıtla aynı kalıpta olması için 'Lacertus musculi recti medialis' önerilir (TA dışı tanımlama)."
},
"dk:common tendinous ring": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2047",
"not": "TA2'deki asıl terimle aynı."
},
"dk:conus elasticus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1660",
"not": "TA2'deki asıl terimle aynı."
},
"dk:flexor retinaculum of wrist": {
"durum": "dogrulandi",
"kaynak": "http://purl.org/sig/ont/fma/fma39988",
"not": "TA98: 'Retinaculum musculorum flexorum' (A04.6.03.013); FMA Latince karşılığı tam olarak 'Retinaculum musculorum flexorum manus'. TA2'nin yeni terimi: retinaculum flexorium carpi (TA2 kimliği 2550)."
},
"dk:hyo-epiglottic ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1656",
"not": "TA2'deki asıl terimle aynı."
},
"dk:intermediate tendon": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2011",
"not": "FMA'daki 'intermediate tendon' genel bir terimdir (iki kas karnı arasındaki ara kiriş); TA karşılığı 'Tendo intermedius' (TA98 A04.0.00.045). Bizim ad bunu yalnız iki karınlı kasa bağlıyordu; omohyoid kasın da ara kirişi vardır. Modeldeki parça kesin olarak iki karınlı kasın kirişiyse 'Tendo intermedius musculi digastrici' de TA2'de geçerli bir terimdir (TA2 kimliği 2162)."
},
"dk:lateral thyrohyoid ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1653",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: ligamentum thyreohyoideum laterale."
},
"dk:long plantar ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1934",
"not": "TA2'deki asıl terimle aynı."
},
"dk:median cricothyroid ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1662",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: ligamentum cricothyreoideum medianum."
},
"dk:median thyrohyoid ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1652",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: ligamentum thyreohyoideum medianum."
},
"dk:pharyngeal raphe": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2177",
"not": "TA2'deki asıl terimle aynı."
},
"dk:pterygomandibular raphe": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2178",
"not": "TA2'deki asıl terimle aynı."
},
"dk:stylohyoid ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1567",
"not": "TA2'deki asıl terimle aynı."
},
"dk:tendinous arch of levator ani": {
"durum": "dogrulandi",
"kaynak": "https://www.wikidata.org/wiki/Q66536527",
"not": "TA98 A04.5.04.009 'Arcus tendineus musculi levatoris ani' ile aynı. TA2'nin yeni terimi: arcus tendineus levatoris ani (TA2 kimliği 2434)."
},
"dk:tendon of levator palpebrae superioris": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2052",
"not": "TA'da bu kiriş için ayrı terim yok (TA98 yalnız kasın 'Lamina superficialis' ve 'Lamina profunda' bölümlerini sayar). Kasın kirişi yassı olduğu için klinikte 'levator aponevrozu' denir; 'Aponeurosis' kabul edilebilir. Birebir çeviri: 'Tendo musculi levatoris palpebrae superioris'."
},
"dk:thyro-epiglottic ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1655",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: ligamentum thyreoepiglotticum."
},
"dk:thyrohyoid membrane": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=1651",
"not": "TA98 biçimiyle aynı; TA2 bunu resmî eş anlamlı olarak listeliyor. TA2'nin yeni asıl terimi: membrana thyreohyoidea."
},
"dk:trochlea of superior oblique": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=2049",
"not": "TA2'deki asıl terimle aynı."
},
"dk:pubic hair": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=7062",
"not": "TA2'deki asıl terimle aynı."
},
"dk:corpus cavernosum of penis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3678",
"not": "Latince ad doğru (TA98 ve TA2 ile aynı). Türkçe ad yanlış: 'cavernosum' süngerimsi değil 'mağaramsı / kavernöz' demektir; 'süngerimsi cisim' corpus spongiosum'un adıdır. İki kayıt aynı Türkçe adı taşıyordu."
},
"dk:corpus spongiosum of penis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3681",
"not": "TA2'deki asıl terimle aynı. Türkçe ad uygun."
},
"dk:glans penis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/?id=3668",
"not": "TA2'deki asıl terimle aynı."
},
"kd:mesovarium": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:ovary": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:abdominal ostium of uterine tube": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:body of uterus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:fundus of uterus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:cornua": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/09.1.03.004%20Latin%20TA98.htm ; https://en.wikipedia.org/wiki/Uterine_horns",
"not": "Cornu uteri TA98'de var (A09.1.03.004); TA2 listesinde ayrı madde değil. Yuvarlak bağ ve over bağının buraya tutunduğu kaynakla uyumlu."
},
"kd:lower uterine segment": {
"durum": "ta_disi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/09.1.03.012%20Latin%20TA98.htm ; https://en.wikipedia.org/wiki/Uterine_isthmus",
"not": "'Lower uterine segment' doğum hekimliği terimidir, TA'da yoktur; gebelikte isthmus uteri'den geliştiği için Isthmus uteri en yakın TA karşılığıdır (TA98 A09.1.03.012). Açıklama doğru."
},
"kd:posterior wall of uterus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "TA98: Facies intestinalis (eş anlamlı Facies posterior); TA2: Facies posterior uteri (eş anlamlı Facies intestinalis uteri). Model 'duvar' diyor, TA 'yüz' diyor; kabul edilebilir."
},
"kd:anterior wall of uterus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "TA98: Facies vesicalis (eş anlamlı Facies anterior); TA2: Facies anterior uteri. Anteversiyon ve antefleksiyon kaynakla teyit edildi."
},
"kd:uterine cervix": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:internal cervical os": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/pelvis/female-reproductive-tract/uterus/",
"not": "TA98: Ostium anatomicum uteri internum; TA2'de tercih edilen biçim Ostium internum uteri (eş anlamlı Ostium anatomicum internum uteri). İkisi de geçerli."
},
"kd:external cervical os": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/09.1.03.015%20Latin%20TA98.htm ; https://en.wikipedia.org/wiki/Cervical_canal",
"not": "TA98: Ostium uteri (A09.1.03.015); TA2'de tercih edilen biçim Ostium externum uteri. İkisi de geçerli."
},
"kd:palatine tonsil": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Palatine_tonsil",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:hepatic flexure of colon": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Large_intestine",
"not": "TA98 biçimi Flexura coli dextra; TA2 sözcük sırasını Flexura dextra coli yapmış (eş anlamlı Flexura hepatica coli). İkisi de geçerli."
},
"kd:vermiform appendix": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Large_intestine",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:ileocecal valve": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/05.7.02.003%20Latin%20TA98.htm",
"not": "TA98 ve TA2'de resmî terim Ostium ileale'dir (çevresi Papilla ilealis); 'Valva ileocaecalis' eski terimdir ve TA2'de yalnız ilişkili terim olarak geçer. Resmî terim öne alındı. Açıklama doğru."
},
"kd:caecum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Large_intestine",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:sigmoid colon": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Large_intestine",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:splenic flexure of colon": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Large_intestine",
"not": "TA98 biçimi Flexura coli sinistra; TA2: Flexura sinistra coli (eş anlamlı Flexura splenica coli). Sınır (watershed) bölgesi bilgisi kaynakla uyumlu."
},
"kd:superior part of duodenum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://www.kenhub.com/en/library/anatomy/the-duodenum",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:duodenal ampulla": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://radiopaedia.org/articles/5719",
"not": "TA2: Bulbus duodeni (eş anlamlı Ampulla duodeni). 'İlk 2 cm' Moore ve ders notlarıyla uyumlu; Radiopaedia 2,5 cm, İngilizce Wikipedia yaklaşık 5 cm verir (kaynaklar arasında fark var, hata değil)."
},
"kd:descending part of duodenum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://www.kenhub.com/en/library/anatomy/the-duodenum",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:sphincter of hepatopancreatic ampulla": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Sphincter_of_Oddi",
"not": "TA98 ve TA2'de resmî terim Musculus sphincter ampullae'dir; 'hepatopancreaticae' ekli biçim TA2'de yalnız ilişkili (resmî olmayan) terim olarak geçer. Açıklama doğru."
},
"kd:ascending part of duodenum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://www.kenhub.com/en/library/anatomy/the-duodenum",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:horizontal part of duodenum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://www.kenhub.com/en/library/anatomy/the-duodenum",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:jejunum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Small_intestine",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:ileum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Small_intestine",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:hepatopancreatic ampulla": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Sphincter_of_Oddi",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:dorsal pancreatic duct": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "'Dorsal pancreatic duct' embriyolojik bir addır, TA'da karşılığı yoktur. Erişkinde yalnız duodenuma yakın bölümü Ductus pancreaticus accessorius (Santorini) olur; açıklama bunu doğru anlatıyor. Latince ad en yakın erişkin yapıdır, birebir eş değildir."
},
"kd:common bile duct": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA2'de tercih edilen terim Ductus biliaris, Ductus choledochus resmî eş anlamlısı (TA98'de tercih edilen). Açıklama doğru."
},
"kd:ventral pancreatic duct": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "'Ventral pancreatic duct' embriyolojik bir addır, TA'da karşılığı yoktur. Erişkindeki Ductus pancreaticus'un (Wirsung) yalnız duodenuma yakın bölümünü oluşturur; açıklama doğru. Latince ad en yakın erişkin yapıdır, birebir eş değildir."
},
"kd:gastric impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:suprarenal impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:renal impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:duodenal impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:esophageal impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/05.8.01.018%20Latin%20TA98.htm",
"not": "Latince çekim hatası: 'impressio' dişil olduğu için sıfat 'oesophageale' (nötr) olamaz. TA2: Impressio oesophagea hepatis; TA98 çevrimiçi listesi: Impressio oesophagealis."
},
"kd:porta hepatis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:colic impression of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:capsule of the liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA'da karaciğeri saran kılıfın adı Tunica fibrosa hepatis'tir (TA2: 'fibrous capsule of liver', Glisson kapsülü). 'Capsula fibrosa' TA'da böbrek için kullanılır; karaciğerde yalnız Capsula fibrosa perivascularis vardır (kapıdan içeri giren damar çevresi kılıf). Açıklama doğru."
},
"kd:bare area of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:diaphragmatic surface of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:anterolateral segment": {
"durum": "belirsiz",
"kaynak": "https://ta2viewer.openanatomy.org/",
"not": "Modeldeki 'anterolateral segment' adının hangi Couinaud segmentine karşılık geldiği HRA tablolarında bulunamadı. TA'da iki aday var: Segmentum anterius laterale sinistrum (segment III) ve Segmentum anterius laterale dextrum (segment VI). Aynı listede 'posteroinferior segment' zaten segment VI'ya bağlandığı için bu ad büyük olasılıkla sol lobdaki segment III'tür. Anatomi hocasına soru: Modelde bu parça karaciğerin sol lateral bölümünde mi (segment III) yoksa sağ arka-alt bölümünde mi (segment VI) duruyor? Sol taraftaysa Latince ad 'Segmentum anterius laterale sinistrum [III]' olmalı ve açıklamadaki 'sağda segment VI' ifadesi çıkarılmalı."
},
"kd:superomedial segment": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "Segment IV'ün üst (IVa) ve alt (IVb) diye ikiye ayrılması Couinaud/Bismuth cerrahi sınıflamasıdır; TA yalnız Segmentum mediale sinistrum [IV] tanır. Latince ad kabul edilebilir bir tanımlamadır."
},
"kd:superomedial segment1": {
"durum": "belirsiz",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "'superomedial segment1' modelde aynı adın ikinci parçasıdır; ayrı bir anatomik yapı değildir. Anatomi hocasına soru: Bu ikinci parça modelde segment IVa'nın devamı mı, yoksa başka bir segmente (ör. segment II ya da VIII) mi denk geliyor? Görmeden karar verilemez."
},
"kd:inferomedial segment": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "Segment IVb TA'da ayrı terim değildir (TA: Segmentum mediale sinistrum [IV]). Latince ad kabul edilebilir bir tanımlamadır; açıklama doğru."
},
"kd:quadrate lobe of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA'da 'hepatis' eki olmadan Lobus quadratus; ek açıklayıcıdır. Yeri (safra kesesi ile yuvarlak bağ arası) kaynakla teyit edildi."
},
"kd:anterosuperior segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "TA2'de Segmentum posterius mediale dextrum hepatis = Segmentum VIII hepatis; Latince ad ile segment numarası birbiriyle tutarlı. Modeldeki İngilizce ad TA adı değildir (Couinaud'nun ön/arka-üst/alt adlandırması); eşleştirme bu adlandırmaya göre doğrudur."
},
"kd:posteroinferior segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "TA2'de Segmentum anterius laterale dextrum hepatis = Segmentum VI hepatis; Latince ad ile segment numarası birbiriyle tutarlı. Modeldeki İngilizce ad TA adı değildir (Couinaud'nun ön/arka-üst/alt adlandırması); eşleştirme bu adlandırmaya göre doğrudur."
},
"kd:posterosuperior segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "TA2'de Segmentum posterius laterale dextrum hepatis = Segmentum VII hepatis; Latince ad ile segment numarası birbiriyle tutarlı. Modeldeki İngilizce ad TA adı değildir (Couinaud'nun ön/arka-üst/alt adlandırması); eşleştirme bu adlandırmaya göre doğrudur."
},
"kd:anteroinferior segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Liver_segment",
"not": "TA2'de Segmentum anterius mediale dextrum hepatis = Segmentum V hepatis; Latince ad ile segment numarası birbiriyle tutarlı. Modeldeki İngilizce ad TA adı değildir (Couinaud'nun ön/arka-üst/alt adlandırması); eşleştirme bu adlandırmaya göre doğrudur."
},
"kd:coronary ligament of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA'da 'hepatis' eki olmadan Ligamentum coronarium. Açıklama kaynakla teyit edildi."
},
"kd:falciform ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA'da 'hepatis' eki olmadan Ligamentum falciforme. Açıklama kaynakla teyit edildi."
},
"kd:triangular ligament of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "TA'da sağ ve sol ayrı: Ligamentum triangulare dextrum / sinistrum. Koroner bağ yapraklarının birleşmesiyle oluştuğu kaynakla teyit edildi."
},
"kd:ligamentum venosum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:round ligament of liver": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:hepatoduodenal ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Hepatoduodenal_ligament",
"not": "Latince ad TA2'de var. Portal üçlü ve bağın küçük omentumun parçası olduğu kaynakla teyit edildi; Pringle manevrası Wikipedia 'Hepatoduodenal ligament' maddesinde geçer."
},
"kd:tail of pancreas": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:body of pancreas": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:uncinate process of pancreas": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:head of pancreas": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:neck of pancreas": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/pancreas/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:kidney capsule": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:hilum of kidney": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/08.1.01.004%20Latin%20TA98.htm",
"not": "TA98: Hilum renale; TA2: Hilum renis (eş anlamlı Hilum renale). Venin arterin önünde olduğu kaynakla teyit edildi; pelvisin en arkada olması standart ders kitabı bilgisidir."
},
"kd:renal papilla": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:renal pyramid": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:renal column": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "TA'da çoğul: Columnae renales; tekil Columna renalis doğru çekimdir."
},
"kd:outer cortex of kidney": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "TA2: Cortex renis (eş anlamlı Cortex renalis). Model 'outer cortex' diyor; TA'da ayrı bir 'dış korteks' terimi yok, korteksin tümü kastedilmiştir."
},
"kd:minor calyx": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "Yazım: TA98 ve TA2'de sözcük 'calix' biçiminde yazılır (Calices renales minores); 'calyx' İngilizce yazımdır ve TA2'de yalnız ilişkili terimdir. Açıklama doğru."
},
"kd:major calyx": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/08.1.05.003%20Latin%20TA98.htm",
"not": "Yazım: TA98 ve TA2'de 'calix' (Calices renales majores; TA98 A08.1.05.003). Açıklama doğru; küçük kalikslerin sayısı kaynaklarda 'birkaç' ya da 2-3 diye geçer."
},
"kd:renal pelvis": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/kidney/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:fundus of urinary bladder": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Urinary_bladder",
"not": "Latince ad TA2'de var. Kadında vajinanın önünde olduğu kaynakla teyit edildi; serviks komşuluğu standart ders kitabı bilgisidir."
},
"kd:urinary bladder neck smooth muscle": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://www.ebi.ac.uk/ols4/search?q=UBERON:0004230",
"not": "'Urinary bladder neck smooth muscle' UBERON terimidir (UBERON:0004230, mesane boynundaki düz kas dokusu); TA'da birebir karşılığı yoktur. TA2'de en yakın terim Sphincter internus urethrae femininae'dir (eş anlamlı Musculus sphincter internus urethrae femininae); girdideki sözcük sırası TA2'ye göre düzeltildi. Açıklama doğru; kadında bu sfinkterin belirginliği tartışmalıdır."
},
"kd:trigone of urinary bladder": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Urinary_bladder",
"not": "Latince ad TA2'de var. Üreter ağızları ve mezonefrik kanal ilişkisi kaynakta geçiyor; mukozanın düz kalması standart ders kitabı bilgisidir."
},
"kd:ureteral orifice": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Urinary_bladder",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:interventricular septum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:cardiac atrium": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "TA'da sağ ve sol ayrı terimdir (Atrium dextrum / sinistrum); 'Atrium cordis' ikisini kapsayan genel addır. Açıklama doğru."
},
"kd:heart ventricle": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "TA'da sağ ve sol ayrı terimdir (Ventriculus dexter / sinister); 'Ventriculus cordis' genel addır. Açıklama doğru."
},
"kd:aortic valve": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "Latince ad TA2'de var; yaprakçık sayısı ve yeri kaynakla teyit edildi. Dinleme odağı bu kaynakta geçmiyor; standart fizik muayene bilgisidir ve doğrudur."
},
"kd:pulmonary valve": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "Latince ad TA2'de var; yaprakçık sayısı ve yeri kaynakla teyit edildi. Dinleme odağı bu kaynakta geçmiyor; standart fizik muayene bilgisidir ve doğrudur."
},
"kd:mitral valve": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "Latince ad TA2'de var; yaprakçık sayısı ve yeri kaynakla teyit edildi. Dinleme odağı bu kaynakta geçmiyor; standart fizik muayene bilgisidir ve doğrudur."
},
"kd:tricuspid valve": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Heart_valve",
"not": "Latince ad TA2'de var; yaprakçık sayısı ve yeri kaynakla teyit edildi. Dinleme odağı bu kaynakta geçmiyor; standart fizik muayene bilgisidir ve doğrudur."
},
"kd:uterine artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Uterine_artery",
"not": "Latince ad TA2'de var. A. iliaca interna'dan çıkış, kardinal bağ içinde seyir ve üreteri önden çaprazlama kaynakla teyit edildi. Uzaklık kaynağa göre değişir: Gray's ve Moore serviksin yaklaşık 2 cm yanı der, TeachMeAnatomy yaklaşık 1 cm der; 2 cm kabul gören değerdir."
},
"kd:uterine vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Uterine_artery",
"not": "TA'da terim çoğuldur: Venae uterinae. Açıklama doğru."
},
"kd:ophthalmic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Superior_ophthalmic_vein",
"not": "TA'da üst ve alt ayrı terimdir (Vena ophthalmica superior / inferior); çoğul genel ad kabul edilebilir. Açıklama kaynakla teyit edildi."
},
"kd:superior ophthalmic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Superior_ophthalmic_vein",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:inferior ophthalmic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Inferior_ophthalmic_vein",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:central retinal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Superior_ophthalmic_vein",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:long posterior ciliary artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Ophthalmic_artery",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:central retinal artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Ophthalmic_artery",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:inferior rectal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Rectal_venous_plexus",
"not": "TA2'de tercih edilen yeni ad Venae anorectales inferiores; Venae rectales inferiores resmî eş anlamlı. Açıklama kaynakla teyit edildi."
},
"kd:middle rectal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Rectal_venous_plexus",
"not": "TA2'de tercih edilen yeni ad Venae anorectales mediae; Venae rectales mediae resmî eş anlamlı. Açıklama kaynakla teyit edildi."
},
"kd:inferior pancreaticoduodenal vein": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/",
"not": "TA'da yalnız Venae pancreaticoduodenales (ayrıca Vena pancreaticoduodenalis superior posterior) vardır; 'alt' venler için ayrı TA terimi yoktur. Latince ad arter adına koşut, kabul edilebilir bir tanımlamadır. Açıklama doğru."
},
"kd:cystic artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cystohepatic_triangle",
"not": "Latince ad TA2'de var. Sağ hepatik arterden çıkış (yaklaşık %80) ve üçgenin sınırları kaynakla teyit edildi."
},
"kd:cystic vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/",
"not": "TA'da terim çoğuldur: Venae cysticae. Açıklama doğru."
},
"kd:middle hepatic artery branch of hepatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/",
"not": "TA98 ve TA2'de bu dal sol hepatik arterin altında yer alır: Ramus intermedius arteriae hepaticae sinistrae. Girdideki 'arteriae hepaticae propriae' TA'da yoktur. Açıklamadaki 'sağ ya da sol daldan çıkar' bilgisi varyasyon olarak doğrudur."
},
"kd:hepatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:posterior segmental hepatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:anterior segmental hepatic artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/abdomen/viscera/liver/",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:branch of portal vein": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/",
"not": "Latince ad TA2'de aynen var (Rami venae portae hepatis)."
},
"kd:great vein of heart": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "TA2'de tercih edilen biçim Vena magna cordis; Vena cardiaca magna resmî eş anlamlı (TA98 biçimi). Sinus coronarius'a döküldüğü kaynakla teyit edildi."
},
"kd:oblique vein of atrium": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:anterior descending branch of pulmonary artery": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/12.2.01.106%20Latin%20TA98.htm",
"not": "'Ramus anterior descendens' TA'da yoktur. TA98'de üst lob arterlerinde A. segmentalis anterior'un iki dalı vardır: R. ascendens ve R. descendens (A12.2.01.105-106). Modeldeki 'anterior descending branch' bu inen daldır. Açıklama doğru."
},
"kd:coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "TA'da sağ ve sol ayrı terimdir (Arteria coronaria dextra / sinistra); çoğul genel ad kabul edilebilir. Aort sinüslerinden çıkış ve diyastolde dolma kaynakla teyit edildi."
},
"kd:marginal artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "TA2: Ramus marginalis dexter (sağ koroner) ve Ramus marginalis sinister (sirkumfleks). Açıklama kaynakla teyit edildi."
},
"kd:posterior descending branch of circumflex branch of coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "Parantez içindeki 'ex ramo circumflexo' uydurma bir Latince eklemedir. TA2: Ramus interventricularis inferior arteriae circumflexae cordis, resmî eş anlamlısı Ramus interventricularis posterior arteriae circumflexae cordis. Açıklama (sağ baskınlık, septumun arka 1/3'ü) kaynakla teyit edildi."
},
"kd:posterior ventricular branch of circumflex coronary artery": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Coronary_circulation",
"not": "TA98 biçimi Ramus posterior ventriculi sinistri; TA2'de tercih edilen Ramus inferior ventriculi sinistri arteriae circumflexae cordis (eski biçim eş anlamlı)."
},
"kd:common carotid artery plus branches": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "TA2: Carotis communis (eş anlamlı Arteria carotis communis). C4'te ayrılma kaynakla teyit edildi."
},
"kd:lung hilus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://teachmeanatomy.info/thorax/organs/lungs/",
"not": "Latince ad TA2'de var; hilus içeriği kaynakla teyit edildi. Arter-bronş konumu (sağda önde, solda üstte) bu kaynakta geçmiyor; standart ders kitabı bilgisidir."
},
"kd:superior lingular bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:anterior bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:apical bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2: Segmentum apicale pulmonis dextri [S I]; solda Segmentum apicoposterius [S I+II]. Solda birleşik olduğu kaynakla teyit edildi."
},
"kd:posterior bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:inferior lingular bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:superior bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:posterior basal bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:anterior basal bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:lateral basal bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:medial basal bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2: Segmentum basale mediale [S VII]; solda ön bazal segmentle birleşme (anteromedial bazal) kaynakla teyit edildi."
},
"kd:medial bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:lateral bronchopulmonary segment": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchopulmonary_segment",
"not": "TA2'de aynı segment 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla yer alıyor (ör. Segmentum IV/V lingula ve orta lob için, VI-X alt lob için). Segment listesi kaynakla teyit edildi."
},
"kd:epiglottic cartilage": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Trachea",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:trachea cartilage": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Trachea",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:carina of trachea": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Trachea",
"not": "Latince ad TA2'de var. Düzey: Wikipedia T4 der, ders kitapları T4-T5 (angulus sterni) der; ikisi uyumludur."
},
"kd:cartilage of main bronchus": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "'Cartilagines bronchiales' TA98 ve TA2'de ayrı terim değildir (TA: Tunica fibromusculocartilaginea bronchi); model adı FMA'dan gelir. Latince ad kabul edilebilir bir tanımlamadır. Kıkırdağın biçimi ve bronşiyollerde bulunmaması kaynakla teyit edildi."
},
"kd:cartilage of lobar bronchus": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "'Cartilagines bronchiales' TA98 ve TA2'de ayrı terim değildir (TA: Tunica fibromusculocartilaginea bronchi); model adı FMA'dan gelir. Latince ad kabul edilebilir bir tanımlamadır. Kıkırdağın biçimi ve bronşiyollerde bulunmaması kaynakla teyit edildi."
},
"kd:cartilage of segmental bronchus": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "'Cartilagines bronchiales' TA98 ve TA2'de ayrı terim değildir (TA: Tunica fibromusculocartilaginea bronchi); model adı FMA'dan gelir. Latince ad kabul edilebilir bir tanımlamadır. Kıkırdağın biçimi ve bronşiyollerde bulunmaması kaynakla teyit edildi."
},
"kd:lobar bronchus of lung upper lobe": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de sağ ve sol ayrı: Bronchus lobaris superior/inferior dexter ve sinister. Açıklama kaynakla teyit edildi."
},
"kd:lobar bronchus of lung lower lobe": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de sağ ve sol ayrı: Bronchus lobaris superior/inferior dexter ve sinister. Açıklama kaynakla teyit edildi."
},
"kd:anterior basal segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:superior lingular bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA98 biçimi Bronchus lingularis superior; TA2: Bronchus segmentalis lingularis superior pulmonis sinistri [B IV]."
},
"kd:apical segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:posterior basal segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:medial basal segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:superior segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:anterior segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:posterior segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:lateral basal segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:inferior lingular bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA98 biçimi Bronchus lingularis inferior; TA2: Bronchus segmentalis lingularis inferior pulmonis sinistri [B V]."
},
"kd:middle lobar bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:superior lobar bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de sağ ve sol ayrı: Bronchus lobaris superior/inferior dexter ve sinister. Açıklama kaynakla teyit edildi."
},
"kd:inferior lobar bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de sağ ve sol ayrı: Bronchus lobaris superior/inferior dexter ve sinister. Açıklama kaynakla teyit edildi."
},
"kd:lateral segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:medial segmental bronchus": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bronchus",
"not": "TA2'de aynı bronş 'pulmonis dextri/sinistri' ekiyle ve aynı numarayla (Bronchus I-X) yer alıyor."
},
"kd:gastric surface of spleen": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Spleen",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:diaphragmatic surface of spleen": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Spleen",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:colic surface of spleen": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Spleen",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:hilum of spleen": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Latin%20TA98/13.2.01.017%20Latin%20TA98.htm ; https://en.wikipedia.org/wiki/Spleen",
"not": "TA98: Hilum splenicum (eş anlamlı Hilum lienale, A13.2.01.017); TA2: Hilum splenis. İkisi de geçerli."
},
"kd:renal surface of spleen": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Spleen",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:thymus lobe": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thymus",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:afferent lymphatic vessel": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "TA2'de getirici/götürücü lenf damarı için terim yoktur; Vas lymphaticum afferens/efferens Terminologia Histologica ve ders kitabı terimidir. Açıklama kaynakla teyit edildi."
},
"kd:capsule of lymph node": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:lymph node follicle": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "TA2 lenf düğümünde yalnız Capsula, Hilum, Trabeculae, Cortex ve Medulla sayar; lenf folikülü (Nodulus lymphoideus) Terminologia Histologica terimidir. Girdi çoğul yazılmış; tekil biçim önerildi. Açıklama kaynakla teyit edildi."
},
"kd:efferent lymphatic vessel": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "TA2'de getirici/götürücü lenf damarı için terim yoktur; Vas lymphaticum afferens/efferens Terminologia Histologica ve ders kitabı terimidir. Açıklama kaynakla teyit edildi."
},
"kd:medulla of lymph node": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:lymph node t cell domain": {
"durum": "ta_disi",
"kaynak": "https://www.ebi.ac.uk/ols4/search?q=UBERON:0010417 ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "Paracortex TA2'de yoktur (Terminologia Histologica terimi). UBERON tanımı: parakorteks ve foliküller arası korteks, T lenfosit bölgesi (UBERON:0010417). Açıklama kaynakla teyit edildi."
},
"kd:lymph vasculature": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lymph_node",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:fused sacrum": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:coccyx": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:trabecular bone tissue": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bone",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:compact bone tissue": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bone",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:tibial collateral ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:anterior cruciate ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:posterior cruciate ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:anterolateral ligament of knee": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Dizin ön-dış bağı TA98 ve TA2'de yoktur (2013'te yeniden tanımlanan yapı). Latince ad kabul edilebilir bir tanımlamadır. Kaynak yalnız varlığını ve dış yan bağın önünde olduğunu teyit ediyor; tutunma yerleri ve görev ders kitabı/derleme bilgisidir."
},
"kd:fibular collateral ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:patellar ligament": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:articular disk of knee joint": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Model adı FMA'dan gelir (Articular disk of knee joint = menisküs). TA2: Meniscus medialis ve Meniscus lateralis. İç yan bağın iç menisküse yapışık olduğu kaynakla teyit edildi."
},
"kd:patellar surface of femur": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:medial perichondular surface": {
"durum": "belirsiz",
"kaynak": "https://apps.humanatlas.io/api/v1/reference-organs",
"not": "'Medial perichondular surface' adı TA, UBERON, FMA ve taranan HRA tablolarında bulunamadı; Latince ad ve açıklama tahmindir. Anatomi hocasına soru: Modelde femur alt ucunun iç tarafında 'perichondular surface' diye adlandırılan yüzey tam olarak neresi (eklem kıkırdağının kenarındaki kıkırdaksız kemik yüzeyi mi, kondilin yan yüzü mü) ve Türkçede nasıl adlandırılmalı?"
},
"kd:articular cartilage of distal epiphysis of femur": {
"durum": "ta_disi",
"kaynak": "https://cdn.humanatlas.io/digital-objects/ref-organ/knee-female-left/v1.3/assets/crosswalk.csv ; https://en.wikipedia.org/wiki/Knee",
"not": "Model adı FMA'dan gelir (FMA:33190). TA'da genel terim Cartilago articularis'tir; femur alt ucu için ayrı TA terimi yoktur. Latince ad kabul edilebilir bir tanımlamadır; açıklama doğru."
},
"kd:medial condyle of femur": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "TA2: Condylus medialis ossis femoris (eş anlamlı Condylus medialis femoris)."
},
"kd:lateral condyle of femur": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "TA2: Condylus lateralis ossis femoris (TA98 biçimi Condylus lateralis femoris)."
},
"kd:distal-most point of medial condyle of femur": {
"durum": "ta_disi",
"kaynak": "https://cdn.humanatlas.io/digital-objects/ref-organ/knee-female-left/v1.3/assets/crosswalk.csv",
"not": "Anatomik yapı değil, ölçüm noktasıdır (UBERON:7500033, HRA diz modeli). Latince ad uydurma bir çeviridir; TA karşılığı yoktur. Açıklama bunu doğru belirtiyor."
},
"kd:intercondylar fossa of femur": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Knee",
"not": "TA'da 'femoris' eki olmadan Fossa intercondylaris. Çapraz bağların kondillere tutunduğu kaynakla teyit edildi."
},
"kd:posterior cruciate enthesis": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Knee",
"not": "'Enthesis' (bağın kemiğe tutunma yeri) modele özgü addır; TA'da karşılığı yoktur ve Latince ad uydurma bir çeviridir (kabul edilebilir tanımlama). Bağların femurdaki tutunma yerleri kaynakla uyumlu. Tutunma alanının modelde femur üzerinde olduğu varsayılmıştır; model parçası tibia üzerindeyse açıklama değişmelidir."
},
"kd:anterior cruciate enthesis": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Knee",
"not": "'Enthesis' (bağın kemiğe tutunma yeri) modele özgü addır; TA'da karşılığı yoktur ve Latince ad uydurma bir çeviridir (kabul edilebilir tanımlama). Bağların femurdaki tutunma yerleri kaynakla uyumlu. Tutunma alanının modelde femur üzerinde olduğu varsayılmıştır; model parçası tibia üzerindeyse açıklama değişmelidir."
},
"kd:lateral perichondular surface": {
"durum": "belirsiz",
"kaynak": "https://apps.humanatlas.io/api/v1/reference-organs",
"not": "'Lateral perichondular surface' adı TA, UBERON, FMA ve taranan HRA tablolarında bulunamadı; Latince ad ve açıklama tahmindir. Anatomi hocasına soru: Modelde femur alt ucunun dış tarafında 'perichondular surface' diye adlandırılan yüzey tam olarak neresi (eklem kıkırdağının kenarındaki kıkırdaksız kemik yüzeyi mi, kondilin yan yüzü mü) ve Türkçede nasıl adlandırılmalı?"
},
"kd:lateral epicondylar enthesis": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Knee",
"not": "'Enthesis' (bağın kemiğe tutunma yeri) modele özgü addır; TA'da karşılığı yoktur ve Latince ad uydurma bir çeviridir (kabul edilebilir tanımlama). Bağların femurdaki tutunma yerleri kaynakla uyumlu. Tutunma alanının modelde femur üzerinde olduğu varsayılmıştır; model parçası tibia üzerindeyse açıklama değişmelidir."
},
"kd:medial epicondylar enthesis": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Knee",
"not": "'Enthesis' (bağın kemiğe tutunma yeri) modele özgü addır; TA'da karşılığı yoktur ve Latince ad uydurma bir çeviridir (kabul edilebilir tanımlama). Bağların femurdaki tutunma yerleri kaynakla uyumlu. Tutunma alanının modelde femur üzerinde olduğu varsayılmıştır; model parçası tibia üzerindeyse açıklama değişmelidir."
},
"kd:lumbar vertebra 1": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "TA2'de genel terim Vertebra lumbalis / Vertebrae lumbales I-V; numaralı biçim buna uygundur. Açıklamadaki düzey bilgileri kaynakla uyumlu."
},
"kd:lumbar vertebra 2": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "TA2'de genel terim Vertebra lumbalis / Vertebrae lumbales I-V; numaralı biçim buna uygundur. Açıklamadaki düzey bilgileri kaynakla uyumlu."
},
"kd:lumbar vertebra 3": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "Latince ad TA kalıbına uygun. Duodenumun yatay bölümünün L3 düzeyinde olması doğrudur; 'enine çıkıntıları en uzun olan' bilgisi bu kaynakta geçmiyor, Gray's Anatomy'de yer alan standart bilgidir."
},
"kd:lumbar vertebra 4": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "TA2'de genel terim Vertebra lumbalis / Vertebrae lumbales I-V; numaralı biçim buna uygundur. Açıklamadaki düzey bilgileri kaynakla uyumlu."
},
"kd:lumbar vertebra 5": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "TA2'de genel terim Vertebra lumbalis / Vertebrae lumbales I-V; numaralı biçim buna uygundur. Açıklamadaki düzey bilgileri kaynakla uyumlu."
},
"kd:lumbar vertebra 6": {
"durum": "ta_disi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lumbar_vertebrae",
"not": "Varyasyon olduğu için TA'da yoktur. Latince alanındaki Türkçe '(varyasyon)' sözcüğü çıkarıldı; bu bilgi Türkçe adda zaten var. Açıklama (S1'in lumbalizasyonu) kaynakla teyit edildi."
},
"kd:thoracic vertebra 1": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 2": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 3": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 4": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 5": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 6": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 7": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 8": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_diaphragm",
"not": "Latince ad TA kalıbına uygun. Diyafram geçiş düzeyleri (T8 v. cava inferior, T10 yemek borusu, T12 aorta) Wikipedia 'Thoracic diaphragm' maddesiyle uyumlu standart bilgidir."
},
"kd:thoracic vertebra 9": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "Latince ad TA kalıbına uygun. Kaynak ksifoid-sternum birleşimini T8-T9 düzeyinde verir; 'yaklaşık T9' ifadesi uyumludur."
},
"kd:thoracic vertebra 10": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_diaphragm",
"not": "Latince ad TA kalıbına uygun. Diyafram geçiş düzeyleri (T8 v. cava inferior, T10 yemek borusu, T12 aorta) Wikipedia 'Thoracic diaphragm' maddesiyle uyumlu standart bilgidir."
},
"kd:thoracic vertebra 11": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_vertebrae",
"not": "TA2: Vertebra thoracica (prima = I); numaralı biçim TA kalıbına uygundur. Açıklamadaki omur özellikleri ve yüzey işaretleri kaynakla uyumlu."
},
"kd:thoracic vertebra 12": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thoracic_diaphragm",
"not": "Latince ad TA kalıbına uygun. Diyafram geçiş düzeyleri (T8 v. cava inferior, T10 yemek borusu, T12 aorta) Wikipedia 'Thoracic diaphragm' maddesiyle uyumlu standart bilgidir."
},
"kd:vertebral bone 1": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "TA2: Atlas (eş anlamlı Vertebra cervicalis I). Açıklama kaynakla teyit edildi."
},
"kd:vertebral bone 2": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "TA2: Axis (eş anlamlı Vertebra cervicalis II). Açıklama kaynakla teyit edildi."
},
"kd:mammalian cervical vertebra 3": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:mammalian cervical vertebra 4": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:mammalian cervical vertebra 5": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "Latince ad TA2 (FIPAT) listesinde aynen ya da resmî eş anlamlı olarak bulundu; görev açıklamasında olgusal hata görülmedi."
},
"kd:mammalian cervical vertebra 6": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "TA2: Vertebra cervicalis VI. Tuberculum caroticum kaynakla teyit edildi. Krikoit kıkırdak düzeyi kaynağa göre C6 ya da C6-C7'dir; C6 standart değerdir."
},
"kd:mammalian cervical vertebra 7": {
"durum": "dogrulandi",
"kaynak": "https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervical_vertebrae",
"not": "TA2: Vertebra prominens (eş anlamlı Vertebra cervicalis VII). Küçük ayrıntı: kaynağa göre a. vertebralis bu delikten 'çoğunlukla' geçmez, nadiren (özellikle solda) geçebilir; açıklamadaki 'geçmez' genel kural olarak doğrudur."
},
"kd:skin of body": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.00.002: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.00.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Skin ; http://purl.obolibrary.org/obo/UBERON_0002097",
"not": "Latince ad doğru. fn'de hipodermis derinin katı gibi yazılmıştı; kaynaklara göre deri epidermis ve dermisten oluşur, hipodermis (deri altı dokusu) derinin altındadır ve deriye dahil değildir."
},
"kd:interlobar adipose tissue of mammary gland": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma58070 ; TA98 A16.0.02.005: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.005%20Entity%20TA98%20EN.htm",
"not": "TA98/TA2'de memenin loblar arası yağ dokusu için ayrı terim yok (TA'da yalnız corpus mammae, glandula mammaria, lobi vb. var). Ad FMA'ya özgü (FMA 58070). 'Corpus adiposum mammae' TA dışı ama anlaşılır bir tanımlama; daha birebir karşılık 'Textus adiposus interlobaris glandulae mammariae' olurdu. fn makul."
},
"kd:areolar tubercle": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Areolar_gland",
"not": "TA terimi çoğul verir (tubercula areolae); tekili 'tuberculum areolae'. Gebelikte belirginleşme ve yağlayıcı salgı Wikipedia ile teyit edildi."
},
"kd:nipple": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.004: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.004%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Nipple",
"not": "T4 dermatomu ve 4. interkostal sinir teyit edildi."
},
"kd:female areola": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.012: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Areola",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:mammary lobe": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.008: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Breast",
"not": "TA çoğul verir (lobi); tekili 'lobus glandulae mammariae'. Klasik sayı 15-20; Wikipedia 14-18 der, fark önemsiz."
},
"kd:main lactiferous duct": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.010: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lactiferous_duct ; https://en.wikipedia.org/wiki/Invasive_carcinoma_of_no_special_type",
"not": "TA çoğul verir (ductus lactiferi); tekili 'ductus lactifer'."
},
"kd:lactiferous sinus": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.011: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.011%20Entity%20TA98%20EN.htm ; https://pubmed.ncbi.nlm.nih.gov/15960763/ ; https://en.wikipedia.org/wiki/Lactiferous_duct",
"not": "Latince ad doğru (TA çoğul: sinus lactiferi; tekili 'sinus lactifer'). fn'deki 'süt burada birikir' bilgisi klasik kitap bilgisidir; emziren memede yapılan ultrason çalışması (Ramsay 2005) belirgin sinüs görmemiş, kanalların sütü depolamadığını bildirmiştir. Cümle buna göre yumuşatıldı."
},
"kd:suspensory ligament of breast": {
"durum": "dogrulandi",
"kaynak": "TA98 A16.0.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.02.015%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0012103 ; https://en.wikipedia.org/wiki/Cooper's_ligaments",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:retina": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6776): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Retina",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:fovea centralis": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6785): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0001786",
"not": "UBERON tanımı: fotoreseptör tabakası tümüyle konilerden oluşur."
},
"kd:macula lutea": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6784): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0000053 ; https://en.wikipedia.org/wiki/Macula",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:optic disc": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6788): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Optic_disc ; https://en.wikipedia.org/wiki/Papilledema",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:palpebral conjunctiva of upper eyelid": {
"durum": "ta_disi",
"kaynak": "TA98 A15.2.07.051: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.051%20Entity%20TA98%20EN.htm ; http://purl.org/sig/ont/fma/fma59026",
"not": "TA yalnız 'tunica conjunctiva palpebrarum' (TA2: palpebrae) verir; üst/alt ayrımı FMA'ya özgü. Latince tanımlama dilbilgisi olarak doğru ve kabul edilebilir."
},
"kd:palpebral conjunctiva of lower eyelid": {
"durum": "ta_disi",
"kaynak": "TA98 A15.2.07.051: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.051%20Entity%20TA98%20EN.htm ; http://purl.org/sig/ont/fma/fma59027",
"not": "TA yalnız 'tunica conjunctiva palpebrarum' verir; üst/alt ayrımı FMA'ya özgü. Tanımlama kabul edilebilir."
},
"kd:pupil": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6754): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Pupil",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ciliary processes": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6767): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Ciliary_processes",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ora serrata": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6780): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0011221",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:corneoscleral junction": {
"durum": "dogrulandi",
"kaynak": "TA98 A15.2.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Corneal_limbus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:scleral venous sinus": {
"durum": "dogrulandi",
"kaynak": "TA98 A12.3.06.109: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.06.109%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0004029 ; https://en.wikipedia.org/wiki/Schlemm's_canal",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:aqueous humor of eyeball": {
"durum": "dogrulandi",
"kaynak": "TA98 A15.2.06.002: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.06.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Aqueous_humour",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ciliary body": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6765): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0001775",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ciliary muscle": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6770): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Accommodation_(vertebrate_eye) ; https://en.wikipedia.org/wiki/Ciliary_muscle",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:eye trabecular meshwork": {
"durum": "dogrulandi",
"kaynak": "TA98 A15.2.02.004: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.02.004%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0005969",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:bulbar conjunctiva": {
"durum": "dogrulandi",
"kaynak": "TA98 A15.2.07.050: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.050%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Jaundice",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:humor of vitreous body": {
"durum": "dogrulandi",
"kaynak": "TA98 A15.2.06.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.06.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Vitreous_body",
"not": "Ad doğru. Küçük not: 'camsı cisim' asıl olarak corpus vitreum'un karşılığıdır; humor vitreus onun sıvı/jel içeriğidir. Karışıklık yaratmıyor, değiştirilmedi."
},
"kd:dura mater": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5370): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002363 ; https://en.wikipedia.org/wiki/Optic_nerve",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:optic chiasma": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5668): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Bitemporal_hemianopsia",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:olfactory bulb": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5538): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Olfactory_bulb",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:anterior olfactory nucleus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5543): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002266",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:piriform cortex": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Piriform_cortex ; http://purl.obolibrary.org/obo/UBERON_0004725",
"not": "TA98/TA2 listesinde 'cortex piriformis' ayrı terim olarak yok; ad nöroanatomi yazınında ve UBERON eşanlamlılarında yerleşik. Değişiklik gerekmez."
},
"kd:frontal agranular insular cortex area fl": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Insular_cortex",
"not": "Allen insan beyin atlasına özgü alan adı; TA karşılığı yok. Latince tanımlama kabul edilebilir. Not: anahtarda 'area fl' yazıyor, doğrusu 'area FI' (frontoinsular; büyük i). fn genel insula işlevleriyle uyumlu, bu alt alana özgü kaynakla teyit edilemedi."
},
"kd:temporal agranular insular cortex area tl": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Insular_cortex",
"not": "Allen insan beyin atlasına özgü alan adı; TA karşılığı yok. Not: anahtarda 'area tl' yazıyor, doğrusu 'area TI' (büyük i). fn genel insula işlevleriyle uyumlu, bu alt alana özgü kaynakla teyit edilemedi."
},
"kd:head of caudate": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5562): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002651 ; https://en.wikipedia.org/wiki/Huntington's_disease",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:body of caudate": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5563): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002630",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:tail of caudate": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5564): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Caudate_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:nucleus accumbens": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5558): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0001882",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:external segment of globus pallidus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.509: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.509%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/External_globus_pallidus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:internal segment of globus pallidus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.511: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.511%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Internal_globus_pallidus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:claustrum": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5535): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Claustrum",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:basal forebrain": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.401: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.401%20Entity%20TA98%20EN.htm ; FIPAT TA2 (kimlik 5536): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Basal_forebrain",
"not": "'Prosencephalon basale' TA'da yok. Basal forebrain'in TA98 ve TA2 karşılığı 'pars basalis telencephali'dir. fn doğru."
},
"kd:septal nuclei": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5548): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Septal_area",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:amygdaloid complex": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.402: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.402%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Amygdala",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:anterior amygdaloid area": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.406: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.406%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002890",
"not": "Latince ad TA98 ile birebir. fn'deki bağlantı ayrıntısı genel kaynaklarla uyumlu."
},
"kd:central nuclear group": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.409: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.409%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Central_nucleus_of_the_amygdala",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:lateral nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.412: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.412%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Basolateral_amygdala",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:basolateral nucleus basal nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.407: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.407%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Basolateral_amygdala",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:basomedial nucleus accessory basal nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.408: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.408%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002885",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:anterior cortical nucleus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.410: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.410%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Amygdala",
"not": "TA98 yalnız 'nucleus corticalis amygdalae' verir; ön/arka ayrımı Allen atlasına özgü. Tanımlama kabul edilebilir. Kortikal çekirdeğin koku sistemiyle bağlantısı Wikipedia ile teyit edildi."
},
"kd:posterior cortical nucleus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.410: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.410%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002891",
"not": "TA98 yalnız 'nucleus corticalis amygdalae' verir; ön/arka ayrımı Allen atlasına özgü. Tanımlama kabul edilebilir."
},
"kd:medial nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.413: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.413%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Amygdala",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:amygdalohippocampal area": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.404: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.404%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0034673",
"not": "TA98 bu yapıya 'area parahippocampalis' der (A14.1.09.404; İngilizce karşılığı amygdalohippocampal area). 'Area amygdalohippocampalis' UBERON eşanlamlısıdır ve daha anlaşılırdır; parahipokampal girusla karışmaması için değiştirilmedi."
},
"kd:bed nucleus of stria terminalis": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5555): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Stria_terminalis",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:thalamus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5678): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Thalamus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:anterior nuclear complex of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.603: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.603%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Anterior_nuclei_of_thalamus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:lateral dorsal nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.608: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.608%20Entity%20TA98%20EN.htm ; FIPAT TA2 (kimlik 5696): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lateral_dorsal_nucleus_of_thalamus",
"not": "Sözcük sırası TA'ya göre düzeltildi: TA98 ve TA2 'nucleus dorsalis lateralis' der (nuclei dorsales thalami grubunda). fn doğru."
},
"kd:mediodorsal nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.622: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.622%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Medial_dorsal_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:reuniens nucleus medioventral nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.632: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.632%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Nucleus_reuniens",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:lateral posterior nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.609: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.609%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lateral_posterior_nucleus_of_thalamus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:pulvinar of thalamus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5665): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Pulvinar_nuclei",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ventral anterior nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.652: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.652%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ventral_anterior_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ventral lateral nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.649: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.649%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0001925 ; https://en.wikipedia.org/wiki/Ventral_lateral_nucleus",
"not": "TA bu grubu çoğul verir (nuclei ventrales laterales); tekil biçim UBERON eşanlamlısı olarak geçer, kabul edilebilir."
},
"kd:ventral posterior lateral nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.641: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.641%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ventral_posterolateral_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ventral posterior medial nucleus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.642: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.642%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ventral_posteromedial_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:dorsal lateral geniculate nucleus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5701): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lateral_geniculate_nucleus",
"not": "Latince ad TA2 eşanlamlısı olarak geçer. Türkçe ad cismin (corpus) adını veriyor, model ise onun dorsal çekirdeğini gösteriyor; öğrenci için fark önemsiz, değiştirilmedi."
},
"kd:medial geniculate nuclei": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5702): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Medial_geniculate_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:centromedian nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.618: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.618%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Centromedian_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:parafascicular nucleus of thalamus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.620: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.620%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Intralaminar_thalamic_nuclei",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:habenular nuclei": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.503: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.503%20Entity%20TA98%20EN.htm ; TA98 A14.1.08.504: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.504%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Habenula",
"not": "TA çekirdekleri tek tek verir (nucleus habenularis lateralis ve medialis); toplu ad 'nuclei habenulares' UBERON eşanlamlısıdır."
},
"kd:zona incerta": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5707): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Zona_incerta",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:supraoptic region of hth": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5718): https://ta2viewer.openanatomy.org/ ; TA98 A14.1.08.902: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.902%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Hypothalamus",
"not": "'Regio hypothalamica anterior' TA terimi değil. TA2: area hypothalamica anterior (ilgili ad: supraoptic hypothalamic area); TA98: area hypothalamica rostralis. fn doğru."
},
"kd:preoptic region of hth": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.407: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.407%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Preoptic_area",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:tuberal region of hth": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5724): https://ta2viewer.openanatomy.org/ ; TA98 A14.1.08.920: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.920%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Hypothalamus",
"not": "'Regio hypothalamica intermedia' yerine TA98/TA2 terimi 'area hypothalamica intermedia' (eşanlamlı: tuberal hypothalamic area). fn doğru."
},
"kd:white matter of forebrain": {
"durum": "ta_disi",
"kaynak": "FIPAT TA2 (kimlik 5573): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0019261",
"not": "TA'da 'önbeyin ak maddesi' için tek terim yok; TA2 'substantia alba telencephali' ve 'substantia alba diencephali' diye ayırır. 'Substantia alba cerebri' kabul edilebilir bir tanımlama; fn beyin yarımküreleri ak maddesini doğru anlatıyor."
},
"kd:fornix of brain": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5633): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Fornix_(neuroanatomy)",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:mammillothalamic tract": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.671: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.671%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Mammillothalamic_tract",
"not": "TA98 yazımı 'mammillothalamicus', TA2 yazımı 'mamillothalamicus'; ikisi de geçerli."
},
"kd:anterior horn of lateral ventricle": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.273: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.273%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002651 ; https://en.wikipedia.org/wiki/Lateral_ventricles",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:body of lateral ventricle": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.274: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.274%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lateral_ventricles",
"not": "Latince ad doğru. fn'de gövde yalnız parietal lobda gösterilmişti; kaynağa göre gövde frontal ve parietal loblar içindedir."
},
"kd:posterior horn of lateral ventricle": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.286: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.286%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Choroid_plexus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:inferior horn of lateral ventricle": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.287: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.287%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lateral_ventricles",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:third ventricle": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5769): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002286",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:cerebellar vermis": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5819): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cerebellar_vermis",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:cerebellar deep nuclei": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.07.406: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.07.406%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Deep_cerebellar_nuclei",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:white matter of hindbrain": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.07.418: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.07.418%20Entity%20TA98%20EN.htm ; FIPAT TA2 (kimlik 5841): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0019258 ; https://en.wikipedia.org/wiki/Arbor_vitae_(anatomy)",
"not": "'Corpus medullare cerebelli' TA'da yalnız serebellumun ak maddesidir; modeldeki ad ise arka beynin (rhombencephalon: pons, bulbus, serebellum) ak maddesi (UBERON 0019258). Latince ad ve açıklama genişletildi; 'substantia alba rhombencephali' TA dışı bir tanımlamadır. Anatomi hocasına soru: modeldeki bu parça yalnız serebellumun ak maddesini mi gösteriyor, yoksa pons ve bulbustaki lif demetlerini de kapsıyor mu? Yalnız serebellumsa eski ad (corpus medullare cerebelli) korunabilir."
},
"kd:olfactory tract": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5539): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Olfactory_tract",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:triangular part of inferior frontal gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5450): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Broca's_area",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:opercular part of inferior frontal gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5452): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Broca's_area",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:gyrus rectus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5462): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Straight_gyrus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:medial orbital gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.216: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.216%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002570 ; https://en.wikipedia.org/wiki/Orbitofrontal_cortex",
"not": "TA yalnız çoğul 'gyri orbitales' verir; 'gyrus orbitalis medialis' UBERON eşanlamlısı ve yazında yaygın. Kabul edilebilir."
},
"kd:intermediate orbital gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.216: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.216%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002644",
"not": "TA yalnız 'gyri orbitales' verir; ara orbital girus Allen atlasına özgü. Tanımlama kabul edilebilir; fn genel orbitofrontal işlevle uyumlu, bu alt girusa özgü kaynak yok."
},
"kd:lateral orbital gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.216: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.216%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002564 ; https://en.wikipedia.org/wiki/Orbitofrontal_cortex",
"not": "TA yalnız 'gyri orbitales' verir; 'gyrus orbitalis lateralis' UBERON eşanlamlısı. Kabul edilebilir."
},
"kd:anterior segment of paracentral lobule": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.210: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.210%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Paracentral_lobule",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:frontal operculum": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.112: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.112%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002947",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:supraparietal lobule": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5476): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Superior_parietal_lobule",
"not": "Modeldeki 'supraparietal lobule' adı superior parietal lobule'ün karşılığıdır."
},
"kd:supramarginal gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5473): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Supramarginal_gyrus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:angular gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5472): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002686 ; https://en.wikipedia.org/wiki/Angular_gyrus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:precuneus cortex": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5479): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Precuneus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:paracentral lobule caudal part": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.222: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.222%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Paracentral_lobule",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:occipitotemporal fusiform gyrus temporal part": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.227: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.227%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0022395 ; https://en.wikipedia.org/wiki/Fusiform_gyrus",
"not": "Girusun kendisi TA'da var (gyrus occipitotemporalis lateralis = fusiform girus; TA2 eşanlamlısı gyrus fusiformis); temporal/oksipital bölüm ayrımı Allen atlasına özgü. Kabul edilebilir."
},
"kd:transverse temporal gyrus heschls gyrus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.140: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.140%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Transverse_temporal_gyrus",
"not": "TA çoğul verir (gyri temporales transversi)."
},
"kd:planum temporale": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.143: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.143%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Planum_temporale",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:temporal pole": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5420): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002576",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:planum polare": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0023861",
"not": "TA98/TA2'de 'planum polare' yok (yalnız planum temporale var); ad yazında yerleşik, UBERON'da var. Kabul edilebilir."
},
"kd:occipital pole": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5421): https://ta2viewer.openanatomy.org/ ; https://radiopaedia.org/articles/occipital-pole",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:cuneus cortex": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5485): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cuneus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:lingual gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5487): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Lingual_gyrus ; https://en.wikipedia.org/wiki/Optic_radiation",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:occipital fusiform gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.227: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.227%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0022364",
"not": "Fusiform girusun oksipital bölümü Allen atlasına özgü ayrım; tanımlama kabul edilebilir. fn genel görsel asosiasyon işleviyle uyumlu."
},
"kd:inferior occipital gyrus": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0014608 ; https://en.wikipedia.org/wiki/Occipital_gyri",
"not": "TA98'de yok; TA2 yalnız 'gyri occipitales superiores' ve 'gyri occipitales laterales' verir. 'Gyrus occipitalis inferior' UBERON eşanlamlısı ve yazında yaygın. Kabul edilebilir."
},
"kd:superior occipital gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5481): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002948 ; https://en.wikipedia.org/wiki/Occipital_gyri",
"not": "TA2 çoğul verir (gyri occipitales superiores); tekil biçim UBERON eşanlamlısı."
},
"kd:anterior cingulate gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.231: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.231%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002756 ; https://en.wikipedia.org/wiki/Anterior_cingulate_cortex",
"not": "TA yalnız 'gyrus cinguli' verir; ön/arka ayrımı TA dışı. Tanımlama kabul edilebilir (UBERON eşanlamlısı: gyrus cinguli anterior)."
},
"kd:posterior cingulate gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.231: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.231%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002740 ; https://en.wikipedia.org/wiki/Posterior_cingulate_cortex",
"not": "TA yalnız 'gyrus cinguli' verir; ön/arka ayrımı TA dışı. Tanımlama kabul edilebilir."
},
"kd:isthmus of cingulate gyrus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5514): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002738",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:subcallosal area": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5509): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Subcallosal_area",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:anterior parahippocampal gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.234: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.234%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0022383 ; https://en.wikipedia.org/wiki/Entorhinal_cortex",
"not": "TA yalnız 'gyrus parahippocampalis' verir; ön/arka ayrımı TA dışı. Tanımlama kabul edilebilir."
},
"kd:posterior parahippocampal gyrus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.234: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.234%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002657 ; https://en.wikipedia.org/wiki/Parahippocampal_gyrus",
"not": "TA yalnız 'gyrus parahippocampalis' verir; ön/arka ayrımı TA dışı. Tanımlama kabul edilebilir."
},
"kd:gyrus ambiens": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5516): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0036164 ; https://en.wikipedia.org/wiki/Uncus",
"not": "TA2'de 'gyrus ambiens' uncus maddesinin ilgili adı olarak geçer; ayrı kodu yok."
},
"kd:head of hippocampus": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.09.323: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.323%20Entity%20TA98%20EN.htm ; http://purl.org/sig/ont/fma/fma275036",
"not": "TA yalnız 'pes hippocampi' verir; baş/gövde/kuyruk ayrımı FMA ve radyoloji kullanımıdır. Tanımlama kabul edilebilir."
},
"kd:body of hippocampus": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma275030 ; https://en.wikipedia.org/wiki/Hippocampus",
"not": "TA'da 'corpus hippocampi' yok; FMA'ya özgü ayrım. Tanımlama kabul edilebilir. Anterograd amnezi bilgisi teyit edildi."
},
"kd:tail of hippocampus": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma275042",
"not": "TA'da 'cauda hippocampi' yok; FMA'ya özgü ayrım. Tanımlama kabul edilebilir."
},
"kd:long insular gyri": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5506): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Insular_cortex",
"not": "TA tekil verir (gyrus longus insulae); modeldeki ad çoğul."
},
"kd:short insular gyri": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5504): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Insular_cortex",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:limen insula": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5503): https://ta2viewer.openanatomy.org/ ; https://radiopaedia.org/articles/limen-insulae",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:pretectal region": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5739): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Pupillary_light_reflex",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:substantia nigra": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5881): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002038",
"not": "Latince ad doğru. Yer tarifi kesinleştirildi: substantia nigra crus cerebri'nin arkasında, tegmentumun önündedir. TA'da pedunculus cerebri substantia nigra'yı da içerdiği için 'pedunculus cerebri'nin arkasında' ifadesi yanıltıcıydı."
},
"kd:cerebral peduncle": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.06.004: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.004%20Entity%20TA98%20EN.htm ; FIPAT TA2 (kimlik 5878): https://ta2viewer.openanatomy.org/ ; https://acikders.ankara.edu.tr/mod/resource/view.php?id=71055 ; https://en.wikipedia.org/wiki/Cerebral_peduncle",
"not": "Türkçe ad yanlıştı: 'beyin sapı' tıp eğitiminde truncus encephali'nin (mesencephalon + pons + bulbus) adıdır, pedunculus cerebri'nin değil. Latince ad doğru. fn'e, inen lifleri taşıyan ön parçanın crus cerebri olduğu eklendi."
},
"kd:superior cerebellar peduncle brachium conjunctivum": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5846): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Superior_cerebellar_peduncle",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:cerebral aqueduct": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5910): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cerebral_aqueduct",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:paravermis of cerebellum": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0027285 ; https://en.wikipedia.org/wiki/Anatomy_of_the_cerebellum",
"not": "TA'da paravermis için terim yok. 'Pars intermedia hemispherii cerebelli' kabul edilebilir bir tanımlama. İşlev (spinoserebellum, ara bölge) teyit edildi."
},
"kd:lateral hemisphere of cerebellum": {
"durum": "ta_disi",
"kaynak": "TA98 A14.1.07.004: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.07.004%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0014644",
"not": "TA yalnız 'hemispherium cerebelli' verir; lateral bölüm ayrımı TA dışı. Tanımlama kabul edilebilir."
},
"kd:pontine nuclear group": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5926): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002151",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:pontine tegmentum": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5929): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Pontine_tegmentum",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:pyramidal part of medulla oblongata": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5985): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Medullary_pyramids_(brainstem)",
"not": "Wikipedia çaprazlaşma oranını yaklaşık %90 verir; %85-90 ile uyumlu."
},
"kd:tegmentum of medulla oblongata": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Medulla_oblongata",
"not": "TA98/TA2'de 'tegmentum medullae oblongatae' yok (tegmentum yalnız pons ve mesencephalon için tanımlı). Allen atlasına özgü bölge adı; tanımlama kabul edilebilir."
},
"kd:inferior olive": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6021): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Inferior_olivary_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:middle cerebellar peduncle": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5848): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Middle_cerebellar_peduncle",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:central canal of medulla oblongata": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 6127): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Central_canal",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:midline nuclear complex": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.08.627: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.627%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Midline_nuclear_group",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:lateral olfactory gyrus": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.09.220: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.220%20Entity%20TA98%20EN.htm ; http://purl.obolibrary.org/obo/UBERON_0002590",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:parietal operculum": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5468): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002911",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:optic radiation": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5584): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Optic_radiation",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:posteroventral putamen": {
"durum": "ta_disi",
"kaynak": "FIPAT TA2 (kimlik 5566): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Putamen",
"not": "Putamen TA terimi; arka-alt bölüm ayrımı Allen atlasına özgü. Tanımlama kabul edilebilir."
},
"kd:atrium of lateral ventricle": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5643): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Choroid_glomus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:paracingulate gyrus": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0022398 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC5307317/",
"not": "TA'da yok. 'Gyrus paracingularis' kabul edilebilir bir tanımlama. Herkeste bulunmadığı teyit edildi (yarımkürelerin yaklaşık %30-70'inde, solda daha sık)."
},
"kd:rostral gyrus": {
"durum": "dogrulandi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0019280 ; https://radiopaedia.org/articles/rostral-gyrus",
"not": "TA'da yok; 'gyrus rostralis' TA dışı ama kabul edilebilir bir tanımlama. Yer tarifi kaynağa göre düzeltildi: rostral girus gyrus rectus'un hemen üstünde, ona paralel uzanır."
},
"kd:frontomarginal gyrus": {
"durum": "ta_disi",
"kaynak": "http://purl.org/sig/ont/fma/fma274504 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC6887966",
"not": "TA'da yok; FMA'da var. Frontal kutbun alt kenarında, orbital yüzeye geçişte yer aldığı kaynakla uyumlu. Tanımlama kabul edilebilir."
},
"kd:frontal pole": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5419): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0002795",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:inferior cerebellar peduncle": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5850): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Inferior_cerebellar_peduncle",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:perirhinal gyrus rostral part of fugt": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Perirhinal_cortex",
"not": "Allen atlasına özgü ad (fusiform girusun temporal bölümünün ön parçası). TA'da yok; 'cortex perirhinalis' (Wikipedia: area perirhinalis) kabul edilebilir."
},
"kd:piriform region": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0002590 ; https://en.wikipedia.org/wiki/Uncus",
"not": "TA'da 'regio piriformis' yok; Allen atlasına özgü bölge adı. Tanımlama kabul edilebilir."
},
"kd:red nucleus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5898): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Red_nucleus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:subthalamic nucleus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5709): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Subthalamic_nucleus ; https://en.wikipedia.org/wiki/Hemiballismus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:mammillary region of hth": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5731): https://ta2viewer.openanatomy.org/ ; TA98 A14.1.08.933: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.933%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Mammillary_body",
"not": "'Regio hypothalamica posterior' yerine TA98/TA2 terimi 'area hypothalamica posterior' (eşanlamlı: mamillary hypothalamic area). fn doğru."
},
"kd:midbrain tegmentum": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5885): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Midbrain_tegmentum",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:c1 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Suboccipital_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur. C1'in dermatomu olmadığı ve subokcipital kasları çalıştırdığı teyit edildi."
},
"kd:c2 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Greater_occipital_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c3 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Phrenic_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c4 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Phrenic_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c5 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Brachial_plexus ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c6 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c7 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:c8 segment of cervical spinal cord": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.014: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Cervical_spinal_nerve_8",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta cervicalia [1-8]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:first thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Brachial_plexus ; https://en.wikipedia.org/wiki/Lateral_grey_column",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:second thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:third thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Intercostal_nerves",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:fourth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://learning.medicine.wsu.edu/gross-anatomy/textbook/13-intro-thoracic-cavity/autonomic-innervation",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur. Kalbe giden sempatik lifler için kaynaklar T1-T4 (bazıları T1-T5) verir."
},
"kd:fifth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Thoracic_splanchnic_nerves",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:seventh thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur. Uluslararası standartta xiphoid düzeyi T6'dır; T7 onun biraz altındadır. Cümle 'yakındır' dediği için doğru."
},
"kd:eighth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:sixth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur. Uluslararası standartta xiphoid düzeyi T6'dır."
},
"kd:ninth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:tenth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://gpnotebook.com/pages/gastroenterology/clinical-features/symptoms",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:eleventh thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:twelfth thoracic spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.015: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Subcostal_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta thoracica [1-12]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:first lumbar spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.016: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Cremasteric_reflex",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta lumbalia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:second lumbar spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.016: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Myotome ; https://en.wikipedia.org/wiki/Sympathetic_nervous_system",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta lumbalia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur. Sempatik çıkış T1-L2 (bazı kaynaklarda L3) arasıdır."
},
"kd:third lumbar spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.016: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta lumbalia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:fourth lumbar spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.016: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Patellar_reflex ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta lumbalia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur. Patella refleksi L2-L4 üzerinden çalışır; ana segment L4."
},
"kd:fifth lumbar spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.016: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta lumbalia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:first sacral spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.017: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.017%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Ankle_jerk_reflex ; https://en.wikipedia.org/wiki/Myotome",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta sacralia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:second sacral spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.017: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.017%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Pelvic_splanchnic_nerves ; https://en.wikipedia.org/wiki/Pudendal_nerve",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta sacralia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:third sacral spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.017: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.017%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy)",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta sacralia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:fourth sacral spinal cord segment": {
"durum": "dogrulandi",
"kaynak": "TA98 A14.1.02.017: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.017%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dermatome_(anatomy) ; https://en.wikipedia.org/wiki/Spinal_cord_injury",
"not": "TA tek tek segmentleri değil toplu biçimi verir (segmenta sacralia [1-5]); numaralı tekil ad bundan türetilmiştir ve doğrudur."
},
"kd:tendon of quadriceps femoris": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 2621): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Quadriceps_tendon",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:basal plate": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Basal_plate_(placenta)",
"not": "Plasenta yapıları TA'da değil, embriyoloji terminolojisinde (Terminologia Embryologica) yer alır. Wikipedia/Gray Latince adı 'lamina basalis' olarak verir; 'placentae' eki ayırt etmek için eklenmiş, kabul edilebilir. Not: UBERON'da 'basal plate' adı sinir borusu bazal plağı için de kullanılır; buradaki plasenta bazal plağıdır. fn kaynakla uyumlu."
},
"kd:chorionic plate": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0004027 ; https://en.wikipedia.org/wiki/Placenta",
"not": "Plasenta yapıları TA kapsamı dışında (embriyoloji terimi). 'Lamina chorionica' kabul edilebilir bir ad. fn UBERON tanımıyla uyumlu."
},
"kd:placenta vessels": {
"durum": "ta_disi",
"kaynak": "https://en.wikipedia.org/wiki/Placenta",
"not": "TA karşılığı yok; 'vasa placentae' dilbilgisi olarak doğru bir tanımlama. fn doğru."
},
"kd:amnion": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0000305 ; https://en.wikipedia.org/wiki/Amnion",
"not": "TA kapsamı dışında (embriyoloji terimi); 'amnion' adı doğru ve yerleşik."
},
"kd:umbilical cord": {
"durum": "ta_disi",
"kaynak": "http://purl.obolibrary.org/obo/UBERON_0002331 ; https://en.wikipedia.org/wiki/Umbilical_cord",
"not": "TA kapsamı dışında (embriyoloji terimi); 'funiculus umbilicalis' Wikipedia ve UBERON'da Latince ad olarak geçer. fn doğru."
},
"kd:umbilical artery": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 4316): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Umbilical_artery",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:umbilical vein": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 5103): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Umbilical_vein",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:vagina": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3523): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Rectouterine_pouch ; https://en.wikipedia.org/wiki/Vagina",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:cervicovaginal junction": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3511): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Cervix",
"not": "'Portio vaginalis cervicis' TA'da serviksin vajinaya uzanan bölümünün kendisidir, birleşim yerinin değil. Birleşim için TA terimi yok; 'junctio cervicovaginalis' TA dışı bir tanımlamadır. fn doğru. Anatomi hocasına soru: modeldeki bu parça serviks-vajina birleşim çizgisini mi, yoksa serviksin vajinal bölümünün (portio) tamamını mı gösteriyor? İkincisiyse eski ad korunmalı."
},
"kd:ampulla of uterine tube": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3491): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Fallopian_tube ; https://en.wikipedia.org/wiki/Ectopic_pregnancy",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:isthmus of uterine tube": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3492): https://ta2viewer.openanatomy.org/ ; https://www.ncbi.nlm.nih.gov/books/NBK547660/",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:fimbria of uterine tube": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3489): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Fallopian_tube",
"not": "TA çoğul verir (fimbriae tubae uterinae)."
},
"kd:infundibulum of uterine tube": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3488): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0003984",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:uterovesical pouch": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3724): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Vesicouterine_pouch",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:round ligament of uterus": {
"durum": "dogrulandi",
"kaynak": "TA98 A09.1.03.029: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.1.03.029%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Round_ligament_of_uterus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:uterosacral ligament": {
"durum": "dogrulandi",
"kaynak": "TA98 A09.1.03.032: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.1.03.032%20Entity%20TA98%20EN.htm ; FIPAT TA2 (kimlik 3840): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Uterosacral_ligament",
"not": "TA98: lig. rectouterinum; TA2: lig. uterosacrale. İkisi de verilmiş, doğru."
},
"kd:cardinal ligament": {
"durum": "dogrulandi",
"kaynak": "TA98 A09.1.03.031: https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.1.03.031%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cardinal_ligament",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:suspensory ligament of ovary": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3805): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Suspensory_ligament_of_ovary ; https://www.ncbi.nlm.nih.gov/books/NBK559235/",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:ovarian ligament": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3834): https://ta2viewer.openanatomy.org/ ; https://www.ncbi.nlm.nih.gov/books/NBK499943/ ; https://en.wikipedia.org/wiki/Ovarian_ligament",
"not": "TA98: lig. ovarii proprium; TA2 ana terimi 'ligamentum proprium ovarii' (aynı ad, sözcük sırası farklı). 'İçinde damar taşımaz' bilgisi StatPearls ile teyit edildi; bazı kaynaklar a. uterina'nın over dalının bağın yakınından geçtiğini yazar, çelişki değil."
},
"kd:broad ligament of uterus": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3800): https://ta2viewer.openanatomy.org/ ; https://en.wikipedia.org/wiki/Broad_ligament_of_the_uterus",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"kd:mesosalpinx": {
"durum": "dogrulandi",
"kaynak": "FIPAT TA2 (kimlik 3802): https://ta2viewer.openanatomy.org/ ; http://purl.obolibrary.org/obo/UBERON_0012331",
"not": "Latince ad ve açıklama kaynakla uyumlu."
},
"uzun-kamis-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.041%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body ; https://sozluk.gov.tr/",
"not": "TDK: 'kamış kemiği' = fibula. Kas adı bu kemik adından türetilmiş; kas adının kendisi için Türkçe kaynak bulunamadı."
},
"kisa-kamis-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.042%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body ; https://sozluk.gov.tr/",
"not": "TDK: 'kamış kemiği' = fibula. Kas adı bu kemik adından türetilmiş; kas adının kendisi için Türkçe kaynak bulunamadı."
},
"ucuncu-kamis-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.039%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body ; https://sozluk.gov.tr/",
"not": "TDK: 'kamış kemiği' = fibula. Kas adı bu kemik adından türetilmiş; kas adının kendisi için Türkçe kaynak bulunamadı."
},
"arka-kaval-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.051%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body ; https://sozluk.gov.tr/",
"not": "TDK: 'kaval kemiği' = tibia. Ad bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"kurek-kaldirici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.3.01.009%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kurek-alti": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"iliotibial": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.03.003%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Iliotibial_tract",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kol-doner-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.039%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kucuk-kalca": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ara-genis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.022%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ince-kas": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.030%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"yari-kirisli": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.035%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"yari-zarli": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.036%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"uzun-yaklastirici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.026%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kisa-yaklastirici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.027%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-yaklastirici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.028%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"en-ic-kaburgalar-arasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.4.01.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince çoğul (Musculi intercostales ...; her yanda 11 kas). Türkçe ad tekil; 'kaslar' yazılabilir. Hata değil."
},
"diken-alti": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"diken-ustu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.006%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-yuvarlak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kucuk-yuvarlak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-eskenar": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.3.01.007%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kucuk-eskenar": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.3.01.008%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"platisma": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.2.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Platysma_muscle",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"iliak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.003%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"armut": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-duz-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-duz-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ic-duz-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dis-duz-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.013%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-egik-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-egik-goz": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.019%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"yuzeysel-bukucu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.033%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"derin-bukucu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.036%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"parmak-acici": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.042%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"uzun-avuc": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.029%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Palmaris_longus_muscle",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"yuvarlak-ice-dondurucu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.025%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kare-ice-dondurucu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.6.02.038%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"disa-dondurucu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.0.00.026%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"diz-arkasi-kasi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.050%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Popliteus_muscle",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"fasya-geren": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.7.02.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"papiller": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Papillary_muscle ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.1.00.022%20Entity%20TA98%20EN.htm ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince doğru (TA çoğul verir: Musculi papillares; tekil uygun). Türkçe 'Meme kası' adı için kaynak bulunamadı ve göğüs/meme ile karışır; Türkçe ders kitabı 'papiller kas' kullanıyor."
},
"omur-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.08.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Vertebral_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"baziler": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.081%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Basilar_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"colyak": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Celiac_artery",
"not": "'Karın aortasının ilk büyük dalı' ifadesi Wikipedia ile aynı (first major branch)."
},
"ust-mezenter-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.053%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_mesenteric_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-mezenter-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.069%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Inferior_mesenteric_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dalak-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.040%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Splenic_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dis-iliak-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/External_iliac_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ic-iliak-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.15.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Internal_iliac_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"on-kaval-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.042%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Anterior_tibial_artery ; https://sozluk.gov.tr/",
"not": "TDK: 'kaval kemiği' = tibia. Ad bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"arka-kaval-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.055%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Posterior_tibial_artery ; https://sozluk.gov.tr/",
"not": "TDK: 'kaval kemiği' = tibia. Ad bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"ayak-sirti-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.16.048%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Dorsalis_pedis_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"karaciger-arter": {
"durum": "belirsiz",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.015%20Entity%20TA98%20EN.htm ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.12.029%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Hepatic_artery_proper",
"not": "Terminologia Anatomica'da tek başına 'Arteria hepatica' yok; iki ayrı damar var: 'Arteria hepatica communis' (çölyak gövdeden çıkan ortak dal) ve 'Arteria hepatica propria' (karaciğere giren asıl dal). Açıklama ikisine de uyar. Anatomi hocasına soru: Modeldeki parça çölyak gövdeden çıkan ortak dal mı, yoksa karaciğer kapısına giren asıl dal mı? Buna göre ad 'communis' ya da 'propria' olmalı."
},
"on-beyin-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.022%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Anterior_cerebral_artery",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"orta-beyin-arter": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.2.07.046%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Middle_cerebral_artery ; https://en.wikipedia.org/wiki/Middle_cerebral_artery_syndrome",
"not": "'İnmelerde en sık tıkanan atardamar' ifadesi kaynakla uyumlu (MCA is the most common site for ischemic stroke)."
},
"koltukalti-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.08.005%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Axillary_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"sefalik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.08.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cephalic_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"bazilik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.08.018%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Basilic_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kucuk-safen": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.11.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Small_saphenous_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"diz-arkasi-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.11.028%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Popliteal_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"karaciger-ven": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Hepatic_veins ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.09.005%20Entity%20TA98%20EN.htm",
"not": "TA çoğul verir: Venae hepaticae (dextra, intermedia, sinistra). Tekil genel ad uygun."
},
"dalak-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.12.028%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Splenic_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"azigos": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.07.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Azygos_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"koroner-sinus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.01.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Coronary_sinus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"buyuk-kalp-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.01.003%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Great_cardiac_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ortak-iliak-ven": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/12.3.10.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Common_iliac_vein",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"amigdala": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.402%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Amygdala ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"presantral": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.119%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Precentral_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"postsantral": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.128%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Postcentral_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"insula": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.149%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Insular_cortex",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"gorme-caprazi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.403%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Optic_chiasm",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"gorme-yolu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.404%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Optic_tract",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"troklear": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.011%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Trochlear_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"oftalmik": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Ophthalmic_nerve ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.016%20Entity%20TA98%20EN.htm",
"not": "Latince doğru (TA98: Nervus ophthalmicus [Va; V1]). Türkçe 'Göz siniri' adı için kaynak bulunamadı; 'görme siniri' (n. opticus) ile karışabilir. Türkçe ders kitabı Latince adı kullanıyor; 'Oftalmik sinir' daha güvenli bir ad olur."
},
"kuyruklu-cekirdek": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.502%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Caudate_nucleus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"putamen": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.507%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Putamen ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"su-yolu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.501%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cerebral_aqueduct",
"not": "TA98: Aqueductus mesencephali; Aqueductus cerebri. Girdi doğru."
},
"karinciklar-arasi-delik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.411%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Interventricular_foramina_(neuroanatomy)",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"omurilik-kanali": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.02.019%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Central_canal",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-temporal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.138%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_temporal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-frontal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.121%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_frontal_gyrus ; https://en.wikipedia.org/wiki/Supplementary_motor_area",
"not": "Ek motor alanın yarım kürenin iç (orta hat) yüzünde, birincil motor korteksin önünde olduğu kaynakta yazıyor; üst alın kıvrımının iç yüzüne denk gelir."
},
"orta-frontal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.118%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Middle_frontal_gyrus ; https://en.wikipedia.org/wiki/Frontal_eye_fields",
"not": "Frontal göz alanı kaynakta orta alın kıvrımı ile merkez önü kıvrımının kesişiminde tarif ediliyor; girdiyle uyumlu."
},
"alt-frontal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.113%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Inferior_frontal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"orbital-girus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.216%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Orbital_gyri",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"orta-temporal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.146%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Middle_temporal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-temporal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.148%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Inferior_temporal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"fusiform": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Fusiform_gyrus ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.227%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "TA98 resmî adı 'Gyrus occipitotemporalis lateralis'; 'Gyrus fusiformis' TA2'de ilgili terim olarak ve Wikipedia'da eş ad olarak geçiyor. Yaygın kullanılan ad, kabul edilebilir."
},
"parahipokampal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.234%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Parahippocampal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"singulat": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.231%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cingulate_cortex",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-parietal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.130%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_parietal_lobule",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"supramarjinal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.131%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Supramarginal_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"angular": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.124%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Angular_gyrus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ic-kapsul": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.524%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Internal_capsule",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"globus-pallidus": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Globus_pallidus ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "TA2'de 'Globus pallidus' var; TA98 yalnız iki parçasını verir (Globus pallidus lateralis / medialis)."
},
"forniks": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.949%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Fornix_(neuroanatomy) ; https://en.wikipedia.org/wiki/Papez_circuit",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"forniks-komissuru": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Fornix_(neuroanatomy) ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.571%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf ; https://norosirurji.dergisi.org/pdf.php?id=1997",
"not": "Latince kabul edilebilir: TA ana terimi 'Commissura hippocampi', 'Commissura fornicis' TA2'de eş ad. Türkçe 'çapraz' yanlış karşılık: çapraz, liflerin karşıya geçtiği yer (chiasma, decussatio) için kullanılır; commissura iki yanı birleştiren bağlantıdır. Türkçe kaynaklar 'komissür' kullanıyor."
},
"on-komissur": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.421%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Anterior_commissure ; https://norosirurji.dergisi.org/pdf.php?id=1997 ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince ve açıklama doğru. Türkçe 'Ön çapraz' yanıltıcı: Türkçe ders kitabında 'ön çapraz' diz eklemindeki ön çapraz bağ için kullanılıyor; commissura için Türkçe kaynaklar 'anterior komissür / ön komissür' diyor."
},
"arka-komissur": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.416%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Posterior_commissure ; https://norosirurji.dergisi.org/pdf.php?id=1997 ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince ve açıklama doğru (TA98: Commissura posterior; Commissura epithalamica). Türkçe 'Arka çapraz' yanıltıcı: 'arka çapraz' dizdeki arka çapraz bağın adıdır; commissura için Türkçe kaynaklar 'posterior komissür / arka komissür' diyor."
},
"stria-terminalis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.275%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Stria_terminalis",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"septum": {
"durum": "belirsiz",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.262%20Entity%20TA98%20EN.htm ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.09.443%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf ; https://en.wikipedia.org/wiki/Septal_area",
"not": "'Septum telencephali' TA98'de de TA2'de de yok. TA'da iki ayrı terim var: 'Septum pellucidum' (yan karıncıkların ön boynuzları arasındaki ince bölme) ve 'Area septalis / Nuclei septales' (septum çekirdekleri). Açıklama ikisini birlikte anlatıyor. Anatomi hocasına soru: Model parçası yalnız saydam bölme mi (o zaman 'Septum pellucidum / Saydam bölme'), yoksa septum çekirdeklerini de içeren bölge mi ('Area septalis')?"
},
"lamina-terminalis": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.419%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lamina_terminalis ; https://radiopaedia.org/articles/lamina-terminalis?lang=gb",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"koroid-pleksus": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.05.715%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Choroid_plexus",
"not": "TA98 'Plexus choroideus'; TA2 ana yazım 'Plexus chorioideus', 'choroideus' eş yazım. Girdi doğru."
},
"yan-dizcik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.302%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lateral_geniculate_nucleus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ic-dizcik": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.303%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Medial_geniculate_nucleus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"habenula": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.003%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Habenula ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"stria-medullaris": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.106%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Stria_medullaris",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"memecik-cisim": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Mammillary_body ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.402%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "Yazım iki sürümde farklı: TA98 'Corpus mammillare' (çift m), TA2 (2019) 'Corpus mamillare' (tek m). Girdideki yazım güncel TA2 ile aynı; değiştirmeye gerek yok."
},
"tuber-cinereum": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.08.408%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Tuber_cinereum",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"beyin-sapi-ayagi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.004%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cerebral_peduncle",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ayaklar-arasi-cukur": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Interpeduncular_fossa",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-tumsek": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.015%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_colliculus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-tumsek": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.014%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Inferior_colliculus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ust-tumsek-kolu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.013%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Superior_colliculus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"alt-tumsek-kolu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.06.012%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Inferior_colliculus",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"beyincik-cadiri": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.1.01.104%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Cerebellar_tentorium",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"okulomotor-ust": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Oculomotor_nerve ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.008%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "TA2'de tam olarak 'Ramus superior nervi oculomotorii'; TA98'de N. oculomotorius altında 'R. superior'."
},
"okulomotor-alt": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Oculomotor_nerve ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.009%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "TA2'de tam olarak 'Ramus inferior nervi oculomotorii'; TA98'de N. oculomotorius altında 'R. inferior'."
},
"frontal-sinir": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.020%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Frontal_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"supraorbital": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.021%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Supraorbital_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"supratroklear": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.024%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Supratrochlear_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"lakrimal-sinir": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.018%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lacrimal_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"nazosiliyer": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.025%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Nasociliary_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"infratroklear": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.035%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Infratrochlear_nerve",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"on-etmoidal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.030%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Anterior_ethmoidal_nerve ; https://sozluk.gov.tr/",
"not": "TDK: 'kalbur kemiği' = os ethmoidale. Sinir adı bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"arka-etmoidal": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.028%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Posterior_ethmoidal_nerve ; https://sozluk.gov.tr/",
"not": "TDK: 'kalbur kemiği' = os ethmoidale. Sinir adı bu kemik adından türetilmiş; birebir Türkçe kaynak bulunamadı."
},
"uzun-siliyer": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.027%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Long_ciliary_nerves",
"not": "Latince çoğul (Nervi ciliares longi; 2-3 sinir). Türkçe ad tekil yazılmış; 'Uzun siliyer sinirler' daha tutarlı olur. Hata değil."
},
"kisa-siliyer": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.3.02.005%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Short_ciliary_nerves",
"not": "Latince çoğul (Nervi ciliares breves). Türkçe ad tekil yazılmış; 'Kısa siliyer sinirler' daha tutarlı olur. Hata değil."
},
"siliyer-gangliyon": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.3.02.003%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ciliary_ganglion",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"siliyer-bag-dali": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Roots_of_the_ciliary_ganglion ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/14.2.01.026%20Entity%20TA98%20EN.htm ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf ; https://en.wikipedia.org/wiki/Ciliary_ganglion",
"not": "Açıklamada yön ters: duyu lifleri burun-siliyer sinirinden gangliyona değil, göz küresinden gelip gangliyondan (sinaps yapmadan) geçerek burun-siliyer sinirine gider. Latince: 'Ramus communicans cum ganglio ciliari' 1998 basılı TA98'deki addır; TA98'in güncel çevrim içi listesi ve TA2 bunu değiştirdi: 'Ramus ganglionicus ciliaris nervi nasociliaris', eş ad 'Radix sensoria ganglii ciliaris'. Latince ad bırakılabilir ya da 'Radix sensoria ganglii ciliaris' yapılabilir."
},
"on-kamara": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Anterior_chamber_of_eyeball ; https://sozluk.gov.tr/",
"not": "TDK: 'ön oda: gözde saydam tabaka ile iris arasında kalan boşluk'. Latince: TA98 'Camera anterior', TA2 'Camera anterior bulbi oculi'; 'Camera anterior bulbi' ikisinin arasında, kabul edilebilir."
},
"gozyasi-bezi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.057%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lacrimal_gland ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Kaynakta 'gözyaşı bezi (gl. lacrimalis)' olarak geçiyor."
},
"gozyasi-kesesi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.068%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lacrimal_sac ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Kaynakta 'gözyaşı kesesi (saccus lacrimalis)' olarak geçiyor."
},
"gozyasi-burun": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.070%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Nasolacrimal_duct ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Türkçe ders kitabı 'gözyaşı kanalı (ductus nasolacrimalis)' diyor; 'Gözyaşı-burun kanalı' birebir çeviri, kaynağı bulunamadı ama anlam doğru."
},
"siliyer-tac": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.03.010%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Ciliary_body ; https://cdn.dal.ca/content/dam/dalhousie/pdf/library/FIPAT/TA2/FIPAT-TA2-Part-5.pdf",
"not": "TA2: Corona ciliaris (eş ad: Pars plicata corporis ciliaris). Göz sıvısını siliyer çıkıntıların salgıladığı kaynakta yazıyor."
},
"zonul": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.05.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Zonule_of_Zinn ; https://en.wikipedia.org/wiki/Accommodation_(vertebrate_eye)",
"not": "Siliyer kas kasılınca zonül gerginliğinin azaldığı ve merceğin kalınlaştığı kaynakta yazıyor."
},
"gozyasi-kanalcigi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.066%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lacrimal_canaliculi",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"gozyasi-golu": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.063%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Lacrimal_lake ; https://www.elsevier.com/resources/anatomy/eye-accessory-visual-structures/micro-anatomy/medial-angle-of-eye/15800",
"not": "Elsevier anatomi kaynağı girdiyle aynı tanımı veriyor (iç göz köşesini göz küresinden ayıran, gözyaşıyla dolu küçük üçgen alan). Wikipedia farklı tanımlıyor (alt konjonktiva çıkmazındaki gözyaşı havuzu); klasik anatomi tanımı girdideki."
},
"tarsal-plak": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Tarsus_%28eyelids%29 ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.038%20Entity%20TA98%20EN.htm ; https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.039%20Entity%20TA98%20EN.htm",
"not": "'Tarsus palpebrae' Terminologia Anatomica'da yok; terimler 'Tarsus superior' (üst kapak) ve 'Tarsus inferior' (alt kapak). Türkçe addaki 'kıkırdak' yanlış izlenim veriyor: yapı kıkırdak değil sıkı bağ dokusudur (açıklama bunu doğru söylüyor). Meibom bezleri bilgisi doğru."
},
"bobrek": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/08.1.01.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Kidney ; https://sozluk.gov.tr/",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"epididim": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.3.02.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Epididymis",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"sperm-kanali": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.3.05.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Vas_deferens ; https://oys.ataaof.edu.tr/kisaozetpdf/51884-kisaozet.pdf",
"not": "Kaynakta 'sperm kanalları' olarak geçiyor. İnce ayrıntı: kanal doğrudan üretraya değil, meni kesesi kanalıyla birleşip boşalma kanalını (ductus ejaculatorius) oluşturur; o da üretraya açılır. Cümle sadeleştirme olarak doğru."
},
"meni-kesesi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/09.3.06.001%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Seminal_vesicles",
"not": "TA98 üç eş ad verir: Glandula vesiculosa; Glandula seminalis; Vesicula seminalis. TA2 ana terimi 'Glandula seminalis' yaptı (organ depo değil bez olduğu için). Girdideki ad geçerli eş ad."
},
"deri": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.00.002%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Skin ; https://sozluk.gov.tr/",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"dudak": {
"durum": "dogrulandi",
"kaynak": "https://en.wikipedia.org/wiki/Lip ; https://sozluk.gov.tr/",
"not": "Terminologia Anatomica çoğul verir: Labia oris; tekil 'Labium oris' dilbilgisi olarak doğru."
},
"sac": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/16.0.00.016%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Hair ; https://sozluk.gov.tr/",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kas-kil": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/15.2.07.023%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Eyebrow ; https://sozluk.gov.tr/",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"ak-cizgi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/04.5.01.022%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Linea_alba_%28abdomen%29",
"not": "Latince ad TA98 ile birebir eşleşti; açıklama kaynakla tutarlı."
},
"kemikler-arasi-zar": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/03.0.00.007%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Interosseous_membrane ; https://en.wikipedia.org/wiki/Interosseous_membrane_of_forearm",
"not": "TA genel terimi 'Membrana interossea'; özel adlar: Membrana interossea antebrachii (önkol) ve cruris (bacak)."
},
"ses-bagi": {
"durum": "dogrulandi",
"kaynak": "https://ifaa.unifr.ch/Public/EntryPage/TA98%20Tree/Entity%20TA98%20EN/06.2.09.025%20Entity%20TA98%20EN.htm ; https://en.wikipedia.org/wiki/Vocal_cords ; https://openaccess.acibadem.edu.tr/bitstreams/ca01456a-6dce-4471-9caa-d22397f58f28/download",
"not": "Latince doğru (TA98: Lig. vocale). Türkçe ders kitabı aynı yapıya 'ses telleri' diyor: 'ligamentum vocale (ses telleri)'. 'Ses bağı' birebir çeviri; kaynağı bulunamadı ama anlam doğru."
}
};
