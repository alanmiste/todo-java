import React from 'react';
import './App.css';
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";

function App() {
    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <TodoLists/>
        </div>
    );
}

export default App;
