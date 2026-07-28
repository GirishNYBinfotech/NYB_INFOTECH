import UseForm from "./UseForm";

function ProfileForm() {
  const { values, handleChange } = UseForm({
    city: "",
    country: "",
  })

  return (
    <div>
      <h2>Profile Form</h2>
      <input
        name="city"
        value={values.city}
        onChange={handleChange}
        placeholder="City"
      />
      <br /><br />
      <input
        name="country"
        value={values.country}
        onChange={handleChange}
        placeholder="Country"
      />
    </div>
  );
}

export default ProfileForm;