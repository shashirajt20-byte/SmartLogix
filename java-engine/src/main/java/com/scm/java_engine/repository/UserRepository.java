package com.scm.java_engine.repository;

import com.scm.java_engine.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}