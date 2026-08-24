function login(username, callback) {
    console.log("Logging in " + username);
    setTimeout(() => {
        console.log("Login successful")
        callback()
    }, 2000)
}

function showDashboard() {
    console.log("Opening Dashboard")
}

login("Girish", showDashboard)


function user(name,callback){
    console.log("hello",name)
    callback()
}
function newname(){
    console.log("welcome")
    
}
user("Girish",newname)