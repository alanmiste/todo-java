package com.example.backend.todo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoIntegrationTest {

    @Autowired
    MockMvc mockMvc;

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
                .andExpect(status().isOk());

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
                        .andExpect(status().isOk());

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
}
