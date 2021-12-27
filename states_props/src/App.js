import { useState } from 'react';
import './App.css';
// import Todos from './components/Todo';

function App() {
  const [count,setCount]= useState(0);

  const add = (value)=>{
    setCount(count+value);
  }
  return (
    <div className="App">
           <h1 id="counter">counter: {count}</h1>
      { count < 10 && <div>
        <button onClick={()=>add(1)}>Add</button>
        <button onClick={()=>add(-1)}>Reduce</button>
      </div>
      }

    </div>
  );
}

export default App;
