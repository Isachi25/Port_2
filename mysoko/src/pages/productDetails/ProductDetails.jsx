import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(4); // Placeholder rating

  // Placeholder product details
  const product = { id, name: `Product ${id}`, price: id * 100, description: `Description of Product ${id}` };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold mr-2">Rating:</span>
          {[...Array(5)].map((star, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2 text-lg font-semibold">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 p-2 border rounded"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;