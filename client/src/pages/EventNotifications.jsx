import React from 'react';
import { Send, Users, Bell, MessageSquare, Info } from 'lucide-react';
import './EventNotifications.css';

const EventNotifications = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Event Notifications</h1>
          <p className="page-subtitle">Send instant updates and alerts to event attendees</p>
        </div>
      </div>

      <div className="notification-layout">
        <div className="composer-card">
          <div className="card-header-simple">
            <MessageSquare size={20} />
            <h3>Create Notification</h3>
          </div>
          <form className="notification-form">
            <div className="form-group">
              <label>Select Target Event</label>
              <select className="form-input">
                <option>Summer Festival 2024</option>
                <option>Local Market Day</option>
                <option>Tech Expo</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message Title</label>
              <input type="text" className="form-input" placeholder="e.g. Weather Update, Gate Change" />
            </div>
            <div className="form-group">
              <label>Message Content</label>
              <textarea className="form-input" rows="5" placeholder="Enter the message you want to broadcast..."></textarea>
            </div>
            <div className="form-footer">
              <button type="button" className="btn btn-secondary">Save Draft</button>
              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                Send Broadcast
              </button>
            </div>
          </form>
        </div>

        <div className="info-sidebar">
          <div className="info-card">
            <div className="info-icon"><Users size={24}/></div>
            <div className="info-text">
              <h4>Target Audience</h4>
              <p>3,412 Registered Attendees will receive this notification.</p>
            </div>
          </div>
          <div className="tip-box">
            <Info size={20} />
            <p>Notifications are sent via Push, SMS, and Email depending on user preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNotifications;
