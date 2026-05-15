import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AdminUsers from './pages/AdminUsers';
import UserDetails from './pages/UserDetails';
import SellerDetails from './pages/SellerDetails';
import RolesManagement from './pages/RolesManagement';
import ProductApproval from './pages/ProductApproval';
import StallApproval from './pages/StallApproval';
import OrderDetails from './pages/OrderDetails';
import WalletLogs from './pages/WalletLogs';
import UserTransactions from './pages/UserTransactions';
import SellerTransactions from './pages/SellerTransactions';
import Withdrawals from './pages/Withdrawals';
import UserQR from './pages/UserQR';
import SellerQR from './pages/SellerQR';
import EventQR from './pages/EventQR';
import EventDetails from './pages/EventDetails';
import RegisteredUsers from './pages/RegisteredUsers';
import EventNotifications from './pages/EventNotifications';
import NotificationManagement from './pages/NotificationManagement';
import Reports from './pages/Reports';
import HelpDesk from './pages/HelpDesk';
import TransactionIssues from './pages/TransactionIssues';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              
              {/* Admin Access */}
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/user-details" element={<UserDetails />} />
              <Route path="/admin/seller-details" element={<SellerDetails />} />
              <Route path="/admin/roles" element={<RolesManagement />} />
              
              {/* Merchant */}
              <Route path="/merchant/products" element={<ProductApproval />} />
              <Route path="/merchant/stalls" element={<StallApproval />} />
              <Route path="/merchant/orders" element={<OrderDetails />} />
              
              {/* Transaction Management */}
              <Route path="/transactions/wallet" element={<WalletLogs />} />
              <Route path="/transactions/user" element={<UserTransactions />} />
              <Route path="/transactions/seller" element={<SellerTransactions />} />
              <Route path="/transactions/withdrawals" element={<Withdrawals />} />
              
              {/* QR Code */}
              <Route path="/qr/user" element={<UserQR />} />
              <Route path="/qr/seller" element={<SellerQR />} />
              <Route path="/qr/event" element={<EventQR />} />
              
              {/* Event */}
              <Route path="/event/details" element={<EventDetails />} />
              <Route path="/event/registered" element={<RegisteredUsers />} />
              
              {/* Notifications */}
              <Route path="/notifications/event" element={<EventNotifications />} />
              <Route path="/notifications/manage" element={<NotificationManagement />} />
              
              {/* Reports */}
              <Route path="/reports" element={<Reports />} />
              
              {/* Support */}
              <Route path="/support/help" element={<HelpDesk />} />
              <Route path="/support/issues" element={<TransactionIssues />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
