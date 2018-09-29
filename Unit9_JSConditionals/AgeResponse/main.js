var age = prompt("What is your age?");

if (age < 0) {
    console.log("ERROR: Age is negative.");
}
if (age == 21) {
    console.log("Happy 21st birthday.");
}
if (age % 2 == 1) {
    console.log("Your age is odd!")
}

var ageSquareRoot = Math.sqrt(age);
var ageSquareRootFloor = Math.floor(ageSquareRoot);

if (ageSquareRoot == ageSquareRootFloor) {
    console.log("Perfect square!");
}