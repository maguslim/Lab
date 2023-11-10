

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const game = document.getElementById('game');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let questions = [];

// vinculando perguntas json 
fetch('/javascript/questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });


// determinando pontos e quantidades de questoes no quiz
const CORRECT_BONUS = 10;
const INCORRECT_BURDEN = -10;
const MAX_QUESTIONS = 4;
// funcoes de inicializacao do quiz

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');

};



// chamando as quetions para o game
function getNewQuestion() {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/html/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;


    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;

};

// funcao para percorrers as perguntas e verificar se foi respondida corretamente ou nao
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        if (classToApply === 'incorrect') {
            if (score > 0) {
                incrementScore(INCORRECT_BURDEN);
            }
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 300);
    });
});


function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
};


function resetAnswerStyles() {
    choices.forEach((choice) => {
        choice.parentElement.classList.remove('correct', 'incorrect');
    });
}

function showAnswers() {
    const correctAnswer = currentQuestion.answer;

    choices.forEach((choice) => {
        const selectedAnswer = choice.dataset['number'];
        const isCorrect = selectedAnswer === correctAnswer;

        if (isCorrect) {
            choice.parentElement.classList.add('correct');
        } else {
            choice.parentElement.classList.remove('correct');
            choice.parentElement.classList.add('incorrect');
        }
    });
}

function fadeCounterClockwise(element, duration, resetOnComplete = false) {
    let currentAngle = 0;
    let startTime = Date.now();

    function updateBackground() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        currentAngle = (elapsed / (duration * 1000)) * 360;

        const gradient = `conic-gradient(#4f40ff ${currentAngle}deg, transparent ${currentAngle}deg 360deg)`;
        element.style.background = gradient;

        if (currentAngle >= 360) {
            if (resetOnComplete) {
                currentAngle = 0;
                startTime = Date.now();
                requestAnimationFrame(updateBackground);
                showAnswers();


                setTimeout(() => {
                    resetAnswerStyles();
                }, 500);

                setTimeout(() => {
                    getNewQuestion();
                }, 550);


            }


        } else {
            requestAnimationFrame(updateBackground);
        }
    }

    const animationFrame = requestAnimationFrame(updateBackground);
}

const contadorElement = document.getElementById("counter");
fadeCounterClockwise(contadorElement, 30, true);




// API DE TRIVIA


// fetch(
//     'https://opentdb.com/api.php?amount=10&type=multiple'
// )
//     .then((res) => {
//         return res.json();
//     })
//     .then((loadedQuestions) => {
//         questions = loadedQuestions.results.map((loadedQuestion) => {
//             const formattedQuestion = {
//                 question: loadedQuestion.question,
//             };

//             const answerChoices = [...loadedQuestion.incorrect_answers];
//             formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
//             answerChoices.splice(
//                 formattedQuestion.answer - 1,
//                 0,
//                 loadedQuestion.correct_answer
//             );

//             answerChoices.forEach((choice, index) => {
//                 formattedQuestion['choice' + (index + 1)] = choice;
//             });

//             return formattedQuestion;
//         });

//         startGame();
//     })
//     .catch((err) => {
//         console.error(err);
// });