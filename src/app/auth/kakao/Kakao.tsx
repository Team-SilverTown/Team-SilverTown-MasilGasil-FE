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
    if (!meData) return;

    if (meData && !meData.nickname) {
      setAuth({ isLogIn: false, serviceToken: undefined });
      initMe();
      router.replace("/signup", { scroll: false });
    } else {
      setAuth({ isLogIn: true, serviceToken: session?.serviceToken });
      setMe({ ...meData });
      apiClient.setDefaultHeader("Authorization", `Bearer ${session?.serviceToken}`);
      router.replace("/home");
    }
  }, [meData, session]);

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-h3 font-semibold">사용자 인증 중입니다...</span>
      </div>
    );

  if (isError) throw Error("failed authentication");

  return <></>;
};

export default Kakao;
