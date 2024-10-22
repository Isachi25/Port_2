import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function createProduct(retailerId, name, price, availability, category, description, image) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const formData = new FormData();
        formData.append('retailerId', retailerId);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('availability', availability);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('image', image);

        const response = await axios.post(`${apiBaseUrl}/products`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        });
        return response.data;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getProductById(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${apiBaseUrl}/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getProducts() {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${apiBaseUrl}/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function updateProduct(id, product) {
    try {
        const { retailerId, name, price, availability, category, description, image } = product;
        const token = sessionStorage.getItem('accessToken');
        const formData = new FormData();
        formData.append('retailerId', retailerId);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('availability', availability);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('image', image);
        const response = await axios.put(`${apiBaseUrl}/products/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.delete(`${apiBaseUrl}/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteProductPermanently(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.delete(`${apiBaseUrl}/products/${id}/permanent`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
    deleteProductPermanently,
};