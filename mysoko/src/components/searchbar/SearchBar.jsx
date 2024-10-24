import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const productListSection = document.getElementById('product-list-section');
      if (productListSection) {
        productListSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out w-48"
      />
    </div>
  );
};

export default SearchBar;