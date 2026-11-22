// Ana modelde (BodyParts3D) iç organ çiziminde ölçülerek bulunan hataların düzeltmesi. Model yüklendikten sonra, ek katmandan önce çalışır.
//
// Enine kolon askısı (Transverse mesocolon): kaynak modelde parça 17×20×13 cm'dir. Köşe noktalarının çoğu y=1,10–1,14 m arasında,
// enine kolonu pankreasın önündeki arka karın duvarına bağlayan asıl askıdadır. Bu bölümden aşağı, leğene doğru (y=0,94–1,09)
// birkaç büyük üçgenden oluşan dikey bir perde iner; çıkan ve inen kolonun arasında ince bağırsakların önünü kapatıyordu.
// Enine mezokolonun böyle bir uzantısı yoktur. Perdeyi oluşturan üçgenler (bir köşesi ESIK'in altında kalanlar) çizimden çıkarılır.
const MEZOKOLON_ESIK = 1.09;

function ucgenAyikla(geometri, kalsin) {
  const p = geometri.attributes.position, eski = geometri.index.array, yeni = [];
  for (let t = 0; t < eski.length; t += 3) if (kalsin(p, eski[t], eski[t + 1], eski[t + 2])) yeni.push(eski[t], eski[t + 1], eski[t + 2]);
  geometri.setIndex(yeni); // düz dizi: three.js uygun dizin özniteliğini kendisi kurar
  geometri.computeBoundingBox(); geometri.computeBoundingSphere();
  // Kutu yalnız kalan üçgenlerden hesaplanır (kullanılmayan köşeler konumda kalır).
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const k of yeni) for (let e = 0; e < 3; e++) { const v = p.getComponent(k, e); min[e] = Math.min(min[e], v); max[e] = Math.max(max[e], v); }
  return [min, max];
}

// g: Goruntuleyici, parcalar: ana.js'deki parça listesi (bounds dizisi atlas.parts ile ortaktır).
export function anaModelDuzelt(g, parcalar) {
  for (const p of parcalar.filter(x => x.en === 'Transverse mesocolon' && g.meshler[x.i]?.geometry.index)) {
    const kutu = ucgenAyikla(g.meshler[p.i].geometry, (pos, a, b, c) => Math.min(pos.getY(a), pos.getY(b), pos.getY(c)) >= MEZOKOLON_ESIK);
    p.bounds[0].splice(0, 3, ...kutu[0]); p.bounds[1].splice(0, 3, ...kutu[1]);
  }
  g._kutu = null; g.kirli = true;
}
