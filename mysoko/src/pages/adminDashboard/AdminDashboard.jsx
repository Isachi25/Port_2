import React, { useState, useEffect } from 'react';
import ProductManagement from '../../components/productmanagement/ProductManagement';
import AddUser from '../../components/addUser/AddUser';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]); // Initialize products state

  useEffect(() => {
    // Placeholder for fetching users from the backend
    const fetchedUsers = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
      { id: 3, name: 'User 3', email: 'user3@example.com' },
    ];
    setUsers(fetchedUsers);

    // Placeholder for fetching products from the backend
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Admin Dashboard
        </h1>
      </div>

      {/* Product Management */}
      <ProductManagement products={products} setProducts={setProducts} />

      {/* User Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <AddUser users={users} setUsers={setUsers} />
      </div>
    </>
  );
};

export default AdminDashboard;