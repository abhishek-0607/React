import {add,multiply} from "./calc.js"
import ("./index.css")
import image from "./ab2.jpg"


console.log("hello world");

console.log(add (5,3),multiply(5,3))


const div = document.getElementById("container")
const img = document.createElement("img")
img.classList.add("image")
img.src = image
document.getElementById("root").append(img)
const btn = document.getElementById("btn")

btn.addEventListener("click",addnote);
let count = 0
function addnote(){
    const note = document.getElementById("note");
    console.log(note.value)
    if(note.value!=""){
        count++
        const makenote = document.createElement("h3");
        makenote.innerText = count+". "+ note.value
        div.append(makenote)
    }


}