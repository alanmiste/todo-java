import React from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import AddNewTodo from "./components/AddNewTodo";

import useTodos from "./hooks/useTodos";


function App() {

    //Destructuring, what came from useTodos
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
