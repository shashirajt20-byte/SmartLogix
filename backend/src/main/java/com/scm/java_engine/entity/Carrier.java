package com.scm.java_engine.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "carriers")
public class Carrier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(name = "api_endpoint", length = 255)
    private String apiEndpoint;

    @Column(name = "api_key", length = 255)
    private String apiKey;

    @Column(name = "contact_info", length = 255)
    private String contactInfo;

    public Carrier() {
    }
}