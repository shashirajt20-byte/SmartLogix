import java.util.*;

public class Graph{
    HashMap<String, List<Node>> graph = new HashMap<>();

    public void addEdge(String source, String destination, int distance){
        graph.putIfAbsent(source, new ArrayList<>());
        graph.get(source).add(new Node(destination, distance));
        graph.putIfAbsent(destination, new ArrayList<>());
        graph.get(destination).add(new Node(source, distance));
    }

    public void updateEdgeCost(String source, String destination, int newCost){
        if(!graph.containsKey(source)){
            return;
        }
        for(Node neighbor : graph.get(source)){
            if(neighbor.city.equals(destination)){
                neighbor.cost = newCost;
            }
        }
    }

    public void printGraph(){
        System.out.println(graph);
    }
}