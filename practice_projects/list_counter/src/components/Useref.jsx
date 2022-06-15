import React, { useState } from "react";

const initState = {
  name: "",
  age: "",
  email: "",
};

export default function Useref(props) {
  const [data, setData] = useState(initState);
  const { name, age, email } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div>
      <h1>Events Useref Forms amd more</h1>
      <input name="name" value={name} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <input name="age" value={age} onChange={handleChange} />

      <button onClick={handleClick}>BUTTON</button>
    </div>
  );
}
