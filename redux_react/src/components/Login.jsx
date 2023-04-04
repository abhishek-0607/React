import React, { useState } from "react";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
    if (credentials.password.length >= 8 && credentials.email) {
    }
  };

  return (
    <div>
      <input type="email" name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      {validate ? <button>submit</button> : <p>credials ate invalid</p>}
    </div>
  );
};
