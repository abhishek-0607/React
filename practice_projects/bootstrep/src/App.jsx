import "./App.css";

import { BrowserRouter } from "react-router-dom";

// import Classcomponent from "./components/classbasedNews/Classcomponent";
import { FunctionComponent } from "./components/functionbasedNews/functionComponent";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Classcomponent />
      </BrowserRouter> */}
      <BrowserRouter>
        <FunctionComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
