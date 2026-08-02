package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository
        extends JpaRepository<Warehouse, Integer> {

}