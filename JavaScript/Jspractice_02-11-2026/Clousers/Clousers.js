//clousers
function counter(){
    let count=0
    function inner(){
        count++
        console.log(count)
    }
    return inner
}
let result=counter()
result()
result()
result()


//Data privacy
function employee() {
    let salary = 50000
    return function () {
        console.log("Employee Salary:", salary)
    }
}
const getSalary = employee()
getSalary()

//BankBalance
function bankAccount(initialBalance) {
    let balance = initialBalance
    return {
        deposit: function (amount) {
            balance += amount
            console.log("After credit Balance:", balance)
        },
        withdraw: function (amount) {
            balance -= amount
            console.log("After debit Balance:", balance)
        },
        checkBalance: function () {
            console.log("final Current Balance:", balance)
        }
    }
}
const account = bankAccount(1000)
account.deposit(500)
account.withdraw(200)
account.checkBalance()