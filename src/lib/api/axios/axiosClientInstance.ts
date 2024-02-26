import axios from "axios";

import { axiosClientConfig, onError, onRequest, onResponse } from "./axiosConfig";
import { CustomInstance } from "./axiosInstance.types";

export const axiosClientInstance: CustomInstance = axios.create(axiosClientConfig);
export const axiosClientAuthInstance: CustomInstance = axios.create(axiosClientConfig);

axiosClientInstance.interceptors.response.use(onResponse, onError);
axiosClientAuthInstance.interceptors.response.use(onResponse, onError);

axiosClientAuthInstance.interceptors.request.use(onRequest, onError);
