import React from 'react'
import { useState } from "react";
import { useLocation ,useNavigate } from 'react-router-dom';


function TemplatePage() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [selectedTemplate, setSelectedTemplate] = useState(null);
   const navigate = useNavigate();

  const templates = [
  { id: 1, name: "Template One" },
  { id: 2, name: "Template Two" },
  { id: 3, name: "Template Three" },
];
 const handleSelect = async (id) => {
  setSelectedTemplate(id);

  const aiResponse = await fetch("http://localhost:5000/api/ai/summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      skills: formData.skills,
      experience: formData.experience,
    }),
  });
  const aiData = await aiResponse.json();
  const generatedSummary = aiData.summary;

  const saveResponse = await fetch("http://localhost:5000/api/resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...formData,
      template: id,
      summary: generatedSummary,
    }),
  });

  const saved = await saveResponse.json();
  console.log("Saved:", saved);

  navigate("/download", {
    state: {
      resumeId: saved._id,
    },
  });
};

  return (
    <div>
      {templates.map((template) => (
        <div key={template.id}>
          <h1>{template.name}</h1>
          <button onClick={() => handleSelect(template.id)}>
            Use this Template
          </button>
        </div>
      ))}
    </div>
  );
}


export default TemplatePage;