var timeEl = document.getElementById("time");
var timeLeft = 100;
var start = document.getElementById("startbutton");


//start.onclick = setTime;
document.getElementById("startbutton").addEventListener("click", setTime());

function setTime(){
    var timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.textContent = "time:" + timeLeft;
    if (timeLeft === 0){
        clearInterval(timerInterval);
    } 
    }, 1000)
}


function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
//function that will get each question
Quiz.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}
//function that will either add score or subtract time
Quiz.guess = function(answer){
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    

 this.questionIndex++;  
}

var questions = [];
