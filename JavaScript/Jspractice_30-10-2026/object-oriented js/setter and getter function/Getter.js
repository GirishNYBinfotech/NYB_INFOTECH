//Getter function
class Employee{
    constructor(name){
        this.name=name
    }
    get getName(){
        return this.name
    }
}
let emp=new Employee("King")
console.log(emp.getName)