import { useState, useEffect, useCallback } from "react";

import apiClient from "@/app/api/services";
import Button from "@/components/Button";
import EmployeeCard from "@/components/EmployeeCard";
import { EmployeePage, EmployeeCardWrapper } from "./styled";
import { PTOCardWrapper } from "../pto/styled";
import { PTOtitleWrapper } from "../pto/styled";
import PTOCard from "@/components/PTOCard";
import SelectionBanner from "@/components/SelectionBanner";
import { useRouter } from "next/navigation";

export default function EmployeeComponent() {
  const [requests, setRequests] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getEventsForApproval();
    const checkAuth = () => {
      const permission = decodedToken();
      if (permission < 2) router.push("/");
    };
    checkAuth();
  }, []);

  const decodedToken = () => {
    const token = localStorage.getItem("admin");
    if (token == null) return router.push("/");
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.permission_id;
  };

  const getEventsForApproval = useCallback(async () => {
    try {
      const result = await apiClient.get("/getEventApprove");
      const eventsGet = result.data.map((item) => ({
        id: item.id,
        title: item.full_name,
        start: new Date(item.start_date),
        end: new Date(item.end_date),
        status: item.status,
        counter: item.counter,
      }));
      setRequests((item) => (item = eventsGet));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleEventUpdate = useCallback(() => {
    getEventsForApproval();
  }, []);

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
            handleEventUpdate={handleEventUpdate}
          />
        ))}
      </EmployeeCardWrapper>
    </EmployeePage>
  );
}
