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


// ********* VERBS WITH DOWN **************

function answerSubmitDown() {

    let downScore = 0

    // Down Answer One 

    let answerDownOne = document.getElementById("down-one").value
    let tickDownOne = document.getElementById("tick-down-one")

    if (answerDownOne === "Who will write down the main points of the meeting?") {
        tickDownOne.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownOne.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }

    // Down Answer Two 

    let answerDownTwo = document.getElementById("down-two").value
    let tickDownTwo = document.getElementById("tick-down-two")

    if (answerDownTwo === "When did the school close down?") {
        tickDownTwo.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownTwo.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Down Answer Three 

    let answerDownThree = document.getElementById("down-three").value
    let tickDownThree = document.getElementById("tick-down-three")

    if (answerDownThree === "Why did Lisa turn down their job offer?" ||
        answerDownThree === "Why did Lisa turn down the job offer?") 
        {
        tickDownThree.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownThree.innerHTML = `<i class="fas fa-times-circle"></i>`
    }
   
    // Down Answer Four

    let answerDownFour = document.getElementById("down-four").value
    let tickDownFour = document.getElementById("tick-down-four")

    if (answerDownFour === "How many times has your car broken down this year?" ||
        answerDownFour === "How often has your car broken down this year?" ||
        answerDownFour === "How many time has my car broken down this year?" ||
        answerDownFour === "How often has my car broken down this year?")
        {
        tickDownFour.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownFour.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Down Answer Five

    let answerDownFive = document.getElementById("down-five").value
    let tickDownFive = document.getElementById("tick-down-five")

    if (answerDownFive === "How much did oil prices go down last week?" ||
        answerDownFive === "What percentage did oil prices go down last week?") {
        tickDownFive.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownFive.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Down Answer Six

    let answerDownSix = document.getElementById("down-six").value
    let tickDownSix = document.getElementById("tick-down-six")

    if (answerDownSix === "What has Paul cut down on?" ||
        answerDownSix === "What has Paul cut down on?") 
        {
        tickDownSix.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownSix.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Counting up Score Verbs with Down
    
    let marksDown = document.getElementById("marksDown")
    
    if (downScore === 6) {
        marksDown.innerHTML = "Well done! You scored "+ downScore + " out of 6. On to the next excercise!"
    }
    else if (downScore === 5 || downScore === 4) {
        marksDown.innerHTML = "Almost there! You scored "+ downScore + " out of 6. Try again"
    }
    else if (downScore === 3 || downScore === 2) {
        marksDown.innerHTML = "Not great! You scored "+ downScore + " out of 6. Keep trying"
    }
    else if (downScore === 1 || downScore === 0) {
        marksDown.innerHTML = "Poor effort! You scored "+ downScore + " out of 6. Keep trying"
    }
    else {console.log(downScore)}
}


