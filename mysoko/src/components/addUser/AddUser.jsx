import React, { useState } from 'react';
import Button from '../button';

const AddUser = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => {
      if (editingUser !== null) {
        return prevUsers.map((user, index) => (index === editingUser ? newUser : user));
      } else {
        return [...prevUsers, { ...newUser, id: Date.now() }];
      }
    });
    setEditingUser(null);
    setNewUser({ name: '', email: '' });
  };

  const handleEditUser = (index) => {
    setEditingUser(index);
    setNewUser(users[index]);
  };

  const handleDeleteUser = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <form onSubmit={handleAddUser} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={newUser.name}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <Button type="submit" isLoading={false}>
          {editingUser !== null ? 'Update User' : 'Add User'}
        </Button>
      </form>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <Button onClick={() => handleEditUser(index)} isLoading={false} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition duration-200 ease-in-out">
                  Edit
                </Button>
                <Button onClick={() => handleDeleteUser(index)} isLoading={false} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200 ease-in-out">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddUser;