import styled from "styled-components";
import { breakPoints } from "@/app/breakpoints";
export const CardWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border-radius: 10px;
  border: 1px solid #dadfe4;
  @media (min-width: ${breakPoints.mobile}) {
    height: 70px;
    width: 30%;
  }
`;

export const CardInformation = styled.div`
  font-size: 8px;
  color: #8494a0;
  margin-right: auto;
  margin-left: 10px;
  @media (min-width: ${breakPoints.mobile}) {
    font-size: 12px;
  }
`;

export const NumberStyle = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
  color: black;
  @media (min-width: ${breakPoints.mobile}) {
    font-size: 1.1rem;
  }
`;

export const TextStyle = styled.p`
  margin-right: auto;
`;
