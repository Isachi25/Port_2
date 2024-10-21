import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ReportsAnalytics = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
  };

  // Sample data for charts
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const productPerformanceData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [5000, 3000, 4000, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const customerDemographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Customers',
        data: [200, 300, 400, 500, 200, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Reports and Analytics</h2>
      
      {/* Date Range Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Date Range:</label>
        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateChange}
          className="p-2 border rounded mr-2"
        />
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Sales Reports */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sales Reports</h3>
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Line data={salesData} />
        </div>
      </div>

      {/* Product Performance */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Product Performance</h3>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Bar data={productPerformanceData} />
        </div>
      </div>

      {/* Customer Insights */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Customer Insights</h3>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Pie data={customerDemographicsData} />
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;