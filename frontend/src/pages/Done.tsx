import TodoList from "../components/TodoList";
import {Todo} from "../components/Todo";

type DoneProps = {
    todos: Todo[],
    getAllTodos : ()=>void,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void,
}

export default function Done(props: DoneProps){
    const doneTodos = props.todos.filter((todo : Todo)=> todo.status === "DONE")
    return(
        <>
            <TodoList title={"DONE"}
                      todos={doneTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
        </>
    )
}
