function Login() {
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login