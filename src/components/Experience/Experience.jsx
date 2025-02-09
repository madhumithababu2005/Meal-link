import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id='experience'>
    <div  className="timeline-container">
      <h2>My Educational Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div  className="timeline-content">
            <h3>High School</h3>
            <p>Prince school</p>
            <p>Completed higher education in Prince Matriculation higher secondary school at 2023</p>
            <p>Chennai, India</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Pursuing B.Tech</h3>
            <p>Sri venkateswara college of Engineering</p>
            <p>I am currenty pursuing B.Tech Information Technology at SVCE and will be graduated in 2027</p>
            <p>chennai, India</p>
          </div>
        </div>        
      </div>
    </div>
    </section>
  );
}

export default Experience;
