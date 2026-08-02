package com.scm.java_engine.entity;

import java.io.Serializable;
import java.util.Objects;

public class StockId implements Serializable {

    private Integer warehouseId;
    private Integer productId;

    public StockId() {}

    public StockId(Integer warehouseId, Integer productId) {
        this.warehouseId = warehouseId;
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof StockId)) return false;

        StockId stockId = (StockId) o;

        return Objects.equals(warehouseId, stockId.warehouseId)
                && Objects.equals(productId, stockId.productId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(warehouseId, productId);
    }
}