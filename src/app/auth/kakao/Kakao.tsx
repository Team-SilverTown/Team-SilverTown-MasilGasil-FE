"use client";

import React, { useEffect } from "react";

import { getMe } from "@/lib/api/User/client";
import apiClient from "@/lib/client/apiClient";
import useAuthStore from "@/lib/stores/useAuthStore";
import useMeStore from "@/lib/stores/useMeStore";
import { MeResponse } from "@/types/Response";
import { useQuery } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Kakao = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const { setAuth } = useAuthStore();
  const { setMe, initMe } = useMeStore();

  const {
    data: meData,
    isError,
    isLoading,
  } = useQuery<MeResponse>({
    queryKey: ["me", session?.serviceToken],
    queryFn: getMe,
    enabled: !!session?.serviceToken,
  });

  useEffect(() => {
    // console.log("kakao 분기처리 (meData)", meData, session);

    if (!meData) return;

    if (meData && !meData.nickname) {
      // console.log("가가입 유저->회훤가입뷰");
      setAuth({ isLogIn: false, serviceToken: undefined });
      initMe();
      router.replace("/signup", { scroll: false });
    } else {
      // console.log("가입 유저->홈뷰");
      setAuth({ isLogIn: true, serviceToken: session?.serviceToken });
      setMe({ ...meData });
      apiClient.setDefaultHeader("Authorization", `Bearer ${session?.serviceToken}`);
      router.replace("/home");
    }
  }, [meData, session]);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-semibold text-h3">사용자 인증 중입니다...</span>
      </div>
    );

  if (isError) throw Error("failed authentication");

  return <></>;
};

export default Kakao;
