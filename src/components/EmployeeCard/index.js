"use client";
import { useState } from "react";

import apiClient from "@/app/api/services";
import Button from "../Button";
import {
  EmployeeCardWrapper,
  EmployeeInfo,
  DateStyles,
  StyledName,
} from "./styled";
import ReusableModal from "../Modal";
export default function EmployeeCard({
  name,
  startDate,
  endDate,
  id,
  handleEventUpdate,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen((value) => !value);
  };

  const approveEvent = async () => {
    await apiClient.put(`/updateEvent/${id}`);

    await handleEventUpdate();
  };
  const declineEvent = async () => {
    console.log("event declined");
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
        <Button text={"Decline"} onClick={openModal} />
        {modalOpen && (
          <ReusableModal
            onClose={openModal}
            isDeclineRequest={true}
            onClick={declineEvent}
          />
        )}
      </EmployeeInfo>
    </EmployeeCardWrapper>
  );
}
