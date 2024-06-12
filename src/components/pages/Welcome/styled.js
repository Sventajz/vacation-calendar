import styled from "styled-components";
import { breakPoints } from "@/app/breakpoints";
export const WelcomeWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: auto;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px rgba(1, 1, 1, 0.2);
  text-align: left;
  height: 90%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (min-width: ${breakPoints.mobile}) {
    width: 97%;
    height: 50%;
    flex-direction: row;
  }
`;

export const WelcomeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 30%;
  margin: 0;
  @media (min-width: ${breakPoints.mobile}) {
    height: 100%;
  }
`;

export const WelcomeText = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  height: 100%;
  text-align: left;
  gap: 10px;
  margin-right: 15px;
  @media (min-width: ${breakPoints.mobile}) {
    justify-content: center;
  }
`;

export const AvatarImg = styled.img`
  height: 100%;
  margin-top: auto;
  @media (min-width: ${breakPoints.mobile}) {
    height: 70%;
  }
`;
