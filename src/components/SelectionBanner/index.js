"use client";
import { StyledLink } from "../Sidebar/styled";
import { SideBarButtons } from "../Sidebar/styled";
import { usePathname } from "next/navigation";
import { SelectionBannerWrapper } from "./styled";

export default function SelectionBanner({ isOpen = true }) {
  const pathname = usePathname();

  return (
    <SelectionBannerWrapper>
      <StyledLink href="/dashboard/pto">
        <SideBarButtons $active={pathname === "/dashboard/pto"}>
          {isOpen && <span>My Calendar</span>}
        </SideBarButtons>
      </StyledLink>
      <StyledLink href="/dashboard/pto">
        <SideBarButtons $active={pathname === "/dashboard/pto"}>
          {isOpen && <span>Team Calendar</span>}
        </SideBarButtons>
      </StyledLink>
      <StyledLink href="/dashboard/employees">
        <SideBarButtons $active={pathname === "/dashboard/employees"}>
          {isOpen && <span>Employees</span>}
        </SideBarButtons>
      </StyledLink>
    </SelectionBannerWrapper>
  );
}
