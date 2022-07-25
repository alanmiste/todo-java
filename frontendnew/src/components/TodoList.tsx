import {Todo} from "./Todo";
import "./TodoList.css"
import axios from "axios";
import {useState} from "react";

export default function TodoList(props: { title: string, todos: Todo[], getAllTodos : ()=>void }){

    /*props:
   *  todos: it's a list of all Tasks, came from App.tsx.
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from App.tsx and had been used in delTodo function to reload all Tasks
   *       after deleting one of them.
   * */
    const [todoStatus , setTodoStatus] = useState<string>("OPEN")

    const delTodo= (key : string) =>{
        axios.delete(`/api/todo/${key}`)
            .then(response=> console.log(response))
            .then(props.getAllTodos) //to reload all Tasks again.
            .catch(error => console.log(error))
    }

    const changeStatus = async (key : string) =>{

            await axios.put(`/api/todo/${key}`)
                .then(response => console.log(response))
                .then(props.getAllTodos)
                .catch(error => console.log(error))
    }
    return(
        <div>
            <div>
            <h2>{props.title}</h2>
            </div>
            <ul className={"todoList"}>
                {props.todos.map(todo =>
                    <li className={"oneLi"} key={todo.id}>
                        <p>
                            {todo.description}
                        </p>
                        <div className={"listBtn"}>
                            <button onClick={()=>delTodo(todo.id)}>Delete</button>
                            {
                                todo.status !== "DONE" &&
                                <button id={"advanceBtn"} onClick={
                                    ()=>
                                        changeStatus(todo.id)
                                }>Advance</button>
                            }
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}