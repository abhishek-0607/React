import React from "react";
import "./App.css";
import { Todo } from "./components/NewTodo/Todo";
import Useref1 from "./components/Useref1";

function App() {
  return (
    <div className="App">
      <Todo />

      <Useref1 />

      {/* <Todo />
      <Parenttochild />
      <Childtoparent />
      <Siblings /> */}
    </div>
  );
}

export default App;
