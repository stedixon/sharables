package com.sharables.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;
import com.sharables.service.SettingsService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins = "http://localhost:3000")
public class SettingsController {

    private SettingsService settingsService;

    public SettingsController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }
    
    @PostMapping("/")
    // TODO require a valid token
    public ResponseEntity<SettingsResponse> saveSettings(@Valid @RequestBody SettingsRequest settings) {
        try {
            SettingsResponse response = settingsService.saveSettings(settings);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            SettingsResponse errorResponse = new SettingsResponse();
            errorResponse.setSuccess(false);
            errorResponse.setMessage("Failed to save settings: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
