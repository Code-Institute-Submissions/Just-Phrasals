// Questions array containing quiz questions and answers

const quizQuestions = [
    
    // Question 1 
    {
        question: "The report has some errors. We need to .... a few more times to find them all.",
        answers: [
            { text: "look over it", correct: true },
            { text: "get over it", correct: false },
            { text: "go into it", correct: false },
        ],
    },

    // Question 2 
    {
        question: "You don't like her offer. What will yo do?",
        answers: [
            { text: "boil over it", correct: false },
            { text: "turn it down", correct: true },
            { text: "get into it", correct: false },
        ],
    },

    // Question 3
    {
        question: "When the boss resigns, a new director will ..... his role:",
        answers: [
            { text: "close down", correct: false },
            { text: "show up", correct: false },
            { text: "take over", correct: true },
        ],
    },

    // Question 4
    {
        question: "When a caterpillar ..... a butterfly, it can fly away:",
        answers: [
            { text: "breaks into", correct: false },
            { text: "goes into", correct: false },
            { text: "turns into", correct: true },
        ],
    },

    // Question 5
    {
        question: "John has an terrible cough from smoking. What should he do?",
        answers: [
            { text: "give up", correct: true },
            { text: "work out", correct: false },
            { text: "go into", correct: false },
        ],
    },

    // Question 6
    {
        question: "You need to ..... more about the problem before we can work it out.",
        answers: [
            { text: "find out", correct: true },
            { text: "watch out", correct: false },
            { text: "run into", correct: false },
        ],
    },

    // Question 7
    {
        question: "The class will soon ...... and you can go home.",
        answers: [
            { text: "close down", correct: false },
            { text: "be over", correct: true },
            { text: "work out", correct: false },
        ],
    },

    // Question 8
    {
        question: "That pretty girl will give you phone number. What are you going to do?",
        answers: [
            { text: "turn it down", correct: false },
            { text: "look it over", correct: false },
            { text: "write it down", correct: true},
        ],
    },

    // Question 9
    {
        question: " You need to .... for cars when you're crossing that busy street",
        answers: [
            { text: "boil over", correct: false },
            { text: "watch out", correct: true },
            { text: "give out", correct: false},
        ],
    },

    // Question 10
    {
        question: "Tensions between South Korea and North Korea could ..... into war.",
        answers: [
            { text: "close down", correct: false },
            { text: "run out", correct: false },
            { text: "boil over", correct: true},
        ],
    },

    // Question 11
    {
        question: "Rita is drinking too much coffee these day. What does she need to do?",
        answers: [
            { text: "cut down", correct: true },
            { text: "pass out", correct: false },
            { text: "hand over", correct: false },
        ],
    },

    // Question 12
    {
        question: "Traders will be happier when the markets .... the finacial crisis.",
        answers: [
            { text: "run out of", correct: false },
            { text: "get over", correct: true },
            { text: "break down", correct: false },
        ],
    },

    // Question 13
    {
        question: "Anita's restaurant business is failing miserably. What should she do to?",
        answers: [
            { text: "turn it down", correct: false },
            { text: "break into it", correct: false },
            { text: "close it down", correct: true },
        ],
    },

    // Question 14
    {
        question: "The president will .... power to the vice-president if he becomes incapacitated.",
        answers: [
            { text: "hand over", correct: true },
            { text: "pass out", correct: false },
            { text: "look into", correct: false},
        ],
    },

    // Question 15
    {
        question: "We're going to ..... stock if we don't order more from the suppliers.",
        answers: [
            { text: "turn down", correct: false },
            { text: "look up", correct: false },
            { text: "run out of", correct: true },
        ],
    },

    // Question 16
    {
        question: "If you don't know the meaning of a word, you should .... in the dictionary.",
        answers: [
            { text: "set it up", correct: false },
            { text: "look it up", correct: true },
            { text: "take it up", correct: false},
        ],
    },

]

let quizQuestion = document.getElementById("quiz-question")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let optionThree = document.getElementById("option-three")

let index = 0

window.addEventListener("DOMContentLoaded", function(){
    quizQuestion.innerHTML = quizQuestions[index].question
    optionOne.innerHTML = quizQuestions[index].answers[0].text
    optionTwo.innerHTML = quizQuestions[index].answers[1].text
    optionThree.innerHTML = quizQuestions[index].answers[2].text
});

function optionOneClicked() {
    if (quizQuestions[index].answers[0].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }

}

function optionTwoClicked() {
    if (quizQuestions[index].answers[1].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
}


function optionThreeClicked() {
    if (quizQuestions[index].answers[2].correct == true) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
}


function  incrementIndex() {console.log(index)}


function nextQuestion() {
    index ++;

    incrementIndex()

    if (index === quizQuestions.length) {
        quizQuestion.innerHTML = quizQuestions[0].question
        optionOne.innerHTML = quizQuestions[0].answers[0].text
        optionTwo.innerHTML = quizQuestions[0].answers[1].text
        optionThree.innerHTML = quizQuestions[0].answers[2].text
    } else {
        quizQuestion.innerHTML = quizQuestions[index].question
        optionOne.innerHTML = quizQuestions[index].answers[0].text
        optionTwo.innerHTML = quizQuestions[index].answers[1].text
        optionThree.innerHTML = quizQuestions[index].answers[2].text
    }
}
