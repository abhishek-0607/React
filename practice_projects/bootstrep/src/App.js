import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Counter from "./components/Counter";
import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <>
      <Navbar title="utilsText" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
      </div>
      <Counter />

      <Todo />
    </>
  );
}

export default App;
