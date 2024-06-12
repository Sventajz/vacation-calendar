import styled from "styled-components";
import { breakPoints } from "@/app/breakpoints";
export const ButtonStyle = styled.button`
  height: 25px;
  font-size: 0.8rem;
  background-color: #5c36ff;
  border: none;
  color: #ffffff;
  width: 125px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  font-weight: bold;
  &:hover {
    background-color: #ffffff;
    transition: 0.5s;
    color: black;
    border: 1px solid #5c36ff;
  }
  @media (min-width: ${breakPoints.mobile}) {
    height: 35px;
    font-size: 1rem;
  }
`;
