const startBtn = document.getElementById("start-btn");
const screens = document.querySelectorAll(".screen");
const photoScreen = document.getElementById("photo-screen");
const camera = document.getElementById("camera");
const captureBtn = document.getElementById("capture-btn");
const previews = document.getElementById("previews");
const photoInstruction = document.getElementById("photo-instruction");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");
const finalFal = document.getElementById("final-fal");
const newFalBtn = document.getElementById("new-fal-btn");

let currentPhoto = 0;
let photos = [];
const photoPrompts = [
  "Fincanı üstten çek",
  "Fincanı sağ açıdan çek",
  "Fincanı sol açıdan çek",
  "Fincan tabağını çek"
];

// -------------------------
// 1️⃣ Uzun Fal Cümleleri Havuzu
// -------------------------
const falParagraflari = [
  "Sebiha, fincanındaki yoğun telve ve küçük dairesel şekiller, evdeki huzur ve düzenin artacağını gösteriyor. Enerji akışı bugün oldukça dengeli.",
  "Telvede beliren kıvrımlar, hayatında bazı konuların kapanacağını ve yeni başlangıçların geleceğini işaret ediyor.",
  "Fincandaki küçük lekeler, beklenmedik sürprizleri ve mutluluk verici olayları simgeliyor.",
  "Bugün sezgilerin oldukça güçlü; küçük işaretler ve detaylar hayatına yön verecek.",
  "Fincanda görülen ışık ve gölgeler, ruhsal olarak farkındalığını artırıyor ve sana sakinlik kazandırıyor.",
  "Telvede belirgin bir yol ve yıldız şekilleri, önümüzdeki günlerde beklenmedik bir fırsatın habercisi.",
  "Fincandaki desenler, geçmişte kalan meselelerin çözülmesine ve ruhsal olarak rahatlamana yardımcı olacak.",
  "Bugün küçük ama anlamlı değişiklikler yapman, hayatına bereket ve pozitif enerji getirecek.",
  "Telvede beliren çizgiler ve zikzaklar, seni daha dikkatli ve sabırlı olmaya yönlendiriyor.",
  "Fincandaki yoğun telve, beklenmedik gelişmelerin ve güzel sürprizlerin habercisi.",
  "Ruhsal olarak farkındalığın artıyor; telvede görünen semboller sana rehberlik edecek.",
  "Fincanda görünen minik ışık oyunları, küçük ama etkili değişikliklerin işareti.",
  "Bugün iç sesine kulak ver; küçük işaretler ve semboller sana doğru yolu gösterecek.",
  "Telvede beliren şekiller, hayatındaki belirsizlikleri aydınlatacak ve farkındalık kazandıracak.",
  "Fincandaki küçük daireler, enerjini yükseltecek ve moralini artıracak.",
  "Bugün yaşadığın küçük olaylar, gelecekteki fırsatlar için ipuçları taşıyor.",
  "Telvede beliren karmaşık çizgiler, sabır ve dikkat gerektiren durumları simgeliyor ama sonunda netlik ve huzur gelecek.",
  "Fincandaki semboller, hayatındaki küçük sürprizlerin ve mutluluk verici gelişmelerin göstergesi.",
  "Ruhsal olarak yoğun bir dönemden geçiyor olabilirsin; telvede görünen işaretler güç ve destek veriyor.",
  "Fincandaki çizgiler ve şekiller, yeni başlangıçların habercisi; dikkatli adımlar atmalısın.",
  "Bugün küçük sürprizler kapını çalabilir; açık fikirli ve farkında ol.",
  "Telvede beliren kıvrımlar, ruhsal olarak güç kazanmanı ve hayatına denge getirmeni sağlıyor.",
  "Fincandaki ışıklar ve gölgeler, beklenmedik haberler ve güzel gelişmelerin habercisi.",
  "Bugün farkındalığın yüksek; küçük detaylara dikkat etmek, hayatını kolaylaştıracak.",
  "Telvede görülen şekiller, geçmişten kalan meselelerin kapanmasını ve yeni fırsatların açılmasını simgeliyor.",
  "Ruhsal olarak kendini dengeli ve odaklanmış hissedeceksin; küçük mutluluklar enerji verecek.",
  "Fincandaki yoğun desenler, hayatındaki karmaşıklıkları çözmene yardımcı olacak.",
  "Bugün aldığın küçük kararlar, önümüzdeki günlerde hayatına olumlu yansıyacak.",
  "Telvede beliren küçük ışıklar, beklenmedik ama hoş bir haberin işareti olabilir.",
  "Fincandaki şekiller, hayatındaki belirsizlikleri aydınlatacak ve farkındalık kazandıracak.",
  "Bugün ruhsal olarak daha sakin ve farkında hissedeceksin; küçük detayları gözden kaçırma.",
  "Telvede görünen karmaşık çizgiler, dikkatli ve sabırlı olmanı gerektiriyor ama sonunda huzur kazanacaksın.",
  "Fincandaki semboller, hayatında beklenmedik sürprizler ve mutluluk verici gelişmeler getirecek.",
  "Ruhsal olarak kendini daha güçlü ve dengeli hissedeceksin; telvede görünen işaretler rehber olacak.",
  "Bugün dikkatli ve farkında ol; küçük semboller ve işaretler sana yol gösterecek.",
  "Telvede beliren desenler, önümüzdeki günlerde yeni başlangıçların ve fırsatların işareti.",
  "Fincandaki küçük şekiller, moralini yükseltecek ve pozitif enerji sağlayacak.",
  "Bugün küçük ama anlamlı olaylar, hayatındaki dengeyi ve huzuru artıracak.",
  "Telvede görünen çizgiler ve şekiller, seni dikkatli olmaya yönlendiriyor ve sabır kazandırıyor.",
  "Fincandaki işaretler, beklenmedik sürprizleri ve güzel gelişmeleri simgeliyor.",
  "Ruhsal olarak farkındalığın yüksek; bugün ve önümüzdeki günlerde olumlu değişiklikler yaşayacaksın.",
  "Fincandaki desenler, hayatındaki belirsizlikleri aydınlatacak ve yeni fırsatların açılmasına yardımcı olacak.",
  "Bugün küçük detaylara dikkat etmen, hayatındaki büyük farkları ortaya çıkaracak.",
  "Telvede beliren ışık ve gölgeler, beklenmedik haberler ve sürpriz gelişmeler getirecek.",
  "Fincandaki çizgiler, ruhsal olarak güç kazanmanı ve hayatına denge getirmeni sağlayacak.",
  "Bugün farkındalık ve dikkat ile hareket etmek, hayatına olumlu etkiler yaratacak.",
  "Telvede görünen semboller, geçmiş meselelerin kapanmasını ve yeni başlangıçların açılmasını simgeliyor.",
  "Fincandaki işaretler, ruhsal olarak dinginlik ve güç kazandıracak ve enerjini yükseltecek.",
  "Bugün küçük sürprizler ve beklenmedik gelişmeler enerjini artıracak ve moral verecek.",
  "Telvede beliren kıvrımlar, hayatındaki karmaşıklıkları çözmeye ve farkındalık kazanmaya yardımcı olacak.",
  "Fincandaki şekiller ve desenler, hayatına yeni fırsatlar ve olumlu değişiklikler getirecek.",
  "Bugün dikkatli ve farkında olmak, telvede görünen sembollerin rehberliğini almanı sağlayacak."
];

// Start buton
startBtn.addEventListener("click", () => {
  showScreen(photoScreen);
  initCamera();
});

// Kamera başlat
async function initCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
  camera.srcObject = stream;
}

// Fotoğraf çek
captureBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = camera.videoWidth;
  canvas.height = camera.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(camera, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL("image/png");
  photos.push(dataURL);

  const img = document.createElement("img");
  img.src = dataURL;
  previews.appendChild(img);

  currentPhoto++;
  if (currentPhoto < photoPrompts.length) {
    photoInstruction.textContent = photoPrompts[currentPhoto];
  } else {
    // Tüm foto çekildi, loading ekranına geç
    showScreen(loadingScreen);
    setTimeout(() => {
      showFal();
    }, 5000); // animasyon süresi (5 dakika gibi hissettirebilir)
  }
});

// Uzun fal üret
function generateLongFal(previousFal = "") {
  const sentences = [...falParagraflari];
  let fal = "";
  while (fal.split(" ").length < 500 && sentences.length > 0) {
    const index = Math.floor(Math.random() * sentences.length);
    const sentence = sentences.splice(index, 1)[0];
    if (!previousFal.includes(sentence)) {
      fal += sentence + " ";
    }
  }
  return fal.trim();
}

// Fal göster
function showFal() {
  showScreen(resultScreen);
  const lastFal = localStorage.getItem("lastFal") || "";
  const yeniFal = generateLongFal(lastFal);
  finalFal.textContent = yeniFal;
  localStorage.setItem("lastFal", yeniFal);
  localStorage.setItem("lastPhotos", JSON.stringify(photos));
}

// Yeni fal
newFalBtn.addEventListener("click", () => {
  photos = [];
  currentPhoto = 0;
  previews.innerHTML = "";
  photoInstruction.textContent = photoPrompts[0];
  showScreen(photoScreen);
});

// LocalStorage ile önceden fal varsa göster
window.addEventListener("load", () => {
  const savedFal = localStorage.getItem("lastFal");
  const savedPhotos = JSON.parse(localStorage.getItem("lastPhotos") || "[]");
  if (savedFal && savedPhotos.length === 4) {
    photos = savedPhotos;
    previews.innerHTML = "";
    photos.forEach(p => {
      const img = document.createElement("img");
      img.src = p;
      previews.appendChild(img);
    });
    finalFal.textContent = savedFal;
    showScreen(resultScreen);
  }
});

function showScreen(screen) {
  screens.forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}