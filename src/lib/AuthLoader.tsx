"use client";

import { PropsWithChildren, useEffect } from "react";

import { useToast } from "@/components/ShadcnUi/ui/useToast";
import useAuthStore from "@/lib/stores/useAuthStore";
import useMeStore from "@/lib/stores/useMeStore";
import { pathAbleCheck } from "@/lib/utils/pathAbleCheck";
import { MeResponse } from "@/types/Response";

import apiClient from "./client/apiClient";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const REDIRECT_INABLE_PATHS = ["/", "/signup*", "/auth*"];

const AuthLoader = ({
  children,
  serviceToken,
  me,
}: PropsWithChildren<{ serviceToken?: string; me?: MeResponse | null }>) => {
  const route = useRouter();
  const currentPathName = usePathname();

  const { setAuth } = useAuthStore();
  const { setMe, initMe } = useMeStore();
  const [_, setToken] = useLocalStorage("serviceToken");
  const { toast } = useToast();

  const redirectInable = pathAbleCheck(REDIRECT_INABLE_PATHS, currentPathName);

  useEffect(() => {
    setToken(serviceToken);

    if (!serviceToken || !me) {
      // 인증 실패, 가인증 유저인 경우
      setAuth({ isLogIn: false, serviceToken: undefined });
      initMe();
      apiClient.setDefaultHeader("Authorization", "");

      if (serviceToken && !me) {
        toast({ title: "사용자 인증에 실패했습니다.", duration: 2000 });
        signOut();
      }

      return;
    }

    if (currentPathName.includes("policy") || currentPathName.includes("auth")) return;

    if (me.nickname) {
      // 인증된 유저인 경우
      setAuth({ isLogIn: true, serviceToken });
      setMe({ ...me });

      apiClient.setDefaultHeader("Authorization", `Bearer ${serviceToken}`);

      // 인증된 사용자가 갈 수 없는 경로 가입, 로그인 관련
      if (redirectInable) {
        currentPathName === "/"
          ? setTimeout(() => {
              route.replace("/home");
            }, 1000)
          : route.replace("/home");
      }
    }
  }, [serviceToken, me]);

  return <>{children}</>;
};

export default AuthLoader;
