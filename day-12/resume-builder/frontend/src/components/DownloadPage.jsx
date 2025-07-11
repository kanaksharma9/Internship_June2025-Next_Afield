import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf";
import "../App.css";

function DownloadPage() {
  const location = useLocation();
  const [resume, setResume] = useState(null);
  const resumeRef = useRef();

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/resume/${location.state.resumeId}`);
        const data = await res.json();
        setResume(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    if (location.state?.resumeId) fetchResume();
  }, [location.state]);

  const handleDownload = () => {
    const element = resumeRef.current;
    html2pdf().from(element).save(`${resume.name}_Resume.pdf`);
  };

  const formatText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  if (!resume) return <p>Loading...</p>;

  return (
    <div className="page-wrapper">
      <div className="resume-wrapper">
        <div className="resume-container" ref={resumeRef}>
          <div className="resume-header">
            <h1>{resume.name}</h1>
            <p>{resume.email} | {resume.phone} | {resume.location}</p>
          </div>
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-list">
              {resume.skills.split(",").map((skill, i) => <span key={i} className="skill-pill">{skill.trim()}</span>)}
            </div>
          </div>
          <div className="resume-section">
            <h2>Education</h2>
            <p>{resume.education}</p>
          </div>
          <div className="resume-section">
            <h2>Experience</h2>
            {resume.experience.map((job, i) => (
              <div key={i} className="job-block">
                <strong>{job.title}</strong> — {job.company} {job.date || ""}<br />
                <em>{job.location}</em>
                <ul>
                  {job.bullets.map((point, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: formatText(point) }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="download-btn" onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default DownloadPage;