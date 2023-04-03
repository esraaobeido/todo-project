   
    if(confirm("Do you want to show welcoming message?")){
    let userAnswer1 = prompt("what is your name?");
    console.log(userAnswer1);
    let userAnswer2 = prompt("what is your gender?");
    if(userAnswer2 == "male"|| userAnswer2 == "Male" ) {
        userAnswer2 = "Mr";
    }else if(userAnswer2 == "female" || userAnswer2 == "Female") {
        userAnswer2 = "Mrs";
    }else {
        userAnswer2 ="";
    }
    console.log(userAnswer2)
    let userAnswer3 = prompt("how old are you?");
    if(userAnswer3<=0){
        alert("please enter you age again");
        userAnswer3 = prompt("your age should be greater than zero");
    }
    let welcomingMessage = alert("hello " + userAnswer2 + " " + userAnswer1 + " weclome to ToDo site");
        console.log(welcomingMessage);
   } 
    


