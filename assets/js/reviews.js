const reviews = [
   
    // Review 1 
    {
        quote: `"A really great course"`,
        person: "Diego, Madrid"
    },

    // Review 2

    {
       quote: `"Best money I spent this year"`,
       person: "Xi, Beijing"
    },

    // Review 3

    {
       quote: `"I highly recommend this course"`,
       person: "Pierre, France"
    },

    // Review 4

    {
       quote: `"A fun way to learn phrasal verbs"`,
       person: "Ana, Buenos Aires"
    },

    // Review 5

    {
       quote: `"I absolutely loved this course"`,
       person: "Kathryna, Poland"
    },

    // Review 6

    {
       quote: `"10 out of 10. Thanks Just Phrasals!"`,
       person: "Rafa, Sao Paolo"
    },

    // Review 7

    {
       quote: `"A great learning experience"`,
       person: "Stefania, Rome"
    },


];


let review = document.getElementById("quote")
let person = document.getElementById("person")

let index = 0

window.addEventListener("DOMContentLoaded", function(){
    review.innerHTML = reviews[index].quote
    person.innerHTML = reviews[index].person
});


function prevButton() {
    index--
    review.innerHTML = reviews[index].quote
    person.innerHTML = reviews[index].person
}

function nextButton() {
    index ++
    review.innerHTML = reviews[index].quote
    person.innerHTML = reviews[index].person
}
