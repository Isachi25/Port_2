import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function login(email, password) {
  try {
    const formData = {
      email,
      password,
    };

    const response = await axios.post(`${apiBaseUrl}/auth/login`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function createRetailer(name, email, password, farmName, location, role) {
  try {
    const formData = {
      name,
      email,
      password,
      farmName,
      location,
      role
    };

    const response = await axios.post(`${apiBaseUrl}/auth`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getRetailer(id) {
  try {
    const response = await axios.get(`${apiBaseUrl}/auth/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateRetailer(id, name, email, farmName, location, role) {
  try {
    const formData = {
      name,
      email,
      farmName,
      location,
      role
    };

    const response = await axios.put(`${apiBaseUrl}/auth/${id}`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteRetailer(id) {
  try {
    const response = await axios.delete(`${apiBaseUrl}/auth/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function logout() {
  // Clear authentication tokens or session data
  localStorage.removeItem('authToken'); // Example: remove token from localStorage
  sessionStorage.removeItem('authToken'); // Example: remove token from sessionStorage
  // Add any other logout logic here
}

export {
  login,
  createRetailer,
  getRetailer,
  updateRetailer,
  deleteRetailer,
  logout, // Export the new logout function
};