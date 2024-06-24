"use client";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";

import apiClient from "@/app/api/services";
import {
  Banner,
  SideBarButtons,
  SideBarComponent,
  SideBarItems,
  UserControls,
  StyledLink,
  HamburgerButton,
} from "./styled";
import UserContext from "../UserContext/UserContex";

async function Logout() {
  try {
    await apiClient.post("/logout");
    window.location.href = "/";
  } catch (error) {
    console.log(err);
  }
}

export default function SideBar({}) {
  const [isOpen, setIsOpen] = useState(true);
  const user = useContext(UserContext);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <SideBarComponent $isOpen={isOpen}>
      <HamburgerButton onClick={toggleIsOpen} $isOpen={isOpen}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      <Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        {isOpen && <h3>PTO System</h3>}
      </Banner>
      <SideBarItems>
        <StyledLink href="/dashboard/welcome">
          <SideBarButtons $active={pathname === "/dashboard/welcome"}>
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            {isOpen && <span>Home</span>}
          </SideBarButtons>
        </StyledLink>
        <StyledLink href="/dashboard/pto">
          <SideBarButtons $active={pathname === "/dashboard/pto"}>
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            {isOpen && <span>PTO</span>}
          </SideBarButtons>
        </StyledLink>
        {user.permission_id > 0 && (
          <StyledLink href="/dashboard/employees">
            <SideBarButtons $active={pathname === "/dashboard/employees"}>
              <img src="/user.svg" alt="home svg icon" height={20} width={20} />
              {isOpen && <span>Employees</span>}
            </SideBarButtons>
          </StyledLink>
        )}
      </SideBarItems>
      <UserControls>
        <SideBarButtons $borderbottom={true}>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          {isOpen && <span>{user.full_name}</span>}
        </SideBarButtons>
        <br />
        <SideBarButtons onClick={Logout}>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          {isOpen && <span>LogOut</span>}
        </SideBarButtons>
      </UserControls>
    </SideBarComponent>
  );
}
