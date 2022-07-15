package com.example.backend.todo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final TodoRepo todoRepo;

    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }

    public Todo getTodo(String key) {
        return todoRepo.getTodo(key);
    }


    public List<Todo> listTodos(){
        return todoRepo.listTodos();
    }

    public void addTodo(Todo todo) {
//        Todo todo = new Todo(todoTxt, todoStatus);
        todoRepo.addTodo(todo);
    }

    public void updateStatus(String id, Todo todo) {
        todoRepo.updateStatus(id, todo);
    }

    public void deleteTodo(String id){
        todoRepo.deleteTodo(id);
    }
}
