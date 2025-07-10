import React from "react";
import "../App.css";

function MinimalistTemplate({ resume }) {
  return (
    <div className="minimalist-resume">
      <header className="minimalist-header">
        <h1>{resume.name}</h1>
        <p>{resume.email} | {resume.phone}</p>
      </header>
      <section>
        <h2>Education</h2>
        <p>{resume.education}</p>
      </section>
      <section>
        <h2>Experience</h2>
        {resume.experience.map((job, i) => (
          <div key={i} className="minimalist-job">
            <div><strong>{job.title}</strong> at {job.company} — {job.date}</div>
            <ul>
              {job.bullets.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <p>{resume.skills}</p>
      </section>
    </div>
  );
}

export default MinimalistTemplate;