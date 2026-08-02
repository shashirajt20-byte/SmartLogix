package com.scm.java_engine.controller;

import com.scm.java_engine.model.RouteRequest;
import com.scm.java_engine.model.RouteResponse;
import com.scm.java_engine.repository.VehicleRepository;
import org.springframework.web.bind.annotation.*;
import com.scm.java_engine.model.OptimizationRequest;
import com.scm.java_engine.model.OptimizationResponse;
import com.scm.java_engine.service.OptimizationService;
import com.scm.java_engine.entity.Vehicle;
import java.util.List;

@RestController
public class OptimizationController{

    private final VehicleRepository vehicleRepository;
    private final OptimizationService service;

    public OptimizationController(OptimizationService service, VehicleRepository vehicleRepository){
        this.service = service;
        this.vehicleRepository = vehicleRepository;
    }
    @PostMapping("/optimize")
    public OptimizationResponse optimize(
            @RequestBody OptimizationRequest request
    ){
        return service.optimize(request);
    }

    @GetMapping("/vehicles")
    public List<Vehicle> getVehicles(){
        return vehicleRepository.findAll();
    }
}