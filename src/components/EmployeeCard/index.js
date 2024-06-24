"use client";

import {
  EmployeeCardWrapper,
  EmployeeInfo,
  DateStyles,
  StyledName,
} from "./styled";
import apiClient from "@/app/api/services";
import Button from "../Button";
export default function EmployeeCard({
  name,
  startDate,
  endDate,
  id,
  onUpdate,
  counter,
}) {
  const approveEvent = async (req, res) => {
    try {
      await apiClient.put(`/updateEvent/${id}`);
      onUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EmployeeCardWrapper>
      <EmployeeInfo>
        <StyledName>
          {name} {counter}
        </StyledName>
        <DateStyles>
          ( {startDate.toDateString()} - {endDate.toDateString()})
        </DateStyles>
      </EmployeeInfo>
      <EmployeeInfo>
        <Button text={"Accept"} onClick={approveEvent}></Button>
        <Button text={"Decline"} />
      </EmployeeInfo>
    </EmployeeCardWrapper>
  );
}
