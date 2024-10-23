import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/productcard/ProductCard';
import SearchBar from '../../components/searchbar/SearchBar';
import BackToHomeButton from '../../components/navigation/BackToHomeButton';

const ClientDashboard = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Products</h2>

      {/* Back to Home Button */}
      <BackToHomeButton />

      {/* Search and Filter */}
      <div className="flex justify-end mb-4 space-x-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Cereals">Cereals</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Poultry">Poultry</option>
          <option value="Dairy">Dairy</option>
        </select>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500 mt-4">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;