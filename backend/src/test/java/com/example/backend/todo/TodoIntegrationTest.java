package com.example.backend.todo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @DirtiesContext
    @Test
    void listTodo() throws Exception {
        //Given
        mockMvc

                //When
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201));

        mockMvc
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                        "description":"go to Mars",
                                        "status":"OPEN"
                                        }
                                        """)
                )
                        .andExpect(status().is(201));

        mockMvc

                .perform(
                        get("/api/todo")
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            [{
                            "description":"go to Moon",
                            "status":"OPEN"},
                            {
                            "description": "go to Mars",
                            "status": "OPEN"
                            }]
                        """));
    }

    @DirtiesContext
    @Test
    void getTodo() throws Exception {
        //Given
        mockMvc

                //When
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201));

        mockMvc
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                        "description":"go to Mars",
                                        "status":"OPEN"
                                        }
                                        """)
                )
                        .andExpect(status().is(201));


        mockMvc

                .perform(
                        get("/api/todo/")
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            [{
                            "description":"go to Moon",
                            "status":"OPEN"
                            },{
                             "description":"go to Mars",
                             "status":"OPEN"
                             }]
                        """));
    }

    @DirtiesContext
    @Test
    void addTodoTest() throws Exception {
        mockMvc
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201));

        mockMvc

                .perform(
                        get("/api/todo/")
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            [{
                            "description":"go to Moon",
                            "status":"OPEN"
                            }]
                        """));
    }

    @DirtiesContext
    @Test
    void updateStatus() throws Exception {
        //Given
        String savedTodo = mockMvc

                //When
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Todo todo = objectMapper.readValue(savedTodo, Todo.class);
        String id = todo.id();

        mockMvc.perform(put("/api/todo/"+id+"/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"IN_PROGRESS"
                                        }
                                        """))

                .andExpect(status().isOk())
                ;

        mockMvc

                .perform(
                        get("/api/todo/"+id)
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            {
                            "description":"go to Moon",
                            "status":"IN_PROGRESS"
                            }
                        """));
    }


    @DirtiesContext
    @Test
    void advanceOpenStatus() throws Exception {
        //Given
        String savedTodo = mockMvc

                //When
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Todo todo = objectMapper.readValue(savedTodo, Todo.class);
        String id = todo.id();

        mockMvc.perform(put("/api/todo/"+id))
                .andExpect(status().isOk());

        mockMvc

                .perform(
                        get("/api/todo/"+id)
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            {
                            "description":"go to Moon",
                            "status":"IN_PROGRESS"
                            }
                        """));
    }

    @DirtiesContext
    @Test
    void advanceInProgressStatus() throws Exception {
        //Given
        String savedTodo = mockMvc

                //When
                .perform(
                        post("/api/todo")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                            "description":"go to Moon",
                                            "status":"OPEN"
                                        }
                                        """)
                )
                //Then
                .andExpect(status().is(201))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Todo todo = objectMapper.readValue(savedTodo, Todo.class);
        String id = todo.id();

        mockMvc.perform(put("/api/todo/"+id))
                .andExpect(status().isOk());

        mockMvc.perform(put("/api/todo/"+id))
                .andExpect(status().isOk());

        mockMvc

                .perform(
                        get("/api/todo/"+id)
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            {
                            "description":"go to Moon",
                            "status":"DONE"
                            }
                        """));
    }
}
