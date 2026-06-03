package com.scm.service;

import java.util.*;
import com.scm.model.DriverData;
import org.springframework.stereotype.Service;

@Service
public class DriverAllocationServie{
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