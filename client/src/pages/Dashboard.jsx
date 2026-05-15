import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  CreditCard, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const StatCard = ({ title, value, icon, trend, trendValue, color }) => (
  <div className="stat-card">
    <div className="stat-header">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>
      <div className={`stat-trend ${trend}`}>
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{trendValue}</span>
      </div>
    </div>
    <div className="stat-body">
      <h3 className="stat-value">{value}</h3>
      <p className="stat-title">{title}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p className="subtitle">Welcome back, here's what's happening with Honest Pay today.</p>
      </header>

      <div className="stats-grid">
        <StatCard 
          title="Total Users" 
          value="24,512" 
          icon={<Users size={24} />} 
          trend="up" 
          trendValue="12.5%" 
          color="blue"
        />
        <StatCard 
          title="Active Merchants" 
          value="1,284" 
          icon={<ShoppingBag size={24} />} 
          trend="up" 
          trendValue="8.2%" 
          color="red"
        />
        <StatCard 
          title="Total Transactions" 
          value="₹452,890" 
          icon={<CreditCard size={24} />} 
          trend="down" 
          trendValue="3.1%" 
          color="green"
        />
        <StatCard 
          title="Conversion Rate" 
          value="4.6%" 
          icon={<TrendingUp size={24} />} 
          trend="up" 
          trendValue="2.4%" 
          color="purple"
        />
      </div>

      <div className="dashboard-grid">
        <div className="card chart-card main-chart">
          <div className="card-header">
            <h2>Transaction Volume</h2>
            <select className="card-select">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="chart-placeholder">
            {/* Chart would go here */}
            <div className="placeholder-content">
              <BarChart3 size={48} className="placeholder-icon" />
              <p>Transaction Analytics Visualization</p>
            </div>
          </div>
        </div>

        <div className="card recent-activity">
          <div className="card-header">
            <h2>Recent Transactions</h2>
            <button className="btn btn-outline" onClick={() => navigate('/transactions/user')}>View All</button>
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Transaction ID</th>
                  <th>Transaction Type</th>
                  <th>User Name</th>
                  <th>Wallet ID</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, user: 'John Doe', type: 'Payment', amount: '+₹150.00', status: 'Completed', time: '2 mins ago' },
                  { id: 2, user: 'Apple Store', type: 'Merchant Pay', amount: '-₹89.99', status: 'Pending', time: '15 mins ago' },
                  { id: 3, user: 'Sarah Smith', type: 'Withdrawal', amount: '-₹500.00', status: 'Completed', time: '1 hour ago' },
                  { id: 4, user: 'Tech Hub', type: 'Refund', amount: '+₹45.00', status: 'Processing', time: '3 hours ago' },
                  { id: 5, user: 'Mike Ross', type: 'Payment', amount: '+₹210.00', status: 'Completed', time: '5 hours ago' },
                ].map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>TXN-100{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.user}</td>
                    <td>WAL-4592{item.id}</td>
                    <td className={item.amount.startsWith('+') ? 'positive' : 'negative'}>
                      {item.amount}
                    </td>
                    <td>Wallet</td>
                    <td>
                      <span className={`status-pill ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
