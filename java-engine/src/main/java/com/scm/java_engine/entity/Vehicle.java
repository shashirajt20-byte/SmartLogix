package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "vehicle_number")
    private String vehicleNumber;

    @Column(name = "type")
    private String vehicleType;

    @Column(name = "capacity_weight")
    private BigDecimal capacityWeight;

    @Column(name = "capacity_volume")
    private BigDecimal capacityVolume;

    @Column(name = "current_status")
    private String currentStatus;

    @Column(name = "current_location")
    private String currentLocation;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Vehicle() {
    }

    public Integer getId() {
        return id;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public BigDecimal getCapacityWeight() {
        return capacityWeight;
    }

    public BigDecimal getCapacityVolume() {
        return capacityVolume;
    }

    public String getCurrentStatus() {
        return currentStatus;
    }

    public String getCurrentLocation() {
        return currentLocation;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}