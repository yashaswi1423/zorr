import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">ZORR</span>
          </div>
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Customer Care</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="minimize-btn" aria-label="Minimize">−</button>
          <button className="close-btn" aria-label="Close">×</button>
        </div>
      </div>
    </div>
  );
};

export default Header;