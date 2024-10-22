import React, { useState, useEffect } from 'react';
import Button from '../button';
import { getOrders, updateOrder } from '../../services/orderService';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        if (response.statusCode === 200 && Array.isArray(response.data)) {
          setOrders(response.data);
        } else {
          console.error('Expected an array of orders');
          setError('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await updateOrder(id, { status });
      if (response.statusCode === 200) {
        setOrders(orders.map(order => order.id === id ? { ...order, status: response.data.status } : order));
      } else {
        console.error('Failed to update order status');
        setError('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      setError('Failed to update order status');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      {error && <p className="text-red-500">{error}</p>}
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
          {Array.isArray(orders) && orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.clientName}</td>
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