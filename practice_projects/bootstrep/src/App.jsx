import "./App.css";
// import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
// import Counter from "./components/Counter";
// import { Todo } from "./components/Todo/Todo";
import { BrowserRouter } from "react-router-dom";

import Classcomponent from "./components/classbasedNews/Classcomponent";

function App() {
  return (
    <>
      {/* <Navbar title="utilsText" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
      </div>
      <Counter />

      <Todo /> */}
      <BrowserRouter>
        <Classcomponent />
      </BrowserRouter>
    </>
  );
}

export default App;
