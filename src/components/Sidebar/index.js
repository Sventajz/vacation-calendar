"use client";

import {
  Banner,
  SideBarButtons,
  SideBarComponent,
  SideBarItems,
  UserControls,
  StyledLink,
  HamburgerButton,
} from "./styled";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import UserContext from "../UserContext/UserContex";
export default function SideBar({ isAdmin = true }) {
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
        {isAdmin && (
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
          {isOpen && <span>{user}</span>}
        </SideBarButtons>
        <br />
        <SideBarButtons>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          {isOpen && <span>LogOut</span>}
        </SideBarButtons>
      </UserControls>
    </SideBarComponent>
  );
}
