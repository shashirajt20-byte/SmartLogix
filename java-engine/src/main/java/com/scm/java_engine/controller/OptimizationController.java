package com.scm.java_engine.controller;

import com.scm.java_engine.model.RouteRequest;
import com.scm.java_engine.model.RouteResponse;
import com.scm.java_engine.service.RouteOptimizationService;
import org.springframework.web.bind.annotation.*;

@RestController
public class OptimizationController{

    private final RouteOptimizationService service;

    public OptimizationController(RouteOptimizationService service){
        this.service = service;
    }
    @PostMapping("/optimize-route")
    public RouteResponse optimizaton(@RequestBody RouteRequest request){
        return service.optimize(request);
    }
}