import { ForbiddenError, UnauthorizedError, isInstanceOfApiError } from "./errors";

export type ApiErrorReturnType = {
  message: string;
  shouldRedirect?: string;
  isApiError: boolean;
};

export function handleApiError(error: unknown): ApiErrorReturnType {
  if (isInstanceOfApiError(error)) {
    const errorMessage = `오류가 발생했습니다: ${error.message} (상태: ${error.statusCode})`;

    // 리다이렉션이 필요한 특정 ApiError 인스턴스 처리
    if (error instanceof UnauthorizedError) {
      return {
        message: errorMessage,
        shouldRedirect: "/",
        isApiError: true,
      };
    }
    if (error instanceof ForbiddenError) {
      return {
        message: errorMessage,
        shouldRedirect: "/",
        isApiError: true,
      };
    }

    // 리다이렉션이 필요 없는 특정 ApiError 인스턴스 처리
    return {
      message: errorMessage,
      isApiError: true,
    };
  }
  return {
    message: "오류가 발생했습니다",
    isApiError: false,
  };
}
