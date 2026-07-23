package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "shipments")
@Getter
@Setter
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "customer_id", nullable = false)
    private Integer customerId;

    @Column(name = "origin_address", nullable = false)
    private String originAddress;
    
    @Column(name = "\"originLat\"")
    private Double originLat;

    @Column(name = "\"originLng\"")
    private Double originLng;

    @Column(name = "\"destinationLat\"")
    private Double destinationLat;

    @Column(name = "\"destinationLng\"")
    private Double destinationLng;

    @Column(name = "destination_address", nullable = false)
    private String destinationAddress;

    @Column(name = "scheduled_pickup", nullable = false)
    private LocalDateTime scheduledPickup;

    @Column(name = "scheduled_delivery")
    private LocalDateTime scheduledDelivery;

    private String status;

    @Column(name = "total_weight", nullable = false)
    private BigDecimal totalWeight;

    private String priority;

    @Column(name = "service_type")
    private String serviceType;

    @Column(name = "payment_terms")
    private String paymentTerms;

    private Boolean insurance;

    private String notes;

    @Column(name = "shipment_type")
    private String shipmentType;

    @Column(name = "reference_number")
    private String referenceNumber;

    @Column(name = "warehouse_id")
    private Integer warehouseId;

    @Column(name = "cargo_type")
    private String cargoType;

    @Column(name = "special_requirements")
    private String specialRequirements;

    @Column(name = "total_volume")
    private BigDecimal totalVolume;

    @Column(name = "total_packages")
    private Integer totalPackages;

    @Column(name = "assigned_vehicle_id")
    private Integer assignedVehicleId;

    @Column(name = "assigned_driver_id")
    private Integer assignedDriverId;

    @Column(name = "route_id")
    private Integer routeId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Shipment() {
    }
}