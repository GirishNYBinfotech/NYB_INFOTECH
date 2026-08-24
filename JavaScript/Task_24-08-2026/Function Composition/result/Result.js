const getMarks = (student) => student.marks
const addBonus = (marks) => marks + 5
const checkResult = (marks) =>marks >= 40 ? "Pass" : "Fail"

const student = {
    name: "Rahul",
    marks: 38
}

const result=checkResult(addBonus(getMarks(student)))
console.log(result)