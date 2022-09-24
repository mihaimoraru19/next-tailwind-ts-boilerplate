import type { AxiosInstance } from 'axios';

export const authenticatedInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      if (error.response) {
        const { message } = error.response.data;
        if (message === 'Invalid token.') {
          localStorage.removeItem('token');
        }
      }
      Promise.reject(error);
    }
  );
};
