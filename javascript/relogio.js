function time()
{
today=new Date();
h=today.getHours().toString().padStart(2, '0');
m=today.getMinutes().toString().padStart(2, '0');
s=today.getSeconds().toString().padStart(2, '0');

document.querySelector('#horas').innerHTML=h
separator.textContent = ":"

document.querySelector("#minutos").innerHTML=m
separator2.textContent = ":"

document.querySelector("#segundos").innerHTML=s
setTimeout('time()',1000);
}
