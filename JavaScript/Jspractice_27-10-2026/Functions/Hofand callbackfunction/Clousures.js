//clousures
console.log("clousure:")
function outer() {
  let name = "JavaScript";

  function inner() {
    console.log(name);
  }

  return inner;
}

const result1= outer();
result1();

//Counter
function createCounter() {
  let count=0
  return function () {
    count++
    console.log(count)
  }
}
const counter = createCounter();
counter()
counter()
counter()
