import React from "react";
import "./featured-event.css";

function FeaturedEvents({ img, discount, name, location, price }) {
  return (
    <div className="featured-event-container">
      <img src={`${img}`} alt="event" />
      <div className="featured-event-card-details">
        <div className="featured-card-details">
          <p className="name">
            {name}</p>
          <p className="price">
            {price}</p>
        </div>
        <p className="location-1">
          {location}</p>
        <button className="discount">
          {discount}</button>

      </div>
    </div>
  );
}

export default FeaturedEvents;