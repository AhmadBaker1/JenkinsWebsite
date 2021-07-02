var name = prompt("What is your name?");
var age = prompt("What is your age?");
var continent = prompt("Which continent are you from?").toLowerCase();

if(continent === 'Asia'.toLowerCase()) {
    alert("We recommend you buy a Toyota");
} else if(continent === 'Europe'.toLowerCase()) {
    alert("We recommend you buy a Mercedes");
} else if(continent === 'North America'.toLowerCase()) {
    alert("We recommend you buy a Ford");
} else if(continent === 'South America'.toLowerCase()) {
    alert("We recommend you buy a Suzuki");
} else if(continent === 'Antarctica'.toLowerCase()) {
    alert("We recommend you buy a mountain buggy");
} else if(continent === 'Australia'.toLowerCase()) {
    alert("We recommend you buy a Mitsubishi");
} else {
    alert("Are you even from Earth?");
};

var elementOne = document.getElementById("name")
elementOne.innerHTML = "Your name is " + name;
var elementTwo = document.getElementById("age")
elementTwo.innerHTML = "Your age is " + age;
var elementThree = document.getElementById("continent")
elementThree.innerHTML = "You are from " + continent;




