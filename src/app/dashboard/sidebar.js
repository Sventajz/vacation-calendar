"use client";

import {
  Banner,
  SideBarButtons,
  SideBarComponent,
  SideBarItems,
  UserControls,
} from "./sidebar.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

//Styled components
const StyledLink = styled(Link)`
  width: 100%;
  &:active {
    background-color: #efebff;
  }
`;

export default function SideBar({ username }) {
  const pathname = usePathname();
  return (
    <SideBarComponent>
      <Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        <h2>PTO System</h2>
      </Banner>
      <SideBarItems>
        <StyledLink href="/dashboard/welcome">
          <SideBarButtons active={pathname === "/dashboard/welcome"}>
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            Home
          </SideBarButtons>
        </StyledLink>

        <StyledLink href="/dashboard/pto">
          <SideBarButtons active={pathname === "/dashboard/pto"}>
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            PTO
          </SideBarButtons>
        </StyledLink>
      </SideBarItems>
      <UserControls>
        <SideBarButtons borderBottom={true}>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          {(username = "Placeholder")}
        </SideBarButtons>
        <br />
        <SideBarButtons>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          LogOut
        </SideBarButtons>
      </UserControls>
    </SideBarComponent>
  );
}
