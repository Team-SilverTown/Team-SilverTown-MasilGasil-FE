import type { Metadata, Viewport } from "next";
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
import { getMe } from "@/lib/api/User/server";

export const metadata: Metadata = {
  title: "마실가실",
  description: "",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#81BB26",
};

const KAKAO_API_KEY = process.env.DB_KAKAO_API_KEY;

const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const me = await getMe(session?.serviceToken!);

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
