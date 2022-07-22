import {useState} from "react";
import axios from "axios";

export default function AddNewTodo(){
    const [todoDescription, setTodoDescription]= useState<string>("")
    const postTodo = (description : string) =>{
        axios.post("/api/todo",{"description":description, "status": "OPEN"})
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return(
        <div>
            <input id={"inputTodo"} type="text" onChange={event => setTodoDescription(event.target.value)}/>
            <button onClick={()=>postTodo(todoDescription)}>Add</button>
        </div>
    )
}