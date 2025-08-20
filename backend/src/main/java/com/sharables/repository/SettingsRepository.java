package com.sharables.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;

@Repository
public class SettingsRepository {

    public Optional<SettingsResponse> saveSettings(SettingsRequest settingsRequest) {
        SettingsResponse response = new SettingsResponse();
            response.setSuccess(true);
            response.setMessage("Settings successfully added");
            response.setDarkMode(settingsRequest.getDarkMode());
            response.setNotifications(settingsRequest.geNotifications());
            response.setUsername(settingsRequest.getUsername());
            return Optional.of(response);
    }

}