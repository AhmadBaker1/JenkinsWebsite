let getUserName = prompt("Hey what is your name ?");
let getUserAge = prompt("How old are you ?");
let getUserNationality = prompt("Where are you from ?");

let elementName = document.getElementById("name")
elementName.innerHTML = "Hi there " + getUserName + " " + "!";

let elementAge = document.getElementById("age")
elementAge.innerHTML = "You are " + getUserAge + " " + "years old";

let elementNationality = document.getElementById("nationality")
elementNationality.innerHTML = "You are from " + getUserNationality;


var correct = "yes";
var userGuess = "";

while(userGuess != correct) {
    userGuess = prompt("You have to type yes or you wont be asked");
    if(userGuess === correct) {
        alert("Correct! lets ask you now")
    } else {
        alert("Nope we wont ask you if you say no, so say yes")
    };
};

var askForImage = prompt("How many pictures do u want to see of range rovers");

for(i = 0; i < askForImage; i++) {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/2019_Land_Rover_Range_Rover_Autobiography_SDV8_Automatic_4.4_Front.jpg" alt="range rover" width="300px" height="250px">')
}

