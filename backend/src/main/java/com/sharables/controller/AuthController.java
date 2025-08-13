package com.sharables.controller;

import com.sharables.dto.LoginRequest;
import com.sharables.dto.LoginResponse;
import com.sharables.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            LoginResponse response = authService.authenticate(loginRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            LoginResponse errorResponse = new LoginResponse();
            errorResponse.setSuccess(false);
            errorResponse.setMessage("Authentication failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
