import { useState } from "react";
import { LanguageContext } from "./Context";
import Home from "./Home";


function Language() {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Home/>
    </LanguageContext.Provider>
  );
}

export default Language