import React, { createContext, useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("abcde");

  return (
    <AppContext.Provider value={{ isAuth, token }}>
      {children}
    </AppContext.Provider>
  );
};
