package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository
        extends JpaRepository<Product, Integer> {

}