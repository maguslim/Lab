const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// difinindo o maximo de pontos registrados
const MAX_HIGH_SCORES = 6;

finalScore.innerText = mostRecentScore + "pts";
// funcao para evitar de salver um registro sem nome
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// funcao para salvar os pontos registrados
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    // difinindo o maximo de pontos mostrados na tela
    highScores.splice(6);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/html/highscores.html');
};