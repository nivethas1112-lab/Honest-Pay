import React, { useState } from 'react';
import { Shield, Check, X, Edit2, Trash2, Plus } from 'lucide-react';
import Modal from '../components/Modal';
import './RolesManagement.css';

const RolesManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin', users: 2, permissions: ['All Access', 'User Management', 'Financial Reports', 'System Settings'] },
    { id: 2, name: 'Admin', users: 5, permissions: ['User Management', 'Merchant Support', 'Basic Reports'] },
    { id: 3, name: 'Support', users: 12, permissions: ['Ticket Management', 'User View', 'Transaction History'] },
    { id: 4, name: 'Editor', users: 3, permissions: ['Content Management', 'Event Updates'] },
  ]);

  const handleAddRole = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRole = {
      id: Date.now(),
      name: formData.get('name'),
      users: 0,
      permissions: formData.get('permissions').split(',').map(p => p.trim())
    };
    setRoles([...roles, newRole]);
    setIsAddModalOpen(false);
  };

  const handleEditRole = (role) => {
    setEditingRole({ ...role, permissions: role.permissions.join(', ') });
    setIsEditModalOpen(true);
  };

  const handleSaveRole = (e) => {
    e.preventDefault();
    const updatedRole = {
      ...editingRole,
      permissions: editingRole.permissions.split(',').map(p => p.trim())
    };
    setRoles(roles.map(r => r.id === updatedRole.id ? updatedRole : r));
    setIsEditModalOpen(false);
  };

  const handleDeleteRole = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter(role => role.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Roles & Responsibilities</h1>
          <p className="page-subtitle">Define access levels and permissions for administrative staff</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={18} />
          Create New Role
        </button>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Role Name</th>
              <th>Role Code</th>
              <th>Access Modules</th>
              <th>Created Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1}</td>
                <td>{role.name}</td>
                <td>{role.name.toUpperCase().replace(' ', '_')}</td>
                <td>
                  <div className="modules-list">
                    {role.permissions.slice(0, 2).map((p, i) => (
                      <span key={i} className="badge-outline sm">{p}</span>
                    ))}
                    {role.permissions.length > 2 && <span className="text-muted text-xs">+{role.permissions.length - 2} more</span>}
                  </div>
                </td>
                <td>2024-01-10</td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon" onClick={() => handleEditRole(role)}><Edit2 size={16} /></button>
                    <button className="btn-icon text-danger" onClick={() => handleDeleteRole(role.id)}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Create New Role"
      >
        <form className="edit-form" onSubmit={handleAddRole}>
          <div className="form-group">
            <label>Role Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Permissions (Comma separated)</label>
            <input type="text" name="permissions" required />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Create Role</button>
          </div>
        </form>
      </Modal>

      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        title="Edit Role"
      >
        {editingRole && (
          <form className="edit-form" onSubmit={handleSaveRole}>
            <div className="form-group">
              <label>Role Name</label>
              <input 
                type="text" 
                value={editingRole.name} 
                onChange={(e) => setEditingRole({...editingRole, name: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label>Permissions (Comma separated)</label>
              <input 
                type="text" 
                value={editingRole.permissions} 
                onChange={(e) => setEditingRole({...editingRole, permissions: e.target.value})}
                required 
              />
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

export default RolesManagement;
