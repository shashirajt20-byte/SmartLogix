package com.scm.java_engine.repository;

import com.scm.java_engine.entity.ShipmentItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShipmentItemRepository
        extends JpaRepository<ShipmentItem, Integer> {

}