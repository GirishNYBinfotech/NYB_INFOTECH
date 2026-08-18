import { useSearchParams } from "react-router-dom";

function Student() {
  const [searchParams] = useSearchParams()

  const name = searchParams.get("name")
  const age = searchParams.get("age")
  const course = searchParams.get("course")

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  )
}

export default Student