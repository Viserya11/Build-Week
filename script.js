const totalCorrect = 66;

let correctPercentage = document.getElementById("correct-percentage");
let wrongPercentage = document.getElementById("wrong-percentage");
console.log(correctPercentage);
let correctCounter = 0;
let wrongCounter = 0;
const countCorrect = setInterval(function () {
  if (correctCounter == totalCorrect) {
    clearInterval(countCorrect);
  } else {
    correctCounter += 1;
    const remain = 100 - totalCorrect;
    if (wrongCounter < remain) {
      wrongCounter += 1;
      wrongPercentage.innerHTML = wrongCounter + "%";
    }
    correctPercentage.innerHTML = correctCounter + "%";
  }
  console.log("correct counter in setInterval: " + correctCounter);
}, 30);
console.log("correct counter: " + correctCounter);

let innerTextPass = document.getElementById("inner-text-passed");
let innerTextFail = document.getElementById("inner-text-failed");

if (totalCorrect < 60) {
  innerTextPass.className = "hidden";
  innerTextFail.classList.remove("hidden");
}

let ring = document.getElementsByTagName("circle");
console.log(ring);
