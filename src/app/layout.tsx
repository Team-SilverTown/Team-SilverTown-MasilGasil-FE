import "src/styles/globals.css";

import { GlobalStyle } from "@/styles/GlobalStyle";

import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Toaster } from "@/components/ShadcnUi/ui/toaster";
import BottomNavigator from "@/components/navigators/BottomNavigator/BottomNavigator";
import { ManagedUIContext, ModalUI, WindowUI } from "@/components/uiContext/UiContext";
import AuthContext from "@/lib/AuthContext";
import AuthLoader from "@/lib/AuthLoader";
import TanstackQueryProvider from "@/lib/TanstackQueryProvider";
import { getMe } from "@/lib/api/User/server";
import apiClient from "@/lib/client/apiClient";
import StyledComponentsRegistry from "@/lib/registry";

import { authOptions } from "./api/auth/[...nextauth]/options";

import type { Metadata, Viewport } from "next";
import { getServerSession } from "next-auth";
import Script from "next/script";

export const metadata: Metadata = {
  title: "마실가실",
  description:
    "마실 가실은 잠깐의 여유와 운동이 필요한 현대인들에게 산책을 기록하고 산책로를 공유하며 색다른 마실 경험을 느낄 수 있게 도와주는 서비스입니다.",
  manifest: "/manifest.json",
  icons: {
    icon: "/masil.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const KAKAO_API_KEY = process.env.DB_KAKAO_API_KEY;

const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (session && session.serviceToken)
    apiClient.setDefaultHeader("Authorization", `Bearer ${session.serviceToken}`);

  const me = session?.serviceToken ? await getMe() : undefined;

  return (
    <html lang="ko">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
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
              <AuthLoader
                serviceToken={session?.serviceToken}
                me={me}
              >
                <TanstackQueryProvider>
                  <main>
                    {children}
                    <BottomNavigator />
                  </main>
                  <ModalUI />
                  <Toaster />
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
