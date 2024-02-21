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
    const response = await API.get<T>(endPoint, config);
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
    const response = await API.post<T>(endPoint, data, config);
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
