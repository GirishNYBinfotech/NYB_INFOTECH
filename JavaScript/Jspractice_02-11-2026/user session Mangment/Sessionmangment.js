function createCounter() {
    let count = 0
    return {
        increment: function () {
            count++;
            console.log("Counter:", count);
        },
        decrement: function () {
            count--;
            console.log("Counter:", count);
        },
        getCount: function () {
            return count;
        }
    }
}
const counter = createCounter();
counter.increment()
counter.increment()
counter.decrement()
console.log("Current Count:", counter.getCount())
function UserSession(username) {
    // Private variable using closure
    let isLoggedIn = false;
    this.username = username;
    this.login = function () {
        isLoggedIn = true;
        console.log(this.username + " logged in successfully!");
    }
    this.logout = function () {
        isLoggedIn = false;
        console.log(this.username + " logged out successfully!");
    }
    this.checkSession = function () {
        console.log(
            this.username + " session status:",
            isLoggedIn ? "Active" : "Inactive"
        )
    }
}

const user = new UserSession("Girish")
// Function binding
const loginUser = user.login.bind(user)
const logoutUser = user.logout.bind(user)
const checkUserSession = user.checkSession.bind(user)
loginUser()
checkUserSession()
logoutUser()
checkUserSession()