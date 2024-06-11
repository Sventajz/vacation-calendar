"use client";
import { StyledLink } from "../Sidebar/styled";
import { usePathname } from "next/navigation";
import { SelectionBannerWrapper, SelectionLinkWrapper } from "./styled";

export default function SelectionBanner({}) {
  const pathname = usePathname();
  return (
    <SelectionBannerWrapper>
      <SelectionLinkWrapper>
        <StyledLink
          href={"/dashboard/pto"}
          $active={pathname === "/dashboard/pto"}
        >
          My Calendar
        </StyledLink>
        <StyledLink
          href={"/dashboard/pto"}
          $active={pathname === "/dashboard/pto"}
        >
          Team Calendar
        </StyledLink>
        <StyledLink
          href={"/dashboard/employees"}
          $active={pathname === "/dashboard/employees"}
        >
          Employees
        </StyledLink>
      </SelectionLinkWrapper>
    </SelectionBannerWrapper>
  );
}
