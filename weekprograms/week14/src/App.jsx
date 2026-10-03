import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import "./App.css";

function App() {
  const [taskCount, setTaskCount] = useState(0);

  const addTask = () => {
    setTaskCount(taskCount + 1);
  };

  return (
    <div className="app">
      <h1>Smart Task Tracker</h1>

      <h2>Total Tasks: {taskCount}</h2>

      <button onClick={addTask}>Add Task</button>

      <TaskDisplay count={taskCount} />
    </div>
  );
}

export default App;