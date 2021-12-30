export const Todoitem = ({title,status,id,handleToggle})=>{
    return <>
    <div>
        {title} - {status ? "Done":"Not Done"}
        <button onClick={()=>handleToggle(id)}>Mark as done</button>
    </div></>

}