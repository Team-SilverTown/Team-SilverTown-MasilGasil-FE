import type { Metadata } from "next";
import Script from "next/script";
import { getServerSession } from "next-auth";

import TanstackQueryProvider from "@/lib/TanstackQueryProvider";
import AuthContext from "@/lib/AuthContext";
import AuthLoader from "@/lib/AuthLoader";
import StyledComponentsRegistry from "@/lib/registry";
import { ManagedUIContext, ModalUI, WindowUI } from "@/components/uiContext/UiContext";
import BottomNavigator from "@/components/navigators/BottomNavigator/BottomNavigator";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { GlobalStyle } from "@/styles/GlobalStyle";

import "src/styles/globals.css";

import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "마실가실",
  description: "",
};

const KAKAO_API_KEY = process.env.DB_KAKAO_API_KEY;

const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  // useSession 을 통해 서비스 토큰을 가져옴
  // me 요청을 서버사이드에서 실행
  // 받아온 me 를 useMe 에 저장하는 하위 컴포넌트에 전달.\\

  // console.log(session);

  return (
    <html lang="ko">
      <ManagedUIContext>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body>
            <Script
              type="text/javascript"
              src={URL}
              strategy={"beforeInteractive"}
            />
            <AuthContext>
              <AuthLoader>
                <TanstackQueryProvider>
                  <main>
                    {children}
                    <BottomNavigator />
                  </main>
                  <ModalUI />
                  <LoadingSpinner />
                  <WindowUI />
                </TanstackQueryProvider>
              </AuthLoader>
            </AuthContext>
          </body>
        </StyledComponentsRegistry>
      </ManagedUIContext>
    </html>
  );
}
