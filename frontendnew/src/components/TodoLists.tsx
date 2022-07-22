import TodoList from "./TodoList";
import "./TodoLists.css"

export default function TodoLists() {
    return (
        <div className={"todoLists"}>
            <TodoList title={"OPEN"}/>
            <TodoList title={"IN PROGRESS"}/>
            <TodoList title={"DONE"}/>
        </div>
    )
}