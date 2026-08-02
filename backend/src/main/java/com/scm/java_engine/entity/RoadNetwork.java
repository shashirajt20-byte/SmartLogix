package com.scm.java_engine.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "road_network")
@Getter
@Setter
public class RoadNetwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "\"sourceCity\"")
    private String sourceCity;

    @Column(name = "\"destinationCity\"")
    private String destinationCity;

    @Column(name = "cost")
    private Integer cost;

    @Column(name = "\"trafficLevel\"")
    private String trafficLevel;

    @Column(name = "\"roadStatus\"")
    private String roadStatus;

    @Column(name = "\"createdAt\"")
    private LocalDateTime createdAt;

    public RoadNetwork() {
    }
}