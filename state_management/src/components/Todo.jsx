import {Todoinput} from "./Todoinput"
import {Todoitem} from "./Todoitem"

import {useState} from "react"

export const Todo = ()=>{
    const [list,setList] = useState([])
    const handleClick=(data)=>{
        console.log("Data in parent: ",data)
        setList([...list,data])
    }
    return <>
        <Todoinput getData={handleClick}/>
        {list.map(e => <Todoitem title={e}/>)}
    </>
}