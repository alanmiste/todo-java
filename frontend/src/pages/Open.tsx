import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

export default function Open({...props}){
    const openTodos = props.todos.filter((todo : Todo)=> todo.status === "OPEN")
    return(
        <>
            <TodoList title={"OPEN"} todos={openTodos} getAllTodos={props.getAllTodos}
                      changeStatus={props.changeStatus} delTodo={props.delTodo}/>
        </>
    )
}
