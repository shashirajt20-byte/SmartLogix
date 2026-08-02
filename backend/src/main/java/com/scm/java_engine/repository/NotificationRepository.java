package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository
        extends JpaRepository<Notification, Integer> {

}