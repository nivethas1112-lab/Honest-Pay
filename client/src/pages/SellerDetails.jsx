import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Store, Star, ShoppingBag, DollarSign, Clock, Edit, Trash2 } from 'lucide-react';
import Modal from '../components/Modal';
import './SellerDetails.css';

const SellerDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSeller, setEditingSeller] = useState(null);
  const [sellers, setSellers] = useState([
    { id: 'S001', store: 'Tech Haven', owner: 'Robert Fox', category: 'Electronics', rating: 4.8, sales: 1240, revenue: '$45,200', status: 'Active' },
    { id: 'S002', store: 'Urban Style', owner: 'Jenny Wilson', category: 'Fashion', rating: 4.5, sales: 850, revenue: '$12,800', status: 'Active' },
    { id: 'S003', store: 'Home Decor Co', owner: 'Cody Fisher', category: 'Home', rating: 4.2, sales: 320, revenue: '$8,450', status: 'Pending' },
    { id: 'S004', store: 'Green Grocers', owner: 'Kristin Watson', category: 'Grocery', rating: 4.9, sales: 2100, revenue: '$62,000', status: 'Active' },
    { id: 'S005', store: 'Sporty Life', owner: 'Arlene McCoy', category: 'Sports', rating: 3.8, sales: 150, revenue: '$3,200', status: 'Inactive' },
  ]);

  const handleEdit = (seller) => {
    setEditingSeller({ ...seller });
    setIsEditModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSellers(sellers.map(s => s.id === editingSeller.id ? editingSeller : s));
    setIsEditModalOpen(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Seller Details</h1>
          <p className="page-subtitle">Monitor and manage merchant accounts and performance</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">Verify New Seller</button>
        </div>
      </div>

      <div className="seller-stats">
        <div className="mini-card">
          <div className="icon blue"><Store size={24} /></div>
          <div className="info">
            <span className="label">Total Sellers</span>
            <span className="value">1,284</span>
          </div>
        </div>
        <div className="mini-card">
          <div className="icon orange"><Star size={24} /></div>
          <div className="info">
            <span className="label">Avg Rating</span>
            <span className="value">4.6</span>
          </div>
        </div>
        <div className="mini-card">
          <div className="icon green"><DollarSign size={24} /></div>
          <div className="info">
            <span className="label">Total Revenue</span>
            <span className="value">$1.2M</span>
          </div>
        </div>
        <div className="mini-card">
          <div className="icon purple"><ShoppingBag size={24} /></div>
          <div className="info">
            <span className="label">Active Products</span>
            <span className="value">15.4k</span>
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Merchant Directory</h2>
          <div className="table-actions">
            <div className="search-input sm">
              <Search size={16} />
              <input type="text" placeholder="Search stores..." />
            </div>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Merchant ID</th>
              <th>Shop Name / Business</th>
              <th>Owner Details</th>
              <th>Phone Number</th>
              <th>Wallet ID</th>
              <th>Wallet Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={seller.id}>
                <td>{index + 1}</td>
                <td>{seller.id}</td>
                <td>
                  <div className="user-info-cell">
                    <div className="avatar seller">
                      <Store size={20} />
                    </div>
                    <div className="details">
                      <span className="name">{seller.store}</span>
                    </div>
                  </div>
                </td>
                <td>{seller.owner}</td>
                <td>+91 98765 43210</td>
                <td>WAL-54920</td>
                <td className="amount">{seller.revenue}</td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn edit" onClick={() => handleEdit(seller)} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="icon-btn delete" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        title="Edit Seller Details"
      >
        {editingSeller && (
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Store Name</label>
              <input 
                type="text" 
                value={editingSeller.store} 
                onChange={(e) => setEditingSeller({...editingSeller, store: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Owner Name</label>
              <input 
                type="text" 
                value={editingSeller.owner} 
                onChange={(e) => setEditingSeller({...editingSeller, owner: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select 
                value={editingSeller.category} 
                onChange={(e) => setEditingSeller({...editingSeller, category: e.target.value})}
              >
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Grocery</option>
                <option>Sports</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select 
                value={editingSeller.status} 
                onChange={(e) => setEditingSeller({...editingSeller, status: e.target.value})}
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default SellerDetails;
