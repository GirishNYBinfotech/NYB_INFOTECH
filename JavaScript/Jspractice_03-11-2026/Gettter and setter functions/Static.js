//Static method
console.log("Static method:")
class Student {
    constructor(name, marks) {
        this.name=name
        this.marks=marks
    }
    static collegeName() {
        return "Engineering College"
    }
    display() {
        console.log(this.name, this.marks)
    }
}
console.log(Student.collegeName())
const student1=new Student("King",90)
student1.display()