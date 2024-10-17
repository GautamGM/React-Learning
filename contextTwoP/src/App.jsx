import { useState } from "react";
import Card from "./Components/Card/card";
import ThemeBtn from "./Components/ThemeBtn/ThemBtn";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { useEffect } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  // giving the depence when it chnage intire code will we rerender
  // Actual change in theme

  useEffect(() => {
    const Mode = document.querySelector("html");
    Mode.classList.remove("light", "dark");
    Mode.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
