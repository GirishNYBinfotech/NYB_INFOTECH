//promise utilities
//promise.all()
let p1=Promise.resolve("done")
let p2=Promise.reject("not done")
var p3=Promise.resolve("success")
Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//promise.allsettled()
let pp1=Promise.resolve("done")
let pp2=Promise.resolve("not done")
var pp3=Promise.resolve("success")
Promise.allSettled([pp1,pp2,pp3])
.then((res)=>{
    console.log(res)
})

//promise.race()
let p1p=Promise.reject("uncomplete")
let p2p=Promise.reject("not done")
var p3p=Promise.resolve("success")
Promise.race([p1p,p2p,p3p])
.then((num)=>{
    console.log(num)
})
.catch((error)=>{
    console.log(error)
})

//promise.any()
let pro1=Promise.reject("done")
let pro2=Promise.reject("not done")
var pro3=Promise.resolve("success")
Promise.any([pro1,pro2,pro3])
.then((n)=>{
    console.log(n)
})
.catch((e)=>{
    console.log(e)
})