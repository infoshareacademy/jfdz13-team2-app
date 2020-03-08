import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Why MOVE ON</Link>
          </li>
          <li>
            <Link to="/all-plans">All Plans</Link>
          </li>
          <li>
            <Link to="/my-plan">My Plan</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/my-profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
