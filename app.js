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
    // let welcomingMessage = alert("hello " + userAnswer2 + " " + userAnswer1 + " weclome to ToDo site");
    //   console.log(welcomingMessage);
    // } 

    let arr = [];

function questions(qustion){
    let answer = prompt(qustion);
    return answer;
}

function putAnswersInArray(answer){
    arr.push(answer);

}

let userAnswer = "";
userAnswer = questions('Do you like the idea of ​​our website?[enter Yes or No]');
putAnswersInArray (userAnswer);
userAnswer = questions('Do you want to solve the challengs?[enter Yes or No]');
putAnswersInArray (userAnswer);
userAnswer = questions('Would you like to add more than one task per day?[enter Yes or No]');
putAnswersInArray (userAnswer);
console.log(arr);

function testEmptyAnswer(answers){
    let validArr = [];
    for (let i = 0; i < answers.length ; i++){
        if (answers[i] =="yes"){
            validArr.push("Yes");
        }
        else if (answers[i] =="no"){
            validArr.push("No");
        }
        else{
            validArr.push("invalid");
        }
        
    }

    return validArr;

}

function printTheAnswers(validAnswers){
for (let i = 0 ; i < validAnswers.length; i++){
    console.log (validAnswers[i]);
}
}

printTheAnswers(testEmptyAnswer(arr));