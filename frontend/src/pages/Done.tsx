import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

export default function Done({...props}){
    const doneTodos = props.todos.filter((todo : Todo)=> todo.status === "DONE")
    return(
        <>
            <TodoList title={"DONE"}
                      todos={doneTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}/>
        </>
    )
}
