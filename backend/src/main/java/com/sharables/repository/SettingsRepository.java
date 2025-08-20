package com.sharables.repository;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.sharables.dto.SettingsRequest;
import com.sharables.dto.SettingsResponse;

@Repository
public class SettingsRepository {
    // TODO this is a placeholder until a database is in place
    private final HashMap<String, SettingsRequest> tempDb;

    public SettingsRepository() {
        this.tempDb = new HashMap<>();
    }

    public Optional<SettingsResponse> getSettings(String id) {
        if (tempDb.containsKey(id)) {
            return Optional.of(responseFromSettings(tempDb.get(id)));
        } else {
            return Optional.empty();
        }
    }

    public SettingsResponse saveSettings(SettingsRequest settingsRequest) {
        tempDb.put(settingsRequest.getUsername(), settingsRequest);
         return responseFromSettings(settingsRequest);
    }

    private SettingsResponse responseFromSettings(SettingsRequest settingsRequest) {
        SettingsResponse response = new SettingsResponse();
            response.setSuccess(true);
            response.setMessage("Settings successfully added");
            response.setDarkMode(settingsRequest.getDarkMode());
            response.setNotifications(settingsRequest.geNotifications());
            response.setUsername(settingsRequest.getUsername());

        return response;
    }
}