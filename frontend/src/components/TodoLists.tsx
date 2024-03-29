import TodoList from "./TodoList";
import "./TodoLists.css"
import {Todo} from "./Todo";

type TodoListsProps = {
    todos : Todo[],
    getAllTodos : ()=>void ,
    deleteTodo : (key : string) => void,
    advanceStatus :(key: string) => void,
    updateStatus : (todo: Todo) => void,
}

export default function TodoLists(props : TodoListsProps) {

    /*props:
   *  todos: it's a list of all Tasks, came from App.tsx.
   *  getAllTodos: it's a function that call the backend via axios to fetch the "all tasks",
   *       came from useTodos.ts and had been passed to TodoList.tsx.
   * */

    const openTodos = props.todos.filter((todo)=> todo.status === "OPEN")
    const inProgressTodos = props.todos.filter((todo)=> todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter((todo)=> todo.status === "DONE")

    return (
        <div className={"todoLists"}>
            <TodoList title={"OPEN"}
                      todos={openTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
            <TodoList title={"IN PROGRESS"}
                      todos={inProgressTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
            <TodoList title={"DONE"}
                      todos={doneTodos}
                      getAllTodos={props.getAllTodos}
                      advanceStatus={props.advanceStatus}
                      deleteTodo={props.deleteTodo}
                      updateStatus={props.updateStatus}/>
        </div>
    )
}
