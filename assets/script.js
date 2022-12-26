let timerId = 0
let time = 75;
let currentQuestionNum = 0;
const startButtonEl = document.getElementById("start-btn")
const startPageEl = document.getElementById("start-screen")
const questionsEl = document.getElementById("question-screen")
const timerEl = document.getElementById("time")
const titleEl = document.getElementById("question-title")
const choicesEl = document.getElementById("choices")
const choiceList = document.getElementById("choiceList")

const highscores = [];

const questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within __.",
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        question: "Arrays in Javascript can be used to store __.",
        choices: [ 'numbers and strings', 'other arrays', 'booleans', 'all of the above',],
        answer: 'all of the above'
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer:  'quotes'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer:  'console.log'
    }
];

function startQuiz() {
    startPageEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(startTime, 1000);
    getQuestion();
}


function startTime() {
    time--;
    timerEl.textContent = ('Timer: '+ time);
    if (time <= 0) {
        scoreQuiz();
    }
}

function scoreQuiz() {
    console.log('score quiz') //tbd
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionNum];
  
    // update title with current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.question;
  
    // clear out any old question choices
    choicesEl.innerHTML = '';
  
    // loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      // create new button for each choice
      var choice = currentQuestion.choices[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = i + 1 + '. ' + choice;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    }
  }


//starts quiz when button is pressed
startButtonEl.addEventListener("click", function() {
    console.log("Listening")
    startQuiz();
});