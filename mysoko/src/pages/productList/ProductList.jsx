import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/productcard/ProductCard';
import Button from '../../components/button/Button';
import { getProducts } from '../../services/productsServices';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.statusCode === 200 && response.status === 'success') {
          setProducts(response.data);
        } else {
          console.error('Error fetching products:', response.message);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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
        {Array.isArray(products) && products.slice(0, 6).map((product) => (
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