const video = document.getElementById("video");
const fotoBtn = document.getElementById("foto-cek");
const fotolarContainer = document.getElementById("fotolar-container");
const falBtn = document.getElementById("fal-olustur");
const falAnimasyon = document.getElementById("fal-animasyon");
const falSonuc = document.getElementById("fal-sonuc");

let cekilenFotolar = [];

// Kamera başlat
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => { video.srcObject = stream; })
  .catch(err => console.error("Kamera açılmadı: ", err));

// Fotoğraf çek
fotoBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL("image/jpeg");
  cekilenFotolar.push(dataURL);

  const img = document.createElement("img");
  img.src = dataURL;
  fotolarContainer.appendChild(img);

  if (cekilenFotolar.length >= 4) falBtn.disabled = false;
});

// Fal üret
falBtn.addEventListener("click", () => {
  falAnimasyon.style.display = "block";
  falSonuc.style.display = "none";

  setTimeout(() => {
    falAnimasyon.style.display = "none";
    falSonuc.style.display = "block";
    falSonuc.textContent = falUret();
  }, 5000); // 5 saniye bekleme animasyonu
});