"use client";

import SideBar from "./sidebar";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  background-color: rgb(236, 233, 233);
  color: #151a20;
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 100vh;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <DashboardWrapper>
      <SideBar />
      <main>{children}</main>
    </DashboardWrapper>
  );
}
