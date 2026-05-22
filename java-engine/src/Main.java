public class Main{
    // @Override
    // public String toString(){
    //     return city + " (" + distance + " km)";
    // }
    public static void main(String [] args){
        Graph graph = new Graph();
        graph.addEdge("Delhi", "Mumbai", 100);
        graph.addEdge("Delhi", "Pune", 5);
        
        graph.addEdge("Mumbai", "Bangalore", 8);
        
        System.out.println(graph.map);
        System.out.println("Graph created");
    }
}