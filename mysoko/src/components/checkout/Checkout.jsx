import React, { useState, useEffect } from 'react';
import Button from '../../components/button';
import { createOrder } from '../../services/orderService';

const Checkout = ({ closeModal, onSuccessfulCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orders = cart.map(item => ({
      clientName: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,
      address: formData.address,
      productId: item.id,
      quantity: item.quantity,
      status: 'Processing',
    }));

    try {
      const response = await createOrder(orders);

      setMessage('Order submitted successfully!');
      setIsSuccess(true);
      console.log(response);
      onSuccessfulCheckout(); // Call the callback to clear the cart
    } catch (error) {
      console.error('Error submitting order:', error);
      setMessage('An error occurred while submitting the order.');
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="tel"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="street-address"
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
      {message && (
        <p className={`text-center mt-4 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default Checkout;