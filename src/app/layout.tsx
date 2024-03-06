import type { Metadata } from "next";
import Script from "next/script";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import "src/styles/globals.css";
import { ManagedUIContext, ModalUI, WindowUI } from "@/components/uiContext/UiContext";
import BottomNavigator from "@/components/navigators/BottomNavigator/BottomNavigator";
import TanstackQueryProvider from "@/lib/TanstackQueryProvider";
import { serverGetTest } from "@/lib/api/Test/serverTest";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

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
  // const data = await serverGetTest();
  // console.log("SERVER", data);

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
            <TanstackQueryProvider>
              <main>
                {children}
                <BottomNavigator />
              </main>
              <ModalUI />
              <LoadingSpinner />
              <WindowUI />
            </TanstackQueryProvider>
          </body>
        </StyledComponentsRegistry>
      </ManagedUIContext>
    </html>
  );
}
