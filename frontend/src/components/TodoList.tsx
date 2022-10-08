import {Todo} from "./Todo";
import "./TodoList.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function TodoList(props: { title: string, todos: Todo[], getAllTodos : ()=>void,
    deleteTodo : (key : string) => void, advanceStatus :(key: string) => void }){

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
                            <button onClick={()=>props.deleteTodo(todo.id)}>Delete</button>
                            <Popup trigger={<button>Edit</button>}
                                   position="top center">
                                <div>GeeksforGeeks</div>
                                <button>Save</button>
                            </Popup>
                            {
                                todo.status !== "DONE" &&
                                <button id={"advanceBtn"} onClick={
                                    ()=>
                                        props.advanceStatus(todo.id)
                                }>Advance</button>
                            }
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}
