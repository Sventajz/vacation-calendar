import styled from "styled-components";

export const SelectionBannerWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dadfe4;
  width: 100%;
  height: 40px;
  margin: auto;
  @media (max-width: 950px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const SelectionLinkWrapper = styled.div`
  width: 60%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
`;

export const SelectionLink = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
