let a=12
let p= new Promise((resolve,reject)=>{
    if(a>11){
        resolve("a is higher than 11")
    }
    else{
        reject("a is lower value")
    }
})
.then((hai)=>{
    console.log(hai)
})
.catch((error)=>{
    console.log(error)
})

//login
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let username="Girish"
            let password="1234"
            if (username==="Girish"&&password==="1234"){
                resolve("Login successful")
            } 
            else {
                reject("Invalid username or password")
            }
        },2000)
    })
}
login()
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error)
    })
