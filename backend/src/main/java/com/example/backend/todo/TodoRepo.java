package com.example.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class TodoRepo {

    private final List<Todo> todos = new ArrayList<>();

    public Todo getTodo(int id){
        return todos.get(id);
    }

    public List<Todo> listTodos(){
        return new ArrayList<>(todos);
    }

    public void addTodo(Todo todo){
        todos.add(todo);
    }
}
