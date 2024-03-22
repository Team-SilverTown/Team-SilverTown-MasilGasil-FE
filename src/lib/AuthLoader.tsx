"use client";

import { PropsWithChildren, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import useAuthStore from "@/lib/stores/useAuthStore";
import useMeStore from "@/lib/stores/useMeStore";
import { MeResponse } from "@/types/Response";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { pathAbleCheck } from "@/lib/utils/pathAbleCheck";

export const REDIRECT_INABLE_PATHS = ["/", "/signup*", "/auth*"];

const AuthLoader = ({
  children,
  serviceToken,
  me,
}: PropsWithChildren<{ serviceToken?: string; me?: MeResponse }>) => {
  const route = useRouter();
  const currentPathName = usePathname();

  const { setAuth } = useAuthStore();
  const { setMe, initMe } = useMeStore();
  const [_, setToken] = useLocalStorage("serviceToken");

  const { data: session, status, update } = useSession();

  const redirectInable = pathAbleCheck(REDIRECT_INABLE_PATHS, currentPathName);

  useEffect(() => {
    setToken(serviceToken);

    console.log(serviceToken, me);

    if (serviceToken && me && me.nickname) {
      // 인증된 유저인 경우
      session?.nickname !== me.nickname &&
        update({ serviceToken: serviceToken, nickname: me.nickname });
      setAuth({ isLogIn: true, serviceToken });
      setMe({ ...me });
      if (redirectInable) {
        currentPathName === "/"
          ? setTimeout(() => {
              route.replace("/home");
            }, 2000)
          : route.replace("/home");
      }
    } else if (currentPathName.includes("policy") || currentPathName.includes("auth")) {
      return;
    } else {
      console.log("authload 인증 실패");
      console.log(serviceToken, me);
      console.log("----------------------");
      // 인증 실패, 가인증 유저인 경우
      setAuth({ isLogIn: false, serviceToken: undefined });
      initMe();
      // setToken(null);
      route.replace("/");
    }
  }, [serviceToken, me]);

  return <>{children}</>;
};

export default AuthLoader;
