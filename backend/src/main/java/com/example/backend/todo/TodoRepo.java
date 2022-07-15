package com.example.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class TodoRepo {

    private final Map<String,Todo> todos = new HashMap<>();

    public Todo getTodo(String key){
        return todos.get(key);
    }

    public List<Todo> listTodos(){
//        return new ArrayList<>(todos);
        List<Todo> list = new ArrayList<>();
        for (Map.Entry<String, Todo> entry: todos.entrySet()
        ) {
            list.add(entry.getValue());
        }
        return list;
    }

    public void addTodo(Todo todo){
        String key = UUID.randomUUID().toString(); //Generate a random id for Todo object and Todo List
        Todo finalTodo = new Todo(key,todo.description(),todo.status());
        todos.put(finalTodo.id(),finalTodo);
    }

    public void updateStatus(String id, Todo todo){
        todos.put(id, todo);
    }

//    public void advanceStatus(String id){
//        Todo todo = todos.get(id);
//        if(todo.status().equals(TodoStatus.OPEN)) {
//            Todo newTodo = new Todo(todo.id(),todo.description(),TodoStatus.IN_PROGRESS);
//            todos.put(id,newTodo);
//        }
//
//
//    }

    public void deleteTodo(String id){
        todos.remove(id);
    }

}
