package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Forecast;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForecastRepository
        extends JpaRepository<Forecast, Integer> {

}