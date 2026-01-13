import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h4>React App Dashboard</h4>
      <p>This is the React remote dashboard.</p>
      <Link to="/details">View Details</Link>
    </div>
  );
}
