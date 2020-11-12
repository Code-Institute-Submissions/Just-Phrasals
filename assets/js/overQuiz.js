// Questions array containing Over quiz questions and answers

const overQuizQuestions = [
    
    // Question 1 
    {
        question: "Why did Frank show up late and miss the meeting?",
        answers: [
            { text: "He ran into a friend", correct: true },
            { text: "He got into fight", correct: false },
            { text: "His car broke down", correct: false },
        ],
    },

    // Question 2 
    {
        question: "When will Frank look over the meeting notes?",
        answers: [
            { text: "Tomorrow", correct: false },
            { text: "Before lunch", correct: true },
            { text: "In the evening", correct: false },
        ],
    },

    // Question 3
    {
        question: "Why did negotiations break down in the meeting?",
        answers: [
            { text: "Because of an argument", correct: true },
            { text: "Because Frank arrived late", correct: false },
            { text: "Because Frank didn't show up", correct: false },
        ],
    },

    // Question 4
    {
        question: "How long has the president wanted to take over the other company?",
        answers: [
            { text: "Twenty years", correct: false },
            { text: "Six months", correct: false },
            { text: "Five years", correct: true },
        ],
    },

    // Question 5
    {
        question: "What did Linda find out about the president?",
        answers: [
            { text: "He's sick", correct: false },
            { text: "He's suffering from stress", correct: true },
            { text: "He's going to retire", correct: false },
        ],
    },

    // Question 6
    {
        question: "Who is going to take over for the president?",
        answers: [
            { text: "Frank", correct: false },
            { text: "The vice president", correct: false },
            { text: "His son", correct: true },
        ],
    },

    // Question 7
    {
        question: "What are they giving out at the café downstairs?",
        answers: [
            { text: "Free bagels", correct: true },
            { text: "Free coffee", correct: false },
            { text: "Free donuts", correct: false },
        ],
    },

]


let overQuizQuestion = document.getElementById("over-quiz-question")
let overOptionOne = document.getElementById("over-option-one")
let overOptionTwo = document.getElementById("over-option-two")
let overOptionThree = document.getElementById("over-option-three")
let overQuestionNumber = document.getElementById("over-question-number")
let overQuizTick = document.getElementById("over-quiz-tick")
let lastAnswer = document.getElementById("last-answer")
let nextButton = document.getElementById("next-button")

let index = 0

window.addEventListener("DOMContentLoaded", function(){
    overQuizQuestion.innerHTML = overQuizQuestions[index].question
    overOptionOne.innerHTML = overQuizQuestions[index].answers[0].text
    overOptionTwo.innerHTML = overQuizQuestions[index].answers[1].text
    overOptionThree.innerHTML = overQuizQuestions[index].answers[2].text
    overQuestionNumber.innerHTML = 1
});

function overOptionOneClicked() {
    if (overQuizQuestions[index].answers[0].correct == true) {
        overOptionOne.classList.add("correctButton")
        overQuizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Well Done! Next</span>`
    } else {
        overOptionOne.classList.add("wrongButton")
    }

}

function overOptionTwoClicked() {
    if (overQuizQuestions[index].answers[1].correct == true) {
        overOptionTwo.classList.add("correctButton")
        overQuizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Well Done! Next</span>`
    } else {
        overOptionTwo.classList.add("wrongButton")
    }
}


function overOptionThreeClicked() {
    if (overQuizQuestions[index].answers[2].correct == true) {
        overOptionThree.classList.add("correctButton")
        overQuizTick.innerHTML = `<i class="fas fa-check-circle"></i> <span>Well Done! Next</span>`
    } else {
        overOptionThree.classList.add("wrongButton")
    }
}


function  incrementIndex() {overQuestionNumber.innerHTML = index + 1}


function question() {
    index ++
    console.log(index)

    incrementIndex()
    
    overOptionOne.classList.remove("correctButton")
    overOptionOne.classList.remove("wrongButton")
    overOptionTwo.classList.remove("correctButton")
    overOptionTwo.classList.remove("wrongButton")
    overOptionThree.classList.remove("correctButton")
    overOptionThree.classList.remove("wrongButton")
    overQuizTick.innerHTML = ""

    overQuizQuestion.innerHTML = overQuizQuestions[index].question
    overOptionOne.innerHTML = overQuizQuestions[index].answers[0].text
    overOptionTwo.innerHTML = overQuizQuestions[index].answers[1].text
    overOptionThree.innerHTML = overQuizQuestions[index].answers[2].text

    if (index === overQuizQuestions.length - 1 ) {
        lastAnswer.innerHTML = `<a href="signup.html" target="_blank"><button class="btn btn-sm buttons green-buttons">Move onto Next Exercise</button></a>`
        nextButton.innerHTML = ""
        
    }
}

