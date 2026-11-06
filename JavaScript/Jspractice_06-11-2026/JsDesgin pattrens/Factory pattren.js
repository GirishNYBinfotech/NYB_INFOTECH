//factory pattren
console.log("factory pattren:")
function Employee1(type) {
  if (type === "developer") {
    return {
      role: "Developer",
      salary: 50000
    }
  }
  if (type === "manager") {
    return {
      role: "Manager",
      salary: 80000
    }
  }
}

const emp1 = Employee1("developer")
const emp2 = Employee1("manager")
console.log(emp1)
console.log(emp2)