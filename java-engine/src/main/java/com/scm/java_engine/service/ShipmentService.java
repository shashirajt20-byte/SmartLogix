package com.scm.java_engine.service;

import org.springframework.stereotype.Service;

import com.scm.java_engine.repository.ShipmentRepository;

@Service
public class ShipmentService{
    private final ShipmentRepository shipmentRepository;

    public ShipmentService(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    public Shipment
}