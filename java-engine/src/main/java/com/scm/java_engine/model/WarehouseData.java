package com.scm.model;

pubilc class WarehouseData{
    public int warehouseId;
    public String warehouseName;
    public String location;
    public int inventory;

    public WarehouseData(int warehouseId, String warehouseName, String location, int inventory){
        this.warehouseId = warehouseId;
        this.warehouseName = warehouseName;
        this.location = location;
        this.inventory = inventory;
    }
}