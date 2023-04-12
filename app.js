    'use strict';

    let userAnswer1 = prompt("What is your name?");
    let userAnswer2 = prompt("What is your gender?");

    if(userAnswer2 != "male" && userAnswer2 != "female"){
        userAnswer2 = prompt("please enter male or female!");
    }
     
    let nikeName ="";
    if(userAnswer2 == 'male'){
        nikeName = "Mr";
    } else if(userAnswer2 == 'female'){
        nikeName = "Mrs";
    }

    let userAnswer3 = prompt("How old are you?") ;
    if(userAnswer3 <= 0){
        alert("please enter you age again");
        userAnswer3 = prompt("your age should be greater than zero");
    }

    let welcomingMessage = (confirm("Do you want to show welcoming message?"))
    console.log(welcomingMessage);
    
    if(welcomingMessage === true){
        alert("hello " + nikeName + " " + userAnswer1 + " Weclome to ToDo site!");
    }
    


