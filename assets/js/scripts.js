// ********* VERBS WITH UP **************

function answerSubmitUp() {

    let upScore = 0

    let answerUpOne = document.getElementById("up-one").value
    let tickUpOne = document.getElementById("tick-up-one")

    // Up Answer One Grows Up

    if (answerUpOne === "grows up") {
        tickUpOne.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpOne.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

      // Up Answer Two Showed Up

    let answerUpTwo = document.getElementById("up-two").value
    let tickUpTwo = document.getElementById("tick-up-two")

    if (answerUpTwo === "showed up") {
        tickUpTwo.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpTwo.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Three Give Up 

    let answerUpThree = document.getElementById("up-three").value
    let tickUpThree = document.getElementById("tick-up-three")

    if (answerUpThree === "give up") {
        tickUpThree.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpThree.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Four Look Up

    let answerUpFour = document.getElementById("up-four").value
    let tickUpFour = document.getElementById("tick-up-four")

    if (answerUpFour === "look up") {
        tickUpFour.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpFour.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

   // Up Answer Five Take Up

    let answerUpFive = document.getElementById("up-five").value
    let tickUpFive = document.getElementById("tick-up-five")

    if (answerUpFive === "Taking up" || answerUpFive === "taking up") {
        tickUpFive.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpFive.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Six Set Up

    let answerUpSix = document.getElementById("up-six").value
    let tickUpSix = document.getElementById("tick-up-six")
   
    if (answerUpSix === "set up") {
        tickUpSix.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
        console.log(upScore)
    } else {
        tickUpSix.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Counting Score Verbs with Up
    
    let marksUp = document.getElementById("marksUp")
    
    if (upScore === 6) {
        marksUp.innerHTML = "Well done! You scored "+ upScore + " out of 6. On to the next excercise!"
    }
    else if (upScore === 5 || upScore === 4) {
        marksUp.innerHTML = "Almost there! You scored "+ upScore + " out of 6. Try again"
    }
    else if (upScore === 3 || upScore === 2) {
        marksUp.innerHTML = "Not great! You scored "+ upScore + " out of 6. Keep trying"
    }
    else if (upScore === 1 || upScore === 0) {
        marksUp.innerHTML = "Poor effort! You scored "+ upScore + " out of 6. Keep trying"
    }
    else {console.log(upScore)}
}