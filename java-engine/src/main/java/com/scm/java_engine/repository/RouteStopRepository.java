package com.scm.java_engine.repository;

import com.scm.java_engine.entity.RouteStop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RouteStopRepository
        extends JpaRepository<RouteStop, Integer> {

}