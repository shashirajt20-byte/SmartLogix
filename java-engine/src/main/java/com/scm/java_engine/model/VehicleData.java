package com.scm.java_engine.model;

public class VehicleData {

    public int vehicleId;
    public String vehicleType;
    public double capacity;
    public double currentLoad;

    public VehicleData(int vehicleId, String vehicleType,
                       double capacity, double currentLoad) {

        this.vehicleId = vehicleId;
        this.vehicleType = vehicleType;
        this.capacity = capacity;
        this.currentLoad = currentLoad;
    }
}