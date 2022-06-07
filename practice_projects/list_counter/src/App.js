import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/Todo/Todo";
import { Parenttochild } from "./components/Parenttochild";
import { Childtoparent } from "./components/Childtoparent";

function App() {
  return (
    <div className="App">
      <Todo />
      <Parenttochild />
      <Childtoparent />
    </div>
  );
}

export default App;
