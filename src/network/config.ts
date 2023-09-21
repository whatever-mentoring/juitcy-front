import axios from 'axios';

export const BASE_URL = 'http://15.164.102.2';

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Iiwicm9sZSI6IkpVTlkiLCJpYXQiOjE2OTUyNzM5ODMsImV4cCI6MTY5NTI3NDI4M30.57idlu0MVeQsqqykWDBMNCFcgL7M26MwFqNa9TlyBRc',
  },
});
