import { useContext } from "react";
import { LanguageContext } from "./Context";

function Home() {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <div>
      <h1>Language: {language}</h1>
      <button onClick={() => setLanguage("Telugu")}>Telugu</button>
      <button onClick={() => setLanguage("English")}>English</button>
    </div>
  );
}

export default Home