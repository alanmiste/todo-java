import TodoList from "./TodoList";
import "./TodoLists.css"
import {Todo} from "./Todo";

export default function TodoLists(props : {todos : Todo[], getAllTodos : ()=>void}) {

    const openTodos = props.todos.filter((todo)=> todo.status === "OPEN")
    const inProgressTodos = props.todos.filter((todo)=> todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter((todo)=> todo.status === "DONE")

    return (
        <div className={"todoLists"}>
            <TodoList title={"OPEN"} todos={openTodos} getAllTodos={props.getAllTodos}/>
            <TodoList title={"IN PROGRESS"} todos={inProgressTodos} getAllTodos={props.getAllTodos}/>
            <TodoList title={"DONE"} todos={doneTodos} getAllTodos={props.getAllTodos}/>
        </div>
    )
}