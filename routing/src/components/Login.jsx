import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="enter Email"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="enter Password"
      />
      <button
        onClick={() => {
          try {
            fetch("https://reqres.in/api/login", {
              method: "POST",
              body: JSON.stringify(form),
            });
            handleToken("12345678");
            navigate(-1);
          } catch {
            //
          }
        }}
      >
        Sign In
      </button>
    </div>
  );
};

// import { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { Redirect } from "react-router-dom";
// export const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { handleSignin, isAuth } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSignin({ username, password });
//     // setPassword("");
//     // setUsername("");
//   };
//   return !isAuth ? (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="enter Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="password"
//         />
//         <input type="submit" value="Login" />
//       </form>
//     </>
//   ) : (
//     // <Redirect to="/users" />
//     <div>something went wrong</div>
//   );
// };
