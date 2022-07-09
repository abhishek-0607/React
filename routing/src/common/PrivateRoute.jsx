import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Redirect, Route, Routes } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

// export const PrivateRoute = ({
//   redirectPath = "/login",
//   push = false,
//   path,
//   children,
//   exact = false,
// }) => {
//   const { isAuth } = useContext(AuthContext);

//   return isAuth ? (
//     <Routes>
//       <Route exact={exact} path={path}>
//         {children}
//       </Route>
//     </Routes>
//   ) : (
//     <Redirect to={redirectPath} push={push} />
//   );
// };
