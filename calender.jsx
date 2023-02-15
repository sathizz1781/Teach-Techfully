import { useState } from "react";
import React from "react";
import Calendar from 'react-calendar';

function Calender() {
    const [date, setDate] = useState(new Date())

    return (
        <div className="calendar">
        <div >
          <h1>Schedule</h1>
          <div >
            <Calendar onChange={setDate} value={date}/>
          </div>
          <div >
             Selected date: {date.toDateString()}
          </div>
        </div>
        </div>
         )
}

export default Calendar