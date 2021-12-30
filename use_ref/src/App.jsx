//import { useState, useRef } from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  //const inputRef = useRef(null);
  // const [d,setD] = useState(1);

  return (
    <div className="App">
      
      <Form/>

      {/* 
      
      <div ref={inputRef} style={{
        width:"300px",
        height:"300px",
        background:"coral"
      }}>1</div>
      <div ref={inputRef} style={{
        width:"300px",
        height:"300px",
        background:"cyan"
      }}>2</div>
      <div ref={inputRef} style={{
        width:"300px",
        height:"300px",
        background:"coral"
      }}>3</div>
      <div ref={inputRef} style={{
        width:"300px",
        height:"300px",
        background:"cyan"
      }}>4</div>
      <button onClick={()=>{
        inputRef.current.scrollIntoView({
          behavior:"smooth"
        })
        console.log(inputRef.current.value)
      }}>Scroll on top</button> */}

      {/* <button 
        onClick={(e)=>{
          setD((e)=>e+1)}}
      >rerender</button>

      <button 
        onClick={()=>{
          test.current = test.current + 1 ; 
          console.log(test)
          }}
      >click me</button> */}
    </div>
  );
}

export default App;



