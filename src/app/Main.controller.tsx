"use client";

import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";

import MainView from "./Main.view";
import useMainModel from "./Main.model";

const MainController = () => {
  /*
  TODO:
  1. 로컬 토큰 값을 통해 사용자 인증
  2. 인증 여부에 따라 HomePage 로 이동 혹은 Auth Button 표시
  3. 버튼 클릭 시 카카오 Auth 실행
  4. 실행 결과에 따라 HomePage 혹은 SignIn Page 로 이동
   */

  const preload = async () => {};

  useEffect(() => {
    const prepare = async () => {
      try {
        await preload();
      } catch (error) {
      } finally {
      }
    };
    prepare();
  }, []); //deps -> [isLogIn, token]

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      // console.log(res);
      setProviders(res);
    })();
  }, []);

  // 추가된 부분
  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return <MainView onClickHandler={handleKakao} />;
};

export default MainController;
