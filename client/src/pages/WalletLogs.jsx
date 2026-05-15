import React from 'react';
import { Wallet, Search, Filter, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import './WalletLogs.css';

const WalletLogs = () => {
  const logs = [
    { id: 'L001', user: 'Alex Johnson', type: 'Credit', amount: '+₹50.00', balance: '₹150.00', date: '2024-03-14' },
    { id: 'L002', user: 'Sam Wilson', type: 'Debit', amount: '-₹20.00', balance: '₹80.00', date: '2024-03-14' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Wallet Logs</h1>
          <p className="page-subtitle">Historical log of all wallet balance changes</p>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Balance History</h2>
          <div className="search-input sm">
            <Search size={16} />
            <input type="text" placeholder="Search user..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>New Balance</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.id}>
                <td><span className="mono">{l.id}</span></td>
                <td className="font-600">{l.user}</td>
                <td>
                  <div className={`txn-type ${l.type.toLowerCase()}`}>
                    {l.type === 'Credit' ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                    {l.type}
                  </div>
                </td>
                <td className={`amount ${l.amount.startsWith('+') ? 'positive' : 'negative'}`}>{l.amount}</td>
                <td>{l.balance}</td>
                <td>{l.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletLogs;
