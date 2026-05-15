import React from 'react';
import { Store, CheckCircle, XCircle, Clock, MapPin, Search } from 'lucide-react';
import './StallApproval.css';

const StallApproval = () => {
  const stalls = [
    { id: 'S001', name: 'Fresh Fruits', owner: 'Robert Fox', type: 'Food & Beverage', location: 'Section A', area: '150 sqft', date: '2024-03-01', status: 'Approved' },
    { id: 'S002', name: 'Vintage Wear', owner: 'Jenny Wilson', type: 'Apparel', location: 'Section B', area: '200 sqft', date: '2024-03-05', status: 'Pending' },
    { id: 'S003', name: 'Cozy Crafts', owner: 'Cody Fisher', type: 'Handmade', location: 'Section C', area: '100 sqft', date: '2024-03-10', status: 'Pending' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Stall Approvals</h1>
          <p className="page-subtitle">Manage physical stall locations and merchant assignments</p>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Stall Applications</h2>
          <div className="search-input sm">
            <Search size={16} />
            <input type="text" placeholder="Search stalls..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Store ID</th>
              <th>Stall Name</th>
              <th>Owner Name</th>
              <th>Wallet ID</th>
              <th>Location</th>
              <th>QR Status</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stalls.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.owner}</td>
                <td>WAL-54920</td>
                <td>
                  <div className="icon-text">
                    <MapPin size={14} />
                    {s.location}
                  </div>
                </td>
                <td><span className="badge-outline">Active</span></td>
                <td>
                  <span className={`status-badge ${s.status.toLowerCase()}`}>
                    {s.status === 'Approved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                    {s.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    {s.status === 'Pending' && (
                      <>
                        <button className="btn btn-outline sm success">Approve</button>
                        <button className="btn btn-outline sm danger">Reject</button>
                      </>
                    )}
                    <button className="btn-icon"><Clock size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StallApproval;
