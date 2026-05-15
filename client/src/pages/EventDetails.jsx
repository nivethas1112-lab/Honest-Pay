import React from 'react';
import { Calendar, MapPin, Users, Clock, Edit, Trash2, ArrowLeft, BarChart3, Star } from 'lucide-react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header-left">
          <button className="back-btn"><ArrowLeft size={20}/></button>
          <div>
            <h1 className="page-title">Summer Festival 2024</h1>
            <p className="page-subtitle">Internal Event ID: EV-00912</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline danger"><Trash2 size={18}/> Cancel Event</button>
          <button className="btn btn-primary"><Edit size={18}/> Edit Details</button>
        </div>
      </div>

      <div className="event-dashboard-grid">
        <div className="main-info-col">
          <div className="info-card-large">
            <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" alt="Event Cover" className="event-cover" />
            <div className="event-desc">
              <h3>Description</h3>
              <p>Join us for the annual Summer Festival 2024! A day filled with music, food, and local merchant stalls. This event brings together over 100 vendors and thousands of attendees from the tri-state area.</p>
              
              <div className="details-list">
                <div className="d-item">
                  <Calendar size={20} />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="d-item">
                  <Clock size={20} />
                  <span>09:00 AM - 08:00 PM</span>
                </div>
                <div className="d-item">
                  <MapPin size={20} />
                  <span>Central Park, New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-col">
          <div className="stat-box-vertical">
            <div className="s-item">
              <Users size={24} className="icon blue" />
              <div className="s-info">
                <span className="s-val">3,412</span>
                <span className="s-lbl">Registered Users</span>
              </div>
            </div>
            <div className="s-item">
              <BarChart3 size={24} className="icon green" />
              <div className="s-info">
                <span className="s-val">$42,500</span>
                <span className="s-lbl">Projected Revenue</span>
              </div>
            </div>
            <div className="s-item">
              <Star size={24} className="icon orange" />
              <div className="s-info">
                <span className="s-val">124</span>
                <span className="s-lbl">Participating Merchants</span>
              </div>
            </div>
          </div>

          <div className="location-card">
            <h3>Venue Location</h3>
            <div className="map-placeholder">
              <MapPin size={40} className="map-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
