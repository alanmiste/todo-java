import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import AddNewTodo from "./components/AddNewTodo";
import {Todo} from "./components/Todo";
import axios from "axios";
import useTodos from "./hooks/useTodos";


function App() {

    // const [todos, setTodos] = useState<Todo[]>([])
    // const getAllTodos = () =>{
    //     axios.get("/api/todo")
    //         .then((response) => {
    //             return response.data
    //         })
    //         .then((data) => setTodos(data))
    //         .catch((error) => console.log(error))
    // }
    //
    // useEffect(() => {
    //     getAllTodos()
    // }, [])

    const {todos, delTodo , getAllTodos, postTodo, changeStatus } = useTodos()

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <TodoLists todos={todos} getAllTodos={getAllTodos} changeStatus={changeStatus} delTodo={delTodo}/>
            <AddNewTodo getAllTodos={getAllTodos} postTodo={postTodo}/>
        </div>
    );
}

export default App;
