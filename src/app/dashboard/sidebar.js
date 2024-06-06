"use client";

import * as CustomStyle from "./sidebar.styled";

export default function SideBar({ username }) {
  return (
    <CustomStyle.SideBarComponent>
      <CustomStyle.Banner>
        <img src="/kantunlogo.svg" alt="Kantun Logo" />
        <h2>PTO System</h2>
      </CustomStyle.Banner>
      <CustomStyle.SideBarItems>
        <CustomStyle.SideBarButtons>
          <img src="/home.svg" alt="home svg icon" height={20} width={20} />
          Home
        </CustomStyle.SideBarButtons>
        <CustomStyle.SideBarButtons>
          <img src="/work.svg" alt="home svg icon" height={20} width={20} />
          PTO
        </CustomStyle.SideBarButtons>
      </CustomStyle.SideBarItems>
      <CustomStyle.UserControls>
        <CustomStyle.SideBarButtons>
          <img src="/user.svg" alt="home svg icon" height={20} width={20} />
          {(username = "Placeholder")}
        </CustomStyle.SideBarButtons>
        <br />
        <CustomStyle.SideBarButtons>
          <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
          LogOut
        </CustomStyle.SideBarButtons>
      </CustomStyle.UserControls>
    </CustomStyle.SideBarComponent>
  );
}
