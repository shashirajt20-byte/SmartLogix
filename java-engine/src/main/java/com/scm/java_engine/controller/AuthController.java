package com.scm.java_engine.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scm.java_engine.entity.User;
import com.scm.java_engine.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user){

        return authService.signup(user);
    }

    @PostMapping("/signin")
    public User signin(@RequestBody Map<String, String> request){
        String email = request.get("email");
        String password = request.get("password");
        
        return authService.singin(email, password);
    }
}
