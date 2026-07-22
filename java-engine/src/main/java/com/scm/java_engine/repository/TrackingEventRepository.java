package com.scm.java_engine.repository;

import com.scm.java_engine.entity.TrackingEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrackingEventRepository
        extends JpaRepository<TrackingEvent, Integer> {

}