import React from 'react';
import { Calendar, Users, MapPin, Tag, ArrowRight, MoreVertical } from 'lucide-react';
import './EventManagement.css';

const EventManagement = () => {
  const events = [
    { id: 'E001', title: 'Tech Expo 2024', date: '2024-06-15', location: 'Convention Center', attendees: 1250, category: 'Tech' },
    { id: 'E002', title: 'Summer Food Fest', date: '2024-07-20', location: 'Central Park', attendees: 3400, category: 'Food' },
    { id: 'E003', title: 'Startup Pitch Day', date: '2024-08-05', location: 'Innovation Hub', attendees: 450, category: 'Business' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Event Management</h1>
          <p className="page-subtitle">Organize and monitor events and registration metrics</p>
        </div>
        <button className="btn btn-primary">Create Event</button>
      </div>

      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-item-card">
            <div className="event-date-box">
              <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
              <span className="day">{new Date(event.date).getDate()}</span>
            </div>
            <div className="event-main-info">
              <div className="event-meta">
                <span className="cat-tag">{event.category}</span>
                <span className="id-tag">ID: {event.id}</span>
              </div>
              <h3>{event.title}</h3>
              <div className="details-row">
                <div className="detail"><MapPin size={14} /> {event.location}</div>
                <div className="detail"><Users size={14} /> {event.attendees} Registered</div>
              </div>
            </div>
            <div className="event-status-progress">
              <div className="progress-info">
                <span>Capacity</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="event-actions">
              <button className="view-btn">Manage <ArrowRight size={16} /></button>
              <button className="more-btn"><MoreVertical size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
