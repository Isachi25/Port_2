import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function createAdmin(data) {
    try {
        const response = await axios.post(`${apiBaseUrl}/admins`, data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getAdminById(id) {
    try {
        const response = await axios.get(`${apiBaseUrl}/admins/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getAdmins() {
    try {
        const response = await axios.get(`${apiBaseUrl}/admins`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function updateAdmin(id, data) {
    try {
        const response = await axios.put(`${apiBaseUrl}/admins/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteAdmin(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/admins/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function deleteAdminPermanently(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/admins/delete-permanently/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export {
    createAdmin,
    getAdminById,
    getAdmins,
    updateAdmin,
    deleteAdmin,
    deleteAdminPermanently,
};