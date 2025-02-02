"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    dark: true,
  });

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("dark") === "true"; // Convert to boolean
  //   setUser((prev) => ({ ...prev, dark: savedTheme }));
  //   document.body.className = savedTheme ? "dark" : "dark";
  // }, []);

  // // Save theme to localStorage and update body class on change
  // useEffect(() => {
  //   localStorage.setItem("dark", user.dark);
  //   document.body.className = user.dark ? "dark" : "dark";
  // }, [user.dark]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("Context is missing");
  }

  return context;
};
