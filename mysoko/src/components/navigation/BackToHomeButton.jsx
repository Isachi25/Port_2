import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleBackHome}
      className="mb-4 p-2 bg-yellow-700 text-white rounded shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
    >
      Back to Home
    </button>
  );
};

export default BackToHomeButton;