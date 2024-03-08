import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useSession } from "next-auth/react";

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
  }

  return Promise.reject(error);
};

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const { data: session } = useSession();
  const serviceToken = useLocalStorage("serviceToken");

  if (session?.serviceToken) {
    config.headers.Authorization = `Bearer ${session.serviceToken}`;
  } else {
    config.headers.Authorization = `Bearer ${serviceToken}`;
  }

  return config;
};
