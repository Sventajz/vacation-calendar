import { useState, useEffect } from "react";

import apiClient from "@/app/api/services";
import Button from "@/components/Button";
import EmployeeCard from "@/components/EmployeeCard";
import { EmployeePage, EmployeeCardWrapper } from "./styled";
import { PTOCardWrapper } from "../pto/styled";
import { PTOtitleWrapper } from "../pto/styled";
import PTOCard from "@/components/PTOCard";
import SelectionBanner from "@/components/SelectionBanner";

export default function EmployeeComponent() {
  const [requests, setRequests] = useState([]);
  const [eventTrigger, setEventTrigger] = useState(false);

  useEffect(() => {
    getEventsForApproval();
  }, [eventTrigger]);

  async function getEventsForApproval() {
    try {
      const user = await apiClient.get("/user");
      const userInfo = user.data[0].permission_id;
      const result = await apiClient.get("/events");
      const eventsGet = result.data
        .filter((item) => item.counter === userInfo - 1)
        .map((item) => ({
          id: item.id,
          title: item.full_name,
          start: new Date(item.start_date),
          end: new Date(item.end_date),
          status: item.status,
          counter: item.counter,
        }));
      setRequests(eventsGet);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEventUpdate() {
    setEventTrigger((prev) => !prev);
  }

  return (
    <EmployeePage>
      <PTOtitleWrapper>
        <h2>PTO</h2>
        <Button text={"Request PTO"} />
      </PTOtitleWrapper>
      <PTOCardWrapper>
        <PTOCard
          title={"PTO DAYS LEFT"}
          daysCounter={25}
          text={"(from last year)"}
        />
        <PTOCard title={"UPCOMING PTO"} daysCounter={2} />
        <PTOCard title={"PENDING PTO"} daysCounter={3} />
      </PTOCardWrapper>
      <SelectionBanner />
      <EmployeeCardWrapper>
        {requests.map((request) => (
          <EmployeeCard
            key={request.id}
            id={request.id}
            name={request.title}
            startDate={request.start}
            endDate={request.end}
            counter={request.counter}
            onUpdate={handleEventUpdate}
          />
        ))}
      </EmployeeCardWrapper>
    </EmployeePage>
  );
}
