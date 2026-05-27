public class Node{
    String city;
    int cost;
    Node(String city, int cost){
        this.city = city;
        this.cost = cost;
    }
    @Override
    public String toString() {
        return "(" + city + ", " + cost + ")";
    }
}