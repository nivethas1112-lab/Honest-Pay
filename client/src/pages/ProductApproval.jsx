import React from 'react';
import { Package, CheckCircle, XCircle, Clock, Eye, Search } from 'lucide-react';
import './ProductApproval.css';

const ProductApproval = () => {
  const products = [
    { id: 'P001', name: 'iPhone 15 Pro', merchant: 'Tech Haven', price: '₹99,900', status: 'Approved', stock: 45 },
    { id: 'P002', name: 'MacBook Air M2', merchant: 'Tech Haven', price: '₹1,29,900', status: 'Pending', stock: 12 },
    { id: 'P004', name: 'Running Shoes', merchant: 'Sporty Life', price: '₹1,200', status: 'Rejected', stock: 0 },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Product Details & Approval</h1>
          <p className="page-subtitle">Review and manage merchant product listings</p>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Verification Queue</h2>
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
                <td>Premium quality product listing</td>
                <td>{p.merchant}</td>
                <td><span className="badge-outline">Electronics</span></td>
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

export default ProductApproval;
