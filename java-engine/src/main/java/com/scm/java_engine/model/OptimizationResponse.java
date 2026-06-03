package com.scm.java_engine.model;

import java.util.List;

public class OptimizationResponse {

    public int warehouseId;

    public int driverId;

    public int vehicleId;

    public List<String> route;

    public int cost;

    public int eta;

    public OptimizationResponse(
            int warehouseId,
            int driverId,
            int vehicleId,
            List<String> route,
            int cost,
            int eta
    ) {
        this.warehouseId = warehouseId;
        this.driverId = driverId;
        this.vehicleId = vehicleId;
        this.route = route;
        this.cost = cost;
        this.eta = eta;
    }
}