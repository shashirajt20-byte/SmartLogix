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

    private String sourceCity;

    private String destinationCity;

    private Integer cost;

    private String trafficLevel;

    private String roadStatus;

    private LocalDateTime createdAt;

    public RoadNetwork() {
    }
}