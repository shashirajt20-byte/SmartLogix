package com.scm.java_engine.service;

import com.scm.java_engine.entity.RoadNetwork;
import com.scm.java_engine.graph.Dijkstra;
import com.scm.java_engine.graph.Graph;
import com.scm.java_engine.model.RouteResponse;
import com.scm.java_engine.repository.RoadNetworkRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteOptimizationService {

    private final RoadNetworkRepository roadNetworkRepository;

    public RouteOptimizationService(
            RoadNetworkRepository roadNetworkRepository
    ) {
        this.roadNetworkRepository = roadNetworkRepository;
    }

    public RouteResponse optimize(
            String source,
            String destination
    ) {

        List<RoadNetwork> roads =
                roadNetworkRepository.findAll();

        Graph graph = new Graph();

        for (RoadNetwork road : roads) {

            graph.addEdge(
                    road.getSourceCity(),
                    road.getDestinationCity(),
                    road.getCost()
            );
        }

        return Dijkstra.shortestPath(
                graph,
                source,
                destination
        );
    }
}