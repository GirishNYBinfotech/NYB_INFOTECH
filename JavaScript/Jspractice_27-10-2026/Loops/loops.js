const numbers = [10, 20, 30];

// for loop
console.log("For Loop");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// while loop
console.log(" While Loop");
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// do...while loop
console.log(" Do While Loop");
let j = 0;
do {
  console.log(numbers[j]);
  j++;
} while (j < numbers.length);

//for...in loop
console.log(" For In Loop");
for (let index in numbers) {
  console.log(index, numbers[index]);
}

//for...of loop
console.log("For Of Loop");
for (let value of numbers) {
  console.log(value);
}

//for each loop
const numbers1 = [10, 20, 30, 40, 50];
console.log("forEach:");
numbers1.forEach((value, index) => {
  console.log("Index:", index, "Value:", value);
});

//break and continue
//break
for (let id = 1; id <= 5; id++) {
  if (id === 4) {
    break;
  }
  console.log("Employee ID:", id);
}

//continue
for (let id = 1; id <= 5; id++) {
  if (id === 4) {
    continue;
  }
  console.log("Employee ID:", id);
}