import React from 'react';
import { Store, Search } from 'lucide-react';

const SellerTransactions = () => {
  const txns = [
    { id: 'ST201', store: 'Tech Haven', amount: '$4,200.00', type: 'Settlement', date: '2024-03-14' },
    { id: 'ST202', store: 'Urban Style', amount: '$850.00', type: 'Payout', date: '2024-03-14' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Seller Transactions</h1>
          <p className="page-subtitle">Manage merchant payouts and settlements</p>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr><th>ID</th><th>Store</th><th>Amount</th><th>Type</th><th>Date</th></tr>
          </thead>
          <tbody>
            {txns.map(t => (
              <tr key={t.id}>
                <td>{t.id}</td><td>{t.store}</td><td>{t.amount}</td>
                <td><span className="status-pill processing">{t.type}</span></td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerTransactions;
