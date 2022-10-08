import {Todo} from "./Todo";
import "./TodoList.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react";

export default function TodoList(props: { title: string, todos: Todo[], getAllTodos : ()=>void,
    deleteTodo : (key : string) => void, advanceStatus :(key: string) => void }){

    /*props:
   *  todos: it's a list of all Tasks, came from useTodos.ts via App.tsx.
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from useTodos.ts and had been used in delTodo function to reload all Tasks
   *       after deleting one of them.
   * */

    const [status,setStatus]=useState('');
  
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
                                <form>
                                    <input type="radio" value="OPEN"
                                           onChange={()=>setStatus("OPEN")} name="OPEN"/>
                                    <label htmlFor="OPEN">OPEN</label>
                                    <input type="radio" value="IN_PROGRESS"
                                           onChange={()=>setStatus("IN_PROGRESS")} name="IN_PROGRESS"/>
                                    <label htmlFor="IN_PROGRESS">IN PROGRESS</label>
                                    <input type="radio" value="DONE"
                                           onChange={()=>setStatus("DONE")} name="DONE"/>
                                    <label htmlFor="DONE">DONE</label>
                                </form>
                                <button onClick={()=>console.log(status)}>Save</button>
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
