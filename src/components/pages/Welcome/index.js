"use client";

import Button from "../../Button";
import Link from "next/link";
import { useContext } from "react";

import { AvatarImg, WelcomeImg, WelcomeWrapper, WelcomeText } from "./styled";
import UserContext from "@/components/UserContext/UserContex";

export default function Welcome() {
  const user = useContext(UserContext);

  return (
    <WelcomeWrapper>
      <WelcomeImg>
        <AvatarImg src="/avatar.png" alt="Avatar picture" />
      </WelcomeImg>
      <WelcomeText>
        <h3>Welcome, {user.full_name}</h3>
        <p>
          We are excited to have you here. This platform is designed to
          streamline and simplify the process of managing Paid Time Off (PTO)
          for you and your team. Here's what you can expect:
        </p>
        <p>
          <b>Ease of Use</b>: Our intuitive interface makes it easy to request,
          approve, and track PTO.
        </p>
        <p>
          <b>Real-Time Updates:</b> Stay up-to-date with real-time notifications
          and calendar integration.
        </p>
        <p>
          <b>Comprehensive Reports:</b> Access detailed reports to help manage
          and plan for your team's time off.
        </p>
        <p>
          <b>Support:</b> Our support team is here to assist you with any
          questions or issues.
        </p>
        <Link href="/dashboard/pto">
          <Button text="Go to PTO" />
        </Link>
      </WelcomeText>
    </WelcomeWrapper>
  );
}
