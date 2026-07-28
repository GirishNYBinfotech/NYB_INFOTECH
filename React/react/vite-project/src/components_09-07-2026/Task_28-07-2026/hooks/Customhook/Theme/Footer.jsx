import UseTheme from "./UseTheme";

function Footer() {
  const { theme } = UseTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#6b3434" : "#e02020",
        color: "white",
        padding: "20px",
      }}>
      Footer
    </div>
  );
}

export default Footer