"use client";
import styled from "styled-components";
import Button from "../../Button";
import Link from "next/link";
const WelcomeWrapper = styled.div`
  width: 97%;
  height: 40%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px rgba(1, 1, 1, 0.2);
  text-align: left;
`;

const WelcomeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60%;
`;

const WelcomeText = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: left;
  gap: 10px;
  margin-right: 15px;
`;

const AvatarImg = styled.img`
  height: 90%;
  margin-top: auto;
`;

export default function Welcome({ username }) {
  return (
    <WelcomeWrapper>
      <WelcomeImg>
        <AvatarImg src="/avatar.png" alt="Avatar picture" />
      </WelcomeImg>
      <WelcomeText>
        <h3>Welcome, {username}</h3>
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
