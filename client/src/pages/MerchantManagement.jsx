import React from 'react';
import { Package, CheckCircle, XCircle, Clock, Eye, Filter, Search } from 'lucide-react';
import './MerchantManagement.css';

const MerchantManagement = () => {
  const products = [
    { id: 'P001', name: 'iPhone 15 Pro', merchant: 'Tech Haven', category: 'Electronics', price: '$999', stock: 45, rating: '4.8', date: '2024-03-10', status: 'Approved' },
    { id: 'P002', name: 'MacBook Air M2', merchant: 'Tech Haven', category: 'Electronics', price: '$1299', stock: 12, rating: '4.9', date: '2024-03-11', status: 'Pending' },
    { id: 'P003', name: 'Summer Dress', merchant: 'Urban Style', category: 'Fashion', price: '$59', stock: 88, rating: '4.5', date: '2024-03-12', status: 'Approved' },
    { id: 'P004', name: 'Running Shoes', merchant: 'Sporty Life', category: 'Footwear', price: '$120', stock: 0, rating: '4.2', date: '2024-03-13', status: 'Rejected' },
    { id: 'P005', name: 'Smart Watch', merchant: 'Tech Haven', category: 'Wearables', price: '$299', stock: 30, rating: '4.7', date: '2024-03-14', status: 'Approved' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Merchant Management</h1>
          <p className="page-subtitle">Approve products and monitor stall activities</p>
        </div>
      </div>

      <div className="tab-container">
        <button className="tab active">Product Approvals</button>
        <button className="tab">Stall Management</button>
        <button className="tab">Order Overview</button>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Product Verification Queue</h2>
          <div className="search-input sm">
            <Search size={16} />
            <input type="text" placeholder="Search products..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Merchant Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar product">
                    <Package size={20} />
                  </div>
                </td>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>Standard Product Description</td>
                <td>{p.merchant}</td>
                <td><span className="badge-outline">{p.category}</span></td>
                <td>{p.price}</td>
                <td>
                  <span className={`status-badge ${p.status.toLowerCase()}`}>
                    {p.status === 'Approved' ? <CheckCircle size={12} /> : 
                     p.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                    {p.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon" title="View"><Eye size={18} /></button>
                    {p.status === 'Pending' && (
                      <>
                        <button className="btn-icon success" title="Approve"><CheckCircle size={18} /></button>
                        <button className="btn-icon danger" title="Reject"><XCircle size={18} /></button>
                      </>
                    )}
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

export default MerchantManagement;
