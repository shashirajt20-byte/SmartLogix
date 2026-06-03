package com.scm.java_engine.service;

import com.scm.java_engine.model.WarehouseData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class WarehouseSelectionService {

    public WarehouseData findBestWarehouse(
            List<WarehouseData> warehouses,
            Map<Integer, Integer> warehouseCostMap
    ){

        WarehouseData bestWarehouse = null;
        int minimumCost = Integer.MAX_VALUE;

        for(WarehouseData warehouse : warehouses){

            if(warehouse.inventory <= 0){
                continue;
            }

            int cost =
                    warehouseCostMap.getOrDefault(
                            warehouse.warehouseId,
                            Integer.MAX_VALUE
                    );

            if(cost < minimumCost){

                minimumCost = cost;
                bestWarehouse = warehouse;
            }
        }

        return bestWarehouse;
    }
}