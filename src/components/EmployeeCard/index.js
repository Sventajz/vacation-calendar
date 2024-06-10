"use client";

import {
  EmployeeCardWrapper,
  EmployeeInfo,
  DateStyles,
  StyledName,
} from "./styled";
import Button from "../Button";
export default function EmployeeCard({ name, lastName, dates }) {
  return (
    <EmployeeCardWrapper>
      <EmployeeInfo>
        <StyledName>
          {name} {lastName}
        </StyledName>
        <DateStyles>({dates})</DateStyles>
      </EmployeeInfo>
      <EmployeeInfo>
        <Button text={"Accept"}></Button>
        <Button text={"Decline"} />
      </EmployeeInfo>
    </EmployeeCardWrapper>
  );
}
