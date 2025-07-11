import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    education: "",
    experience: [
      { title: "", company: "", location: "", startDate: "", endDate: "", description: "" }
    ]
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleJobChange = (index, key, value) => {
    const updated = [...formData.experience];
    updated[index][key] = value;
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addJob = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { title: "", company: "", location: "", startDate: "", endDate: "", description: "" }
      ]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const aiRes = await fetch("http://localhost:5000/api/ai/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experience: formData.experience })
      });

      const generated = await aiRes.json();

      const completeFormData = {
        ...formData,
        experience: generated.experience
      };

      const res = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeFormData)
      });

      const saved = await res.json();
      navigate("/download", { state: { resumeId: saved._id } });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="form-container">
      <form className="resume-form" onSubmit={handleSubmit}>
        <h2>Build Your Resume</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="location" placeholder="Location (e.g., Delhi, India)" onChange={handleChange} required />
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="education" placeholder="Education (e.g., B.Tech CSE - University)" onChange={handleChange} />

        <h3>Experience</h3>
        {formData.experience.map((job, i) => (
          <div key={i} className="job-entry">
            <input placeholder="Job Title" value={job.title} onChange={(e) => handleJobChange(i, "title", e.target.value)} />
            <input placeholder="Company Name" value={job.company} onChange={(e) => handleJobChange(i, "company", e.target.value)} />
            <input placeholder="Location" value={job.location} onChange={(e) => handleJobChange(i, "location", e.target.value)} />
            <input placeholder="Start Date" value={job.startDate} onChange={(e) => handleJobChange(i, "startDate", e.target.value)} />
            <input placeholder="End Date" value={job.endDate} onChange={(e) => handleJobChange(i, "endDate", e.target.value)} />
            <textarea placeholder="Describe your work" value={job.description} onChange={(e) => handleJobChange(i, "description", e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={addJob} className="add-btn">+ Add Job</button>

        <button type="submit" className="submit-btn">Generate Resume</button>
      </form>
    </div>
  );
}

export default FormPage;
