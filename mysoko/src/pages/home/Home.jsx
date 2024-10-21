import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import ProductList from '../../pages/productList/ProductList';
import AboutUs from '../../components/aboutus/AboutUs';
import Testimonials from '../../components/testimonials/Testimonials';
import FAQ from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Example useEffect to populate products (replace with actual data fetching logic)
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate fetching data
      const fetchedProducts = [
        {
          name: 'Product 1',
          price: '$100',
          availability: 'In Stock',
          description: 'Description of Product 1',
          image: 'path/to/image1.jpg',
          category: 'Electronics',
          rating: 4.5,
        },
        // Add more products as needed
      ];
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Banner />

        {/* Main Content */}
        <ProductList products={products} setProducts={setProducts} showViewMore={false} />

        {/* About Us Section */}
        <AboutUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;