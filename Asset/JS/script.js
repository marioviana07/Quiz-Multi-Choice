//Set all variables
const startbutton = document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
    // Set the buttons start and next
startbutton.addEventListener('click', start)
nextbutton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })
    // setup ours controls
function start() {
    startbutton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')

    setNextQuestion()

}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}
// prepare our screen for the next question
function resetState() {
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Answer the questions
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextbutton.classList.remove('hide')
    } else {
        startbutton.innerText = 'Restart'
        startbutton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


// Array of questions
const questions = [{
        question: 'What is 10/2?',
        answers: [
            { text: '2', correct: false },
            { text: '5', correct: true },
            { text: '10', correct: false },
            { text: '1', correct: false }
        ]
    },

    {
        question: 'In What continent is Senegal?',
        answers: [
            { text: 'South America', correct: false },
            { text: 'Europe', correct: false },
            { text: 'Africa', correct: true },
            { text: 'USA', correct: false }
        ]

    },

    {
        question: 'How much is 5+5?',
        answers: [
            { text: '5', correct: false },
            { text: '2', correct: false },
            { text: '0', correct: false },
            { text: '10', correct: true }
        ]

    },

    {
        question: 'What color is the moon?',
        answers: [
            { text: 'White', correct: true },
            { text: 'Yellow', correct: false },
            { text: 'Red', correct: false },
            { text: 'Black', correct: false }
        ]

    },

    {
        question: 'How many hours does the day have?',
        answers: [
            { text: '12', correct: false },
            { text: '18', correct: false },
            { text: '24', correct: true },
            { text: '21', correct: false }
        ]

    },

]


//timer
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

}