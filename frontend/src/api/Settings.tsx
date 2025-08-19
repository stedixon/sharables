
export interface Notification {
    type: string;
    contactInfo: string;
    allowContact: boolean;
}

export interface SettingsRequest {
    username: string;
    darkMode: boolean;
    language: string;
    notifications: Notification[];
}

export interface SettingsResponse {
    success: boolean;
    message: string;
    username: string;
    darkMode: boolean;
    language: string;
    notifications: Notification[];
}

export async function setSettings(token: string | null, settings: SettingsRequest): Promise<SettingsResponse> {
    try {
        const response = await fetch('http://localhost:8080/api/settings/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settings)
        });

        const data: SettingsResponse = await response.json();
        return data;
    } catch(error) {
        console.error("Error adding settings");
        throw error;
    }
}