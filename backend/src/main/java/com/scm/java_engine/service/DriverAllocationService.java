package com.scm.java_engine.service;

import com.scm.java_engine.entity.Driver;
import com.scm.java_engine.repository.DriverRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverAllocationService {

    private final DriverRepository driverRepository;

    public DriverAllocationService(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }

    public Driver findBestDriver() {

        List<Driver> drivers = driverRepository.findAll();

        if (drivers.isEmpty()) {
            return null;
        }

        return drivers.get(0);
    }
}