import axios from "axios";

import { axiosServerConfig, onError, onRequest, onResponse } from "./axiosConfig";
import { CustomInstance } from "./axiosInstance.types";

export const axiosServerInstance: CustomInstance = axios.create(axiosServerConfig);
export const axiosServerAuthInstance: CustomInstance = axios.create(axiosServerConfig);

axiosServerInstance.interceptors.response.use(onResponse, onError);
axiosServerAuthInstance.interceptors.response.use(onResponse, onError);

axiosServerAuthInstance.interceptors.request.use(onRequest, onError);
