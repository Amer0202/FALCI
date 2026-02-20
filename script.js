const video = document.getElementById("video");
const fotoBtn = document.getElementById("foto-cek");
const fotolarContainer = document.getElementById("fotolar-container");
const falBtn = document.getElementById("fal-olustur");
const falAnimasyon = document.getElementById("fal-animasyon");
const falModal = document.getElementById("fal-modal");
const falIcerik = document.getElementById("fal-icerik");
const kapatFal = document.getElementById("kapat-fal");

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
  falModal.style.display = "none";

  setTimeout(() => {
    falAnimasyon.style.display = "none";
    falModal.style.display = "flex";
    falIcerik.textContent = falUret();
  }, 5000);
});

kapatFal.addEventListener("click", () => {
  falModal.style.display = "none";
});