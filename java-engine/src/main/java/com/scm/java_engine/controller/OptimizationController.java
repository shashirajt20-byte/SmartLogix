package com.scm.java_engine.controller;

import com.scm.java_engine.model.RouteRequest;
import com.scm.java_engine.model.RouteResponse;
import com.scm.java_engine.service.RouteOptimizationService;
import org.springframework.web.bind.annotation.*;
import com.scm.java_engine.model.OptimizationRequest;
import com.scm.java_engine.model.OptimizationResponse;
import com.scm.java_engine.service.OptimizationService;

@RestController
public class OptimizationController{

    private final OptimizationService service;

    public OptimizationController(OptimizationService service){
        this.service = service;
    }
    @PostMapping("/optimize")
    public OptimizationResponse optimize(
            @RequestBody OptimizationRequest request
    ){
        return service.optimize(request);
    }
}