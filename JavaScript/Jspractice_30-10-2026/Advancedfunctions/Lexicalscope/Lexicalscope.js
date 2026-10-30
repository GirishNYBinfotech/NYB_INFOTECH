let name = "Girish";
function outer() {
    let age = 25;
    function inner() {
        console.log(name);
        console.log(age);
    }
    inner()
}
outer()