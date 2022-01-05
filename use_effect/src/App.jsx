import "./App.css";
//import { Form } from './components/Form';
import { Todo } from "./components/Todo";
import { Timer } from "./components/Timer";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <h3>count is {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button> */}
      {/* <Form/> */}
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <Todo />
    </div>
  );
}

export default App;
