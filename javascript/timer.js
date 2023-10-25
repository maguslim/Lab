
const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const btnstart = document.querySelector("#btn-start")
const btnpause = document.querySelector("#btn-pause")
const btncontinue = document.querySelector("#btn-continue")
const btnreset = document.querySelector("#btn-reset")
const separator = document.querySelector("#separator")
const separator2 = document.querySelector("#separator2")


horas.textContent = "00";
minutos.textContent = "00";
segundos.textContent = "00";
btnstart.textContent = "Start";
btnpause.textContent = "Pause";
btncontinue.textContent = "Continue";
btnreset.textContent = "Reset";
separator.textContent = ":"
separator2.textContent = ":"


let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

btnstart.addEventListener("click", toggleTimer);
btnpause.addEventListener("click", toggleTimer);
btncontinue.addEventListener("click", toggleTimer);
btnreset.addEventListener("click", resetTimer);

function toggleTimer() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
        btnstart.style.display = "none";
        btnpause.style.display = "block";
        btncontinue.style.display = "none";
        isPaused = false;
    } else {
        clearInterval(interval);
        interval = null;
        btnstart.style.display = "none";
        btnpause.style.display = "none";
        btncontinue.style.display = "block";
        isPaused = true;
    }
}

function updateTimer() {
    seconds += 10;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    horas.textContent = formatTime(hours);
    minutos.textContent = formatTime(minutes);
    segundos.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    btnstart.style.display = "block";
    btnpause.style.display = "none";
    btncontinue.style.display = "none";
    isPaused = false;
}


// metodo sem otimizar

// function startTimer() {

//     interval = setInterval(() => {

//         if (!isPaused) {

//             seconds += 10

//             if (seconds === 60) {

//                 minutes++;
//                 seconds = 0;
//             }


//             if (minutes === 60) {

//                 hours++;
//                 minutes = 0;
//             }

//             horas.textContent = formatTime(hours);
//             minutos.textContent = formatTime(minutes);
//             segundos.textContent = formatTime(seconds);
//         }


//     }, 1000);

//     btnstart.style.display = "none";
//     btnpause.style.display = "block";
// }

// function formatTime(time) {

//     return time < 10 ? `0${time}` : time;

// }

// function pauseTimer() {

//     isPaused = true;
//     btnpause.style.display = "none";
//     btncontinue.style.display = "block";

// }

// function resumeTimer() {

//     isPaused = false;
//     btnpause.style.display = "block";
//     btncontinue.style.display = "none";
// }

// function resetTimer() {

//     clearInterval(interval);
//     hours = 0;
//     minutes = 0;
//     seconds = 0;

//     horas.textContent = "00";
//     minutos.textContent = "00";
//     segundos.textContent = "00";

//     btnstart.style.display = "block";
//     btnpause.style.display = "none";
//     btncontinue.style.display = "none";
// }