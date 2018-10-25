import React from "react";
import { Link } from "react-router-dom";

/**
 * Represents the Home page
 * @returns some HTML code
 */
const HomePage = () => (
  <div className="jumbotron">
    <h1>Resourcely</h1>
    <p>Resource planning tool built with React and Redux (ES6).</p>
    <Link to="about" href="about" className="btn btn-primary btn-lg">
      About
    </Link>
  </div>
);

export default HomePage;
