import { useState } from "react";
import "./App.css";
import Todos from "./components/Todo";

function App() {
  const arr = [1, 2, 3, 4];
  const [count, setCount] = useState(1);

  const add = (value) => {
    setCount(count + value);
  };
  const double = () => {
    setCount(2 * count);
  };
  return (
    <div className="App">
      <h1 id="counter">counter: {count}</h1>
      {count < 10 && (
        <div>
          <button onClick={() => add(1)}>Add</button>
          <button onClick={() => add(-1)}>Reduce</button>
          <button onClick={() => double()}>Double</button>
          <div>Counter is {count % 2 === 0 ? "even" : "odd"}</div>
          {/* {count%2==0?<h3>Even</h3>:<h3>Odd</h3>} */}
        </div>
      )}

      {/* hello React 3
      {arr.map((e)=>(
      <Todos num = {e}>
        <h1 className="child">test: {e}</h1>
      </Todos>
      ))} */}
    </div>
  );
}

export default App;
