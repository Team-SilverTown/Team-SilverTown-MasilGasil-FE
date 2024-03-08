"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authenticate, getMe } from "@/lib/api/User/client";

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
  console.log(session);

  const {
    data: meData,
    error,
    isError,
  } = useQuery({
    queryKey: ["me", session?.serviceToken],
    queryFn: getMe,
    enabled: !!session?.serviceToken,
  });

  if (isError) {
    router.push("/signin");
  }

  // useEffect(() => {
  //   if (!authCode) {
  //     router.push("/signin");
  //     return;
  //   }
  // }, []);

  // authCode 가 있는 경우 -> POST 호출

  return <div>Kakao</div>;
};

export default Kakao;
