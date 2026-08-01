package com.scm.java_engine.service;

import com.scm.java_engine.entity.Driver;
import com.scm.java_engine.entity.Vehicle;
import com.scm.java_engine.entity.Warehouse;
import com.scm.java_engine.model.*;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class OptimizationService {

    private final RouteOptimizationService routeService;
    private final WarehouseSelectionService warehouseService;
    private final DriverAllocationService driverService;
    private final VehicleSelectionService vehicleService;
    private final ETAService etaService;

    public OptimizationService(
            WarehouseSelectionService warehouseService,
            DriverAllocationService driverService,
            VehicleSelectionService vehicleService,
            ETAService etaService,
            RouteOptimizationService routeService
    ) {
        this.warehouseService = warehouseService;
        this.driverService = driverService;
        this.vehicleService = vehicleService;
        this.etaService = etaService;
        this.routeService = routeService;
    }

    public OptimizationResponse optimize(OptimizationRequest request) {

        ShipmentData shipment = request.shipment;

        // 1. Find shortest route using road_network + Dijkstra
        RouteResponse routeResponse = routeService.optimize(
                shipment.source,
                shipment.destination
        );

        // 2. Select best vehicle from database
        Vehicle bestVehicle = vehicleService.findBestVehicle(
                BigDecimal.valueOf(shipment.weight),
                BigDecimal.valueOf(shipment.volume)
        );

        // 3. Select driver from database
        Driver bestDriver = driverService.findBestDriver();

        // 4. Select warehouse from database
        Warehouse bestWarehouse =
                warehouseService.findBestWarehouse(
                        shipment.weight,
                        shipment.volume
                );

        // 5. Calculate ETA
        int eta = etaService.calculateETA(
                routeResponse.cost,
                shipment.trafficLevel
        );

        // Safety checks
        if (bestVehicle == null) {
            throw new RuntimeException(
                    "No suitable vehicle available"
            );
        }

        if (bestDriver == null) {
            throw new RuntimeException(
                    "No driver available"
            );
        }

        if (bestWarehouse == null) {
            throw new RuntimeException(
                    "No suitable warehouse available"
            );
        }

        return new OptimizationResponse(
                bestWarehouse.getId(),
                bestDriver.getUserId(),
                bestVehicle.getId(),
                routeResponse.route,
                routeResponse.cost,
                eta
        );
    }
    public OptimizationResponse optimizeShipment(
            double weight,
            double volume
    ) {
    
        Vehicle bestVehicle = vehicleService.findBestVehicle(
                java.math.BigDecimal.valueOf(weight),
                java.math.BigDecimal.valueOf(volume)
        );
    
        Driver bestDriver = driverService.findBestDriver();
    
        Warehouse bestWarehouse =
                warehouseService.findBestWarehouse(
                        weight,
                        volume
                );
    
        if (bestVehicle == null) {
            throw new RuntimeException("No suitable vehicle available");
        }
    
        if (bestDriver == null) {
            throw new RuntimeException("No driver available");
        }
    
        if (bestWarehouse == null) {
            throw new RuntimeException("No warehouse available");
        }
    
        return new OptimizationResponse(
                bestWarehouse.getId(),
                bestDriver.getUserId(),
                bestVehicle.getId(),
                null,
                0,
                0
        );
    }
}