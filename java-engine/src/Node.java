public class Node{
    String city;
    int distance;
    Node(String city, int distance){
        this.city = city;
        this.distance = distance;
    }
    @Override
    public String toString() {
        return city + " (" + distance + " km)";
    }
}