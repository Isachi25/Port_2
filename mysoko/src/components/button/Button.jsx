import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-700 text-white py-2 px-4 rounded hover:bg-yellow-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;