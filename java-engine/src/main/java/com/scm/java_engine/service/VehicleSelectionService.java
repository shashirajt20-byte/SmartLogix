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
    ){
    
        VehicleData bestVehicle = null;
    
        for(VehicleData vehicle : vehicles){
    
            if(vehicle.capacity >= shipmentWeight){
    
                if(bestVehicle == null
                        ||
                   vehicle.capacity <
                   bestVehicle.capacity){
    
                    bestVehicle = vehicle;
                }
            }
        }
    
        return bestVehicle;
    }
}