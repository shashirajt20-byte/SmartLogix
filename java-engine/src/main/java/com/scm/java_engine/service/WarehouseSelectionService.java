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

        List<Warehouse> warehouses =
                warehouseRepository.findAll();

        Warehouse bestWarehouse = null;

        for (Warehouse warehouse : warehouses) {

            if (warehouse.getCapacityWeight() == null ||
                warehouse.getCapacityVolume() == null) {
                continue;
            }

            boolean canHandleShipment =
                    warehouse.getCapacityWeight() >= shipmentWeight
                    &&
                    warehouse.getCapacityVolume() >= shipmentVolume;

            if (!canHandleShipment) {
                continue;
            }

            if (bestWarehouse == null ||
                warehouse.getCapacityWeight()
                        + warehouse.getCapacityVolume()
                <
                bestWarehouse.getCapacityWeight()
                        + bestWarehouse.getCapacityVolume()) {

                bestWarehouse = warehouse;
            }
        }

        return bestWarehouse;
    }
}