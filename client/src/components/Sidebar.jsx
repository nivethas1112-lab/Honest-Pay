import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Store, 
  Wallet, 
  QrCode, 
  Calendar, 
  Bell, 
  BarChart3, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { 
      name: 'Admin Access', 
      icon: <ShieldCheck size={20} />, 
      subItems: [
        { name: 'Admin Users', path: '/admin/users' },
        { name: 'User Details', path: '/admin/user-details' },
        { name: 'Seller Details', path: '/admin/seller-details' },
        { name: 'Roles & Responsibilities', path: '/admin/roles' },
      ]
    },
    { 
      name: 'Merchant', 
      icon: <Store size={20} />, 
      subItems: [
        { name: 'Products & Approval', path: '/merchant/products' },
        { name: 'Stall Approvals', path: '/merchant/stalls' },
        { name: 'Order Details', path: '/merchant/orders' },
      ]
    },
    { 
      name: 'Transaction Management', 
      icon: <Wallet size={20} />, 
      subItems: [
        { name: 'Wallet Logs', path: '/transactions/wallet' },
        { name: 'User Transactions', path: '/transactions/user' },
        { name: 'Seller Transactions', path: '/transactions/seller' },
        { name: 'Withdrawals', path: '/transactions/withdrawals' },
      ]
    },
    { 
      name: 'QR Code', 
      icon: <QrCode size={20} />, 
      subItems: [
        { name: 'User QR', path: '/qr/user' },
        { name: 'Seller QR', path: '/qr/seller' },
        { name: 'Event QR', path: '/qr/event' },
      ]
    },
    { 
      name: 'Event', 
      icon: <Calendar size={20} />, 
      subItems: [
        { name: 'Event Details', path: '/event/details' },
        { name: 'Registered Users', path: '/event/registered' },
      ]
    },
    { 
      name: 'Notifications', 
      icon: <Bell size={20} />, 
      subItems: [
        { name: 'Event Notifications', path: '/notifications/event' },
        { name: 'Management', path: '/notifications/manage' },
      ]
    },
    { name: 'Reports', icon: <BarChart3 size={20} />, path: '/reports' },
    { 
      name: 'Support', 
      icon: <HelpCircle size={20} />, 
      subItems: [
        { name: 'Help Desk', path: '/support/help' },
        { name: 'Transaction Issues', path: '/support/issues' },
      ]
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="logo-container">
          <img src="/logo.png" alt="Honest Pay" className="logo" />
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div key={item.name} className="menu-group">
              {item.subItems ? (
                <>
                  <button 
                    className={`menu-item ${openDropdown === item.name ? 'active' : ''}`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.name}</span>
                    <span className="chevron">
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  <div className={`sub-menu ${openDropdown === item.name ? 'open' : ''}`}>
                    {item.subItems.map(subItem => (
                      <NavLink 
                        key={subItem.name} 
                        to={subItem.path}
                        className={({ isActive }) => `sub-item ${isActive ? 'active' : ''}`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.name}</span>
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
