var count = 0;
var button = document.querySelector("#start-quiz");

//time
//link high score
//The array of questions for the quiz
function generatequiz() {
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


    //Get selected answer from current index of the array [i]
    var questionString = questions[0].q;
    var firstAnswer = questions[0].answer.a;
    var secondAnswer = questions[0].answer.b;

    //Display it on HTML page
    document.getElementById("questionBody").innerHTML = questionString;

}
//Call the quetions
generatequiz()

//store the answers
//verify the score
//show the results
//done and reset the quiz