/**
 * API 요청에 필요한 endPoint 를 관리합니다.
 */

export const END_POINT = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",

    REFRESH: "/api/v1/users/auth/refresh",

    SIGNUP: "/api/v1/users/extra-info",
  },

  USER: {
    ME: "/api/v1/users/me",

    CHECK_NICKNAME: (nickname: string) => `/api/v1/users/check-nickname?nickname=${nickname}`,

    EDIT_USER: "/api/v1/users",

    TOGGLE_PUBLIC: "/api/v1/users/is-public",

    PROFILE: (userId: string | number) => `/api/v1/users/${userId}`,

    UPLOAD_IMAGE: "/api/v1/users/profiles",
  },

  MASIL: {
    POST: "/api/v1/masils",

    GET_DETAIL: (id: string) => `/api/v1/masils/${id}`,

    GET_RESENT_LIST: ({ size = "" }: { size?: number | string }) =>
      `/api/v1/masils/recent?size=${size}`,

    GET_PERIOD: ({
      startDate = "",
      endDate = "",
    }: {
      startDate?: string | null;
      endDate?: string | null;
    }) => `/api/v1/masils/period?startDate=${startDate}&endDate=${endDate}`,

    DELETE: (id: string) => `/api/v1/masils/${id}`,
  },

  IMAGE: "/api/v1/images",

  POST: {
    POST: "/api/v1/posts",

    GET_LIST: "/api/v1/posts",

    GET_DETAIL: (postId: string) => `/api/v1/posts/${postId}`,

    GET_POPULAR_PLACE: ({
      depth1,
      depth2,
      depth3,
      size = 10,
    }: {
      depth1: string;
      depth2: string;
      depth3: string;
      size?: number;
    }) =>
      `/api/v1/posts?depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&order=MOST_POPULAR&size=${size}`,

    GET_POPULAR: "/api/v1/posts?order=MOST_POPULAR&size=10",

    GET_RECENT_BY_ID: ({ userId, size = 10 }: { userId: number | string; size?: number }) =>
      `/api/v1/posts?authorId=${userId}&size=${size ? size : 10}`,

    LIKED_STATUS: (postId: string) => `/api/v1/posts/${postId}/likes`,

    DELETE: (id: string) => `/api/v1/posts/${id}`,
  },

  MATE: {
    GET_DETAIL: (id: string) => `/api/v1/mates/${id}`,

    GET_DETAIL_LIST: "/api/v1/mates",

    CREATE: "/api/v1/mates",

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
  },
};
