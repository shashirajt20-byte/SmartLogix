package com.scm.java_engine.model;

public class VehicleData {

    public int id;
    public String vehicleNumber;
    public String vehicleType;

    public double capacityWeight;
    public double capacityVolume;

    public String currentStatus;
    public String currentLocation;

    public VehicleData() {
    }

    public VehicleData(
            int id,
            String vehicleNumber,
            String vehicleType,
            double capacityWeight,
            double capacityVolume,
            String currentStatus,
            String currentLocation
    ) {
        this.id = id;
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
        this.capacityWeight = capacityWeight;
        this.capacityVolume = capacityVolume;
        this.currentStatus = currentStatus;
        this.currentLocation = currentLocation;
    }
}