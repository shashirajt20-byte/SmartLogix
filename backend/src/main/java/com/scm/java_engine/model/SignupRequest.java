package com.scm.java_engine.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {

    private String username;
    private String password;
    private String email;
    private String fullName;
    private Integer roleId;
}