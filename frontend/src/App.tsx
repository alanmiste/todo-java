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

    const {todos, deleteTodo , getAllTodos, postTodo, advanceStatus, updateStatus } = useTodos()

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path={"/"}
                           element={<Home todos={todos}
                                          getAllTodos={getAllTodos}
                                          advanceStatus={advanceStatus}
                                          deleteTodo={deleteTodo}
                                          postTodo={postTodo}
                                          updateStatus={updateStatus}/>} />
                    <Route path={"/open"}
                           element={<Open todos={todos}
                                          getAllTodos={getAllTodos}
                                          advanceStatus={advanceStatus}
                                          deleteTodo={deleteTodo}
                                          updateStatus={updateStatus}/>} />
                    <Route path={"/inprogress"}
                           element={<InProgress todos={todos}
                                                getAllTodos={getAllTodos}
                                                advanceStatus={advanceStatus}
                                                deleteTodo={deleteTodo}
                                                updateStatus={updateStatus}/>} />
                    <Route path={"/done"}
                           element={<Done todos={todos}
                                          getAllTodos={getAllTodos}
                                          advanceStatus={advanceStatus}
                                          deleteTodo={deleteTodo}
                                          updateStatus={updateStatus}/>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
