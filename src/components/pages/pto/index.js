"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";
import CalendarModal from "@/components/RequestPtoModal";
import { useState } from "react";
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
import SelectionBanner from "@/components/SelectionBanner";

export default function DemoApp() {
  const [events, setEvents] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePtoSubmit = (ptoRequest) => {
    // Add new event to the existing events array
    console.log(ptoRequest)
    setEvents([...events, ptoRequest]);
    closeModal();
  };

  return (
    <PTOWrapper>
      <PTOtitleWrapper>
        <h2>Hello</h2>
        <Button onClick={openModal} text={"Request PTO"} />
        {modalOpen && (
          <CalendarModal
            onClose={closeModal}
            onSubmit={(leaveType, dateStart, dateEnd, explanation) =>
              handlePtoSubmit({
                title: leaveType,
                start: new Date(dateStart),
                end: new Date(dateEnd),
                explanation: explanation,
              })
            }
          />
        )}
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
