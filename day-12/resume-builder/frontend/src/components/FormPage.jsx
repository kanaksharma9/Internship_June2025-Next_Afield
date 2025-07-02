import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      summary,
      skills,
      experience,
      education,
    };
    console.log(formData);

    // Later: POST to backend or navigate to templates page
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Builder Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 block w-full"
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 block w-full"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 block w-full"
        />

        <textarea
          placeholder="Professional Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border p-2 block w-full"
        />

        <textarea
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border p-2 block w-full"
        />

        <textarea
          placeholder="Work Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border p-2 block w-full"
        />

        <textarea
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className="border p-2 block w-full"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Generate Resume
        </button>
      </form>
    </div>
  );
}
