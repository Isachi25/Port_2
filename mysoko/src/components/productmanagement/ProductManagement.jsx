import React, { useState } from 'react';
import Button from '../button';

const ProductManagement = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', availability: '', description: '', image: null });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => {
      if (editingProduct !== null) {
        return prevProducts.map((product, index) => (index === editingProduct ? newProduct : product));
      } else {
        return [...prevProducts, newProduct];
      }
    });
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', availability: '', description: '', image: null });
  };

  const handleEditProduct = (index) => {
    setEditingProduct(index);
    setNewProduct(products[index]);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <form onSubmit={handleAddProduct} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="availability"
          placeholder="Availability"
          value={newProduct.availability}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <Button type="submit" isLoading={false}>
          {editingProduct !== null ? 'Update Product' : 'Add Product'}
        </Button>
      </form>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Availability</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border p-2">
                {product.image && <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />}
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.price}</td>
              <td className="border p-2">{product.availability}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">
                <Button onClick={() => handleEditProduct(index)} isLoading={false} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition duration-200 ease-in-out">
                  Edit
                </Button>
                <Button onClick={() => handleDeleteProduct(index)} isLoading={false} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200 ease-in-out">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;