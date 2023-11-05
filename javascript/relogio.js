function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();

document.querySelector('#horas').innerHTML=h
separator.textContent = ":"

document.querySelector("#minutos").innerHTML=m
separator2.textContent = ":"

document.querySelector("#segundos").innerHTML=s
setTimeout('time()',1000);
}
