import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-gray-50 p-6 shadow-md relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">About Us</h2>
        <p className="text-gray-700 text-lg mb-6 text-center">
          We are a company dedicated to providing the best products for our customers.
        </p>
        <p className="text-gray-700 text-lg text-center">
          Our mission is to deliver high-quality products that bring value and satisfaction to our customers. We strive to exceed expectations and continuously improve our offerings.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;