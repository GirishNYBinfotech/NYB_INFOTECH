const employee = {
  name: "Rahul",
  address: {
    city: "Hyderabad"
  },
  salary: 0
};

// Optional Chaining (?.)
console.log(employee.address?.city);
console.log(employee.contact?.phone);

// Nullish Coalescing (??)
const city = employee.address?.city ?? "City not available";
const phone = employee.contact?.phone ?? "Phone not available";
const salary = employee.salary ?? 25000;

console.log("City:", city);
console.log("Phone:", phone);
console.log("Salary:", salary);