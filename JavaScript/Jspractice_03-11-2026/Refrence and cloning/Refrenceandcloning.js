//Refrence  copy
let obj={
    one:1,
    two:2,
    three:3,
    four:{
        five:5,
        six:6
    }
}
console.log("obj:",obj)
let obj1=obj
obj1.one="One"
obj1.four.six="Six"
console.log("obj1:",obj1)
console.log("After updated obj1",obj)

//shallow copy
let animals={
    lion:"LION",
    tiger:"TIGER",
    ani:{
        cat:"CAT",
        cow:"COW"
    }
}
console.log("intial animals",animals)
let animal={...animals}
animal.lion="lion"
animal.ani.cat="cat"
console.log("animal",animal)
console.log("After updated animal",animals)

//Deep copy
let o={
    a:"A",
    b:"B",
    c:{
        d:"D",
        e:"E"
    }
}
console.log("o",o)
// let o1=structuredClone(o)
let o1=JSON.parse(JSON.stringify(o))
o1.a="a"
o1.c.e="e"
console.log("o1",o1)
console.log("After updating o1",o)