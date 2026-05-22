import java.util.*;

public class Graph{
    Map<String, List<Node>> map = new HashMap<>();

    public void addEdge(String source, String destination, int distance){
        map.putIfAbsent(source, new ArrayList<>());
        map.get(source).add(new Node(destination, distance));
    }
}