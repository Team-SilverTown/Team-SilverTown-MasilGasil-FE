import { ApiError, ForbiddenError, NotFoundError, ServerError, UnauthorizedError } from "./errors";

class FetchAPI {
  private baseURL: string;
  private headers: { [key: string]: string };

  private static instance: FetchAPI;

  private constructor() {
    this.baseURL = process.env.DB_BASE_URL ?? "";
    this.headers = {};
  }

  public static getInstance(): FetchAPI {
    if (!FetchAPI.instance) {
      FetchAPI.instance = new FetchAPI();
    }
    return FetchAPI.instance;
  }

  public setBaseURL(url: string): void {
    this.baseURL = url;
  }

  public setDefaultHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  public async get({
    endpoint,
    nextInit = {},
    customHeaders = {},
  }: {
    endpoint: string;
    nextInit?: RequestInit;
    customHeaders?: { [key: string]: string };
  }): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "GET",
      headers: { ...this.headers, ...customHeaders },
      ...nextInit,
    });
    return this.responseHandler(response);
  }

  public async post(
    endpoint: string,
    body?: any,
    nextInit: RequestInit = {},
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: { ...this.headers, ...customHeaders },
      body: body instanceof FormData ? body : JSON.stringify(body),
      ...nextInit,
    });

    return this.responseHandler(response);
  }

  public async put(
    endpoint: string,
    body: any,
    nextInit: RequestInit = {},
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      headers: { ...this.headers, ...customHeaders },
      body: JSON.stringify(body),
      ...nextInit,
    });
    return this.responseHandler(response);
  }

  public async delete(
    endpoint: string,
    nextInit: RequestInit = {},
    customHeaders: { [key: string]: string } = {},
  ): Promise<any> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
      headers: { ...this.headers, ...customHeaders },
      ...nextInit,
    });
    return this.responseHandler(response);
  }

  private async responseHandler(response: Response): Promise<any> {
    // const clone = response.clone()
    // console.log(await clone.json())
    if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new UnauthorizedError(response);
        case 403:
          throw new ForbiddenError(response);
        case 404:
          throw new NotFoundError(response);
        case 500:
          throw new ServerError(response);
        default:
          throw new ApiError(response, "An unexpected error occurred");
      }
    }

    return await response.json();
  }
}

export default FetchAPI;
