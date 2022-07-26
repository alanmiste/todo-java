import {useState} from "react";
import axios from "axios";
import "./AddNewTodo.css"

export default function AddNewTodo(props: {postTodo :(description :string) => void, getAllTodos : ()=>void}){

    /*props:
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from App.tsx and had been used in postTodo function to reload all Tasks
   *       after adding new one.
   * */

    const [todoDescription, setTodoDescription]= useState<string>("")
    //
    // const postTodo = (description : string) =>{
    //     if(description !="") {
    //         axios.post("/api/todo", {"description": description, "status": "OPEN"})
    //             .then(response => console.log(response))
    //             .then(props.getAllTodos) //to reload all Tasks again.
    //             .catch(error => console.log(error))
    //         setTodoDescription('') //to reset todoDescription and clear input field.
    //     }else {
    //         alert("Please enter a task!")
    //     }
    //
    // }
    return(
        <div className={"addNewTodo"}>
            <input id={"inputTodo"} type="text" value={todoDescription} onChange={event => setTodoDescription(event.target.value)}/>
            <button onClick={()=> {
                props.postTodo(todoDescription)
                setTodoDescription('')
            }}>Add</button>
        </div>
    )
}