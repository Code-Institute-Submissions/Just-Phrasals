// ********* VERBS WITH UP **************

function answerSubmitUp() {

    let upScore = 0

    let answerUpOne = document.getElementById("up-one").value
    let tickUpOne = document.getElementById("tick-up-one")

    // Up Answer One Grows Up

    if (answerUpOne === "grows up" || answerUpOne === "Grows up") {
        tickUpOne.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpOne.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

      // Up Answer Two Showed Up

    let answerUpTwo = document.getElementById("up-two").value
    let tickUpTwo = document.getElementById("tick-up-two")

    if (answerUpTwo === "showed up" || answerUpTwo === "Showed up") {
        tickUpTwo.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpTwo.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Three Give Up 

    let answerUpThree = document.getElementById("up-three").value
    let tickUpThree = document.getElementById("tick-up-three")

    if (answerUpThree === "give up" || answerUpThree === "Give up") {
        tickUpThree.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpThree.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Four Look Up

    let answerUpFour = document.getElementById("up-four").value
    let tickUpFour = document.getElementById("tick-up-four")

    if (answerUpFour === "look up" || answerUpFour === "Look up") {
        tickUpFour.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpFour.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

   // Up Answer Five Take Up

    let answerUpFive = document.getElementById("up-five").value
    let tickUpFive = document.getElementById("tick-up-five")

    if (answerUpFive === "Taking up" || answerUpFive === "taking up") {
        tickUpFive.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpFive.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Up Answer Six Set Up

    let answerUpSix = document.getElementById("up-six").value
    let tickUpSix = document.getElementById("tick-up-six")
   
    if (answerUpSix === "set up"|| answerUpSix === "Set up" ) {
        tickUpSix.innerHTML = `<i class="fas fa-check-circle"></i>`;
        upScore ++;
    } else {
        tickUpSix.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Counting Score Verbs with Up
    
    let marksUp = document.getElementById("marksUp")
    
    if (upScore === 6) {
        marksUp.innerHTML = "Well done! You scored "+ upScore + " out of 6. Click Next excercise!"
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

    if (answerDownOne === "write down" || answerDownOne === "Write down") {
        tickDownOne.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownOne.innerHTML = `<i class="fas fa-times-circle"></i>`;
    }

    // Down Answer Two 

    let answerDownTwo = document.getElementById("down-two").value
    let tickDownTwo = document.getElementById("tick-down-two")

    if (answerDownTwo === "close down" || answerDownTwo === "Close down") {
        tickDownTwo.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownTwo.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Down Answer Three 

    let answerDownThree = document.getElementById("down-three").value
    let tickDownThree = document.getElementById("tick-down-three")

    if (answerDownThree === "turned down" || answerDownThree === "Turned down") 
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

    if (answerDownFour === "broke down" || answerDownFour === "Broke down")
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

    if (answerDownFive === "went down" || answerDownFive === "Went down") {
        tickDownFive.innerHTML = `<i class="fas fa-check-circle"></i>`;
        downScore++
        console.log(downScore)
    } else {
        tickDownFive.innerHTML = `<i class="fas fa-times-circle"></i>`
    }

    // Down Answer Six

    let answerDownSix = document.getElementById("down-six").value
    let tickDownSix = document.getElementById("tick-down-six")

    if (answerDownSix === "cut down" || answerDownSix === "Cut down") 
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
        marksDown.innerHTML = "Well done! You scored "+ downScore + " out of 6. Click next excercise!"
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


// ********* VERBS WITH INTO **************

function answerSubmitInto() {

    let storyResult = 0

    // Story Answer One

    let answerStoryOne = document.getElementById("story-one").value

    if (answerStoryOne === "ran into" || answerStoryOne === "Ran into") {
        document.getElementById("story-one").style.borderColor = "#60de60"
        document.getElementById("story-one").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-one").style.borderColor = "red"
        document.getElementById("story-one").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Two

    let answerStoryTwo = document.getElementById("story-two").value

    if (answerStoryTwo === "broken down" || answerStoryTwo === "Broken down") {
        document.getElementById("story-two").style.borderColor = "#60de60"
        document.getElementById("story-two").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-two").style.borderColor = "red"
        document.getElementById("story-two").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Three

    let answerStoryThree = document.getElementById("story-three").value

    if (answerStoryThree === "looking into" || answerStoryThree === "Looking into") {
        document.getElementById("story-three").style.borderColor = "#60de60"
        document.getElementById("story-three").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-three").style.borderColor = "red"
        document.getElementById("story-three").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Four

    let answerStoryFour = document.getElementById("story-four").value

    if (answerStoryFour === "look up" || answerStoryFour === "Look up") {
        document.getElementById("story-four").style.borderColor = "#60de60"
        document.getElementById("story-four").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-four").style.borderColor = "red"
        document.getElementById("story-four").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Five

    let answerStoryFive = document.getElementById("story-five").value

    if (answerStoryFive === "set up" || answerStoryFive === "Set up") {
        document.getElementById("story-five").style.borderColor = "#60de60"
        document.getElementById("story-five").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-five").style.borderColor = "red"
        document.getElementById("story-five").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Six

    let answerStorySix = document.getElementById("story-six").value

    if (answerStorySix === "closed down" || answerStorySix === "Closed down") {
        document.getElementById("story-six").style.borderColor = "#60de60"
        document.getElementById("story-six").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-six").style.borderColor = "red"
        document.getElementById("story-six").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Seven

    let answerStorySeven = document.getElementById("story-seven").value

    if (answerStorySeven === "go into" || answerStorySeven === "Go into") {
        document.getElementById("story-seven").style.borderColor = "#60de60"
        document.getElementById("story-seven").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-seven").style.borderColor = "red"
        document.getElementById("story-seven").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Eight

    let answerStoryEight = document.getElementById("story-eight").value

    if (answerStoryEight === "turn down" || answerStoryEight === "Turn down") {
        document.getElementById("story-eight").style.borderColor = "#60de60"
        document.getElementById("story-eight").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-eight").style.borderColor = "red"
        document.getElementById("story-eight").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Nine

    let answerStoryNine = document.getElementById("story-nine").value

    if (answerStoryNine === "turned into" || answerStoryNine === "Turned into") {
        document.getElementById("story-nine").style.borderColor = "#60de60"
        document.getElementById("story-nine").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-nine").style.borderColor = "red"
        document.getElementById("story-nine").style.backgroundColor = "#ebbdbd"
    }

    
    // Story Answer Ten

    let answerStoryTen = document.getElementById("story-ten").value

    if (answerStoryTen === "got into" || answerStoryTen === "gotten into" || 
        answerStoryTen === "Got into" || answerStoryTen === "Gotten into") {
        document.getElementById("story-ten").style.borderColor = "#60de60"
        document.getElementById("story-ten").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-ten").style.borderColor = "red"
        document.getElementById("story-ten").style.backgroundColor = "#ebbdbd"
    }

    
    // Story Answer Eleven

    let answerStoryEleven = document.getElementById("story-eleven").value

    if (answerStoryEleven === "taken up" || answerStoryEleven === "Taken up") {
        document.getElementById("story-eleven").style.borderColor = "#60de60"
        document.getElementById("story-eleven").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-eleven").style.borderColor = "red"
        document.getElementById("story-eleven").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Twelve

    let answerStoryTwelve= document.getElementById("story-twelve").value

    if (answerStoryTwelve === "give up" || answerStoryTwelve === "Give up") {
        document.getElementById("story-twelve").style.borderColor = "#60de60"
        document.getElementById("story-twelve").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-twelve").style.borderColor = "red"
        document.getElementById("story-twelve").style.backgroundColor = "#ebbdbd"
    }


     // Story Answer Thirteen

    let answerStoryThirteen = document.getElementById("story-thirteen").value

    if (answerStoryThirteen === "broken into" || answerStoryThirteen === "Broken into") {
        document.getElementById("story-thirteen").style.borderColor = "#60de60"
        document.getElementById("story-thirteen").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-thirteen").style.borderColor = "red"
        document.getElementById("story-thirteen").style.backgroundColor = "#ebbdbd"
    }

    // Story Answer Fourteen

    let answerStoryFourteen = document.getElementById("story-fourteen").value

    if (answerStoryFourteen === "wrote down" || answerStoryFourteen === "Wrote down") {
        document.getElementById("story-fourteen").style.borderColor = "#60de60"
        document.getElementById("story-fourteen").style.backgroundColor = "#bcf9bc"
        storyResult++
        console.log(storyResult)
    }
    else { 
        document.getElementById("story-fourteen").style.borderColor = "red"
        document.getElementById("story-fourteen").style.backgroundColor = "#ebbdbd"
    }

    let marksStory = document.getElementById("marksStory")
    console.log(storyResult)

    if (storyResult < 14) {
        marksStory.innerHTML = "You scored " + storyResult + " out of 14. Keep Trying!"
    }

    if (storyResult == 14) {
        marksStory.innerHTML = "Well done! You scored " + storyResult + " out of 14. Click Next Exercise"
    }
 
}

// ********* VERBS WITH OVER AUDIO PLAYER **************

function playAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].play()
}

function pauseAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].pause()
    
}

function stopAudioExcercise() {

    excerciseAudio = document.querySelectorAll("audio")

    excerciseAudio[0].pause()
    excerciseAudio[0].currentTime = 0
}

