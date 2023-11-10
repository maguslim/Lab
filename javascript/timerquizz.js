export default function fadeCounterClockwise(element, duration) {
    let currentAngle = 0;
    const startTime = Date.now();

    function updateBackground() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        currentAngle = (elapsed / (duration * 1000)) * 360;

        const gradient = `conic-gradient(#4f40ff ${currentAngle}deg, transparent ${currentAngle}deg 360deg)`;
        element.style.background = gradient;

        if (currentAngle >= 360) {
            displayCorrectAnswer();
            // Quando atingir 30s, redirecionar para uma nova página
            window.location.href = '/html/quiz.html';
        } else {
            requestAnimationFrame(updateBackground);
        }
    }

    const animationFrame = requestAnimationFrame(updateBackground);
}

const contadorElement = document.getElementById("counter");
fadeCounterClockwise(contadorElement, 10);