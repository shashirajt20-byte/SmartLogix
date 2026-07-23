package com.scm.java_engine.controller;

import java.util.List;

// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.scm.java_engine.entity.Shipment;
import com.scm.java_engine.service.ShipmentService;

@RestController
@RequestMapping("/api/shipments")
public class ShipmentController {
    private final ShipmentService shipmentService;

    public ShipmentController(ShipmentService shipmentService){
        this.shipmentService = shipmentService;
    }

    @PostMapping
    public Shipment createShipment(@RequestBody Shipment shipment){
        return shipmentService.createShipment(shipment);
    }

    @GetMapping
    public List<Shipment> getAllShipment(){
        return shipmentService.getAllShipments();
    }

    @GetMapping("/{id}")
    public Shipment getShipment(@PathVariable Integer id){
        return shipmentService.getShipment(id);
    }

    @PutMapping("/{id}")
    public Shipment updateShipment(@PathVariable Integer id, @RequestBody Shipment shipment){
        return shipmentService.updateShipment(id, shipment);
    }

    @DeleteMapping("/{id}")
    public void deleteShipment(@PathVariable Integer id){
        shipmentService.deleteShipment(id);
    }
}
