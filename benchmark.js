window.onload = function () {
  startGame();
};

//declaring the variables later used in the code, targeting html elements

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-text"));
const progressText = document.querySelector("#progressText");
const newButton = document.querySelector("#nextbtn");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

//countdown timer keeping track how many seconds the user has to answer the question before moving to the next one automatically

let countdownBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let countdownValue = 60;
let countdownEndValue = 0;
let speed = 1000;

let countdown = setInterval(() => {
  countdownValue--;
  valueContainer.textContent = `${countdownValue}`;
  countdownBar.style.background = `conic-gradient(
      #ffffff ${countdownValue * 6}deg,
      #ebbaee ${countdownValue * 6}deg
  )`;
  if (countdownValue == countdownEndValue) {
    getNewQuestion();
  }
}, speed);

//declaring the number of questions for the counter, also the points given for each so it can be easily implemented on the results page

const MAX_QUESTIONS = 5;
const SCORE_POINTS = 20;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  //the end redirects the page to the next one (results) after it reached the limit of questions, keeps track of points
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    // return window.location.assign("./results.html");
  }
  //otherwise shows the number of the next question out of the total which is five in this case, also increments it with one every time
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;

  //makes the questions appear in a random order on each refresh, uses the questions from the array
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;
  console.log("This is the current question object: ", currentQuestion);
  console.log(`The ${currentQuestion.answer} is the correct answer`);

  //uses the array to generate the possible answers, each with an individual number after "choice" to separate them and check if they are correct
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;

  countdownValue = 60;
  countdownEndValue = 0;
};

let totalCorrect = 0;

choices.forEach((choice, clickedAnswer) => {
  choice.addEventListener("click", () => {
    console.log(`You clicked on ${clickedAnswer + 1}`);
    let finalAnswer = clickedAnswer + 1;
    console.log("You have stored this answer: ", finalAnswer);
    if (finalAnswer === currentQuestion.answer) {
      totalCorrect += 1;
      console.log("You have answered correct ", totalCorrect, " times");
      getNewQuestion();
    } else {
      getNewQuestion();
    }
  });
});

console.log("Number of correct answers: ", totalCorrect);

// This below needs to be taken off or readjusted

newButton.addEventListener("click", () => {
  getNewQuestion();
  countdownValue = 60;
  countdownEndValue = 0;
});

//using last week's array based on group decision, modified to fit the code

let questions = [
  {
    question: "HTML is what type of language?",
    choice1: "Macro Language",
    choice2: "Scripting Language",
    choice3: "Markup Language",
    choice4: "Programming Language",
    answer: 3,
  },
  {
    question: "What does CPU stand for?",
    choice1: "Central Process Unit",
    choice2: "Central Processing Unit",
    choice3: "Computer Personal Unit",
    choice4: "Central Processor Unit",
    answer: 2,
  },
  {
    question: "What is the most preferred image format used for logos?",
    choice1: ".png",
    choice2: ".jpeg",
    choice3: ".svg",
    choice4: ".gif",
    answer: 3,
  },
  {
    question: "In web design, what does CSS stand for?",
    choice1: "Counter Strike: Source",
    choice2: "Cascading Style Sheet",
    choice3: "Corrective Style Sheet",
    choice4: "Computer Style Sheet",
    answer: 2,
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    choice1: "Nougat",
    choice2: "Ice Cream Sandwich",
    choice3: "Jelly Bean",
    choice4: "Marshmallow",
    answer: 1,
  },
];
