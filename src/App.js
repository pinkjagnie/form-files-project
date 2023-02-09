import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Form from "./components/Form";

import styles from "./style";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme)
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

      <div className="fixed top-10 right-28 flex">
        <BsFillSunFill className={`pt-0 px-2 pb-2 text-4xl ${theme === "dark" ? styles.darkColor : styles.lightColor}`}/>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <BsFillMoonFill className={`pt-0 px-2 pb-2 text-4xl ${theme === "dark" ? styles.darkColor : styles.lightColor}`}/>
      </div>
      
      <Form theme={theme}/>
      
    </ThemeContext.Provider>
  );
}

export default App;
