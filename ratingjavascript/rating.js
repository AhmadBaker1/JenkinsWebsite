var getUserName = prompt("Enter your name");
var getUserAge = prompt("Enter your age");
if(Number(getUserAge) < 18) {
    alert("Sorry you are not allowed to rate")
} else if(Number(getUserAge) >= 18) {
    alert("Hey nice to see you welcome!");
    var entryQuestion = prompt("Do you want to rate us?");
    var correctAnswer = "yes";
};


    while(entryQuestion != correctAnswer) {
        alert("You have to say yes to rate")
        if(entryQuestion == correctAnswer) {
            alert("Welcome lets go")
            
        };
    };



    