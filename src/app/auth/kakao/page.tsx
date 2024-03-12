"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api/User/client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { MeResponse } from "@/types/Response";

const Kakao = () => {
  const router = useRouter();

  const { data: session } = useSession();
  const [serviceToken, setServiceToken] = useLocalStorage("serviceToken");

  useEffect(() => {
    if (session) {
      console.log("kakao (session)", session);
      setServiceToken(session.serviceToken ? session.serviceToken : null);
    }
  }, [session]);

  const {
    data: meData,
    isLoading,
    isError,
  } = useQuery<MeResponse>({
    queryKey: ["me", session?.serviceToken],
    queryFn: getMe,
    enabled: !!session?.serviceToken && !!serviceToken,
  });

  useEffect(() => {
    if (!meData) return;

    console.log("kakao 분기처리 (meData)", meData);

    if (meData && !meData.nickname) {
      console.log("가가입 유저->회훤가입뷰");
      router.replace("/signup", { scroll: false });
    } else {
      console.log("가입 유저->홈뷰");
      router.replace("/home");
    }
  }, [meData]);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-semibold text-h3">사용자 인증 중입니다...</span>
      </div>
    );

  if (isError)
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="font-semibold text-h3">사용자 인증에 실패 했습니다.</span>
        <button onClick={() => router.replace("/")}>사용자 인증하기</button>
      </div>
    );
};

export default Kakao;
