package com.sharables.service;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;

import org.springframework.stereotype.Service;

@Service
public class SettingsService {

    public SettingsResponse saveSettings(SettingsRequest settingsRequest) {
        if (true) {//TODO change this to have real logic
            SettingsResponse response = new SettingsResponse();
            response.setSuccess(true);
            response.setMessage("Settings successfully added");
            return response;
        } else {
            SettingsResponse response = new SettingsResponse();
            response.setSuccess(false);
            response.setMessage("Invalid settings value");
            return response;
        }
    }
}
