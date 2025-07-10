import React, { useEffect, useState } from "react";
import '../App.css';

function ModernTemplate({ resumeId }) {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/resume/${resumeId}`);
        const data = await res.json();
        setResume(data);
      } catch (err) {
        console.error("Failed to fetch resume:", err);
      }
    };

    if (resumeId) fetchResume();
  }, [resumeId]);

  if (!resume) return <p>Loading resume...</p>;

  const { name, email, phone, location, skills, education, experience = [] } = resume;

  return (
    <div className="modern-template">
      <aside className="modern-sidebar">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{location}</p>
        <h3>Skills</h3>
        <ul>{skills?.split(",").map((skill, idx) => <li key={idx}>{skill.trim()}</li>)}</ul>
      </aside>

      <main className="modern-main">
        <section>
          <h2>Education</h2>
          <p>{education}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="job-block">
              <strong>{job.title}</strong> — {job.company} ({job.date})<br />
              <em>{job.location}</em>
              <ul>
                {(job.bullets || []).map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default ModernTemplate;
