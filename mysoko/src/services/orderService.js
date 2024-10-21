import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function createOrder(order) {
    try {
        const response = await axios.post(`${apiBaseUrl}/orders`, order);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getOrderById(id) {
    try {
        const response = await axios.get(`${apiBaseUrl}/orders/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getOrders() {
    try {
        const response = await axios.get(`${apiBaseUrl}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function updateOrder(id, order) {
    try {
        const response = await axios.put(`${apiBaseUrl}/orders/${id}`, order);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteOrder(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/orders/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteOrderPermanently(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/orders/delete-permanently/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export {
    createOrder,
    getOrderById,
    getOrders,
    updateOrder,
    deleteOrder,
    deleteOrderPermanently,
};