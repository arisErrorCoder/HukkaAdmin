import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesOverview.css';

const data = [
  { name: 'Monday', sales: 400 },
  { name: 'Tuesday', sales: 300 },
  { name: 'Wednesday', sales: 450 },
  { name: 'Thursday', sales: 500 },
  { name: 'Friday', sales: 900 },
  { name: 'Saturday', sales: 600 },
  { name: 'Sunday', sales: 650 },
];

const SalesOverview = () => {
  return (
    <div className="sales-overview">
      <div className="sales-today">
        <h2>Today's sales</h2>
        <p>$453.00</p>
        <span>That’s $288.00 more than this time last Wednesday</span>
      </div>
      <div className="sales-chart">
        <h2>All outlets</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="average-metrics">
        <div className="metric">
          <h2>Average sale value</h2>
          <p>$28.31</p>
          <span>$0.87 more than last Wednesday</span>
        </div>
        <div className="metric">
          <h2>Average items per sale</h2>
          <p>1.4</p>
          <span>0.02 more than last Wednesday</span>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
