var readlineSync = require("readline-sync");
var chalk=require('chalk');

var score = 0;


var userName = readlineSync.question("What's your name? ");

console.log(chalk.inverse("Welcome "+ userName + " Do you know Ravi Prasanth?"));



var maxScores = [
  {
    name: "priya",
    score: 5,
  },

  {
    name: "mehta",
    score: 5,
  },
]


function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blue.bold(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 

    console.log(chalk.green.bold("right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red.bold("wrong!"));
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}


var questions = [{
  question: "What is my favourite color? ",
  answer: "Blue"
}, {
  question: "what is my petname ",
  answer: "thambudu"
},
{
  question: "Where do I live? ",
  answer: "chennai"
},
{
  question:"what is my favourite web series",
  answer:"Dark"
},
{
  question:"what is my favourite movie",
  answer:"knives Out"
}

];


for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.magenta("oooohooo! You SCORED: ", score));
console.log(chalk.yellow("Check out the max scorers"));

for(var i=0;i<maxScores.length;i++){
  var currentscorer=maxScores[i];
  console.log(currentscorer.name , currentscorer.score);
}
console.log(chalk.cyan("If you are also a max scorer kindly DM me"));