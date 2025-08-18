package com.sharables.dto;

import com.sharables.enums.NotificationType;

public class Notification {

    private NotificationType type;
    private boolean allowContact;
    private String contactInfo;

    public NotificationType getType() {
        return this.type;
    }

    public void setType(NotificationType type) {
        this.type = type;
    }

    public boolean getAllowContact() {
        return this.allowContact;
    }

    public void setAllowContact(boolean allow) {
        this.allowContact = allow;
    }

    public String getContactInfo() {
        return this.contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }
}
