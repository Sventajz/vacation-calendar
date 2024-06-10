import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 70px;
  width: 30%;
  background-color: #ffffff;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border-radius: 10px;
  border: 1px solid #dadfe4;
  @media (max-width: 950px) {
    width: 100%;
    height: 50px;
  }
`;

export const CardInformation = styled.div`
  font-size: 12px;
  color: #8494a0;
  margin-right: auto;
  margin-left: 10px;
  @media (max-width: 1000px) {
    font-size: 8px;
  }
`;

export const NumberStyle = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: black;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextStyle = styled.p`
  margin-right: auto;
`;
