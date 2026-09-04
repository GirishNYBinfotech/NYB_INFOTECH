const form = document.getElementById("loginForm")
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    if (name === "" || email === "") {
            document.getElementById("message").textContent ="Please fill the form"
        } 
        else {
            document.getElementById("message").textContent=`Hello ${name}, your email is ${email}`;
        }
    
})