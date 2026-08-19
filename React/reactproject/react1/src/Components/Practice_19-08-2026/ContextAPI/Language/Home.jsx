import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

function Home() {
  const { language, setLanguage } = useContext(LanguageContext);

  const messages = {
    english: "hello",
    telugu: "namaskram",
  }

  return (
    <div>
      <h1>{messages[language]}</h1>

      <button onClick={() => setLanguage("english")}>English</button>
      <button onClick={() => setLanguage("telugu")}>Telugu</button>
    </div>
  );
}

export default Home;