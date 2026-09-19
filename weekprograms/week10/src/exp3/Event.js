import React from "react";
import Speaker from "./Speaker";

function Event() {
  return (
    <div>
      <h2>Event: AI Innovation Challenge</h2>
      <p>Date: 25 September 2026</p>
      <p>Venue: College Auditorium</p>

      {/* Nested Speaker Component */}
      <Speaker />
    </div>
  );
}

export default Event;