var timeEl = document.getElementById("time");
var timeLeft = 100;
var start = document.getElementById("startbutton");


//start.onclick = setTime;
start.addEventListener("click", setTime);

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
    
//iterate through questions
 this.questionIndex++;  
}

function questions(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

questions.isCorrectAnswer = function(choice){
    return this.answer === choice;
}
//function that will either end quiz or loop through questions and answers
function initiate(){
    if(quiz.isEnded()){
        showScores();
    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getElementById().text;

        var choices = quiz.getQuestionIndex().choices;
            for(var i = 0; i <choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
            }
            
    }
};


var questions = [];
