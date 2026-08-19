import Home from "./Home";
import LanguageProvider from "./LanguageProvider";

function Language() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default Language