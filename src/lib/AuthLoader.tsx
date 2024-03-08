"use client";

import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

const AuthLoader = ({ children }: PropsWithChildren<{}>) => {
  // const { status, data: session } = useSession();

  // me 데이터 패치
  // zustand 에 필요한 상태 갱신

  // useEffect(() => {}, [token, me...])

  // console.log("LAYOUT", session);

  return <>{children}</>;
};

export default AuthLoader;
