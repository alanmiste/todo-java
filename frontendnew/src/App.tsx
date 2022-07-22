import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";
import AddNewTodo from "./components/AddNewTodo";


function App() {

    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <TodoLists/>
            <AddNewTodo/>
        </div>
    );
}

export default App;
