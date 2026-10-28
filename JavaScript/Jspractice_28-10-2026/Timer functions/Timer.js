//setTimeout()
console.log("one")
setTimeout(()=>{
    console.log("two")
},2000)
console.log("three")

//clearTimeout
const timer = setTimeout(() => {
  console.log("This will not execute");
}, 5000)
clearTimeout(timer)

//setinterval
setInterval(() => {
  console.log("Hello JavaScript")
}, 2000)

//clearInterval
let count = 0;
const maintimer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(maintimer)
  }
}, 1000)