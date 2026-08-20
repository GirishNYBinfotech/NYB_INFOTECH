import React from "react";

function About() {
  console.log("About component loaded");

  return (
    <div>
      <h2>About Component</h2>
      <p>This component was loaded lazily.</p>
    </div>
  );
}

export default About;