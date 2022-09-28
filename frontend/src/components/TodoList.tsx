import {Todo} from "./Todo";
import "./TodoList.css"

export default function TodoList(props: { title: string, todos: Todo[], getAllTodos : ()=>void,
    delTodo : (key : string) => void, changeStatus :(key: string) => void }){

    /*props:
   *  todos: it's a list of all Tasks, came from useTodos.ts via App.tsx.
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from useTodos.ts and had been used in delTodo function to reload all Tasks
   *       after deleting one of them.
   * */

    return(
        <div className={"listsContainer"}>

            <h2>{props.title}</h2>

            <ul className={"todoList"}>
                {props.todos.map(todo =>
                    <li className={"oneLi"} key={todo.id}>
                        <p>
                            {todo.description}
                        </p>
                        <div className={"listBtn"}>
                            <button onClick={()=>props.delTodo(todo.id)}>Delete</button>
                            <button>Edit</button>
                            {
                                todo.status !== "DONE" &&
                                <button id={"advanceBtn"} onClick={
                                    ()=>
                                        props.changeStatus(todo.id)
                                }>Advance</button>
                            }
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}