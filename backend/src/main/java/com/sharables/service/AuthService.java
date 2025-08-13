package com.sharables.service;

import com.sharables.dto.LoginRequest;
import com.sharables.dto.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public LoginResponse authenticate(LoginRequest loginRequest) {
        // Simple authentication logic - in a real app, you'd check against a database
        if ("admin".equals(loginRequest.getUsername()) && "password".equals(loginRequest.getPassword())) {
            LoginResponse response = new LoginResponse();
            response.setSuccess(true);
            response.setMessage("Login successful");
            response.setToken("sample-jwt-token-" + System.currentTimeMillis());
            return response;
        } else {
            LoginResponse response = new LoginResponse();
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }
    }
}
