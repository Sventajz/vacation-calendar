import EmployeeCard from "@/components/EmployeeCard";
import { EmployeePage } from "./styled";
export default function EmployeeComponent() {
  const requests = [
    { id: 1, name: "Sven", lastName: "Tajz", dates: "June 10 - June 15" },
    {
      id: 2,
      name: "Tvrtko",
      lastName: "Simunovic",
      dates: "June 16 - June 20",
    },
  ];
  return (
    <EmployeePage>
      {requests.map((request) => (
        <EmployeeCard
          key={request.id}
          name={request.name}
          lastName={request.lastName}
          dates={request.dates}
        />
      ))}
    </EmployeePage>
  );
}
