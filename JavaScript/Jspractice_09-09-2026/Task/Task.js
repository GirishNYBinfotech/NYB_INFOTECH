const employees=[
{id:1,name:"Girish",age:25,department:"IT",salary:40000},
{id:2,name:"Rahul",age:28,department:"HR",salary:35000},
{id:3,name:"John",age:30,department:"IT",salary:50000},
{id:4,name:"Priya",age:26,department:"Finance",salary:45000}
]

const[firstEmployee,secondEmployee,...remainingEmployees]=employees
console.log(firstEmployee)
console.log(secondEmployee)
console.log(remainingEmployees)

document.getElementById("firstEmployee").textContent=JSON.stringify(firstEmployee)
document.getElementById("secondEmployee").textContent=JSON.stringify(secondEmployee)
document.getElementById("remainingEmployees").textContent=JSON.stringify(remainingEmployees)

const{name,age,department}=firstEmployee
console.log(name)
console.log(age)
console.log(department)

document.getElementById("employeeName").textContent=name
document.getElementById("employeeAge").textContent=age
document.getElementById("employeeDepartment").textContent=department

const{name:employeeName,salary:employeeSalary,city="Hyderabad"}=firstEmployee
console.log(employeeName)
console.log(employeeSalary)
console.log(city)

document.getElementById("renamedEmployee").textContent=employeeName
document.getElementById("employeeSalary").textContent=employeeSalary
document.getElementById("employeeCity").textContent=city

const employeeNames=employees.map(employee=>employee.name)
console.log(employeeNames)

document.getElementById("employeeNames").textContent=employeeNames.join(",")

const itEmployees=employees.filter(employee=>employee.department==="IT")
console.log(itEmployees)

document.getElementById("itEmployees").innerHTML=itEmployees.map(employee=>`
<div class="employee">
<strong>Name:</strong>${employee.name}<br>
<strong>Age:</strong>${employee.age}<br>
<strong>Salary:</strong>₹${employee.salary}
</div>
`).join("")

const totalSalary=employees.reduce((total,employee)=>total+employee.salary,0)
console.log(totalSalary)

document.getElementById("totalSalary").textContent=`₹${totalSalary.toLocaleString()}`

const employee=employees.find(employee=>employee.id===3)
console.log(employee)

document.getElementById("foundEmployee").innerHTML=`
<div class="employee">
<strong>ID:</strong>${employee.id}<br>
<strong>Name:</strong>${employee.name}<br>
<strong>Age:</strong>${employee.age}<br>
<strong>Department:</strong>${employee.department}<br>
<strong>Salary:</strong>₹${employee.salary}
</div>
`

const highSalaryExists=employees.some(employee=>employee.salary>45000)
console.log(highSalaryExists)

document.getElementById("highSalary").textContent=highSalaryExists

const allAbove20=employees.every(employee=>employee.age>20)
console.log(allAbove20)

document.getElementById("allAbove20").textContent=allAbove20

const updatedEmployee={
...firstEmployee,
salary:55000,
city:"Vijayawada"
}

console.log(firstEmployee)
console.log(updatedEmployee)

document.getElementById("updatedEmployee").innerHTML=`
<div class="employee">
<strong>Original:</strong>${JSON.stringify(firstEmployee)}
<br><br>
<strong>Updated:</strong>${JSON.stringify(updatedEmployee)}
</div>
`

const newEmployee={
id:5,
name:"Anil",
age:27,
department:"IT",
salary:42000
}

const updatedEmployees=[...employees,newEmployee]
console.log(updatedEmployees)

document.getElementById("updatedEmployees").innerHTML=updatedEmployees.map(employee=>`
<div class="employee">
${employee.id}-${employee.name}-${employee.department}-₹${employee.salary}
</div>`).join("")

function calculateTotal(...salaries){
return salaries.reduce((total,salary)=>total+salary,0)
}
console.log(calculateTotal(10000,20000,30000))
document.getElementById("calculatedSalary").textContent=calculateTotal(10000,20000,30000).toLocaleString()

const employeeKeys=Object.keys(firstEmployee)
console.log(employeeKeys)
document.getElementById("employeeKeys").textContent=employeeKeys.join(",")

const employeeValues=Object.values(firstEmployee)
console.log(employeeValues)
document.getElementById("employeeValues").textContent=employeeValues.join(",")

const employeeEntries=Object.entries(firstEmployee)
console.log(employeeEntries)
document.getElementById("employeeEntries").textContent=employeeEntries.map(entry=>`${entry[0]}=${entry[1]}`).join("|")
console.log(firstEmployee.manager?.name)

const managerName=firstEmployee.manager?.name??"No Manager"
document.getElementById("manager").textContent=managerName

const bonus=firstEmployee.bonus??5000
console.log(bonus)
document.getElementById("bonus").textContent=bonus.toLocaleString()
