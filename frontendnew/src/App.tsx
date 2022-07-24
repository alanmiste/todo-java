import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import AddNewTodo from "./components/AddNewTodo";
import {Todo} from "./components/Todo";
import axios from "axios";


function App() {

    const [todos, setTodos] = useState<Todo[]>([])
    const getAllTodos = () =>{
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllTodos()
    }, [])

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <TodoLists todos={todos} getAllTodos={getAllTodos}/>
            <AddNewTodo getAllTodos={getAllTodos}/>
        </div>
    );
}

export default App;
