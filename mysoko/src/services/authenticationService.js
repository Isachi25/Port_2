import { apiBaseUrl } from '../../environment';
import axios from 'axios';

async function login(email, password) {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post(`${apiBaseUrl}/retailers/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function createRetailer(name, email, password, farmName, location) {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('farmName', farmName);
    formData.append('location', location);

    const response = await axios.post(`${apiBaseUrl}/retailers`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
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
    const response = await axios.get(`${apiBaseUrl}/retailers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateRetailer(id, name, email, farmName, location) {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('farmName', farmName);
    formData.append('location', location);

    const response = await axios.put(`${apiBaseUrl}/retailers/${id}`, formData, {
      headers: {
        'Content-Type':'multipart/form-data'
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
    const response = await axios.delete(`${apiBaseUrl}/retailers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export {
  login,
  createRetailer,
  getRetailer,
  updateRetailer,
  deleteRetailer,
};