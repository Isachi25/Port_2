import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authenticationService';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    console.log('User logged out');
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-2 py-2 rounded transition duration-200 ease-in-out hover:bg-yellow-600"
    >
      Logout
    </button>
  );
};

export default Logout;