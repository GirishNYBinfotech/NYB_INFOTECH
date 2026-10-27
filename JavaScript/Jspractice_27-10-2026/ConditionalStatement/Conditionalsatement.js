let age = 20;
let marks = 85;
let day = 3;
let a = 10;
let b = 20;

// statement
console.log("if Statement -");
if (age >= 18) {
    console.log("You are eligible to vote");
}

// 2. if-else statement
console.log("if-else Statement");
if (marks >= 35) {
    console.log("You passed");
}
else {
    console.log("You failed");
}

// if-else-if ladder
console.log("if-else-if Statement");
if (marks >= 90) {
    console.log("Grade A+");
} 
else if (marks >= 80) {
    console.log("Grade A");
} 
else if (marks >= 70) {
    console.log("Grade B");
} 
else if (marks >= 60) {
    console.log("Grade C");
} 
else if (marks >= 35) {
    console.log("Grade D");
} 
else {
    console.log("Fail");
}

// Nested if statement
console.log(" Nested if Statement");
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } 
    else {
        console.log("ID card required");
    }
} 
else {
    console.log("Entry not allowed");
}

// switch statement
console.log("switch Statement");
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("invalid day");
}

//Ternary operator
console.log("Ternary Operator");
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

// Nested ternary operator
console.log("Nested Ternary");

let largest = a > b ? a : b > a ? b : "Both are equal";
console.log("Largest value:", largest);
