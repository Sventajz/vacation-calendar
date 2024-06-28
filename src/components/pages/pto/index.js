"use client";
import "./calendarStyle.css";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import apiClient from "@/app/api/services";
import Button from "@/components/Button";
import ReusableModal from "@/components/Modal";
import { PTOWrapper, CalendarWrapper, CalendarSelection } from "./styled";

export default function DemoApp(teamCalendar) {
  const [events, setEvents] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen((value) => !value);
  };

  async function postEvent(leaveType, dateStart, dateEnd, explanation) {
    try {
      const res = await apiClient.post("/event", {
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
  async function getEvent(req, res) {
    try {
      const result = await apiClient.get("/event");
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

  return (
    <PTOWrapper>
      <CalendarWrapper>
        <CalendarSelection>
          {" "}
          <Button onClick={openModal} text={"Request PTO"} />
          {modalOpen && (
            <ReusableModal onClose={openModal} onSubmit={postEvent} />
          )}
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
    eventInfo.event.extendedProps.status === "Pending" ? "#5C36FF" : "blue";
  return (
    <div style={{ opacity, backgroundColor }}>
      <b>{eventInfo.timeText}</b>
      <p>
        {eventInfo.event.title} : {eventInfo.event.extendedProps.status}
      </p>
    </div>
  );
}
