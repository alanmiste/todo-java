import {useEffect, useState} from "react";
import {Todo} from "../components/Todo";
import axios from "axios";


export default function useTodos(){

    //---------- App.tsx ---------
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

    //---------- TodoList.tsx ------

    const delTodo= (key : string) =>{
        axios.delete(`/api/todo/${key}`)
            .then(response=> console.log(response))
            .then(getAllTodos) //to reload all Tasks again.
            .catch(error => console.log(error))
    }

    const changeStatus =  (key : string) =>{

        axios.put(`/api/todo/${key}`)
            .then(response => console.log(response))
            .then(getAllTodos)
            .catch(error => console.log(error))
    }

    //----------- AddNewTodo --------------

    // const [todoDescription, setTodoDescription]= useState<string>("")

    const postTodo = (description : string) =>{
        if(description !="") {
            axios.post("/api/todo", {"description": description, "status": "OPEN"})
                .then(response => console.log(response))
                .then(getAllTodos) //to reload all Tasks again.
                .catch(error => console.log(error))
            // setTodoDescription('') //to reset todoDescription and clear input field.
        }else {
            alert("Please enter a task!")
        }

    }


    return {todos, delTodo , getAllTodos, postTodo, changeStatus }

}