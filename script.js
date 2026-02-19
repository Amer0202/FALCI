const cameraScreen = document.getElementById('cameraScreen');
const loadingScreen = document.getElementById('loadingScreen');
const falScreen = document.getElementById('falScreen');
const video = document.getElementById('video');
const captureBtn = document.getElementById('captureBtn');
const photosPreview = document.getElementById('photosPreview');
const falYorum = document.getElementById('falYorum');
const backBtn = document.getElementById('backBtn');

let photos = [];

// Service Worker register (en üstte)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.log('Service Worker registration failed:', err));
}

// Kamera başlat
function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
      video.srcObject = stream;
      video.onloadedmetadata = () => video.play();
    })
    .catch(err => {
      console.log("Arka kamera açılırken hata, fallback ön kamera:", err);
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => { video.srcObject = stream; video.onloadedmetadata = () => video.play(); });
    });
}

// Reset kamera ve fotoğraflar
function resetCamera() {
  photos = [];
  photosPreview.innerHTML = '';
  captureBtn.disabled = false;
  startCamera();
  updateCaptureHint();
}

// Fotoğraf çekme
captureBtn.addEventListener('click', () => {
  if (photos.length >= 4) return alert("Tüm fotoğraflar çekildi!");
  if (!video.srcObject) return alert("Kamera açılmadı, sayfayı yenileyin!");

  // Her seferinde yeni canvas
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  const imgData = canvas.toDataURL('image/jpeg');
  photos.push(imgData);

  const img = document.createElement('img');
  img.src = imgData;
  photosPreview.appendChild(img);

  updateCaptureHint();

  if (photos.length === 4) showLoading();
});

// Fotoğraf çekim hint mesajı
function updateCaptureHint() {
  switch(photos.length) {
    case 0: captureBtn.textContent = "Fincan içi - 1. açı"; break;
    case 1: captureBtn.textContent = "Fincan içi - 2. açı"; break;
    case 2: captureBtn.textContent = "Fincan içi - 3. açı"; break;
    case 3: captureBtn.textContent = "Fincan altı (tabak)"; break;
  }
}

// Yükleniyor animasyonu
function showLoading() {
  cameraScreen.classList.remove('active');
  loadingScreen.classList.add('active');
  setTimeout(showFal, 4000); // 4 saniye bekle
}

// Fal motoru
function showFal() {
  loadingScreen.classList.remove('active');
  falScreen.classList.add('active');
  falYorum.innerHTML = generateLongFal();
}

// Geri butonu
backBtn.addEventListener('click', () => {
  falScreen.classList.remove('active');
  cameraScreen.classList.add('active');
  resetCamera();
});

// Fal üretici (500+ kelime)
function generateLongFal() {
  let sentences = [...falParagraflari];
  let fal = "";
  while (fal.split(" ").length < 500 && sentences.length > 0) {
    const idx = Math.floor(Math.random() * sentences.length);
    const s = sentences.splice(idx,1)[0];
    fal += s + " ";
  }
  return fal.trim();
}

// Başlangıçta kamera aç
resetCamera();