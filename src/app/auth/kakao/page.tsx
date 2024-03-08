"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api/User/client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { MeResponse } from "@/types/Response";

const Kakao = () => {
  /*
  리다이렉트 되어 오게 되는 경우
  1. URL 에서 code 를 분리한다.
  2. 분리된 코드를 통해 서비스 서버에 토큰을 요청한다.
  3. response 로 받은 토큰을 통해 -> auth, me 스토어를 갱신한다.
  4. 갱신된 내용을 토대로 home or sigin 으로 페이지를 라우팅 한다. 
  
  - 이미 로그인 되어 있는 경우 해당 페이지로 접근하는 경우 막아야한다.
  */

  // useSession 에서 서비스 토큰을 가져옴
  // me 요청을 보내서 사용자 정보를 가져옴
  // 해당 정보를 토대로 home/ signin 으로 리다이렉트
  // 사용자가 없다면 세션의 서비스 토큰을 지워보자..

  const router = useRouter();

  const { data: session } = useSession();
  const [token, setToken] = useLocalStorage("serviceToken");

  useEffect(() => {
    if (session) {
      // console.log(session);
      setToken(session.serviceToken);
    }
  }, [session]);

  const { data: meData, isLoading } = useQuery<MeResponse>({
    queryKey: ["me", session?.serviceToken],
    queryFn: getMe,
    enabled: !!session?.serviceToken && !!token,
    retry: 1,
  });

  useEffect(() => {
    if (!meData) return;

    if (meData && !meData.nickname) {
      console.log("가가입 유저->회훤가입뷰");
      router.push("/signin", { scroll: false });
    } else {
      console.log("가입 유저->홈뷰");
      router.push("/home");
    }
  }, [meData]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <span className="font-semibold text-h2">사용자 인증 중입니다 ...</span>
    </div>
  );
};

export default Kakao;
