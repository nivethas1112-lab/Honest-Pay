import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Shield, 
  User as UserIcon,
  Filter,
  Check,
  X
} from 'lucide-react';
import Modal from '../components/Modal';
import './AdminUsers.css';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@honestpay.com', phone: '+1 234-567-8900', dept: 'Operations', role: 'Super Admin', status: 'Active', joined: '2023-01-15', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@honestpay.com', phone: '+1 234-567-8901', dept: 'Support', role: 'Admin', status: 'Active', joined: '2023-05-20', lastLogin: '1 day ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@honestpay.com', phone: '+1 234-567-8902', dept: 'Marketing', role: 'Editor', status: 'Inactive', joined: '2023-11-10', lastLogin: '3 days ago' },
    { id: 4, name: 'Emma Wilson', email: 'emma@honestpay.com', phone: '+1 234-567-8903', dept: 'Security', role: 'Admin', status: 'Active', joined: '2024-02-05', lastLogin: '5 mins ago' },
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

  const handleAddAdmin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      phone: '+1 000-000-0000',
      dept: 'General',
      status: 'Active',
      joined: new Date().toISOString().split('T')[0],
      lastLogin: 'Just now'
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
  };

  const handleDeleteAdmin = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="admin-users">
      <header className="page-header">
        <div className="header-info">
          <h1>Admin Users</h1>
          <p className="subtitle">Manage administrators and their access levels.</p>
        </div>
        <button className="add-btn" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={20} />
          <span>Add New Admin</span>
        </button>
      </header>

      <div className="table-controls">
        <div className="search-box">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search admins..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <button className="filter-btn">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Admin ID</th>
              <th>Name & Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>ADM-{1000 + user.id}</td>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar-sm">
                      <UserIcon size={16} />
                    </div>
                    <div className="user-details">
                      <span className="user-name">{user.name}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>
                   <div className="role-badge">
                     <Shield size={14} />
                     <span>{user.role}</span>
                   </div>
                </td>
                <td>
                   <span className="last-login">{user.lastLogin}</span>
                </td>
                <td>
                   <span className={`status-pill ${user.status.toLowerCase()}`}>
                     {user.status}
                   </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button 
                      className="icon-btn edit" 
                      title="Edit"
                      onClick={() => handleEdit(user)}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="icon-btn delete" title="Delete" onClick={() => handleDeleteAdmin(user.id)}>
                      <Trash2 size={16} />
                    </button>
                    <button className="icon-btn more">
                      <MoreVertical size={16} />
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
        title="Edit Admin User"
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
              <label>Role</label>
              <select 
                value={editingUser.role} 
                onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
              >
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Support</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select 
                value={editingUser.status} 
                onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
              >
                <option>Active</option>
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
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Add New Admin"
      >
        <form className="edit-form" onSubmit={handleAddAdmin}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select name="role">
              <option>Super Admin</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Support</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Add Admin</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AdminUsers;
