//while loop
let i=1
while (i<=3) {
    console.log(i)
    i++
}

//dowhile loop
a=1
do{
    console.log("do printed")
    console.log("printing..")
    a++
}
while(a<=6)

//for loop

for(let x=1;x<=10;x++){
    console.log("for loop printing")
}

//for of

let num=[1,2,3,4,"hai"]
for(var number of num){
    console.log(number)
}


//for in
let details={
    name:"girish",
    id:101,
    city:"Hyd"
}
let z=[2,3,45]
for (let d in details){
    console.log(d)
}
for(let zz in z){
    console.log(zz)
}