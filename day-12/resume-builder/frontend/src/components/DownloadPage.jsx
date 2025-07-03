import React from 'react'
import { useLocation } from 'react-router-dom';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DownloadPage() {
  const location = useLocation();
  const { formData, selectedTemplate } = location.state || {};
  console.log(formData);
  console.log(selectedTemplate);

  const handleDownload = () => {
  const capture = document.querySelector("#resume");
  html2canvas(capture).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const doc = new jsPDF();
    doc.addImage(imgData, "PNG", 0, 0);
    doc.save("resume.pdf");
  });
};

  return (
    <div>
      <div id='resume' className="p-6">
      <h1 className="text-3xl font-bold mb-4">{formData.name}</h1>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <h2 className="text-xl font-semibold mt-4">Skills</h2>
      <p>{formData.skills}</p>
      <h2 className="text-xl font-semibold mt-4">Experience</h2>
      <p>{formData.experience}</p>
      <h2 className="text-xl font-semibold mt-4">Education</h2>
      <p>{formData.education}</p>

      <p className="mt-4 text-gray-500">
        Using Template ID: {selectedTemplate}
      </p>
    </div>
    <button
    onClick={handleDownload}
    className="bg-blue-600 text-white px-4 py-2 rounded mt-6">
    Download as PDF
  </button>
</div>
  )
}

export default DownloadPage
