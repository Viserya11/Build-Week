const query1 = new URLSearchParams(window.location.search); //searching params that were passed from other pages
const receivedNumber = query1.get("numberToPass"); //getting the actual value of the parameter
const query2 = new URLSearchParams(window.location.search);
const totalQuestions = query2.get("numberOfQuestions");
const query3 = new URLSearchParams(window.location.search);
const totalWrong = query3.get("totalWrong");
console.log(receivedNumber);
console.log(totalQuestions);
console.log(totalWrong);

const totalCorrect = (receivedNumber * 100) / 5; //calculating the percentage of correct answers

let correctPercentage = document.getElementById("correct-percentage"); //targeting the correct fields
let wrongPercentage = document.getElementById("wrong-percentage");
console.log(correctPercentage);
let correctCounter = 0; //setting initial values to 0
let wrongCounter = 0;
const countCorrect = setInterval(function () {
  //declaring the setInterval function used for the animation
  if (correctCounter !== totalCorrect) {
    //declaring the starting point of the interval
    correctCounter += 1; //increment by 1 if the above condition is true
    correctPercentage.innerHTML = correctCounter + "%"; //change the percentage from the field accordingly. By looping it, it will look
    // as it animates
  }
  const remain = 100 - totalCorrect; //declaring variable for wrong percentage
  console.log(remain);
  if (wrongCounter < remain) {
    //checking condition to set the starting point of the second interval
    wrongCounter += 1; //increment by 1
    console.log(wrongCounter);
    wrongPercentage.innerHTML = wrongCounter + "%"; //change the percentage
  }
  if (correctCounter === totalCorrect && wrongCounter === 100 - totalCorrect) {
    //checking if both percentges reached final value
    clearInterval(countCorrect); //exiting the interval (loop)
  }
}, 30); //declaring the speed of the interval in milliseconds
console.log("correct counter: " + correctCounter);

let correctQuestions = document.getElementById("correctQuestions"); //getting correct IDs
let wrongQuestions = document.getElementById("wrongQuestions");

correctQuestions.innerText = `${receivedNumber}/${totalQuestions} questions`; //setting the inner text accordingly to the dynamic values
wrongQuestions.innerText = `${totalWrong}/${totalQuestions} questions`;

let innerTextPass = document.getElementById("inner-text-passed"); //getting correct IDs
let innerTextFail = document.getElementById("inner-text-failed");

if (totalCorrect < 60) {
  //checking the condition for PASS/FAIL
  innerTextPass.className = "hidden"; //adding hidden to PASS if below 60 and make the FAIL text visible with the next line of code
  innerTextFail.classList.remove("hidden");
}

let progressBar = document.querySelector(".circular-progress"); //getting correct IDs
let valueContainer = document.querySelector(".value-container");

let progressValue = 0; //initial parameters
let progressEndValue = totalCorrect; //setting final value accordingly to the percentage
let speed = 30;

let progress = setInterval(() => {
  //starting up the interval
  progressValue++;
  progressBar.style.background = `conic-gradient( 
      aqua ${progressValue * 3.6}deg, 
      #D20094 ${progressValue * 3.6}deg
  )`; //setting up the conic gradient in order to fill the percentage circle
  if (progressValue == progressEndValue) {
    //checking end of the interval (loop)
    clearInterval(progress);
  }
}, speed);
