package com.loiane.crudspring.controlier;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/hello")
public class hellocontroller {

    @GetMapping
    public String hello() {
        return "hello";
    }
    
    
}
