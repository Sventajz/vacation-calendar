"use client";

import axios from "axios";

import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
import { MainStyle, DashboardWrapper } from "./styled";
import { useEffect } from "react";

import SideBar from "../../components/Sidebar";
import apiClient from "../api/services";

export default function RootLayout({ children }) {
  useEffect(() => {
    GetUserInfo();
  }, []);

  async function GetUserInfo() {
    try {
      const user = await apiClient.get("/user");
      console.log(user.data[0]);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

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
