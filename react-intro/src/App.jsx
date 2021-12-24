import { useState } from 'react';
import './App.css';
// import Todos from './components/Todo';

function App() {
  // const arr = [1,2,3,4,5];

  const [count,setCount]= useState(0);

  const add = (value)=>{
    setCount(count+value);
  }

  return (
    <div className="App">

      <h1>counter: {count}</h1>
      { count < 10 && <div>
        <button onClick={()=>add(1)}>Add</button>
        <button onClick={()=>add(-1)}>Reduce</button>
        <div></div>
      </div>
      }



      {/* hello React 3
      {arr.map((e)=>(
      <Todos num = {e}>
        <h1>test: {e}</h1>
      </Todos>
      ))}
      <img alt="test" src={logo} width={540} /> */}
    </div>
  );
}

export default App;
