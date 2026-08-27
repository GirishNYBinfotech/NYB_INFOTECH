const animal={
  eats:true
}
const dog={
  barks:true
}
dog.__proto__ = animal
console.log(dog.barks)
console.log(dog.eats)