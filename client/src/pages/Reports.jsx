import React from 'react';
import { BarChart3, PieChart, TrendingUp, Download, Calendar } from 'lucide-react';
import './Reports.css';

const Reports = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">Deep dive into platform performance and user trends</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline"><Calendar size={18} /> Last 30 Days</button>
          <button className="btn btn-primary"><Download size={18} /> Download Full Report</button>
        </div>
      </div>

      <div className="reports-grid">
        <div className="report-card large">
          <div className="card-header-simple">
            <TrendingUp size={20} />
            <h3>Revenue Growth</h3>
          </div>
          <div className="chart-mockup">
            {/* Visual placeholder for chart */}
            <BarChart3 size={60} className="chart-icon" />
            <p>Monthly Revenue Trend Visualization</p>
          </div>
        </div>

        <div className="report-card">
          <div className="card-header-simple">
            <PieChart size={20} />
            <h3>User Demographics</h3>
          </div>
          <div className="chart-mockup circle">
            <div className="circle-placeholder"></div>
            <p>User Distribution by Region</p>
          </div>
        </div>

        <div className="report-card">
          <div className="card-header-simple">
            <BarChart3 size={20} />
            <h3>Top Categories</h3>
          </div>
          <div className="stats-mini-list">
            <div className="stat-row">
              <span>Electronics</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '85%' }}></div></div>
              <span>85%</span>
            </div>
            <div className="stat-row">
              <span>Fashion</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '65%' }}></div></div>
              <span>65%</span>
            </div>
            <div className="stat-row">
              <span>Home Decor</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '45%' }}></div></div>
              <span>45%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="table-wrapper" style={{ marginTop: '2rem' }}>
        <div className="table-header">
          <h2>Business Reports</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Wallet Id</th>
              <th>Balance</th>
              <th>Topup</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>2024-03-15</td>
                <td>USR-100{index}</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>+91 98765 43210</td>
                <td>WAL-45920</td>
                <td>₹500.00</td>
                <td>₹1000.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
