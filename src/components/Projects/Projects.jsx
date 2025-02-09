import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div id='projects' className="project-page">
      <h1>Projects</h1>
      <div className="project-container">
      <div className="project-box">
  <p><span className="app-name">Pharma_log APP</span><br />
  A Flutter-based app that tracks medicine stock, availability, and expiry dates. It helps store owners manage inventory efficiently by providing timely updates on product status, ensuring smooth operations and reducing waste.</p>
</div>
<div className="project-box">
  <p><span className="app-name">Harbour Management System</span><br />
  A robust application developed using SQL and Python to manage harbour operations efficiently. The system tracks ships, docks, schedules, and staff, ensuring seamless coordination and streamlined management through a reliable database and Python integration.</p>
</div>
</div>
    </div>
  );
};

export default Projects;


