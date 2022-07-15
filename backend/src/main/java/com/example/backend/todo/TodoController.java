package com.example.backend.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping()
    public List<Todo> listTodos(){
        return todoService.listTodos();
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable String id){
        return todoService.getTodo(id);
    }

    @PostMapping()
    public void addTodo(
            @RequestBody Todo todo
    ){
        todoService.addTodo(todo);
    }

    @PutMapping("{id}")
    public void updateStatus(
            @PathVariable String id,
            @RequestBody Todo todo
    ){
        todoService.updateStatus(id,todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(
            @PathVariable String id
    ){
        todoService.deleteTodo(id);
    }
}
