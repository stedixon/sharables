import React, { useState } from 'react';
import './Settings.css';

interface SettingsProps {
  username: string;
}

const Settings: React.FC<SettingsProps> = ({ username }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Settings saved:', { notifications, darkMode, language });
    alert('Settings saved successfully!');
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
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </div>
          
          <div className="setting-item">
            <label htmlFor="darkMode">Dark Mode:</label>
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
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
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h3>Security</h3>
          <button className="change-password-btn">Change Password</button>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="settings-actions">
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
