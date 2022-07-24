import {useState} from "react";
import axios from "axios";

export default function AddNewTodo(props: {getAllTodos : ()=>void}){
    const [todoDescription, setTodoDescription]= useState<string>("")

    const postTodo = (description : string) =>{
        if(description !="") {
            axios.post("/api/todo", {"description": description, "status": "OPEN"})
                .then(response => console.log(response))
                .then(props.getAllTodos)
                .catch(error => console.log(error))
            setTodoDescription('')
        }else {
            alert("Please enter a task!")
        }

    }
    return(
        <div>
            <input id={"inputTodo"} type="text" value={todoDescription} onChange={event => setTodoDescription(event.target.value)}/>
            <button onClick={()=>postTodo(todoDescription)}>Add</button>
        </div>
    )
}