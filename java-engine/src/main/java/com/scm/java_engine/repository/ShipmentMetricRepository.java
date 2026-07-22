package com.scm.java_engine.repository;

import com.scm.java_engine.entity.ShipmentMetric;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShipmentMetricRepository
        extends JpaRepository<ShipmentMetric, Integer> {

}