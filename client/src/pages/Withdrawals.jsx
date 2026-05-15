import React from 'react';
import { DollarSign, Clock } from 'lucide-react';

const Withdrawals = () => {
  const data = [
    { id: 'W001', entity: 'Tech Haven', amount: '$1,500.00', status: 'Pending', requested: '2 hours ago' },
    { id: 'W002', entity: 'Maria Garcia', amount: '$200.00', status: 'Completed', requested: '1 day ago' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Withdrawals</h1>
          <p className="page-subtitle">Review and process fund withdrawal requests</p>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Request ID</th>
              <th>Merchant ID</th>
              <th>Merchant Name</th>
              <th>Bank Account / UPI</th>
              <th>Requested Amount</th>
              <th>Wallet Balance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((w, index) => (
              <tr key={w.id}>
                <td>{index + 1}</td>
                <td>{w.id}</td>
                <td>MID-5490</td>
                <td>{w.entity}</td>
                <td>HDFC Bank - 50100****4521</td>
                <td>{w.amount}</td>
                <td>$2,450.00</td>
                <td><span className={`status-pill ${w.status.toLowerCase()}`}>{w.status}</span></td>
                <td>{w.status === 'Pending' && <button className="btn btn-primary sm">Process</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdrawals;
