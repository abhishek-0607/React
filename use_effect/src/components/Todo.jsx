import {useEffect, useState} from "react";
export const Todo = () =>{
    const [text,setText] = useState("");
    const [todo,setTodo] = useState([]);
    useEffect( ()=>{
        getTodo()
    },[])
    const getTodo = ()=>{
        fetch("http:localhost:3001/todos")
        .then((d) => d.json())
        .then((res)=>{
            setTodo(res)
        })
    }
    const addTodo = () =>{
        const payload = {
            title:text,
            status:false
        }
        fetch("http:localhost:3001/todos",{
            method:"POST",
            body: JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            getTodo();
            setText("");
        });
    }


    return(
        <div>
            <input type = "text" onChange = {(e)=>setText(e.target.value)} placeholder = "enter Todo"/>
            <button onClick={addTodo}>Click</button>
            {todo.map((e,i)=>(
            <div key={i}>{e.title}</div>
            ))}

        </div>
    )
}