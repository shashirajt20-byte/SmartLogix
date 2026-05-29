package com.scm.java_engine.graph;

import java.util.*;
import com.scm.java_engine.model.RouteResponse;

public class Dijkstra{
    public static RouteResponse shortestPath(Graph graph, String start, String destination){
        Map<String, Integer> distance = new HashMap<>();
        Map<String, String> parent = new HashMap<>();
        PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> a.cost - b.cost);

        for(String city : graph.graph.keySet()){
            distance.put(city, Integer.MAX_VALUE);
        }

        distance.put(start, 0);
        pq.add(new Node(start, 0));

        while(!pq.isEmpty()){
            Node current = pq.poll();

            String currentCity = current.city;
            int currentDistance = current.cost;

            if(currentDistance > distance.getOrDefault(currentCity, Integer.MAX_VALUE)){
                continue;
            }

            if(!graph.graph.containsKey(currentCity)){
                continue;
            }

            for(Node neighbor : graph.graph.get(currentCity)){
                int newDistance = currentDistance + neighbor.cost;
                if(newDistance < distance.getOrDefault(neighbor.city, Integer.MAX_VALUE)){
                    distance.put(neighbor.city, newDistance);
                    parent.put(neighbor.city, currentCity);
                    pq.add(new Node(neighbor.city, newDistance));
                }
            }
        }
        System.out.println("Shortest distance from "+start);

        for(String city : distance.keySet()){
            System.out.println(start+" -> "+city+" = "+distance.get(city)+" km");
        }

        System.out.println("\nParent Map:");
        System.out.println(parent);

        List<String> path = new ArrayList<>();
        String destinations = "Bangalore";
        String current = destinations;

        while(current != null){
            path.add(current);
            current = parent.get(current);
        }

        Collections.reverse(path);

        System.out.println("\nShortest Path:");
        System.out.println(String.join(" -> ", path));

        return new RouteResponse(path, distance.get(destination));
    }
}