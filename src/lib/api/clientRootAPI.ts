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

  return await API.get<T>(`/call${endPoint}`, config)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });
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

  return await API.post<T>(`/call${endPoint}`, data, config)
    .then((response) => response)
    .catch((e) => {
      throw Error(e.response.data.message);
    });
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

  return await API.put<T>(`/call${endPoint}`, data, config)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });
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

  return await API.delete<T>(`/call${endPoint}`, config)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });
};

export const PATCH = async <T>({
  endPoint,
  config,
  auth,
}: {
  endPoint: string;
  config?: AxiosRequestConfig;
  auth?: boolean;
}) => {
  const API = getRootAPI(auth);

  return await API.patch<T>(`/call${endPoint}`, config)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });
};
