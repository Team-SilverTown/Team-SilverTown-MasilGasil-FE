import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// client side fetch 의 경우
// nextjs 의 reverse proxy 를 거쳐야함.
// next.config.mjs -> rewrites
export const axiosClientConfig = {};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

export const onError = (error: AxiosError) => {
  const response = error.response as AxiosResponse;

  if (response?.data) {
    console.error(response.data);
    return Promise.reject(response.data.code);
  }

  return Promise.reject(error);
};

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const serviceToken = localStorage.getItem("serviceToken");

  config.headers.Authorization = `Bearer ${serviceToken}`;

  return config;
};
