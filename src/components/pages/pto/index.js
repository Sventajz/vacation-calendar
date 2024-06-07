"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  PTOWrapper,
  PTOCardWrapper,
  PTOTopWrapper,
  CalendarWrapper,
} from "./styled";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";
import "./calendarStyle.css";
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
      <PTOTopWrapper>
        <h2>PTO</h2>
        <Button text={"Request PTO"} />
      </PTOTopWrapper>
      <PTOCardWrapper>
        <PTOCard
          title={"PTO DAYS LEFT"}
          daysCounter={25}
          text={"(from last year)"}
        />
        <PTOCard title={"UPCOMING PTO"} daysCounter={2} />
        <PTOCard title={"PENDING PTO"} daysCounter={3} />
      </PTOCardWrapper>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          eventContent={renderEventContent}
          eventColor="#5C36FF"
          themeSystem="standard"
        />
      </CalendarWrapper>
    </PTOWrapper>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
