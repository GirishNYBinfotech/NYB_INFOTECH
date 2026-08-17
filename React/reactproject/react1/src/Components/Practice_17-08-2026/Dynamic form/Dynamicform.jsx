import { useState } from "react";

function Dynamicform() {

  const [skills, setSkills] = useState([""]);
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  }

  const [country, setCountry] = useState("");
  const states = {
    India: ["Andhra Pradesh", "Telangana", "Tamil Nadu"],
    USA: ["California", "Texas", "Florida"]
  };

  const [student, setStudent] = useState("");
  const [education, setEducation] = useState([{}]);

  const addEducation = () => {
    setEducation([...education, {}]);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <input placeholder="Enter skill" />
          <button onClick={() => removeSkill(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>

      <hr />
      <h2>Country and State</h2>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>

      <select>
        <option>Select State</option>

        {states[country]?.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <hr />

      <h2>Student</h2>
      <select onChange={(e) => setStudent(e.target.value)}>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {student === "Yes" && (
        <input placeholder="Enter College Name" />
      )}

      <hr />

      {/* 4. Dynamic Form Sections */}
      <h2>Education</h2>
      {education.map((_, index) => (
        <div key={index}>
          <input placeholder="Enter Degree" />
          <input placeholder="Enter College" />
          <br /><br />
        </div>
      ))}

      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}

export default Dynamicform