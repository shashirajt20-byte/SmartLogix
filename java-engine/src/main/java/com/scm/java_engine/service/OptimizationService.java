package com.scm.java_engine.service;

import com.scm.java_engine.model.*;
import org.springframework.stereotype.Service;
import java.util.Map;

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
        RouteRequest routeRequest = new RouteRequest();

        routeRequest.source = request.shipment.source;
        routeRequest.destination = request.shipment.destination;
        routeRequest.weight = request.shipment.weight;
        routeRequest.volume = request.shipment.volume;
        routeRequest.trafficLevel = request.shipment.trafficLevel;
        routeRequest.routes = request.routes;

        RouteResponse routeResponse = routeService.optimize(routeRequest);

        VehicleData bestVehicle = vehicleService.findBestVehicle(
            request.vehicles,
            request.shipment.weight,
            request.shipment.volume
        );

        DriverData bestDriver = driverService.findBestDriver(request.drivers);
        int eta = etaService.calculateETA(10, request.shipment.trafficLevel);
        WarehouseData bestWarehouse = warehouseService.findBestWarehouse(
            request.warehouses,
            Map.of(1, routeResponse.cost)
        );

        return new OptimizationResponse(
            bestWarehouse.warehouseId,
            bestDriver.driverId,
            bestVehicle.vehicleId,
            routeResponse.route,
            routeResponse.cost,
            eta
        );
    }
}
