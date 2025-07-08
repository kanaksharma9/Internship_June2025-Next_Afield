import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DownloadPage() {
  const location = useLocation();
  const { resumeId } = location.state || {};

  const [resume, setResume] = useState(null);

  useEffect(() => {
    // Fetch the saved resume from your backend using the ID
    const fetchResume = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/resume/${resumeId}`);
        const data = await response.json();
        setResume(data);
      } catch (error) {
        console.error("Error fetching resume:", error);
      }
    };

    if (resumeId) {
      fetchResume();
    } else {
      console.error("No resume ID found in location state!");
    }
  }, [resumeId]);

  const handleDownload = () => {
    const capture = document.querySelector("#resume");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("resume.pdf");
    });
  };

  if (!resume) {
    return <div>Loading resume...</div>;
  }

  return (
    <div className="p-8">
      <div id="resume" className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold mb-4">{resume.name}</h1>
        <p><strong>Email:</strong> {resume.email}</p>
        <p><strong>Phone:</strong> {resume.phone}</p>

        <h2 className="text-xl font-semibold mt-4">Skills</h2>
        <p>{resume.skills}</p>

        <h2 className="text-xl font-semibold mt-4">Experience</h2>
        <p>{resume.experience}</p>

        <h2 className="text-xl font-semibold mt-4">Education</h2>
        <p>{resume.education}</p>

        <h2 className="text-xl font-semibold mt-4">Summary (AI)</h2>
        <p>{resume.summary}</p>

        <p className="mt-4 text-gray-500">
          Using Template ID: {resume.template}
        </p>
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default DownloadPage;
