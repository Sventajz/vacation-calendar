import EmployeeCard from "@/components/EmployeeCard";
import { EmployeePage, EmployeeCardWrapper } from "./styled";
import { PTOCardWrapper } from "../pto/styled";
import { PTOtitleWrapper } from "../pto/styled";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";

import SelectionBanner from "@/components/SelectionBanner";
export default function EmployeeComponent() {
  const requests = [
    { id: 1, name: "Sven", lastName: "Tajz", dates: "June 10 - June 15" },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Kaurinovic",
      dates: "June 16 - June 20",
    },
  ];

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
            name={request.name}
            lastName={request.lastName}
            dates={request.dates}
          />
        ))}
      </EmployeeCardWrapper>
    </EmployeePage>
  );
}
