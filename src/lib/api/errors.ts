export class ApiError extends Error {
  public statusCode: number;
  public statusText: string;
  public response: Response;

  constructor(response: Response, message?: string) {
    super(message);
    this.statusCode = response.status;
    this.statusText = response.statusText;
    this.response = response;
    this.name = "ApiError";
  }
}

export function isInstanceOfApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export class NotFoundError extends ApiError {
  constructor(response: Response, message?: string) {
    super(response, message);
    this.name = "NotFoundError";
    this.message = this.message ?? "NOT FOUND";
  }
}

export class ForbiddenError extends ApiError {
  constructor(response: Response, message?: string) {
    super(response, message);
    this.name = "ForbiddenError";
    this.message = message ?? "FORBIDDEN";
  }
}

export class UnauthorizedError extends ApiError {
  constructor(response: Response, message?: string) {
    super(response, message);
    this.name = "UnauthorizedError";
    this.message = this.message ?? "UNAUTHORIZED";
  }
}

export class ServerError extends ApiError {
  constructor(response: Response, message?: string) {
    super(response, message);
    this.name = "ServerError";
    this.message = this.message ?? "SERVER";
  }
}
