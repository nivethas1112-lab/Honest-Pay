import React from 'react';
import { ArrowUpRight, ArrowDownLeft, DollarSign, Wallet, RefreshCw, FileText, ExternalLink } from 'lucide-react';
import './TransactionManagement.css';

const TransactionManagement = () => {
  const transactions = [
    { id: 'TXN789', user: 'Alex Johnson', method: 'Credit Card', ref: 'REF-00124', fee: '$2.50', amount: '$150.00', type: 'Deposit', date: '2024-03-14 10:30', status: 'Completed' },
    { id: 'TXN790', user: 'Tech Haven', method: 'Bank Transfer', ref: 'REF-00125', fee: '$1.20', amount: '$85.20', type: 'Payment', date: '2024-03-14 11:15', status: 'Completed' },
    { id: 'TXN791', user: 'Maria Garcia', method: 'E-Wallet', ref: 'REF-00126', fee: '$5.00', amount: '$500.00', type: 'Withdrawal', date: '2024-03-14 12:00', status: 'Pending' },
    { id: 'TXN792', user: 'Sam Wilson', method: 'Internal', ref: 'REF-00127', fee: '$0.00', amount: '$12.00', type: 'Fee', date: '2024-03-14 13:45', status: 'Completed' },
    { id: 'TXN793', user: 'Urban Style', method: 'Bank Transfer', ref: 'REF-00128', fee: '$15.00', amount: '$1200.00', type: 'Settlement', date: '2024-03-14 14:20', status: 'Failed' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Transaction Management</h1>
          <p className="page-subtitle">Track and audit all financial movements across the platform</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline"><FileText size={18} /> Export Logs</button>
        </div>
      </div>

      <div className="transaction-stats">
        <div className="mini-card gradient-blue">
          <div className="info">
            <span className="label white">Total Volume</span>
            <span className="value white">$2,450,000</span>
          </div>
          <DollarSign size={40} className="icon-bg" />
        </div>
        <div className="mini-card gradient-red">
          <div className="info">
            <span className="label white">Pending Withdrawals</span>
            <span className="value white">$12,450</span>
          </div>
          <RefreshCw size={40} className="icon-bg" />
        </div>
        <div className="mini-card gradient-dark">
          <div className="info">
            <span className="label white">Active Wallets</span>
            <span className="value white">8,921</span>
          </div>
          <Wallet size={40} className="icon-bg" />
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Recent Activity</h2>
          <div className="filter-group">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">Deposits</button>
            <button className="filter-chip">Withdrawals</button>
            <button className="filter-chip">Payments</button>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Reference ID</th>
              <th>Name</th>
              <th>Ref. Source</th>
              <th>Type</th>
              <th>Payment Mode</th>
              <th>Amount</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td><span className="ref-id">{t.ref}</span></td>
                <td><span className="font-600">{t.user}</span></td>
                <td>{t.method === 'Internal' ? 'System' : 'External'}</td>
                <td>
                  <div className={`txn-type ${t.type.toLowerCase()}`}>
                    {t.type === 'Withdrawal' ? <ArrowUpRight size={14} /> : <ArrowDownLeft size={14} />}
                    {t.type}
                  </div>
                </td>
                <td><span className="method-tag">{t.method}</span></td>
                <td className="amount">{t.amount}</td>
                <td>{t.date}</td>
                <td>
                  <span className={`status-pill ${t.status.toLowerCase()}`}>
                    {t.status}
                  </span>
                </td>
                <td>
                  <button className="icon-btn" title="View Details">
                    <ExternalLink size={18} />
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

export default TransactionManagement;
