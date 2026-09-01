//Optiona chaining
const user = {
  name:"Girish",
  address: {
    city:"New York"
  }
}
console.log(user?.address?.city)
console.log(user?.phone?.number)

//Nullish coalescling
console.log(0??100)
console.log(""??"Default")
console.log(false??true)
console.log(null??"Guest")
console.log(undefined??"Guest")

const response={
    profile:{
      name:"King"
    }
  }
const name=response?.profile?.name??"Girish"
const age=response?.profile?.age??18
console.log(name)
console.log(age)

