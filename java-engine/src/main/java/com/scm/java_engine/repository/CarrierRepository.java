package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Carrier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarrierRepository
        extends JpaRepository<Carrier, Integer> {

}