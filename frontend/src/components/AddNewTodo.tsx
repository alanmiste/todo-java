import {FormEvent, useState} from "react";
import "./AddNewTodo.css"

type AddNewTodoProps = {
    postTodo :(description :string) => void,
    getAllTodos : ()=>void,
}

export default function AddNewTodo(props: AddNewTodoProps){

    /*props:
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from useTodos.ts via App.tsx and had been used in postTodo function to reload all Tasks
   *       after adding new one.
   * */

    const [todoDescription, setTodoDescription]= useState<string>("")

    const submitFunction = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.postTodo(todoDescription)
        setTodoDescription('')
    }

    return(
        <form className={"addNewTodo"} onSubmit={submitFunction}>
            <input id={"inputTodo"}
                   type="text"
                   value={todoDescription}
                   onChange={event => setTodoDescription(event.target.value)}/>
            <button type={"submit"}>Add</button>
        </form>
    )
}
