import React from 'react'

const FormHandling = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" placeholder="Username" />
      <br/>
      <label>Password</label>
      <input type="password" placeholder="Password" />
      <br/>
      <button type="submit">Login</button>
    </form>
    </>
  )
}

export default FormHandling