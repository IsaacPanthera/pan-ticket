import React from "react";
import "./featured-event.css";

function FeaturedEvents({ img, name, location, discount, price }) {
  return (
    <div className="featured-event-container">
      <img src={`${img}`} alt="event" />
      <div className="featured-event-card-details">
        <div className="featured-card-details">
          <p className="name">{name}</p>
          <p className="location-1">{location}</p>
          <p className="btn-div">{discount}</p>
        </div>
        <div className="pryce">
            <p className="price">{price}</p>
          </div>
      </div>
    </div>
  );
}

export default FeaturedEvents;
