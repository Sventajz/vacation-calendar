import styled from "styled-components";

export const DashboardWrapper = styled.div`
  background-color: rgb(236, 233, 233);
  color: #151a20;
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 100vh;
  width: 100%;
  @media (max-width: 950px) {
    display: flex;
  }
`;

export const MainStyle = styled.main`
  z-index: 0;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
