import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { access_token } from 'src/config/temp-config';
import { checkConnection } from 'src/utils/helper';

// Create an instance of Axios
const api: AxiosInstance = axios.create({
  baseURL: 'https://medilifeapp.azurewebsites.net',
  timeout: 10000,
});

let isFlashMessageShown = false;
let accessToken: string | null = null;
let refreshToken: string | null = null;

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const isConnected = await checkConnection();
    if (!isConnected && !isFlashMessageShown) {
      console.log('FLASH MESSAGE: No internet connection');
      isFlashMessageShown = true;
      throw new Error('No internet connection');
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('Error in request interceptor:', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    isFlashMessageShown = false;
    return response;
  },
  (error: AxiosError) => {
    console.error('Error in response interceptor:', error);
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  config => {
    // Retrieve the access token from MMKV
    const accessToken = access_token;

    // Add the access token to the request headers
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

const refreshTokenEndpoint = '/refresh-token';

const refreshAccessToken = async (): Promise<void> => {
  try {
    const response = await api.post(refreshTokenEndpoint, {
      refresh_token: refreshToken,
    });
    accessToken = response.data.access_token;
    refreshToken = response.data.refresh_token;

    // Update the tokens in storage
    // await storage.setItem('auth', JSON.stringify({ token: accessToken, refreshToken }));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return api(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default api;
