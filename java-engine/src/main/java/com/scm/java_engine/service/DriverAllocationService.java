package com.scm.java_engine.service;

import java.util.*;
import com.scm.java_engine.model.DriverData;
import org.springframework.stereotype.Service;

@Service
public class DriverAllocationService{
    public double findScore(double distance, int currentLoad){
        return (distance * 0.7) + (currentLoad * 0.3);
    }
    public DriverData findBestDriver(List<DriverData> drivers){
        DriverData bestDriver = null;
        double bestScore = Double.MAX_VALUE;

        for(DriverData driver : drivers){
            double score = findScore(driver.distance, driver.currentLoad);
            if(score < bestScore){
                bestScore = score;
                bestDriver = driver;
            }
        }
        return bestDriver;
    }
}