"use client";

import React, { useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={switchTheme}
      className={theme === "dark" ? "clicked" : ""}
      id="darkMode"
    ></button>
  );
}
