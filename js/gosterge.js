// Canlandırmaların göstergeleri: basınç, hacim ve ses.
// Kural: ekrandaki her rakam, modeli hareket ettiren aynı fonksiyondan okunur; böylece gösterge ile hareket birbirini tutar.
// Değerler dinlenmedeki sağlıklı bir erişkin için tipik ders kitabı değerleridir (şematik).
const ara = (a, b, k) => a + (b - a) * k, yum = k => k * k * (3 - 2 * k);

// p: kalp döngüsündeki yer (0-1). 0-0,22 kulakçık kasılması; 0,22-0,27 eş hacimli kasılma; 0,27-0,60 atım; 0,60-0,66 eş hacimli gevşeme; 0,66-1 dolum.
export function kalpModel(p) {
  let lvp, hacim;
  if (p < 0.22) { const k = p / 0.22; lvp = 7 + 4 * Math.sin(Math.PI * k); hacim = ara(105, 120, yum(k)); }
  else if (p < 0.27) { lvp = ara(8, 80, yum((p - 0.22) / 0.05)); hacim = 120; }
  else if (p < 0.6) { const k = (p - 0.27) / 0.33; lvp = ara(80, 100, k) + 30 * Math.sin(Math.PI * k); hacim = ara(120, 50, yum(k)); }
  else if (p < 0.66) { lvp = ara(100, 6, yum((p - 0.6) / 0.06)); hacim = 50; }
  else { const k = (p - 0.66) / 0.34; lvp = ara(6, 7, k); hacim = 50 + 55 * (1 - Math.pow(1 - k, 2.2)); }
  const aort = p >= 0.27 && p < 0.6;
  const aop = aort ? lvp - 2 : ara(100, 80, (((p - 0.6) % 1) + 1) % 1 / 0.67);
  return { lvp, aop, hacim, mitral: p < 0.22 || p >= 0.66, aort };
}

// p: solunum döngüsündeki yer (0-1); 0-0,45 nefes alma. k: göğsün genişleme oranı (0-1).
export function solunumModel(p, k) {
  return { hacim: 500 * k, alveol: p < 0.45 ? -Math.sin((Math.PI * p) / 0.45) : Math.sin((Math.PI * (p - 0.45)) / 0.55), plevra: -5 - 2.5 * k };
}

// Bir döngünün eğrilerini çizer ve o andaki yeri dikey çizgiyle gösterir. seriler: [{ f(p), min, max, renk }]
export function egriCiz(tuval, seriler, p) {
  const o = Math.min(devicePixelRatio || 1, 2), g = tuval.clientWidth, y = tuval.clientHeight;
  if (tuval.width !== Math.round(g * o)) { tuval.width = Math.round(g * o); tuval.height = Math.round(y * o); }
  const c = tuval.getContext('2d'); c.setTransform(o, 0, 0, o, 0, 0); c.clearRect(0, 0, g, y);
  c.strokeStyle = '#d9dee4'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, y - 0.5); c.lineTo(g, y - 0.5); c.stroke();
  for (const s of seriler) {
    c.strokeStyle = s.renk; c.lineWidth = 1.8; c.beginPath();
    for (let n = 0; n <= 120; n++) { const d = s.f(n / 120), py = y - 4 - ((d - s.min) / (s.max - s.min)) * (y - 8); n ? c.lineTo((n / 120) * g, py) : c.moveTo(0, py); }
    c.stroke();
  }
  c.strokeStyle = '#ff8a00'; c.lineWidth = 2; c.beginPath(); c.moveTo(p * g, 0); c.lineTo(p * g, y); c.stroke();
}

// Sesler tarayıcıda üretilir; kayıt dosyası yoktur.
export class Ses {
  constructor() { this.ac = new (window.AudioContext || window.webkitAudioContext)(); }
  // Kısa, pes bir vuruş (kalp sesi).
  vurus(frekans, sure, siddet) {
    const t = this.ac.currentTime, o = this.ac.createOscillator(), k = this.ac.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(frekans * 1.5, t); o.frequency.exponentialRampToValueAtTime(frekans, t + sure * 0.6);
    k.gain.setValueAtTime(0.0001, t); k.gain.exponentialRampToValueAtTime(siddet, t + 0.012); k.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    o.connect(k).connect(this.ac.destination); o.start(t); o.stop(t + sure + 0.02);
  }
  // Sürekli hava sesi; siddet 0-1 arası hava akışına göre verilir.
  nefes(siddet) {
    if (!this.hava) {
      const n = this.ac.sampleRate * 2, tampon = this.ac.createBuffer(1, n, this.ac.sampleRate), d = tampon.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      const kaynak = this.ac.createBufferSource(), suzgec = this.ac.createBiquadFilter(); this.hava = this.ac.createGain();
      kaynak.buffer = tampon; kaynak.loop = true; suzgec.type = 'bandpass'; suzgec.frequency.value = 700; suzgec.Q.value = 0.6; this.hava.gain.value = 0;
      kaynak.connect(suzgec).connect(this.hava).connect(this.ac.destination); kaynak.start();
    }
    this.hava.gain.setTargetAtTime(siddet * 0.25, this.ac.currentTime, 0.06);
  }
  kapat() { this.ac.close(); }
}
