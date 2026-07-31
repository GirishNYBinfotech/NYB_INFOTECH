import Student from "./Student";

function Teacher() {

  const student = [
    "Girish",
    24,
    ["React", "Java", "Python"]
  ];

  const [name, age, [course1, course2, course3]] = student;

  return (
    <Student
      name={name}
      age={age}
      course1={course1}
      course2={course2}
      course3={course3}
    />
  );
}

export default Teacher;