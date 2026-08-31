let arr=[10,20,10,40,30,40]
let set=new Set(arr)
console.log(set)

let arr1=[50,50,40,30,60]
let arr2=[40,56]
let set1=new Set([...arr,...arr1,...arr2])
console.log(set1)

const numbers=[1,2,3,2,4,1,5]
const uniqueNumbers=numbers.filter((value, index)=>{
    return numbers.indexOf(value)===index
})
console.log(uniqueNumbers)

const numbers1=[1, 2, 3, 2, 4, 1]
const uniqueNumbers1=[]
for (let number of numbers1) {
    if (!uniqueNumbers1.includes(number)){
        uniqueNumbers1.push(number)
    }
}
console.log(uniqueNumbers1)