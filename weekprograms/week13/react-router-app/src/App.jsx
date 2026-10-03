import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Courses from "./Courses";
import Events from "./Events";
import Profile from "./Profile";
import LiveStatus from "./LiveStatus";

function App() {
  return (
    <Router>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/events">Events</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/live">Live Status</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/live" element={<LiveStatus />} />
      </Routes>

    </Router>
  );
}

export default App;