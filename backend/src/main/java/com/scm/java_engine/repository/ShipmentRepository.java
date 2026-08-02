package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShipmentRepository
        extends JpaRepository<Shipment, Integer> {

}
