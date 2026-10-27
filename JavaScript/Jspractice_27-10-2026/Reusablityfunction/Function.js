// Reusable Utility Functions

// Adding two numbers
function add(a, b) {
    return a + b;
}

//  Check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

//Find the largest number in an array
function findMax(numbers) {
    return Math.max(...numbers);
}

//  Capitalize the first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Remove duplicate values from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Calculate factorial
function factorial(num) {
    if (num < 0) return "Invalid number";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Calling reusable utility functions
console.log("Addition:", add(10, 20))
console.log("Is Even:", isEven(8))
console.log("Maximum:", findMax([10, 50, 30, 20]))
console.log("Capitalized:", capitalize("javascript"))
console.log("Unique Values:", removeDuplicates([1, 2, 2, 3, 4, 4]))
console.log("Factorial:", factorial(5))