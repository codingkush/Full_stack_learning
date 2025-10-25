package com.kushg.Learning_V0.controller;


import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class MainController {


    @GetMapping("/home")
    public Map<String,String> home(){
        return Map.of("message","Welcome to the Home Page!");
    }

    @GetMapping("/about")
    public Map<String,String> about(){
        return Map.of("message","This is about page.");
    }

    @GetMapping("/contact")
    public Map<String,String> contact(){
        return Map.of("message","This is a contact page");
    }

    @PostMapping("/contact")
    public Map<String,String> handleContact(@RequestBody Map<String,String> formData){
        System.out.println("Received contact data: "+ formData);
        return Map.of("status","sucess","message","Data received successfully!");
    }
}
