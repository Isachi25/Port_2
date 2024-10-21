import React from 'react';
import bannerImage from '../../assets/images/bannerImage.jpeg'; // Adjust the path as needed

const Banner = () => {
  return (
    <div className="relative w-full h-screen"> {/* Adjusted height to 16rem */}
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl text-white font-bold mb-2">Welcome to Our Store</h1>
        <p className="text-lg text-white bg-yellow-500 px-4 py-2 rounded-md">Enjoy discounts on items above Ksh 1000</p>
      </div>
    </div>
  );
};

export default Banner;