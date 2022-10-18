const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-text"));
const progressText = document.querySelector("#progressText");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
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
  },
];
const MAX_QUESTIONS = 5;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./results.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
