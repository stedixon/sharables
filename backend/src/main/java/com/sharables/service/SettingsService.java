package com.sharables.service;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;
import com.sharables.repository.SettingsRepository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class SettingsService {

    private final SettingsRepository settingsRepository;

    public SettingsService(SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    public SettingsResponse getSettings(String id) throws Exception {
        try {
            Optional<SettingsResponse> response = settingsRepository.getSettings(id);
            if (response.isPresent()) {
                SettingsResponse settings = response.get();
                settings.setSuccess(true);
                settings.setMessage("Settings successfully found");
                return settings;
            } else {
                SettingsResponse failedResponse = new SettingsResponse();
                failedResponse.setSuccess(false);
                failedResponse.setMessage("Failed to find settings for user " + id);
                return failedResponse;
            }
        } catch(Exception e) {
            System.out.println("Error while getting user id " + id);
            throw e;
        }

    }

    public SettingsResponse saveSettings(String id, SettingsRequest settingsRequest) throws Exception {
        try {
            return settingsRepository.saveSettings(id, settingsRequest);
        } catch(Exception e) {
            System.out.println("Error while saving user id " + id);
            throw e;
        }
    }

    public SettingsResponse updateSettings(String id, SettingsRequest settingsRequest) throws Exception {
        try {
            return settingsRepository.updateSettings(id, settingsRequest);
        } catch(Exception e) {
            System.out.println("Error while updating user id " + id);
            throw e;
        }
    }
}
