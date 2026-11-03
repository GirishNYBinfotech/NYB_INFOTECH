//getter function
const employee = {
    firstName: "Girish",
    lastName: "Reddy",
    get fullName() {
        return this.firstName + " " + this.lastName
    }
}
console.log(employee.fullName)

//setter function
const employee1 = {
    name: "Rahul",
    set updateName(newName) {
        this.name = newName
    }
}
employee1.updateName = "Girish"
console.log(employee1.name)

//getter and setter function
const student = {
    name: "King",
    _marks: 80,
    get marks() {
        return this._marks;
    },
    set marks(newMarks) {
        if (newMarks >= 0 && newMarks <= 100) {
            this._marks = newMarks
        } 
        else {
            console.log("Invalid marks.please Enter between 0 and 100.")
        }
    }
}
console.log(student.marks)
student.marks = 95
console.log(student.marks)
student.marks = 150