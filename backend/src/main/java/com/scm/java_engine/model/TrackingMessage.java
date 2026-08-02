package com.scm.java_engine.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrackingMessage {

    private Integer vehicleId;

    private Integer shipmentId;

    private double latitude;

    private double longitude;
}