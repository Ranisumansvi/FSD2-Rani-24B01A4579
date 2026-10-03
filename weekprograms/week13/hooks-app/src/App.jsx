import { useState } from "react";

function App() {
  const [sessions, setSessions] = useState(0);

  const addSession = () => {
    setSessions(sessions + 1);
  };

  const removeSession = () => {
    if (sessions > 0) {
      setSessions(sessions - 1);
    }
  };

  return (
    <div className="container">
      <h1>Smart Study Tracker</h1>

      <h2>Study Sessions: {sessions}</h2>

      <button onClick={addSession}>
        Add Session
      </button>

      <button onClick={removeSession}>
        Remove Session
      </button>
    </div>
  );
}

export default App;