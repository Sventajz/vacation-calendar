"use client";

import SideBar from "../../components/Sidebar";
import { MainStyle, DashboardWrapper } from "./styled";

export default function Layout({ children }) {
  return (
    <DashboardWrapper>
      <SideBar />
      <MainStyle>{children}</MainStyle>
    </DashboardWrapper>
  );
}
