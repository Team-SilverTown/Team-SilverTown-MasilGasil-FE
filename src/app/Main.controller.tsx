"use client";

import React from "react";
import { signIn } from "next-auth/react";

import MainView from "./Main.view";
import useAuthStore from "@/stores/useAuthStore";

const MainController = () => {
  const { isLogIn } = useAuthStore();

  // const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const res: any = await getProviders();
  //     // console.log(res);
  //     setProviders(res);
  //   })();
  // }, []);

  // 추가된 부분
  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return <MainView isLogIn={isLogIn} />;
};

export default MainController;
