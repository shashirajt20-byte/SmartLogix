package com.scm.java_engine.model;

public class ShipmentData {

    public String source;
    public String destination;

    public double weight;
    public double volume;

    public String trafficLevel;

    public ShipmentData(
            String source,
            String destination,
            double weight,
            double volume,
            String trafficLevel
    ) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
        this.volume = volume;
        this.trafficLevel = trafficLevel;
    }
}