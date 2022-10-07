import TodoLists from "../components/TodoLists";
import AddNewTodo from "../components/AddNewTodo";
import React from "react";

export default function Home({...props}){

    return(
        <>
            <TodoLists todos={props.todos}
                       getAllTodos={props.getAllTodos}
                       changeStatus={props.changeStatus}
                       deleteTodo={props.deleteTodo}/>
            <AddNewTodo getAllTodos={props.getAllTodos}
                        postTodo={props.postTodo}/>
        </>
    )
}
