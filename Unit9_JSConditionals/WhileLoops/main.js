var challenges = [
    "Print all numbers between -10 and 9",
    "Print all even numbers between 10 an 40",
    "Print all odd numbers between 300 and 333",
    "Print all numbers divisible by 5 AND 3 between 5 and 50"
];

console.log(challenges[0]);
num = -10;
while (num < 20) {
    console.log(num);
    num++;
}

console.log(challenges[1]);
num = 10;
while (num <= 40) {
    console.log(num);
    num += 2;
}

console.log(challenges[2]);
num = 300;
while (num <= 333) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++;
}

console.log(challenges[3]);
num = 5;
while (num <= 50) {
    if (num % 5 == 0 && num % 3 == 0) {
        console.log(num);
    }
    num++;
}