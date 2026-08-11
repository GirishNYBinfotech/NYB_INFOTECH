export function getStudent(name, marks) {
  return {
    name,
    marks,
    result: marks >= 40 ? "Pass" : "Fail"
  };
}