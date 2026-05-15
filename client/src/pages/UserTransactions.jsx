import React from 'react';
import { CreditCard, Search, ArrowRight } from 'lucide-react';

const UserTransactions = () => {
  const txns = [
    { id: 'UT101', user: 'Alex Johnson', amount: '₹120.00', status: 'Success', date: '2024-03-14' },
    { id: 'UT102', user: 'Maria Garcia', amount: '₹45.50', status: 'Success', date: '2024-03-14' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">User Transactions</h1>
          <p className="page-subtitle">Track payments made by end-users</p>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>TXN ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {txns.map(t => (
              <tr key={t.id}>
                <td><span className="mono">{t.id}</span></td>
                <td className="font-600">{t.user}</td>
                <td className="amount">{t.amount}</td>
                <td><span className="status-badge active">{t.status}</span></td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTransactions;
