package com.scm.java_engine.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "app_settings")
public class AppSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 100)
    private String key;

    @Column(nullable = false, length = 255)
    private String value;

    @Column(columnDefinition = "TEXT")
    private String description;

    public AppSetting() {
    }
}