import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage.jsx";
import TemplatePage from "./components/TemplatePage.jsx";
import DownloadPage from "./components/DownloadPage.jsx";
import LandingPage from "./components/LandingPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}
