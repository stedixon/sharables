package com.sharables.service;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;
import com.sharables.repository.SettingsRepository;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class SettingsService {

    private final SettingsRepository settingsRepository;

    public SettingsService(SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    public SettingsResponse saveSettings(SettingsRequest settingsRequest) {
        Optional<SettingsResponse> response = settingsRepository.saveSettings(settingsRequest);
        
        if (response.isPresent()) {
            SettingsResponse settings = response.get();
            settings.setSuccess(true);
            settings.setMessage("Settings successfully added");
            return settings;
        } else {
            SettingsResponse failedResponse = new SettingsResponse();
            failedResponse.setSuccess(false);
            failedResponse.setMessage("Failed to save settings");
            return failedResponse;
        }
    }
}
