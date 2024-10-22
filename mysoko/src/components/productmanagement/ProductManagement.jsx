import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../../services/productsServices';
import { apiBaseUrl } from '../../../environment';

const ProductManagement = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    availability: '',
    description: '',
    image: null,
    category: 'Poultry',
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        console.log('Response:', response);
        if (response.statusCode === 200 && response.status === 'success') {
          setProducts(response.data);
        } else {
          console.error('Error fetching products:', response.message);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (!isFetched) {
      fetchProducts();
      setIsFetched(true);
    }
  }, [isFetched, setProducts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct !== null) {
        const updatedProduct = await updateProduct(products[editingProduct].id, newProduct);
        setProducts((prevProducts) =>
          prevProducts.map((product, index) =>
            index === editingProduct
              ? { ...updatedProduct, image: updatedProduct.image instanceof File ? URL.createObjectURL(updatedProduct.image) : updatedProduct.image }
              : product
          )
        );
      } else {
        const createdProduct = await createProduct(newProduct);
        setProducts((prevProducts) => [
          ...prevProducts,
          { ...createdProduct, image: createdProduct.image instanceof File ? URL.createObjectURL(createdProduct.image) : createdProduct.image }
        ]);
      }
      setEditingProduct(null);
      setNewProduct({
        name: '',
        price: '',
        availability: '',
        description: '',
        image: null,
        category: 'Poultry',
      });
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  const handleEditProduct = (index) => {
    setEditingProduct(index);
    setNewProduct(products[index]);
  };

  const handleDeleteProduct = async (index) => {
    try {
      await deleteProduct(products[index].id);
      setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const getImageUrl = (image) => {
    if (typeof image === 'string') {
      const extractedImage = image.split('/').pop();
      return `${apiBaseUrl}/uploads/${extractedImage}`;
    } else if (image instanceof File) {
      return URL.createObjectURL(image);
    }
    return null;
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
        <select
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        >
          <option value="Poultry">Poultry</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Cereals">Cereals</option>
          <option value="Dairy">Dairy</option>
        </select>
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
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.map((product, index) => (
            <tr key={`${product.id}-${index}`} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border p-2">
                {product.image && <img src={getImageUrl(product.image)} alt={product.name} className="w-16 h-16 object-cover" />}
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.price}</td>
              <td className="border p-2">{product.availability ? 'Available' : 'Not Available'}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">{product.category}</td>
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

ProductManagement.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ProductManagement;