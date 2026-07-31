function Student({name,age,course1,course2,course3 }) {
  return (
    <div>
        <h2>nested destructuring</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Course 1: {course1}</h2>
      <h2>Course 2: {course2}</h2>
      <h2>Course 3: {course3}</h2>
    </div>
  )
}

export default Student