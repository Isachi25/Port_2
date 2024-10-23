import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { useAuth } from '../authcontext/AuthContext';
import Modal from '../modal/Modal';
import { createRetailer } from '../../services/authenticationService';

const SignUp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmName: '',
    location: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.farmName) newErrors.farmName = 'Farm Name is required';
    if (!formData.location) newErrors.location = 'Location is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      try {
        const response = await createRetailer(
          formData.name,
          formData.email,
          formData.password,
          formData.farmName,
          formData.location
        );
        const accessToken = response.accessToken;
        const retailer = response.data;
        // Store the accessToken in sessionStorage
        sessionStorage.setItem('accessToken', accessToken);
        // Store the retailer id in sessionStorage
        sessionStorage.setItem('retailerId', response.data.id);
        // Assuming the backend returns a token and retailer data
        signIn({ accessToken, retailer });
        setSuccessMessage('Sign up successful! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to Retailer Dashboard
        }, 2000);
      } catch (error) {
        console.error('Sign up failed:', error);
        setErrors({ general: error.message || 'An error occurred during sign up.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container mx-auto p-4 max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg text-black">
          <h1 className="text-3xl font-bold mb-4 text-center">Retailer Sign Up</h1>
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Farm Name</label>
              <input
                type="text"
                name="farmName"
                placeholder="Enter your farm name"
                value={formData.farmName}
                onChange={handleChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.farmName && <p className="text-red-500 text-sm">{errors.farmName}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter your farm location"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>
            <div className="flex justify-center">
              <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SignUp;