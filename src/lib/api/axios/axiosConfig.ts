import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const axiosClientConfig = {};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

export const onError = (error: AxiosError) => {
  const response = error.response as AxiosResponse;

  if (response?.data) {
    return Promise.reject(response.data.code);
  }

  return Promise.reject(error);
};

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const serviceToken = localStorage.getItem("serviceToken");

  config.headers.Authorization = `Bearer ${serviceToken}`;

  return config;
};
