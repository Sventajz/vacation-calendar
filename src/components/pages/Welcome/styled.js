import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  width: 97%;
  height: 50%;
  background-color: #ffffff;
  display: flex;
  margin: auto;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px rgba(1, 1, 1, 0.2);
  text-align: left;

  @media (max-width: 950px) {
    height: 90vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const WelcomeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media (max-width: 950px) {
    height: 30%;
    margin: 0;
  }
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
  @media (max-width: 950px) {
    justify-content: left;
  }
`;

export const AvatarImg = styled.img`
  height: 70%;
  margin-top: auto;
  @media (max-width: 950px) {
    height: 100%;
  }
`;
