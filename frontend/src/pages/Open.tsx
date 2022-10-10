import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

type OpenProps = {
    todos: Todo[],
    getAllTodos : ()=>void,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void,
}

export default function Open(props: OpenProps){
    const openTodos = props.todos.filter((todo : Todo)=> todo.status === "OPEN")
    return(
        <>
            <TodoList title={"OPEN"}
                      todos={openTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
        </>
    )
}
