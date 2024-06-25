"use client";

import apiClient from "@/app/api/services";
import Button from "../Button";
import {
  EmployeeCardWrapper,
  EmployeeInfo,
  DateStyles,
  StyledName,
} from "./styled";

export default function EmployeeCard({
  name,
  startDate,
  endDate,
  id,
  handleEventUpdate,
}) {
  const approveEvent = async () => {
    await apiClient.put(`/updateEvent/${id}`);

    handleEventUpdate();
  };

  return (
    <EmployeeCardWrapper>
      <EmployeeInfo>
        <StyledName>{name}</StyledName>
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
