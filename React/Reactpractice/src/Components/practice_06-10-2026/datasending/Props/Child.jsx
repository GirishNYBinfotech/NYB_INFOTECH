import React from "react";

const Child = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2>objectname:{props.data.name}</h2>
      <p>objectage:{props.data.age}</p>
      <button onClick={props.handleClick}>
        Click Me
      </button>
    </div>
  );
};
export default Child