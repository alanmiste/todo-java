import {Todo} from "./Todo";

export default function TodoList(props: { title: string, todos: Todo[] }){

    return(
        <div>
            <div>
            <h2>{props.title}</h2>
            </div>
            <ul>
                {props.todos.map(todo => <li>{todo.description}</li>)}
            </ul>
        </div>
    )
}