import React, { useState } from 'react';
import Button from '../button';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Sharon Sachi', status: 'Processing' },
    { id: 2, customer: 'Nic Nicanor', status: 'Delivered' },
  ]);

  const handleUpdateStatus = (id, status) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.customer}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <Button onClick={() => handleUpdateStatus(order.id, 'Processing')} isLoading={false} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition duration-200 ease-in-out">
                  Processing
                </Button>
                <Button onClick={() => handleUpdateStatus(order.id, 'Delivered')} isLoading={false} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition duration-200 ease-in-out">
                  Delivered
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;