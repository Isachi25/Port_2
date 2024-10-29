import React, { useState } from 'react';
import Button from '../../components/button';

const Checkout = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    productId: '',
    quantity: 1,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            clientName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            address: formData.address,
            productId: formData.productId,
            quantity: formData.quantity,
            status: 'Processing',
          },
        ]),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Order submitted successfully!');
        console.log(result);
        closeModal();
      } else {
        const errorDetails = await response.json();
        console.log("Error details:", errorDetails);
        setMessage(`Failed to submit order: ${errorDetails.message || 'Please check your inputs.'}`);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setMessage('An error occurred while submitting the order.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="tel"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="street-address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Product ID</label>
        <input
          type="text"
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </Button>
        <Button
          type="button"
          onClick={closeModal}
          className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </Button>
      </div>
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
    </form>
  );
};

export default Checkout;