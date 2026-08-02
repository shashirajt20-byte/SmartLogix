package com.scm.java_engine.service;

import org.springframework.stereotype.Service;

@Service
public class ETAService {

    public int calculateETA(
            int distance,
            String trafficLevel
    ){

        int eta = distance;

        if("high".equalsIgnoreCase(trafficLevel)){
            eta *= 3;
        }
        else if("medium".equalsIgnoreCase(trafficLevel)){
            eta *= 2;
        }

        return eta;
    }
}