import React, { useState } from 'react';
import { QrCode, Calendar, Download } from 'lucide-react';

const EventQR = () => {
  const [qrs, setQrs] = useState([1, 2]);
  const handleCreateEventQR = () => {
    setQrs([...qrs, qrs.length + 1]);
  };
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Event QR Codes</h1>
        <button className="btn btn-primary" onClick={handleCreateEventQR}>Create Event QR</button>
      </div>
      <div className="table-wrapper">
        <div className="table-header">
          <h2>Entry QR Code Directory</h2>
          <div className="search-input sm">
            <input type="text" placeholder="Search event QR codes..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>QR ID</th>
              <th>Event / Campaign</th>
              <th>QR Type</th>
              <th>Scan Count</th>
              <th>Last Used</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {qrs.map((i, index) => (
              <tr key={i}>
                <td>{index + 1}</td>
                <td>
                  <div className="user-info-cell">
                    <div className="avatar" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <QrCode size={20} color="#1C64AC" />
                    </div>
                    <div className="details">
                      <span className="name">QR-EVT-{300+i}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="details">
                    <span className="name">Summer Festival {2023+i}</span>
                    <span className="email text-muted">Gate Entry</span>
                  </div>
                </td>
                <td><span className="badge-outline">Event Check-in</span></td>
                <td>{4500 * i} Scans</td>
                <td>5 mins ago</td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn edit" title="Download QR">
                      <Download size={16} />
                    </button>
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

export default EventQR;
