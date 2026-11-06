//Generator
console.log("Generator")
function* numbers() {
  console.log("First number")
  yield 1;
  console.log("Second number")
  yield 2;
  console.log("Third number")
  yield 3;
}

const gen = numbers()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())