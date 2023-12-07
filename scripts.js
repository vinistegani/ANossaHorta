const questions = [
    {
        question: "Nasce de flor, revestido por uma casca com espinhos, possui uma coroa.",
        answer: "abacaxi" || "Abacaxi",
        level: "1"
    },
    {
        question: "Não nasce em árvore, por dentro tem uma cor e por fora outra, casca dura",
        answer: "melancia" || "Melancia",
        level: "2"
    },
    {
        question: "Uma das frutas mais citricas do mundo, suco muito consumido, bagaço",
        answer: "Laranja" || "laranja",
        level: "3"
    },
    {
        question: "Faz uma famosa bebida alcoólica, pode ter sementes, é conhecida por ter duas cores",
        answer: "uva" || "Uva",
        level: "4"
    },
    {
        question: "Tem água e tem leite, a casca é dura, vive na praia",
        answer: "Coco" || "coco",
        level: "5"
    },
    {
        question: "É proibida, é do amor, é envenenada",
        answer: "maça" || "Maça",
        level: "6"
    },
    {
        question: "Está sempre no diminutivo, tempera, faz parte da turma da Mônica",
        answer: "Cebolinha" || "cebolinha",
        level: "7"
    },
    {
        question: "Faz doce, carroagem, Halloween",
        answer: "Abóbora" || "abóbora",
        level: "8"
    },
    {
        question: "Diferentes tamanhos, pijamas, Minions",
        answer: "banana" || "Banana",
        level: "9"
    },
    {
        question: "Tem água e tem leite, a casca é dura, vive na praia",
        answer: "envelope",
        level: "10"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.textContent = questions[currentQuestionIndex].question;
    questionContainer.style.fontSize = '30px';
    displayLevel();
}

function displayLevel() {
    const userLevel = document.getElementById("level");
    const levelValue = parseInt(questions[currentQuestionIndex].level, 10);

    userLevel.textContent = levelValue.toString();
    userLevel.style.fontSize = '20px'

    // if (levelValue >= 1 && levelValue <= 10) {
    //     userLevel.style.backgroundColor = getBackgroundColor(levelValue);
    // } else {
    //     userLevel.style.backgroundColor = "white";
    // }
}

function getBackgroundColor(level) {
    switch (level) {
        case 1:
            return "orange";
        case 2:
            return "lightblue";
        case 3:
            return "lightyellow";
        case 4:
            return "white";
        case 5:
            return "#f0d2d3";
        case 6:
            return "#d1bc8a";
        case 7:
            return "#9670e0";
        case 8:
            return "#4f80fc";
        case 9:
            return "#feff00";
        case 10:
            return "#f1331b";
        default:
            return "white";
    }
}

function checkAnswer() {
    // document.getElementById("quiz-container").style.display = "block";
    // document.getElementById("quizmSG").style.display = "none";
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();
    document.getElementById("answer-input").value = '';
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Você acertou ${score} de ${questions.length - 1} charadas!`;

}

displayQuestion();

