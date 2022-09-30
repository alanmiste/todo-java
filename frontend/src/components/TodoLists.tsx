import TodoList from "./TodoList";
import "./TodoLists.css"
import {Todo} from "./Todo";

export default function TodoLists(props : {todos : Todo[], getAllTodos : ()=>void ,
    delTodo : (key : string) => void, changeStatus :(key: string) => void }) {

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
            <TodoList title={"OPEN"} todos={openTodos} getAllTodos={props.getAllTodos}
                      changeStatus={props.changeStatus} delTodo={props.delTodo}/>
            <TodoList title={"IN PROGRESS"} todos={inProgressTodos} getAllTodos={props.getAllTodos}
                      changeStatus={props.changeStatus} delTodo={props.delTodo}/>
            <TodoList title={"DONE"} todos={doneTodos} getAllTodos={props.getAllTodos}
                      changeStatus={props.changeStatus} delTodo={props.delTodo}/>
        </div>
    )
}
