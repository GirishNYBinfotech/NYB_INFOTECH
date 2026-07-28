import { useState } from "react";

function UseForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialValues)
  };

  return { values, handleChange, resetForm };
}

export default UseForm