import React from 'react';
import { Bell, Send, Settings, History, MessageSquare, AlertTriangle, Info } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
  const history = [
    { id: 1, title: 'Welcome Email', sentTo: '1.2k Users', type: 'System', date: '2024-03-14 09:00', status: 'Sent' },
    { id: 2, title: 'Summer Fest Update', sentTo: 'All Attendees', type: 'Event', date: '2024-03-13 15:30', status: 'Draft' },
    { id: 3, title: 'Wallet Maintenance', sentTo: 'All Merchants', type: 'Alert', date: '2024-03-12 10:00', status: 'Sent' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Notification Management</h1>
          <p className="page-subtitle">Communicate with users and merchants via push or email</p>
        </div>
      </div>

      <div className="notification-layout">
        <div className="composer-card">
          <div className="card-header-simple">
            <Send size={20} />
            <h3>Compose New Message</h3>
          </div>
          <div className="composer-form">
            <div className="form-group">
              <label>Recipients</label>
              <select className="form-input">
                <option>All Users</option>
                <option>All Merchants</option>
                <option>Specific Group</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message Title</label>
              <input type="text" className="form-input" placeholder="Enter subject..." />
            </div>
            <div className="form-group">
              <label>Message Content</label>
              <textarea className="form-input" rows="6" placeholder="Type your message here..."></textarea>
            </div>
            <div className="form-footer">
              <button className="btn btn-outline">Save Draft</button>
              <button className="btn btn-primary">Send Notification</button>
            </div>
          </div>
        </div>

        <div className="history-card">
          <div className="card-header-simple">
            <History size={20} />
            <h3>Recent History</h3>
          </div>
          <div className="history-list">
            {history.map((h) => (
              <div key={h.id} className="history-item">
                <div className={`history-icon ${h.type.toLowerCase()}`}>
                  {h.type === 'Alert' ? <AlertTriangle size={18} /> : 
                   h.type === 'System' ? <Info size={18} /> : <Bell size={18} />}
                </div>
                <div className="history-info">
                  <h4>{h.title}</h4>
                  <p>Sent to: {h.sentTo} • {h.date}</p>
                </div>
                <span className={`status-tag ${h.status.toLowerCase()}`}>{h.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
