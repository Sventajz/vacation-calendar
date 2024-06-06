"use client";
// import { useState } from "react";
// import Button from "@/components/Button";
// import Calendar from "react-calendar";
// import "./Calendar.css";

// function CalendarComponent() {
//   const [value, setValue] = useState(new Date());
//   const [dates, setDates] = useState([new Date(), new Date()]);
//   const [selectRange, setSelectRange] = useState(false);
//   const handleButtonClick = () => {
//     setSelectRange(!selectRange);
//     console.log(selectRange); // Enable range selection on button click
//   };

//   const handleDateChange = (value) => {
//     setDates(value);
//     setValue(value);
//   };

//   return (
//     <div>
//       <Button text="Request PTO" onClick={handleButtonClick} />
//       <Calendar
//         onChange={handleDateChange}
//         selectRange={selectRange}
//         value={dates}
//       />
//       {selectRange && dates.length > 1 && (
//         <div>
//           <p>Start Date: {dates[0].toDateString()}</p>
//           <p>End Date: {dates[1].toDateString()}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CalendarComponent;

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default MyCalendar;
