import TodoList from "./TodoList";
import "./TodoLists.css"
import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import axios from "axios";

export default function TodoLists() {


    const [todos, setTodos] = useState<Todo[]>([])
    const openTodos = todos.filter((todo)=> todo.status === "OPEN")
    const inProgressTodos = todos.filter((todo)=> todo.status === "IN_PROGRESS")
    const doneTodos = todos.filter((todo)=> todo.status === "DONE")

    useEffect(() => {
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }, [todos])

    console.log("todos: "+todos.length)
    console.log("open: "+ openTodos.length)
    console.log("inprogress: "+inProgressTodos.length)
    console.log("done: "+doneTodos.length)


    return (
        <div className={"todoLists"}>
            <TodoList title={"OPEN"} todos={openTodos}/>
            <TodoList title={"IN PROGRESS"} todos={inProgressTodos}/>
            <TodoList title={"DONE"} todos={doneTodos}/>
        </div>
    )
}