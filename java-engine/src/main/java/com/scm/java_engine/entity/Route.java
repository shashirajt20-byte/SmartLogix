package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "vehicle_id")
    private Integer vehicleId;

    @Column(name = "driver_id")
    private Integer driverId;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "total_distance")
    private BigDecimal totalDistance;

    @Column(name = "total_time")
    private BigDecimal totalTime;

    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Route() {
    }
}