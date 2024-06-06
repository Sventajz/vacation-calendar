import styled from "styled-components";

export const WelcomeWrapper = styled.div`
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

export const WelcomeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60%;
`;

export const WelcomeText = styled.div`
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

export const AvatarImg = styled.img`
  height: 90%;
  margin-top: auto;
`;
