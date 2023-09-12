let count = 1
document.getElementById("radio1").checked = true

setInterval(function(){

next();

},5000)


function next(){

    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true

}