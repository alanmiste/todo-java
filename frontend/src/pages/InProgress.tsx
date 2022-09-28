import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

export default function InProgress({...props}){
    const inProgressTodos = props.todos.filter((todo : Todo)=> todo.status === "IN_PROGRESS")
    return(
        <>
            <TodoList title={"IN PROGRESS"} todos={inProgressTodos} getAllTodos={props.getAllTodos}
                      changeStatus={props.changeStatus} delTodo={props.delTodo}/>
        </>
    )
}