import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function createOrder(order) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.post(`${apiBaseUrl}/orders`, order, {
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

async function getOrderById(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${apiBaseUrl}/orders/${id}`, {
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

async function getOrders() {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${apiBaseUrl}/orders`, {
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

async function updateOrder(id, order) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.put(`${apiBaseUrl}/orders/${id}`, order, {
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

async function deleteOrder(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.delete(`${apiBaseUrl}/orders/${id}`, {
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

async function deleteOrderPermanently(id) {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await axios.delete(`${apiBaseUrl}/orders/delete-permanently/${id}`, {
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
    createOrder,
    getOrderById,
    getOrders,
    updateOrder,
    deleteOrder,
    deleteOrderPermanently,
};