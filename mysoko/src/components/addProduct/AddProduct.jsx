import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
      description,
    };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setImage(null);
    setDescription('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="border p-2 rounded mb-2 w-full"
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
        rows="4"
      />
      <button
        onClick={handleAddProduct}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 ease-in-out"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;