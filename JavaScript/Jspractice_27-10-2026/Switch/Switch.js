let marks = 85;
let grade;

switch (true) {
  case marks >= 90:
    grade = "A+";
    break;

  case marks >= 80:
    grade = "A";
    break;

  case marks >= 70:
    grade = "B";
    break;

  case marks >= 60:
    grade = "C";
    break;

  case marks >= 35:
    grade = "D";
    break;

  default:
    grade = "Fail"
}

console.log("Marks:", marks)
console.log("Grade:", grade)

//Traffic signal
let signal = "red";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid signal");
}