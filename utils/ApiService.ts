// src/utils/apiClient.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { decryptData } from "./cryptoHelpers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

/* ----------------------------------
   Axios Instance
---------------------------------- */

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/* ----------------------------------
   Token Verification Cache
---------------------------------- */

let isTokenVerified = false;

/* ----------------------------------
   Request Interceptor
---------------------------------- */

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (typeof window === "undefined") return config;

    const encryptedToken = localStorage.getItem("authToken");

    if (!encryptedToken) return config;

    const token = decryptData(encryptedToken);

    if (!token) return config;

    config.headers.Authorization = `Bearer ${token}`;

    if (!isTokenVerified) {
      try {
        await axios.post(
          `${BASE_URL}/auth/verify-token`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        isTokenVerified = true;
      } catch (err) {
        console.error("Token verification failed");

        localStorage.clear();
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/* ----------------------------------
   Response Interceptor
---------------------------------- */

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }

    if (status === 500) {
      console.error("Server error. Try again later.");
    }

    return Promise.reject(error);
  },
);

/* ----------------------------------
   Helper Methods
---------------------------------- */

export const _get = <T = any>(url: string, config = {}) =>
  apiClient.get<T>(url, config);

export const _post = <T = any>(url: string, data = {}, config = {}) =>
  apiClient.post<T>(url, data, config);

export const _put = <T = any>(url: string, data = {}, config = {}) =>
  apiClient.put<T>(url, data, config);

export const _delete = <T = any>(url: string, config = {}) =>
  apiClient.delete<T>(url, config);

export default apiClient;
