import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-background">
      <div className="landing-container">
        <h1 className="primary-landing-h1">Create Todos</h1>
        <h1 className="secondary-landing-h1">and organize tasks</h1>
        <Link to="/auth/login">
          <button className="btn">Get Started</button>
        </Link>
        <Link to="/about">
          <button className="btn-sec">About</button>
        </Link>
      </div>
    </div>
  );
}
