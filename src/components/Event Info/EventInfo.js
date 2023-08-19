import React from 'react'
import "./eventinfo.css";

function EventInfo({ description, title }) {
  return (
    <div>
        <p className="event-title">{title}</p>
        <p className="event-desc">{description}</p>
    </div>
  );
}

export default EventInfo;