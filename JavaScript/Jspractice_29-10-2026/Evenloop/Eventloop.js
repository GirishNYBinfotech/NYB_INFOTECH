//eventloop
console.log("Event Loop:")
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

//callstack and callbackqueue
console.log("callstack and callbackqueue:")
function first() {
  console.log("First");
}
function second() {
  console.log("Second");
}
console.log("Start")
setTimeout(first, 0)
second();
console.log("End")