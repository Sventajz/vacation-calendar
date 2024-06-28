import styled from "styled-components";

export const EmployeePage = styled.div`
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const EmployeeCardWrapper = styled.div`
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
  scrollbar-width: thin;
  scroll-behavior: smooth;
`;
