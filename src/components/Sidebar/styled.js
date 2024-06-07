import styled, { css } from "styled-components";
import Link from "next/link";

export const SideBarButtons = styled.li`
  font-weight: bold;
  width: 95%;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  padding-left: 5px;
  gap: 5px;
  &:hover {
    background-color: #efebff;
    transition: 0.5s;
  }
  ${({ $active }) =>
    $active &&
    css`
      background-color: #efebff;
    `}
  ${({ $borderbottom }) =>
    $borderbottom &&
    css`
      border-bottom: 1px solid #dadfe4;
      border-radius: 0px;
      padding-bottom: 5px;
    `}
`;

export const Banner = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dadfe4;
  gap: 10px;
  height: 8%;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const SideBarComponent = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px rgba(1, 1, 1, 0.1);
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const UserControls = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  height: 120px;
  width: 100%;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const SideBarItems = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const DashboardComponent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;
