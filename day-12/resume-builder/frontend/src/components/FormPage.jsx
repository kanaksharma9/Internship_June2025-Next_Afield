import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    education: "",
    template: "1",
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
      const res = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const saved = await res.json();
      navigate("/templates", { state: { resumeId: saved._id } });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
      <textarea name="education" placeholder="Education" onChange={handleChange} />

      <h3>Experience</h3>
      {formData.experience.map((job, i) => (
        <div key={i}>
          <input placeholder="Title" value={job.title} onChange={(e) => handleJobChange(i, "title", e.target.value)} />
          <input placeholder="Company" value={job.company} onChange={(e) => handleJobChange(i, "company", e.target.value)} />
          <input placeholder="Location" value={job.location} onChange={(e) => handleJobChange(i, "location", e.target.value)} />
          <input placeholder="Start Date" value={job.startDate} onChange={(e) => handleJobChange(i, "startDate", e.target.value)} />
          <input placeholder="End Date" value={job.endDate} onChange={(e) => handleJobChange(i, "endDate", e.target.value)} />
          <textarea placeholder="Describe work" value={job.description} onChange={(e) => handleJobChange(i, "description", e.target.value)} />
        </div>
      ))}
      <button type="button" onClick={addJob}>+ Add Job</button>

      <select name="template" value={formData.template} onChange={handleChange}>
        <option value="1">Classic</option>
        <option value="2">Modern</option>
        <option value="3">Minimalist</option>
      </select>

      <button type="submit">Continue</button>
    </form>
  );
}

export default FormPage;