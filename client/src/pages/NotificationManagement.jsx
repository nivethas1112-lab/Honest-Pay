import React from 'react';
import { Settings, Bell, Mail, Smartphone, ShieldCheck, Save } from 'lucide-react';
import './NotificationManagement.css';

const NotificationManagement = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Notification Management</h1>
          <p className="page-subtitle">Configure system-wide alert settings and delivery channels</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <div className="section-header">
            <Bell size={20} />
            <h2>Push Notifications</h2>
          </div>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Transaction Alerts</h3>
                <p>Send notification when a user completes a payment</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h3>New Seller Signups</h3>
                <p>Notify admins when a new merchant registers</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Mail size={20} />
            <h2>Email Channels</h2>
          </div>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Weekly Reports</h3>
                <p>Send automated platform performance summary every Monday</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h3>Withdrawal Status</h3>
                <p>Notify users when their withdrawal request is processed</p>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button className="btn btn-outline">Reset to Defaults</button>
        <button className="btn btn-primary">
          <Save size={18} />
          Save Configurations
        </button>
      </div>
    </div>
  );
};

export default NotificationManagement;
