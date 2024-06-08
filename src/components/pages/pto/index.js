"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";

// Had to import basic CSS file so that i could override the
// styling of the calendar library
import "./calendarStyle.css";

import {
  PTOWrapper,
  PTOCardWrapper,
  PTOtitleWrapper,
  CalendarWrapper,
  CalendarSelection,
} from "./styled";

const events = [
  {
    title: "Klara Na godisnjem",
    start: new Date(),
    end: new Date(2028, 5, 15),
  },
  {
    title: `Tvrtko and 6 others on PTO`,
    start: new Date(2024, 5, 12),
    end: new Date(2024, 5, 24),
  },
];

export default function DemoApp() {
  return (
    <PTOWrapper>
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
      <CalendarWrapper>
        <CalendarSelection>
          <p>Placeholder text</p>
          <p>Placeholder text</p>
        </CalendarSelection>
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
