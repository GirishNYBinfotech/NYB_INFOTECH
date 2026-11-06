console.log("Spread operator")
//expanding array
const arr1 = [10, 20, 30];
const arr2 = [...arr1, 40, 50]
console.log(arr2)

//object
const employee = {
    name: "Rahul",
    age: 25
}
const updatedEmployee = {
    ...employee,
    city: "Hyderabad"
}
console.log(updatedEmployee)

//merging two arrays
const a = [1, 2, 3]
const b = [4, 5, 6]
const result = [...a, ...b]
console.log(result)