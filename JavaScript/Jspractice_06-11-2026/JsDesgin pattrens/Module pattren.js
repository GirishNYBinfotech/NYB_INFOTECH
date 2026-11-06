//Module pattren
console.log("Module pattren:")
const Employee = (function () {
  let salary = 50000
  return {
    getSalary: function () {
      return salary
    },
    setSalary: function (amount) {
      salary = amount
    }
  }
})();

console.log(Employee.getSalary())
Employee.setSalary(60000)
console.log(Employee.getSalary())