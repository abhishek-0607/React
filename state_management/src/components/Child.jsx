function Child({func}){
    const name = "masai school";
    func(name);
    return <h3>received {name}</h3>
}

function Child2({data}){
    return <h3>child2 received {data}</h3>
  }
export {Child,Child2}

// function App() {
//     const [data,setData]= useState("");
//     const handleData = (name)=>{
//       console.log("parent received:", name);
//       setData(name)
//     }
//     console.log("rendering")
//     return (
//       <div className="App">
//         <h3>Child received</h3>
//         <Child func = {handleData}/>
//         <Child2 data= {data}/>
  
//       </div>
//     );
//   }