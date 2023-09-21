import axios from 'axios';

export const BASE_URL = 'http://15.164.102.2';

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});
