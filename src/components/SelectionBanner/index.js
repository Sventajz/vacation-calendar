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
          href={"/dashboard/ptodash/mycalendar"}
          $active={pathname === "/dashboard/ptodash/mycalendar"}
        >
          My Calendar
        </StyledLink>
        <StyledLink
          href={"/dashboard/ptodash/teamcalendar"}
          $active={pathname === "/dashboard/ptodash/teamcalendar"}
        >
          Team Calendar
        </StyledLink>
        <StyledLink
          href={"/dashboard/ptodash/employees"}
          $active={pathname === "/dashboard/ptodash/employees"}
        >
          Employees
        </StyledLink>
      </SelectionLinkWrapper>
    </SelectionBannerWrapper>
  );
}
