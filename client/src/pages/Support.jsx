import React from 'react';
import { HelpCircle, MessageCircle, AlertCircle, Phone, Mail, ChevronRight } from 'lucide-react';
import './Support.css';

const Support = () => {
  const tickets = [
    { id: 'T-1001', subject: 'Login Issue', user: 'Alex J.', priority: 'High', status: 'Open', time: '10 mins ago' },
    { id: 'T-1002', subject: 'Refund Request', user: 'Maria G.', priority: 'Medium', status: 'In Progress', time: '1 hour ago' },
    { id: 'T-1003', subject: 'Stall Verification', user: 'Tech Haven', priority: 'Low', status: 'Closed', time: '5 hours ago' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Support & Complaints</h1>
          <p className="page-subtitle">Resolve user issues and manage transaction disputes</p>
        </div>
      </div>

      <div className="support-grid">
        <div className="support-sidebar">
          <div className="contact-card">
            <h3>Quick Contact</h3>
            <div className="contact-item">
              <Phone size={18} />
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>support@honestpay.com</span>
            </div>
          </div>

          <div className="stats-box">
            <div className="stat-item">
              <span className="lbl">Open Tickets</span>
              <span className="val">24</span>
            </div>
            <div className="stat-item">
              <span className="lbl">Avg Response Time</span>
              <span className="val">1.5h</span>
            </div>
          </div>
        </div>

        <div className="tickets-main">
          <div className="table-wrapper">
            <div className="table-header">
              <h2>Recent Support Tickets</h2>
              <button className="btn btn-primary sm">New Ticket</button>
            </div>
            <div className="ticket-list">
              {tickets.map((t) => (
                <div key={t.id} className="ticket-item">
                  <div className={`priority-indicator ${t.priority.toLowerCase()}`}></div>
                  <div className="ticket-info">
                    <div className="ticket-top">
                      <span className="ticket-id">{t.id}</span>
                      <span className="ticket-time">{t.time}</span>
                    </div>
                    <h4>{t.subject}</h4>
                    <p>Opened by: {t.user}</p>
                  </div>
                  <div className="ticket-meta">
                    <span className={`status-pill ${t.status.replace(' ', '-').toLowerCase()}`}>{t.status}</span>
                    <ChevronRight size={20} className="arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
