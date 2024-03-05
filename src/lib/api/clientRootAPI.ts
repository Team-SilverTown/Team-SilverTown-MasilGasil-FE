import { AxiosRequestConfig } from "axios";

import { axiosClientAuthInstance, axiosClientInstance } from "./axios/axiosClientInstance";

const getRootAPI = (auth?: boolean) => (auth ? axiosClientAuthInstance : axiosClientInstance);

export const GET = async <T>({
  endPoint,
  config,
  auth = false,
}: {
  endPoint: string;
  config?: AxiosRequestConfig;
  auth?: boolean;
}) => {
  const API = getRootAPI(auth);

  try {
    const response = await API.get<T>(`/api${endPoint}`, config);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const POST = async <T>({
  endPoint,
  data,
  config,
  auth,
}: {
  endPoint: string;
  data?: unknown;
  config?: AxiosRequestConfig;
  auth?: boolean;
}) => {
  const API = getRootAPI(auth);

  try {
    const response = await API.post<T>(`/api${endPoint}`, data, config);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const PUT = async <T>({
  endPoint,
  data,
  config,
  auth,
}: {
  endPoint: string;
  data?: unknown;
  config?: AxiosRequestConfig;
  auth?: boolean;
}) => {
  const API = getRootAPI(auth);

  try {
    const response = await API.put<T>(`/api${endPoint}`, data, config);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const DELETE = async <T>({
  endPoint,
  config,
  auth,
}: {
  endPoint: string;
  config?: AxiosRequestConfig;
  auth?: boolean;
}) => {
  const API = getRootAPI(auth);

  try {
    const response = await API.delete<T>(`/api${endPoint}`, config);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
