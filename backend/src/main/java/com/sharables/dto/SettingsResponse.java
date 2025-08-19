package com.sharables.dto;

import java.util.ArrayList;
import java.util.List;

import com.sharables.enums.Languages;

public class SettingsResponse {

    private String message;
    private boolean success;

    private String username;
    private List<Notification> notifications;
    private boolean darkMode;
    private Languages language = Languages.ENGLISH;


    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }    

    public boolean getSuccess() {
        return this.success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Notification> getNotifications() {
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
}
