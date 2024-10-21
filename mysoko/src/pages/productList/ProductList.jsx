import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/productcard/ProductCard';
import Button from '../../components/button/Button';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder for fetching products from the backend
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
      { id: 4, name: 'Product 4', price: 400 },
      { id: 5, name: 'Product 5', price: 500 },
      { id: 6, name: 'Product 6', price: 600 },
      { id: 7, name: 'Product 7', price: 700 },
      { id: 8, name: 'Product 8', price: 800 },
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleViewMore = () => {
    navigate('/client-dashboard', { state: { products } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        Product List
      </h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleViewMore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

export default ProductList;