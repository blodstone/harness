import axios from 'axios';

export function authenticate(userData) {
  return axios.post('/admin/login', userData);
}

export function register(userData) {
  return axios.post('/register', userData);
}
