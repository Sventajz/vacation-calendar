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
  }, []);

  const getEventsForApproval = useCallback(async () => {
    try {
      const result = await apiClient.get("/getEventApprove").catch((error) => {
        if (error.response.status == 403) {
          console.log("err: ", error.response.status);
          router.push("/");
        }
        if (error.response.status == 401) router.push("/dashboard/welcome");
      });

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
