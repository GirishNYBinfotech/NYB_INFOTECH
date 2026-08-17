import { useState } from "react";

function Skillform() {
  const [skills, setSkills] = useState([""]);

  const addSkill = () => {
    setSkills([...skills, ""]);
  }

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills)
  }

  const handleChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(skills)
  }

  return (
    <div>
      <h2>Skills Form</h2>
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Skill ${index + 1}`}
              value={skill}
              onChange={(e) => handleChange(index, e.target.value)}/>
            <button type="button" onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}

        <br />
        <button type="button" onClick={addSkill}>Add Skill</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Skillform