import { Link } from "react-router-dom";
import "../App.css";
import resumeGraphic from "../assets/landing-page.jpg"; 

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="text-section">
          <h1>30,000 resumes get ignored every day. <br />Will yours stand out?</h1>
          <p>
            Use AI to build a powerful, professional resume — fast.
          </p>
          <Link to="/form">
            <button className="cta-button">Build My Resume in 2 Minutes</button>
          </Link>
        </div>
        <div className="image-section">
          <img src={resumeGraphic} alt="Resume Graphic" />
        </div>
      </div>
    </div>
  );
}
