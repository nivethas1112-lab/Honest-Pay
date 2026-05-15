import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, User, Mail, Calendar, MapPin, CheckCircle, XCircle, Edit, Trash2 } from 'lucide-react';
import Modal from '../components/Modal';
import './UserDetails.css';

const UserDetails = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([
    { id: '101', name: 'Alex Johnson', email: 'alex@example.com', joined: '2024-01-15', location: 'New York, USA', status: 'Active', spent: '1,250.00', preferred: 'Badminton' },
    { id: '102', name: 'Maria Garcia', email: 'maria@example.com', joined: '2024-02-02', location: 'Madrid, Spain', status: 'Active', spent: '850.50', preferred: 'Volleyball' },
    { id: '103', name: 'Sam Wilson', email: 'sam@example.com', joined: '2024-02-10', location: 'London, UK', status: 'Inactive', spent: '45.00', preferred: 'Hockey' },
    { id: '104', name: 'Kevin Lee', email: 'kevin@example.com', joined: '2024-03-01', location: 'Seoul, Korea', status: 'Active', spent: '2,100.00', preferred: 'Rugby' },
    { id: '105', name: 'Julia Chen', email: 'julia@example.com', joined: '2024-03-05', location: 'Beijing, China', status: 'Active', spent: '560.00', preferred: 'Golf' },
    { id: '106', name: 'David Smith', email: 'david@example.com', joined: '2024-03-12', location: 'Sydney, Australia', status: 'Blocked', spent: '0.00', preferred: 'Swimming' },
  ]);

  const handleEdit = (user) => {
    setEditingUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
    setIsEditModalOpen(false);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      id: Date.now().toString().slice(-3),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferred: formData.get('preferred'),
      joined: new Date().toISOString().split('T')[0],
      location: 'Unknown',
      status: 'Active',
      spent: '0.00'
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">User Details</h1>
          <p className="page-subtitle">View and manage all registered platform users</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline">Export Data</button>
          <button className="btn btn-primary" onClick={() => setIsAddModalOpen(true)}>Add New User</button>
        </div>
      </div>

      <div className="filter-card">
        <div className="search-input">
          <Search size={18} />
          <input type="text" placeholder="Search users by name, email or ID..." />
        </div>
        <div className="filter-actions">
          <button className="filter-btn">
            <Filter size={16} />
            Filter
          </button>
          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Blocked</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>User ID</th>
              <th>Name & Email</th>
              <th>Phone Number</th>
              <th>Preferred / Liked</th>
              <th>Wallet ID</th>
              <th>Wallet Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>USR-{user.id}</td>
                <td>
                  <div className="user-info-cell">
                    <div className="avatar">
                      <User size={20} />
                    </div>
                    <div className="details">
                      <span className="name">{user.name}</span>
                      <span className="email">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td>+91 98765 43210</td>
                <td><span className="badge-outline">{user.preferred}</span></td>
                <td>WAL-459{user.id}</td>
                <td>₹{user.spent}</td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn edit" onClick={() => handleEdit(user)} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="icon-btn delete" title="Delete" onClick={() => handleDeleteUser(user.id)}>
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
        title="Edit User Details"
      >
        {editingUser && (
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                value={editingUser.name} 
                onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                value={editingUser.email} 
                onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                value={editingUser.location} 
                onChange={(e) => setEditingUser({...editingUser, location: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select 
                value={editingUser.status} 
                onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Blocked</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        )}
      </Modal>

      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Add New User"
      >
        <form className="edit-form" onSubmit={handleAddUser}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" required />
          </div>
          <div className="form-group">
            <label>Preferred Activity</label>
            <input type="text" name="preferred" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Add User</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserDetails;
