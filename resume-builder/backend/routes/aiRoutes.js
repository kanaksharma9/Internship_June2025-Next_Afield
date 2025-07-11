const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/summary", async (req, res) => {
  try {
    const { experience } = req.body;

    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

    const updatedExperience = [];

    for (const job of experience) {
      const prompt = `
      Convert the following job experience into strong resume bullet points. Use concise, impactful language.
      Title: ${job.title}
      Company: ${job.company}
      Location: ${job.location}
      Start Date: ${job.startDate}
      End Date: ${job.endDate}
      Description: ${job.description}

      Respond with 3–5 bullet points.
      `;

      const result = await model.generateContent(prompt);
      const text = await result.response.text();

      const bullets = text
        .split("\n")
        .filter((line) => line.trim().startsWith("*") || line.trim().startsWith("-"))
        .map((line) => line.replace(/^[-*]\s*/, "").trim());

      updatedExperience.push({
        ...job,
        bullets,
        date: `${job.startDate} - ${job.endDate}`
      });
    }

    res.json({ experience: updatedExperience });
  } catch (error) {
    console.error("AI summary error:", error);
    res.status(500).send("AI summary failed");
  }
});

module.exports = router;
