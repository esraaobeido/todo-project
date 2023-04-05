'use strict';
   // if(confirm("Do you want to show welcoming message?")){
   // let userAnswer1 = prompt("what is your name?");
   // console.log(userAnswer1);
   // let userAnswer2 = prompt("what is your gender?");
   // if(userAnswer2 == "male"|| userAnswer2 == "Male" ) {
    //    userAnswer2 = "Mr";
   // }else if(userAnswer2 == "female" || userAnswer2 == "Female") {
   //     userAnswer2 = "Mrs";
   // }else {
    //    userAnswer2 ="";
    //}
    //console.log(userAnswer2)
   // let userAnswer3 = prompt("how old are you?");
   // if(userAnswer3<=0){
     //   alert("please enter you age again");
     //   userAnswer3 = prompt("your age should be greater than zero");
   // }
 //   let welcomingMessage = alert("hello " + userAnswer2 + " " + userAnswer1 + " weclome to ToDo site");
     //   console.log(welcomingMessage);
  // } 
let questionOne;
let questionTwo;
let questionThree;

  let Q1 = 'Do you like the idea of ​​our website?[enter Yes or No]';
  let Q2 = 'Do you want to solve the challengs?[enter Yes or No]';
  let Q3 = 'Would you like to add more than one task per day?[enter Yes or No]';
  
  function askQuestion(){
    questionOne = prompt(Q1);
    questionTwo = prompt(Q2);
    questionThree = prompt(Q3);
    
    return questionOne, questionTwo, questionThree;

  }
    
   function testEmptyAnswer(A1,A2,A3){
    if(A1 == "") {
        questionOne = "invalid";
    }
    if(A2 == "") {
        questionTwo = "invalid";
    }
    if(A3 == "") {
        questionThree = "invalid";
    }

    return questionOne, questionTwo, questionThree;
}

function putAnswersInArray(A1, A2, A3){
   let arrAnswers = [A1, A2, A3];
    return arrAnswers;
}

function printTheAnswers(A1, A2, A3){
    let arrAnswers = [A1, A2, A3];
    return console.log(arrAnswers);
}

askQuestion(questionOne, questionTwo, questionThree);

testEmptyAnswer(questionOne, questionTwo, questionThree);

putAnswersInArray(questionOne, questionTwo, questionThree);

printTheAnswers(questionOne, questionTwo, questionThree);

