import "./App.css";
import { Counter } from "./components/Counter";

import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
