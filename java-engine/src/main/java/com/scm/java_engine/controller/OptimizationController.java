package com.scm.java_engine.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OptimizationController{
    @GetMapping("/test")
    public String test(){
        return "Optimization controller is running";
    }
}