/**
 * API 요청에 필요한 endPoint 를 관리합니다.
 */

export const TEST_ENDPOINT = {
  TEST: "/health",
  TEST_POST: "/data",
};

export const USER = {
  AUTH: "/api/v1/users/login",
  ME: "/api/v1/users/me",
  CHECK_NICKNAME: "/api/v1/users/check-nickname",
  SIGNUP: "/api/v1/users/extra-info",
};

export const MASIL_ENDPOINT = {
  PERIODIC_GET: "/v1/masils/period",
};
