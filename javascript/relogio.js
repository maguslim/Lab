//funcao padrao 24 hrs


// function time() 
// {
//     today = new Date()
//     h = today.getHours().toString().padStart(2, '0');
//     m = today.getMinutes().toString().padStart(2, '0');
//     s = today.getSeconds().toString().padStart(2, '0');

//     document.querySelector('#horas').innerHTML = h;
//     separator.textContent = ":";

//     document.querySelector("#minutos").innerHTML = m;
//     separator2.textContent = ":";

//     document.querySelector("#segundos").innerHTML = s;
//     setTimeout('time()', 1000);
// }

// funcao para padrao 12h
function time() {
    const today = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = today.toLocaleTimeString('en', options);

    const [time, period] = formattedTime.split(" ");
    const [hours, minutes, seconds] = time.split(":");
    const secondsWithPeriod = `${seconds} ${period}`;

    document.querySelector('#horas').innerHTML = hours;
    separator.textContent = ":";
    document.querySelector('#minutos').innerHTML = minutes;
    separator2.textContent = ":";
    document.querySelector('#segundos').innerHTML = secondsWithPeriod;

    setTimeout('time()', 1000);
}

time();