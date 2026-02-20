const falHavuzu = {
  saglik: [
    "Sebiha, son günlerde enerjisi düşük hissedebilir ama 3 vakte kadar toparlanacak.",
    "Küçük rahatsızlıklar geçici, eklemlerine ve sindirimine dikkat etmelisin.",
    "Beslenmende sağlıklı seçimler yap, mevsim sebzeleri ve meyveler faydalı olacak.",
    "Uyku düzenine özen göster, dinlenmeye yeterince zaman ayır.",
    "Stresini azaltacak ufak yürüyüşler ve hafif egzersizler moralini yükseltecek.",
    "Göz ve baş ağrıları olabilir, gözlerini dinlendirmek iyi gelecek.",
    "Enerji seviyen düşebilir ama sabırlı olursan toparlanacak.",
    "Vitamin ve mineral eksikliklerine dikkat et, küçük takviyeler yardımcı olacak."
  ],
  para: [
    "Fincanda beliren altın kesesi, önümüzdeki günlerde maddi olarak rahatlayacağını gösteriyor.",
    "Küçük harcamalara dikkat etmelisin, sabırlı ve dikkatli hareket etmek finansal istikrarı sağlayacak.",
    "Borçların azalacak, küçük ödemeleri takip edersen önünü görebileceksin.",
    "Yakın zamanda beklenmedik bir gelir kapısı açılabilir.",
    "Ev ekonomisinde ufak sürprizler seni mutlu edecek.",
    "Fincandaki para sembolü, önümüzdeki günlerde gelir akışının artacağını gösteriyor."
  ],
  evHayati: [
    "Hanende biraz daha sakin olursan her şey düzelecek, aile içindeki gerginlikler azalacak.Hanene huzur gelecek.",
    "Eşinle arandaki ufak pürüzler senin anlayışlı davranışlarınla kısa sürede çözülecek.",
    "Ev işlerinde gösterdiğin titizlik, ailenin güvenini artırıyor.",
    "Fincandaki çiçek tarlası sembolü, evde huzurlu bir dönem yaşayacağını gösteriyor.",
    "Aile içindeki sohbet ve paylaşımlar moralini yükseltecek.",
    "Ev ortamında ufak dekor değişiklikleri iyi gelecek ve enerji akışını artıracak."
  ],
  nazar: [
    "Fincanda beliren nazar boncuğu, küçük aksiliklerden korunduğunu gösteriyor.",
    "Kırmızı kurdele sembolü, negatif enerjilerden uzak duracağını işaret ediyor.",
    "Spiritüel semboller evini ve sevdiklerini korumana işaret ediyor.",
    "Ufak tedirginlikler olabilir ama 3 vakte kadar her şey düzelecek.",
    "Koruyucu semboller, moralini yükseltecek ve huzur verecek."
  ],
  surprizler: [
    "Sabırlı olursan emeklerin karşılıksız kalmayacak, ufak sürprizler kapını çalacak.",
    "Fincandaki yol figürü, yeni fırsatlara işaret ediyor.",
    "Önümüzdeki günlerde beklenmedik güzellikler seni mutlu edecek.",
    "Pozitif düşün ve moralini yüksek tut, güzel gelişmeler seni bekliyor.",
    "Huzurlu günler kapını çalacak, ufak sevinçler hayatına renk katacak."
  ]
};

function rastgeleCümle(seçenekler) {
  return seçenekler[Math.floor(Math.random() * seçenekler.length)];
}

function falUret() {
  const saglikCümleleri = [];
  const paraCümleleri = [];
  const evCümleleri = [];
  const nazarCümleleri = [];
  const surprizCümleleri = [];

  for (let i = 0; i < 3; i++) {
    saglikCümleleri.push(rastgeleCümle(falHavuzu.saglik));
    paraCümleleri.push(rastgeleCümle(falHavuzu.para));
    evCümleleri.push(rastgeleCümle(falHavuzu.evHayati));
    nazarCümleleri.push(rastgeleCümle(falHavuzu.nazar));
    surprizCümleleri.push(rastgeleCümle(falHavuzu.surprizler));
  }

  return [...saglikCümleleri, ...paraCümleleri, ...evCümleleri, ...nazarCümleleri, ...surprizCümleleri].join(" ");
}