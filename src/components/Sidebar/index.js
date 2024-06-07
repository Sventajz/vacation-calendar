"use client";

import {
  Banner,
  SideBarButtons,
  SideBarComponent,
  SideBarItems,
  UserControls,
  StyledLink,
} from "./styled";
import { usePathname } from "next/navigation";

export default function SideBar({ username = "placeholder" }) {
  const pathname = usePathname();
  return (
    <SideBarComponent>
      <Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        <h2>PTO System</h2>
      </Banner>
      <SideBarItems>
        <StyledLink href="/dashboard/welcome">
          <SideBarButtons $active={pathname === "/dashboard/welcome"}>
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            Home
          </SideBarButtons>
        </StyledLink>

        <StyledLink href="/dashboard/pto">
          <SideBarButtons $active={pathname === "/dashboard/pto"}>
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            PTO
          </SideBarButtons>
        </StyledLink>
      </SideBarItems>
      <UserControls>
        <SideBarButtons $borderbottom={true}>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          {username}
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
