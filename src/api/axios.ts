import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'https://dog.ceo/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /* 
    Add your request interceptor logic here
    e.g. Authorization token injection
    */

    return config;
  }
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    /* 
    Add your response interceptor logic here
    e.g. Response data transformation
    */

    return response;
  },
  (error) => {
    /* 
    Add your error interceptor logic here
    e.g. 401 Unauthorized -> Refresh token
    */

    return Promise.reject(error);
  }
);
