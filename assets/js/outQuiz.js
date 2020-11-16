// Questions array containing quiz questions and answers

const quizQuestions = [
    
    // Question 1 
    {
        question: "After the doctor gave him the anesthetic, he .... in 10 seconds.",
        answers: [
            { text: "passed out", correct: true },
            { text: "set up", correct: false },
            { text: "turned down", correct: false },
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
        question: "The boss is ..... copies of the new company guidelines.",
        answers: [
            { text: "closing down", correct: false },
            { text: "showing up", correct: false },
            { text: "giving out", correct: true },
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
        question: "John has a terrible cough from smoking. What should he do about smoking?",
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
        question: "The police are ..... the murder.",
        answers: [
            { text: "setting up", correct: false },
            { text: "looking into", correct: true },
            { text: "turning into", correct: false },
        ],
    },

    // Question 8
    {
        question: "That pretty girl will give you her phone number. What are you going to do?",
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
        question: "What do people do at the gym?",
        answers: [
            { text: "break into", correct: false },
            { text: "grow up", correct: false },
            { text: "work out", correct: true},
        ],
    },

    // Question 11
    {
        question: "Rita is drinking too much coffee these days. What does she need to do?",
        answers: [
            { text: "cut down", correct: true },
            { text: "pass out", correct: false },
            { text: "hand over", correct: false },
        ],
    },

    // Question 12
    {
        question: "I'm going to .... a new hobbie in the new year.",
        answers: [
            { text: "run out of", correct: false },
            { text: "take up", correct: true },
            { text: "break down", correct: false },
        ],
    },

    // Question 13
    {
        question: "Anita's restaurant business is failing miserably. What should she do?",
        answers: [
            { text: "turn it down", correct: false },
            { text: "break into it", correct: false },
            { text: "close it down", correct: true },
        ],
    },

    // Question 14
    {
        question: "My computer .... because the hard drive was damaged.",
        answers: [
            { text: "broke down", correct: true },
            { text: "gave up", correct: false },
            { text: "passed out", correct: false},
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

];

let quizQuestion = document.getElementById("quiz-question");
let optionOne = document.getElementById("option-one");
let optionTwo = document.getElementById("option-two");
let optionThree = document.getElementById("option-three");
let questionNumber = document.getElementById("question-number");
let quizTick = document.getElementById("quiz-tick");
let lastAnswer = document.getElementById("last-answer");
let nextButton = document.getElementById("next-button");

let index = 0;

window.addEventListener("DOMContentLoaded", function(){
    quizQuestion.innerHTML = quizQuestions[index].question;
    optionOne.innerHTML = quizQuestions[index].answers[0].text;
    optionTwo.innerHTML = quizQuestions[index].answers[1].text;
    optionThree.innerHTML = quizQuestions[index].answers[2].text;
    questionNumber.innerHTML = 1;
});


function optionOneClicked() {
    if (quizQuestions[index].answers[0].correct == true) {
        optionOne.classList.add("correctButton");
        quizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Next!</span>`;
    } else {
        optionOne.classList.add("wrongButton");
    }

}

function optionTwoClicked() {
    if (quizQuestions[index].answers[1].correct == true) {
        optionTwo.classList.add("correctButton");
        quizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Next!</span>`;
    } else {
        optionTwo.classList.add("wrongButton");
    }
}


function optionThreeClicked() {
    if (quizQuestions[index].answers[2].correct == true) {
        optionThree.classList.add("correctButton");
        quizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Next!</span>`;
    } else {
        optionThree.classList.add("wrongButton");
    }
}


function  incrementIndex() {questionNumber.innerHTML = index + 1;}


function nextQuestion() {
    index ++;

    incrementIndex();

    optionOne.classList.remove("correctButton");
    optionOne.classList.remove("wrongButton");
    optionTwo.classList.remove("correctButton");
    optionTwo.classList.remove("wrongButton");
    optionThree.classList.remove("correctButton");
    optionThree.classList.remove("wrongButton");
    quizTick.innerHTML = "";

    quizQuestion.innerHTML = quizQuestions[index].question;
    optionOne.innerHTML = quizQuestions[index].answers[0].text;
    optionTwo.innerHTML = quizQuestions[index].answers[1].text;
    optionThree.innerHTML = quizQuestions[index].answers[2].text;

    if (index === quizQuestions.length -1 ) {
        lastAnswer.innerHTML = `<a href="over.html" class="btn btn-sm buttons green-buttons">Move onto Next Exercise</a>`;
        nextButton.innerHTML = ""
        
    }
}
