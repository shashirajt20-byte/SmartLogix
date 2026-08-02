package com.scm.java_engine.controller;

import com.scm.java_engine.entity.TrackingEvent;
import com.scm.java_engine.model.TrackingMessage;
import com.scm.java_engine.service.TrackingEventService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class TrackingWebSocketController {

    private final TrackingEventService trackingEventService;

    public TrackingWebSocketController(
            TrackingEventService trackingEventService
    ) {
        this.trackingEventService = trackingEventService;
    }

    @MessageMapping("/driverLocationUpdate")
    @SendTo("/topic/tracking")
    public TrackingEvent updateLocation(
            TrackingMessage message
    ) {

        return trackingEventService.saveLocation(
                message.getVehicleId(),
                message.getShipmentId(),
                message.getLatitude(),
                message.getLongitude()
        );
    }
}