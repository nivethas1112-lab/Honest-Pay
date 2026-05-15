import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const TransactionIssues = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Transaction Issues</h1>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr><th>TXN ID</th><th>Issue</th><th>Severity</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>TXN-882</td><td>Double charge reported</td><td>High</td><td><span className="status-pill failed">Investigating</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionIssues;
