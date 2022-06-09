import React, { useState } from "react";
import "./App.css";
// import { Todo } from "./components/NewTodo/Todo";

const initState = {
  name: "",
  age: "",
  email: "",
};

function App() {
  const [data, setData] = useState(initState);
  const { name, age, email } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    console.log(data);
  };
  return (
    <div className="App">
      <input name="name" value={name} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <input name="age" value={age} onChange={handleChange} />

      <button onClick={handleClick}>BUTTON</button>

      {/* <Todo />
      <Parenttochild />
      <Childtoparent />
      <Siblings /> */}

      {/* <Todo /> */}
    </div>
  );
}

export default App;
