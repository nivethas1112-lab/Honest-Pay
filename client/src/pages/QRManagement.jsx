import React from 'react';
import { QrCode, Download, Share2, User, Store, Calendar, Plus } from 'lucide-react';
import './QRManagement.css';

const QRManagement = () => {
  const qrCodes = [
    { id: 'QR001', type: 'User', name: 'John Doe', generated: '2024-03-01', usage: 124 },
    { id: 'QR002', type: 'Seller', name: 'Tech Haven', generated: '2024-03-05', usage: 850 },
    { id: 'QR003', type: 'Event', name: 'Summer Festival', generated: '2024-03-10', usage: 4500 },
    { id: 'QR004', type: 'User', name: 'Sarah Smith', generated: '2024-03-12', usage: 45 },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">QR Code Management</h1>
          <p className="page-subtitle">Generate and track QR codes for users, sellers, and events</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Generate New QR
        </button>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>QR ID</th>
              <th>User / Wallet</th>
              <th>QR Type</th>
              <th>Scan Count</th>
              <th>Last Used</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {qrCodes.map((qr, index) => (
              <tr key={qr.id}>
                <td>{index + 1}</td>
                <td>{qr.id}</td>
                <td>{qr.name}</td>
                <td>
                  <div className="type-badge">
                    {qr.type === 'User' ? <User size={12} /> : 
                     qr.type === 'Seller' ? <Store size={12} /> : <Calendar size={12} />}
                    {qr.type}
                  </div>
                </td>
                <td>{qr.usage}</td>
                <td>{qr.generated}</td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><Download size={18} /></button>
                    <button className="btn-icon"><Share2 size={18} /></button>
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

export default QRManagement;
