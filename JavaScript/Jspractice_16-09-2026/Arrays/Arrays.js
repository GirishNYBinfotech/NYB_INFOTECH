//arrays
let arr=[1,2,3,4,5,66,7,["a","b",44,true,undefined,null],33,123]
console.log(arr[0])
console.log(arr[7][0])
console.log(arr[7][3])
console.log(arr[5])

let arr1=new Array
arr1[0]=100
arr1[1]=200
arr1[2]=300
console.log(arr1)
console.log(arr.length)

//Array methods
//splice
console.log("array methods")
arr.splice(2,1,77)
console.log(arr)
arr[7].splice(4,1,"UNDEFINED")
console.log(arr)
arr[7].splice(3,0,"newly added")
console.log(arr)

//push
arr.push(22)
console.log(arr)
//pop
arr.pop()
console.log(arr)

//unshift
arr.unshift(22)
console.log(arr)

//shift
arr.shift()
console.log(arr)

//includes
console.log(arr.includes(66))
console.log(arr.includes(6))

//indexOf
console.log(arr.indexOf(77))
console.log(arr.indexOf(4))

//find
console.log(arr.find(x=>x>30))
console.log(arr.find(x=>x>66))

//findIndex
console.log(arr.findIndex(x=>x>4))
console.log(arr.findIndex(x=>x>33))

//for of
for(let num of arr){
    console.log(num)
}

//for Each
arr.forEach((value)=>{
    console.log(value)
})

//map
let numbers=[10,20,30,40]
let result=numbers.map((value) => {
    return value * 2
})
console.log(result)

//filter
console.log(arr.filter(x=>x>2))
console.log(arr.filter(x=>x>40))
console.log(arr.filter(x=>x>60))

//reduce
console.log(arr.reduce((x,y)=>x+y,0))
console.log(arr1.reduce((x,y)=>x+y,0))
console.log(numbers.reduce((x,y)=>x*y))

//some
console.log(arr.some(x=>x>2))
console.log(arr.some(x=>x>66))

//every
console.log(arr.every(x=>x>3))
console.log(arr.every(x=>x>66))

//join
var a=arr.join()
console.log(a)
console.log(typeof(a))

//flat 
var b=arr.flat()
console.log(b)

//slice
console.log(arr.slice(2,6))
console.log(arr.slice(3,8))

//sort
console.log(arr.sort())
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

//without sorting
for (let i=0;i<arr.length-1;i++) {
    for (let j=0;j<arr.length-1-i;j++) {
        if (arr[j]>arr[j+1]) {
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)

//removing duplicates
var ab=[1,1,2,3,44,44,56,76,79]
let set=new Set(ab)
console.log(set)

var ba=ab.filter((value,index)=>{
   return ab.indexOf(value)===index
})
console.log(ab)
 console.log(ba)

//Highest and lowest
let arr2=[10, 5, 25, 8, 30, 15]
let highest=arr2[0]
let lowest=arr2[0]

for (let i=1;i<arr2.length;i++) {
    if (arr2[i]>highest) {
        highest=arr2[i]
    }
    if (arr2[i]<lowest) {
        lowest=arr2[i]
    }
}
console.log("Highest:", highest)
console.log("Lowest:", lowest)