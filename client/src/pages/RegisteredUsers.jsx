import React from 'react';
import { Users, Search, Download, Filter, Calendar, MapPin, CheckCircle } from 'lucide-react';
import './RegisteredUsers.css';

const RegisteredUsers = () => {
  const users = [
    { id: 'R-001', name: 'John Doe', email: 'john@example.com', preferred: 'Football' },
    { id: 'R-002', name: 'Jane Smith', email: 'jane@example.com', preferred: 'Cricket' },
    { id: 'R-003', name: 'Mike Johnson', email: 'mike@example.com', preferred: 'Basketball' },
    { id: 'R-004', name: 'Emma Wilson', email: 'emma@example.com', preferred: 'Tennis' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Registered Users</h1>
          <p className="page-subtitle">View and manage all attendees for upcoming and past events</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline">
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="filter-card">
        <div className="search-input">
          <Search size={18} />
          <input type="text" placeholder="Search by name, email or ticket ID..." />
        </div>
        <div className="filter-actions">
          <select className="filter-select">
            <option>All Events</option>
            <option>Summer Festival</option>
            <option>Tech Expo</option>
          </select>
          <select className="filter-select">
            <option>All Tickets</option>
            <option>VIP</option>
            <option>Early Bird</option>
            <option>General</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>User ID</th>
              <th>Name & Email</th>
              <th>Phone Number</th>
              <th>Preferred / Liked</th>
              <th>Wallet ID</th>
              <th>Wallet Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.id}</td>
                <td>
                  <div className="user-info-cell">
                    <div className="details">
                      <span className="name">{u.name}</span>
                      <span className="email">{u.email}</span>
                    </div>
                  </div>
                </td>
                <td>+91 98765 43210</td>
                <td><span className="badge-outline">{u.preferred}</span></td>
                <td>WAL-45920</td>
                <td>₹500.00</td>
                <td>
                  <button className="btn-icon">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUsers;
