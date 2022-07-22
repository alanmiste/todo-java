import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import axios from "axios";
import {Todo} from "./components/Todo";

function App() {

    // const [todos, setTodos] = useState<Todo[]>([])
    // const openTodos = todos.filter((todo)=> todo.status === "OPEN")
    // const inProgressTodos = todos.filter((todo)=> todo.status === "IN_PROGRESS")
    // const doneTodos = todos.filter((todo)=> todo.status === "DONE")
    //
    // useEffect(() => {
    //     axios.get("/api/todo")
    //         .then((response) => {
    //             return response.data
    //         })
    //         .then((data) => setTodos(data))
    //         .catch((error) => console.log(error))
    // }, [])
    //
    // console.log("todos: "+todos.length)
    // console.log("open: "+ openTodos.length)
    // console.log("inprogress: "+inProgressTodos.length)
    // console.log("done: "+doneTodos.length)

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <TodoLists/>
            {/*<div>*/}
            {/*    {todos.map(item => `*/}
            {/*    id: ${item.id} \n*/}
            {/*    description: ${item.description}\n*/}
            {/*    status: ${item.status}*/}
            {/*        `*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
