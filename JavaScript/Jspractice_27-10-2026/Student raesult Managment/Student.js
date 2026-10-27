const students = [
  {
    name: "Rahul",
    marks: [80, 75, 90]
  },
  {
    name: "Girish",
    marks: [60, 65, 70]
  },
  {
    name: "King",
    marks: [30, 25, 40]
  }
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  // Calculate total marks
  let total = 0;

  for (let j = 0; j < student.marks.length; j++) {
    total = total + student.marks[j];
  }

  // Calculate percentage
  let percentage = total / student.marks.length;

  // Determine grade
  let grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  //pass or fail
  let status = "Pass";
  for (let j = 0; j < student.marks.length; j++) {
    if (student.marks[j] < 35) {
      status = "Fail";
      break;
    }
  }

  // Display result
  console.log("Name:", student.name);
  console.log("Total Marks:", total);
  console.log("Percentage:", percentage.toFixed(2) + "%");
  console.log("Grade:", grade);
  console.log("Status:", status);
}
