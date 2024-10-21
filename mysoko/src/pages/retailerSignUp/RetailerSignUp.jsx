import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { useAuth } from '../../components/authcontext/AuthContext';

const RetailerSignUp = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      // Handle form submission
      console.log(formData);
      // Simulate successful sign-up
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage('Sign up successful! Redirecting to dashboard...');
        signIn();
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to Retailer Dashboard
        }, 2000);
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Retailer Sign Up</h1>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
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
          </div >
          <div className="flex justify-center">
          <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
            Sign Up
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RetailerSignUp;