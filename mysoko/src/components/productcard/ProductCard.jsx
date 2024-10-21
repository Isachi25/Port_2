import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button'; // Import the Button component

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Add product to cart logic
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Navigate to the cart page
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-between">
      {product.image && <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />}
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{product.name}</h2>
          <p className="text-gray-700 mb-2 text-lg">${product.price}</p>
          <p className="text-gray-700 mb-2">Availability: {product.availability}</p>
          <p className="text-gray-700 mb-2">Category: {product.category}</p>
        </div>
        <Button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;