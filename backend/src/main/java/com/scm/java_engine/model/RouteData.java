package com.scm.java_engine.model;

public class RouteData{
    public String source;
    public String destination;
    public int cost;

    public RouteData(String source, String destination, int cost){
        this.source = source;
        this.destination = destination;
        this.cost = cost;
    }
}