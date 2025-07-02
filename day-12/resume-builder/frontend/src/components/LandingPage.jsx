import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-blue-300 h-screen">
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to AI Resume Builder</h1>
      </div>
      <div className="mx-20">
      <Link to="/form">
        <button className="bg-blue-500 text-white px-10 py-20 rounded">
          Build My Resume
        </button>
      </Link>
      </div>
    </div>
  );
}
