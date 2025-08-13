import React, { useState, useRef, useEffect } from 'react';
import './MenuBar.css';
import type { Page } from '../App';

interface MenuBarProps {
  username: string;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ username, onNavigate, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (page: Page) => {
    setIsDropdownOpen(false);
    onNavigate(page);
  };

  return (
    <nav className="menu-bar">
      <div className="menu-container">
        <div className="logo">
          <h2>Sharables</h2>
        </div>
        
        <div className="menu-right">
          <div className="user-info">
            <span className="username">Welcome, {username}</span>
          </div>
          
          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <span className="menu-icon">☰</span>
              Menu
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button 
                  className="dropdown-item"
                  onClick={() => handleMenuClick('home')}
                >
                  🏠 Home
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleMenuClick('settings')}
                >
                  ⚙️ Settings
                </button>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item logout"
                  onClick={onLogout}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
