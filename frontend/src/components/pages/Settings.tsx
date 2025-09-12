import React, { useState } from 'react';
import './Settings.css';
import { setSettings, SettingsRequest, SettingsResponse } from '../../api/Settings';

interface SettingsProps {
  username: string;
}

const Settings: React.FC<SettingsProps> = ({ username }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false
  });
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    // In a real app, this would save to the backend
    try {
      const settings: SettingsRequest = {
        username: username,
        darkMode: darkMode,
        language: language,
        notifications:[{
          type: 'EMAIL',
          contactInfo: 'test@email.com',
          allowContact: notifications.email
        }]
      }

      const data: SettingsResponse = await setSettings(localStorage.getItem('authToken'), settings);

      if (data.success) {
        alert('Settings saved successfully!');
      } else {
        alert('Failed to save settings');
      }
    } catch (error) {
      alert('Error connecting to server. Please try again.');
      console.error('Settings error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        <h1>Settings</h1>
        <p>Manage your account preferences and settings</p>
        
        <div className="settings-section">
          <h3>Account Information</h3>
          <div className="setting-item">
            <label>Username:</label>
            <span className="username-display">{username}</span>
          </div>
        </div>

        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-item">
            <label htmlFor="notifications">Email Notifications:</label>
            <input
              type="checkbox"
              id="notifications"
              checked={notifications.email}
              name='email'
              onChange={handleNotificationToggle}
            />
          </div>
          
          <div className="setting-item">
            <label htmlFor="darkMode">Dark Mode:</label>
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              name='darkMode'
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </div>
          
          <div className="setting-item">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              {/* <option value="es">Spanish</option> */}
              {/* <option value="fr">French</option> */}
              {/* <option value="de">German</option> */}
            </select>
          </div>
        </div>
{/* TODO these buttons don't do anything */}
        <div className="settings-section">
          <h3>Security</h3>
          <button className="change-password-btn">Change Password</button>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="settings-actions">
          <button className="save-btn" onClick={handleSave}>
            {isLoading ? 'Saving Changes...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
