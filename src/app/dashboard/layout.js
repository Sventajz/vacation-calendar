"use client";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
import SideBar from "../../components/Sidebar";
import { MainStyle, DashboardWrapper } from "./styled";

const GlobalStyle = createGlobalStyle`
  /* Your global styles here */
`;

const theme = {
  /* Your theme here */
};

export default function RootLayout({ children }) {
  const sheet = typeof window === "undefined" ? new ServerStyleSheet() : null;

  useServerInsertedHTML(() => {
    return sheet ? sheet.getStyleElement() : null;
  });

  const content = (
    <DashboardWrapper>
      <SideBar />
      <MainStyle>{children}</MainStyle>
    </DashboardWrapper>
  );

  return (
    <html lang="en">
      <head>{sheet ? sheet.getStyleElement() : null}</head>
      <body>
        {sheet ? (
          <StyleSheetManager sheet={sheet.instance}>
            {content}
          </StyleSheetManager>
        ) : (
          content
        )}
      </body>
    </html>
  );
}
