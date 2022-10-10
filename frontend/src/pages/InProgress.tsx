import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

type InProgressProps = {
    todos: Todo[],
    getAllTodos : ()=>void,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void,
}

export default function InProgress(props: InProgressProps){
    const inProgressTodos = props.todos.filter((todo : Todo)=> todo.status === "IN_PROGRESS")
    return(
        <>
            <TodoList title={"IN PROGRESS"}
                      todos={inProgressTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
        </>
    )
}
