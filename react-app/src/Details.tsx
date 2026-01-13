import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div>
      <h4>React App Details</h4>
      <p>Detailed view of the React remote.</p>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}
