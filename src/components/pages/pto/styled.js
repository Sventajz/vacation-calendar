import styled from "styled-components";

export const PTOWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const PTOtitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;
export const PTOCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin: 0;
  }
`;

export const CalendarWrapper = styled.div`
  position: relative;
  padding: 3px;
  border-radius: 10px;
  height: 100%;
  background-color: #ffffff;
  margin-top: 10px;
`;
export const CalendarSelection = styled.div`
  position: absolute;
  top: 10px;
  left: 5;
  display: flex;
  gap: 5px;
  font-weight: bold;
`;
