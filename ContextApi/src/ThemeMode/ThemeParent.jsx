import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const ThemeParent = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    let heade = document.querySelector("html");

    heade.classList.remove("light", "dark");
    heade.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ lightTheme, themeMode, darkTheme }}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {" "}
            <Card />{" "}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeParent;
