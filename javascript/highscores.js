//mostrando os pontos na tela

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHighScoresButton = document.getElementById("clear")

updateHighScoresList();

clearHighScoresButton.addEventListener("click", clearHighScores);

function updateHighScoresList() {
    highScoresList.innerHTML = highScores
        .map(score => {
            return `<li class="high-score">${score.name} - ${score.score}</li>`;
        })
        .join("");
}

function clearHighScores() {
    localStorage.removeItem("highScores");
    highScores.length = 0; // Limpar o array
    updateHighScoresList(); 
}
