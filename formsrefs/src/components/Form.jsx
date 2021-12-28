import {useState,useRef} from "react";

export const Form = ()=>{
    const [form,setForm]= useState(null);
    const ref = useRef(null)
    const handleChange = (e)=>{
        console.log(ref.current.files)
        const {name,value}= e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
    }

    return (<form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="username" type="text" placeholder="enter username" />
        <input onChange={handleChange} name="age" type="number" placeholder="enter age"/>
        <input onChange={handleChange}  type="file"/>

        <input type="submit" value="submit"/>

    </form>)
}