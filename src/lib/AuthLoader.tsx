"use client";

import useAuthStore from "@/stores/useAuthStore";
import useMeStore from "@/stores/useMeStore";
import { MeResponse } from "@/types/Response";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const AuthLoader = ({
  children,
  serviceToken,
  me,
}: PropsWithChildren<{ serviceToken?: string; me?: MeResponse }>) => {
  // me 데이터 패치
  // zustand 에 필요한 상태 갱신
  const route = useRouter();

  const { setAuth } = useAuthStore();
  const { setMe, initMe } = useMeStore();
  const [_, setToken] = useLocalStorage("serviceToken");

  console.log(serviceToken, me);

  useEffect(() => {
    if (serviceToken && me && me.nickname) {
      setAuth({ isLogIn: true, serviceToken });
      setMe({ ...me });
      setToken(serviceToken);
      setTimeout(() => {
        route.push("/home");
      }, 2000);
    } else {
      setAuth({ isLogIn: false, serviceToken: undefined });
      initMe();
      setToken(null);
    }
  }, [serviceToken, me]);

  // console.log("LAYOUT", session);

  return <>{children}</>;
};

export default AuthLoader;
