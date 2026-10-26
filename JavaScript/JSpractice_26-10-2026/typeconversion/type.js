console.log(" TYPE CONVERSION");

// String to Number
let a = "100";
console.log(Number(a))
console.log(typeof Number(a))

//Number to String
let b = 200;
console.log(String(b))
console.log(typeof String(b))

//String to Boolean
console.log(Boolean("Hello"))
console.log(Boolean(""))

// Number to Boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));

// Boolean to Number
console.log(Number(true))
console.log(Number(false))

//  Invalid number conversion
console.log(Number("Hello"));


console.log(" TYPE COERCION");
// String + Number
console.log("10" + 5);

// String - Number
console.log("10" - 5); // 5

//  String * Number
console.log("10" * 2);

//  String / Number
console.log("20" / 2);

// Boolean + Number
console.log(true + 5)
console.log(false + 5)

//  Null coercion
console.log(null + 5)

//  Undefined coercion
console.log(undefined + 5);

//  Equality coercion
console.log("5" == 5); 
console.log("5" === 5);

//  String + Boolean
console.log("Hello " + true);

// Empty string conversion
console.log("" + 10);

//  Array coercion
console.log([1, 2] + 3);

// Null and undefined equality
console.log(null == undefined);
console.log(null === undefined);

// Final challenge
console.log("5" + 2 + 3); 
console.log("5" - 2 + 3); 
console.log(5 + true + "2"); 