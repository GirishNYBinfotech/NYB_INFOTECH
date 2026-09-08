// Variables
var name = "Girish"
let age = 25
const salary=30000
var isEmployee=true

// Different Data Types
let skills=["JavaScript","React","HTML"]
let address={city:"Vijayawada",country: "India" }
let experience=null
let bonus

// Operators
let nextYearAge=age+1
let yearlySalary=salary*12
let isAdult=age>=18
let hasGoodSalary=salary>25000
let eligible=isEmployee && isAdult

// Template Literal
let result=`
Employee Details
Name:${name}
Age:${age}
Next Year Age:${nextYearAge}
Salary:RS.${salary}
Yearly Salary:₹${yearlySalary}
Employee:${isEmployee}
Adult:${isAdult}
Good Salary:${hasGoodSalary}
Eligible:${eligible}
Skills:${skills.join(", ")}
City:${address.city}
Country:${address.country}
Experience:${experience}
Bonus:${bonus}`
console.log(result)