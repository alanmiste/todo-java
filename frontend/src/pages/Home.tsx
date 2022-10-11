import TodoLists from "../components/TodoLists";
import AddNewTodo from "../components/AddNewTodo";
import React from "react";
import {Todo} from "../components/Todo";

type HomeProps = {
    todos: Todo[],
    getAllTodos : ()=>void,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void,
    postTodo: (description : string) => void,
}

export default function Home(props: HomeProps){

    return(
        <>
            <TodoLists todos={props.todos}
                       getAllTodos={props.getAllTodos}
                       advanceStatus={props.advanceStatus}
                       deleteTodo={props.deleteTodo}
                       updateStatus={props.updateStatus}/>
            <AddNewTodo getAllTodos={props.getAllTodos}
                        postTodo={props.postTodo}/>
        </>
    )
}
