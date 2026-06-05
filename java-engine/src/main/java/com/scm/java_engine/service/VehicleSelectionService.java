package com.scm.java_engine.service;

import org.springframework.stereotype.Service;
import com.scm.java_engine.model.VehicleData;

import java.util.List;

@Service
public class VehicleSelectionService {

    public VehicleData findBestVehicle(
            List<VehicleData> vehicles,
            double shipmentWeight,
            double shipmentVolume
    ) {

        VehicleData bestVehicle = null;

        for (VehicleData vehicle : vehicles) {

            if (
                    vehicle.capacityWeight >= shipmentWeight
                            &&
                    vehicle.capacityVolume >= shipmentVolume
            ) {

                if (
                        bestVehicle == null
                                ||
                        (
                                vehicle.capacityWeight + vehicle.capacityVolume
                        ) <
                        (
                                bestVehicle.capacityWeight + bestVehicle.capacityVolume
                        )
                ) {

                    bestVehicle = vehicle;
                }
            }
        }

        return bestVehicle;
    }
}