
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalistTemplate from "./MinimalistTemplate";
import "../App.css";

function DownloadPage() {
  const location = useLocation();
  const { resumeId } = location.state || {};
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/resume/${resumeId}`);
        const data = await response.json();
        setResume(data);
      } catch (error) {
        console.error("Error fetching resume:", error);
      }
    };

    if (resumeId) fetchResume();
  }, [resumeId]);

  const handleDownload = () => {
    const capture = document.querySelector("#resume");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
      doc.save("resume.pdf");
    });
  };

  const renderTemplate = () => {
    switch (resume?.template) {
      case "1":
      case 1:
        return <ClassicTemplate resume={resume} />;
      case "2":
      case 2:
        return <ModernTemplate resume={resume} />;
      case "3":
      case 3:
        return <MinimalistTemplate resume={resume} />;
      default:
        return <ClassicTemplate resume={resume} />;
    }
  };

  if (!resume) return <div className="loading">Loading resume...</div>;

  return (
    <div className="download-container">
      <div id="resume">{renderTemplate()}</div>
      <button onClick={handleDownload} className="classic-download-btn">
        Download PDF
      </button>
    </div>
  );
}

export default DownloadPage;