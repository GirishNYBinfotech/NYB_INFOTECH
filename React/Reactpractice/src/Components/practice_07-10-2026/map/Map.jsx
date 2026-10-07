import React from 'react'

const Map = () => {
    let skills=["HTML","JS","CSS","React"]
  return (
    <div>
        <>
        <h2>Skills</h2>
        <ol>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
            {/* {skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
            })} */}
        </ol>
        </>
    </div>
  )
}

export default Map