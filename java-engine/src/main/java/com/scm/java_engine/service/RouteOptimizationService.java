package com.scm.java_engine.service;

import com.scm.java_engine.model.RouteRequest;
import com.scm.java_engine.model.RouteResponse;
import org.springframework.stereotype.Service;
import com.scm.java_engine.graph.Graph;
import com.scm.java_engine.graph.Dijkstra;
import com.scm.java_engine.model.RouteData;


@Service 
public class RouteOptimizationService{
    public RouteResponse optimize(RouteRequest request){
        Graph graph = new Graph();
        for(RouteData route = request.routes){
            graph.addEdge(
                route.source,
                route.destination,
                route.cost
            );
        }
        return Dijkstra.shortestPath(graph, request.source, request.destination, request.weight, request.volume, request.trafficLevel);
    }
}