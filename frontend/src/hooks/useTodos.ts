import {useEffect, useState} from "react";
import {Todo} from "../components/Todo";
import axios from "axios";

export default function useTodos(){

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getAllTodos()
    }, [])

    const getAllTodos = () =>{
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }

    const deleteTodo= (key : string) =>{
        axios.delete(`/api/todo/${key}`)
            .then(response=> console.log(response))
            .then(getAllTodos) //to reload all Tasks again.
            .catch(error => console.log(error))
    }

    const advanceStatus =  (key : string) =>{
        axios.put(`/api/todo/${key}`)
            .then(response => console.log(response))
            .then(getAllTodos)
            .catch(error => console.log(error))
    }

    const postTodo = (description : string) =>{
        if(description !=="") {
            axios.post("/api/todo", {"description": description, "status": "OPEN"})
                .then(response => console.log(response))
                .then(getAllTodos) //to reload all Tasks again.
                .catch(error => console.log(error))
        }else {
            alert("Please enter a task!")
        }
    }

    const updateStatus = (todo: Todo) =>{
        axios.put(`/api/todo/${todo.id}/update`, todo)
            .then(response => console.log(response))
            .then(getAllTodos)
            .catch(error => console.error(error))
    }

    return {todos, deleteTodo , getAllTodos, postTodo, advanceStatus, updateStatus}
}
