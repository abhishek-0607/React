import {Todoinput} from "./Todoinput"
import {Todoitem} from "./Todoitem"
import {nanoid} from "nanoid"

import {useState} from "react"

export const Todo = ()=>{
    const [list,setList] = useState([])
    const handleClick=(data)=>{
        console.log("Data in parent: ",data)
        const payload = {
            title:data,
            status:false,
            id:nanoid(7)
        }
        setList([...list,payload])
    }
    const handleToggle = (id)=>{
        //delete this id from main list
        //list.filter()
    }
    return <>
        <Todoinput getData={handleClick}/>
        {list.map((e) => (
        <Todoitem handleToggle={handleToggle} key={e.id} {...e}/>))}
    </>
}