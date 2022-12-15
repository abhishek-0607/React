import "./App.css";
// import { Navbar } from "./components/Navbar";
// import { Body } from "./components/Body";
import { Form } from "./components/Form";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("trying to submit form");
  };

  return (
    <div className="App">
      {/* <Navbar />
      <Body /> */}
      {/* <Form onSubmit={onSubmit} title="LOGIN">
        <input placeholder="name" />
      </Form> */}

      <Form></Form>
    </div>
  );
}

export default App;
