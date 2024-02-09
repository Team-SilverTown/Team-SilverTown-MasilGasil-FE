import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/GlobalStyle";
import "src/styles/globals.css";
import { ManagedUIContext } from "@/components/uiContext/UiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "마실가실",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ManagedUIContext>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body className={inter.className}>{children}</body>
        </StyledComponentsRegistry>
      </ManagedUIContext>
    </html>
  );
}
