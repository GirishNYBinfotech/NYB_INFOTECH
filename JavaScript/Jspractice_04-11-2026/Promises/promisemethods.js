//promise methods
//.all()
let pp1=Promise.resolve("done")
let pp2=Promise.reject('unscuess')
let pp3=Promise.resolve("sucess")
Promise.all([pp1,pp2,pp3])
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})

//.allsettled
let x1=Promise.resolve("sucess")
let x2=Promise.resolve("done")
let x3=Promise.reject("not done")
Promise.allSettled([x1,x2,x3])
.then((d)=>{
    console.log(d)
})

//.race()
let y1=Promise.reject("hello")
let y2=Promise.reject("hai")
let y3=Promise.resolve("hell")
Promise.race([y1,y2,y3])
.then((res)=>{
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})

//.any()
let z1=Promise.reject("uncompleted")
let z2=Promise.resolve("complete")
let z3=Promise.resolve("done")
Promise.any([z1,z2,z3])
.then((n)=>{
    console.log(n)
})
.catch((c)=>{
    console.log(c)
})