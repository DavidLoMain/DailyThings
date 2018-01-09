/*
** GuessingGame
** Javascript Portion
**
** Created: January 4, 2018
**/

var form = document.querySelector("#guess")
var input = document.querySelector("input")
var response = document.querySelector(".response")
var correctAnswer = Math.ceil(Math.random() * 10)
var guessList = []
var guesses = document.querySelector(".guesses")

console.log(correctAnswer)

form.addEventListener("submit", guess)

function guess(e) {
  e.preventDefault()
  var theirAnswer = input.value
  
  guessList.push(theirAnswer)
  
  
  if(theirAnswer == correctAnswer){
    setInterval(changeColor, 100)
    window.open("https://www.youtube.com")
    response.innerHTML = "YAY. You did it!"
  }
  else if(theirAnswer > correctAnswer){
    response.innerHTML = "Too Big!"
  }
  else if(theirAnswer < correctAnswer){
     response.innerHTML = "Too Small!"
  }
  else{
     guessList.pop()
     response.innerHTML = "Not a Number"
  }
  guesses.innerHTML = guessList
}

function changeColor(){
//  var red = Math.floor(Math.random() * 255)
//  var green = Math.floor(Math.random() * 255)
//  var blue = Math.floor(Math.random() * 255)


  document.body.style.background = `rgb(${red}, ${green}, ${blue})`
  
}



