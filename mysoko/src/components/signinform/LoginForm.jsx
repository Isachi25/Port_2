import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../authcontext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { login } from '../../services/authenticationService';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
      const { accessToken, retailer } = response.data;
      // Store the accessToken in sessionStorage
      sessionStorage.setItem('accessToken', accessToken);
      // Assuming the backend returns a token and retailer data
      signIn({ accessToken, retailer });
      onClose();
      navigate('/dashboard');
    } catch (error) {
      // Handle login failure (e.g., show an error message)
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          required
        />
      </div>
      <div className="flex justify-center">
        <Button type="submit">
          Sign In
        </Button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;