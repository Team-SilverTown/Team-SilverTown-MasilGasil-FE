/**
 * API 요청에 필요한 endPoint 를 관리합니다.
 */

export const TEST_ENDPOINT = {
  TEST: "/health",
  TEST_POST: "/data",
};

export const AUTH = {
  AUTH: "/api/v1/auth/login",
  REFRESH: "/api/v1/users/auth/refresh",
};

export const USER = {
  AUTH: "/api/v1/auth/login",
  ME: "/api/v1/users/me",
  CHECK_NICKNAME: "/api/v1/users/check-nickname",
  SIGNUP: "/api/v1/users/extra-info",
  EDIT_USER: "/api/v1/users",
  TOGGLE_PUBLIC: "/api/v1/users/is-public",
  PROFILE: "/api/v1/users",
  UPLOAD_IMAGE: "/api/v1/users/profiles",
};

export const MASIL = {
  POST: "/api/v1/masils",
  GET_DETAIL: "/api/v1/masils",
  GET_LIST: "/api/v1/masils/recent",
  GET_PERIOD: "/api/v1/masils/period",
  GET_RECENT: "/api/v1/masils/recent",
};

export const IMAGE = "/api/v1/images";

export const POST = {
  GET_DETAIL: "/api/v1/posts",
  POST: "/api/v1/posts",
  GET_LIST: "/api/v1/posts",
  LIKED_STATUS: "/api/v1/posts",
};

export const MATE = {
  GET_DETAIL: "/api/v1/mates",
  POST_MATE_PARTICIPANT_REQUEST: (mateId: string | number) =>
    `/api/v1/mates/${mateId}/participants`,
  DELETE_CANCEL_PARTICIPANT: ({
    mateId,
    participantId,
  }: {
    mateId: string | number;
    participantId: string | number;
  }) => `/api/v1/mates/${mateId}/participants/${participantId}`,
  ACCEPT_PARTICIPANT: ({
    mateId,
    participantId,
  }: {
    mateId: string | number;
    participantId: string | number;
  }) => `/api/v1/mates/${mateId}/participants/${participantId}`,
};
