class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age)
        this.course = course
    }
    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }
    teach() {
        console.log(`${this.name} teaches ${this.subject}.`);
    }
}
const student1 = new Student("Girish", 22, "JavaScript")
const teacher1 = new Teacher("Rahul", 35, "JavaScript")
student1.teacher = teacher1
student1.introduce()
teacher1.introduce()
student1.study()
teacher1.teach()
console.log(`${student1.name}'s teacher is ${student1.teacher.name}`);
