package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Stock;
import com.scm.java_engine.entity.StockId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository
        extends JpaRepository<Stock, StockId> {

}