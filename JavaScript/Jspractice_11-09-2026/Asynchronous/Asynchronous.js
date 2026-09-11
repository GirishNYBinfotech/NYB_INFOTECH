console.log("a")
console.log("b")
setTimeout(()=>{
    console.log("c")
},1000)
console.log("d")

//timer functions
//setTimeout()
let a=setTimeout(()=>{
    console.log("data pined after 2seconds")
},2000)

//setInterval
// let b=setInterval(()=>{
//     console.log("printing data every 5 seconds")
// },5000)

//clear interval
let b1=setInterval(()=>{
    console.log("clearing setinterval in 4 seconds")
},1000)
let b2=setTimeout(()=>{
    clearInterval(b1)
},5000)

//clearTimeout
let a1=setTimeout(()=>{
    console.log("cleared the interval")
},2000)
clearTimeout(a1)

//callback()
function hello(name){
    console.log("hello " +name)
}
function hai(callback){
    callback("girish")
}
hai(hello)

//callback hell
function login(callback){
    setTimeout(()=>{
        console.log("Login successful")
        callback()
    },1000)
}
function getUser(callback){
    setTimeout(()=>{
        console.log("User data received")
        callback()
    }, 1000)
}
function getOrders(callback){
    setTimeout(()=>{
        console.log("Orders received")
        callback()
    }, 1000)
}
// Callback Hell
login(()=>{
    getUser(()=>{
        getOrders(()=>{
            console.log("All done")
        })
    })
})

//Promises
let c=new Promise((resolve,reject)=>{
    if(true){
        resolve("done")
    }
    else{
        reject("unsuccessful")
    }
})
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("finally printed")
})

//Promise static methods
//promise.any()
let p1=Promise.reject("not done")
let p2=Promise.reject("failed")
let p3=Promise.resolve("successfull")
Promise.any([p1,p2,p3])

.then((sucess)=>{
    console.log(sucess)
})
.catch((fail)=>{
    console.log(fail)
})

//promise.all()
let p11=Promise.resolve("done")
let p22=Promise.reject("not done")
let p33=Promise.resolve("successful")
Promise.all([p11,p22,p33])

.then((done)=>{
    console.log(done)
})
.catch((fail)=>{
    console.log(fail)
})

//promise.allsettled()
let p10=Promise.resolve("done")
let p20=Promise.reject("not done")
let p30=Promise.reject("failed")
Promise.allSettled([p10,p20,p30])

.then((done)=>{
    console.log(done)
})
.catch((fail)=>{
    console.log(fail)
})

//promise.race()
let p4=Promise.reject("not done")
let p5=Promise.resolve("done")
let p6=Promise.reject("unsucessful")
Promise.race([p4,p5,p6])

.then((completed)=>{
    console.log(completed)
})
.catch((notcompleted)=>{
    console.log(notcompleted)
})

//async/await
function user(){
    setTimeout(()=>{
        console.log("users data")
    },1000)
}
async function data(){
    console.log("data recived")
    let usersinfo=await user()
    console.log("data transfered")
}
data()

