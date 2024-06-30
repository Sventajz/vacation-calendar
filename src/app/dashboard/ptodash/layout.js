"use client";
import { Inter } from "next/font/google";
import SelectionBanner from "@/components/SelectionBanner";
import { PTOCardWrapper } from "@/components/pages/pto/styled";
import PTOCard from "@/components/PTOCard";
import { MainStyle } from "../styled";
import UserContext from "@/components/UserContext/UserContex";
import { useContext } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const user = useContext(UserContext);
  const content = (
    <MainStyle>
      <PTOCardWrapper>
        <PTOCard
          title={"PTO DAYS LEFT"}
          daysCounter={user.vacation_days}
          text={"(from last year)"}
        />
        <PTOCard title={"UPCOMING PTO"} daysCounter={2} />
        <PTOCard title={"PENDING PTO"} daysCounter={3} />
      </PTOCardWrapper>
      <SelectionBanner />
      {children}
    </MainStyle>
  );

  return <div>{content}</div>;
}
