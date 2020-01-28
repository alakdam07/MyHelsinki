import React from "react";
import "./Events.css";
import EventList from "../EventList/EventList";

function Events() {
  return (
    <div className="Events">
      <div className="Overlay">
        <h1>Upcoming Events</h1>
      </div>

      <section className="placesSect">
        <EventList />
      </section>
    </div>
  );
}

export default Events;
