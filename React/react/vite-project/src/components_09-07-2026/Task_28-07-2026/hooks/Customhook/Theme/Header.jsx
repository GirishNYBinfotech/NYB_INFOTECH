import UseTheme from "./UseTheme";

function Header() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
      }}
    >
      <h2>Header</h2>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Header;