package com.scm.java_engine.service;

import com.scm.java_engine.entity.Warehouse;
import com.scm.java_engine.repository.WarehouseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseSelectionService {

    private final WarehouseRepository warehouseRepository;

    public WarehouseSelectionService(
            WarehouseRepository warehouseRepository
    ) {
        this.warehouseRepository = warehouseRepository;
    }

    public Warehouse findBestWarehouse(
            double shipmentWeight,
            double shipmentVolume
    ) {

        List<Warehouse> warehouses = warehouseRepository.findAll();

        if (warehouses.isEmpty()) {
            return null;
        }

        // Temporary selection because warehouses table
        // has no capacity/inventory fields
        return warehouses.get(0);
    }
}