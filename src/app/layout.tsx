import type { Metadata } from "next";
import Script from "next/script";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import "src/styles/globals.css";
import { ManagedUIContext, ModalUI } from "@/components/uiContext/UiContext";
import BottomNavigator from "@/components/navigators/BottomNavigator/BottomNavigator";

export const metadata: Metadata = {
  title: "마실가실",
  description: "",
};
const KAKAO_API_KEY = process.env.DB_KAKAO_API_KEY;

const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ManagedUIContext>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body>
            <Script
              src={URL}
              strategy={"beforeInteractive"}
            />
            <main>
              {children}
              <BottomNavigator />
            </main>
            <ModalUI />
          </body>
        </StyledComponentsRegistry>
      </ManagedUIContext>
    </html>
  );
}
