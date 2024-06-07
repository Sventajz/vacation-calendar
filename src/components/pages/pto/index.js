"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { PTOWrapper, PTOCardWrapper } from "./styled";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";

const ptoCounter = 6;
const userName = "Tvrtko";
const events = [
  { title: "Sven Na godisnjem", start: new Date(), end: new Date(2024, 5, 15) },
  {
    title: `${userName} and ${ptoCounter} others on PTO`,
    start: new Date(2024, 5, 12),
    end: new Date(2024, 5, 24),
  },
];

export default function DemoApp() {
  return (
    <PTOWrapper>
      <h2>PTO</h2>
      <Button text={"Request PTO"} />
      <PTOCardWrapper>
        <PTOCard title={"PTO DAYS LEFT"} daysCounter={25} />
        <PTOCard title={"UPCOMING PTO"} daysCounter={2} />
        <PTOCard title={"PENDING PTO"} daysCounter={3} />
      </PTOCardWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        height={500}
        eventColor="#5C36FF"
      />
    </PTOWrapper>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
