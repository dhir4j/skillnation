import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
};

// Courses API
export const coursesAPI = {
  getAll: () => api.get('/courses'),
  getById: (id: number) => api.get(`/courses/${id}`),
};

// Orders API
export const ordersAPI = {
  create: (data: { course_ids: number[] }) => api.post('/orders/create', data),
  complete: (orderId: number) => api.post(`/orders/complete/${orderId}`),
  getMyOrders: () => api.get('/orders/my-orders'),
  getById: (id: number) => api.get(`/orders/${id}`),
};

export default api;
