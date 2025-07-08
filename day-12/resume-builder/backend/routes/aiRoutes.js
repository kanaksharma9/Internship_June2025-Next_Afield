const express = require("express");
const router = express.Router();

router.post("/summary", async (req, res) => {
  const { skills, experience } = req.body;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/nakamoto-yama/t5-resume-generation",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `generate resume JSON for skills: ${skills} experience: ${experience}`
        }),
      }
    );

    const data = await response.json();
    console.log(data); 

    const output = data[0]?.generated_text || data.generated_text || "No output";

    res.json({ summary: output });
  } catch (error) {
    console.error("Hugging Face API error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
