import React from 'react';
import { HelpCircle, MessageCircle, Clock, ChevronRight, Filter, Search } from 'lucide-react';
import './HelpDesk.css';

const HelpDesk = () => {
  const tickets = [
    { id: 'T-8801', subject: 'Login issue on mobile', user: 'Alex Johnson', priority: 'High', status: 'Open', time: '10 mins ago' },
    { id: 'T-8802', subject: 'Refund for Order #551', user: 'Maria Garcia', priority: 'Medium', status: 'In Progress', time: '1 hour ago' },
    { id: 'T-8803', subject: 'Incorrect stall location', user: 'Tech Haven', priority: 'Low', status: 'Closed', time: '5 hours ago' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Help Desk</h1>
          <p className="page-subtitle">Manage and resolve customer support tickets</p>
        </div>
        <button className="btn btn-primary">Create New Ticket</button>
      </div>

      <div className="support-stats-grid">
        <div className="mini-stat">
          <span className="lbl">Total Tickets</span>
          <span className="val">152</span>
        </div>
        <div className="mini-stat">
          <span className="lbl">Resolved</span>
          <span className="val success">128</span>
        </div>
        <div className="mini-stat">
          <span className="lbl">Pending</span>
          <span className="val warning">24</span>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Recent Tickets</h2>
          <div className="table-actions">
            <div className="search-input sm">
              <Search size={16} />
              <input type="text" placeholder="Search tickets..." />
            </div>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Requester</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.id}</td>
                <td>{t.subject}</td>
                <td>{t.user}</td>
                <td>
                  <span className={`badge-outline ${t.priority.toLowerCase()}`}>
                    {t.priority}
                  </span>
                </td>
                <td>Support Team</td>
                <td>
                  <span className={`status-badge ${t.status.replace(' ', '-').toLowerCase()}`}>
                    {t.status}
                  </span>
                </td>
                <td>
                  <button className="btn-icon">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HelpDesk;
