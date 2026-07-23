package com.scm.java_engine.service;

import com.scm.java_engine.entity.Shipment;
import com.scm.java_engine.repository.ShipmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShipmentService {

    private final ShipmentRepository shipmentRepository;
    private final OptimizationService optimizationService;

    public ShipmentService(ShipmentRepository shipmentRepository, OptimizationService optimizationService) {
        this.shipmentRepository = shipmentRepository;
        this.optimizationService = optimizationService;
    }

    public Shipment createShipment(Shipment shipment) {

        if (shipment.getCustomerId() == null) {
            throw new IllegalArgumentException("Customer ID is required");
        }

        if (shipment.getOriginAddress() == null ||
                shipment.getOriginAddress().isBlank()) {
            throw new IllegalArgumentException("Origin address is required");
        }

        if (shipment.getDestinationAddress() == null ||
                shipment.getDestinationAddress().isBlank()) {
            throw new IllegalArgumentException("Destination address is required");
        }

        if (shipment.getScheduledPickup() == null) {
            throw new IllegalArgumentException("Scheduled pickup is required");
        }

        if (shipment.getTotalWeight() == null) {
            throw new IllegalArgumentException("Total weight is required");
        }

        if (shipment.getTotalPackages() == null) {
            throw new IllegalArgumentException("Total packages is required");
        }

        return shipmentRepository.save(shipment);
    }


    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }


    public Shipment getShipment(Integer id) {

        return shipmentRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Shipment not found with id: " + id
                        )
                );
    }


    public Shipment updateShipment(Integer id, Shipment updatedShipment) {

        Shipment existingShipment = shipmentRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Shipment not found with id: " + id
                        )
                );

        if (updatedShipment.getCustomerId() != null) {
            existingShipment.setCustomerId(
                    updatedShipment.getCustomerId()
            );
        }

        if (updatedShipment.getOriginAddress() != null) {
            existingShipment.setOriginAddress(
                    updatedShipment.getOriginAddress()
            );
        }

        if (updatedShipment.getOriginLat() != null) {
            existingShipment.setOriginLat(
                    updatedShipment.getOriginLat()
            );
        }

        if (updatedShipment.getOriginLng() != null) {
            existingShipment.setOriginLng(
                    updatedShipment.getOriginLng()
            );
        }

        if (updatedShipment.getDestinationAddress() != null) {
            existingShipment.setDestinationAddress(
                    updatedShipment.getDestinationAddress()
            );
        }

        if (updatedShipment.getDestinationLat() != null) {
            existingShipment.setDestinationLat(
                    updatedShipment.getDestinationLat()
            );
        }

        if (updatedShipment.getDestinationLng() != null) {
            existingShipment.setDestinationLng(
                    updatedShipment.getDestinationLng()
            );
        }

        if (updatedShipment.getScheduledPickup() != null) {
            existingShipment.setScheduledPickup(
                    updatedShipment.getScheduledPickup()
            );
        }

        if (updatedShipment.getScheduledDelivery() != null) {
            existingShipment.setScheduledDelivery(
                    updatedShipment.getScheduledDelivery()
            );
        }

        if (updatedShipment.getStatus() != null) {
            existingShipment.setStatus(
                    updatedShipment.getStatus()
            );
        }

        if (updatedShipment.getTotalWeight() != null) {
            existingShipment.setTotalWeight(
                    updatedShipment.getTotalWeight()
            );
        }

        if (updatedShipment.getPriority() != null) {
            existingShipment.setPriority(
                    updatedShipment.getPriority()
            );
        }

        if (updatedShipment.getServiceType() != null) {
            existingShipment.setServiceType(
                    updatedShipment.getServiceType()
            );
        }

        if (updatedShipment.getPaymentTerms() != null) {
            existingShipment.setPaymentTerms(
                    updatedShipment.getPaymentTerms()
            );
        }

        if (updatedShipment.getInsurance() != null) {
            existingShipment.setInsurance(
                    updatedShipment.getInsurance()
            );
        }

        if (updatedShipment.getNotes() != null) {
            existingShipment.setNotes(
                    updatedShipment.getNotes()
            );
        }

        if (updatedShipment.getShipmentType() != null) {
            existingShipment.setShipmentType(
                    updatedShipment.getShipmentType()
            );
        }

        if (updatedShipment.getReferenceNumber() != null) {
            existingShipment.setReferenceNumber(
                    updatedShipment.getReferenceNumber()
            );
        }

        if (updatedShipment.getWarehouseId() != null) {
            existingShipment.setWarehouseId(
                    updatedShipment.getWarehouseId()
            );
        }

        if (updatedShipment.getCargoType() != null) {
            existingShipment.setCargoType(
                    updatedShipment.getCargoType()
            );
        }

        if (updatedShipment.getSpecialRequirements() != null) {
            existingShipment.setSpecialRequirements(
                    updatedShipment.getSpecialRequirements()
            );
        }

        if (updatedShipment.getTotalVolume() != null) {
            existingShipment.setTotalVolume(
                    updatedShipment.getTotalVolume()
            );
        }

        if (updatedShipment.getTotalPackages() != null) {
            existingShipment.setTotalPackages(
                    updatedShipment.getTotalPackages()
            );
        }

        if (updatedShipment.getAssignedVehicleId() != null) {
            existingShipment.setAssignedVehicleId(
                    updatedShipment.getAssignedVehicleId()
            );
        }

        if (updatedShipment.getAssignedDriverId() != null) {
            existingShipment.setAssignedDriverId(
                    updatedShipment.getAssignedDriverId()
            );
        }

        if (updatedShipment.getRouteId() != null) {
            existingShipment.setRouteId(
                    updatedShipment.getRouteId()
            );
        }

        return shipmentRepository.save(existingShipment);
    }


    public void deleteShipment(Integer id) {

        Shipment shipment = shipmentRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Shipment not found with id: " + id
                        )
                );

        shipmentRepository.delete(shipment);
    }
}