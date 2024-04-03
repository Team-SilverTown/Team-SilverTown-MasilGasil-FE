"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { QueryErrorResetBoundary } from "@tanstack/react-query";

import Kakao from "./Kakao";

const KakaoPage = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className="font-semibold text-h3 pb-2">사용자 인증에 실패 했습니다.</span>
              <button onClick={resetErrorBoundary}>재시도</button>
            </div>
          )}
        >
          <Kakao />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default KakaoPage;
