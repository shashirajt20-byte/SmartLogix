package com.scm.java_engine.service;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.scm.java_engine.model.SignupRequest;
import com.scm.java_engine.entity.User;
import com.scm.java_engine.repository.UserRepository;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository){
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User signup(SignupRequest request) {
    
        Optional<User> existingEmail =
                userRepository.findByEmail(request.getEmail());
    
        if (existingEmail.isPresent()) {
            throw new RuntimeException("Email already registered");
        }
    
        User user = new User();
    
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setFullName(request.getFullName());
        user.setRoleId(request.getRoleId());
    
        String hashedPassword =
                passwordEncoder.encode(request.getPassword());
    
        user.setPasswordHash(hashedPassword);
        user.setCreatedAt(java.time.LocalDateTime.now());
        user.setUpdatedAt(java.time.LocalDateTime.now());
    
        return userRepository.save(user);
    }

    public User singin(String email, String password){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isEmpty()){
            throw new RuntimeException("Invalid email");
        }
        User result = user.get();
        if(user.isEmpty()){
            throw new RuntimeException("Invalid email");
        }
        if (!passwordEncoder.matches(password, result.getPasswordHash())) {
            throw new RuntimeException("Invalid Password");
        }
        return result;
    }
}
