import {Todo} from "./Todo";
import "./TodoList.css"

export default function TodoList(props: { title: string, todos: Todo[] }){

    return(
        <div>
            <div>
            <h2>{props.title}</h2>
            </div>
            <ul className={"todoList"}>
                {props.todos.map(todo => <li className={"oneLi"}>{todo.description}</li>)}
            </ul>
        </div>
    )
}