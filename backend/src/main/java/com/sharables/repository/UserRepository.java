package com.sharables.repository;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.sharables.dto.LoginRequest;
import com.sharables.dto.LoginResponse;

@Repository
public class UserRepository {
    // TODO this is a placeholder until a database is in place
    // key is the username which must be unique
    private final HashMap<String, LoginRequest> tempDb;

    public UserRepository() {
        this.tempDb = new HashMap<>();
    }

    public LoginResponse addUser(LoginRequest loginRequest) {
        LoginResponse response = new LoginResponse();
        if(tempDb.containsKey(loginRequest.getUsername())) {
            response.setSuccess(false);
            response.setMessage("Username already exists");
            return response;
        }

        try {
            tempDb.put(loginRequest.getUsername(), loginRequest);
            response.setSuccess(true);
            response.setMessage("Successfully created user");
            return response;
        } catch(Exception e) {
            response.setSuccess(false);
            response.setMessage("Failed to create user");
            return response;
        }
    }

    public boolean verifyCredentials(LoginRequest request) {
        // for testing, remove someday
        if ("admin".equals(request.getUsername()) && "password".equals(request.getPassword())) {
            return true;
        }

        if (tempDb.containsKey(request.getUsername())) {
           if (tempDb.get(request.getUsername()).getPassword().equals(request.getPassword())) {
            return true;
           }
        }
        return false;
    }
}
