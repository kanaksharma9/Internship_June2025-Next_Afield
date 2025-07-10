const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/summary", async (req, res) => {
  const { jobs } = req.body;
  if (!jobs || !Array.isArray(jobs)) return res.status(400).json({ error: "Jobs missing" });

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const experience = [];

    for (const job of jobs) {
      const prompt = `Generate 3-5 concise resume bullet points for this experience:
Job Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Start: ${job.startDate} | End: ${job.endDate}
Description: ${job.description}`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const bullets = text.split("\n").filter((line) => line.trim().startsWith("*"))
        .map((b) => b.replace(/^\*+\s*/, ""));

      experience.push({
        title: job.title,
        company: job.company,
        location: job.location,
        date: `${job.startDate} - ${job.endDate}`,
        bullets,
      });
    }

    res.json({ experience });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).send("Server error generating bullets");
  }
});

module.exports = router;