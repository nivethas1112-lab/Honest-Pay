import React from 'react';
import { Search, Bell, User, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src="/logo.png" alt="Honest Pay" height="40" />
          </div>
          
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search for transactions, users..." />
          </div>
        </div>
        
        <div className="nav-actions">
          <button className="nav-btn notification-btn">
            <Bell size={20} />
            <span className="badge"></span>
          </button>
          
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
            <div className="user-avatar">
              <User size={20} />
            </div>
          </div>
          
          <button className="nav-btn logout-btn" title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
