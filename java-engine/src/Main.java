public class Main{
    public static void main(String [] args){
        Graph graph = new Graph();
        graph.addEdge("Delhi", "Mumbai", 100);
        graph.addEdge("Delhi", "Pune", 5);
        graph.addEdge("Pune", "Mumbai", 2);
        graph.addEdge("Mumbai", "Bangalore", 8);
        graph.addEdge("Pune", "Bangalore", 15);


        Warehouse w1 = new Warehouse("Delhi Hub", "Delhi");
        Warehouse w2 = new Warehouse("Mumbai Hub", "Mumbai");
        Warehouse w3 = new Warehouse("Pune Hub", "Pune");

        String customerCity = "Bangalore";

        graph.printGraph();
        graph.updateEdgeCost("Delhi", "Pune", 200);
        System.out.println("Graph created");

        Dijkstra.shortestPath(graph, "Delhi");
    }
}