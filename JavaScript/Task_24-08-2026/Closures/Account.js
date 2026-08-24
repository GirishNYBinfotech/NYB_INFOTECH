function bankAccount() {
    let balance = 1000

    return {
        getBalance: function () {
            return balance;
        },
        deposit: function (amount) {
            balance += amount
        }
    }
}
const account = bankAccount()
console.log("Intial balance:",account.getBalance())
account.deposit(500)
console.log("After Deposite:",account.getBalance())