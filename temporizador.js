const btn = document.getElementById("startBtn");
const contador = document.getElementById("contador");
const video = document.getElementById("video");
const videoContainer = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  let tiempo = 5;
  contador.textContent = tiempo;

  const intervalo = setInterval(() => {
    tiempo--;
    if (tiempo > 0) {
      contador.textContent = tiempo;
    } else {
      clearInterval(intervalo);
      contador.textContent = "DESPEGUE 🚀";
      contador.classList.add("despegue");
      videoContainer.style.display = "block";
      video.play();
    }
  }, 1000);
});