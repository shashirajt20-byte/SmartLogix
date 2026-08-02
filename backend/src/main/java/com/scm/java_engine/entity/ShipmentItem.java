package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "shipment_items")
public class ShipmentItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "shipment_id", nullable = false)
    private Integer shipmentId;

    @Column(name = "product_id", nullable = false)
    private Integer productId;

    private Integer quantity;

    @Column(name = "item_weight", nullable = false)
    private BigDecimal itemWeight;

    public ShipmentItem() {
    }
}