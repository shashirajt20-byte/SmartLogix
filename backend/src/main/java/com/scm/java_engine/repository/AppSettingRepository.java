package com.scm.java_engine.repository;

import com.scm.java_engine.entity.AppSetting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppSettingRepository
        extends JpaRepository<AppSetting, Integer> {

}