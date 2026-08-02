package com.scm.java_engine.model;

public class DriverData{
    public int driverId;
    public String driverName;
    public double distance;
    public int currentLoad;

    public DriverData(int driverId, String driverName, double distance, int currentLoad){
        this.driverId = driverId;
        this.driverName = driverName;
        this.distance  = distance;
        this.currentLoad = currentLoad;
    }
}