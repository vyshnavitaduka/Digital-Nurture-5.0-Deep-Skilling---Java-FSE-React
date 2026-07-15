package com.cognizant.greet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greet")
public class GreetController {

    @GetMapping("/{name}")
    public String greet(@PathVariable String name) {
        return "Hello, " + name + "! Welcome to the Greet microservice.";
    }

    @GetMapping
    public String defaultGreet() {
        return "Hello from the Greet microservice!";
    }
}
