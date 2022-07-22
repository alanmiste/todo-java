import TodoList from "./TodoList";
import "./TodoLists.css"
import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import axios from "axios";

export default function TodoLists(props : {todos : Todo[]}) {



    const openTodos = props.todos.filter((todo)=> todo.status === "OPEN")
    const inProgressTodos = props.todos.filter((todo)=> todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter((todo)=> todo.status === "DONE")



    // console.log("todos: "+todos.length)
    // console.log("open: "+ openTodos.length)
    // console.log("inprogress: "+inProgressTodos.length)
    // console.log("done: "+doneTodos.length)


    return (
        <div className={"todoLists"}>
            <TodoList title={"OPEN"} todos={openTodos}/>
            <TodoList title={"IN PROGRESS"} todos={inProgressTodos}/>
            <TodoList title={"DONE"} todos={doneTodos}/>
        </div>
    )
}