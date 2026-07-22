package com.scm.java_engine.repository;

import com.scm.java_engine.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository
        extends JpaRepository<Document, Integer> {

}