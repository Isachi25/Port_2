import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function createProduct(product) {
    try {
        const response = await axios.post(`${apiBaseUrl}/products`, product);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getProductById(id) {
    try {
        const response = await axios.get(`${apiBaseUrl}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getProducts() {
    try {
        const response = await axios.get(`${apiBaseUrl}/products`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function updateProduct(id, product) {
    try {
        const response = await axios.put(`${apiBaseUrl}/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteProductPermanently(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/products/delete-permanently/${id}`);
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