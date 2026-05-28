package com.scm.java_engine.graph;
import java.util.*;

public class Main{
    public static void main(String [] args){
        Graph graph = new Graph();
        graph.addEdge("Delhi", "Mumbai", 100);
        graph.addEdge("Delhi", "Pune", 5);
        graph.addEdge("Pune", "Mumbai", 2);
        graph.addEdge("Mumbai", "Bangalore", 8);
        graph.addEdge("Pune", "Bangalore", 15);


        Warehouse w1 = new Warehouse("Delhi Hub", "Delhi", 0);
        Warehouse w2 = new Warehouse("Mumbai Hub", "Mumbai", 10);
        Warehouse w3 = new Warehouse("Pune Hub", "Pune", 5);

        String customerCity = "Bangalore";

        Map<String, Integer> delhiCost =
                Dijkstra.shortestPath(graph, w1.city);

        Map<String, Integer> mumbaiCost =
                Dijkstra.shortestPath(graph, w2.city);

        Map<String, Integer> puneCost =
                Dijkstra.shortestPath(graph, w3.city);

        System.out.println("\nCost to deliver to " + customerCity);

        System.out.println(w1.name + " = " +
                delhiCost.get(customerCity));

        System.out.println(w2.name + " = " +
                mumbaiCost.get(customerCity));

        System.out.println(w3.name + " = " +
                puneCost.get(customerCity));

        int minCost = Integer.MAX_VALUE;
        String bestWarehouse = "";
        
        if(w1.inventory > 0 && delhiCost.get(customerCity) < minCost){
            minCost = delhiCost.get(customerCity);
            bestWarehouse = w1.name;
        }
        
        if(w2.inventory > 0 && mumbaiCost.get(customerCity) < minCost){
            minCost = mumbaiCost.get(customerCity);
            bestWarehouse = w2.name;
        }
        
        if(w3.inventory > 0 && puneCost.get(customerCity) < minCost){
            minCost = puneCost.get(customerCity);
            bestWarehouse = w3.name;
        }
        
        System.out.println("\nBest Warehouse:");
        System.out.println(bestWarehouse + " -> Cost = " + minCost);
    }
}