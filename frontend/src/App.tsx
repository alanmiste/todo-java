import React from 'react';
import './App.css';
import Header from "./components/Header";
import useTodos from "./hooks/useTodos";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Open from "./pages/Open";
import InProgress from "./pages/InProgress";
import Done from "./pages/Done";

function App() {

    const {todos, delTodo , getAllTodos, postTodo, changeStatus } = useTodos()

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home todos={todos} getAllTodos={getAllTodos} changeStatus={changeStatus} delTodo={delTodo} postTodo={postTodo} />} />
                    <Route path={"/open"} element={<Open todos={todos} getAllTodos={getAllTodos} changeStatus={changeStatus} delTodo={delTodo}/>} />
                    <Route path={"/inprogress"} element={<InProgress todos={todos} getAllTodos={getAllTodos} changeStatus={changeStatus} delTodo={delTodo}/>} />
                    <Route path={"/done"} element={<Done todos={todos} getAllTodos={getAllTodos} changeStatus={changeStatus} delTodo={delTodo}/>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
