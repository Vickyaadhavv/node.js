var readlinesync=require("readline-sync")
var score=0;
var username= readlinesync.question("what is your name?");
console.log("welcome",username + " To Do you know vicky?");

function play(question,answer){
  var useranswer = readlinesync.question(question)
  if(useranswer === answer){
    console.log("right!");
    score=score + 1;
  }else{
    console.log("wrong!");
    score= score - 1;
  }
  console.log("current score",score);
   console.log("-----------")
  }
//play("what is my fav food?","biriyani")
//play("what is my fav hero?","surya")
//play("what is my fav heroin?","rasmika")
var questions = [{
  question: "what is my fav hero?",
  answer: "surya"},{
  question: "what is my fav heroin?",
  answer: "rasmika"},{
  question: "what is my fav food?",
  answer: "biriyani"},{
  question: "what is my fav bike?",
  answer: "R15"   
  }];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}               
