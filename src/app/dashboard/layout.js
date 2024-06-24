"use client";

import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";
import { MainStyle, DashboardWrapper } from "./styled";
import { useEffect, useState } from "react";

import apiClient from "../api/services";
import SideBar from "../../components/Sidebar";
import UserContext from "@/components/UserContext/UserContex";

export default function RootLayout({ children }) {
  const [userInfo, setUserInfo] = useState({});

  async function GetUserInfo() {
    try {
      const user = await apiClient.get("/user");
      const userInformation = user.data[0];
      console.log(userInformation);
      setUserInfo((userInfo) => ({
        ...userInfo,
        ...userInformation,
      }));
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
    <UserContext.Provider value={userInfo}>
      <DashboardWrapper>
        <SideBar />
        <MainStyle>{children}</MainStyle>
      </DashboardWrapper>
    </UserContext.Provider>
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
