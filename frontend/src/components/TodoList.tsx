import {Todo} from "./Todo";
import "./TodoList.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {ChangeEvent, useState} from "react";
import {TodoStatus} from "./TodoStatus";

type TodoListProps = {
    title: string,
    todos: Todo[],
    getAllTodos : ()=>void,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void
}
export default function TodoList(props: TodoListProps){

    /*props:
   *  todos: it's a list of all Tasks, came from useTodos.ts via App.tsx.
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from useTodos.ts and had been used in delTodo function to reload all Tasks
   *       after deleting one of them.
   * */

    const [newStatus,setNewStatus]=useState('');
    const [enumStatus, setEnumStatus] = useState<TodoStatus>(TodoStatus.OPEN);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNewStatus(event.target.value);
        if(event.target.value === "OPEN")
            setEnumStatus(TodoStatus.OPEN)
        else if(event.target.value === "IN_PROGRESS")
            setEnumStatus(TodoStatus.IN_PROGRESS)
        else setEnumStatus(TodoStatus.DONE)
    }

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

                                    <select value={newStatus===''? todo.status : newStatus} onChange={handleChange}>
                                        <option value="OPEN">Open</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="DONE">Done</option>
                                    </select>
                                    <button onClick={()=>{
                                        const t1 : Todo = {id: todo.id, description: todo.description, status: enumStatus}
                                        props.updateStatus(t1)
                                        setNewStatus('')
                                    }}>Save</button>

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
