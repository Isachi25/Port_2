import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file for ProductList

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Placeholder for fetching products from the backend
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="container">
      <div className="banner">
        <img src="/path/to/your/banner-image.jpg" alt="Banner" className="banner-image" />
      </div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;