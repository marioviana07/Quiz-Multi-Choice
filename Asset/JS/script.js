const startbutton = document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startbutton.addEventListener('click', start)

function start() {
    console.log(questionContainerElement)
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

function resetState() {
    nextbutton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }


}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct



}

const questions = [{
    question: 'What is 10/2?',
    answers: [
        { text: '2', correct: false },
        { text: '5', correct: true }
    ]
}]



// var button = document.querySelector("#start-quiz");

//time
//link high score
//The array of questions for the quiz
// function generatequiz() {
//     var questions = [

//         {
//             q: "What is 2/10?",
//             answer: {
//                 a: '7',
//                 b: '2',
//                 C: '5'
//             },
//             correctAnswer: 'c'

//         },
//         {
//             q: "In What continent is Senegal?",
//             answer: {
//                 a: 'South America',
//                 b: 'Africa',
//                 C: 'Europe'
//             },
//             correctAnswer: 'b'

//         },
//         {
//             q: "How much is 5+5?",
//             answer: {
//                 a: '10',
//                 b: '11',
//                 C: '5'
//             },
//             correctAnswer: 'a'

//         },
//         {
//             q: "What color is the moon?",
//             answer: {
//                 a: 'Yellow',
//                 b: 'White',
//                 C: 'Red'
//             },
//             correctAnswer: 'b'


//         },
//         {
//             q: "How many hours does the day have?",
//             answer: {
//                 a: '12 Hrs.',
//                 b: '18 Hrs.',
//                 C: '24 Hrs.'
//             },
//             correctAnswer: 'c'
//         },


//     ];


//store the answers
//verify the score
//show the results
//done and reset the quiz