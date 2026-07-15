package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    // Demo-only credential check. Replace with a real UserDetailsService / DB lookup.
    private static final String DEMO_USERNAME = "admin";
    private static final String DEMO_PASSWORD = "password";

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (DEMO_USERNAME.equals(username) && DEMO_PASSWORD.equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(Map.of("token", token));
        }

        return ResponseEntity.status(401).body(Map.of("error", "Invalid username or password"));
    }
}
