const totalCorrect = 63;

let correctPercentage = document.getElementById("correct-percentage");
let wrongPercentage = document.getElementById("wrong-percentage");
console.log(correctPercentage);
let correctCounter = 0;
let wrongCounter = 0;
const countCorrect = setInterval(function () {
  if (correctCounter !== totalCorrect) {
    correctCounter += 1;
    correctPercentage.innerHTML = correctCounter + "%";
  }
  const remain = 100 - totalCorrect;
  console.log(remain);
  if (wrongCounter < remain) {
    wrongCounter += 1;
    console.log(wrongCounter);
    wrongPercentage.innerHTML = wrongCounter + "%";
  }
  if (correctCounter === totalCorrect && wrongCounter === 100 - totalCorrect) {
    clearInterval(countCorrect);
  }

  // console.log("correct counter in setInterval: " + correctCounter);
}, 30);
console.log("correct counter: " + correctCounter);

let innerTextPass = document.getElementById("inner-text-passed");
let innerTextFail = document.getElementById("inner-text-failed");

if (totalCorrect < 60) {
  innerTextPass.className = "hidden";
  innerTextFail.classList.remove("hidden");
}

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = totalCorrect;
let speed = 30;

let progress = setInterval(() => {
  progressValue++;
  progressBar.style.background = `conic-gradient(
      aqua ${progressValue * 3.6}deg,
      #D20094 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
