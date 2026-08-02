package com.scm.java_engine.service;

import com.scm.java_engine.entity.TrackingEvent;
import com.scm.java_engine.repository.TrackingEventRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TrackingEventService {

    private final TrackingEventRepository trackingEventRepository;

    public TrackingEventService(
            TrackingEventRepository trackingEventRepository
    ) {
        this.trackingEventRepository = trackingEventRepository;
    }

    public TrackingEvent saveLocation(
            Integer vehicleId,
            Integer shipmentId,
            double latitude,
            double longitude
    ) {

        TrackingEvent trackingEvent = new TrackingEvent();

        trackingEvent.setVehicleId(vehicleId);
        trackingEvent.setShipmentId(shipmentId);
        trackingEvent.setLatitude(
                java.math.BigDecimal.valueOf(latitude)
        );
        trackingEvent.setLongitude(
                java.math.BigDecimal.valueOf(longitude)
        );
        trackingEvent.setTimestamp(LocalDateTime.now());

        return trackingEventRepository.save(trackingEvent);
    }
}