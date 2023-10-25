
var campoPostagem = document.querySelector("#corpo-mensagem");
campoPostagem.addEventListener("input", atualiza);


function atualiza() {

    var postagem = document.querySelector("#corpo-mensagem");

    var caracteres = postagem.value.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = "Contador: " + caracteres + " caracteres.";

    if ( caracteres> 0) {

        contador.style.display = "block";
    } else {
        contador.style.display = "none";
    }
}

