import React from 'react';
import { Shield, Check, X, Edit2, Trash2, Plus } from 'lucide-react';
import './RolesManagement.css';

const RolesManagement = () => {
  const roles = [
    { id: 1, name: 'Super Admin', users: 2, permissions: ['All Access', 'User Management', 'Financial Reports', 'System Settings'] },
    { id: 2, name: 'Admin', users: 5, permissions: ['User Management', 'Merchant Support', 'Basic Reports'] },
    { id: 3, name: 'Support', users: 12, permissions: ['Ticket Management', 'User View', 'Transaction History'] },
    { id: 4, name: 'Editor', users: 3, permissions: ['Content Management', 'Event Updates'] },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Roles & Responsibilities</h1>
          <p className="page-subtitle">Define access levels and permissions for administrative staff</p>
        </div>
        <button className="btn btn-primary">
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
                    <button className="btn-icon"><Edit2 size={16} /></button>
                    <button className="btn-icon text-danger"><Trash2 size={16} /></button>
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

export default RolesManagement;
