import { useState } from "react";
import "./App.css";
import BasicButtons from "./components/Button";
// import { Navbar } from "./components/Navbar";
import { Button, Div } from "./styled/Button";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <Div>
        <p>hello react</p>
      </Div>
      <Button
        theme={theme}
        onClick={() => {
          console.log("clicked here");
        }}
      >
        Welcome 2022 !!
      </Button>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        theme toggle
      </button>

      <BasicButtons />
    </div>
  );
}

export default App;
