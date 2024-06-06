"use client";
import { useState } from "react";

import Calendar from "react-calendar";
import "./Calendar.css";

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  const [dates, setDates] = useState([new Date(), new Date()]);

  return (
    <div>
      <Calendar onChange={onChange} selectRange={setDates} value={value} />
    </div>
  );
}

export default CalendarComponent;
