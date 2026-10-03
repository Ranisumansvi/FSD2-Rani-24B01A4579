import React from "react";

function TaskDisplay(props) {
  return (
    <div className="task">
      <h2>Tasks Completed: {props.count}</h2>
    </div>
  );
}

export default TaskDisplay;