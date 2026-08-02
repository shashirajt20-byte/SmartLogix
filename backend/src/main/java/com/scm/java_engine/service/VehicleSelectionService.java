package com.scm.java_engine.service;

import com.scm.java_engine.entity.Vehicle;
import com.scm.java_engine.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class VehicleSelectionService {

    private final VehicleRepository vehicleRepository;

    public VehicleSelectionService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public Vehicle findBestVehicle(
            BigDecimal shipmentWeight,
            BigDecimal shipmentVolume
    ) {

        List<Vehicle> vehicles = vehicleRepository.findAll();

        Vehicle bestVehicle = null;

        for (Vehicle vehicle : vehicles) {

            // Skip vehicles that cannot carry the shipment
            if (vehicle.getCapacityWeight().compareTo(shipmentWeight) >= 0
                    &&
                vehicle.getCapacityVolume().compareTo(shipmentVolume) >= 0) {

                if (bestVehicle == null ||
                    vehicle.getCapacityWeight()
                           .add(vehicle.getCapacityVolume())
                           .compareTo(
                               bestVehicle.getCapacityWeight()
                                          .add(bestVehicle.getCapacityVolume())
                           ) < 0) {

                    bestVehicle = vehicle;
                }
            }
        }

        return bestVehicle;
    }
}