//Array Methods
let numbers = [10, 20, 30, 40, 50];

// . push() 
let a1 = [...numbers];
a1.push(60);
console.log("push:", a1);

//  pop() 
let a2 = [...numbers];
a2.pop();
console.log("pop:", a2);

//shift()
let a3 = [...numbers];
a3.shift();
console.log("shift:", a3);

// unshift()
let a4 = [...numbers];
a4.unshift(0);
console.log("unshift:", a4);

//  slice()
console.log("slice:", numbers.slice(1, 4));

//  splice() 
let a6 = [...numbers];
a6.splice(1, 2, 25);
console.log("splice:", a6);

// concat()
console.log("concat:", numbers.concat([60, 70]));

// includes() 
console.log("includes:", numbers.includes(30));

// indexOf()
console.log("indexOf:", numbers.indexOf(40));

//  find() 
console.log("find:", numbers.find(n => n > 25));

// findIndex()
console.log("findIndex:", numbers.findIndex(n => n > 25));

//  filter()
console.log("filter:", numbers.filter(n => n > 25));

// map() - Transforms every element
console.log("map:", numbers.map(n => n * 2));

//  reduce()
console.log("reduce:",numbers.reduce((total, n) => total + n, 0))

//  some()
console.log("some:", numbers.some(n => n > 40));

//  every()
console.log("every:", numbers.every(n => n > 0));

// sort()
//decending order
console.log("sort:", [...numbers].sort((a, b) =>b-a));
//asending order
console.log("sort:", [...numbers].sort((a, b) => a-b));

//  forEach()
console.log("forEach:");
numbers.forEach(n => console.log(n));


