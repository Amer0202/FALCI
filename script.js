if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.log('Service Worker registration failed:', err));
}
const cameraScreen = document.getElementById('cameraScreen');
const loadingScreen = document.getElementById('loadingScreen');
const falScreen = document.getElementById('falScreen');
const video = document.getElementById('video');
const captureBtn = document.getElementById('captureBtn');
const photosPreview = document.getElementById('photosPreview');
const falYorum = document.getElementById('falYorum');
const backBtn = document.getElementById('backBtn');

let photos = [];

// Kamera başlat
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
});

// Fotoğraf çek
captureBtn.addEventListener('click', () => {
  if (photos.length >= 4) return alert("Tüm fotoğraflar çekildi!");
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video,0,0);
  const imgData = canvas.toDataURL('image/jpeg');
  photos.push(imgData);
  const img = document.createElement('img');
  img.src = imgData;
  photosPreview.appendChild(img);

  if (photos.length === 4) showLoading();
});

// Yükleniyor animasyonu
function showLoading() {
  cameraScreen.classList.remove('active');
  loadingScreen.classList.add('active');
  setTimeout(() => showFal(), 4000); // 4 saniye animasyon
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
});

// Fal üretici
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