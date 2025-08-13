import React from 'react';
import './Home.css';

interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Sharables, {username}!</h1>
        <p>You have successfully logged in to your account.</p>
        <div className="welcome-cards">
          <div className="welcome-card">
            <h3>Getting Started</h3>
            <p>Explore the features and start sharing your content with the world.</p>
          </div>
          <div className="welcome-card">
            <h3>Your Dashboard</h3>
            <p>Manage your profile, settings, and preferences from the menu above.</p>
          </div>
          <div className="welcome-card">
            <h3>Stay Connected</h3>
            <p>Connect with other users and discover amazing content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
