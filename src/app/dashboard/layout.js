"use client";

import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
import { MainStyle, DashboardWrapper } from "./styled";
import { useContext, useEffect, useState } from "react";

import SideBar from "../../components/Sidebar";
import apiClient from "../api/services";

export default function RootLayout({ children }) {
  const [userInfo, setUserInfo] = useState();

  async function GetUserInfo() {
    try {
      const user = await apiClient.get("/user");
      setUserInfo(user.data[0].full_name);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  useEffect(() => {
    GetUserInfo();
  }, []);

  const sheet = typeof window === "undefined" ? new ServerStyleSheet() : null;

  useServerInsertedHTML(() => {
    return sheet ? sheet.getStyleElement() : null;
  });

  const content = (
    <DashboardWrapper>
      <SideBar username={userInfo} />
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
