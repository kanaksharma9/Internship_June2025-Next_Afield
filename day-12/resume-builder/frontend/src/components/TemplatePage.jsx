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
  const handleSelect = (id) => {
    setSelectedTemplate(id);
    console.log("Selected:", id);
    navigate("/download", { state: { formData, id } });
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