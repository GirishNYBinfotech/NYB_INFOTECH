//try..catch
try {
  let result = 10 / 0;
  console.log(result);

  console.log(undefinedVariable)
} 
catch (error) {
  console.log("An error occurred:", error.message)
}
console.log("Program continues...")

//age eligiblity
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18 years old");
    }

    console.log("You are eligible");
  } 
  catch (error) {
    console.log(error.message);
  }
  finally{
    console.log("thank you for visiting")
  }
}

checkAge(16);
checkAge(25)