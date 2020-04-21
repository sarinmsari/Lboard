//variables
var quiz = [];
quiz[0] = new Question("A vehicle can be seized by authorised officers, if", "The vehicle is not covered by a valid registration or permit", "The vehicle is not covered by a valid insurance", "The vehicle exceeds the speed limit");
quiz[1] = new Question("When a vehicle approaches an unguarded railway level crossing, before crossing it, the driver shall", "Stop the vehicle, get down from the vehicle and ensure that no train or trolley is coming from either side", "Sound horn and cross the track as fast as possible", "Wait till the train passes");
quiz[2] = new Question("If you are near a pedestrian crossing and there are people waiting to cross the road, you should", "Stop the vehicle, wait until pedestrians cross and then move forward", "Press horn and proceed", "Slow down, press horn and proceed");
quiz[3] = new Question("Type of horn permitted", "Electric horn", "Multi-toned horn", "Air- horn");
quiz[4] = new Question("You are coming towards a narrow bridge and another vehicle is about to enter the bridge from the other side. What should you do?", "Wait until the other vehicle crosses the bridge before proceeding", "Switch on headlight and the cross the bridge", "Increase speed of the vehicle and try to cross the bridge quickly");
quiz[5] = new Question("Minimum age to avail driving license for transport vehicles is", "20", "21", "16");
quiz[6] = new Question("Use of horn prohibited", "Near Hospital, Courts of Law", "Near Police Station", "Mosque, Church and Temple");
quiz[7] = new Question("While you are approaching an intersection where the yellow signal light is blinking, you should", "Stop the vehicle and wait for the green light to appear", "Slow down the vehicle and proceed only after ensuring that it is safe to do so", "As there is no restriction, proceed at the same speed");
quiz[8] = new Question("Using unregistered vehicles in public spaces is", "Illegal", "Legal", "Legal if necessary");
quiz[9] = new Question("Parking is permitted", "Where parking is not prohibited", "On footpath", "In turning");
quiz[10] = new Question("Carrying overload in goods carriages", "can attract suspension/cancellation of driving licence", "legally not punishabl", "Only fine is attracted");
quiz[11] = new Question("When you see the traffic sign School , you should", "Slow down and proceed with caution", "Stop the vehicle, sound horn and proceed", "Sound horn continuously and proceed");
quiz[12] = new Question("Smoking while driving public service vehicle", "can attract suspension of driving licence", "can attract fine only", "	None of the above");
quiz[13] = new Question("Hand brake should be used to", "Park Vehicle", "Apply break suddenly", "Reduce speed");
quiz[14] = new Question("Prior to overtaking a vehicle, driver should ensure that", "The road ahead is visible clearly and is safe to overtake", "There are no vehicles ahead", "The road is not safe");
quiz[15] = new Question("One time tax for a new car is", "15 years", "5 Years", "Until registration is cancelled");
quiz[16] = new Question("If a driver of a two wheeler is turning to the left, he/she should", "Extend the right hand and give the left turn signal", "Not give any signal", "Extend the left hand and give the left turn signal");
quiz[17] = new Question("When you see the sign for &apos;School nearby&apos;, you should", "Slow down and go ahead with caution", "Press horn and proceed in the same speed", "Stop the vehicle");
quiz[18] = new Question("Minimum age for availing a license to drive a motor vehicle without gear is", "16 years", "21 Years", "18 years");
quiz[19] = new Question("Validity of Pollution Under Control Certificate is", "6 months", "1 Years", "2 year");
quiz[20] = new Question("Records needed for private vehicles are", "Insurance Certificate, Registration Certificate, Driving License and Tax Token", "G.C.R, Insurance Certificate, Registration Certificate", "Permit, Trip Sheet, Registration Certificate");
quiz[21] = new Question("Pedestrians are not allowed to cross the road close to stopped vehicles or near sharp bends because", "Drivers of approaching vehicles may not be able to see them", "It is an inconvenience to oncoming vehicles","It is inconvenient to other pedestrians");
quiz[22] = new Question("Overtaking is not allowed when", "When the road ahead is not visible clearly", "When the road is wide enough", "The road has no potholes");
quiz[23] = new Question("Mobile phones should not be used","While driving a vehicle", "In office", "At home");
quiz[24] = new Question("Boarding in and alighting from vehicles when it is in motion is", "Prohibited in all vehicles", "Allowed in autos","Allowed in buses");
quiz[25] = new Question("Rear view mirror is utilized for", "Watching traffic that is approaching from behind","Watching back seat passengers","Car decor");
quiz[26] = new Question("Drunken driving is", "Prohibited at all times", "Allowed during the day", "Allowed at night");
quiz[27] = new Question("Overtaking when the vehicle approaches a bend is", "Not allowed","Allowed","Allowed with caution");
quiz[28] = new Question("If a driver sees the sign for &apos;slippery road ahead&apos;, he/she must","Change gear and reduce speed", "Drive faster", "Apply brake but proceed in the same speed");
quiz[29] = new Question("Parking in front of a hospital is","Not correct", "Correct", "Depends on the situation");
quiz[30] = new Question("Red traffic light is an sign to","Stop the vehicle", "Slow the vehicle", "Proceed with caution");
quiz[31] = new Question("If an ambulance is approaching","Allow free passage by moving to the side of the road", "No preference should be given", "Provide passage if there are no vehicles on the other side");
quiz[32] = new Question("Zebra lines are meant for","Crossing of pedestrians", "Stopping vehicles", "Overtaking");
quiz[33] = new Question("Fog lamps should be used when","There is mist", "At night", "When the vehicle opposite is not using the dim light");
quiz[34] = new Question("Driver of a vehicle shall drive through the","Left side of the road", "Right side of the road", "Center of the road");
quiz[35] = new Question("Driver of a vehicle can overtake when","The driver of the vehicle ahead gives the signal to overtake", "Road is wide enough", "Driving down a hill");
quiz[36] = new Question("Vehicles that come from the opposite side should be allowed to proceed through the","Right side", "Left side", "Any convenient side");
quiz[37] = new Question("Free passage should be provided to the following vehicles","Fire service vehicles and ambulance", "Express buses", "Police vehicles");
quiz[38] = new Question("In case a road does not have a footpath, pedestrians will have to","Walk on the right side of the road", "Walk on the left side of the road", "Walk on any side of the road");
quiz[39] = new Question("A learner&apos;s license is valid for a period of","6 months", "30 days", "Until a driving licence is availed");
quiz[40] = new Question("Transport vehicles can be distinguished by","Number plate of the vehicle", "The colour of the vehicle", "Tyre size of the vehicle");
quiz[41] = new Question("You can overtake a vehicle that is in the front","Through the right side of the vehicle ahead", "Through the left side of the vehicle ahead", "If the road is wide enough");
quiz[42] = new Question("On a road that has been designated as one way","You should not drive in reverse gear", "You should not overtake", "You should not park");



var randomQuestion;
var answers = [];
var currentScore = 0;
var attended = 0;
var questionNum=1;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  

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



function adjustScore(isCorrect) {
  debugger;
  if (isCorrect && attended == 1 && questionNum<=20){
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
      
      for(let i=0;i<3;i++){
          if(answers[i] == randomQuestion.rightAnswer){
              
              switch(i){
                  case 0 : document.getElementById('answerA').style.backgroundColor = "green";
                      document.getElementById('answerA').style.color = "white";break;
                  case 1 : document.getElementById('answerB').style.backgroundColor = "green";
                      document.getElementById('answerB').style.color = "white";break;
                  case 2 : document.getElementById('answerC').style.backgroundColor = "green";
                      document.getElementById('answerC').style.color = "white";break;
                  
              }
          }
      }
      return false;
  }
}
function  next_clicked(){
    
    if(currentScore>=12){
        document.getElementById('success').style.display= 'block';
        
        document.getElementById('answerA').style.color = "black";
        document.getElementById('answerB').style.color = "black";
        document.getElementById('answerC').style.color = "black";

        document.getElementById('answerA').style.backgroundColor = "white";
        document.getElementById('answerB').style.backgroundColor = "white";
        document.getElementById('answerC').style.backgroundColor = "white";
    }
    else if(questionNum >= 20){
        document.getElementById('fail').style.display= 'block';
        
        document.getElementById('answerA').style.color = "black";
        document.getElementById('answerB').style.color = "black";
        document.getElementById('answerC').style.color = "black";

        document.getElementById('answerA').style.backgroundColor = "white";
        document.getElementById('answerB').style.backgroundColor = "white";
        document.getElementById('answerC').style.backgroundColor = "white";
    }
    else{
        btnProvideQuestion();
        attended = 0;
        questionNum++;
        
        document.getElementById("questionnum").innerHTML = questionNum;
        
        document.getElementById('answerA').style.color = "black";
        document.getElementById('answerB').style.color = "black";
        document.getElementById('answerC').style.color = "black";

        document.getElementById('answerA').style.backgroundColor = "white";
        document.getElementById('answerB').style.backgroundColor = "white";
        document.getElementById('answerC').style.backgroundColor = "white";
    }
    
}
function  reset_clicked(){
    btnProvideQuestion();
    attended = 0;
    currentScore = 0;
    questionNum = 1;
    
    document.getElementById('success').style.display= 'none';
    document.getElementById('fail').style.display= 'none';
    
    document.getElementById("questionnum").innerHTML = questionNum;
    document.getElementById("score").innerHTML = currentScore;
    document.getElementById('answerA').style.color = "black";
    document.getElementById('answerB').style.color = "black";
    document.getElementById('answerC').style.color = "black";
    
    document.getElementById('answerA').style.backgroundColor = "white";
    document.getElementById('answerB').style.backgroundColor = "white";
    document.getElementById('answerC').style.backgroundColor = "white";
    
}
