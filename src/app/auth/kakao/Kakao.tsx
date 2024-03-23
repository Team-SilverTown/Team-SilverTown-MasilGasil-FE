"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api/User/client";
import { MeResponse } from "@/types/Response";

const Kakao = () => {
  const router = useRouter();

  const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     console.log("kakao (session)", session);
  //   }
  // }, [session]);

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
    // console.log("kakao 분기처리 (meData)", meData);

    if (!meData) return;

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

  if (isError) throw Error("failed authentication");

  return <></>;
};

export default Kakao;
