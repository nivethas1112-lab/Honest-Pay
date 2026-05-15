import React from 'react';
import { ShoppingBag, Search, Eye, Filter } from 'lucide-react';
import './OrderDetails.css';

const OrderDetails = () => {
  const orders = [
    { id: 'ORD551', customer: 'Alex Johnson', date: '2024-03-14', total: '$120.00', status: 'Delivered' },
    { id: 'ORD552', customer: 'Maria Garcia', date: '2024-03-14', total: '$45.50', status: 'Processing' },
    { id: 'ORD553', customer: 'Sam Wilson', date: '2024-03-14', total: '$300.00', status: 'Shipped' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Order Details</h1>
          <p className="page-subtitle">Track and manage all merchant orders</p>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>All Orders</h2>
          <div className="table-actions">
            <div className="search-input sm">
              <Search size={16} />
              <input type="text" placeholder="Search orders..." />
            </div>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td><span className="mono">{o.id}</span></td>
                <td>{o.customer}</td>
                <td>{o.date}</td>
                <td className="amount">{o.total}</td>
                <td>
                  <span className={`status-pill ${o.status.toLowerCase()}`}>
                    {o.status}
                  </span>
                </td>
                <td>
                  <button className="icon-btn" title="View Details">
                    <Eye size={18} />
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

export default OrderDetails;
