//setter function
class student{
    constructor(name){
        this.name=name
    }
    set setName(newname){
        this.name=newname
    }
}
let stu=new student("Girish")
stu.setName="Rahul"
console.log(stu.name)