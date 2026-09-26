import React, { Component } from "react";
import "./StudyPlanner.css";

class StudyPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "Rani",
      subject: "",
      studyTime: "",
      tasks: ["React Basics", "TypeScript Practice", "CSS Revision"],
      completed: false,
      showPlan: false
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Add study task
  addTask = (event) => {
    event.preventDefault();

    if (this.state.subject.trim() !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.subject],
        subject: "",
        showPlan: true
      });
    }
  };

  // Mark study plan as completed
  completePlan = () => {
    this.setState({
      completed: true
    });
  };

  render() {
    return (
      <div className="planner">

        <h1>📚 Smart Study Planner</h1>

        <h2>Hello, {this.state.studentName}!</h2>

        {/* FORM */}
        <form onSubmit={this.addTask}>

          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="studyTime"
            placeholder="Study time"
            value={this.state.studyTime}
            onChange={this.handleChange}
          />

          <button type="submit">
            Add Task
          </button>

        </form>

        <hr />

        {/* LIST RENDERING */}
        <h2>My Study Tasks</h2>

        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
            </li>
          ))}
        </ul>

        {/* CONDITIONAL RENDERING */}
        {this.state.showPlan && (
          <p>
            New study task added successfully!
          </p>
        )}

        <button onClick={this.completePlan}>
          Complete Study Plan
        </button>

        {/* CONDITIONAL MESSAGE */}
        {this.state.completed ? (
          <h3>✅ Study plan completed!</h3>
        ) : (
          <h3>⏳ Study plan is in progress...</h3>
        )}

      </div>
    );
  }
}

export default StudyPlanner;