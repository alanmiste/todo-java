package com.example.backend.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public List<Todo> listTodos() {
        return todoService.listTodos();
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable String id) {
        return todoService.getTodo(id);
    }

    @PostMapping()
    public ResponseEntity<Todo> addTodo(
            @RequestBody Todo todo
    ) {
        Todo savedTodo = todoService.addTodo(todo);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedTodo);
    }

    @PutMapping("{id}/update")
    public void updateStatus(
            @PathVariable String id,
            @RequestBody Todo todo
    ) {
        todoService.updateStatus(id, todo);
    }

    @PutMapping("{id}")
    public void advanceStatus(
            @PathVariable String id
//            @RequestBody Todo todo
    ) {
        todoService.advanceStatus(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(
            @PathVariable String id
    ) {
        todoService.deleteTodo(id);
    }
}
