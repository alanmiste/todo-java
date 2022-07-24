import {Todo} from "./Todo";
import "./TodoList.css"
import axios from "axios";

export default function TodoList(props: { title: string, todos: Todo[], getAllTodos : ()=>void }){

    const delTodo= (key : string) =>{
        axios.delete(`/api/todo/${key}`)
            .then(response=> console.log(response))
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
                        {todo.description}
                        <button onClick={()=>delTodo(todo.id)}>Delete</button>
                    </li>)}
            </ul>
        </div>
    )
}