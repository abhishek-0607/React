import { useState } from 'react';
import './App.css';
// import Todos from './components/Todo';

function App() {
  const arr = ["Android","Blackberry","iPhone","Windows Phone"];
  const arr2 = ["Samsung", "Apple","HTC","Micromax"]

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

      <h1>Mobile Operating System</h1>
      <List val= {arr}/>

      <h1>Mobile Manufacturers</h1>
      <List val= {arr2}/>
      


    </div>
  );
}
function List({val}){
  return <ul>
    {val.map((e)=>(<li>{e}</li>))}
  </ul>
}


export default App;
