import { useMemo, useState } from "react";

function Grade() {
  const [maths, setMaths] = useState(40);
  const [science, setScience] = useState(50);
  const [english, setEnglish] = useState(60);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating result...")
    const average = (maths + science + english) / 3

    let grade

    if (average >= 90) {
      grade = "A"
    } 
    else if (average >= 75) {
      grade = "B"
    } 
    else if (average >= 60) {
      grade = "C"
    } 
    else {
      grade = "D"
    }

    return {
      average,
      grade
    }
  }, [maths, science, english])

  return (
    <div>
      <h2>Student Result</h2>
      <p>Maths: {maths}</p>
      <button onClick={() => setMaths(maths + 5)}>Increase Maths</button>
      <p>Science: {science}</p>
      <button onClick={() => setScience(science + 5)}>Increase Science</button>
      <p>English: {english}</p>
      <button onClick={() => setEnglish(english + 5)}>Increase English</button>

      <hr />

      <h3>Average: {result.average}</h3>
      <h3>Grade: {result.grade}</h3>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default Grade