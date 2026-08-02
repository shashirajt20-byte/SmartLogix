package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Integer> {

}