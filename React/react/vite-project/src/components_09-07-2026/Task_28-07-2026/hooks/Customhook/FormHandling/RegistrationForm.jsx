import UseForm from "./UseForm";


function RegistrationForm() {
  const { values, handleChange, resetForm } = UseForm({
    name: "",
    email: "",
  });

  return (
    <div>
      <h2>Registration Form</h2>

      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br /><br />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br /><br />
      <button onClick={resetForm}>Reset</button>
    </div>
  );
}

export default RegistrationForm;