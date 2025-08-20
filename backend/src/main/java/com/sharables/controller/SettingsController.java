package com.sharables.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/{id}")
    public ResponseEntity<?> getSettings(@RequestParam String id) {
        try {
            SettingsResponse response = settingsService.getSettings(id);

            if(response.getSuccess()) {
                return ResponseEntity.ok(response);
            } else {
                return new ResponseEntity<>(response.getMessage(), HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
            System.out.println("Error while getting settings for " + id + ": " + e.getMessage());
            return new ResponseEntity<>("Error while getting settings", HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    @PostMapping("/")
    public ResponseEntity<?> saveSettings(@Valid @RequestBody SettingsRequest settings) {
        try {
            SettingsResponse response = settingsService.saveSettings(settings);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println("Error while saving settings for " + settings.getUsername() + ": " + e.getMessage());
            return new ResponseEntity<>("Failed to save settings", HttpStatus.BAD_REQUEST);
        }
    }
}
