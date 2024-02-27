import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// client side fetch 의 경우
// nextjs 의 reverse proxy 를 거쳐야함.
// next.config.mjs -> rewrites
export const axiosClientConfig = {};

// server side fetch 의 경우 baseURL 이 필요함.
// export const axiosServerConfig = {
//   baseURL: process.env.BASE_URL,
// };

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

export const onError = (error: AxiosError) => {
  const response = error.response as AxiosResponse;

  if (response?.data) {
    console.error(response.data);
  }

  return Promise.reject(error);
};

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = useLocalStorage("token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
