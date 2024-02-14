import { AxiosRequestConfig } from "axios";
import { axiosClientAuthInstance, axiosClientInstance } from "./axios/axiosClientInstance";
import { axiosServerAuthInstance, axiosServerInstance } from "./axios/axiosServerInstance";

const getRootAPI = (server?: boolean, auth?: boolean) => {
  if (server) {
    return auth ? axiosServerAuthInstance : axiosServerInstance;
  } else {
    return auth ? axiosClientAuthInstance : axiosClientInstance;
  }
};

export const GET = async <T>({
  endPoint,
  config,
  server = false,
  auth = false,
}: {
  endPoint: string;
  config?: AxiosRequestConfig;
  server?: boolean;
  auth?: boolean;
}): Promise<T | null> => {
  const API = getRootAPI(server, auth);

  try {
    const response = await API.get<T>(endPoint, config);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const POST = async <T>({
  endPoint,
  data,
  config,
  server,
  auth,
}: {
  endPoint: string;
  data?: unknown;
  config?: AxiosRequestConfig;
  server?: boolean;
  auth?: boolean;
}) => {
  const API = getRootAPI(server, auth);

  try {
    const response = await API.post<T>(endPoint, data, config);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
