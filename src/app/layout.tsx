import type { Metadata } from "next";
import Script from "next/script";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import "src/styles/globals.css";
import { ManagedUIContext, ModalUI } from "@/components/uiContext/UiContext";
import BottomNavigator from "@/components/navigators/BottomNavigator/BottomNavigator";
import TanstackQueryProviver from "@/lib/TanstackQueryProvider";
import { serverGetTest } from "@/lib/api/Test/serverTest";

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
  
  const data = await serverGetTest();
  console.log("SERVER", data);

  return (
    <html lang="ko">
      <ManagedUIContext>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body>
            <TanstackQueryProviver>
              <Script
                src={URL}
                strategy={"beforeInteractive"}
              />
              <main>
                {children}
                <BottomNavigator />
              </main>
              <ModalUI />
            </TanstackQueryProviver>
          </body>
        </StyledComponentsRegistry>
      </ManagedUIContext>
    </html>
  );
}
