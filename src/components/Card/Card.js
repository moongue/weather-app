import React from 'react';
import './Card.scss';
import { iconCodes } from './iconCodes';

export default function Card({ temp, date, code, description }) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNum = new Date(Date.parse(date)).getDay();
  const day = weekdays[dayNum];

  return (
    <div className="card">
      <p className="day">{day}</p>
      <div className="main">
        <p className="temp">{Math.round(temp)}</p>
        <span className="icon-weather">
          <i className={`wi ${iconCodes[code]}`}/>
        </span>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

