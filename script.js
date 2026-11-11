// Generador de Estrellas Fugaces
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 15; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * -50}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}
createStars();

// Lógica de Cuenta Regresiva
const launchDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 días desde hoy
const audio = document.getElementById('countdown-audio');
const startAudioBtn = document.getElementById('start-audio-btn');
let audioAllowed = false;

// Permiso para reproducir sonido
startAudioBtn.addEventListener('click', () => {
    audioAllowed = true;
    startAudioBtn.textContent = "Secuencia Activada - Sistemas en línea";
    startAudioBtn.style.backgroundColor = "#4CAF50";
    startAudioBtn.style.color = "white";
});

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Reproducir sonido en los últimos 10 segundos si el usuario dio permiso
    if (distance > 0 && distance < 11000 && audioAllowed) {
        if (audio.paused) {
            audio.play();
        }
    }

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2 style='color:#D4AF37;'>¡DESPEGUE EXITOSO!</h2>";
    }
}, 1000);