package com.sharables.repository;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;

import io.micrometer.common.util.StringUtils;

@Repository
public class SettingsRepository {
    // TODO this is a placeholder until a database is in place
    // key is the user id (a UUID)
    private final HashMap<String, SettingsRequest> tempDb;

    public SettingsRepository() {
        this.tempDb = new HashMap<>();
    }

    public Optional<SettingsResponse> getSettings(String id) {
        if (tempDb.containsKey(id)) {
            return Optional.of(responseFromSettings(tempDb.get(id), true, ""));
        } else {
            return Optional.empty();
        }
    }

    public SettingsResponse saveSettings(SettingsRequest settingsRequest) {
        if (tempDb.containsKey(settingsRequest.getId())) {
            System.out.println("Settings for id " + settingsRequest.getId() + "already exist.");
            return responseFromSettings(settingsRequest, false, "Failed to add settings");
        }
        tempDb.put(settingsRequest.getId(), settingsRequest);
        return responseFromSettings(settingsRequest, true, "Settings successfully added");
    }

    public SettingsResponse updateSettings(SettingsRequest settingsRequest) {
        if (!tempDb.containsKey(settingsRequest.getId())) {
            System.out.println("Request to update id " + settingsRequest.getId() + "failed, no settings found for user.");
            return responseFromSettings(settingsRequest, false, "Failed to update settings");
        }

        tempDb.put(settingsRequest.getId(), settingsRequest);
        return responseFromSettings(settingsRequest, true, "Successfully updated settings");
    }

    private SettingsResponse responseFromSettings(SettingsRequest settingsRequest, boolean success, String message) {
        SettingsResponse response = new SettingsResponse();
            response.setSuccess(success);
            response.setMessage(message);
            response.setDarkMode(settingsRequest.getDarkMode());
            response.setNotifications(settingsRequest.geNotifications());
            response.setUsername(settingsRequest.getUsername());

        return response;
    }
}