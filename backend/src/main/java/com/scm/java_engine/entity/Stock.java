package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock")
@IdClass(StockId.class)
public class Stock {

    @Id
    @Column(name = "warehouse_id")
    private Integer warehouseId;

    @Id
    @Column(name = "product_id")
    private Integer productId;

    private Integer quantity;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    public Stock() {}
}