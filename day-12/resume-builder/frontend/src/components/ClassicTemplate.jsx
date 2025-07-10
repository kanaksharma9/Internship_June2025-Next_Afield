import React from "react";
import "../App.css";

function ClassicTemplate({ resume }) {
  return (
    <div className="classic-resume">
      <div className="classic-header">
        <h1 className="classic-name">{resume.name}</h1>
        <p className="classic-contact">
          {resume.email} | {resume.phone}
        </p>
      </div>

      <div className="classic-section">
        <h2 className="classic-title">Education</h2>
        <p>{resume.education}</p>
      </div>

      <div className="classic-section">
        <h2 className="classic-title">Professional Experience</h2>
        {resume.experience.map((job, i) => (
          <div key={i} className="classic-job">
            <div className="classic-job-header">
              <strong>{job.title}</strong>, {job.company} – <span className="classic-job-location">{job.location}</span>
              <span className="classic-job-date">{job.date}</span>
            </div>
            <ul className="classic-bullets">
              {job.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="classic-section">
        <h2 className="classic-title">Skills</h2>
        <p>{resume.skills}</p>
      </div>
    </div>
  );
}

export default ClassicTemplate;