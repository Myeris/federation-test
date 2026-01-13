import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import "./index.css";

export function mount(el: HTMLElement, data?: { user: { name: string; role: string } }) {
  const root = createRoot(el);
  
  root.render(
    <BrowserRouter basename="/react">
      <div className="remote-react-container">
        <h3 className="remote-react-title">React app (Remote)</h3>
        {data?.user && (
          <div className="react-user-data">
            Logged in as: <strong>{data.user.name}</strong> | Role: <i>{data.user.role}</i>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  return () => root.unmount();
}
