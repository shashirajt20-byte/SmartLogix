package com.scm.java_engine.service;

import com.scm.java_engine.model.*;
import org.springframework.stereotype.Service;

@Service
public class OptimizationService {

    private final WarehouseSelectionService warehouseService;
    private final DriverAllocationService driverService;
    private final VehicleSelectionService vehicleService;
    private final ETAService etaService;

    public OptimizationService(
            WarehouseSelectionService warehouseService,
            DriverAllocationService driverService,
            VehicleSelectionService vehicleService,
            ETAService etaService
    ) {
        this.warehouseService = warehouseService;
        this.driverService = driverService;
        this.vehicleService = vehicleService;
        this.etaService = etaService;
    }

    public OptimizationResponse optimize(
            OptimizationRequest request
    ){

        VehicleData bestVehicle =
                vehicleService.findBestVehicle(
                        request.vehicles,
                        request.shipment.weight,
                        request.shipment.volume
                );

        DriverData bestDriver =
                driverService.findBestDriver(
                        request.drivers
                );

        int eta =
                etaService.calculateETA(
                        10,
                        request.shipment.trafficLevel
                );

        return new OptimizationResponse(
                1,
                bestDriver.driverId,
                bestVehicle.vehicleId,
                null,
                10,
                eta
        );
    }
}