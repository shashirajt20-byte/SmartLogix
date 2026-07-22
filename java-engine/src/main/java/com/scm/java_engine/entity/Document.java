package com.scm.java_engine.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "documents")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "shipment_id")
    private Integer shipmentId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "doc_type", nullable = false, length = 50)
    private String docType;

    @Column(name = "file_path", nullable = false, length = 255)
    private String filePath;

    @Column(name = "uploaded_at")
    private LocalDateTime uploadedAt;

    public Document() {
    }
}