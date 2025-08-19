package com.sharables.dto;

import java.util.ArrayList;
import java.util.List;

import com.sharables.enums.Languages;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class SettingsRequest {

    @NotEmpty(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotEmpty(message = "Notifications list is required")
    private List<Notification> notifications;

    @NotNull(message = "Dark Mode selection is required")
    private boolean darkMode;

    private Languages language = Languages.ENGLISH;

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Notification> geNotifications() {
        return this.notifications;
    }

    public void setNotifications(List<Notification> notifications) {
        this.notifications = notifications;
    }

    public void addNotification(Notification notification) {
        if (this.notifications == null) {
            notifications = new ArrayList<Notification>();
        }
        notifications.add(notification);
    }

    public boolean getDarkMode() {
        return this.darkMode;
    }

    public void setDarkMode(boolean darkMode) {
        this.darkMode = darkMode;
    }

    public Languages getLanguage() {
        return this.language;
    }

    @Override
    public String toString() {
        return "SettingsRequest["
        + "username=" + username
        + ", notifications=" + notifications
        + ", darkMode=" + darkMode
        + ", language=" + language
        + "]";
    }
}
