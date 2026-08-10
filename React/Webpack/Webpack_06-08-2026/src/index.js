const person = {
  name: "Girish",
  age: 22
};

const greet = (user) => {
  console.log(`Hello ${user.name}`);
};

class Student {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }
}

greet(person);

const s1 = new Student("Ravi");
s1.display()