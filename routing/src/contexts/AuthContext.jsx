import React, { createContext, useState } from "react";
export const AuthContext = createContext({ token: "", handleToken: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleToken = () => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const AuthContext = createContext();
// export const AuthContextProvider = ({ children }) => {
//   // user authentication status
//   const [isAuth, setIsAuth] = useState(false);
//   const handleSignin = ({ username, password }) => {
//     //fake Auth
//     if (username === "admin" && password === "admin") {
//       setIsAuth(true);
//     } else {
//       alert("wrong password");
//     }
//   };

//   const handleSignout = () => {
//     setIsAuth(false);
//   };
//   const value = { isAuth, handleSignin, handleSignout };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
