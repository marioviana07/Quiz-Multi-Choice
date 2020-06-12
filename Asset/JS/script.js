var count = 0;
var button = document.querySelector ("#start-quiz");




function showquestions (){

//The array of questions for the quiz

var questions = [

    {
        q: "What is 2/10?",
        answer: {
            a: '7',
            b: '2',
            C: '5'
        },
        correctAnswer: 'c'

    },
    {
        q: "In What continent is Senegal?",
        answer: {
            a: 'South America',
            b: 'Africa',
            C: 'Europe'
        },
        correctAnswer: 'b'

    },
    {
        q: "How much is 5+5?",
        answer: {
            a: '10',
            b: '11',
            C: '5'
        },
        correctAnswer: 'a'

    },
    {
        q: "What color is the moon?",
        answer: {
            a: 'Yellow',
            b: 'White',
            C: 'Red'
        },
        correctAnswer: 'b'


    },
    {
        q: "How many hours does the day have?",
        answer: {
            a: '12 Hrs.',
            b: '18 Hrs.',
            C: '24 Hrs.'
        },
        correctAnswer: 'c'
    },


];

}

button.onclick = showquestions

