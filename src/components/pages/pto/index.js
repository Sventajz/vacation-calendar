"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PTOCard from "@/components/PTOCard";
import Button from "@/components/Button";
import CalendarModal from "@/components/RequestPtoModal";
import { useState, useEffect } from "react";
// Had to import basic CSS file so that i could override the
// styling of the calendar library
import "./calendarStyle.css";
import ReusableModal from "@/components/Modal";
import {
  PTOWrapper,
  PTOCardWrapper,
  PTOtitleWrapper,
  CalendarWrapper,
  CalendarSelection,
} from "./styled";
import apiClient from "@/app/api/services";
import SelectionBanner from "@/components/SelectionBanner";

// events array has objects that will be able to be created and deleted
// upon backend finalization

// for now all of the card PROPS are placeholders until the backend is finalized
export default function DemoApp() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(events);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents(req, res) {
    try {
      const result = await apiClient.get("/events");
      const eventsGet = result.data.map((item) => ({
        title: item.full_name,
        start: new Date(item.start_date),
        end: new Date(item.end_date),
        status: item.status,
      }));
      console.log(eventsGet);
      setEvents(eventsGet);
    } catch (error) {
      console.log(error);
    }
  }
  async function postEvent(leaveType, dateStart, dateEnd, explanation) {
    try {
      const res = await apiClient.post("/addEvent", {
        type: leaveType,
        start_date: dateStart,
        end_date: dateEnd,
        explanation: explanation,
      });
      getEvents();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PTOWrapper>
      <PTOtitleWrapper>
        <h2>Hello</h2>
        <Button onClick={openModal} text={"Request PTO"} />
        {modalOpen && (
          <ReusableModal onClose={closeModal} onSubmit={postEvent} />
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
          displayEventTime={false}
          themeSystem="standard"
        />
      </CalendarWrapper>
    </PTOWrapper>
  );
}

function renderEventContent(eventInfo) {
  const opacity = eventInfo.event.extendedProps.status === "Pending" ? 0.6 : 1;
  const backgroundColor =
    eventInfo.event.extendedProps.status === "Pending"
      ? "#5C36FF" // Original color for pending status
      : "blue"; // Original color for other statuses
  return (
    <div style={{ opacity, backgroundColor }}>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
