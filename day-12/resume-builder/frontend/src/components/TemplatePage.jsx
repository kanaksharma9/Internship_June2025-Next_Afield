import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TemplatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resumeId } = location.state || {};

  const handleSelect = async (template) => {
    try {
      await fetch(`http://localhost:5000/api/resume/${resumeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ template })
      });

      navigate("/download", { state: { resumeId } });
    } catch (err) {
      console.error("Error in template selection:", err);
    }
  };

  return (
    <div className="template-page">
      <h2>Select a Resume Template</h2>
      <div className="template-gallery">
        <div className="template-card" onClick={() => handleSelect("1")}>Classic
          <img src="/images/classic.jpg" alt="Classic Template Preview" />
        </div>
        <div className="template-card" onClick={() => handleSelect("2")}>Modern
          <img src="/images/modern.jpg" alt="Modern Template Preview" />
        </div>
        <div className="template-card" onClick={() => handleSelect("3")}>Minimalist
          <img src="/images/minimalist.jpg" alt="Minimalist Template Preview" />
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;