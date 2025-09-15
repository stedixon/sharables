package com.sharables.service;

import com.sharables.dto.LoginRequest;
import com.sharables.dto.LoginResponse;
import com.sharables.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public LoginResponse register(LoginRequest loginRequest) {
        LoginResponse response = userRepository.addUser(loginRequest);
        if (response.isSuccess()) {
            //simple logic, replace this with a real token
            response.setToken("sample-jwt-token-" + System.currentTimeMillis());
        }
        return response;
    }

    public LoginResponse authenticate(LoginRequest loginRequest) {
        
        boolean valid = userRepository.verifyCredentials(loginRequest);

        if (valid) {
            LoginResponse response = new LoginResponse();
            response.setSuccess(true);
            response.setMessage("Login successful");
            //make sure the user's id is included in this token
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
