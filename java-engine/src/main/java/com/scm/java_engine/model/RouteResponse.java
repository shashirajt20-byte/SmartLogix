package scm.com.java_engine.model;
import java.util.*;

public class RouteResponse{
    
    public List<String> route;
    public int cost;

    public RouteResponse(List<String> route, int cost){
        this.route = route;
        this.cost = cost;
    }
}