"use client";

import SideBar from "../../components/Sidebar";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  background-color: rgb(236, 233, 233);
  color: #151a20;
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 100vh;
  width: 100%;
`;

const MainStyle = styled.main`
  z-index: 0;
`;

export default function Layout({ children }) {
  return (
    <DashboardWrapper>
      <SideBar />
      <MainStyle>{children}</MainStyle>
    </DashboardWrapper>
  );
}
