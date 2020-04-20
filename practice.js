//variables
var quiz = [];
quiz[0] = new Question("What is 1/4 of 100?", "25", "24", "23", "15");
quiz[1] = new Question("What color is blood?", "Red", "White", "Green", "blue");
quiz[2] = new Question("What color is grass?", "Green", "White", "Red", "blue");
quiz[3] = new Question("How many legs does a spider have?", "8", "6", "4","1234");
quiz[4] = new Question("Who is the king of the Netherlands?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand", "Bla bla");
quiz[5] = new Question("What is 2-2?", "0", "2", "4", "7");
quiz[6] = new Question("What was Vincent van Gogh?", "Artist", "Baker", "Jobless", "Engineer");
var randomQuestion;
var answers = [];
var currentScore = 0;
var attended = 0;
var id;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  
        attended++;
  	correct = checkAnswer(answerA);
                if(correct){
                    document.getElementById('answerA').style.backgroundColor = "green";
                    document.getElementById('answerA').style.color = "white";
                }
                else{
                    document.getElementById('answerA').style.backgroundColor = "red";
                    document.getElementById('answerA').style.color = "white";
                }
        
}

function answerB_clicked() {
    var answerB = document.getElementById("answerB").value;
    
        attended++;
        correct = checkAnswer(answerB);
                if(correct){
                    document.getElementById('answerB').style.backgroundColor = "green";
                    document.getElementById('answerB').style.color = "white";
                }
                else{
                    document.getElementById('answerB').style.backgroundColor = "red";
                    document.getElementById('answerB').style.color = "white";
                }
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
                attended++;
		correct = checkAnswer(answerC);
                if(correct){
                    document.getElementById('answerC').style.backgroundColor = "green";
                    document.getElementById('answerC').style.color = "white";
                    
                }
                else{
                    document.getElementById('answerC').style.backgroundColor = "red";
                    document.getElementById('answerC').style.color = "white";
                }
}
function answerD_clicked() {
  var answerD = document.getElementById("answerD").value;
  	
                attended++;
		correct = checkAnswer(answerD);
                if(correct){
                    document.getElementById('answerD').style.backgroundColor = "green";
                    document.getElementById('answerD').style.color = "white";
                }
                else{
                    document.getElementById('answerD').style.backgroundColor = "red";
                    document.getElementById('answerD').style.color = "white";
                }
}


function adjustScore(isCorrect) {
  debugger;
  if (isCorrect && attended == 1) {
    currentScore++;
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    return true;
  }
  else {
      
      for(let i=0;i<4;i++){
          if(answers[i] == randomQuestion.rightAnswer){
              
              switch(i){
                  case 0 : document.getElementById('answerA').style.backgroundColor = "green";
                      document.getElementById('answerA').style.color = "white";break;
                  case 1 : document.getElementById('answerB').style.backgroundColor = "green";
                      document.getElementById('answerB').style.color = "white";break;
                  case 2 : document.getElementById('answerC').style.backgroundColor = "green";
                      document.getElementById('answerC').style.color = "white";break;
                  case 3 : document.getElementById('answerD').style.backgroundColor = "green";
                      document.getElementById('answerD').style.color = "white";break;
              }
          }
      }
      return false;
  }
}
function  next_clicked(){
    btnProvideQuestion();
    attended = 0;
    document.getElementById('answerA').style.backgroundColor = "black";
    document.getElementById('answerB').style.backgroundColor = "black";
    document.getElementById('answerC').style.backgroundColor = "black";
    document.getElementById('answerD').style.backgroundColor = "black";
    document.getElementById('answerA').style.color = "white";
    document.getElementById('answerB').style.color = "white";
    document.getElementById('answerC').style.color = "white";
    document.getElementById('answerD').style.color = "white";
    
}
function  reset_clicked(){
    btnProvideQuestion();
    attended = 0;
    currentScore = 0;
    document.getElementById("score").innerHTML = currentScore;
    document.getElementById('answerA').style.backgroundColor = "black";
    document.getElementById('answerB').style.backgroundColor = "black";
    document.getElementById('answerC').style.backgroundColor = "black";
    document.getElementById('answerD').style.backgroundColor = "black";
    document.getElementById('answerA').style.color = "white";
    document.getElementById('answerB').style.color = "white";
    document.getElementById('answerC').style.color = "white";
    document.getElementById('answerD').style.color = "white";
}
