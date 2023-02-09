import React, { useEffect, useState } from "react";

import ReactSwitch from "react-switch";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Form from "./components/Form";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme)
  };

  return (
    <>
      <div className="fixed top-10 right-28 flex">
        <BsFillSunFill className={`pt-0 px-2 pb-2 text-4xl ${theme === "dark" ? "text-[whitesmoke]" : "text-[#1f2b37]"}`}/>
        <ReactSwitch onChange={handleThemeSwitch} checked={theme === "dark"} />
        <BsFillMoonFill className={`pt-0 px-2 pb-2 text-4xl ${theme === "dark" ? "text-[whitesmoke]" : "text-[#1f2b37]"}`}/>
      </div>
      <Form theme={theme}/>
    </>
  );
}

export default App;
