import { MouseEventHandler, useState } from 'react';

import { months } from './Months';
import CalendarTable from './CalendarTable/CalendarTable';

import './Calendar.css';

export default function Calendar({ setDate }: { setDate: (value: string) => void }) {
  const now = new Date();
  const today = now.getDate();

  const [yearNumber, setYearNumber] = useState(now.getFullYear());
  const [monthNumber, setMonthNumber] = useState(now.getMonth());

  const decrementMonthNumber: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (monthNumber === 0) setYearNumber((value) => value - 1);
    setMonthNumber((value) => (value === 0 ? 11 : value - 1));
  };

  const incrementMonthNumber: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (monthNumber === 11) setYearNumber((value) => value + 1);
    setMonthNumber((value) => (value === 11 ? 0 : value + 1));
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button onClick={decrementMonthNumber} type="button" className="calendar__header-btn">
          &#9664;
        </button>
        <h5 className="calendar__header-title">{months[monthNumber].name}</h5>
        <button onClick={incrementMonthNumber} type="button" className="calendar__header-btn">
          &#9654;
        </button>
      </div>
      <div className="calendar__boundary"></div>
      <CalendarTable
        setDate={setDate}
        year={yearNumber}
        month={monthNumber}
        today={today}
        now={now}
      />
    </div>
  );
}
