"use client";

import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
import SideBar from "../../components/Sidebar";
import { MainStyle, DashboardWrapper } from "./styled";
import axios from "axios";

async function GetUserInfo() {
  try {
    const user = await axios.get("http://localhost:5000/api/user");
    console.log(user.data);
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}

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
