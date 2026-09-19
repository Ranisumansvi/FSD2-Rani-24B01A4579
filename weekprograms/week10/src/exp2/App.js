import React from "react";

function App() {

  // JSX markup stored in a variable
  const content = (
    <div>
      <h2 style={{ color: "blue" }}>TechFest 2026</h2>

      <p>Welcome to our College Tech Fest.</p>

      <ul>
        <li>AI Workshop</li>
        <li>Web Development</li>
        <li>Robotics Exhibition</li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>TechFest Events</h1>

      {/* Rendering JSX variable */}
      {content}
    </div>
  );
}

export default App;