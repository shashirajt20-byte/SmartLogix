package com.scm.java_engine.service;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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

    public User signup(User user){
        String email = user.getEmail();

        Optional<User> existingEmail = userRepository.findByEmail(email);

        if(existingEmail.isPresent()){
            throw new RuntimeException("Email already resgistered");

        }
        String hashedPassword = passwordEncoder.encode(user.getPasswordHash());
        user.setPasswordHash(hashedPassword);
        return userRepository.save(user);
    }

    public User singin(String email, String password){
        Optional<User> user = userRepository.findByEmail(email);
        User result = user.get();
        if(user.isEmpty()){
            throw new RuntimeException("Invalid email");
        }
        if(password != result.getPasswordHash()){
            throw new RuntimeException("Invalid Passworf");
        }
        return result;
    }
}
