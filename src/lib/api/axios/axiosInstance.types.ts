import { AxiosInstance, AxiosRequestConfig } from "axios";

export interface CustomInstance extends AxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, confg?: AxiosRequestConfig): Promise<T>;
}

export type CustomResponseFormat<T = unknown> = {
  status: number;
  data?: T;
};
