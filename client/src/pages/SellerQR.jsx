import React from 'react';
import { QrCode, Store, Download } from 'lucide-react';

const SellerQR = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Seller QR Codes</h1>
        <button className="btn btn-primary">Assign New QR</button>
      </div>
      <div className="table-wrapper">
        <div className="table-header">
          <h2>Merchant QR Code Directory</h2>
          <div className="search-input sm">
            <input type="text" placeholder="Search merchant QR codes..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>QR ID</th>
              <th>User / Wallet</th>
              <th>QR Type</th>
              <th>Scan Count</th>
              <th>Last Used</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4].map((i, index) => (
              <tr key={i}>
                <td>{index + 1}</td>
                <td>
                  <div className="user-info-cell">
                    <div className="avatar" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <QrCode size={20} color="#1C64AC" />
                    </div>
                    <div className="details">
                      <span className="name">QR-MER-{200+i}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="details">
                    <span className="name">Merchant #{200+i}</span>
                    <span className="email text-muted">WAL-8892{i}</span>
                  </div>
                </td>
                <td><span className="badge-outline">Shop Payment</span></td>
                <td>{350 * i} Scans</td>
                <td>10 mins ago</td>
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

export default SellerQR;
