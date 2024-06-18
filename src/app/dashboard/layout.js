"use client";

import SideBar from "../../components/Sidebar";
import { MainStyle, DashboardWrapper } from "./styled";
import axios from "axios";

async function GetUserInfo() {
  try {
    const user = await axios.get("http://localhost:5000/api/user");
    console.log(user.data);
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
}

export default function Layout({ children }) {
  GetUserInfo();
  return (
    <DashboardWrapper>
      <SideBar />
      <MainStyle>{children}</MainStyle>
    </DashboardWrapper>
  );
}
