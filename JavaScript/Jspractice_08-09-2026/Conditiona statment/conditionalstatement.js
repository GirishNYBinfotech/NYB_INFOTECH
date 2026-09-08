//if statment
if(10>9){
    console.log("10 is higher")
}

//ifelse statment
let a=11
if(a>10){
    console.log("a is greater than 10")
}
else{
    console.log("a is lower value")
}

//elseif
let b=200
if(b>300){
    console.log("b is greater then 300")
}
else if(b>200){
    console.log("b is greaterthan 200")
}
else if(b>100){
    console.log("b is greater than 100")
}
else {
    console.log("b is higher")
}

//nested condition
let age=20
var eligible=true

if(age>=18){
    if(eligible){
        console.log("yor are allowed to vote")
    }
}
else{
    console.log("you are not eligible to vote")
}

//switch
let role="user";

switch (role) {
  case "admin":
    console.log("welcome admin")
    break
  case "user":
    console.log("welcome user")
    break
  case "guest":
    console.log("welcome guest")
    break
  default:
    console.log("Unknown role")
}


var a1=10
switch(a1){
    case 11 :
    console.log("you entered 11")
    break;
    case 10:
        console.log(" you entered 10")
        break
    default:
        console.log("any")
}

//Ternary operator
let amount=90
var entery=amount>=100?console.log("you can enter inside"):console.log("you cannot enter inside")

