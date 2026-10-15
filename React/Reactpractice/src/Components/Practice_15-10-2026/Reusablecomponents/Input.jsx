function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name}>{label}</label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;