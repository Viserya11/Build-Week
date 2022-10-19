let countdownBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let countdownValue = 60;
let countdownEndValue = 0;
let speed = 1000;

let countdown = setInterval(() => {
  countdownValue--;
  valueContainer.textContent = `${countdownValue}`;
  countdownBar.style.background = `conic-gradient(
      #f4e5ef ${countdownValue * 6}deg,
      #ebbaee ${countdownValue * 6}deg
  )`;
  if (countdownValue == countdownEndValue) {
    clearInterval(countdown);
  }
}, speed);
